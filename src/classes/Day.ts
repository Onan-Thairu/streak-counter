import { IActivity } from "../interfaces/activity";

class Day {

  public activity: IActivity

  private constructor(activity: IActivity) {
    this.activity = activity
  }

  static create(act: IActivity) {
    const activity = new Day(act)
    return activity
  }

  getDays(): number {
    const timeInMS = new Date().getTime() - new Date(this.activity.startDate).getTime()
    const days = Math.floor(timeInMS/ (1000 * 3600 * 24))
    return days
  }
}

export default Day