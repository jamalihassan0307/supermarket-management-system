function saveData() {
  localStorage.setItem("udhaarProducts", JSON.stringify(products));
  localStorage.setItem("udhaarOrders", JSON.stringify(orders));
  localStorage.setItem("udhaarUsers", JSON.stringify(users));
}

function loadData() {
  const savedProducts = localStorage.getItem("udhaarProducts");
  const savedOrders = localStorage.getItem("udhaarOrders");
  const savedUsers = localStorage.getItem("udhaarUsers");

  if (savedProducts) products = JSON.parse(savedProducts);
  if (savedOrders) orders = JSON.parse(savedOrders);
  if (savedUsers) {
    users = JSON.parse(savedUsers);
  } else {
    users = [
      {
        email: "admin@gmail.com",
        password: "admin",
      },
    ];
    saveData();
  }
}

loadData();
