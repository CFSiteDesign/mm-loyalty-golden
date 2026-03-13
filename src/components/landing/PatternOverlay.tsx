import tropicalPattern from '@/assets/tropical-pattern.png';

export default function PatternOverlay({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none mix-blend-multiply ${className}`}
      style={{
        backgroundImage: `url(${tropicalPattern})`,
        backgroundSize: '400px',
        backgroundRepeat: 'repeat',
      }}
    />
  );
}
