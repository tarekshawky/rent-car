export default function HeroSection(){
    return (
        <section id="hero" className="bg-[#5937E0]"
                 style={{
                     backgroundImage:
                         "url(img.png)",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                 }}>
           <div className="max-w-screen-xl mx-auto  px-4 sm:px-6 lg:px-8 h-screen md:h-[650px] flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-2">
               <div className="w-full md:w-1/2 flex flex-col gap-4">
                   <div>
                       <h1 className="text-3xl md:text-6xl font-bold text-white">Experience the road like never before</h1>
                   </div>
                 <div>
                     <p className="text-white text-md w-[420px]">
                         Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper
                     </p>
                 </div>
                   <div>
                       <button className="text-white bg-[#FF9E0C] px-6 py-2 rounded-md font-bold">View all cars</button>
                   </div>
               </div>
               <div className="bg-white p-4 md:p-8 w-full md:w-[416px] rounded-md">
                   <h2 className="text-2xl text-center font-bold mb-4">Book your car</h2>
                   <form className="flex flex-col gap-4">
                       <div>
                           <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">Car type</label>
                           <div className="mt-2 grid grid-cols-1">
                               <select id="country" name="country" autoComplete="country-name"
                                       className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-[#FAFAFA] py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                   <option>United States</option>
                                   <option>Canada</option>
                                   <option>Mexico</option>
                               </select>
                               <svg
                                   className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                   viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                   <path fillRule="evenodd"
                                         d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                         clipRule="evenodd"/>
                               </svg>
                           </div>
                       </div>
                       <div className="">
                           <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">Place of rental</label>
                           <div className="mt-2 grid grid-cols-1">
                               <select id="country" name="country" autoComplete="country-name"
                                       className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-[#FAFAFA] py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                   <option>United States</option>
                                   <option>Canada</option>
                                   <option>Mexico</option>
                               </select>
                               <svg
                                   className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                   viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                   <path fillRule="evenodd"
                                         d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                         clipRule="evenodd"/>
                               </svg>
                           </div>
                       </div>
                       <div className="">
                           <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">Place of return</label>
                           <div className="mt-2 grid grid-cols-1">
                               <select id="country" name="country" autoComplete="country-name"
                                       className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-[#FAFAFA] py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                   <option>United States</option>
                                   <option>Canada</option>
                                   <option>Mexico</option>
                               </select>
                               <svg
                                   className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                   viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                   <path fillRule="evenodd"
                                         d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                         clipRule="evenodd"/>
                               </svg>
                           </div>
                       </div>
                       <div className="">
                           <input
                               type="date"
                               className="bg-[#FAFAFA] w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                           />
                       </div>
                       <div className="w-full">
                           <button className="text-white bg-[#FF9E0C] px-6 py-2 rounded-md font-bold w-full">Book Now</button>
                       </div>
                   </form>
               </div>
           </div>
        </section>
    )
}