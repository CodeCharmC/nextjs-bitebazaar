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

export { users };