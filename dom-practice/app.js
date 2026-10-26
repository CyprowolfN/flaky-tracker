const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

// click eventListener to create li elements
button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  // console.log(li)

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  
  // console.log(deleteButton)

  // click eventListener to remove li element
  deleteButton.addEventListener("click", () => {
    li.remove();
  })



  ul.append(li)
  li.append(deleteButton)
  // console.log(li)
});
