"use client";

const links = [
  { href: "#about", label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#clients", label: "Clientes" },
  { href: "#contact", label: "Contato" },
];

export function Nav() {
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-2rem)] max-w-3xl">
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-md">
        <a href="#top" className="font-heading text-sm font-semibold italic tracking-tight text-foreground">
          Dennys Alves
        </a>
        <ul className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-brand">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-brand px-4 py-1.5 text-xs font-medium text-brand-foreground transition-opacity hover:opacity-90"
        >
          Contato
        </a>
      </nav>
    </header>
  );
}
