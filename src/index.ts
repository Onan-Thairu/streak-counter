import Tracker  from "./classes/tracker.js"
import BestDoneActivity from "./classes/bestDoneActivity.js"
import { IActivity } from "./interfaces/activity.js"

const activityTracker = new Tracker()

const header = document.querySelector(".header") as HTMLDivElement
const add_activity_form = document.querySelector(".activity-form") as HTMLDivElement

const submit_btn = document.querySelector("#submit-activity-btn") as HTMLInputElement
const add_activity = document.querySelector("#add-activity-icon") as HTMLImageElement
const close_form = document.querySelector("#close-form-icon") as HTMLImageElement


add_activity.addEventListener("click", () => {
  header.classList.add("hidden")
  add_activity_form.classList.remove("hidden")
})

close_form.addEventListener("click", () => {
  header.classList.remove("hidden")
  add_activity_form.classList.add("hidden")
})

submit_btn.addEventListener("click", () => {
  const nameInput = document.querySelector("#name") as HTMLInputElement
  const imgUrlInput = document.getElementById("image-url") as HTMLInputElement
  const startDateInput = document.querySelector("#start-date") as HTMLInputElement


  if (!nameInput.value || !imgUrlInput.value || !startDateInput.value) {
    // alert("Please fill out all fields.")
    const alertMsg = document.querySelector("#missing-data") as HTMLParagraphElement
    alertMsg.textContent = "Please fill out all the fields";
    setTimeout(function () {
      alertMsg.textContent = ""
    }, 5000);
    return
  }

  const activity: IActivity = {
    name:nameInput.value,
    imgUrl: imgUrlInput.value,
    startDate: new Date(startDateInput.value)
  }

  activityTracker.addActivity(activity)
  nameInput.value = ""
  imgUrlInput.value = ""
  startDateInput.value = ""

  const bestStreakBtn = document.querySelector("#best-streak-btn") as HTMLButtonElement
  // const bestSteakDiv = document.querySelector(".best-streak-div") as HTMLDivElement
  // activityTracker.activities.length = 0 ? bestSteakDiv.classList.add("hidden") : bestSteakDiv.classList.remove("hidden")
  
  bestStreakBtn.addEventListener("click", () => {
    const bestDay = new BestDoneActivity(activityTracker).getBestDoneActivity()
    activityTracker.openModal(bestDay)
  })

})