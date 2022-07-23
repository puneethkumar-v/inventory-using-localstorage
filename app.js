// Getting data from local storage and inserting into items array
let items = JSON.parse(localStorage.getItem("data"));

// Adding Item
const addItem = (name, price, quantity, description) => {
  items.unshift({ name, price, quantity, description });
  localStorage.setItem("data", JSON.stringify(items));
  return { name, price, quantity, description };
};

// Creating Item
const createItem = ({ name, price, quantity, description }) => {
  const itemsList = ["name", "price", "quantity", "description"];
  // const data = JSON.parse(localStorage.getItem("data"));
  // console.log(data);
  const itemElements = itemsList.map((item) => document.createElement("div"));
  itemElements[0].innerHTML = `Item Name: ${name}</br>`;
  itemElements[1].innerHTML = `Item Price: ${price}</br>`;
  itemElements[2].innerHTML = `Quantity: ${quantity}</br>`;
  itemElements[3].innerHTML = `Description: ${description}</br>`;
  const mainDiv = document.createElement("div");
  mainDiv.style.marginBottom = "20px";
  mainDiv.setAttribute("id", "mainDiv");
  itemElements.map((item) => mainDiv.appendChild(item));
  document.body.appendChild(mainDiv);
};

items.forEach(createItem);

const form = document.getElementById("form");

// Adding Items when the form is submitted
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newItem = addItem(
    e.target[0].value,
    e.target[1].value,
    e.target[2].value,
    e.target[3].value
  );
  createItem(newItem);
  for (let i = 0; i < e.target.length - 1; i++) {
    e.target[i].value = "";
  }
});
