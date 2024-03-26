'use client'

import { useState } from "react"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { Select,MenuItem } from "@mui/material"
import { Dayjs } from "dayjs"

export default function LocationDateReserve({onDateChange, onStartChange, onEndChange} 
    : {onDateChange:Function,onStartChange:Function, onEndChange:Function}){

    const[reserveDate, setReserveDate] = useState<Dayjs|null>(null)
    const[start_time, setStartTime] = useState('start')
    const[end_time, setEndTime] = useState('end')

    return (
        <div className='flex flex-col justify-center space-y-2'>
            <div className="bg-slate-200 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="bg-white" 
                    value={reserveDate}
                    onChange={(value) => {setReserveDate(value); onDateChange(value);}}/>
                </LocalizationProvider>

                <Select variant="standard"
                name="start_time" id="start_time" value={start_time}
                onChange={(e)=>{setStartTime(e.target.value);onStartChange(e.target.value);}}
                className="h-[2em] w-[200px]">
                    <MenuItem value="start">Select Start Time</MenuItem>
                    <MenuItem value="00:00">00:00</MenuItem>
                    <MenuItem value="01:00">01:00</MenuItem>
                    <MenuItem value="02:00">02:00</MenuItem>
                    <MenuItem value="03:00">03:00</MenuItem>
                    <MenuItem value="04:00">04:00</MenuItem>
                    <MenuItem value="05:00">05:00</MenuItem>
                    <MenuItem value="06:00">06:00</MenuItem>
                    <MenuItem value="07:00">07:00</MenuItem>
                    <MenuItem value="08:00">08:00</MenuItem>
                    <MenuItem value="09:00">09:00</MenuItem>
                    <MenuItem value="10:00">10:00</MenuItem>
                    <MenuItem value="11:00">11:00</MenuItem>
                    <MenuItem value="12:00">12:00</MenuItem>
                    <MenuItem value="13:00">13:00</MenuItem>
                    <MenuItem value="14:00">14:00</MenuItem>
                    <MenuItem value="15:00">15:00</MenuItem>
                    <MenuItem value="16:00">16:00</MenuItem>
                    <MenuItem value="17:00">17:00</MenuItem>
                    <MenuItem value="18:00">18:00</MenuItem>
                    <MenuItem value="19:00">19:00</MenuItem>
                    <MenuItem value="20:00">20:00</MenuItem>
                    <MenuItem value="21:00">21:00</MenuItem>
                    <MenuItem value="22:00">22:00</MenuItem>
                    <MenuItem value="23:00">23:00</MenuItem>
                </Select>

                {
                    start_time !== "start"? (<Select variant="standard" 
                    name="end_time" id="end_time" value={end_time}
                    onChange={(e)=>{setEndTime(e.target.value); onEndChange(e.target.value);}}
                    className="h-[2em] w-[200px]">
                        <MenuItem value="end">Select End Time</MenuItem>
                        {start_time < "01:00" ? <MenuItem value="01:00">01:00</MenuItem> : null}
                        {start_time < "02:00" ? <MenuItem value="02:00">02:00</MenuItem> : null}
                        {start_time < "03:00" ? <MenuItem value="03:00">03:00</MenuItem> : null}
                        {start_time < "04:00" ? <MenuItem value="04:00">04:00</MenuItem> : null}
                        {start_time < "05:00" ? <MenuItem value="05:00">05:00</MenuItem> : null}
                        {start_time < "06:00" ? <MenuItem value="06:00">06:00</MenuItem> : null}
                        {start_time < "07:00" ? <MenuItem value="07:00">07:00</MenuItem> : null}
                        {start_time < "08:00" ? <MenuItem value="08:00">08:00</MenuItem> : null}
                        {start_time < "09:00" ? <MenuItem value="09:00">09:00</MenuItem> : null}
                        {start_time < "10:00" ? <MenuItem value="10:00">10:00</MenuItem> : null}
                        {start_time < "11:00" ? <MenuItem value="11:00">11:00</MenuItem> : null}
                        {start_time < "12:00" ? <MenuItem value="12:00">12:00</MenuItem> : null}
                        {start_time < "13:00" ? <MenuItem value="13:00">13:00</MenuItem> : null}
                        {start_time < "14:00" ? <MenuItem value="14:00">14:00</MenuItem> : null}
                        {start_time < "15:00" ? <MenuItem value="15:00">15:00</MenuItem> : null}
                        {start_time < "16:00" ? <MenuItem value="16:00">16:00</MenuItem> : null}
                        {start_time < "17:00" ? <MenuItem value="17:00">17:00</MenuItem> : null}
                        {start_time < "18:00" ? <MenuItem value="18:00">18:00</MenuItem> : null}
                        {start_time < "19:00" ? <MenuItem value="19:00">19:00</MenuItem> : null}
                        {start_time < "20:00" ? <MenuItem value="20:00">20:00</MenuItem> : null}
                        {start_time < "21:00" ? <MenuItem value="21:00">21:00</MenuItem> : null}
                        {start_time < "22:00" ? <MenuItem value="22:00">22:00</MenuItem> : null}
                        {start_time < "23:00" ? <MenuItem value="23:00">23:00</MenuItem> : null}
                        {start_time < "24:00" ? <MenuItem value="24:00">24:00</MenuItem> : null}

                    </Select>)
                    :  null
                } 
        </div>
        
    </div>
)}