import { Injectable } from "@angular/core";
import { iDate } from "../services/articles.service";


@Injectable()
export class DateHelper {
    constructor() { }

    /**
     * returns "2018-11-15" from a date.toString() value
     * getFormattedDate
     */
    public formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    public getIDateFromDate(date: Date): iDate {
        let dateObject: iDate = {
            year: date.getFullYear().toString(),
            fullDate: date.toDateString()
        }
        return dateObject
    }


}