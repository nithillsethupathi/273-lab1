import Navbar from "./Navbar"
export default function Layout({ children }: {children: any}) {
    return (
      <div className="content">
        <Navbar />
        {children}
      </div>
    )
  }