

export default function Cart() {
   return (
      <button className="relative p-2 bg-gray-100 rounded-full hover:bg-gray-200">
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
         d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H2M7 13l-1.34 4H19.34L17 13M5 21h14a2 2 0 002-2H3a2 2 0 002 2z"
      />
      </svg>
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
      3
      </span>
   </button>
   );
}