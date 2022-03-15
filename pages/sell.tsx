import { useSession, signIn, signOut, getSession } from "next-auth/react"
export default function sell(){
    const { data: session, status } = useSession()
    if (status === "unauthenticated") {
        return signIn()
    }
    const getShop = async event => {
        event.preventDefault()
        const response = await fetch('/api/shop_name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                name: event.target.search.value,
                user: {connect: {email: session?.user?.email}}
            })
        });

        if (!response.ok){
            throw new Error(response.statusText);
        }

        return await response.json();
    }
    return(
        <div className="m-[10%]">
            <div className="flex text-center justify-center text-3xl">
                <h3>Name your shop</h3>
            </div>
            <div className="text-center justify-center text-1xl">
                <h4>Choose a memorable name that reflects your style</h4>
            </div>
            <div className="mt-5 flex justify-center">
                <div className="mb-3 xl:w-96">
                    <form onSubmit={getShop} className="input-group relative items-center w-full mb-4">
                        <input type="search" id="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3"></input>
                        <button className="btn mt-5 ml-[25%]  px-6 py-2 border-2 border-orange-500 text-orange-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" id="name"  type="button">Check Availability</button>
                    </form>
                </div>
            </div>
        </div>
    )
}