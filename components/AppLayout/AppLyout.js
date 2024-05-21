import { useUser } from "@auth0/nextjs-auth0/client"
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const AppLayout = ({ children }) => {
    const { user } = useUser();
    console.log(user);

    return <div className="grid grid-cols-[300px_1fr]">
        <div className="h-screen flex flex-col justify-between pt-3 text-white bg-gradient-to-b from-slate-900 to-slate-700">
            <h1 className="text-center text-2xl p-2">Blog Builder</h1>
            <div className="w-full p-2 text-center">
                <Link href='/post/new' className="w-full text-center block uppercase py-1 rounded-sm bg-green-400 hover:bg-green-600 transition-all duration-300">NEW POST</Link>
                <Link href='/token-topup' className="text-sm hover:underline">
                    <FontAwesomeIcon icon={faCoins} className="text-yellow-300 pr-1" />
                    24 tokens available</Link>
            </div>
            <div className="w-full h-full p-2 gap-1 flex flex-col items-center overflow-y-auto">
                posts list
            </div>
            <div className="w-full border-t-2 border-t-white p-2 mt-2 flex gap-2 items-center">
                {!!user ? <>
                    <Image className="rounded-full" src={user.picture} alt="user's picture" width={40} height={40} />
                    <div className="flex flex-col">
                        <p>{user.email}</p>
                        <Link href='/api/auth/logout' className="">Logout</Link>
                    </div>
                </>
                    :
                    <Link href='/api/auth/login' className="">Login</Link>
                }
            </div>
        </div>
        <div>
            {children}
        </div>
    </div>
}