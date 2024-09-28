
export default function AddNote() {
  return (
    <div className="flex flex-col items-center justify-start my-6 w-full gap-y-4 text-secondary-400">

      <input type="text" className="textFieldInput" placeholder="موضوع یادداشت را وارد کنید ...." />
      <textarea className="textAreaFieldInput" rows={12} placeholder="متن یادداشت خود را وارد کنید ...." />
      <div className="flex items-center justify-between w-full">
        <button className="bg-gradient-to-l from-secondary-100 p-4 flex-1 rounded-xl hover:text-secondary-600 transition-all duration-200">ذخیره</button>
        <button className="bg-gradient-to-r from-secondary-100 p-4 flex-1 rounded-xl hover:text-secondary-600 transition-all duration-200">از نو بنویس</button>
      </div>
    </div>
  )
}
