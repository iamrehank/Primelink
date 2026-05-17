import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us when you fill out our contact form, request a consultation, or communicate with our team. This includes your name, work email address, phone number, company name, and any message content you submit.

We also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages visited. This data is collected through standard server logs and analytics tools.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:

• Respond to your inquiries and provide the services you request
• Send you information about our services, updates, and promotional materials (where you have consented)
• Improve and optimize our website and service offerings
• Comply with legal obligations and enforce our terms
• Protect the security and integrity of our business operations

We do not sell, trade, or rent your personal information to third parties for their marketing purposes.`,
  },
  {
    title: '3. Information Sharing',
    content: `We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential.

We may also disclose your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.`,
  },
  {
    title: '4. Data Security',
    content: `We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes secure HTTPS connections, encrypted data storage, and restricted access controls.

However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.`,
  },
  {
    title: '5. Cookies',
    content: `Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you interact with our site, remember your preferences, and improve our services.

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our website may not function properly.`,
  },
  {
    title: '6. Third-Party Links',
    content: `Our website may contain links to third-party websites. These sites have their own privacy policies, and we have no responsibility or liability for their content or activities. We encourage you to review the privacy policy of any third-party site you visit.`,
  },
  {
    title: '7. Your Rights',
    content: `You have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate or incomplete data
• Request deletion of your personal data, subject to legal obligations
• Opt out of marketing communications at any time
• Lodge a complaint with a relevant data protection authority

To exercise any of these rights, please contact us using the details provided below.`,
  },
  {
    title: '8. Children\'s Privacy',
    content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately and we will take steps to remove such information.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We reserve the right to update this Privacy Policy at any time. We will notify you of any significant changes by posting the new policy on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we protect your information.`,
  },
  {
    title: '10. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:

Primelink Marketing Solution LLC
1200 Enterprise Way, Suite 500
Chicago, IL 60601

Email: inquiry@primelinkmkt.com
Phone: +1 (800) 555-0199`,
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Primelink Marketing Solution LLC</title>
        <meta name="description" content="Read the Privacy Policy of Primelink Marketing Solution LLC. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://www.primelinkmkt.com/privacy-policy" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="flex flex-col w-full"
      >
        {/* Hero */}
        <section className="bg-surface-container-low border-b border-outline-variant py-14 md:py-20 px-4 md:px-8">
          <div className="max-w-[860px] mx-auto">
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 block">Legal</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-4">Privacy Policy</h1>
            <p className="text-on-surface-variant text-base">
              Effective Date: <time dateTime="2024-01-01">January 1, 2024</time>
            </p>
            <p className="text-on-surface-variant text-base mt-3 max-w-2xl">
              Primelink Marketing Solution LLC ("we", "our", or "us") is committed to protecting your privacy. This policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 md:py-20 px-4 md:px-8">
          <div className="max-w-[860px] mx-auto">
            <div className="space-y-10">
              {sections.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="border-b border-outline-variant pb-10 last:border-0"
                >
                  <h2 className="text-lg md:text-xl font-bold text-on-surface mb-4">{section.title}</h2>
                  <div className="text-on-surface-variant text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
