
function putUpNav(){
    //so this isn't going to be intaking anything. Just showing the Today, Upcoming, Projects, Calender, and Logbook

    const contentAside = document.querySelector(".side-nav");
    const today = document.createElement('button');
    today.textContent = "Today";
    contentAside.appendChild(today)

    // display the upcoming button

    const upcoming = document.createElement('button');
    upcoming.textContent = "Upcoming";
    contentAside.appendChild(upcoming)

     // display the Projects button in the side bar

    const projects = document.createElement('button');
    projects.textContent = "Projects";
    contentAside.appendChild(projects)

     // display the Calender button in the side bar

    const calender = document.createElement('button');
    calender.textContent = "Calender";
    contentAside.appendChild(calender)

    const logbook = document.createElement('button');
    logbook.textContent = "Logbook";
    contentAside.appendChild(logbook)
}


export default putUpNav;