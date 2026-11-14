export default function SectionHeading({
  number,
  children,
  note,
  className = 'mb-10',
  inverse = false,
}: {
  number: string;
  children: string;
  note?: string;
  className?: string;
  inverse?: boolean;
}) {
  return <div className={`${className} flex flex-wrap items-baseline justify-between gap-4`}>
    <div className="flex items-baseline gap-4"><span className={`font-mono text-sm ${inverse ? 'text-primary-foreground' : 'text-primary'}`}>{number}</span><h2 className={`font-serif text-4xl leading-none md:text-5xl ${inverse ? 'text-primary-foreground' : ''}`}>{children}</h2></div>
    {note && <span className="text-sm text-muted-foreground">{note}</span>}
  </div>;
}
