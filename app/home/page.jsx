"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import { FiAlertCircle, FiBookOpen } from "react-icons/fi";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { useRouter } from "next/navigation";

const materias = [
  { nome: "Matemática", cor: "#6B46C1" },
  { nome: "Física", cor: "#D53F8C" },
  { nome: "Programação", cor: "#3182CE" },
  { nome: "História", cor: "#DD6B20" },
  { nome: "Química", cor: "#38A169" },
  { nome: "Geografia", cor: "#805AD5" },
];

const notas = [
  { disciplina: "Matemática", nota: 9 },
  { disciplina: "Física", nota: 8 },
  { disciplina: "Programação", nota: 10 },
  { disciplina: "História", nota: 7 },
  { disciplina: "Química", nota: 9 },
  { disciplina: "Geografia", nota: 8 },
];

const horarioSemanal = [
  { dia: 1, inicio: "08:00", fim: "10:00", materia: "Matemática" },
  { dia: 2, inicio: "08:00", fim: "10:00", materia: "Química" },
  { dia: 3, inicio: "08:00", fim: "10:00", materia: "História" },
  { dia: 4, inicio: "08:00", fim: "10:00", materia: "Programação" },
  { dia: 5, inicio: "08:00", fim: "10:00", materia: "Física" },
  { dia: 6, inicio: "08:00", fim: "10:00", materia: "Geografia" },
  { dia: 1, inicio: "10:15", fim: "12:15", materia: "Química" },
  { dia: 2, inicio: "10:15", fim: "12:15", materia: "Matemática" },
  { dia: 3, inicio: "10:15", fim: "12:15", materia: "Programação" },
  { dia: 4, inicio: "10:15", fim: "12:15", materia: "História" },
  { dia: 5, inicio: "10:15", fim: "12:15", materia: "Geografia" },
  { dia: 6, inicio: "10:15", fim: "12:15", materia: "Física" },
];

const atividades = [
  { titulo: "Entrega Projeto Arduino", data: new Date(2025, 8, 20), materia: "Programação", horario: "14:00" },
  { titulo: "Prova de Matemática", data: new Date(2025, 8, 22), materia: "Matemática", horario: "09:00" },
  { titulo: "Trabalho de História", data: new Date(2025, 8, 25), materia: "História", horario: "11:00" },
];

const avisos = [
  "A biblioteca fechará mais cedo nesta sexta-feira.",
  "Inscrições para o campeonato de robótica abertas!",
];

const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const Home = () => {
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const aulasDoDia = horarioSemanal.filter(a => a.dia === selectedDay);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn) {
      router.push('/login');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    router.push('/login');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-10 sm:ml-64 pt-15">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">Painel do Aluno</h1>

        <section className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
            {notas.map((nota, idx) => (
              <div key={idx} className="p-4 sm:p-6 rounded-2xl shadow-lg flex flex-col items-start justify-center transition-transform hover:scale-105" style={{ backgroundColor: materias[idx].cor, color: "#fff" }}>
                <FiBookOpen size={24} className="mb-2" />
                <p className="font-semibold text-base sm:text-lg">{nota.disciplina}</p>
                <p className="text-2xl sm:text-3xl font-bold">{nota.nota}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Quadro de Horários Semanal</h2>

          <div className="grid grid-cols-3 sm:grid-cols-7 gap-2 overflow-x-auto">
            {diasSemana.map((dia, idx) => (
              <div key={idx} className={`p-2 rounded-lg text-center cursor-pointer text-sm sm:text-base ${
                  selectedDay === idx
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                }`} onClick={() => setSelectedDay(idx)}>
                {dia}
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-2">
            {aulasDoDia.length > 0 ? (
              aulasDoDia.map((aula, idx) => {
                const cor = materias.find(m => m.nome === aula.materia)?.cor || "#ccc";
                return (
                  <div key={idx} className="p-3 rounded-lg text-white shadow-lg flex justify-between items-center text-sm sm:text-base" style={{ backgroundColor: cor }}>
                    <span className="font-semibold">{aula.materia}</span>
                    <span>{aula.inicio} - {aula.fim}</span>
                  </div>
                );
              })
            ) : (
              <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">Nenhuma aula neste dia.</p>
            )}
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2">
            <FiBookOpen /> Atividades Futuras
          </h2>
          {atividades.length > 0 ? (
            <ul className="list-disc ml-5 text-sm sm:text-base">
              {atividades.map((a, idx) => (
                <li key={idx}>
                  {a.materia}: {a.titulo} às {a.horario} ({a.data.toLocaleDateString()})
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-sm">Nenhuma atividade futura.</p>
          )}
        </section>

        <section className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2">
            <FiAlertCircle /> Avisos Importantes
          </h2>
          <ul className="list-disc ml-5 text-red-600 dark:text-red-400 text-sm sm:text-base">
            {avisos.map((aviso, idx) => (
              <li key={idx}>{aviso}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
            <FiBookOpen /> Desempenho Geral
          </h2>
          <div className="w-full h-48 sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={notas} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <XAxis dataKey="disciplina" stroke="#8884d8" />
                <YAxis domain={[0, 10]} stroke="#8884d8" />
                <Tooltip />
                <Bar dataKey="nota" radius={[10, 10, 0, 0]}>
                  {notas.map((entry, index) => {
                    const cor = materias.find(m => m.nome === entry.disciplina)?.cor || "#8884d8";
                    return <Cell key={`cell-${index}`} fill={cor} />;
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;