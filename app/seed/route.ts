import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users, cuisines, offers, vendors, reviews, orders, payments } from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      phone TEXT,
      address TEXT,
      saved_addresses JSONB
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password, phone, address, saved_addresses)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.phone}, ${user.address}, ${JSON.stringify(user.savedAddresses)})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

async function seedCuisines() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS cuisines (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      image_url TEXT NOT NULL
    );
  `;

  const insertedCuisines = await Promise.all(
    cuisines.map((cuisine) =>
      client.sql`
        INSERT INTO cuisines (id, title, image_url)
        VALUES (${cuisine.id}, ${cuisine.title}, ${cuisine.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedCuisines;
}

async function seedVendors() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS vendors (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      type VARCHAR(255) NOT NULL,
      cuisine INT[],
      is_open BOOLEAN,
      accepts_vouchers BOOLEAN,
      offers INT[],
      image_url TEXT,
      menu JSONB,
      rating FLOAT,
      reviews INT,
      location JSONB,
      delivery_fee INT,
      delivery_time INT
    );
  `;

  const insertedVendors = await Promise.all(
    vendors.map((vendor) =>
      client.sql`
        INSERT INTO vendors (id, name, type, cuisine, is_open, accepts_vouchers, offers, image_url, menu, rating, reviews, location, delivery_fee, delivery_time)
        VALUES (${vendor.id}, ${vendor.name}, ${vendor.type}, ${JSON.stringify(vendor.cuisine)}, ${vendor.isOpen}, ${vendor.acceptsVouchers}, ${JSON.stringify(vendor.offers)}, ${vendor.image_url}, ${JSON.stringify(vendor.menu)}, ${vendor.rating}, ${vendor.reviews}, ${JSON.stringify(vendor.location)}, ${vendor.deliveryFee}, ${vendor.deliveryTime})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedVendors;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedCuisines();
    await seedVendors();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error: error }, { status: 500 });
  }
}
