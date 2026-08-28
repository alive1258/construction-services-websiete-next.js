import Image from "next/image";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import ZoomIn from "@/src/components/Common/Animaation/ZoomIn";

const TEAM = [
  {
    name: "Robert Miller",
    role: "Chief Executive Officer",
    bio: "25+ years leading large-scale commercial builds.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Jennifer Adams",
    role: "Chief Operating Officer",
    bio: "Keeps every project on schedule and on budget.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Daniel Carter",
    role: "Head of Engineering",
    bio: "Structural engineer specializing in high-rise design.",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Emily Foster",
    role: "Head of Design",
    bio: "Leads architecture and interior design teams.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
];

const LeadershipTeam = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SlideUp className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Our Team
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Meet Our Leadership
          </h2>
        </SlideUp>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map(({ name, role, bio, image }) => (
            <ZoomIn
              key={name}
              className="group overflow-hidden rounded-2xl border border-brand-900/10 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="font-bold text-brand-900">{name}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                  {role}
                </p>
                <p className="mt-2 text-sm text-brand-900/60">{bio}</p>
              </div>
            </ZoomIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
