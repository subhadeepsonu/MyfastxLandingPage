import { Button } from "./ui/button";
import Lottie from "lottie-react";
import busanimationn from "../../public/Animation - 1724348517046.json"
export default function Home(){
    return <div className="w-10/12 h-[85vh]  flex justify-between items-center">
        <div className="w-[33%] h-[95%] bg-gray-50  ">
            <div className="w-full h-[55%] p-10  rounded-t-xl">
                <Lottie animationData={busanimationn}></Lottie>
            </div>
             <div className="w-full px-10 h-[45%]  rounded-b-xl text-center flex flex-col justify-around items-center">
                     <div className="flex text-lg font-bold">
                        <p>Welcome to MyFast</p>
                        <p className="text-green-600">X Partner</p>
                    </div>
                    <p className="flex text-lg font-bold text-green-600">Quick & Reliable Delivery and Logistics Solution</p>
                    <p className="font-medium text-gray-600" >At MyFastX, we are revolutionizing the delivery and logistics industry by providing swift, dependable services to our clients. Our mission is to ensure every package reaches its destination on time, every time.</p>
            </div>
        </div>
        <div className="w-[65.5%] h-[95%] ml-2 flex flex-col justify-between items-center">
            <div className="h-[68%] w-full rounded-xl  ">
                <div className="h-[50%] w-full bg-gray-50 rounded-t-lg">
                    <img src="https://utfs.io/f/311ea66a-5c45-4ee5-87a4-142340510786-6sb9rb.40.56_c3792de9.jpg" className="h-full w-full object-cover rounded-t-lg"></img>
                </div>
                <div className="px-8 h-[50%] w-full bg-gray-50 rounded-b-lg flex flex-col justify-around items-start">
                    <p className="text-sm text-green-600 font-medium">Drive Your Success with MyFastX</p>
                    <p className="text-2xl tracking-tight font-bold">Join Us as a Partner Driver</p>
                    <p className="text-sm font-semibold text-gray-600">Are you a vehicle owner looking for new opportunities? Join MyFastX today and become part of a dynamic network of drivers. With us, youll enjoy flexible work hours, competitive earnings, and the satisfaction of delivering smiles across the city.</p>
                    <Button className="font-normal bg-black" size={"sm"}>Register now for just Rs. 999!</Button>

                </div>

            </div>
            <div className="h-[29%] w-full rounded-lg flex justify-between items-center ">
                <div className="h-full py-3 w-[24%] rounded-l-lg bg-green-50 px-2 flex flex-col justify-around items-start">
                    <img className="h-12" src="https://s3-alpha-sig.figma.com/img/aaf9/244f/1576421e5f09c19dc57fab4a07a4f758?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SP7ipbp2qbZrgIIviEwwMgsTH8eKEzoGq2pUVqL521W3LypQ~2Nxz5vdz2Ai0HBNacNAATF~R8l19KjYXgLO9vPXAcYO7XKTvlJtMsWjjswCUKne1bQuWdfs7Ud0lxtSCPW2ovxkixC~N56kT9AV~VcUMmP8YykX88XTroc6z6YXhGLByRzFjNtm9EXM-C-Wv3E5WcFlebm1xK3akPAptq6b-1zevRyufAlud7P0XZD2e8qNuhloqc3UFVaodvtag0ltmevbpF7LDVy6uyZsPmisb8Y2AET6DUrdey1l1DtcoEtag~vILLPCwUd4ibLlOHAjmzdlPOAM3jtMf1kLcQ__"></img>
                    <p className="text-[13px] text-green-600 font-medium">Reliable Income</p>
                    <p className="text-[13px] font-medium">Earn a steady income with consistent delivery requests.</p>
                </div>
                <div className="h-full py-3 w-[24%] rounded-l-lg bg-green-50 px-2 flex flex-col justify-around items-start">
                    <img className="h-12" src="https://s3-alpha-sig.figma.com/img/422e/b56f/ad51c832f1122090e237d09e5734a8f8?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NLKmUjbm~CJSmrfAjIOBWjTNix73WEK3jdcSoutwDHERB3wqTIa4AtMs0Q60oOAjKa4I3vBLmT64BiC-wTO7l9N~WADSpbjMtnRsQwVOLQL6j7U~1am~1rXV2~LZnNXj2wpmg9jH7uTVEHFgqyGMKT59TwH5-FiYnP6t1vq6h5UKTBCQ7GKtmhCM8heWZXMYyYvtlNmDGyMn5baC32txJwisd~tze5kM9BW5f2RVx0~HFHBqhuje~bEKAEWXYeKyEy~17l545B3FqRJXnj-2gzRlg-q3SFMOGv~P7wckhEUkKgeEAERSK-yengMPGGt56NpjnWzmcbnkLNEYeeoWYQ__"></img>
                    <p className="text-[13px] text-green-600 font-medium">Flexible Schedule</p>
                    <p className="text-[13px] font-medium">Choose your working hours and balance your personal life.</p>
                </div>
                
                <div className="h-full py-3 w-[24%] rounded-l-lg bg-green-50 px-2 flex flex-col justify-around items-start">
                    <img className="h-12" src="https://s3-alpha-sig.figma.com/img/dd4b/fdc8/a661eba10cf0df5944b73f2ae1e64817?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jEJMlVwaMtIatlLseWY7~COLmS85PB~UmL8J5H-QqMSXlXqMhZx3UdHJ1-mFW1FUQhSsyFBIHN~qN0C5h75~lpdz1CG6NtH9kGFaV0H6XyATkC9pr05C0FTtWR4gAQVHMkq88N0VVz-6mci4lhwDqY0YYqjweJUVdtnQOmE8bT8YsWNqnhmGTl2K1FDhdIxt~O0t4qgjH8C2c4LYv9CORxGVbF4646j~uhI0V43qdt9MQAD9HEuQrgO87GLrvmQLyDCCAHCvlqB3S-aegOQSRwcFzYyhNm1Fyn-sC7uo9oJningpjURjfwVQwRkR2Y0DBADavGs1Ya0PK2C1shGybA__"></img>
                    <p className="text-[13px] text-green-600 font-medium">Support</p>
                    <p className="text-[13px] font-medium">Access our dedicated support team whenever you need assistance.</p>
                </div>
                <div className="h-full py-3 w-[24%] rounded-r-lg bg-green-50 px-2 flex flex-col justify-around items-start">
                    <img className="h-12" src="https://s3-alpha-sig.figma.com/img/1dfb/ad64/fd1651d8209a8d40bf097456bacf9711?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHeUWfavM5kDhNZ6-LBW1NyhTWWpjgcUhB0Wx1E8ZbOVjeZyRw1tiG-~36hpKesAB8403M~yTLq4ZINH7Cn8gZw8rgtuRvDxfKyVJTXGCbbvBhE64eS3HjA3o9iCh49c7ZmBP5rquhpS3wvwvKI7oYso-QsBrwu8u-BgL6jpEX5Rf4U3SZsxe2HFr8M~WsJhRfacDVQ9Xra1vy7zwCMgumUniktyKQ0wNzvd7z2gtwYLlp8su0winI-PN3WAySMz5YrynL140nE-6Hjzv-5Qi4eUa062aCvcFrC~jZjyJa6gX1-wPtY5VdtRM~DFvIgdvw490~Lb~Ny7yJQfXWZQZQ__"></img>
                    <p className="text-[13px] text-green-600 font-medium">Growth opportuninies</p>
                    <p className="text-[13px] font-medium">Advance your career with regular training and development programs.</p>
                </div>
            </div>
        </div>
    </div>
}