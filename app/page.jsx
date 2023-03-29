import Link from 'next/link'

export default function RootPage() {
  return (
    <>
    <div id="home" className="h-[200px] bg-zinc-800 flex flex-col items-center">
      <h1 className="mt-8 font-ibm text-6xl text-white">Raam Adithyan</h1>
      <h1 className="font-ibm text-2xl text-zinc-200 mt-2">
        Frontend Developer
      </h1>
     <ul className="flex flex-col gap-4 fixed top-[64px] right-[64px] text-zinc-100">
      <a href="#home"> Home</a>
      <a href="#one"> one</a>
      <a href="#two">  two</a>
     </ul>
     
    </div>
    <div id="one" className="h-[500px] bg-yellow-400">one</div>
    <div id="two" className="h-[500px] bg-purple-600">two</div>
    </>
  );
}
