import Image from "next/image"
import getCar from "@/libs/getCar"

export default async function CarDetailPage({params} : {params:{cid:string}}){

    const CarDetail = await getCar(params.cid)

    const mockCarRepo = new Map()
    mockCarRepo.set("001",{name:"Honda Civic",image:"/img/civic.jpg"})
    mockCarRepo.set("002",{name:"Honda Accord",image:"/img/accord.jpg"})
    mockCarRepo.set("003",{name:"Toyota Fortuner",image:"/img/fortuner.jpg"})
    mockCarRepo.set("004",{name:"Tesla Model 3",image:"/img/tesla.jpg"})

    return (
        <main className="text-center p-5">
            <h1 className = "text-lg font-medium">{CarDetail.data.model}</h1>
            <div className="flex flex-row my-5">
                <Image src = {CarDetail.data.picture}
                alt ='Car Image' width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 text-left">{CarDetail.data.description}
                <div className="text-md mx-5">Doors: {CarDetail.data.doors}</div>
                <div className="text-md mx-5">Seats: {CarDetail.data.seats}</div>
                <div className="text-md mx-5">Large Bags: {CarDetail.data.largebags}</div>
                <div className="text-md mx-5">Small Bags:{CarDetail.data.smallbags}</div>
                <div className="text-md mx-5">Daily Rental Rate: {CarDetail.data.dayRate} (insurance includeed)</div>
                </div>

            </div>
        </main>
    )
}


export async function generateStaticParams() {
    return [{cid:'001'},{cid:'002'},{cid:'003'},{cid:'004'}]
}