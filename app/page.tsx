import BBLogo from "./ui/bb-logo";
import Link from "next/link";

export default function Page() {
   return (
   <main className="min-h-screen bg-gradient-to-br from-orange-200 via-pink-100 to-purple-200 h-screen flex flex-col justify-center items-center text-center relative">
      {/* Logo */}
         <BBLogo /> 

      {/* Hero Content */}
      <div className="max-w-4xl">
         {/* Tagline */}
         <h2 className="text-5xl md:text-6xl font-bold text-gray-800 leading-snug mb-6">
         Craving something delicious? <br />
         <span className="bg-gradient-to-r from-orange-400 via-purple-500 to-yellow-400 text-transparent bg-clip-text animate-text">
            BiteBazaar brings it to your doorstep!
         </span>
         </h2>

         {/* Subtext */}
         <p className="text-lg md:text-xl text-gray-600 mb-8">
         Explore diverse cuisines and enjoy the fastest delivery in town.
         </p>

         {/* Buttons */}
         <div className="flex justify-center gap-4">
         <Link
            href="/menu"
            className="px-8 py-3 bg-purple-600 text-white font-semibold text-lg rounded-lg shadow-lg transition-all hover:scale-105 hover:bg-purple-700"
         >
            Explore Menu
         </Link>
         <Link
            href="/order-now"
            className="px-8 py-3 bg-orange-500 text-white font-semibold text-lg rounded-lg shadow-lg transition-all hover:scale-105 hover:bg-orange-600"
         >
            Order Now
         </Link>
         </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-16 right-12 w-64 h-64 bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300 rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full blur-3xl"></div>
   </main>
   );
}