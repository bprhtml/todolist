import { Task, taskArray } from "./task";
import { loadHome } from "./home";
const content = document.querySelector('.form-holder');

export function createForm() {
    const form = document.createElement('form');
    form.classList.add('form', 'form-open');

    form.style.width = "50vw";
    const name = document.createElement('input');
    const desc = document.createElement('textarea');
    desc.rows = 6;
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
    submit.disabled = true;
    submit.classList.add("submit-button");
    btnCont.appendChild(submit);

    const cancel = document.createElement('button');
    cancel.innerHTML= "Cancel";
    cancel.classList.add("submit-button");
    btnCont.appendChild(cancel);

    content.appendChild(form);

    form.addEventListener('input', () => {
        validateForm(submit, name, desc, date)
    });

    cancel.addEventListener('click', (e) => {
        e.preventDefault();
        content.style.visibility = 'hidden';
        loadHome(taskArray);
    })

    submit.addEventListener('click', (e) => {
        let priority
        if (prio.checked) {
            priority = "Yes"
        } else {
            priority = "No"
        }

        e.preventDefault();
        const task = new Task(name.value, desc.value, date.value, priority);
        taskArray.push(task);
        content.style.visibility = 'hidden'
        localStorage.setItem('taskArray', JSON.stringify(taskArray));
        loadHome(taskArray);
    }
    )
}


function validateForm(button, a, b, c) {
    if (a.value !== '' && b.value !== '' && c.value !== '') {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}