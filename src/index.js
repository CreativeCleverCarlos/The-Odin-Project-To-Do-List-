
import './style.css'
import putUpNav from './asidenavbar.js';
import './default.js'   
import Icon from './placeholder5.jpg';
import defaultMenu from './default.js';
import navWaitingOnClicks from './navigatingthepages.js';
import todayPage from './todaypage.js';

//a function that creates a div, and places the cat image into it
function component(){



    const element = document.createElement('div')
   
    defaultMenu();
    putUpNav();
    navWaitingOnClicks();
    todayPage();


    return element

    
}



document.body.appendChild(component())