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

    /**
     * Returns Jul-14-2018
     * @param date value as date
     */
    public getSimplifiedDate(date: Date): string {
        let month= this.getMonthAbrev(date.getMonth());
        let day = this.getDayFull(date.getDate())
        let year = date.getFullYear()
        return month+" "+day+" "+year;
    }

    private getDayFull(number):string{
        if(number<=9){
            return "0" + number
        }else{
            return number.toString()
        }
    }

    private getMonthAbrev(month: number): string {
        switch (month) {
            case 0:
                return "Jan"
            case 1:
                return "Feb"
            case 2:
                return "Mar"
            case 3:
                return "Apr"
            case 4:
                return "May"
            case 5:
                return "Jun"
            case 6:
                return "Jul"
            case 7:
                return "Aug"
            case 8:
                return "Sep"
            case 9:
                return "Oct"
            case 10:
                return "Nov"
            case 11:
                return "Dez"
            default:
                return "NaN"
        }
    }



}