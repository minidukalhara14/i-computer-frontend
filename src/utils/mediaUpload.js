import { createClient } from "@supabase/supabase-js";

let url="https://goxmkdaqfjfnqbufgeic.supabase.co"
let key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdveG1rZGFxZmpmbnFidWZnZWljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MzQzODAsImV4cCI6MjA4OTMxMDM4MH0.NLM3Xkqk5o0lSMKKmEYnbnZiMJbhptBUKBXiE5dG4gY"

const supabase = createClient(url, key);

export default function uploadMedia(file){
    return new Promise(
        (resolve, reject)=>{
            if(file == null){
                reject("No file provided");
            }else{
                const timestamp = new Date().getTime();
                const fileName = timestamp + "_" + file.name;

                supabase.storage
                    .from("images")
                    .upload(fileName, file,{
                        upsert: false,
                        cacheControl: "3600",
                    
                    }).then((response)=>{
                        
                        
                        const publicUrl = supabase.storage
                            .from("images")
                            .getPublicUrl(fileName).data.publicUrl;

                        resolve(publicUrl);
                    
                    }).catch((error)=>{
                        reject(error);
                    });

            }
        }
    )
}

