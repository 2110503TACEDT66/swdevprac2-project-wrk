import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"

export default async function DashboardPage(){

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const proflie = await getUserProfile(session.user.token)
    var createdAt =new Date(proflie.data.createdAt)

    return (
        <main className="bg-slate-100 m-5 p-5">
            <div className="text-2xl">{proflie.data.name}</div>
            <table className="table-auto border-separate border-spacing-2 "><tbody>
                <tr><td>Email</td><td>{proflie.data.email}</td></tr>
                <tr><td>Tel.</td><td>{proflie.data.tel}</td></tr>
                <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
            </tbody></table>
        </main>
    )
}