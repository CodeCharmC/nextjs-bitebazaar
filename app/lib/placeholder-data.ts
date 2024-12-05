const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Moni Akhtar',
    email: 'moni@example.com',
    password: '123456', // In production, passwords should be hashed!
    phone: '+880123456789',
    address: '123 Main Street, Dhaka',
    savedAddresses: [
      { label: 'Home', address: '123 Main Street, Dhaka', lat: 23.8103, lng: 90.4125, isDefault: true },
      { label: 'Office', address: '456 Work Road, Dhaka', lat: 23.8500, lng: 90.4000 }
    ]
  }
];
 
const cuisines = [
  { id: 1, title: 'Asian', image_url: '/cuisines/asian.png' },
  { id: 2, title: 'Bakery', image_url: '/cuisines/bakery.png' },
  { id: 3, title: 'Bangladeshi', image_url: '/cuisines/bangladeshi.png' },
  { id: 4, title: 'Bengali', image_url: '/cuisines/bengali.png' },
  { id: 5, title: 'Biryani', image_url: '/cuisines/biryani.png' },
  { id: 6, title: 'Breakfast', image_url: '/cuisines/breakfast.png' },
  { id: 7, title: 'Burgers', image_url: '/cuisines/burgers.png' },
  { id: 8, title: 'Cafe', image_url: '/cuisines/cafe.png' },
  { id: 9, title: 'Chicken', image_url: '/cuisines/chicken.png' },
  { id: 10, title: 'Chinese', image_url: '/cuisines/chinese.png' },
  { id: 11, title: 'Curry', image_url: '/cuisines/curry.png' },
  { id: 12, title: 'Dessert', image_url: '/cuisines/dessert.png' },
  { id: 13, title: 'Fast Food', image_url: '/cuisines/fast-food.png' },
  { id: 14, title: 'Fish', image_url: '/cuisines/fish.png' },
  { id: 15, title: 'Haleem', image_url: '/cuisines/haleem.png' },
  { id: 16, title: 'Healthy', image_url: '/cuisines/healthy.png' },
  { id: 17, title: 'Indian', image_url: '/cuisines/indian.png' },
  { id: 18, title: 'Italian', image_url: '/cuisines/italian.png' },
  { id: 19, title: 'Mediterranean', image_url: '/cuisines/mediterranean.png' },
  { id: 20, title: 'Noodles', image_url: '/cuisines/noodles.png' },
  { id: 21, title: 'Pizza', image_url: '/cuisines/pizza.png' },
  { id: 22, title: 'Seafood', image_url: '/cuisines/seafood.png' },
  { id: 23, title: 'Sweets', image_url: '/cuisines/sweets.png' },
  { id: 24, title: 'Vegetarian', image_url: '/cuisines/vegetarian.png' }
];

const offers = [
  { id: 1, title: '20% off on all orders', image_url: '/offers/offer.png', startDate: '2024-12-01', endDate: '2024-12-31'},
  { id: 2, title: 'Free dessert with main course', image_url: '/offers/offer.png', startDate: '2024-12-11', endDate: '2024-12-31'},
  { id: 3, title: 'Buy 1 Get 1 Free on selected items', image_url: '/offers/offer.png', startDate: '2024-12-01', endDate: '2024-12-20' },
  { id: 4, title: 'Free delivery on orders over 500 BDT', image_url: '/offers/offer.png' },
  { id: 5, title: '10% cashback with selected payment methods', image_url: '/offers/offer.png' },
  { id: 6, title: 'Combo Meals starting at 199 BDT', image_url: '/offers/offer.png' },
  { id: 7, title: 'Special discounts for first-time users', image_url: '/offers/offer.png' },
  { id: 8, title: '50% off on beverages', image_url: '/offers/offer.png' },
  { id: 9, title: 'Festive season special deals', image_url: '/offers/offer.png' },
  { id: 10, title: 'Exclusive discounts for premium members', image_url: '/offers/offer.png' }
];

const vendors = [
  {
    id: '2EFA58C9-8A61-4D1A-8DBA-3EF3DB1F41B8',
    name: 'Spicy Delight',
    type: 'Restaurant',
    cuisine: [1, 2], // Italian, Bengali
    isOpen: true,
    acceptsVouchers: true,
    offers: [1, 2],
    image_url: '/vendors/vendor-placeholder.png',
    menu: [
      { id: 101, title: 'Plain Rice', image_url: '/menus/menu-placeholder.png', price: 50, description: 'Perfectly cooked plain rice.' },
      { id: 102, title: 'Fish Curry', image_url: '/menus/menu-placeholder.png', price: 120, description: 'Traditional Bengali fish curry.' },
    ],
    rating: 4.6,
    reviews: 120,
    location: { lat: 23.8103, lng: 90.4125, address: '23 Gulshan Ave, Dhaka' },
    deliveryFee: 30,
    deliveryTime: 30
  },
  {
    id: '65DA89C7-FA8F-4BA8-8D3B-6F2D44CF8C44',
    name: 'Homely Bites',
    type: 'Home Chef',
    cuisine: [2, 8], // Bengali, Dumplings
    isOpen: true,
    acceptsVouchers: false,
    offers: [3],
    image_url: '/vendors/vendor-placeholder.png',
    menu: [
      { id: 201, title: 'Panta Bhat', image_url: '/menus/menu-placeholder.png', price: 60, description: 'Fermented rice with condiments.' },
      { id: 202, title: 'Chicken Dumpling', image_url: '/menus/menu-placeholder.png', price: 100, description: 'Juicy chicken dumplings.' },
    ],
    rating: 4.8,
    reviews: 80,
    location: { lat: 23.8235, lng: 90.3657, address: '5/3 Banani, Dhaka' },
    deliveryFee: 25,
    deliveryTime: 25
  },
  {
    id: '9FCDAB79-37B4-48B9-9C44-DCF2D097F77A',
    name: 'Pizza Paradise',
    type: 'Restaurant',
    cuisine: [1, 34], // Italian, Pizza
    isOpen: true,
    acceptsVouchers: true,
    offers: [4, 5],
    image_url: '/vendors/vendor-placeholder.png',
    menu: [
      { id: 301, title: 'Margherita Pizza', image_url: '/menus/menu-placeholder.png', price: 250, description: 'Classic Margherita pizza.' },
      { id: 302, title: 'Pepperoni Pizza', image_url: '/menus/menu-placeholder.png', price: 350, description: 'Loaded with pepperoni.' },
    ],
    rating: 4.7,
    reviews: 200,
    location: { lat: 23.7500, lng: 90.3910, address: 'House 12, Dhanmondi 32, Dhaka' },
    deliveryFee: 35,
    deliveryTime: 40
  },
  {
    id: '8D9F0C3F-419A-46D4-BF50-6CE7E7B52D1F',
    name: 'Thai Express',
    type: 'Restaurant',
    cuisine: [40], // Thai
    isOpen: false,
    acceptsVouchers: false,
    offers: [6],
    image_url: '/vendors/vendor-placeholder.png',
    menu: [
      { id: 401, title: 'Pad Thai', image_url: '/menus/menu-placeholder.png', price: 300, description: 'Authentic Thai noodle dish.' },
      { id: 402, title: 'Tom Yum Soup', image_url: '/menus/menu-placeholder.png', price: 180, description: 'Spicy and sour Thai soup.' },
    ],
    rating: 4.5,
    reviews: 150,
    location: { lat: 23.7946, lng: 90.4042, address: 'Sector 11, Uttara, Dhaka' },
    deliveryFee: 40,
    deliveryTime: 35
  },
  {
    id: '6E90D689-2653-46BA-8490-B8D86AB89A56',
    name: 'Sweet Haven',
    type: 'Home Chef',
    cuisine: [42], // Sweets
    isOpen: true,
    acceptsVouchers: true,
    offers: [7, 8],
    image_url: '/vendors/vendor-placeholder.png',
    menu: [
      { id: 501, title: 'Rasgulla', image_url: '/menus/menu-placeholder.png', price: 20, description: 'Soft and spongy rasgullas.' },
      { id: 502, title: 'Gulab Jamun', image_url: '/menus/menu-placeholder.png', price: 25, description: 'Sweet and syrupy Gulab Jamun.' },
    ],
    rating: 4.9,
    reviews: 95,
    location: { lat: 23.7808, lng: 90.4075, address: 'Bashundhara R/A, Dhaka' },
    deliveryFee: 20,
    deliveryTime: 20
  },
  {
    id: '4CF7D3A8-833A-42B6-8D0A-7276A5713AC4',
    name: 'Mediterranean Delights',
    type: 'Restaurant',
    cuisine: [24, 35], // Mediterranean, Sandwiches
    isOpen: true,
    acceptsVouchers: false,
    offers: [9],
    image_url: '/vendors/vendor-placeholder.png',
    menu: [
      { id: 601, title: 'Falafel Wrap', image_url: '/menus/menu-placeholder.png', price: 220, description: 'Delicious falafel in pita bread.' },
      { id: 602, title: 'Hummus Platter', image_url: '/menus/menu-placeholder.png', price: 150, description: 'Classic hummus with sides.' },
    ],
    rating: 4.4,
    reviews: 130,
    location: { lat: 23.8151, lng: 90.4116, address: 'Road 11, Banani, Dhaka' },
    deliveryFee: 30,
    deliveryTime: 30
  },
  {
    id: 'B6A7F4EC-B2E5-4BB5-B714-5A1F6C45E34E',
    name: 'Juice Junction',
    type: 'Home Chef',
    cuisine: [26], // Juice Corner
    isOpen: true,
    acceptsVouchers: true,
    offers: [10],
    image_url: '/vendors/vendor-placeholder.png',
    menu: [
      { id: 701, title: 'Mango Smoothie', image_url: '/menus/menu-placeholder.png', price: 120, description: 'Fresh mango smoothie.' },
      { id: 702, title: 'Detox Green Juice', image_url: '/menus/menu-placeholder.png', price: 100, description: 'Healthy green detox juice.' },
    ],
    rating: 4.7,
    reviews: 110,
    location: { lat: 23.7634, lng: 90.3981, address: 'Road 15, Mohammadpur, Dhaka' },
    deliveryFee: 25,
    deliveryTime: 25
  },
];

const reviews = [
  { id: 1, vendor_id: vendors[0].id, user_id: users[0].id, rating: 4.8, comment: 'Amazing food!' },
  { id: 2, vendor_id: vendors[1].id, user_id: users[0].id, rating: 4.7, comment: 'Good food' },
  { id: 3, vendor_id: vendors[2].id, user_id: users[0].id, rating: 4.9, comment: 'Good food' },
  { id: 4, vendor_id: vendors[3].id, user_id: users[0].id, rating: 4.6, comment: 'Good food' },
  { id: 5, vendor_id: vendors[4].id, user_id: users[0].id, rating: 4.5, comment: 'Good food' },
  { id: 6, vendor_id: vendors[5].id, user_id: users[0].id, rating: 4.4, comment: 'Good food' },
  { id: 7, vendor_id: vendors[6].id, user_id: users[0].id, rating: 4.3, comment: 'Good food' },
];

const orders = [
  {
    id: 1,
    user_id: users[0].id,
    vendor_id: vendors[0].id,
    items: [
      { menu_id: 101, quantity: 2 },
      { menu_id: 102, quantity: 1 }
    ],
    totalAmount: 1100,
    deliveryAddress: users[0].savedAddresses[0].address,
    status: 'Pending',
    date: '2024-12-05'
  }
];
export { users, cuisines, offers, vendors, reviews, orders };