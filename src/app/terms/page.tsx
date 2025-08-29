export const metadata = {
  title: "Terms & Conditions | Adroit Tech Solutions",
  description:
    "Terms governing the use of Adroit Tech Solutions' website and services.",
};

export default function TermsPage() {
  return (
    <>
      <header className="bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-black">
            Terms &amp; Conditions
            </h1>
            <p className="mt-2 text-neutral-800">
            Last updated: {new Date().toLocaleDateString()}
            </p>
        </div>
      </header>



      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 space-y-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black">Acceptance of Terms</h2>
            <p className="mt-2 text-neutral-700 leading-relaxed">
              By accessing this website, you agree to these Terms &amp; Conditions and all
              applicable laws. If you do not agree, please discontinue use.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black">Use of Website</h2>
            <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1">
              <li>Content is provided “as is” without warranties.</li>
              <li>You agree not to misuse or disrupt the website or services.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black">Intellectual Property</h2>
            <p className="mt-2 text-neutral-700 leading-relaxed">
              All trademarks, logos, and content are the property of Adroit Tech Solutions or its
              licensors and may not be used without permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black">Limitation of Liability</h2>
            <p className="mt-2 text-neutral-700 leading-relaxed">
              Adroit Tech Solutions is not liable for indirect or consequential damages arising
              from the use of this site or our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black">Changes to Terms</h2>
            <p className="mt-2 text-neutral-700 leading-relaxed">
              We may update these Terms from time to time. Continued use constitutes acceptance
              of the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black">Contact</h2>
            <p className="mt-2 text-neutral-700">
              For questions, email{" "}
              <a className="text-sky-700 font-medium" href="mailto:info@adroittechsolution.com">
                info@adroittechsolution.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
