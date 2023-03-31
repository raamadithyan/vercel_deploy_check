import Link from 'next/link';

export default function RootPage() {
  return (
    <>
      <div
        id="home"
        className="h-[200px] bg-zinc-300 flex flex-col items-center justify-center"
      >
        <h1 className=" font-ibm font-black  text-6xl text-zinc">Raam Adithyan</h1>
        <h1 className="font-ibm font-bold  text-2xl text-zinc mt-3">
          Frontend Developer
        </h1>
        <ul className="flex flex-col gap-9 fixed top-[50%] right-[150px] -translate-y-[50%] text-zinc-100 text-right
                       [&>a]:text-2xl font-ibm">
          <a className="home" href="#home"> Home</a>
          <a className="home" href="#about"> About</a>
          <a className="home" href="#skills"> Skills</a>
          <a className="home" href="#projects"> Projects</a>
          <a className="home" href="#contact"> Contact</a>


        </ul>
      </div>
      <div id="about" className="h-[100vh] bg-zinc-700">
        one
      </div>
      <div id="skills" className="h-[100vh] bg-zinc-600">
        two
      </div>
      <div id="projects" className="h-[100vh] bg-zinc-700">
        two
      </div>
      <div id="contact" className="h-[100vh] bg-zinc-600">
        two
      </div>
    </>
  );
}
