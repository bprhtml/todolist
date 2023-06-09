import { taskArray } from "./task";

const content = document.querySelector('.content');

export function loadHome(array) {
  // Clear the existing content
  console.log(array);
  content.style.filter = "blur(0)";
  content.innerHTML = '';

  const taskTable = document.createElement('table');
  taskTable.style.margin = "2vh";
  taskTable.style.textAlign = 'center';

  const taskTableTitle = document.createElement('td');
  taskTableTitle.textContent = "Task List"
  taskTableTitle.setAttribute('colspan', '5');
  taskTable.appendChild(taskTableTitle)

  // Create the header row
  const headerRow = document.createElement('tr');

  // Column labels
  const nameLabel = document.createElement('th');
  nameLabel.textContent = 'Name';
  nameLabel.style.borderTop = "2px solid black";
  headerRow.appendChild(nameLabel);

  const descLabel = document.createElement('th');
  descLabel.textContent = 'Description';
  descLabel.style.borderTop = "2px solid black";
  headerRow.appendChild(descLabel);

  const dateLabel = document.createElement('th');
  dateLabel.textContent = 'Date';
  dateLabel.style.borderTop = "2px solid black";
  headerRow.appendChild(dateLabel);

  const prioLabel = document.createElement('th');
  prioLabel.textContent = 'Priority';
  prioLabel.style.borderTop = "2px solid black";
  headerRow.appendChild(prioLabel);

  // Append the header row to the table
  taskTable.appendChild(headerRow);

  array.forEach((task, index) => {
    const row = document.createElement('tr');

    // Create and append columns for each value
    const nameCell = document.createElement('td');
    nameCell.textContent = task.name;
    row.appendChild(nameCell);

    const descCell = document.createElement('td');
    descCell.textContent = task.description;
    row.appendChild(descCell);

    const dateCell = document.createElement('td');
    dateCell.textContent = task.date;
    row.appendChild(dateCell);

    const prioCell = document.createElement('td');
    prioCell.textContent = task.priority;
    row.appendChild(prioCell);
    
    const deltCell = document.createElement('td');
    deltCell.style.width = "5vw";
    row.appendChild(deltCell);
    const deltBtn = document.createElement('button');
    deltBtn.innerHTML = "X";
    deltBtn.setAttribute('n', index)
    deltBtn.classList.add('delete-button');

    deltBtn.addEventListener('click', () => {
        deleteTask(deltBtn.getAttribute('n'));
    })

    deltCell.appendChild(deltBtn);

    [nameCell, descCell, dateCell, prioCell].forEach(input => {
        input.classList.add('table-cell')
    })
    // Append the row to the table
    taskTable.appendChild(row);
  });

  // Append the table to the content
  content.appendChild(taskTable);
}

function deleteTask(index) {
    taskArray.splice(index, 1);
    localStorage.setItem('taskArray', JSON.stringify(taskArray));
    console.log(taskArray);
    loadHome(taskArray);
}
