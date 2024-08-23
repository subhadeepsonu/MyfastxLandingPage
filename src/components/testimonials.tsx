import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default function Testimonials(){
    return <div className="w-10/12 h-[65vh]  flex justify-between items-center ">
        <div className="h-full w-1/2  px-12 flex flex-col justify-around items-start">
            <p className="bg-gray-100 p-1 inline border-l-2 font-medium text-sm border-green-600">What our partner says</p>
            <div className="flex flex-col justify-around items-start">
            <p className="font-bold text-4xl">Testimonials</p>
            <div className="border-t-4 border-green-500 w-3/4 mt-2"></div>
            </div>
            <p className="font-medium text-gray-600 text-[17px]">At MyFastX, our commitment to excellence is reflected in the feedback from our valued customers. Here's what they have to say about their experiences with our quick and reliable delivery and logistics services</p>
            <div className="h-40 w-full ">
            <img className="h-full w-2/3 object-contain" src="https://utfs.io/f/64930574-ecff-4b4b-b6d8-63bc736d057c-6sb9qe.25.42_5b1d8721.jpg"></img>
            </div>
        </div>
        <div className="h-full w-1/2 flex justify-center items-center">
            <div className="h-[70%] w-5/6 py-5 bg-green-50 rounded-lg flex flex-col justify-around items-start px-10">
                <div className="flex w-56 justify-around items-center">
                    <div>
                        <img className="h-14 w-14" src="https://s3-alpha-sig.figma.com/img/39eb/7177/0fed45eca0505838ad3a8d7bc0e597a4?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iaN64ISwL2CRlHdmHH~MaMDj6OCp6Tcm4N8mZsYJreLqWkRb1oTpZxTBycxBdvzsZh0QRrV7FfHnLvGxD4WC1bOuI5gKTOF3ois4vwPFne4cyj2wsa4u-mA5JsvoCr2tya36RJ9~WKpvAkhvi2IJVuhA-kF0FPeDgKSbV01RfBmij2qmULYINqpKth7VwIfND9exIIuPtxt84BhdI29nt0UQeL5QWaWb3d2mvYSY8YpuIllShK4tLQoQWTimtFx2Z8zGHU7RKr8-0Qg6VY1aI9TTPEQkagxLyGau6majH7QhvTD4ZVYiGO2GWmbYhBxcIobv5cjmDLqgf513VtGnEA__"></img>
                    </div>
                    <div>
                        <p className="font-medium ">James Darwin</p>
                        <p className="text-sm text-gray-500">Kolkata, West Bengal</p>
                    </div>
                </div>
                <p className="font-medium text-gray-500">“ Joining MyFastX has been a game-changer for me. The flexible hours and reliable income have made my life so much easier. “</p>
                <p>⭐⭐⭐⭐⭐</p>
                <div className="w-full h-10 bg-transparent flex justify-between items-center">
                    <div className="h-8 w-40 rounded-lg bg-white flex justify-around items-center">
                        <div className="h-2 w-2 rounded-full bg-green-600 shadow-lg">
                                
                        </div>
                        <div className="h-2 w-2 rounded-full bg-gray-200 shadow-lg">
                                
                        </div>
                        <div className="h-2 w-2 rounded-full bg-gray-200 shadow-lg">
                                
                        </div>
                        <div className="h-2 w-2 rounded-full bg-gray-200 shadow-lg">
                                
                        </div>
                        <div className="h-2 w-2 rounded-full bg-gray-200 shadow-lg">
                                
                        </div>
                        <div className="h-2 w-2 rounded-full bg-gray-200 shadow-lg">
                                
                        </div>
                        
                        
                    </div>
                    <div className="w-16 flex justify-around items-center">
                    <div className="h-5 w-5 rounded-full bg-white shadow-lg flex justify-center items-center">
                        <MdKeyboardArrowLeft />
                        </div>
                        <div className="h-5 w-5 rounded-full bg-white shadow-lg flex justify-center items-center">
                        <MdKeyboardArrowRight />
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
        </div>
}