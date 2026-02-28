import Card from "../components/Card";

export default function ContentPage() {
  return (
    <>
      <section className="relative w-full h-screen">
        <div className="flex items-center m-10">
          <div className="flex flex-col justify-center p-8 z-10">
            <h2>Final Deadline</h2>
            <h1>07 April 2026</h1>
            <div className="flex gap-5">
              <p>Jury Panel 2026 Edition</p>
              <p>Project Submission Rules</p>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-end z-0">
            <img
              src="/public/assets/Adobe Express_Main - file.png"
              className="w-200 rotate-x-30 rotate-y-20"
            ></img>
          </div>
          <div className="inset-0 flex justify-end z-0">
            <img
              src="/public/assets/Adobe Express - file.png"
              className="h-[50%] w-200  -rotate-z-20 scroll:size-20 "
              alt="Award Trophy"
            />
          </div>
        </div>
        {/* Z-*/}
        <div className="w-56 m-5 z-10">
          <h3 className="text-2xl">
            It’s in the balance between science and creativity where true beauty
            really innovates.
          </h3>
        </div>
        <div className="mx-auto mt-50 w-130 flex flex-col items-center text-center px-6">
          <h3>Call for Innovators</h3>
          <p className="text-center">
            Are you ready to transform the future of beauty? Colep Consumer
            Products is proud to launch the Beautyvibe Innovation Awards 2026
            the first innovation award in Portugal dedicated to the cosmetics
            industry.
          </p>
          <button className="bg-black text-[#d9ff00] m-2 px-8 py-6 rounded-[40px] font-bold text-xl hover:scale-105 transition-transform shadow-xl flex items-center justify-center">
            submit now
          </button>
        </div>
      </section>
      <section className="relative w-full h-screen mt-10">
        <div className="flex flex-col mt-[20%] mb-20 p-8 z-50 text-end">
          <h2>What’s in it for you?</h2>
          <div className="flex flex-col items-end z-50">
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
            <p>Learn more about prizes and benifits</p>
          </div>
        </div>
        <div className="flex flex-col p-8 z-10 w-100 m-8">
          <p>We are looking for</p>
          <h2 className="text-3xl">Bold, Sustainable and Visionary ideas.</h2>
        </div>

        <div className="absolute inset-0 flex items-center justify-end z-0 mt-50">
          <img
            src="/public/assets/Adobe Express_Main - file.png"
            className="w-300 -rotate-x-40 rotate-y-10 object-fill"
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
