export default function Container({ className = "", children }) {
  return <div className={`container-default ${className}`}>{children}</div>;
}
