class BestDoneActivity {
    constructor(streak) {
        this.streakCounter = streak;
    }
    getBestDoneActivity() {
        const activities = this.streakCounter.activities;
        let bestActivity = this.streakCounter.activities[0];
        let bestDay = new Date().getTime() - new Date(activities[0].startDate).getTime();
        activities.map((activity) => {
            if (new Date().getTime() - new Date(activity.startDate).getTime() > bestDay) {
                bestDay = new Date().getTime() - new Date(activity.startDate).getTime();
                bestActivity = activity;
            }
        });
        return bestActivity;
    }
}
export default BestDoneActivity;
//# sourceMappingURL=bestDoneActivity.js.map