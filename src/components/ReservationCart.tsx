'use client'
import { useDispatch } from "react-redux"
import { AppDispatch, useAppSelector } from "@/redux/store"

export default function ReservationCart(){

    const carItems = useAppSelector((state)=> state.carSlice.carItems)
    // const dispatch = useDispatch<AppDispatch>()
    
    return(
        <>
        {
            carItems.map((reservationItem) => (
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={reservationItem._id}>
                    <div className="text-xl"> Name : {reservationItem.name}</div>
                    <div className="text-sm"> Start Time: {reservationItem.start_time}</div>
                    <div className="text-sm"> End Time: {reservationItem.end_time}</div>
                    {/* <div className="text-md">Duration: {reservationItem.numOfDays}</div> */}
                    {/* <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1
                    text-white shadow-sm" onClick={()=>dispatch(removeReservation(reservationItem))}>
                        Remove from Cart
                    </button> */}
                </div>
            ))
        }
        </>
    )
}