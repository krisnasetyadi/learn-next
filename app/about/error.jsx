"use client"

export default function Error({error, reset}) {
    return (
        <div>
            This ain't loading up: {error.message}
            <button onClick={()=> reset()}>Reset</button>
            {/* ini adlaah sesuatu yg next secara otomatis berikan bahwa anda dapat mencoba reloading component jika 
           ada error. jadi anda bisa bayangkan anda fetching beberapa data dari api atau anda mencoba untuk mengambil data dari database 
           dan "something goes worng" jadi anda bisa cath error itu thi error page ini dan anda bisa mencoba untuk reloading data
           jika anda mau.
           
           jadi anda bisa dengan hanya melakukan tambahan an erroro.jsx membuat function dan itu aja*/}
        </div>
    )
}