import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useState, useEffect } from "react"
// export async function getStaticProps() {
//     const res = await fetch('http://localhost:3000/api/user/getFavorites')
//     console.log(res)
//     const data = await res.json();
//     console.log(data)
//     return {
//         props: {
//             items: data
//         }
//     }
// }
const profile = () => {
    const [data, setData] = useState<any[]>([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:3000/api/user/getFavorites')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
          })
      }, [])

    const { data: session, status } = useSession()
    if (status === "unauthenticated") {
        return signIn()
    }

    return (
        <div className="ml-[20%]">
            <div className="flex w-full justify-items-stretch">
                <img className="rounded-full h-25 w-25 mt-4 ml-[5%]" src={String(session?.user?.image)} />
                <span className="text-2xl ml-[1%] mt-[1.8%] font-light font-mono">{session?.user?.name}
                    <p className="text-sm font-thin">0 followers &nbsp;&nbsp; 0 following</p>
                </span>
                <button className="ml-[0.5%] -mt-[0.5%]">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48"><path fill="#c94f60" d="M42.583,9.067l-3.651-3.65c-0.555-0.556-1.459-0.556-2.015,0l-1.718,1.72l5.664,5.664l1.72-1.718	C43.139,10.526,43.139,9.625,42.583,9.067"></path><path fill="#f0f0f0" d="M6.905,35.43L5,43l7.571-1.906l0.794-6.567L6.905,35.43z"></path><path fill="#edbe00" d="M36.032,17.632l-23.46,23.461l-5.665-5.665l23.46-23.461L36.032,17.632z"></path><linearGradient id="YoPixpDbHWOyk~b005eF1a_OWRPl8fxkRvG_gr1" x1="35.612" x2="35.612" y1="7.494" y2="17.921" gradientUnits="userSpaceOnUse"><stop offset="0"></stop><stop offset="1"></stop></linearGradient><path fill="url(#YoPixpDbHWOyk~b005eF1a_OWRPl8fxkRvG_gr1)" d="M30.363,11.968l4.832-4.834l5.668,5.664l-4.832,4.834L30.363,11.968z"></path><path fill="#787878" d="M5.965,39.172L5,43l3.827-0.965L5.965,39.172z"></path></svg>
                </button>
            </div>

            <div>
                <p className=" mt-[5%] ml-[5%] text-3xl font-medium">Favorite Items
                    <button className="ml-[0.5%] -mt-[0.5%]">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48"><path fill="#c94f60" d="M42.583,9.067l-3.651-3.65c-0.555-0.556-1.459-0.556-2.015,0l-1.718,1.72l5.664,5.664l1.72-1.718	C43.139,10.526,43.139,9.625,42.583,9.067"></path><path fill="#f0f0f0" d="M6.905,35.43L5,43l7.571-1.906l0.794-6.567L6.905,35.43z"></path><path fill="#edbe00" d="M36.032,17.632l-23.46,23.461l-5.665-5.665l23.46-23.461L36.032,17.632z"></path><linearGradient id="YoPixpDbHWOyk~b005eF1a_OWRPl8fxkRvG_gr1" x1="35.612" x2="35.612" y1="7.494" y2="17.921" gradientUnits="userSpaceOnUse"><stop offset="0"></stop><stop offset="1"></stop></linearGradient><path fill="url(#YoPixpDbHWOyk~b005eF1a_OWRPl8fxkRvG_gr1)" d="M30.363,11.968l4.832-4.834l5.668,5.664l-4.832,4.834L30.363,11.968z"></path><path fill="#787878" d="M5.965,39.172L5,43l3.827-0.965L5.965,39.172z"></path></svg>
                    </button>
                    <input type="text" className="ml-[20%] -mr-[3%] border-2 border-black bg-gray-100 h-10 px-5 pr-20 rounded-full text-sm focus:outline-none" placeholder="Search" />
                    <button type="submit" className="relatvie">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 35 15"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path></svg>
                    </button>
                </p>
            </div>
            <div className="flex flex-wrap -mx-3 overflow-hidden">
            {data?.map(item => (
                    <div key={item.productIdd} className="my-3 px-3 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                      
                      <img className="rounded-sm h-64 w-64" src={String(item.image)}/>
                      <Link href={String("products/"+(item.id))}>
                        <a className='text-2xl text-orange-400'>
                            {item.title}
                        </a>
                      </Link>
                      <p>
                </p>
                        <p>
                            ${item.price}
                        </p>
                    </div>
                ))
}
            </div>
        </div>
    )
}

export default profile