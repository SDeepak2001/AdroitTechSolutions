export default function StatsRibbon() {
  const stats = [
    { k: "99.9%", v: "API uptime" },
    { k: "10%", v: "query speedup" },
    { k: "48h", v: "avg. project kickoff" },
    { k: "$$$", v: "cost visibility & control" },
  ];
  return (
    <section className="bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.v}>
            <div className="text-2xl font-extrabold text-neutral-900">{s.k}</div>
            <div className="text-sm text-neutral-600">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
