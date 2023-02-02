import { IActivity } from "../interfaces/activity"
import Day from "./day.js"

class Tracker {
  public activities: IActivity[] = []

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
      activityItem.innerHTML = `
        <img src="${activity.imgUrl}" alt="${activity.name}" width="50px" >
        <p>${activity.name}</p>
        <p>Started on: ${activity.startDate.toLocaleDateString()}</p>
      `

      activityItem.addEventListener("click", () => this.openModal(activity))

      activityList.appendChild(activityItem)
    })

  }


  openModal(activity: IActivity) {
    const modal = document.querySelector("#activity-modal") as HTMLDivElement
    const days = Day.create(activity).getDays()
    modal.innerHTML = `
      <img src="${activity.imgUrl}" alt="${activity.name}" width="50px" />
      <p>${activity.startDate.toLocaleDateString()}</p>
      <p>${activity.name}</p>
      <p>${days} Days</p>
      <button id="modal-close-btn">Close</button>
      <button id="delete-btn">Delete</button>
    `

    const deleteButton = document.querySelector("#delete-btn") as HTMLButtonElement
    deleteButton.addEventListener("click", () => {
      this.deleteActivity(activity)
      this.closeModal()
    })

    modal.style.display = "block"
  }

  closeModal() {
    const modal = document.querySelector("#activity-modal") as HTMLDivElement
    modal.style.display = "none"
  }
  

}

export default Tracker