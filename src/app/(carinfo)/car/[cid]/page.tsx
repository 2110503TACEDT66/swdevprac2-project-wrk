import Image from "next/image"
import getCar from "@/libs/getCar"

export default async function CarDetailPage({params} : {params:{cid:string}}){

    const CarDetail = await getCar(params.cid)
    return (
        <main className="text-center p-5">
            <h1 className = "text-lg font-medium">{CarDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src = {CarDetail.data.picture}
                alt ='Car Image' width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 text-left">{CarDetail.data.address}
                <div className="text-md mx-5">{CarDetail.data.district}</div>
                <div className="text-md mx-5">{CarDetail.data.region}</div>
                <div className="text-md mx-5">Open time: {CarDetail.data.Open_time}</div>
                <div className="text-md mx-5">Close time:{CarDetail.data.Close_time}</div>
                <div className="text-md mx-5">Tel: {CarDetail.data.tel}</div>
                </div>

            </div>
        </main>
    )
}


export async function generateStaticParams() {
    return [{cid:'001'},{cid:'002'},{cid:'003'},{cid:'004'}]
}