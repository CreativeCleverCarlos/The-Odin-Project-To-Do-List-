
function navWaitingOnClicks(){
    const today = document.querySelector("#todayButton")
    const upcoming = document.querySelector("#upcomingButton");
    const projects = document.querySelector("#projectsButton");
    const calender = document.querySelector("#calenderButton");
    const logbook = document.querySelector("#logbookButton");

    today.addEventListener("click", () =>{
            console.log("today button is working");
            let todayDisplayOnMain = document.querySelector(".today");
            const showinfo = document.createElement("p");
            showinfo.textContent =  "today info is showing correctly";
            todayDisplayOnMain.appendChild(showinfo);
    });

    upcoming.addEventListener("click", () => {
        console.log("upcoming button is working")
        let upcomingDisplayOnMain = document.querySelector(".upcoming");
        const showinfo = document.createElement("p");
        showinfo.textContent =  "upcoming info is showing correctly";
        upcomingDisplayOnMain.appendChild(showinfo);
    });

    projects.addEventListener("click", () => {
        console.log("projects button is working")
        let projectsDisplayOnMain = document.querySelector(".projects");
        const showinfo = document.createElement("p");
        showinfo.textContent =  "projects info is showing correctly";
        projectsDisplayOnMain.appendChild(showinfo);
    });

    calender.addEventListener("click", () => {
        console.log("calender button is working")
        let calenderDisplayOnMain = document.querySelector(".calender");
        const showinfo = document.createElement("p");
        showinfo.textContent =  "calender info is showing correctly";
        calenderDisplayOnMain.appendChild(showinfo);
    });

    logbook.addEventListener("click", () => {
        console.log("logbook button is working")
        let logbookDisplayOnMain = document.querySelector(".logbook");
        const showinfo = document.createElement("p");
        showinfo.textContent =  "today info is showing correctly";
        logbookDisplayOnMain.appendChild(showinfo);
    });

};

export default navWaitingOnClicks;
