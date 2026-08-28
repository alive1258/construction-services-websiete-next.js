const ContactMapSection = () => {
  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Visit Our Office
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Find Us On The Map
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-brand-900/10">
          <iframe
            title="Constructa office location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=23.60%2C37.94%2C23.64%2C37.96&layer=mapnik&marker=37.9475%2C23.6187"
            className="h-64 w-full sm:h-96"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
