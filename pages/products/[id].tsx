import ReactStars from "react-rating-stars-component";
import { useSession, signIn, signOut } from "next-auth/react"

export async function getStaticPaths() {
    const res = await fetch('http://273-lab1.vercel.app/api/store/getAllItems')
    const pros = await res.json()

    const paths = pros.map((pro) => ({
        params: { id: parseInt(pro.ProductId) },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://273-lab1.vercel.app/api/store/getItembyId/${params.id}`);
    const data = await res.json();
    return {
        props: {
            item: data,
        },
    }
}



const products = ({ item }) => {

    const { data: session, status } = useSession()
    async function createFavorites(){
        await fetch(`/api/user/createFavorites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                productId: String(item.id),
                title: String(item.title),
                price: item.price,
                image: String(item.image),
                email: String(session?.user?.email),
                user: {connect: {email: session?.user?.email}}
            })
        });
        alert("Added to your favorites")
    }  

    async function createCart(){
        console.log(item.id)
        await fetch(`/api/cart/createCart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                productId: String(item.id),
                title: String(item.title),
                price: item.price,
                image: String(item.image),
                email: String(session?.user?.email),
                user: {connect: {email: session?.user?.email}}
            })
        });
        alert("Item added to your Cart")
    }  

    return (
        <div className="mx-[20%] flex flex-wrap overflow-hidden">

            <div className="my-10 px-10 w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                <img className="rounded-sm h-64 w-64" src={String(item.image)} />
            </div>

            <div className="my-10 px-10 w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                <p className='mt-5 text-2xl text-orange-400 font-semibold'>
                    {item.title}
                </p>
                <p>
                <ReactStars
                    value={item.rating.rate}
                    starRatedColor="orange"
                    count={5}
                />
                </p>
                <p className='mt-5 text-1xl'>
                    ${item.price}
                </p>
                <p className='mt-5 text-1xl'>
                    <span className="font-semibold">Category: </span>{item.category}
                </p>
                <p className='mt-5 text-1xl'>
                    {item.description}
                </p>
                {session && (
                    <div>
                <button onClick={() => createFavorites()} className="mt-5 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Add to your Favorites
                </button>
                <button onClick={() => createCart()} className="mt-5 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Add to your Cart
                </button>
                </div>
        
                )
                }
            </div>

        </div>
    )
}
export default products