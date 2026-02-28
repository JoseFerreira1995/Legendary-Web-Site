export default function LandingPage() {
    return (
      <main className="min-h-screen bg-white overflow-hidden">
        {/* Container Principal do Hero */}
        <section className="relative w-full h-screen flex items-center justify-center px-10">
          
          {/* IMAGEM 3D DE FUNDO (Ajustada para ficar no centro como na imagem) */}
          <div className="absolute inset-0 flex items-center justify-end z-0">
            <img 
              src="/public/assets/Adobe Express - file.png" 
              className="h-[90%] object-contain"
              alt="Award Trophy"
            />
          </div>
  
          {/* CONTEÚDO SOBREPOSTO */}
          <div className="relative z-10 w-full flex justify-between items-center">
            
            {/* Lado Esquerdo: Logotipo Verde + Texto */}
            <div className="flex items-center gap-8">
              {/* O ícone verde brilhante que aparece na imagem */}
              <img
                className="w-48 h-48 object-contain"
                src="/assets/Gemini_Generated_Image_19w6fg19w6fg19w6.png"
                alt="Green Logo"
              />
              
              {/* Texto com a fonte Nohemi e pesos variados */}
              <div className="text-left font-nohemi leading-[0.85] tracking-tighter uppercase">
                <h2 >beauty</h2>
                <h2 >vibe</h2>
                <h2 >innovation</h2>
                <h2 >awards</h2>
              </div>
            </div>
  
            {/* Botão "Submit Now" - Estilo "Cloud/Blob" preto como na imagem */}
            <div className="relative flex justify-end-safe">
              <button className="bg-black text-[#d9ff00] px-8 py-6 rounded-[40px] font-bold text-xl hover:scale-105 transition-transform shadow-xl flex items-center justify-center">
                submit now
              </button>
              {/* Nota: Se quiseres a forma exata de "nuvem", podes usar uma imagem SVG como background do botão */}
            </div>
          </div>
  
          {/* Rodapé Interno (Edition 2026 e Colep) */}
          <div className="absolute bottom-10 w-full px-10 flex justify-between items-end text-[10px] font-bold uppercase">
            <p>2026 Edition</p>
            <img src="/assets/colep-logo.png" className="h-8" alt="Colep Logo" />
          </div>
        </section>
      </main>
    );
  }