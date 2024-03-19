
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


    const element = document.createElement('div')
    inputForm();
    defaultMenu();
    putUpNav();
    navWaitingOnClicks();


    return element

    
}

document.querySelector("#task-entry-form").addEventListener("submit", function(event){ 
    event.preventDefault(); 
    let toDoListing = [];
   
        console.log("submit button works");
    
 
})




document.body.appendChild(component())