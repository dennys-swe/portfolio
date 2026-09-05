import { Nav } from "@/components/nav";
import { BootScreen } from "@/components/boot-screen";
import { WhatsappFab } from "@/components/whatsapp-fab";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { PersonalProjects } from "@/components/sections/personal-projects";
import { ClientWork } from "@/components/sections/client-work";
import { Stack } from "@/components/sections/stack";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <BootScreen />
      <Nav />
      <WhatsappFab />
      <main className="flex-1">
        <Hero />
        <About />
        <PersonalProjects />
        <ClientWork />
        <Stack />
        <Contact />
      </main>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-muted-foreground">
        Dennys Alves © {new Date().getFullYear()}
      </footer>
    </>
  );
}
