export default function Card({ className = "", children, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`group rounded-xl border border-slate-200 bg-white/80 p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70 ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
