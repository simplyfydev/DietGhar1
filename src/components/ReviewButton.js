import { FcGoogle } from "react-icons/fc";
export default function ReviewButton() {
    return (
        <div>
            <div className="flex justify-center">
                <button className="flex bg-[#9AC435] text-white rounded-full px-6 py-3 transition border-2 shadow-lg border-white">
                    Review Us on Google
                    <FcGoogle className="text-xl ml-2 mt-[2px]" />
                </button>
            </div>
        </div>
    )
}
