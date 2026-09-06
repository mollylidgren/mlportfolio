export function Fact({ title, text }: { title: string; text: string }) {
  return <div className="fact"><span>{title}</span><strong>{text}</strong></div>;
}
