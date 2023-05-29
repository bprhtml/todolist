import { createForm } from "./form";
import { Task, taskArray } from "./task";

const content = document.querySelector('.content');
const formHolder = document.querySelector('.form-holder')


export const addBtn = document.createElement('button');
addBtn.classList.add('add-task-btn');
addBtn.innerHTML = "Add task!";
content.appendChild(addBtn);

addBtn.addEventListener('click', () => {
    formHolder.style.visibility = "visible";
})

content.style.backgroundColor = 'red';
content.style.width = "100vw";
content.style.height = "90vh";

createForm();