import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

export default function App() {
  return (
    <div className="min-h-screen text-white">
      <Header />
      <main>
        {/* 当前只装配基础区块，为后续内容填充和动效实现提供入口。 */}
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
