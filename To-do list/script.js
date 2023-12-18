"use strict";
// creating variables for different id's.
let AddToDoButton = document.querySelector("#addToDo");
let ToDoContainor = document.querySelector("#todocontainor");
let InputField = document.querySelector("#InputField");

// apply addEventListener method to 'plus' button.
AddToDoButton.addEventListener("click", function () {
  // creating a paragraph every time after clicking button..
  let paragarph = document.createElement("p");
  // apply styling on paragraph
  paragarph.classList.add("paragram-styling");
  // setting inner text of paragraph
  paragarph.innerText = InputField.value;
  // append paragraph to our containor.
  ToDoContainor.appendChild(paragarph);
  // erasing the text from input.
  InputField.value = "";
  // to mark text as check.
  paragarph.addEventListener("click", function () {
    paragarph.style.textDecoration = "line-through";
    // to remove text.
    paragarph.addEventListener("dblclick", function () {
      ToDoContainor.removeChild(paragarph);
    });
  });
});
