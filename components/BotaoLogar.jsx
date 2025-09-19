"use client"
import { useRouter } from "next/navigation";

const BotaoLogar = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };

  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300" onClick={handleClick}> Logar </button>
  )
}

export default BotaoLogar;