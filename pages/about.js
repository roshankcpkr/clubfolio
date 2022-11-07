const About = ()=>{
    return (
        <div className="h-full mt-32 w-full ">
        <div className="h-full w-full border p-16">
            <div className="flex justify-between p-16">
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-serif font-semibold text-gray-700 mb-8">About Us</h1>
                    <p className="text-xl font-serif mb-4">We are official club of Mount Annapurna campus. Helping students to learn and grow in the field of technology.</p>
                </div>
                <div className="flex justify-center h-60 md:w-1/2">
                    <img src="images/image6.png" className="block" alt=""/>
                </div>
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div className="p-16">
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl font-serif font-semibold text-gray-700 mb-8">Committee Members</h2>
                    <p className="text-xl font-serif mb-4">Meet our team</p>
                </div>
                <div>
                <div class="container grid md:grid-cols-3 grid-cols-1 gap-2 mx-auto">
                <div class="w-full relative cursor-pointer ">
                <img class="rounded-xl w-full h-[200px] md:h-[400px] object-cover" src="/images/amrit.jpg" alt="" />
                <div class="absolute flex flex-col p-6 rounded-b-xl justify-between bottom-0 w-full h-3/3 bg-green-600 bg-opacity-70">
                    <div class=" self-right text-center justify-between text-white">
                        <h4 class="text-xl font-bold">Amrit Thapa</h4>
                        <p class="mt-1 text-md font-semibold">Graphics designer and video editor (3rd Semester)</p>
                    </div>
                </div>
                </div>
                <div class="w-full relative cursor-pointer ">
                <img class="rounded-xl w-full h-[200px] md:h-[400px] object-cover" src="/images/rajani.jpg" alt="" />
                <div class="absolute flex flex-col p-6 rounded-b-xl justify-between bottom-0 w-full h-3/3 bg-green-600 bg-opacity-70">
                    <div class=" self-right text-center justify-between text-white">
                        <h4 class="text-xl font-bold">Rajani Shrestha</h4>
                        <p class="mt-1 text-md font-semibold">Second Semester student</p>
                    </div>
                </div>
                </div>
                <div class="w-full relative cursor-pointer ">
                <img class="rounded-xl w-full h-[200px] md:h-[400px] object-cover" src="/images/bijay.jpg" alt="" />
                <div class="absolute flex flex-col p-6 rounded-b-xl justify-between bottom-0 w-full h-3/3 bg-green-600 bg-opacity-70">
                    <div class=" self-right text-center justify-between text-white">
                        <h4 class="text-xl font-bold">Bijay Thapa</h4>
                        <p class="mt-1 text-md font-semibold">Second Semester Student</p>
                    </div>
                </div>
                </div>
                <div class="w-full relative cursor-pointer ">
                <img class="rounded-xl w-full h-[200px] md:h-[400px] object-cover" src="/images/akariti.jpg" alt="" />
                <div class="absolute flex flex-col p-6 rounded-b-xl justify-between bottom-0 w-full h-3/3 bg-green-600 bg-opacity-70">
                    <div class=" self-right text-center justify-between text-white">
                        <h4 class="text-xl font-bold">Aakriti Bhusal</h4>
                        <p class="mt-1 text-md font-semibold">Fifth semester student</p>
                    </div>
                </div>
                </div>
                <div class="w-full relative cursor-pointer ">
                <img class="rounded-xl w-full h-[200px] md:h-[400px] object-cover" src="/images/binay.jpg" alt="" />
                <div class="absolute flex flex-col p-6 rounded-b-xl justify-between bottom-0 w-full h-3/3 bg-green-600 bg-opacity-70">
                    <div class=" self-right text-center justify-between text-white">
                        <h4 class="text-xl font-bold">Binay Adhikari</h4>
                        <p class="mt-1 text-md font-semibold">Seventh Semester student</p>
                    </div>
                </div>
                </div>
                <div class="w-full relative cursor-pointer ">
                <img class="rounded-xl w-full h-[200px] md:h-[400px] object-cover" src="/images/dipika.jpg" alt="" />
                <div class="absolute flex flex-col p-6 rounded-b-xl justify-between bottom-0 w-full h-3/3 bg-green-600 bg-opacity-70">
                    <div class=" self-right text-center justify-between text-white">
                        <h4 class="text-xl font-bold">Dipika poudel</h4>
                        <p class="mt-1 text-md font-semibold">Third Semester student</p>
                    </div>
                </div>
                </div>
            </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default About