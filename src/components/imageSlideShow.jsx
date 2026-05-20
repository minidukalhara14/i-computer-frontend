import { useState } from "react";

export default function ImageSlideShow(props) {
    
    const [activeImage , setActiveImage] = useState(0);
    const images = props.images || [];

    return(
        <div className="w-[400px] h-full  flex flex-col ">
            <div className="w-[400px] lg:h-[400px] mt-2 flex justify-center items-center">
                <img className="w-[350px] aspect-square object-cover  " src={images[activeImage]} alt="Product Image" />
            </div>
            <div className="h-[150px] w-full gap-2 mt-3 mb-2 flex items-center justify-center">

                {
                    images.map((item , index) => {
                        return (

                           <img className={"w-[90px] h-[90px] cursor-pointer rounded-2xl " + (index == activeImage ? "border-4 border-accent" : "")}   
                            onClick={
                                ()=>{
                                    setActiveImage(index)
                                }
                            }
                           src={item} key ={index} />

                         )
                    })
                }

            </div>
        </div>
    )
}