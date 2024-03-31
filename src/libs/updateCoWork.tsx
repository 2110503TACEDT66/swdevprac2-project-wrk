export default async function updateCoWork(token: string, coworkItem: any){
    const response = await fetch(`https://presentation-day-1-pqbs826g9-wrk-c44e290c.vercel.app/api/v1/coWork/${coworkItem.id}`, {
        method: 'PUT',
        headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Open_time: coworkItem.Open_time,
            Close_time: coworkItem.Close_time,
        })
    })


    const json = await response.json()

    if(!response.ok) {
        throw new Error(json.message); 
    }
    return json
}