"use client";

import { useState } from "react";
import { Home, BookOpen, Calendar, User, LogOut, Settings, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    localStorage.removeItem("isLoggedIn");
    
    router.push("/login");
  };

  const links = [
    { name: "Início", icon: <Home size={20} />, href: "/home" },
    { name: "Minhas Atividades", icon: <BookOpen size={20} />, href: "/atividades" },
    { name: "Horário", icon: <Calendar size={20} />, href: "/horario" },
    { name: "Perfil", icon: <User size={20} />, href: "/perfil" },
    { name: "Configurações", icon: <Settings size={20} />, href: "/configuracoes" },
  ];

  return (
    <>
      <button className={`md:hidden fixed top-4 z-50 bg-blue-700 text-white p-2 rounded-lg shadow-lg transition-all duration-300 ${open ? "left-68" : "left-4"}`} onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`fixed top-0 left-0 h-full bg-blue-700 text-white w-64 p-6 flex flex-col transform transition-transform duration-300 z-40 ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <div className="flex items-center gap-5 mb-8">
            <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-800 text-white rounded-md flex items-center justify-center font-bold">N</div>
            <span className="font-semibold text-lg">Escola Nobre</span>
          </Link>
        </div>

        <nav className="flex-1 space-y-4">
          {links.map((link, i) => (
            <a key={i} href={link.href} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-600 transition" onClick={() => setOpen(false)}>
              {link.icon}
              {link.name}
            </a>
          ))}
        </nav>

        <button onClick={handleLogout} className="mt-auto flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">
          <LogOut size={20} /> Sair
        </button>
      </div>
    </>
  );
};

export default Sidebar;