"use client";

import Header from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carrossel() {
  const slides = [
    {
      img: "/carrossel1.png",
      title: "Bem-vindo à Nossa Escola",
      text: "Educação inovadora e de qualidade, formando alunos preparados para transformar o futuro.",
    },
    {
      img: "/carrossel2.png",
      title: "Ambientes Modernos",
      text: "Salas de aula, laboratórios e espaços que inspiram criatividade e aprendizado.",
    },
    {
      img: "/carrossel3.png",
      title: "Projetos e Eventos",
      text: "Participação ativa da comunidade escolar em feiras, exposições e competições.",
    },
  ];

  return (
    <div className="relative w-full bg-gray-50 dark:bg-gray-900">
      <Header />
      <Swiper modules={[Navigation, Autoplay, Pagination]} spaceBetween={0} slidesPerView={1} loop={true} autoplay={{ delay: 5000, disableOnInteraction: false }} pagination={{ clickable: true }} navigation={true} className="h-[260px] sm:h-[340px] md:h-[460px] w-full">
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-full relative">
              <img src={slide.img} alt={slide.title} className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent flex items-center justify-center">
                <div className="text-center px-4 sm:px-6 md:px-8">
                  <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-5xl">{slide.title}</h1>
                  <p className="text-white/90 mt-3 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">{slide.text}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <main className="flex flex-col gap-12 mt-12">
        <section id="sobre" className="scroll-mt-32 container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Sobre Nós</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">O Nobre nasceu com o compromisso de oferecer uma educação de excelência, que valoriza tanto o desenvolvimento acadêmico quanto o humano. Aqui, cada aluno é incentivado a explorar seus talentos, desenvolver autonomia e cultivar valores que o acompanharão por toda a vida.</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Com uma equipe pedagógica dedicada e estrutura moderna, buscamos proporcionar um ambiente acolhedor, seguro e inspirador, onde o aprendizado se torna significativo e prazeroso.</p>
          </div>
          <div className="w-full">
            <div className="w-full h-44 sm:h-56 md:h-64 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <img src="/escola.png" alt="Escola" className="object-cover w-full h-full" />
            </div>
          </div>
        </section>

        <section id="missao" className="scroll-mt-32 container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8 items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Nossa Missão</h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <h4 className="text-xl md:text-2xl font-bold mb-3">Missão:</h4>
              <p className="mb-2">Oferecer uma educação integral, de qualidade e humanizada, que forme cidadãos críticos, responsáveis e preparados para transformar a sociedade.</p>
              <h4 className="text-xl md:text-2xl font-bold mb-3">Visão:</h4>
              <p className="mb-2">Ser referência em educação, reconhecida pela inovação pedagógica, pelo cuidado individualizado com cada aluno e pelo compromisso em formar gerações conscientes e capacitadas.</p>
              <h4 className="text-xl md:text-2xl font-bold mb-3">Valores:</h4>
              <div className="ml-5">
                <li>Respeito e empatia</li>
                <li>Compromisso com a excelência</li>
                <li>Ética e responsabilidade</li>
                <li>Inovação com propósito</li>
                <li>Valorização da diversidade</li>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-44 sm:h-56 md:h-64 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <img src="/missao.png" alt="Missao" className="object-cover w-full h-full" />
            </div>
          </div>
        </section>

        <section id="estrutura" className="scroll-mt-32 container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="w-full">
            <div className="w-full h-44 sm:h-56 md:h-64 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <img src="/estrutura.png" alt="Estrutura" className="object-cover w-full h-full" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Nossa Estrutura</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Salas modernas, laboratórios, biblioteca, auditório e áreas esportivas — tudo planejado para o desenvolvimento do aluno.</p>
          </div>
        </section>

        <section id="blog" className="scroll-mt-32 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Blog</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10">Curiosidades, histórias e novidades da nossa escola</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {date: "15 de Dezembro, 2024", title: "Importância da Socialização na Escola", text: "Descubra como atividades em grupo contribuem para o bem-estar e aprendizado dos alunos."},
              {date: "10 de Dezembro, 2024", title: "Alimentação Saudável para Estudantes", text: "Dicas nutricionais para manter energia e foco durante o período escolar."},
              {date: "19 de Outubro, 2024", title: "Atividades Físicas para Crianças", text: "A importância de exercícios regulares para o desenvolvimento físico e mental."},
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">📅 {item.date}</p>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.text}</p>
                <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Ler mais</button>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-orange-500 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-500 text-white px-6 py-2 rounded-md shadow-md transition">Ver mais artigos</button>
          </div>
        </section>

        <section id="eventos" className="scroll-mt-32 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Eventos</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10">Fique por dentro das atividades, feiras e mostras da escola</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {date: "05 de Novembro, 2024", title: "Feira de Ciências", text: "Alunos apresentam projetos inovadores que unem criatividade e conhecimento científico."},
              {date: "12 de Outubro, 2024", title: "Semana Cultural", text: "Atividades artísticas, apresentações musicais e oficinas abertas à comunidade."},
              {date: "30 de Setembro, 2024", title: "Mostra de Artes", text: "Exposição das produções artísticas dos alunos, celebrando talento e criatividade."},
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">📅 {item.date}</p>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.text}</p>
                <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Ver detalhes</button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-orange-500 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-500 text-white px-6 py-2 rounded-md shadow-md transition">Ver mais artigos</button>
          </div>
        </section>

        <section id="contato" className="scroll-mt-32 container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Entre em Contato</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Tem dúvidas ou quer agendar uma visita? Preencha o formulário abaixo.</p>
            <form className="mt-6 flex flex-col gap-4">
              <input type="text" placeholder="Nome" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"/>
              <input type="email" placeholder="Email" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"/>
              <textarea placeholder="Mensagem" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600" rows={5}></textarea>
              <button className="bg-blue-600 dark:bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-semibold w-full">Enviar</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 dark:bg-gray-800 text-white dark:text-gray-200 py-8 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h3 className="font-bold mb-2">Escola</h3>
            <p>Educação de qualidade para um futuro melhor.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contato</h3>
            <p>Email: contato@escola.com</p>
            <p>Telefone: (75) 1234-5678</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Redes Sociais</h3>
            <p><a href="#" className="hover:underline">Facebook</a> | <a href="#" className="hover:underline">Instagram</a></p>
          </div>
        </div>
        <p className="text-center mt-6 text-gray-300 dark:text-gray-400 text-sm">© 2025 Escola. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}