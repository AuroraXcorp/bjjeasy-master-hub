type Props = {
  src: string;
  alt: string;
  className?: string;
};

export function PhoneMockup({ src, alt, className = "" }: Props) {
  return (
    <div className={`relative mx-auto aspect-[9/19] w-full max-w-[280px] ${className}`}>
      {/* Outer frame */}
      <div className="absolute inset-0 rounded-[3rem] bg-neutral-900 p-[10px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] ring-1 ring-black/10">
        {/* Side buttons */}
        <span className="absolute left-[-2px] top-[110px] h-10 w-[3px] rounded-l bg-neutral-800" />
        <span className="absolute left-[-2px] top-[160px] h-16 w-[3px] rounded-l bg-neutral-800" />
        <span className="absolute right-[-2px] top-[140px] h-20 w-[3px] rounded-r bg-neutral-800" />

        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-white">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
          {/* Dynamic island / notch */}
          <div className="pointer-events-none absolute left-1/2 top-2 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-black" />
        </div>
      </div>
    </div>
  );
}
