let products = [];
let orders = [];
let users = [
  {
    email: "admin@gmail.com",
    password: "admin",
  },
];

// If you don't have IDs in your products, add them
let products = products.map((product, index) => ({
  ...product,
  id: index + 1,
}));
