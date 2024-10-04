import DatePicker, { DateObject } from "react-multi-date-picker";

import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"



type PersianDatePickerProps = {
    date: DateObject | null | string,
    handleDateChange: (date: DateObject | null ) => void
}

export default function PersianDatePicker({ date, handleDateChange }: PersianDatePickerProps) {
    return (
        <>
            <DatePicker
                inputClass="custom-input"
                value={date}
                onChange={handleDateChange}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
            />

        </>
    )
}
