import Tracker from "./classes/tracker.js";
import BestDoneActivity from "./classes/bestDoneActivity.js";
const activityTracker = new Tracker();
const submit_btn = document.querySelector("#submit-activity-btn");
const add_activity = document.querySelector("#add-activity-icon");
add_activity.addEventListener("click", () => {
    const header = document.querySelector(".header");
    header.style.display = "none";
});
submit_btn.addEventListener("click", () => {
    const nameInput = document.querySelector("#name");
    const imgUrlInput = document.getElementById("image-url");
    const startDateInput = document.querySelector("#start-date");
    if (!nameInput.value || !imgUrlInput.value || !startDateInput.value) {
        alert("Please fill out all fields.");
        return;
    }
    const activity = {
        name: nameInput.value,
        imgUrl: imgUrlInput.value,
        startDate: new Date(startDateInput.value)
    };
    activityTracker.addActivity(activity);
    const bestDay = new BestDoneActivity(activityTracker).getBestDoneActivity();
    console.log(bestDay);
});
//# sourceMappingURL=index.js.map