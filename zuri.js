
function updateData() {
    const nameElement = document.querySelector('[data-testid="slackUserName"]');

    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');

    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    const trackElement = document.querySelector('[data-testid="myTrack"]');

    const githubLinkElement = document.querySelector('[data-testid="githubURL"]');

    
    const currentDate = new Date();
    currentDate.setMinutes(currentDate.getUTCMilliseconds()  - currentDate.getTimezoneOffset()); // Set the time zone offset to 0 

    nameElement.textContent = "Emmanuella Eze";

    trackElement.textContent = "Frontend Track";

    githubLinkElement.href = "https://github.com/ellarr00/Hngx-task-1.git";

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    dayOfWeekElement.textContent = daysOfWeek[currentDate.getUTCDay()];

    utcTimeElement.textContent = currentDate.getTime();
}
updateData();

setInterval(updateData, 1000);