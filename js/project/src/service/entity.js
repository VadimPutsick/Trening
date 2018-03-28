export class CurrencyEntity {
    constructor(entity) {
        this.nameShort = entity.Cur_Abbreviation || '';
        this.date = entity.Date || '';
        this.rate = entity.Cur_OfficialRate || '';
        this.scale = entity.Cur_Scale || '';
        this.name = entity.Cur_Name || '';
        this.ID = entity.Cur_ID || '';
        this.dateStart = entity.Cur_DateStart || '';
        this.dateEnd = entity.Cur_DateEnd || '';
    }

    toEntity() {
        return {
            Cur_Abbreviation: this.nameShort,
            Date: this.date,
            Cur_OfficialRate: this.rate,
            Cur_Scale:  this.scale,
            Cur_Name: this.name,
            Cur_ID:  this.ID
        };
    }
}

export class DateEntity {
    constructor(entity) {
        this.date = entity.Date || '';
        this.rate = entity.Cur_OfficialRate || '';
    }

}
export class DateParce{
    constructor() {
        this.Day = new Date().getDate();
        this.Month = new Date().getMonth();
        this.Year = new Date().getFullYear();
    }
    toStringMonthDay(month,day){
        let newDate = new Date(this.Year,this.Month+month,this.Day+day);
       let newMonth = newDate.getMonth()+1;
       let newDay = newDate.getDate();
       if(newDate.getMonth()<10) {newMonth = '0'+newMonth;}
       if(newDay<10) {newDay = '0'+newDay;}
        return `${newDate.getFullYear()}-${newMonth}-${newDay}`;

    }

}
