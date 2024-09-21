const btn = document.querySelector(".btn");
const contentContainer = document.querySelector(".content-container");

function loadStorage() {
  contentContainer.innerHTML = localStorage.getItem("notes");
}
loadStorage();

function updateStorage() {
  localStorage.setItem("notes", contentContainer.innerHTML);
}

btn.addEventListener('click', ()=>{
  const div = document.createElement('div');
  const inputBox = document.createElement('p');
  const span = document.createElement('span');
  div.className = 'inner-container';
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true');
  span.className = 'fa fa-trash';
  contentContainer.appendChild(div);
  div.appendChild(inputBox);
  div.appendChild(span);
});
contentContainer.addEventListener('click', (evt)=>{
  if(evt.target.tagName === 'SPAN'){
    evt.target.parentElement.remove();
    updateStorage();
  }
  else if(evt.target.tagName === 'P'){
    const notes = document.querySelectorAll('.input-box');
    notes.forEach(note =>{
      note.onkeyup = () =>{
        updateStorage();
      }
    })
  }
});