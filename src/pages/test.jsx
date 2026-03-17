import { useState } from "react";
import uploadMedia from "../utils/mediaUpload";

export default  function TestPage() {

    const [file, setFile] = useState(null);
    
    async function handleUpload(){
        try{
            const url = await uploadMedia(file);
            console.log(url);
        }catch(error){
            console.log(error);
        }
    
    }
    return (
        <div className="h-full w-screen flex justify-center items-center ">
            <input onChange={
                (e)=>{
                    setFile(e.target.files[0]);
                }
            } type="file"  
                className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"  />
                <button onClick={handleUpload} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
                    Upload
                </button>    
        
        </div>
    )

   
}