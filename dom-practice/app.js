const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  ul.append(li)
});
