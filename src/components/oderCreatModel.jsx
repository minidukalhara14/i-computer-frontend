import { useState } from "react";
import toast from "react-hot-toast";
import api from "../utils/api.js";

export default function OderCreateModel(props) {

    
    //     firstName : user.firstName,
    //     lastName : user.lastName,
    //     addressLineOne : req.body.addressLineOne,
    //     adressLineTwo : req.body.adressLineTwo,
    //     city : req.body.city,
    //     state : req.body.state,
    //     postalCode : req.body.postalCode,
    //     phone : req.body.phone,
    

    const [isModalOpen , setIsModalOpen] = useState(false);
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [addressLineOne , setAddressLineOne] = useState("");
    const [adressLineTwo , setAdressLineTwo] = useState("");
    const [city , setCity] = useState("");
    const [state , setState] = useState("");
    const [postalCode , setPostalCode] = useState("");
    const [phone , setPhone] = useState("");


    const cart = props.cart;

    async function createOrder(){
        try{
            const token = localStorage.getItem("token");

            const data = {
                firstName : firstName,
                lastName : lastName,
                addressLineOne : addressLineOne,
                adressLineTwo : adressLineTwo,
                city : city,
                state : state,
                postalCode : postalCode,
                phone : phone,
                items : []
            } 

            for(let i=0; i<cart.length; i++){
                 const item = cart[i];
                data.items.push({
                    
                    productId : item.product.productId,
                    quantity : item.quantity
                })
            }

            await api.post("/orders", data, {
            headers: {
                "Authorization": "Bearer " + token
            }
        });

                toast.success("Order created successfully");
                setIsModalOpen(false);


        }catch(error){
            toast.error(error?.response?.data?.message || "An error occurred while creating the order.");
            console.log(error);
        }
    } 

    return(
        <>
            <button className="w-[100px] h-[30px] bg-accent text-white font-bold text-xm rounded-lg hover:bg-purple-700 transition-colors duration-200"
                onClick={() => setIsModalOpen(true)}
            >
                order now
            </button>

            {
                isModalOpen && 
                <div className="w-screen h-screen fixed top-0 left-0 bg-black/70  flex justify-center items-center">
                    <div className="bg-white w-[400px] p-6 rounded-2xl shadow-2xl flex flex-col gap-4">

    <h2 className="text-xl font-bold text-center mb-2">Order Details</h2>

    <input type="text" placeholder="First Name"
        className="w-full h-[40px] border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        value={firstName} onChange={(e) => setFirstName(e.target.value)}
    />

    <input type="text" placeholder="Last Name"
        className="w-full h-[40px] border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        value={lastName} onChange={(e) => setLastName(e.target.value)}
    />

    <input type="text" placeholder="Address Line One"
        className="w-full h-[40px] border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        value={addressLineOne} onChange={(e) => setAddressLineOne(e.target.value)}
    />

    <input type="text" placeholder="Address Line Two"
        className="w-full h-[40px] border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        value={adressLineTwo} onChange={(e) => setAdressLineTwo(e.target.value)}
    />

    <div className="flex gap-3">
        <input type="text" placeholder="City"
            className="w-1/2 h-[40px] border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={city} onChange={(e) => setCity(e.target.value)}
        />
        <input type="text" placeholder="State"
            className="w-1/2 h-[40px] border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={state} onChange={(e) => setState(e.target.value)}
        />
    </div>

    <div className="flex gap-3">
        <input type="text" placeholder="Postal Code"
            className="w-1/2 h-[40px] border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={postalCode} onChange={(e) => setPostalCode(e.target.value)}
        />
        <input type="text" placeholder="Phone"
            className="w-1/2 h-[40px] border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={phone} onChange={(e) => setPhone(e.target.value)}
        />
    </div>

    <div className="flex justify-between mt-4">
        <button
            className="w-[100px] h-[35px] bg-gray-400 text-white font-semibold text-sm rounded-lg hover:bg-gray-600 transition"
            onClick={() => setIsModalOpen(false)}
        >
            Cancel
        </button>

        <button
            className="w-[100px] h-[35px] bg-purple-600 text-white font-semibold text-sm rounded-lg hover:bg-purple-700 transition"
            onClick={createOrder}
        >
            Submit
        </button>
    </div>

</div>

                    
                </div>
            }
        </>
    );
}