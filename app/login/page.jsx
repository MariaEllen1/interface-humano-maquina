"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setMensagem("");

    setTimeout(() => {
      const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
      const usuario = usuarios.find(u => u.email === email && u.senha === senha);

      if (usuario) {
        setMensagem("Login realizado com sucesso!");
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
        localStorage.setItem("isLoggedIn", "true");
        
        setEmail("");
        setSenha("");
        setTimeout(() => {
          router.push("/home");
        }, 1000);
      } else {
        setMensagem("Email ou senha incorretos!");
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md dark:bg-gray-900">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold flex">Email<p className="text-red-600">*</p></label>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <p className="text-sm text-red-600 mt-2">* Campo Obrigatório</p>
          </div>
          <div>
            <label className="block mb-1 font-semibold flex">Senha<p className="text-red-600">*</p></label>
            <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <p className="text-sm text-red-600 mt-2">* Campo Obrigatório</p>
          </div>
          <p className="mt-4 text-gray-600 text-sm dark:text-gray-300">Esqueceu a senha?{" "}
          <a href="/redefinir_senha" className="text-blue-600 hover:underline">Redefinir</a>
        </p>
          <button type="submit" disabled={loading} className={`w-full text-white py-2 px-4 rounded-md font-semibold transition-colors duration-300 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
        {mensagem && (
          <p className={`mt-2 text-center ${ mensagem === "Login realizado com sucesso!" ? "text-green-500" : "text-red-500"}`}>{mensagem}</p>
        )}
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">Não tem conta?{" "}
          <a href="/cadastro" className="text-blue-600 hover:underline">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
};

export default Login;