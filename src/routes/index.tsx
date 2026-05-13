import { createFileRoute } from "@tanstack/react-router";
import { Star, Camera, Users, Award, Calendar, Dumbbell, Bell, CheckCircle2 } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";
import featureCheckin from "@/assets/feature-checkin.png";
import featureDark from "@/assets/feature-darkmode.png";
import master1 from "@/assets/master-1.jpg";
import master2 from "@/assets/master-2.jpg";
import master3 from "@/assets/master-3.jpg";
import appStoreBadge from "@/assets/app-store-badge.png";
import googlePlayBadge from "@/assets/google-play-badge.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BJJEASY — App de Jiu-Jitsu para Mestres" },
      { name: "description", content: "Controle suas aulas, alunos e graduações de Jiu-Jitsu em um só app. Simples, rápido e feito para mestres." },
      { property: "og:title", content: "BJJEASY — App de Jiu-Jitsu para Mestres" },
      { property: "og:description", content: "O app que todo mestre de BJJ precisa para gerenciar a academia." },
    ],
  }),
  component: Landing,
});

function StoreButtons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href="#" className="inline-block transition hover:scale-[1.03]">
        <img src={appStoreBadge} alt="Baixe na App Store" className="h-14 w-auto" />
      </a>
      <a href="#" className="inline-block transition hover:scale-[1.03]">
        <img src={googlePlayBadge} alt="Disponível no Google Play" className="h-14 w-auto" />
      </a>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-xl" style={{ background: "var(--gradient-gold)" }}>
            <Dumbbell className="h-5 w-5 text-background" />
          </span>
          BJJ<span className="text-primary">EASY</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#recursos" className="hover:text-foreground">Recursos</a>
          <a href="#mestres" className="hover:text-foreground">Mestres</a>
          <a href="#avaliacoes" className="hover:text-foreground">Avaliações</a>
          <a href="#preco" className="hover:text-foreground">Preço</a>
        </nav>
        <a href="#cta" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
          Começar grátis
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at top, oklch(0.97 0 0), transparent 70%)" }} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-card/60 px-4 py-2 text-sm">
            <div className="flex -space-x-2">
              <img src={master1} alt="" className="h-6 w-6 rounded-full border-2 border-background object-cover" />
              <img src={master2} alt="" className="h-6 w-6 rounded-full border-2 border-background object-cover" />
              <img src={master3} alt="" className="h-6 w-6 rounded-full border-2 border-background object-cover" />
            </div>
            <span className="text-muted-foreground">Usado por +10mil mestres com</span>
            <span className="inline-flex items-center gap-1 font-semibold text-accent"><Star className="h-3.5 w-3.5 fill-current" /> 4.9</span>
          </div>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Conheça o BJJEASY
            <span className="mt-3 block bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>
              Controle suas aulas com um toque
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            O BJJEASY é o app feito para mestres de Jiu-Jitsu. Faça chamada, acompanhe graduações, gerencie mensalidades e organize sua academia em segundos.
          </p>
          <div className="mt-8"><StoreButtons /></div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 -z-10 rounded-full blur-3xl" style={{ background: "var(--gradient-gold)", opacity: 0.25 }} />
          <img src={heroPhone} alt="App BJJEASY na tela do celular" width={1024} height={1280} className="w-full drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}

const masters = [
  { name: "Prof. Rafael Souza", belt: "Faixa Preta • 3º Grau", img: master1, quote: "Com o BJJEASY economizo 5 horas por semana só na chamada e nos pagamentos." },
  { name: "Coach Lucas Almeida", belt: "Faixa Marrom", img: master2, quote: "Meus alunos amam ver a evolução das graduações em tempo real no celular." },
  { name: "Profa. Mariana Costa", belt: "Faixa Roxa", img: master3, quote: "Finalmente um app que entende como uma academia de Jiu-Jitsu funciona de verdade." },
];

function Mestres() {
  return (
    <section id="mestres" style={{ backgroundColor: "var(--tint-cream)" }}>
      <div className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-12 text-center text-3xl font-extrabold md:text-4xl">
        Usado pelos seus mestres favoritos 🥋
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {masters.map((m) => (
          <div key={m.name} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-1 transition hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
            <img src={m.img} alt={m.name} loading="lazy" width={512} height={512} className="aspect-[4/5] w-full rounded-[22px] object-cover" />
            <div className="absolute inset-x-1 bottom-1 rounded-[22px] bg-gradient-to-t from-background via-background/85 to-transparent p-6 pt-20">
              <p className="mb-4 text-sm leading-snug">"{m.quote}"</p>
              <div className="font-semibold">{m.name}</div>
              <div className="text-xs text-accent">{m.belt}</div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

const features = [
  { icon: Camera, title: "Chamada com um toque", desc: "Marque presença dos alunos em segundos. O BJJEASY identifica quem treinou, quantas aulas e por quanto tempo." },
  { icon: Award, title: "Controle de graduações", desc: "Acompanhe o progresso de cada faixa e grau. Receba alertas quando um aluno estiver pronto para a próxima graduação." },
  { icon: Calendar, title: "Agenda inteligente de aulas", desc: "Crie horários, eventos e seminários. Seus alunos confirmam presença direto pelo app." },
  { icon: Users, title: "Gestão completa de alunos", desc: "Histórico, mensalidades, contatos e fotos. Tudo organizado em uma ficha digital por aluno." },
];

function Recursos() {
  return (
    <section id="recursos" style={{ backgroundColor: "var(--tint-mint)" }}>
      <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-extrabold md:text-5xl">O que o BJJEASY oferece?</h2>
        <p className="mt-3 text-muted-foreground">Tudo que sua academia precisa em um só lugar.</p>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-2">
        <img src={featureCheckin} alt="Tela de chamada" loading="lazy" width={800} height={1024} className="mx-auto w-full max-w-sm" />
        <div className="grid gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl text-background" style={{ background: "var(--gradient-gold)" }}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1 text-lg font-bold">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

function PorQue() {
  const items = [
    { icon: CheckCircle2, title: "Economize seu tempo", desc: "Sem planilhas, sem papelada. O BJJEASY automatiza chamada, mensalidades e relatórios para você focar no tatame." },
    { icon: Bell, title: "Notificações inteligentes", desc: "Avise alunos sobre aulas, eventos e mensalidades em atraso direto pelo app, sem precisar de WhatsApp." },
    { icon: Award, title: "Engaje seus alunos", desc: "Eles veem aulas treinadas, evolução e próxima graduação. Mais motivação, mais retenção." },
  ];
  return (
    <section style={{ backgroundColor: "var(--tint-sky)" }}>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold md:text-5xl">Por que escolher o BJJEASY?</h2>
          <p className="mt-3 text-muted-foreground">O app de gestão mais completo para academias de Jiu-Jitsu.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-border bg-background p-7">
              <i.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-xl font-bold">{i.title}</h3>
              <p className="text-muted-foreground">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NovoRecurso() {
  return (
    <section style={{ backgroundColor: "var(--tint-dark)", color: "white" }}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 lg:grid-cols-2">
        <div>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80">Novo recurso</span>
          <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl text-white">
            Ranking de evolução <span className="text-white/70">para sua academia 🏆</span>
          </h2>
          <p className="mt-4 text-white/70">Veja quem treinou mais no mês, quem está perto de graduar e mantenha a competição saudável dentro do tatame.</p>
          <p className="mt-2 text-sm text-white/50">Novidades toda semana 🚀</p>
        </div>
        <img src={featureDark} alt="Ranking de alunos" loading="lazy" width={800} height={1024} className="mx-auto w-full max-w-xs" />
      </div>
    </section>
  );
}

const reviews = [
  { name: "@academia_alpha", text: "Mudou completamente como eu controlo minha academia. Indispensável!" },
  { name: "@prof.eduardo", text: "Em 2 semanas usando o BJJEASY já recuperei 3 mensalidades atrasadas que tinha esquecido 🙌" },
  { name: "@team_oss", text: "Os alunos amam ver a graduação evoluindo. App lindo e fácil." },
  { name: "@coach.bruna", text: "Não vivo mais sem. Chamada em 30 segundos, antes levava 10 min." },
  { name: "@jiujitsu.pro", text: "Suporte sensacional e atualizações constantes. Vale cada centavo." },
];

function Reviews() {
  return (
    <section id="avaliacoes" style={{ backgroundColor: "var(--tint-lavender)" }}>
      <div className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-12 text-center text-3xl font-extrabold md:text-5xl">Milhares de mestres falam de nós</h2>
      <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
        {reviews.map((r) => (
          <div key={r.name} className="mb-6 break-inside-avoid rounded-2xl border border-border bg-card p-6">
            <div className="mb-2 flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mb-3 text-sm leading-relaxed">"{r.text}"</p>
            <div className="text-xs font-semibold text-muted-foreground">{r.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="mb-6 flex justify-center gap-1 text-accent">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-6 w-6 fill-current" />)}
        </div>
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Mais de 100 mil mestres confiam</p>
        <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
          Comece agora seu
          <span className="block bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>teste grátis de 7 dias</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Sem compromisso. Cancele quando quiser. Comece a transformar a gestão da sua academia hoje.
        </p>
        <div className="mt-8 flex justify-center"><StoreButtons /></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2 font-bold text-foreground">
          <span className="grid h-7 w-7 place-items-center rounded-lg" style={{ background: "var(--gradient-gold)" }}>
            <Dumbbell className="h-4 w-4 text-background" />
          </span>
          BJJEASY
        </div>
        <p>© {new Date().getFullYear()} BJJEASY. Feito para a comunidade do Jiu-Jitsu.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-foreground">Termos</a>
          <a href="#" className="hover:text-foreground">Privacidade</a>
          <a href="#" className="hover:text-foreground">Contato</a>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Mestres />
      <Recursos />
      <PorQue />
      <NovoRecurso />
      <Reviews />
      <FinalCTA />
      <Footer />
    </div>
  );
}
