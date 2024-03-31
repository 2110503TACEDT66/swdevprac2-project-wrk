export default async function updateReservation(token: string, coworkItem: any){
    const response = await fetch(`https://presentation-day-1-pqbs826g9-wrk-c44e290c.vercel.app/api/v1/reservation/${coworkItem.id}`, {
        method: 'PUT',
        headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            startTime: coworkItem.startTime,
            endTime: coworkItem.endTime,
        })
    })

	// console.log(ReservationDetail.data.coWork._id)
	console.log(coworkItem.startTime)
	console.log(coworkItem.endTime)
	console.log(token)



    const json = await response.json()

    if(!response.ok) {
        throw new Error(json.message); 
    }
    return json
}