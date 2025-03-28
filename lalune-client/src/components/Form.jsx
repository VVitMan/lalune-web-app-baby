import { Link } from "react-router-dom";

export default function Form() {
    return (
        <div className="flex justify-center items-center w-full  min-h-screen bg-base-50 px-5 py-5">
            <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full 
            rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
                <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex">
                    {/* Image */}
                    <img src="src/assets/postcss.config.png" alt="dispel" className="h-[500px]" />
                </div>

                <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
                    <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#f97675]">
                        Dispel
                    </h1>
                    <div className="w-full mt-5 sm:mt-8">
                        <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="text"
                                    placeholder="Enter Your First Name"
                                    className="input input-bordered w-full max-w-xs text-black placeholder:text-black/60"
                                />
                                <input
                                    type="text"
                                    placeholder="Enter Your Last Name"
                                    className="input input-bordered w-full max-w-xs text-black placeholder:text-black/60"
                                />
                            </div>
                            
                            {/* Date */}
                            <input
                                type="date"
                                className="input input-bordered w-full text-black/60"
                            />

                            {/* Zodiac */}
                            <select defaultValue="Pick a Zodiac" className="select select-bordered text-black/60">
                                <option disabled={true}>Pick a Zodiac</option>
                                <option>Rat</option>
                                <option>Ox</option>
                                <option>Tiger</option>
                                <option>Rabbit</option>
                                <option>Dragon</option>
                                <option>Snake</option>
                                <option>Horse</option>
                                <option>Goat</option>
                                <option>Monkey</option>
                                <option>Rooster</option>
                                <option>Dog</option>
                                <option>Pig</option>
                            </select>

                            {/* Approve Privacy */}
                            <div className="flex items-center gap-1.5  justify-start pl-2">
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <input
                                        type="checkbox"
                                        className="checkbox-xs checkbox-primary"
                                        />
                                    </label>
                                </div>
                                <h3 className="flex items-center whitespace-nowrap text-xs text-black">
                                    I agree to the
                                    <span className="text-[#f97675]">&nbsp;Terms</span>
                                    &nbsp;and
                                    <span className="text-[#f97675]">&nbsp;Privacy Policy</span>.
                                </h3>
                            </div>

                            {/* 2 Button, Sent and Cancel */}
                            <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                                <Link to={"/"}>
                                    <button className="btn btn-active btn-primary btn-block max-w-[200px]">
                                        Cancel
                                    </button>
                                </Link>

                                <button className="btn btn-outline btn-primary btn-block max-w-[200px]">
                                    Sent
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}