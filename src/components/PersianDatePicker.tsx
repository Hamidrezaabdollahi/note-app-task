import DatePicker, { DateObject, } from "react-multi-date-picker";
import gregorian from "react-date-object/calendars/gregorian";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { useState } from "react";




export default function PersianDatePicker() {

    const [deadline, setDeadline] = useState<DateObject | null>(
        new DateObject({ calendar: persian, locale: persian_fa })
    );

    const handleDateChange = (date: DateObject | null) => {
        setDeadline(date);
    };

    const getIsoString = (): string | null => {
        if (deadline) {
            const gregorianDate = deadline.convert(gregorian);
            const dateInstance = gregorianDate.toDate() as Date; 

            return dateInstance.toISOString(); 
        }
        return null; 
    };

    console.log(getIsoString());
    return (
        <>
            <DatePicker
                inputClass="custom-input"
                value={deadline}
                onChange={handleDateChange}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
            />

        </>
    )
}
