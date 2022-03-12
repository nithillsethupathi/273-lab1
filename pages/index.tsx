import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../comps/Navbar'
const Home: NextPage = () => {
  return (

    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Etsy Prototype</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
      <nav className="mx-52 flex justify-between p-4">
        <div className="w-screen flex flex-shrink-0">
          <svg className="w-[8%] ]mr-2 fill-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 24" aria-hidden="true"><path d="M6.547 3.125v6.008s2.117 0 3.25-.086c.891-.156 1.055-.242 1.219-1.133l.328-1.305h.969l-.164 2.852.086 2.922h-.977l-.242-1.141c-.242-.812-.57-.977-1.219-1.055-.812-.086-3.25-.086-3.25-.086v5.039c0 .969.492 1.383 1.625 1.383h3.414c1.055 0 2.109-.086 2.766-1.625l.883-1.953h.82c-.086.406-.492 3.984-.57 4.789 0 0-3.086-.078-4.383-.078H5.25l-3.492.078v-.883l1.133-.25c.82-.164 1.062-.406 1.062-1.055 0 0 .086-2.195.086-5.852 0-3.648-.086-5.844-.086-5.844 0-.727-.242-.891-1.062-1.055l-1.133-.24v-.891l3.414.07h6.5c1.297 0 3.484-.234 3.484-.234s-.078 1.375-.164 4.625h-.891l-.328-1.141c-.32-1.461-.805-2.188-1.703-2.188H6.961c-.414.001-.414.079-.414.329zm13.156.641h.977V7.18l3.336-.164-.164 1.547-3.25-.25v6.016c0 1.703.57 2.359 1.547 2.359.883 0 1.539-.492 1.781-.898l.484.57c-.484 1.133-1.859 1.703-3.164 1.703-1.617 0-2.93-.969-2.93-2.836V8.398h-1.938v-.812c1.626-.164 2.837-1.141 3.321-3.82zm6.992 10.476.648 1.547c.242.648.812 1.305 2.109 1.305 1.383 0 1.953-.734 1.953-1.625 0-2.766-5.445-1.953-5.445-5.688 0-2.109 1.703-3.094 3.898-3.094.977 0 2.438.164 3.172.492-.164.812-.25 1.867-.25 2.68l-.805.078-.57-1.625c-.164-.398-.82-.727-1.625-.727-.977 0-1.953.406-1.953 1.461 0 2.516 5.609 1.953 5.609 5.688 0 2.117-1.867 3.25-4.148 3.25-1.703 0-3.414-.656-3.414-.656.164-.969.086-2.023 0-3.086h.821zm6.336 7.797c.242-.891.406-2.023.57-3.086l.891-.078.328 1.703c.078.406.32.734.969.734 1.055 0 2.438-.648 3.742-2.922-.578-1.383-2.281-5.844-3.828-9.258-.406-.898-.484-.977-1.047-1.141l-.414-.156v-.82l2.445.086 3-.164v.813l-.734.164c-.57.078-.805.398-.805.727 0 .086 0 .164.078.328.156.492 1.461 4.141 2.438 6.578.805-1.703 2.352-5.523 2.594-6.172.086-.328.164-.406.164-.648 0-.414-.242-.656-.805-.812l-.578-.165v-.812l2.281.078 2.109-.078v.812l-.406.32c-.812.328-.898.406-1.219 1.062l-3.57 8.359c-2.117 4.797-4.312 5.203-5.852 5.203-.976.001-1.71-.249-2.351-.655z" /></svg>
          <div className="relative w-full">
            <input type="text" className="w-full border-2 border-black bg-gray-200 h-12 px-5 pr-20 rounded-full text-md focus:outline-none" placeholder="Search for Everything" />
            <div className="absolute top-2 right-3">
              <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path></svg>
              </button>
            </div>
          </div>
          <button type="submit" className="w-[5%] mt-3 ml-4 flex rounded-full border-white hover:bg-gray-200">Sign in</button>
          <button type="submit" className="w-[5%] mx-auto flex justify-center items-center rounded-full border-white hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 0 50 25" aria-hidden="true" focusable="false">
              <path d="M9 22a2 2 0 100-4 2 2 0 000 4zm7 0a2 2 0 100-4 2 2 0 000 4zm5-17H5.665l-.687-3.21A1 1 0 004 1H1a1 1 0 000 2h2.191l2.831 13.21a.962.962 0 00.064.159c.017.053.038.105.063.155a.979.979 0 00.133.153.926.926 0 00.088.1c.058.041.12.077.185.105.034.022.07.042.107.06A.993.993 0 007 17h11a1 1 0 00.958-.713l3-10A1.001 1.001 0 0021 5zm-2.244 5H16V7h3.656l-.9 3zM7.819 15l-.6-3H9v3H7.819zM11 12h3v3h-3v-3zm0-2V7h3v3h-3zM9 7v3H6.82l-.6-3H9zm8.256 8H16v-3h2.156l-.9 3z"></path>
            </svg>
          </button>
        </div>
      </nav>

      <div className="flex w-full justify-center items-center flex-shrink-0 border-2 border-white border-b-gray-200">
        <p className="flex justify-between flex-wrap p-4">Home Favorites</p>
        <p className="flex justify-between flex-wrap p-4">Jewelery & Accessories</p>
        <p className="flex justify-between flex-wrap p-4">Clothing & Shoes</p>
        <p className="flex justify-between flex-wrap p-4">Home & Living</p>
        <p className="flex justify-between flex-wrap p-4">Toys & Entertainment</p>
        <p className="flex justify-between flex-wrap p-4">Craft Supplies</p>
        <p className="flex justify-between flex-wrap p-4">Gifts & Gift Cards</p>
      </div>

      <div className="w-full max-h-40 flex-auto bg-[#FDEBD2]">
        <div className="mt-4 w-full flex-auto flex-col justify-center px-20 text-center">
          <h3 className="text-5xl font-serif ">
            Explore one-of-a-kind finds from independent makers
          </h3>
        </div>
        <div className="mt-4 flex w-full justify-center items-center flex-shrink-0">
          <img className="rounded-full h-40 w-40 mr-10" src="https://i.etsystatic.com/12397853/r/il/505fa0/2426681051/il_300x300.2426681051_mocv.jpg" />
          <img className="rounded-full h-40 w-40 mr-10" src="https://i.etsystatic.com/29669210/r/il/48a8a1/3619807266/il_300x300.3619807266_4hg4.jpg" />
          <img className="rounded-full h-40 w-40 mr-10" src="https://i.etsystatic.com/8928370/r/il/f32f25/3376320499/il_300x300.3376320499_7sqq.jpg" />
          <img className="rounded-full h-40 w-40 mr-10" src="https://i.etsystatic.com/5395361/r/il/5bb896/3641190222/il_300x300.3641190222_fydq.jpg" />
          <img className="rounded-full h-40 w-40 mr-10" src="https://i.etsystatic.com/10115319/r/il/b2ab7a/3171926331/il_300x300.3171926331_p6i7.jpg" />
          <img className="rounded-full h-40 w-40 mr-10" src="https://i.etsystatic.com/10448437/r/il/8d7c57/1985247369/il_300x300.1985247369_d33t.jpg" />
        </div>
      </div>
      
      <div className="w-full flex-auto">
      <div className="mt-[10%]">
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#FDEBD2] rotate-180" viewBox="0 0 1400 48" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path d="m1400 0-55 12-23 10-23 4-6-1-9 1-5 2-24 8h-11l-18-5-11-1-10-1h-7l-8 3-8 1-14-4v1l-3 1-9-5-3-1-17 2-10-1-9-1-8 1-7 1-2 1h-13l-2-1-13-2h-20l-11 2-14 3h-18l-10 1-3-1-2-1-4-1h-4l-16 1h-2l-7-1h-6l-8 1-6-2-5-1-2 1-20-1-10 2h-6l-11-1-9-1h-4l-3 1-19 1h-19l-3-1-11 1h-2l-7 3h-23l-3 1h-19l-16-1-17 1h-8l-2-1-20-2-4 1-4-1h-2l-12 1-2 1h-13l-9 1h-4l-6-1-10 1-9-1h-15l-9 2-12-2-12-2-3 2-5 2-11-3-6 1h-6l-28 1-5 2h-33l-3 1-4 2h-17l-5 1-4-1-7-1h-5l-4 1-13 3-2-2-2-1h-15l-22-1h-2l-11 1h-5l-2-1h-19l-9 1-6-1h-2l-9 2-15 2h-4l-12 1h-25l-12 1-7 1h-4l-4 1h-4l-4 1h-20l-3-1h-7l-1-1v-4l-1 1h-2l-9 1-2 2-6 2-7 1-5 2h-2l-3-2-8-1h-4l-11 3h-1l-3-2-11-3-20-6-9-3h-3l-9 2h-5l-11-4-13-3-11-15-21-4L0 0h1400z" /></svg>
      </div>
      <div className="w-full flex-auto bg-[#FDEBD2]">
        <div className="flex w-full items-center flex-auto flex-col px-20">
          <h3 className="text-5xl italic font-semibold">
            What is Etsy?
          </h3>
          <div className="mx-[10%] grid text-center grid-cols-3 gap-12 mt-5">
            <div>
              <p className="text-3xl font-semibold">A community doing good</p>
              <p className="text-2xl font-light">Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some of the ways we’re making a positive impact, together.</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Support independent creators</p>
              <p className="text-2xl font-light">There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Support independent creators</p>
              <p className="text-2xl font-light">Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
