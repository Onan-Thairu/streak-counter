import Tracker from "./classes/tracker.js";
import BestDoneActivity from "./classes/bestDoneActivity.js";
const activityTracker = new Tracker();
const header = document.querySelector(".header");
const add_activity_form = document.querySelector(".activity-form");
const submit_btn = document.querySelector("#submit-activity-btn");
const add_activity = document.querySelector("#add-activity-icon");
const close_form = document.querySelector("#close-form-icon");
add_activity.addEventListener("click", () => {
    header.classList.add("hidden");
    add_activity_form.classList.remove("hidden");
    // header.style.display = "none"
    // add_activity_form.style.display = "block"
});
close_form.addEventListener("click", () => {
    header.classList.remove("hidden");
    add_activity_form.classList.add("hidden");
    // add_activity_form.style.display = "none"
    // header.style.display = "block"
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