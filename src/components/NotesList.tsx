import Accordion from "../ui/Accordion";
import PersianDatePicker from "./PersianDatePicker";

export default function NotesList() {
  return (
    <div className="w-full text-secondary-400">
      <Accordion noteBody="این یک متن فرضی برای اپلیکیشن ما میباشد" noteHeader="این یک عنوان فرضی است" >
        <span >سررسید یادداشت</span>
        <PersianDatePicker />
      </Accordion>
      <Accordion noteBody="این یک متن فرضی برای اپلیکیشن ما میباشد" noteHeader="این یک عنوان فرضی است" >
        <span >سررسید یادداشت</span>
        <PersianDatePicker />
      </Accordion>
      <Accordion noteBody="این یک متن فرضی برای اپلیکیشن ما میباشد" noteHeader="این یک عنوان فرضی است" >
        <span >سررسید یادداشت</span>
        <PersianDatePicker />
      </Accordion>
    </div>
  )
}
