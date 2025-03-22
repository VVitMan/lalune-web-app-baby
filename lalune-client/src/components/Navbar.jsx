import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 gap-3">
        <div className="px-4" id="brand">
            <Link to={"/"}>
                <div className="btn btn-ghost text-2xl">
                    <p className="text-red-400 font-bold">LaLune</p>
                </div>
            </Link>
        </div>

        <Link to={"/about"}>
            <div className="btn btn-ghost text-sm">
                <p className="text-red-400">About</p>
            </div>
        </Link>

        {/* Dispel */}
        <Link to={"/dispel"}>
            <div className="btn btn-ghost text-sm">
                <p className="text-red-400">Dispel</p>
            </div>
        </Link>

        <Link to={"/fortune-stick"}>
            <div className="btn btn-ghost text-sm">
                <p className="text-red-400">Fortune Stick</p>
            </div>
        </Link>

        <Link to={"/donate"}>
            <div className="btn btn-ghost text-sm">
                <p className="text-red-400">Donate</p>
            </div>
        </Link>

        
    </div>
  )
}