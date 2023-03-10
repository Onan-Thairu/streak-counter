import { IActivity } from "../interfaces/activity"
import Day from "./day.js"

class Tracker {
  activities: IActivity[] = []

  addActivity(activity: IActivity) {
    this.activities.push(activity)
    this.render()
  }

  deleteActivity(activity: IActivity) {
    this.activities = this.activities.filter(act => act !== activity)
    this.render()
  }

  render() {
    const activityList = document.querySelector("#activity-list") as HTMLDivElement
    activityList.innerHTML = ""

    this.activities.forEach(activity => {
      const activityItem = document.createElement("div")
      activityItem.classList.add("card")
      activityItem.innerHTML = `
        <img src="${activity.imgUrl}" alt="${activity.name}">
        <p>${activity.startDate.toLocaleDateString()}</p>
        <p>${activity.name}</p>
      `

      activityItem.addEventListener("click", () => this.openModal(activity))

      activityList.appendChild(activityItem)
    })

    const msg_parag = document.querySelector("#msg-parag") as HTMLParagraphElement
    this.activities.length > 0 ? msg_parag.textContent = "Activities" : "You don't have any activities"

  }


  openModal(activity: IActivity) {
    const modal = document.querySelector("#activity-modal") as HTMLDivElement
    const days = Day.create(activity).getDays()
    modal.innerHTML = `
      <div class="modal-content">
        <img src="${activity.imgUrl}" alt="${activity.name}" />
        <p>${activity.startDate.toLocaleDateString()}</p>
        <p>${activity.name}</p>
        <p>${days} Days</p>
        <button id="modal-close-btn">Close</button>
        <button id="delete-btn">Delete</button>
      </div>
    `

    const deleteButton = document.querySelector("#delete-btn") as HTMLButtonElement
    deleteButton.addEventListener("click", () => {
      this.deleteActivity(activity)
      this.closeModal()
    })

    const closeBtn = document.querySelector("#modal-close-btn") as HTMLButtonElement
    closeBtn.addEventListener("click", () => this.closeModal())

    modal.style.display = "block"
  }

  closeModal() {
    const modal = document.querySelector("#activity-modal") as HTMLDivElement
    modal.style.display = "none"
  }
  

}

export default Tracker