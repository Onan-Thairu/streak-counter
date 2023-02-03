import Tracker from "./tracker.js"
import Day from "./day.js"
import { IActivity } from "../interfaces/activity.js"

class BestDoneActivity {
  streakCounter: Tracker

  constructor(streak: Tracker){
    this.streakCounter = streak
  }

  getBestDoneActivity() {
    const activities = this.streakCounter.activities
    let bestActivity = this.streakCounter.activities[0]
    let days = Day.create(bestActivity).getDays()
    activities.map((activity: IActivity) => {
      if (Day.create(activity).getDays() > days) {
        days = Day.create(activity).getDays()
        bestActivity = activity
      }
    })
    return bestActivity
  }
}

export default BestDoneActivity