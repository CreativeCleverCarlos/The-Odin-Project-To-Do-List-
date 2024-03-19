
import './style.css'
import putUpNav from './asidenavbar.js';
import './default.js'   
import Icon from './placeholder5.jpg';
import defaultMenu from './default.js';
import navWaitingOnClicks from './navigatingthepages.js';
import inputForm from './inputform.js';
import toDoInput from './todoinput.js';

//a function that creates a div, and places the cat image into it
function component(){

    document.querySelector("#add-entry-button").addEventListener("click", () =>{
       let showform = document.querySelector("#task-entry");
       showform.style.display = "block"
    })



    const element = document.createElement('div')
    inputForm();
    defaultMenu();
    putUpNav();
    navWaitingOnClicks();
    toDoInput;


    return element

    
}





document.body.appendChild(component())