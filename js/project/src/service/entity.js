export class Entity {
    constructor(entity) {
        this.nameShort = entity.Cur_Abbreviation || '';
        this.date = entity.Date || '';
        this.rate = entity.Cur_OfficialRate || '';
    }

    toEntity() {
        return {
            Cur_Abbreviation: this.nameShort,
            Date: this.date,
            Cur_OfficialRate: this.rate
        };
    }

    fromEntity(entity) {
        return new Entity(entity);
    }
}

// "Cur_ID": 170,
// "Cur_Abbreviation": "AUD",
// "Date": "2017-11-07T00:00:00",
// "Cur_Scale": 1,
// "Cur_Name": "Австралийский доллар",
// "Cur_OfficialRate": 1.5191