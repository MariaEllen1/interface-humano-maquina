"use client"
import { useState } from "react";

const Cadastro = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    dataNascimento: "",
    telefone: "",
    cpf: "",
    curso: "",
    turma: ""
  });

  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensagem("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

      if (usuarios.some((u) => u.email === form.email)) {
        setMensagem("Email já cadastrado!");
        setLoading(false);
        return;
      }

      if (usuarios.some((u) => u.cpf === form.cpf)) {
        setMensagem("CPF já cadastrado!");
        setLoading(false);
        return;
      }

      usuarios.push(form);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      setMensagem("Cadastro realizado com sucesso!");
      setForm({
        nome: "",
        email: "",
        senha: "",
        dataNascimento: "",
        telefone: "",
        cpf: "",
        curso: "",
        turma: ""
      });

    } catch (error) {
      setMensagem("Erro no cadastro!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800 px-4">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-lg shadow-md w-full max-w-lg space-y-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Cadastro de Aluno</h2>
        <div>
          <label className="block mb-2 font-semibold">Nome Completo<span className="text-red-600">*</span></label>
          <input type="text" name="nome" value={form.nome} onChange={handleChange} placeholder="Digite seu nome completo" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <p className="text-sm text-red-600 mt-2">* Campo Obrigatório</p>
        </div>
        <div>
          <label className="block mb-2 font-semibold">Email<span className="text-red-600">*</span></label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Digite seu email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <p className="text-sm text-red-600 mt-2">* Campo Obrigatório</p>
        </div>
        <div>
          <label className="block mb-2 font-semibold">Senha<span className="text-red-600">*</span></label>
          <input type="password" name="senha" value={form.senha} onChange={handleChange} placeholder="Crie uma senha" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <p className="text-sm text-red-600 mt-2">* Campo Obrigatório</p>
        </div>
        <div>
          <label className="block mb-2 font-semibold">Data de Nascimento<span className="text-red-600">*</span></label>
          <input type="date" name="dataNascimento" value={form.dataNascimento} onChange={handleChange} className="w-full [color-scheme:light] dark:[color-scheme:dark] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <p className="text-sm text-red-600 mt-2">* Campo Obrigatório</p>
        </div>
        <div>
          <label className="block mb-2 font-semibold">Telefone<span className="text-red-600">*</span></label>
          <input type="tel" name="telefone" value={form.telefone} onChange={handleChange} placeholder="(99) 99999-9999" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <p className="text-sm text-red-600 mt-2">* Campo Obrigatório</p>
        </div>
        <div>
          <label className="block mb-2 font-semibold">CPF<span className="text-red-600">*</span></label>
          <input type="text" name="cpf" value={form.cpf} onChange={handleChange} placeholder="Digite seu CPF" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <p className="text-sm text-red-600 mt-2">* Campo Obrigatório</p>
        </div>
        <div>
          <label className="block mb-2 font-semibold">Curso / Série<span className="text-red-600">*</span></label>
          <input type="text" name="curso" value={form.curso} onChange={handleChange} placeholder="Ex: Informática, 3º Ano" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <p className="text-sm text-red-600 mt-2">* Campo Obrigatório</p>
        </div>
        <div>
          <label className="block mb-2 font-semibold">Turma<span className="text-red-600">*</span></label>
          <input type="text" name="turma" value={form.turma} onChange={handleChange} placeholder="Ex: A, B, C..." className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <p className="text-sm text-red-600 mt-2">* Campo Obrigatório</p>
        </div>
        <button type="submit" disabled={loading} className={`w-full text-white py-2 px-4 rounded-md font-semibold transition-colors duration-300 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}>{loading ? "Cadastrando..." : "Cadastrar"}</button>
        {mensagem && (
          <p className={`mt-2 text-center ${mensagem.includes("sucesso") ? "text-green-600" : "text-red-500"}`}>{mensagem}</p>
        )}
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">Já possui login?{" "}
          <a href="/login" className="text-blue-600 hover:underline">Fazer Login</a>
        </p>
      </form>
    </div>
  );
};

export default Cadastro;