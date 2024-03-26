export default async function addNewcoWork(coworkName:string ,coworkAddress:string,coworkDistrict:string,coworkProvince:string,coworkPostalcode:string,coworkRegion:string,coworkTel:string,coworkOpen_time:string,coworkClose_time:string,coworkPicture:string,) {

    const response = await fetch("http://localhost:5050/api/v1/coWork",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name:  coworkName,
            address: coworkAddress,
            district: coworkDistrict,
            province: coworkProvince,
            postalcode: coworkPostalcode,
            region: coworkRegion,
            tel: coworkTel,
            Open_time :coworkOpen_time,
            Close_time :coworkClose_time,
            picture :coworkPicture
        }),
    })

    if(!response.ok){
        throw new Error("Failed to add new coWorking space")
    }

    return await response.json()
}