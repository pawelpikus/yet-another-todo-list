/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
const button = document.getElementById('enter');
const input = document.getElementById('userinput');
const uls = document.querySelectorAll('ul');
const clearButton = document.getElementById('clearList');

function clearElement() {
  this.parentNode.remove();
}

function moveElement() {
  const liNode = this.parentNode;
  const ulNode = liNode.parentNode;
  const fromUl = ulNode.getAttribute('id');
  const toUl = fromUl === 'high' ? document.getElementById('low')
    : document.getElementById('high');
  toUl.appendChild(liNode);
}

function clearBtnElement() {
  const clrBtns = document.querySelectorAll('.clrBtn');
  for (const btn of clrBtns) {
    btn.addEventListener('click', clearElement);
  }
}

function moveBtnElement() {
  const moveBtns = document.querySelectorAll('.moveBtn');
  for (const btn of moveBtns) {
    btn.addEventListener('click', moveElement);
  }
}

clearBtnElement();
moveBtnElement();

function inputLength() {
  return input.value.length;
}

function createListElement() {
  // li element
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const inputText = document.createTextNode(input.value);
  li.appendChild(inputText);
  ul.appendChild(li);
  li.classList.add('li-item');
  input.value = '';

  // move button
  const moveButton = document.createElement('button');
  moveButton.innerHTML = '<img src="./img/btns/change.png" alt="delete">';
  moveButton.classList.add('moveBtn');
  li.appendChild(moveButton);

  // delbutton
  const delButton = document.createElement('button');
  delButton.innerHTML = '<img src="./img/btns/del.png" alt="delete">';
  delButton.classList.add('clrBtn');
  li.appendChild(delButton);

  // listeners for btns
  clearBtnElement();
  moveBtnElement();
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleDone(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('done');
  }
}

function clearList() {
  [...uls].forEach((element) => {
    element.innerHTML = '';
  });
}

button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
[...uls].forEach((element) => {
  element.addEventListener('click', toggleDone);
});
clearButton.addEventListener('click', clearList);
