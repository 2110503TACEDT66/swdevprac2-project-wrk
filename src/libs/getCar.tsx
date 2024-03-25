export default async function getCar(id:string) {
    const response = await fetch(`http://localhost:5050/api/v1/coWork/${id}`)
    if(!response.ok){
        throw new Error("Failed to fetch car")
    }

    return await response.json()
}