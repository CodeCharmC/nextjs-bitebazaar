

export default function Lang() {
   return (
      <select
         className=" min-w-[60px] hidden md:block px-3 py-2 border rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
         defaultValue="EN"
      >
         <option value="EN">EN</option>
         <option value="ES">ES</option>
         <option value="FR">FR</option>
      </select>
   );
}