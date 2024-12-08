export default function FilterSidebar() {
  return (
    <aside className="w-full md:w-64 p-6 bg-transparent border border-gray-300 m-3 mt-6 shadow-lg flex flex-col gap-6 rounded-lg">
      <div>
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <h3 className="text-lg font-semibold mb-3">Sort By</h3>
        <div className="flex flex-col gap-2 w-full px-4 py-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="relevance"
              defaultChecked
              className="focus:ring-orange-200 text-orange-500 border-gray-300"
            />
            <span className="text-gray-700">Relevance</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="fastest"
              className="focus:ring-orange-200 text-orange-500 border-gray-300"
            />
            <span className="text-gray-700">Fastest Delivery</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="distance"
              className="focus:ring-orange-200 text-orange-500 border-gray-300"
            />
            <span className="text-gray-700">Distance</span>
          </label>
        </div>

      </div>

      {/* Quiqe Filters */}
      

      {/* Cuisines */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Cuisines</h3>
        
        <select
          className="w-full px-4 py-2 border rounded-full bg-gray-50 focus:outline-none focus:ring-1 focus:ring-orange-200"
          defaultValue="relevance"
        >
          <option value="relevance">Relevance</option>
          <option value="fastest">Fastest Delivery</option>
          <option value="distance">Distance</option>
        </select>

        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Italian
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Chinese
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Indian
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Mexican
          </label>
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Price Range</h3>
        <div className="flex justify-start gap-2 w-full">
        <div
          className="w-fit px-4 py-2 border rounded-full bg-gray-50 focus:outline-none focus:ring-1 focus:ring-orange-200"
        >
          <p className="text-gray-700" >tk</p>
        </div>
        <div
          className="w-fit px-4 py-2 border rounded-full bg-gray-50 focus:outline-none focus:ring-1 focus:ring-orange-200"
        >
          <p className="text-gray-700" >tk tk</p>
        </div>
        </div>
        
      </div>

      {/* Apply Filters Button */}
      <button className="w-full bg-orange-500 text-white py-2 rounded-lg shadow-md hover:bg-orange-600 transition">
        Apply Filters
      </button>
    </aside>
  );
}
 