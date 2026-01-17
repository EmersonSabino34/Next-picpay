import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col h-screen bg-green-600 p-10">
      <div className="flex-1 flex items-center justify-center">
        <img width={300} src="transferir.png" alt="" />
      </div>  
      
      <div className="h-32 justify-center flex flex-col items-center w-full gap-2">
        <Link href="/login" className="hover:text-green-800 text-white duration-300 text-lg font-bold border hover:bg-white  w-full p-2 rounded-md flex justify-center items-center">
        <button>acessar</button>
        </Link>
        <button className="text-white text-lg font-bold border w-full p-2 rounded-md">sair da conta</button>
      </div>
    </div>

  )
}
