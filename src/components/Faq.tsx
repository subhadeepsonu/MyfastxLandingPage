import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { Button } from "./ui/button"
export default function Faqs(){
    return <div className="w-10/12 h-[85vh]  flex justify-between items-center mb-32 ">
        <div className="w-1/2 h-full pb-20 px-10 pr-24 flex flex-col justify-around py-10 items-start">
            
            <p className="bg-gray-100 p-1 border-l-2 border-green-500 text-sm  inline font-medium">Join the MyFastX Community Today!</p>
            <div>
            <p className="font-bold text-2xl pb-2">Ready to Get Started?</p>
            <div className="border-t-4 border-green-500 w-1/4 "></div>
            </div>
            <p>Don't miss out on this incredible opportunity to be part of a leading delivery and logistics platform. Sign up now for just Rs.999 and start driving your way to success with MyFastX!</p>
            <Button>Register Now</Button>
            <p>For more information, Contact us at:</p>
            <div className="flex justify-center items-center">
                <div className="bg-green-500 rounded-full p-2">
            <IoCallOutline className="text-white" />
            </div>
                <p className="pl-2">+91-XXXXX XXXXX</p>
            </div>
            <div className="flex justify-center items-center">
                <div className="bg-green-500 rounded-full p-2">
                <CiMail className="text-white" />
            </div>
            <p className="pl-2">support@myfastx.com  </p>
            </div>            
        </div>
        <div className="w-1/2 h-[75vh] mt-52 flex border-t-2 border-l-2  flex-col justify-around py-10 items-start px-10 ">
            <p className="bg-gray-100 p-1 border-l-2 border-green-500 text-sm inline font-medium">Frequently Asked Questions</p>
            <div className="flex flex-col justify-around items-start mb-10">
            <p className="font-bold text-2xl">Got Questions? Weve Got Answers!</p>
            <div className="border-t-4 border-green-500 w-1/4 mt-2"></div>
            </div>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What type of vehicles are eligible?</AccordionTrigger>
                        <AccordionContent>
                              Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How do I  get paid ?</AccordionTrigger>
                    <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>What areas does MyFastX operate in?</AccordionTrigger>
                    <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>What type of vehicles are eligible?</AccordionTrigger>
                    <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>What areas does MyFastX operate in?</AccordionTrigger>
                    <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                </AccordionItem>
    </Accordion>
        </div>
        </div>
}