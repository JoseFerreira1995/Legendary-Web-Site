import Anchors from "../components/Anchors";
import Card from "../components/Card";

export default function ContentPage() {
  return (
    <>
      <section className="relative w-full h-screen">
        <div className="flex items-center m-8">
          <div className="flex flex-col justify-center w-200 ml-10 z-10">
            <h2 className="text-2xl font-bold">Final Deadline</h2>
            <h1>07 April 2026</h1>
            <div className="flex gap-6">
              <Anchors description="Jury Panel 2026 Edition"></Anchors>
              <Anchors description="Project Submission Rules"></Anchors>
            </div>
          </div>
          <div className="relative w-full h-screen ">
            {/* Layer 1: The Blurred/Secondary Graphic (Higher z-index if it's the neon glow) */}
            <div className="absolute inset-0 pointer-events-none mr-50 mt-20 ">
              <img
                src="/assets/Adobe Express_Main - file.png"
                className="absolute  w-full h-400 opacity-90 rotate-x-40 rotate-y-10  z-10 transform"
                alt=""
              />
            </div>

            {/* Layer 2: The Main Award Trophy (The zoomed, bleeding image) */}
            <div className="absolute inset-0 flex items-center justify-end z-0 overflow-hidden">
              <img
                src="/assets/Adobe Express - file.png"
                className="
        w-[120vw] md:w-[70vw]     
        max-w-none                
        translate-x-[20%]         
        translate-y-[10%]         
        rotate-[-20deg]           
        scale-[2.8]               
        
        transform
      "
              />
            </div>
          </div>
        </div>
        {/* Z-*/}
        <div className="w-80 m-5 ml-10 z-10">
          <h3 className="text-3xl">
            It’s in the balance between science and creativity where true beauty
            really innovates.
          </h3>
        </div>
        <div className="mx-auto mt-50 w-130 flex flex-col items-center text-center px-6">
          <h2 className="text-2xl font-bold">Call for Innovators</h2>
          <p className=" text-2xl text-center">
            Are you ready to transform the future of beauty?
            <strong>Colep Consumer Products</strong> is proud to launch the
            <strong> Beautyvibe Innovation Awards 2026</strong> the first
            innovation award in Portugal dedicated to the cosmetics industry.
          </p>
          <button className="bg-black text-[#d9ff00] m-4 px-8 py-6 rounded-[40px] font-bold text-xl hover:scale-105 transition-transform shadow-xl flex items-center justify-center">
            submit now
          </button>
        </div>
      </section>
      <section className="relative w-full h-screen mt-80">
        <div className="flex flex-col mt-[40%] mb-20 mr-10 p-10 z-10 text-end">
          <h2 className="text-2xl font-bold">What’s in it for you?</h2>
          <div className="flex flex-col items-end">
            <div className="flex gap-5">
              <p>A chance to win up to 10,000€</p>
              <p>✅</p>
            </div>
            <div className="flex gap-5">
              <p>Access to the Colep Innovation Lab and ecosystem</p>
              <p>✅</p>
            </div>
            <div className="flex gap-5">
              <p>
                Visibility, networking, and mentoring from world renamed beauty
                industry exports
              </p>
              <p>✅</p>
            </div>
            <Anchors description="Learn more about prizes and benifits"></Anchors>
          </div>
        </div>
        <div className="flex flex-col p-10 z-10 w-100 ml-40">
          <h2 className="text-2xl font-bold">We are looking for</h2>
          <p className="text-4xl">Bold, Sustainable and Visionary ideas.</p>
        </div>

        <div className="absolute inset-0 flex items-center justify-end z-0 mt-70 overflow-hidden">
          <img
            src="/public/assets/Adobe Express_Main - file.png"
            className="w-560 h-300 -rotate-x-60 rotate-y-10 -rotate-z-10 object-fill"
          ></img>
        </div>
        <div className="flex flex-col items-center ">
          <div className="flex">
            <Card title="Packaging Innovation"></Card>
            <Card imageSrc="/assets/01.png" title="Packaging Innovation"></Card>
            <Card imageSrc="/assets/03.png" title="Packaging Innovation"></Card>
            <Card
              imageSrc="/assets/Gemini_Generated_Image_jvlj1ljvlj1ljvlj.png"
              title="Packaging Innovation"
            ></Card>
            <Card imageSrc="/assets/02.png" title="Packaging Innovation"></Card>
          </div>
          <div className="z-50">
            <button className="bg-black text-[#d9ff00] m-2 px-8 py-6 rounded-[40px] font-bold text-xl hover:scale-105 transition-transform shadow-xl flex items-center justify-center ">
              submit now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
