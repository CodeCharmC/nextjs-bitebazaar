import BBLogo from "../bb-logo";
import Cart from "./cart";
import Lang from "./lang";
import NavLinks from "./nav-links";
import UserLocation from "./user-location";

export default function NavBar() {
   return (
      <header className="bg-white shadow-bottom-md w-full max-w-[1600px] mx-auto">
         <div className="flex justify-between items-center px-6 py-4">
            <div className="flex items-center">
               <BBLogo />
            </div>         
            <div className="flex items-center justify-end right-0">
               <UserLocation/> 
            </div>      
            <div className="flex items-center gap-4">
               <Lang/>
               <button className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600">
                  Login
               </button>
               <button className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600">
                  Sign Up
               </button>

               <Cart/>
            </div>
         </div>
         <nav className="px-6 pb-0 pt-2">
            <div className="flex flex-row justify-start items-center gap-1">
               <NavLinks />
            </div>
         </nav>
      </header>
   );
}
