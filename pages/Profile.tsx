import { useSession, signIn, signOut } from "next-auth/react"
export default function Profile(){
    
    
    const { data: session, status } = useSession()
    if (status === "unauthenticated") {
        return signIn()
    }
    return (
        <div className="flex-auto w-full justify-items-stretch">
            <img className="rounded-full h-25 w-25 mt-4 ml-[5%]" src={String(session?.user?.image)}/>
            <span className="font-light font-mono">{session?.user?.name}</span>
        </div>
    )
}
