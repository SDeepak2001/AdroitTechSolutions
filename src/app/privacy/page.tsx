export const metadata = {
  title: "Privacy Policy | Adroit Tech Solutions",
  description:
    "How Adroit Tech Solutions collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <header className="bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-black">Privacy Policy</h1>
          <p className="mt-2 text-neutral-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 space-y-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black">Overview</h2>
            <p className="mt-2 text-neutral-700 leading-relaxed">
              At Adroit Tech Solutions, your privacy is important to us. This policy describes how
              we collect, use, and protect information when you visit our website and use our
              services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black">Information We Collect</h2>
            <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1">
              <li>Contact details (name, email, phone, company)</li>
              <li>Project information you choose to share via forms</li>
              <li>Technical data (IP, browser, device, usage & analytics)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black">How We Use Information</h2>
            <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1">
              <li>To respond to inquiries and deliver services</li>
              <li>To improve site performance and user experience</li>
              <li>To maintain security and comply with applicable laws</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black">Data Sharing</h2>
            <p className="mt-2 text-neutral-700 leading-relaxed">
              We do not sell your personal information. We may share data with trusted providers
              (e.g., email, analytics) strictly to operate our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black">Security</h2>
            <p className="mt-2 text-neutral-700 leading-relaxed">
              We apply industry-standard safeguards to protect your information. However,
              no method of transmission over the Internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black">Your Choices</h2>
            <p className="mt-2 text-neutral-700 leading-relaxed">
              You can contact us to update or delete your information. You can also opt-out of
              non-essential cookies in your browser.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black">Contact</h2>
            <p className="mt-2 text-neutral-700">
              Questions? Email:{" "}
              <a className="text-sky-700 font-medium" href="mailto:info@adroittechsolution.com">
                info@adroittechsolution.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
