 import  {DataService} from './data-service.js'
 import { Entity } from './entity';
 const TodayCourse = 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0';
 let yesterday = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate() - 1}`;
 const YesterdayCourse = `http://www.nbrb.by/API/ExRates/Rates?onDate=${yesterday}&Periodicity=0`;
export class EntityService {
     constructor() {
        this.dataService = new DataService();
    }

    getEntities() {
        return this.dataService.getData(TodayCourse)
        .then(response => {
            let dataCourse = new Array();
            response.data.map(
                (item) => {
                    dataCourse.push(new Entity(item));
                }
            );
        //   console.log(dataCourse);
            return dataCourse;
        });
    }
}

