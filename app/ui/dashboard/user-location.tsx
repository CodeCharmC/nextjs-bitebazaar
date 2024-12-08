export default function UserLocation() { 
   return (
      <>
         <div className="flex items-center justify-end p-4">
            <label htmlFor="location" className="sr-only">
               Location
            </label>

            {/* Small Screen: Location Icon */}
            <div className="relative md:hidden sm:flex items-center justify-end">
               <button
                  className="ml-auto p-2 bg-slate-200  rounded-full shadow-sm hover:bg-gray-200 focus:outline-none"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-6 w-6 text-gray-600"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657a8 8 0 10-11.314 0 8 8 0 0011.314 0z"
                     />
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                     />
                  </svg>
               </button>
               <input
                  id="location"
                  type="text"
                  placeholder="Enter your location"
                  className="hidden top-12 left-0 w-full max-w-xs px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-100"
               />
            </div>

            {/* Large Screens */}
            <div className="hidden md:flex items-center gap-2 w-full">
               <input
                  id="location"
                  type="text"
                  placeholder="Enter your location"
                  className="lg:w-[500px] px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-orange-500 bg-gray-100 transition-all duration-300"
                  style={{
                     fontSize: "16px", // Maintain readability
                  }}
               />
            </div>
         </div>
      </>
   );
}
