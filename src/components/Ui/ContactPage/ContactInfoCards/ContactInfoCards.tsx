import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ZoomIn from "@/src/components/Common/Animaation/ZoomIn";

const CONTACT_PHONE = "+1 (202) 555-0198";
const CONTACT_EMAIL = "hello@constructa.com";
const OFFICE_ADDRESS = "123 Construction Ave, Building City, BC 12345";
const OPEN_HOURS = "Mon - Sat, 8am - 6pm";

const INFO_ITEMS = [
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: OFFICE_ADDRESS,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: OPEN_HOURS,
  },
];

const ContactInfoCards = () => {
  return (
    <section className="bg-white pt-16 md:pt-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INFO_ITEMS.map(({ icon: Icon, label, value, href }) => (
            <ZoomIn
              key={label}
              className="rounded-2xl border border-brand-900/10 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-xl sm:text-left"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-900 text-gold-400 sm:mx-0">
                <Icon size={22} />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-brand-900/50">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="mt-1 block font-bold text-brand-900 transition hover:text-gold-600"
                >
                  {value}
                </a>
              ) : (
                <p className="mt-1 font-bold text-brand-900">{value}</p>
              )}
            </ZoomIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
