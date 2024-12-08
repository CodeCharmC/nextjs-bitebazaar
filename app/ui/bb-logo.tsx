import Link from "next/link";

export default function BBLogo() {
   return (
      <div className="top-8 left-5 md:top-8 md:left-8">
         <h1 className="text-3xl md:text-4xl font-extrabold text-orange-600 drop-shadow-md">
            <Link href="/dashboard">Bite<span className="text-purple-600">Bazaar</span></Link>           
         </h1>
      </div>
   )
}