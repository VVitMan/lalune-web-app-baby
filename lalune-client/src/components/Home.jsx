import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="hero bg-base-50 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-slate-800">LaLune</h1>
            <p className="py-6 text-slate-800">
              LaLune is the website that we want to help people who do not have a chance to ward off bad luck.
            </p>
            
            <button className="btn bg-red-400">
              <p className="text-base-100">Get Started</p>
            </button>

            <Link to={"/donate"}>
              <button className="btn bg-red-400">
                <p className="text-base-100">Donate</p>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="hero bg-amber-100 min-h-screen">
        <p>page 2</p>
      </div>
    </>
  )
}