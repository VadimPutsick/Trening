import { CurrencyEntity, DateEntity, DateParce } from './entity';
import axios from 'axios';
const TodayCourse = 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0';
let yesterday = new DateParce().toStringMonthDay(0, -7);
const YesterdayCourse = `http://www.nbrb.by/API/ExRates/Rates?onDate=${yesterday}&Periodicity=0`;
const CurrencyDescription = `http://www.nbrb.by/API/ExRates/Currencies`;

export class EntityService {
    getDateList(currencyId, fromCurrencyDate, endCurrencyDate) {
        let dynamicQuery = 'http://www.nbrb.by/API/ExRates/Rates/Dynamics/';
        let currenciesDate = `${dynamicQuery}${currencyId}?startDate=${fromCurrencyDate}&endDate=${endCurrencyDate}`;
        return axios.get(currenciesDate)
            .then(
                (results) => {
                    let dateList = [];
                    results.data.forEach(element => {
                        dateList.push(new DateEntity(element));
                    });
                    return dateList;
                });
    }
    getCurrencyList() {
        return Promise.all([
            axios.get(TodayCourse),
            axios.get(YesterdayCourse),
            axios.get(CurrencyDescription)
        ]).then(
            (results) => {
                let currencyList = [];
                let todayCurrencyIndex = 0;
                let yesterdayCurrencyIndex = 1;
                let currencyDescriptionIndex = 2;
                let todayCurrency = results[todayCurrencyIndex].data;
                let yesterdayCurrency = results[yesterdayCurrencyIndex].data;
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
                                new CurrencyEntity(todayCurrency[index]).rate - new CurrencyEntity(yesterdayCurrency[index]).rate
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
