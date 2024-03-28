export default function ManageReservationLayout({children,dashboard,manage} : {children:React.ReactNode,dashboard:React.ReactNode,manage:React.ReactNode}){
    return (
        <div className="flex flex-col w-fit justify-center content-center items-center mx-auto">
            {children}
            {dashboard}
        </div>
    )
}