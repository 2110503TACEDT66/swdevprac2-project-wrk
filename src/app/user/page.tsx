'use client'
import LocationDateReserve from "@/components/LocationDateReserve";
import { useSearchParams } from "next/navigation";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addReservation } from "@/redux/feature/carSlice";
import { ReservationItem } from "../../../interface";
import { useState } from "react";
import Link from "next/link";

export default function Reservations(){

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            {/* <div className="text-xl font-medium">New Reservation</div>
            <div className="text-xl font-medium">{name}</div>

            <div className="w-fit space-y-3">
                <div className="text-md text-left text-gray-600">Booking</div>
                <LocationDateReserve onDateChange={(value:Dayjs) => {setReserveDate(value);}}
            onStartChange={(value:string) => setStartTime(value)} onEndChange={(value:string) => setEndTime(value)}/>
            </div>

            {
            end_time == "end"? <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold 
            py-2 px-4 rounded cursor-not-allowed'>
                Reservation
            </button>
            :<Link href="/cart"><button className='bg-orange-500 hover:bg-orange-700 text-white font-bold 
            py-2 px-4 rounded' onClick={makeReservation} >
                Reservation
            </button>
			</Link>
        } */}

        </main>
    )
	}