import { createForm } from "./form";
import { Task, taskArray } from "./task";
import { loadHome } from "./home";

const content = document.querySelector('.content');
const formHolder = document.querySelector('.form-holder');



export const addBtn = document.querySelector('.add-task-btn');


loadHome(getTaskArrayFromLocalStorage());
function getTaskArrayFromLocalStorage() {
    const taskArrayString = localStorage.getItem('taskArray');
    return taskArrayString ? JSON.parse(taskArrayString) : [];
  }

addBtn.addEventListener('click', () => {
    formHolder.style.visibility = "visible";
    content.style.filter = "blur(0.3vh)";
    createForm();
})

document.addEventListener("DOMContentLoaded", () => {
    const overviewBtn = document.querySelector('.overview-button');
    overviewBtn.addEventListener('click', () => {
        formHolder.style.visibility = "hidden";
        loadHome(taskArray);
    })
})