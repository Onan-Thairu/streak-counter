import Tracker from "./classes/tracker.js";
const activityTracker = new Tracker();
const submit_btn = document.querySelector("#submit-activity-btn");
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
});
//# sourceMappingURL=index.js.map