import { Button } from "@/components/ui/button";
import { FaEnvelope, FaLockOpen } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="flex flex-wrap w-full">
            <div className="flex flex-col w-full md:w-1/2">
                <div className="flex justify-center pt-12">
                    <Link to="/" className="p-4 text-xl font-bold text-white bg-black">
                        EventCraft.
                    </Link>
                </div>
                <div className="flex flex-col justify-center px-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                    <p className="text-3xl text-center text-gray-950 font-semibold md:pb-4">
                        Welcome Back.
                    </p>
                    <form className="flex flex-col pt-4">
                        <div className="flex flex-col pt-4">
                            <div className="flex relative ">
                                <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                    <FaEnvelope />
                                </span>
                                <input type="text" id="design-login-email" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="flex flex-col pt-4">
                            <div className="flex relative ">
                                <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                    <FaLockOpen />
                                </span>
                                <input type="password" id="design-login-password" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Password" required />
                            </div>
                        </div>
                        <Button className="btn btn-outline btn-success bg-green-50 mt-12">
                            Submit
                        </Button>
                    </form>
                    <div className="mt-12 text-center text-gray-900">
                        <p>
                            Don&#x27;t have an account?{' '}
                            <Link to="/user/SignUp/" className="font-semibold underline">
                                Register here.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 shadow-2xl">
                <img className="hidden object-cover w-full h-screen md:block" src="/src/assets/img/pexels-sam-lion-5732440.jpg" alt="cripptity crappity" />
            </div>
        </div>

    )
}