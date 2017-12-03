export class DateParcer {
    constructor(date) {
        if (date.getDate && date.getMonth && date.getFullYear) {
            this.Day = date.getDate();
            this.Month = date.getMonth();
            this.Year = date.getFullYear();
        }
        else if (new Date(date).getDate && new Date(date).getMonth && new Date(date).getFullYear) {
            this.Day = new Date(date).getDate();
            this.Month = new Date(date).getMonth();
            this.Year = new Date(date).getFullYear();
        }
        else {
            this.Day = '';
            this.Month = '';
            this.Year = '';
        }

    }
    toDate() {
        return new Date(this.Year, this.Month, this.Day);
    }
    toString() {
        return `${this.Year}-${this.Month}-${this.Day}`;
    }
}
export let todayParse = new DateParcer(new Date()).toString();
export let dayPrevMonth = new DateParcer(new Date()).toString();
