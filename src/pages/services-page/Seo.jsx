import React from "react";

const Seo = () => {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-8 text-[#f0c417]">SEO</h1>

      <p className="mb-6 text-lg">
        Every brand wants to rank.
        <br />
        But not everyone knows why or how to make it stick.
        <br />
        We are here to go beyond the surface-level SEO checklist. We build
        systems that search engines concede and users actually want to engage
        with.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Here’s What We Bring to the Table:</h2>

      <div className="space-y-6 mb-10">
        <div>
          <h3 className="text-xl font-semibold text-yellow-300">Technical SEO</h3>
          <p>
            Speed, structure, and searchability — we get the backend right so
            the front end performs. We audit, fix, and fine-tune everything that
            makes search engines take notice.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-yellow-300">On-Page SEO</h3>
          <p>
            From keyword-rich original content to intelligent internal linking,
            we turn every page into a high-performing asset.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-yellow-300">Off-Page SEO</h3>
          <p>
            With our white-hat on, we boost your authority with high-quality
            backlinks, digital PR, and link-building that earns trust and
            traffic.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-yellow-300">Local SEO</h3>
          <p>
            We help you show up and stand out in local searches, Google Maps,
            and hyper-local listings.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-yellow-300">AI-Powered SEO</h3>
          <p>
            We use AI for keyword mapping, predictive ranking, and competitor
            analysis — so you’re always two steps ahead.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-yellow-300">
            Search Engine Marketing (SEM)
          </h3>
          <p>
            We create and manage paid search campaigns that get actual results
            with no wasted ad spend. If SEO is the long game, SEM is your fast
            lane.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Why Choose Spark Tech for SEO?</h2>
      <ul className="list-disc list-inside mb-8 space-y-2">
        <li>We don’t believe in one-size-fits-all roadmaps.</li>
        <li>Every keyword is researched.</li>
        <li>We combine automation with human judgment.</li>
        <li>We track what matters — not vanity metrics.</li>
        <li>We care about your goals, not just your rankings.</li>
      </ul>

      <p className="text-lg mb-10">
        SEO isn’t just about being found — it’s about being chosen.
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold shadow-md hover:bg-white hover:text-black transition">
          Book an SEO consultation
        </button>
        <button className="px-6 py-3 rounded-full bg-transparent border border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-black transition">
          Get your free site audit
        </button>
      </div>
    </section>
  );
};

export default Seo;
