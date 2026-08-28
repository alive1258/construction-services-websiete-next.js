import type { Metadata } from "next";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import ContactInfoCards from "@/src/components/Ui/ContactPage/ContactInfoCards/ContactInfoCards";
import ContactForm from "@/src/components/Ui/ContactPage/ContactForm";
import ContactMapSection from "@/src/components/Ui/ContactPage/ContactMapSection/ContactMapSection";
import ContactFaq from "@/src/components/Ui/ContactPage/ContactFaq/ContactFaq";
import ContactTestimonials from "@/src/components/Ui/ContactPage/ContactTestimonials/ContactTestimonials";
import CTABanner from "@/src/components/Ui/ContactPage/CTABanner/CTABanner";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Constructa to discuss your residential, commercial, or industrial construction project and request a free quote.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Start Your Project"
        subtitle="Have a project in mind? Reach out and our team will get back to you within one business day with a free consultation."
        image="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1600&q=80"
        alt="Construction site manager reviewing plans on site"
      />

      <ContactInfoCards />

      <section className="bg-white py-16 md:py-24">
        <div className="container max-w-2xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Get In Touch
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
              Send Us a Message
            </h2>
          </div>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactMapSection />

      <ContactFaq />

      <ContactTestimonials />

      <CTABanner />
    </>
  );
}
