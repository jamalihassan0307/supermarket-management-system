// Initialize arrays
let products = [];
let orders = [];
let users = [
  {
    email: "admin@gmail.com",
    password: "admin",
  },
];

// Function to generate new product ID
function generateProductId() {
  return products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
}

// Add IDs to products
products = products.map((product, index) => ({
  ...product,
  id: index + 1,
}));
