class Day {
    constructor(activity) {
        this.activity = activity;
    }
    static create(act) {
        const activity = new Day(act);
        return activity;
    }
    getDays() {
        const timeInMS = new Date().getTime() - new Date(this.activity.startDate).getTime();
        const days = Math.floor(timeInMS / (1000 * 3600 * 24));
        return days;
    }
}
export default Day;
//# sourceMappingURL=day.js.map