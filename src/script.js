const btn = document.querySelector(".btn");
const contentContainer = document.querySelector(".content-container");

function loadStorage() {
  contentContainer.innerHTML = localStorage.getItem("notes");
}
loadStorage();

function updateStorage() {
  localStorage.setItem("notes", contentContainer.innerHTML);
}

btn.addEventListener("click", () => {
  const inputBox = document.createElement("p");
  const span = document.createElement("span");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  span.className = "fa fa-trash";
  span.setAttribute("contenteditable", "false");
  contentContainer.appendChild(inputBox).appendChild(span);
});
contentContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    const notes = document.querySelectorAll(".input-box");
    notes.forEach((note) => {
      note.onkeyup = function () {
        updateStorage();
      };
    });
  }
});