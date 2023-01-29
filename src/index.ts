

// let acivity_list = document.querySelector("#acivity-list") as HTMLUListElement


interface IActivity {
  name: string;
  imgUrl: string;
  startDate: Date;
}

class Tracker {
  private activities: IActivity[] = []

  addActivity(activity: IActivity) {
    this.activities.push(activity)
    this.render()
  }

  deleteActivity(activity: IActivity) {
    this.activities = this.activities.filter(act => act !== activity)
    this.render()
  }

  render() {
    const acitivityList = document.getElementById("acitivity-list")
    acitivityList.innerHTML=""

    this.activities.forEach(activity => {
      const acitivityItem = document.createElement("div")
      acitivityItem.innerHTML = `
        <img src="${activity.imgUrl}" alt="${activity.name}">
        <p>${activity.name}</p>
        <p>Started on: ${activity.startDate.toLocaleDateString()}</p>
      `

      acitivityItem.addEventListener("click", () => this.openModal(activity))

      acitivityList?.appendChild(acitivityItem)
    })

  }


  openModal(activity: IActivity) {
    const modal = document.querySelector("#habit-modal")
    modal.innerHTML = `
      <h2>${activity.name}</h2>
      <img src="${activity.imgUrl}" alt="${activity.name}" />
      <p>Started on: ${activity.startDate.toLocaleDateString()}</p>
      <button id="delete-btn">Delete</button>
    `

    const deleteButton = document.querySelector("#delete-btn")
    deleteButton.addEventListener("click", () => this.deleteActivity(activity))

    modal.style.display = "block"
  }

  closeModal() {
    const modal = document.querySelector("#habit-modal")
    modal.style.display = "none"
  }
  

}

const activityTracker = new Tracker()

const add_btn = document.querySelector("#add-btn") as HTMLInputElement

add_btn.addEventListener("click", () => {
  const nameInput = document.querySelector("#task-name") as HTMLInputElement
  const startDateInput = document.querySelector("#start-date") as HTMLInputElement
  const imgUrlInput = document.querySelector("#img-url") as HTMLInputElement

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

})