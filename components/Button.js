export default function Button({ as: Tag = "button", variant = "primary", className = "", children, ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-60 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-indigo-600",
    outline:
      "border border-slate-300 bg-transparent text-slate-800 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800",
    ghost: "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800",
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
