export class Entity {
    constructor(entity) {
        this.nameShort = entity.Cur_Abbreviation || '';
        this.date = entity.Date || '';
        this.rate = entity.Cur_OfficialRate || '';
        this.scale = entity.Cur_Scale || '';
        this.name = entity.Cur_Name || '';
    }

    toEntity() {
        return {
            Cur_Abbreviation: this.nameShort,
            Date: this.date,
            Cur_OfficialRate: this.rate,
            Cur_Scale:  this.scale,
            Cur_Name: this.name
        };
    }

    fromEntity(entity) {
        return new Entity(entity);
    }
}

