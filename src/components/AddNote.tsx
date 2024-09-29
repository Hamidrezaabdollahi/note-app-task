import PersianDatePicker from "./PersianDatePicker";


export default function AddNote() {
  
  return (
    <div className="flex flex-col items-center justify-start my-6 w-full gap-y-4 text-secondary-400">

      <form className="flex items-center justify-center gap-x-4 w-full">
        <input type="text" className="textFieldInput rounded-l-none flex-1" placeholder="موضوع یادداشت را وارد کنید ...." />
        <div className="flex flex-1 items-center justify-center gap-x-2 py-2 px-3 shadow-sm text-secondary-400 bg-secondary-100 rounded-l-xl ">
          <span >سررسید یادداشت</span>
          <PersianDatePicker />
        </div>
      </form>
      <textarea className="textAreaFieldInput" rows={12} placeholder="متن یادداشت خود را وارد کنید ...." />
      <div className="flex items-center justify-between w-full">
        <button className="bg-gradient-to-l from-secondary-100 p-4 flex-1 rounded-xl hover:text-secondary-600 transition-all duration-200">ذخیره</button>
        <button className="bg-gradient-to-r from-secondary-100 p-4 flex-1 rounded-xl hover:text-secondary-600 transition-all duration-200">از نو بنویس</button>
      </div>
    </div>
  )
}
