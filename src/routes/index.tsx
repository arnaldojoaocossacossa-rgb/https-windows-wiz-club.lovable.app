import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PurchaseNotifications } from "@/components/PurchaseNotifications";
import d1 from "@/assets/depoimento-1.jpg.asset.json";
import d2 from "@/assets/depoimento-2.jpg.asset.json";
import d3 from "@/assets/depoimento-3.jpg.asset.json";
import d4 from "@/assets/depoimento-4.jpg.asset.json";
import d5 from "@/assets/depoimento-5.jpg.asset.json";
import d6 from "@/assets/depoimento-6.jpg.asset.json";
import d7 from "@/assets/depoimento-7.jpg.asset.json";
import d8 from "@/assets/depoimento-8.jpg.asset.json";
import d9 from "@/assets/depoimento-9.jpg.asset.json";
const depoimentos = [d1.default , d2.default, d3.default, d4.default, d5.default, d6.default, d7.default, d8.default, d9.default];
const CHECKOUT = "https://pay.tutora.co.mz/57c1df708c90479f996a3107c5b9c78d";
const WHATSAPP_NUM = "+258 878 115 843";
const WHATSAPP_LINK = "https://wa.me/258878115843";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Curso de Instalação de Windows | Aprenda como um Técnico" },
      {
        name: "description",
        content:
          "Aprenda a instalar Windows 7 até 11 no teu PC, passo a passo, com 5 aulas práticas. Acesso permanente por apenas 297MTS.",
      },
      { property: "og:title", content: "Curso de Instalação de Sistemas Windows" },
      {
        property: "og:description",
        content:
          "Pare de depender de técnicos. Instale, repare e active o Windows sozinho. 5 aulas práticas, acesso permanente por 297MTS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const problemas = [
  "Entrega o teu PC à técnicos sempre que há um problema de software",
  "Não consegue fazer backup dos seus arquivos",
  "O teu PC não dá imagem",
  "O teu PC trava no Windows",
  "Liga e desliga automaticamente",
  "Não consegue trocar de Windows",
  "O teu PC não suporta o Windows que está a usar",
  "O teu PC dá crash (travamento)",
  "O teu PC é lento com o Windows instalado",
];

const beneficios = [
  { icon: "♻️", title: "Economize dinheiro", text: "Nunca mais pagues por serviços simples." },
  { icon: "🚸", title: "Torne-se independente", text: "Resolve tudo sozinho, a qualquer hora." },
  { icon: "🔰", title: "Habilidade valiosa", text: "Podes até ganhar dinheiro com isso." },
  { icon: "✅️", title: "100% legal e seguro", text: "Métodos correctos e testados." },
];

const aulas = [
  {
    n: "01",
    title: "Backup de arquivos",
    text: "Restaure os seus arquivos importantes para nunca os perder.",
  },
  {
    n: "02",
    title: "Criar Pendrive Bootável",
    text: "Formate e extraia o Windows para o USB correctamente.",
  },
  {
    n: "03",
    title: "Configurar a BIOS",
    text: "Configure os componentes para iniciar o Windows certo.",
  },
  {
    n: "04",
    title: "Instalar Windows 7 até 11",
    text: "Execute qualquer versão sem erros nem travamentos.",
  },
  {
    n: "05",
    title: "Drivers, activação, antivírus",
    text: "Reparta o HD, instale drivers, programas e active tudo.",
  },
];

const incluido = [
  "5 aulas práticas detalhadas",
  "Acesso permanente — sem prazo",
  "Suporte 24h via WhatsApp",
  "Plataforma oficial Tutora",
  "100% online — assiste quando quiseres",
];

const faqs = [
  {
    q: "É online ou presencial?",
    a: "Na verdade, este é um curso 100% online composto por vídeo aulas detalhadas. A grande vantagem é que podes aprender no teu ritmo, onde e quando quiseres, e rever as aulas sempre que precisares, pois o acesso é permanente.",
  },
  {
    q: "Pagando os 297 MTS já não preciso pagar mais nada?",
    a: "O valor de 297MTS é um pagamento único. Não há mensalidades nem custos adicionais. Com esse valor garantes acesso permanente a todo o conteúdo do curso.",
  },
  {
    q: "Depois do pagamento, como acesso as aulas?",
    a: "Sim, o acesso é imediato. Após efectuares o pagamento, entrará uma notificação no teu e-mail da Tutora com uma senha; só terás de escrever o teu e-mail e a senha que recebeste e pronto.",
  },
  {
    q: "Qual é a garantia de que é real?",
    a: "É real sim, porque há muitos moçambicanos que estão a comprar este conteúdo e fazem depoimentos diariamente — podemos passar-te os contactos para confirmares. Além disso, este curso foi cadastrado na plataforma Tutora, que é uma das oficiais de venda de infoprodutos em Moçambique.",
  },
  {
    q: "E se eu tiver dificuldade em pôr em prática?",
    a: "Neste caso damos suporte exclusivo 24h pelo WhatsApp, contacto: 878115843 — Arnaldo Cossa, disponível para atender qualquer inquietação a qualquer momento.",
  },
  {
    q: "Como faço o pagamento?",
    a: "Clica no botão adquirir o curso e serás redireccionado para o link de pagamento da Tutora. Aí podes efectuar o pagamento, preenchendo os teus dados pessoais e clicando em finalizar compra. NOTA: o teu PIN não será exposto, então fica tranquilo porque a compra é segura.",
  },
];

const depoimentos = [d1, d2, d3, d4, d5, d6, d7, d8, d9];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-accent">
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}

function Countdown() {
  const [left, setLeft] = useState(8 * 3600 + 26 * 60 + 29);
  useEffect(() => {
    const t = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const p = (n: number) => String(n).padStart(2, "0");
  return (
    <span className="font-mono tabular-nums text-accent">
      {p(Math.floor(left / 3600))}:{p(Math.floor((left % 3600) / 60))}:{p(left % 60)}
    </span>
  );
}

function TopBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-accent/20 bg-[oklch(0.19_0.05_258)]/95 px-4 py-2 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs sm:text-sm">
        <span aria-hidden>🔥</span>
        <span className="font-semibold">Oferta a expirar — restam</span>
        <span className="rounded-md bg-accent/15 px-2 py-0.5 font-bold text-accent">17 vagas</span>
        <span className="font-semibold">por 297 MT</span>
        <span className="flex items-center gap-1">
          <span aria-hidden>⏱</span>
          <Countdown />
        </span>
      </div>
    </div>
  );
}

function CTA({ id, note = true }: { id?: string; note?: boolean }) {
  return (
    <div id={id} className="w-full">
      <Button variant="cta" size="xl" className="w-full" asChild>
        <a href={CHECKOUT} target="_blank" rel="noopener noreferrer">
          Quero adquirir o curso agora
        </a>
      </Button>
      {note && (
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block text-center text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          💬 Não conseguiste? Fala connosco: {WHATSAPP_NUM}
        </a>
      )}
    </div>
  );
}

function Index() {
  return (
    <>
      <TopBar />
      <PurchaseNotifications />
      <main>
        {/* HERO / PROBLEMAS */}
        <section className="bg-hero px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <Eyebrow>Para moçambicanos cansados de depender de técnicos</Eyebrow>
            <h1 className="mt-6 text-4xl leading-[1.05] sm:text-6xl">
              Reconhece-te em <br className="hidden sm:block" />
              <span className="text-accent">alguma destas situações?</span>
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Milhares de moçambicanos enfrentam isto todos os dias.
            </p>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {problemas.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card/60 px-4 py-3.5 shadow-card"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-xs font-bold text-destructive"
                  >
                    ✕
                  </span>
                  <span className="text-sm text-card-foreground sm:text-base">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-accent/30 bg-card/50 p-8 text-center shadow-card">
              <h2 className="text-3xl sm:text-4xl">Diga um basta a isso.</h2>
              <p className="mt-3 text-lg italic text-accent">
                "A frustração é real. Mas a solução também é."
              </p>
            </div>
          </div>
        </section>

        {/* APRESENTAÇÃO */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Apresentamos</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl">
              Curso de Instalação <br className="hidden sm:block" />
              <span className="text-primary">de Sistemas Windows</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              O método passo a passo para instalares Windows no teu computador, de uma vez por
              todas, a qualquer momento e em qualquer lugar —{" "}
              <span className="font-semibold text-foreground">como um técnico</span>.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              O Curso de Instalação de Sistemas Windows é uma unidade da Informática que lida com a
              instalação de software (Windows), feito em vídeo aulas por mim,{" "}
              <span className="font-semibold text-foreground">Arnaldo João Agostinho Cossa</span>,
              para ensinar as pessoas que têm dificuldades de instalar o Windows no PC.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {beneficios.map((b) => (
                <div
                  key={b.title}
                  className="rounded-xl border border-border bg-card p-5 text-left shadow-card"
                >
                  <span aria-hidden className="text-2xl">
                    {b.icon}
                  </span>
                  <h3 className="mt-2 text-lg">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VSL */}
        <section className="border-y border-border bg-card/40 px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Assista antes de comprar</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl">Veja como funciona em 3 minutos</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/X_1AzCtv35I"
                  title="Curso de Instalação de Sistemas Windows — vídeo de apresentação"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-xl">
              <CTA id="comprar" />
            </div>
          </div>
        </section>

        {/* AULAS */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>Conteúdo</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl">O que vais aprender</h2>
            <p className="mt-3 text-muted-foreground">
              5 aulas práticas, explicadas em detalhe. Do zero ao Windows instalado.
            </p>
            <ol className="mt-10 grid gap-4 text-left sm:grid-cols-2">
              {aulas.map((a) => (
                <li
                  key={a.n}
                  className="rounded-xl border border-border bg-card p-6 shadow-card last:sm:col-span-2"
                >
                  <span className="font-display text-3xl font-extrabold text-primary/70">{a.n}</span>
                  <h3 className="mt-2 text-lg">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{a.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="border-y border-border bg-card/40 px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto grid max-w-2xl grid-cols-3 gap-4 text-center">
              {[
                ["300+", "Alunos activos"],
                ["98%", "Satisfação"],
                ["24h", "Suporte"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-xl border border-border bg-card p-4">
                  <p className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
                    {v}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{l}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-14 text-center text-3xl sm:text-4xl">O que dizem os nossos alunos</h2>
            <p className="mt-3 text-center text-muted-foreground">
              Conversas reais no WhatsApp — prints sem edição.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {depoimentos.map((d, i) => (
                <img
          key={i}
          src={depoimento.image}
          alt={`Depoimento real de aluno do curso no WhatsApp ${i + 1}`}
          loading="lazy"
          className="w-full rounded-xl border-border shadow-card"
        />
              ))}
            </div>
            <p className="mx-auto mt-12 max-w-2xl text-center text-lg italic text-muted-foreground">
              "Enquanto você fica olhando, muitos jovens e adultos já estão a parar de depender de
              técnicos."
            </p>
          </div>
        </section>

        {/* PREÇO */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-xl text-center">
            <Eyebrow>Oferta de lançamento</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl">Acesso vitalício ao curso completo</h2>
            <div className="mt-8 rounded-2xl border border-accent/40 bg-card p-8 shadow-card">
              <p className="text-2xl line-through opacity-60">500 MT</p>
              <p className="font-display text-6xl font-extrabold text-accent">297MT</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Pagamento único · Sem mensalidades
              </p>
              <ul className="mt-8 space-y-3 text-left">
                {incluido.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base">
                    <span aria-hidden className="text-success">
                      ✔
                    </span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTA note={false} />
                <p className="mt-3 text-xs text-muted-foreground">
                  Pagamento seguro pela Tutora · O teu PIN não fica exposto
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  💬 Dúvidas? {WHATSAPP_NUM}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border px-4 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl sm:text-4xl">Perguntas frequentes</h2>
            <Accordion type="single" collapsible className="mt-8">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-hero px-4 py-20">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl sm:text-4xl">Pronto para parar de depender de técnicos?</h2>
            <p className="mt-4 text-muted-foreground">
              Junta-te a centenas de moçambicanos que já dominam a instalação de Windows.
            </p>
            <div className="mt-8">
              <CTA />
            </div>
          </div>
        </section>

        <footer className="border-t border-border px-4 py-8 text-center text-sm text-muted-foreground">
          <p>Suporte WhatsApp: {WHATSAPP_NUM} — Arnaldo Cossa</p>
          <p className="mt-2">2026 · Todos os direitos reservados</p>
        </footer>
      </main>
    </>
  );
}
