export class Tracker {
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
//# sourceMappingURL=Tracker.js.map