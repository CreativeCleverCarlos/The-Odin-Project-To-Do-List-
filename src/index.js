
import './style.css'
import putUpNav from './asidenavbar.js';
import './default.js'
import Icon from './placeholder5.jpg';
import defaultMenu from './default.js';


//a function that creates a div, and places the cat image into it
function component(){


    // can likely delete the "hello world, from webpack index.js example and the image to clean up code"
    const contentDiv = document.querySelector(".content")
    const test = document.createElement("h1");
    test.textContent = "Hello World, from webpack Index.js"
    // contentDiv.appendChild(test) //places the test content into the ui


    const element = document.createElement('div')
    const aPicture = new Image();
    aPicture.src = Icon
    //removes the example picture below
    //element.appendChild(aPicture) //places the picture into the dom

    //test that the default.js is working
    defaultMenu()
    putUpNav()

    return element

    
}



document.body.appendChild(component())

//fix thiiss