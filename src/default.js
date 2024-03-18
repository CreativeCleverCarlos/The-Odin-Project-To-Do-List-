
import toDoInput from "./todoinput"

function defaultMenu(){
    //should show 2 listed items to the user so they know what it will look like
    //this should be shown on startup
    const example1 = new toDoInput("Oranges", "to be bought", "March 13th", "medium", "gotta buy this");

    //to be shown to the user in the "info-listing" class. should show the user what it is that they need to do
    const contentForExample1 = document.querySelector(".info-listing")
    const showExample1 = document.createElement("p")
    showExample1.textContent = `These ${example1.name} are ${example1.description} today ${example1.dateAdded}`
    contentForExample1.appendChild(showExample1)

     
}

export default defaultMenu