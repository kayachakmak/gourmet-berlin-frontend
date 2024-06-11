import httpClient from "@/pages/httpClient";
import { useUser } from "../UserContext/UserContext";
import AddButton from "../Add Restaurant Button/AddRestaurantButton";

export default function Profile() {
  const {user}=useUser();

  async function logout(){
    try{
        const res = await httpClient.post("//localhost:5000/logout")
        window.location.href = "/";  
    }catch(error){
        console.log(error)

    }
  }

  return (
    <div className="bg-banner">
      {user != null ? (<div className="flex justify-between" > 
        <AddButton/>
        <button className="mr-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="flex justify-end">
         <a href="/login" className="mr-2 inline-flex items-center justify-center w-full px-4 py-1 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Login</a>
         <a href="/register" className="mr-2 inline-flex items-center justify-center w-full px-4 py-1 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Register</a>
        </div>
      )}
    </div>
  );
}
