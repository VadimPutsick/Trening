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

    fromEntity(entity) {
        return new CurrencyEntity(entity);
    }
}

