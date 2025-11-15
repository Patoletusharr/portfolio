export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8 text-center">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}
