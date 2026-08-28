import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

const POSTS = [
  {
    title: "Top 5 Construction Trends in 2026",
    date: "May 12, 2026",
    image:
      "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "How to Choose the Right Construction Partner",
    date: "May 19, 2026",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Sustainable Building: A Better Future",
    date: "May 5, 2026",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=700&q=80",
  },
];

const BlogInsights = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Latest News
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
              Construction Insights &amp; Updates
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 self-start text-sm font-semibold text-gold-600 transition hover:gap-2.5 md:self-auto"
          >
            View All News
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-2xl border border-brand-900/10 bg-white transition hover:shadow-xl"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="flex items-center gap-1.5 text-xs text-brand-900/50">
                  <CalendarDays size={13} />
                  {post.date}
                </span>
                <h3 className="mt-2 font-bold text-brand-900 leading-snug">
                  {post.title}
                </h3>
                <Link
                  href="/blog"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 transition group-hover:gap-2.5"
                >
                  Read More
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogInsights;
