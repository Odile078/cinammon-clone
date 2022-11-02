import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-white">
      <Hero/>
    </main>
    </>
  )
}
