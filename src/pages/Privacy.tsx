import { ArrowLeft, FileText, LockKeyhole, Shield, UserRoundX } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

const sectionClass = 'space-y-3 text-gray-700 leading-7';

export function Privacy() {
  return (
    <div className="w-full bg-white pb-20">
      <section className="bg-gray-50 py-16 md:py-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl text-primary"><Shield className="w-8 h-8" /></div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-base text-gray-600">Last updated: September 8, 2026</p>
        </div>
      </section>
      <section className="py-12"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-gray-700 leading-7"><p><strong>GHARBANOO TECHNOLOGIES PRIVATE LIMITED</strong>, India, operates GharBanoo. This policy explains how we handle information when you use the GharBanoo Android app, website, and related services. Questions can be sent to <a className="text-primary underline" href="mailto:gharbanoo@gmail.com">gharbanoo@gmail.com</a>.</p></div>
        <PolicySection icon={<FileText />} title="Information we collect"><ul className="list-disc pl-5 space-y-2"><li><strong>Sign-in information:</strong> when you use Google Sign-In, we receive information associated with your Google account such as your display name, email address, profile photo, and Firebase user ID.</li><li><strong>Account and marketplace information:</strong> your selected role, provider or shop profile information, ratings, reviews, likes, and other content you choose to submit.</li><li><strong>Images:</strong> profile, cover, portfolio, and supported shop images you upload.</li><li><strong>Invoice information:</strong> provider and shop owners may enter customer name and contact details, items or services, rates, notes, discounts, totals, and invoice metadata to create invoices.</li><li><strong>Technical information:</strong> Firebase Analytics and Firebase Crashlytics may collect limited app, device, usage, and crash information. We do not intentionally send review text, email addresses, phone numbers, names, or exact addresses to Analytics.</li></ul></PolicySection>
        <PolicySection icon={<Shield />} title="How we use information"><p>We use information to authenticate and manage accounts; operate provider/shop onboarding, profiles, likes, ratings, and reviews; display approved public marketplace content; store user-uploaded media; provide private invoice history and PDF features; improve reliability and user experience; and diagnose technical problems and crashes.</p></PolicySection>
        <PolicySection icon={<LockKeyhole />} title="Public and private information"><p>Approved provider and shop profiles, approved reviews, ratings, and approved public images may be visible to other users and visitors. Pending or unapproved profiles and reviews are not publicly exposed.</p><p>Invoices, customer invoice details, and private account records are not publicly visible. They are available only to the relevant provider or shop owner through authenticated access controls.</p></PolicySection>
        <PolicySection icon={<FileText />} title="Third-party services and sharing"><p>We use Google Firebase Authentication, Cloud Firestore, Firebase Storage, Firebase Analytics, Firebase Crashlytics, and Google Play Services where applicable. Google and Firebase may process information as infrastructure providers under their own terms and privacy practices.</p><p>We do not sell personal data. If a provider or shop owner chooses to share a generated invoice PDF through WhatsApp or another app, that sharing is initiated and controlled by that user. The receiving service's privacy practices then apply.</p></PolicySection>
        <PolicySection icon={<LockKeyhole />} title="Security and retention"><p>We use Firebase security rules and authenticated access controls to protect profiles, uploads, invoices, and other private records. No method of electronic storage is completely risk-free, but we work to use appropriate safeguards for the service.</p><p>We retain information while it is needed to provide GharBanoo and as necessary for legal, security, or operational purposes. Private invoice records remain in the owner's account unless deleted through account deletion or a future product deletion feature.</p></PolicySection>
        <PolicySection icon={<UserRoundX />} title="Account and data deletion"><p>You can permanently delete your account in the signed-in GharBanoo app. For help or an external deletion request, visit <Link className="text-primary underline" to="/delete-account">gharbanoo.com/delete-account</Link> or email <a className="text-primary underline" href="mailto:gharbanoo@gmail.com">gharbanoo@gmail.com</a>.</p><p>Account deletion removes the Firebase account, account record, user-owned likes and reviews, private invoice records, and applicable Firebase-hosted profile and portfolio media. Provider and shop account deletion also removes that owner's marketplace listing and its associated reviews and likes. Locally saved or previously shared invoice PDFs cannot be remotely removed by GharBanoo. Limited information may be retained where required for legal or security reasons.</p></PolicySection>
        <PolicySection icon={<Shield />} title="Your rights, children, and policy updates"><p>Where applicable, you may contact us to request access to, correction of, or deletion of your personal data. GharBanoo is not intended for children under 13. We may update this policy as our services or legal obligations change; the revised version will be posted here with an updated date.</p></PolicySection>
        <div className="rounded-2xl border border-gray-200 p-6"><p className="font-bold text-gray-900">GHARBANOO TECHNOLOGIES PRIVATE LIMITED</p><p className="text-gray-600">India · <a className="text-primary underline" href="mailto:gharbanoo@gmail.com">gharbanoo@gmail.com</a></p></div>
      </div></section>
      <section className="py-8 text-center"><Link to="/" className="inline-flex items-center gap-2 text-primary font-bold hover:underline"><ArrowLeft className="w-5 h-5" />Back to Home</Link></section>
    </div>
  );
}

function PolicySection({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return <section className={sectionClass}><div className="flex items-center gap-3 text-gray-900"><span className="rounded-lg bg-primary/10 p-2 text-primary">{icon}</span><h2 className="text-2xl font-heading font-bold">{title}</h2></div><div className="pl-0 sm:pl-12 space-y-3">{children}</div></section>;
}
