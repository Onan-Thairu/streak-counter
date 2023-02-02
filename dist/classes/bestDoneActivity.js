import Day from "./day.js";
class BestDoneActivity {
    constructor(streak) {
        this.streakCounter = streak;
    }
    getBestDoneActivity() {
        const activities = this.streakCounter.activities;
        let bestActivity = this.streakCounter.activities[0];
        let days = Day.create(bestActivity).getDays();
        activities.map((activity) => {
            if (Day.create(activity).getDays() > days) {
                days = Day.create(activity).getDays();
                bestActivity = activity;
            }
        });
        return bestActivity;
    }
}
export default BestDoneActivity;
//# sourceMappingURL=bestDoneActivity.js.map