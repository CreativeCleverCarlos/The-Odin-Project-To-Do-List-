
function putUpNav(){
    //so this isn't going to be intaking anything. Just showing the Today, Upcoming, Projects, Calender, and Logbook

    const contentAside = document.querySelector(".side-nav");
    const today = document.createElement('button');
    today.setAttribute("id", "todayButton");
    today.textContent = "Today";
    contentAside.appendChild(today)

    // display the upcoming button

    const upcoming = document.createElement('button');
    upcoming.setAttribute("id", "upcomingButton");
    upcoming.textContent = "Upcoming";
    contentAside.appendChild(upcoming)

     // display the Projects button in the side bar

    const projects = document.createElement('button');
    projects.setAttribute("id", "projectsButton");
    projects.textContent = "Projects";
    contentAside.appendChild(projects)

     // display the Calender button in the side bar

    const calender = document.createElement('button');
    calender.setAttribute("id", "calenderButton")
    calender.textContent = "Calender";
    contentAside.appendChild(calender)

    const logbook = document.createElement('button');
    logbook.setAttribute("id", "logbookButton")
    logbook.textContent = "Logbook";
    contentAside.appendChild(logbook)
}


export default putUpNav;