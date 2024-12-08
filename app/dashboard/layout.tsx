import FilterSidebar from "../ui/dashboard/filter-sidebar";
import NavBar from "../ui/dashboard/nav-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <main className="flex flex-col h-screen flex-grow bg-gradient-to-br from-orange-100 to-purple-100 overflow-x-auto">         
         <div className="flex-none w-full bg-white shadow-lg" >
            <NavBar />
         </div>
         <div className="flex flex-row items-start justify-start ">
            <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
               <FilterSidebar/>
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12 items-start">
               {children}
            </div>
         </div>                  
      </main>
   );
}
