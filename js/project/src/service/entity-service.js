import { CurrencyEntity } from './entity';
import axios from 'axios';
const TodayCourse = 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0';
// http://www.nbrb.by/API/ExRates/Currencies/191
let yesterday = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate() - 1}`;
const YesterdayCourse = `http://www.nbrb.by/API/ExRates/Rates?onDate=${yesterday}&Periodicity=0`;
const CurrencyDescription = `http://www.nbrb.by/API/ExRates/Currencies`;
export class EntityService {

    getCurrencyList() {
        return Promise.all([
            axios.get(TodayCourse),
            axios.get(YesterdayCourse),
            axios.get(CurrencyDescription)
        ]).then(
            (results) => {
                let currencyList = [];
                let todayCurrencyIndex = 0;
                let yearstedayCurrencyIndex = 1;
                let currencyDescriptionIndex = 2;
                let todayCurrency = results[todayCurrencyIndex].data;
                let yearstedayCurrency = results[yearstedayCurrencyIndex].data;
                let currencyDescription = results[currencyDescriptionIndex].data;
                let numberFixe = 4;
                let descriptionDate = {};
                currencyDescription.forEach(element => {
                    descriptionDate[new CurrencyEntity(element).ID] = {
                        dateStart: new CurrencyEntity(element).dateStart,
                        dateEnd: new CurrencyEntity(element).dateEnd
                    };
                });
                for (var index = 0; index < todayCurrency.length; index++) {
                    currencyList.push(
                        {
                            ...new CurrencyEntity(todayCurrency[index]),
                            currencyChange: (
                                new CurrencyEntity(todayCurrency[index]).rate - new CurrencyEntity(yearstedayCurrency[index]).rate
                            ).toFixed(numberFixe),
                            dateStart: descriptionDate[new CurrencyEntity(todayCurrency[index]).ID].dateStart,
                            dateEnd: descriptionDate[new CurrencyEntity(todayCurrency[index]).ID].dateEnd

                        }

                    );

                }

                return currencyList;
            });
    }
}
