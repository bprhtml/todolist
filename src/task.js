export let taskArray = [];

export class Task {
    constructor (name, description, date, priority) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.priority = priority;
    }
}