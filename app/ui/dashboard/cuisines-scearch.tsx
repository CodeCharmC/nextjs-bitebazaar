

export default function CuisinesSearch() {
   return (
      <div className="p-4 rounded-lg shadow-md border-none">
      <h3 className="text-lg font-semibold mb-4">Cuisines</h3>

      {/* Search Bar */}
      <div className="relative mb-4">
         <input
            type="text"
            placeholder="Search cuisines..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300"
         />
         <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 right-4 w-5 h-5 text-gray-400 transform -translate-y-1/2"
            viewBox="0 0 20 20"
            fill="currentColor"
         >
            <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.293 3.707l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387A6 6 0 012 8z"
            clipRule="evenodd"
            />
         </svg>
      </div>

      {/* Cuisine Options */}
      <div className="space-y-3">
         {["Italian", "Chinese", "Indian", "Mexican"].map((cuisine) => (
            <label
            key={cuisine}
            className="flex items-center cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-md"
            >
            <input
               type="checkbox"
               className="form-checkbox text-orange-500 focus:ring-orange-400 mr-2"
            />
            {cuisine}
            </label>
         ))}
      </div>
      </div>
   );
}