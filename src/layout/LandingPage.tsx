

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Main container */}
      <section className="relative w-full h-screen flex items-center justify-center px-10">
        {/* 3d image ) */}
        <div className="absolute inset-0 flex items-center justify-end z-0">
          <img
            src="/public/assets/Adobe Express - file.png"
            className="h-[90%] object-contain"
            alt="Award Trophy"
          />
        </div>

        {/* Overlap content */}
        <div className="relative z-10 w-full flex justify-around gap-10 items-center">
          <div className="flex items-center gap-8">
            <img
              className="w-48 h-48 object-contain "
              src="/assets/Adobe Express_Main - file.png"
              alt="Green Logo"
            />
            <div className="text-left font-nohemi leading-[0.85] tracking-tighter uppercase">
              <h2>beauty</h2>
              <h2>vibe</h2>
              <h2>innovation</h2>
              <h2>awards</h2>
            </div>
          </div>

          <div className="relative flex justify-end-safe">
            <button className="bg-black text-[#d9ff00] px-8 py-6 rounded-[40px] font-bold text-xl hover:scale-105 transition-transform shadow-xl flex items-center justify-center">
              submit now
            </button>
          </div>
        </div>

        {/* Landing Page Footer */}
        <div className="absolute bottom-10 w-full px-10 flex justify-between items-end text-[10px] font-bold uppercase">
          <p>2026 Edition</p>
          <img src="/assets/colep-logo.png" className="h-8" alt="Colep Logo" />
        </div>
      </section>
    </main>
  );
}
