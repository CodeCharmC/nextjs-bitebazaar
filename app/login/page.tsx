import LoginForm from "../ui/login-form";


export default function Page() {
   return <main className="min-h-screen bg-gradient-to-br from-orange-200 via-pink-100 to-purple-200 h-screen flex flex-col justify-center items-center text-center relative">
      <div>
         <LoginForm/>
      </div>      
   </main>;
}