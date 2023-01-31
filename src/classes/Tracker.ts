import { IActivity } from "../interfaces/activity"

export class Tracker {
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
      const acitivityItem = document.createElement("div")
      acitivityItem.innerHTML = `
        <img src="${activity.imgUrl}" alt="${activity.name}">
        <p>${activity.name}</p>
        <p>Started on: ${activity.startDate.toLocaleDateString()}</p>
      `

      acitivityItem.addEventListener("click", () => this.openModal(activity))

      activityList.appendChild(acitivityItem)
    })

  }


  openModal(activity: IActivity) {
    const modal = document.querySelector("#activity-modal") as HTMLDivElement
    modal.innerHTML = `
      <h2>${activity.name}</h2>
      <img src="${activity.imgUrl}" alt="${activity.name}" />
      <p>Started on: ${activity.startDate.toLocaleDateString()}</p>
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