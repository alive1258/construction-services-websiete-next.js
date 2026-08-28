import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import ZoomIn from "@/src/components/Common/Animaation/ZoomIn";

const PLANS = [
  {
    name: "Basic Plan",
    price: "$2999",
    desc: "For small projects",
    features: ["Consultation", "Basic Design", "Project Planning", "Email Support"],
    highlighted: false,
  },
  {
    name: "Standard Plan",
    price: "$5999",
    desc: "For medium projects",
    features: [
      "Everything in Basic",
      "Detailed Planning",
      "Quality Materials",
      "Priority Support",
    ],
    highlighted: true,
  },
  {
    name: "Premium Plan",
    price: "$9999",
    desc: "For large projects",
    features: [
      "Everything in Standard",
      "Full Project Management",
      "24/7 Support",
      "Extended Warranty",
    ],
    highlighted: false,
  },
];

const PricingPlans = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SlideUp className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Our Pricing
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Flexible Pricing Plans
          </h2>
          <p className="mt-4 text-brand-900/60">
            Choose a plan that fits your project&apos;s needs and budget.
          </p>
        </SlideUp>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
          {PLANS.map((plan) => (
            <ZoomIn
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-brand-900 text-white shadow-2xl lg:scale-105"
                  : "border border-brand-900/10 bg-white text-brand-900"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              )}

              <h3 className={`text-lg font-bold ${plan.highlighted ? "text-white" : "text-brand-900"}`}>
                {plan.name}
              </h3>
              <p className={`mt-3 text-3xl font-bold ${plan.highlighted ? "text-white" : "text-brand-900"}`}>
                {plan.price}
              </p>
              <p className={`mt-1 text-sm ${plan.highlighted ? "text-white/60" : "text-brand-900/50"}`}>
                {plan.desc}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2.5 text-sm ${
                      plan.highlighted ? "text-white/80" : "text-brand-900/70"
                    }`}
                  >
                    <CheckCircle2
                      size={16}
                      className={plan.highlighted ? "text-gold-400" : "text-gold-600"}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-gold-500 text-white hover:bg-gold-600"
                    : "bg-brand-900 text-white hover:bg-brand-800"
                }`}
              >
                Choose Plan
              </Link>
            </ZoomIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
