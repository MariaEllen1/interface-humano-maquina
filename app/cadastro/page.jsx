"use client"
import { useState } from "react";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensagem("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

      if (usuarios.some(u => u.email === email)) {
        setMensagem("Email já cadastrado!");
        setLoading(false);
        return;
      }

      usuarios.push({ nome, email, senha });
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      setMensagem("Cadastro realizado com sucesso!");
      setNome(""); setEmail(""); setSenha("");

    } catch (error) {
      setMensagem("Erro no cadastro!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-800">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4 dark:bg-gray-900">
        <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
        <div>
          <label className="block mb-2 font-semibold flex">Nome<p className="text-red-600 dark:text-red-200">*</p></label>
          <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
          <p className="text-sm text-red-600 dark:text-red-200 mt-2">* Campo Obrigatório</p>
        </div>
        <div>
          <label className="block mb-2 font-semibold flex">Email<p className="text-red-600 dark:text-red-200">*</p></label>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
          <p className="text-sm text-red-600 dark:text-red-200 mt-2">* Campo Obrigatório</p>
        </div>
        <div>
          <label className="block mb-2 font-semibold flex">Senha<p className="text-red-600 dark:text-red-200">*</p></label>
          <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
          <p className="text-sm text-red-600 dark:text-red-200 mt-2">* Campo Obrigatório</p>
        </div>

        <button type="submit" disabled={loading} className={`w-full text-white py-2 px-4 rounded-md font-semibold transition-colors duration-300 ${ loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700" }`}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>

        {mensagem && <p className="mt-2 text-center text-red-500">{mensagem}</p>}

        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">Já possui login?{" "}
          <a href="/login" className="text-blue-600 hover:underline">Fazer Login</a>
        </p>
      </form>
    </div>
  );
};

export default Cadastro;