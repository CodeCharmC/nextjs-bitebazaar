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


export { users, cuisines };