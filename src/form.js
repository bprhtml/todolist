import { Task, taskArray } from "./task";
const content = document.querySelector('.form-holder');

export function createForm() {
    const form = document.createElement('form');
    form.classList.add('form');

    form.style.width = "50vw";
    const name = document.createElement('input');
    const desc = document.createElement('input');
    const date = document.createElement('input');
    const prio = document.createElement('input');
    const prlb = document.createElement('label');
    name.placeholder = "Task...";
    desc.placeholder = "Description...";
    date.type = "date";
    prio.type = "checkbox";
    prio.style.marginInline = "3vw";
    prio.id = "prCh";
    prlb.innerHTML = "Prioritise?";
    prlb.htmlFor = "prCh";

    [name, desc, date].forEach(input => {
        input.classList.add("form-input"); 
        form.appendChild(input);
    });

    const checkboxCont = document.createElement('div');
    checkboxCont.classList.add('form-checkbox');
    form.appendChild(checkboxCont);
    checkboxCont.appendChild(prlb);
    checkboxCont.appendChild(prio);



    const btnCont = document.createElement('div');
    btnCont.classList.add("form-buttons")
    form.appendChild(btnCont)

    const submit = document.createElement('button');
    submit.innerHTML = "Add task!";
    submit.classList.add("submit-button");
    btnCont.appendChild(submit);

    const cancel = document.createElement('button');
    cancel.innerHTML= "Cancel";
    cancel.classList.add("submit-button");
    btnCont.appendChild(cancel);

    content.appendChild(form);

    cancel.addEventListener('click', (e) => {
        e.preventDefault()
        content.style.visibility = 'hidden';
    })

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const task = new Task(name.value, desc.value, date.value, prio.value);
        taskArray.push(task);
        console.log(taskArray)
        content.style.visibility = 'hidden'
    }
    )
}