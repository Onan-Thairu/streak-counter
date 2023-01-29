"use strict";
// let acivity_list = document.querySelector("#acivity-list") as HTMLUListElement
class Tracker {
    constructor() {
        this.activities = [];
    }
    addActivity(activity) {
        this.activities.push(activity);
        this.render();
    }
    deleteActivity(activity) {
        this.activities = this.activities.filter(act => act !== activity);
        this.render();
    }
    render() {
        const activityList = document.querySelector("#activity-list");
        activityList.innerHTML = "";
        this.activities.forEach(activity => {
            const acitivityItem = document.createElement("div");
            acitivityItem.innerHTML = `
        <img src="${activity.imgUrl}" alt="${activity.name}">
        <p>${activity.name}</p>
        <p>Started on: ${activity.startDate.toLocaleDateString()}</p>
      `;
            acitivityItem.addEventListener("click", () => this.openModal(activity));
            activityList.appendChild(acitivityItem);
        });
    }
    openModal(activity) {
        const modal = document.querySelector("#activity-modal");
        modal.innerHTML = `
      <h2>${activity.name}</h2>
      <img src="${activity.imgUrl}" alt="${activity.name}" />
      <p>Started on: ${activity.startDate.toLocaleDateString()}</p>
      <button id="delete-btn">Delete</button>
    `;
        const deleteButton = document.querySelector("#delete-btn");
        deleteButton.addEventListener("click", () => {
            this.deleteActivity(activity);
            this.closeModal();
        });
        modal.style.display = "block";
    }
    closeModal() {
        const modal = document.querySelector("#activity-modal");
        modal.style.display = "none";
    }
}
const activityTracker = new Tracker();
const submit_btn = document.querySelector("#submit-activity-btn");
submit_btn.addEventListener("click", () => {
    const nameInput = document.querySelector("#name");
    const imgUrlInput = document.getElementById("image-url");
    const startDateInput = document.querySelector("#start-date");
    console.log(nameInput.value);
    console.log(startDateInput.value);
    console.log(imgUrlInput.value);
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
