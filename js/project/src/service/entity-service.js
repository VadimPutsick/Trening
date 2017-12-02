import { CurrencyEntity } from './entity';
import axios from 'axios';
const TodayCourse = 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0';
// http://www.nbrb.by/API/ExRates/Currencies/191
let yesterday = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate() - 1}`;
const YesterdayCourse = `http://www.nbrb.by/API/ExRates/Rates?onDate=${yesterday}&Periodicity=0`;
export class EntityService {

    getCurrencyList() {
        return Promise.all([
            axios.get(TodayCourse),
            axios.get(YesterdayCourse)
        ]).then(
            (results) => {
                let currencyList = [];
                let todayCurrencyIndex = 0;
                let yearstedayCurrencyIndex = 1;
                let todayCurrency = results[todayCurrencyIndex];
                let yearstedayCurrency = results[yearstedayCurrencyIndex];
                let numberFixe = 4;
                for (var index = 0; index < todayCurrency.data.length; index++) {
                    currencyList.push(
                        {
                            ...new CurrencyEntity(todayCurrency.data[index]),
                            currencyChange: (
                                new CurrencyEntity(todayCurrency.data[index]).rate - new CurrencyEntity(yearstedayCurrency.data[index]).rate
                            ).toFixed(numberFixe)

                        }

                    );

                }

                return currencyList;
            });
    }
}
