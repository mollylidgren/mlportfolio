import { Fragment } from 'react';

export type RichSegment = string | { em: string } | { grad: string } | { br: true };

export function Rich({ parts }: { parts: readonly RichSegment[] }) {
  return <>
    {parts.map((part, i) => {
      if (typeof part === 'string') return <Fragment key={i}>{part}</Fragment>;
      if ('em' in part) return <em key={i}>{part.em}</em>;
      if ('grad' in part) return <span key={i} className="gradient-word">{part.grad}</span>;
      if ('br' in part) return <br key={i} />;
      return null;
    })}
  </>;
}
