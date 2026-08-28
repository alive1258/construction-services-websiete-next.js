import Image from "next/image";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

const PageHero = ({ eyebrow, title, subtitle, image, alt }: PageHeroProps) => {
  return (
    <section className="relative flex min-h-[380px] items-center overflow-hidden py-20 md:min-h-[460px]">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-brand-900/80" />
      <div className="absolute inset-0 bg-linear-to-t from-brand-900 via-brand-900/40 to-transparent" />

      <div className="container relative">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400 backdrop-blur-sm">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-2xl text-4xl sm:text-5xl font-bold text-white leading-[1.1]">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-white/80 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
