//To do list is going to have the following parameters
/** 
Name, description, date added, priority level, and notes

--for the priority level, ill go with low, medium and high. m
--medium will be the default

**/

class toDoInput {
    constructor (name, description, dateAdded, priorityLevel, notes){
        this.name = name;
        this.description = description;
        this.dateAdded = dateAdded;
        this.priorityLevel = priorityLevel;
        this.notes = notes;
    }
}

export default toDoInput