export default async function updateCoWork(token: string, coworkItem: any){
    const response = await fetch(`http://localhost:5050/api/v1/reservation/${coworkItem.id}`, {
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


    const json = await response.json()

    if(!response.ok) {
        throw new Error(json.message); 
    }
    return json
}