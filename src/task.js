function getTaskArray() {
    const taskArrayString = localStorage.getItem('taskArray');
    let taskArray;
    if (taskArrayString && taskArrayString !== "null") {
      taskArray = JSON.parse(taskArrayString);
    } else {
      taskArray = [];
    }
    return taskArray;
  }
  
  export const taskArray = getTaskArray();

  export class Task {
    constructor(name, description, date, priority) {
      this.name = name;
      this.description = description;
      this.date = date;
      this.priority = priority;
    }
  }
  