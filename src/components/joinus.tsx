import { Button } from "./ui/button";

export default function JoinUs() {
    return <div className="w-full h-[60vh]  flex justify-center items-center bg-green-50">
        <div className="w-1/2 h-2/3 flex flex-col justify-around items-center text-center ">
            <p className="font-medium text-green-500">Drive Your Success with MyFastX</p>
            <p className="text-4xl font-bold">Join Us as a Partner Driver</p>
            <p className="text-gray-500 font-medium">Are you a vehicle owner looking for new opportunities? Join MyFastX today and become part of a dynamic network of drivers. With us, you’ll enjoy flexible work hours, competitive earnings, and the satisfaction of delivering smiles across the city.</p>
            <Button>Register now for just Rs. 999!</Button>
        </div>
        </div>
}