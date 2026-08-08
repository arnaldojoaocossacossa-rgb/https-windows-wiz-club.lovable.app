import { useEffect, useState } from "react";

const compradores = [
  { nome: "Arlindo M.", cidade: "Maputo" },
  { nome: "Sónia J.", cidade: "Matola" },
  { nome: "Hélder C.", cidade: "Beira" },
  { nome: "Amélia F.", cidade: "Nampula" },
  { nome: "Júlio T.", cidade: "Quelimane" },
  { nome: "Nércia S.", cidade: "Tete" },
  { nome: "Domingos A.", cidade: "Xai-Xai" },
  { nome: "Elsa M.", cidade: "Chimoio" },
  { nome: "Ivan P.", cidade: "Pemba" },
  { nome: "Cátia R.", cidade: "Inhambane" },
  { nome: "Bruno N.", cidade: "Maxixe" },
  { nome: "Telma G.", cidade: "Lichinga" },
];

export function PurchaseNotifications() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [minutos, setMinutos] = useState(2);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;
    let nextTimer: ReturnType<typeof setTimeout>;

    const cycle = () => {
      setMinutos(Math.floor(Math.random() * 9) + 1);
      setVisible(true);
      hideTimer = setTimeout(() => {
        setVisible(false);
        nextTimer = setTimeout(() => {
          setIndex((i) => (i + 1) % compradores.length);
          cycle();
        }, 8000);
      }, 6000);
    };

    const start = setTimeout(cycle, 6000);
    return () => {
      clearTimeout(start);
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, []);

  const c = compradores[index]!;

  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed bottom-4 left-4 z-[60] max-w-[calc(100vw-2rem)] transition-all duration-500 sm:max-w-sm ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 rounded-xl border border-accent/30 bg-card/95 px-4 py-3 shadow-card backdrop-blur">
        <span
          aria-hidden
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-success/15 text-base"
        >
          ✅
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-card-foreground">
            {c.nome} — {c.cidade}
          </p>
          <p className="text-xs text-muted-foreground">
            Acabou de adquirir o curso · há {minutos} min
          </p>
        </div>
      </div>
    </div>
  );
}
