import Tracker  from "./classes/tracker.js"
import BestDoneActivity from "./classes/bestDoneActivity.js"
import { IActivity } from "./interfaces/activity.js"

const activityTracker = new Tracker()

const submit_btn = document.querySelector("#submit-activity-btn") as HTMLInputElement
const add_activity = document.querySelector("#add-activity-icon") as HTMLImageElement

add_activity.addEventListener("click", () => {
  const header = document.querySelector(".header") as HTMLDivElement
  header.style.display = "none"
})

submit_btn.addEventListener("click", () => {
  const nameInput = document.querySelector("#name") as HTMLInputElement
  const imgUrlInput = document.getElementById("image-url") as HTMLInputElement
  const startDateInput = document.querySelector("#start-date") as HTMLInputElement

  if (!nameInput.value || !imgUrlInput.value || !startDateInput.value) {
    alert("Please fill out all fields.")
    return
  }

  const activity: IActivity = {
    name:nameInput.value,
    imgUrl: imgUrlInput.value,
    startDate: new Date(startDateInput.value)
  }

  activityTracker.addActivity(activity)

  const bestDay = new BestDoneActivity(activityTracker).getBestDoneActivity()

  console.log(bestDay)

})