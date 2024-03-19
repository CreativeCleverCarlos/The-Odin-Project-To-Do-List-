
import toDoInput from "./todoinput";
toDoInput;


function inputForm(){
    
    //the submit button function. will take info from the user and display it back to them neatly

    document.querySelector("#task-entry-form").addEventListener("submit", function(event){ 
        event.preventDefault(); 
        let toDoListing = [];
        let name = document.querySelector("#item-name").value;
        let description = document.querySelector("#description").value
        let newEntry = new toDoInput(name, description);
        toDoListing.push(newEntry);
        document.querySelector("#task-entry").style.display = "none";
    })

    //cancel button to remove the form from the screen
    document.querySelector("#cancel-form-button").addEventListener("click", () => {
        let cancelForm = document.querySelector("#task-entry");
        cancelForm.style.display = "none"
    })
    

    
    //cancelling the input form

}

export default inputForm