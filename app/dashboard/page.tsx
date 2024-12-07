import FilterSidebar from "../ui/dashboard/filter-sidebar";
import NavBar from "../ui/dashboard/nav-bar";


export default function Page() {
  return (
    <div className="flex flex-col min-h-screen flex-grow bg-gradient-to-br from-orange-100 to-purple-100 overflow-x-auto">
      <div className="flex-none w-full bg-white shadow-lg">
        <NavBar />
      </div>
      <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
        <FilterSidebar/>        
      </div>         
    </div>
  );
}