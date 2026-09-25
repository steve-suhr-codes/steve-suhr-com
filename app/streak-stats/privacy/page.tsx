import LegalPage, { type LegalSection } from '../../../components/LegalPage';

export const metadata = {
  title: 'Streak Stats Privacy Policy - Steve Suhr',
  description: 'What the Streak Stats app collects, why, and how to delete it.',
};

const CONTACT = 'support@stevesuhr.com';

const sections: LegalSection[] = [
  {
    id: 'summary',
    title: 'The short version',
    body: (
      <ul>
        <li>We collect only what the app needs: your Google account basics and the streaks you create.</li>
        <li>We don&apos;t sell your data, show ads, or use analytics or tracking tools.</li>
        <li>You can delete your account and all of your streaks at any time from inside the app.</li>
      </ul>
    ),
  },
  {
    id: 'collect',
    title: 'What we collect',
    body: (
      <>
        <p>
          <strong>From Google sign-in:</strong> your Google account ID, email address, name, and a
          link to your profile picture. We never see your Google password.
        </p>
        <p>
          <strong>What you create:</strong> each streak&apos;s label and start date, the dates of any
          restarts, and when streaks were created or changed.
        </p>
        <p>
          <strong>Technical data:</strong> like most online services, our servers keep short-lived
          logs of requests (such as IP address, time, and the page or action requested) for
          security and troubleshooting.
        </p>
        <p>
          On your device, the app stores a sign-in token in the phone&apos;s secure storage so you
          stay signed in. It&apos;s removed when you sign out or delete your account.
        </p>
      </>
    ),
  },
  {
    id: 'use',
    title: 'How we use it',
    body: (
      <ul>
        <li>To sign you in and keep your streaks tied to your account.</li>
        <li>To show your streaks and their day counts, and to keep a history of restarts.</li>
        <li>To keep the service secure and fix problems.</li>
      </ul>
    ),
  },
  {
    id: 'sharing',
    title: 'Who we share it with',
    body: (
      <>
        <p>
          We don&apos;t sell or rent your information. We use a few service providers that process
          data on our behalf to run the app:
        </p>
        <ul>
          <li><strong>Google</strong>, for sign-in.</li>
          <li><strong>Vercel</strong>, which hosts the app&apos;s server.</li>
          <li><strong>Neon</strong>, which hosts the app&apos;s database.</li>
        </ul>
        <p>
          We may also disclose information if the law requires it, or to protect the safety and
          security of the service and its users.
        </p>
      </>
    ),
  },
  {
    id: 'storage',
    title: 'Where it’s stored and how it’s protected',
    body: (
      <p>
        Your data is stored in the United States. It travels over encrypted connections (HTTPS),
        and each account can only access its own streaks. No system is perfectly secure, but we
        take reasonable steps to protect your information.
      </p>
    ),
  },
  {
    id: 'deletion',
    title: 'Keeping and deleting your data',
    body: (
      <>
        <p>We keep your account and streaks for as long as you have an account.</p>
        <p>
          <strong>To delete everything:</strong> in the app, tap your profile circle, then{' '}
          <strong>Delete account</strong>. This immediately and permanently deletes your account and
          all of your streaks. Copies may remain in our database provider&apos;s backups for a
          limited time before they&apos;re overwritten.
        </p>
        <p>
          If you can&apos;t use the app, email <a href={`mailto:${CONTACT}`}>{CONTACT}</a> from the
          address on your account and we&apos;ll delete it for you.
        </p>
      </>
    ),
  },
  {
    id: 'rights',
    title: 'Your choices',
    body: (
      <p>
        You can ask us what information we have about you, ask us to correct it, or ask us to delete
        it by emailing <a href={`mailto:${CONTACT}`}>{CONTACT}</a>. Depending on where you live, you
        may have additional rights under local privacy laws, and we&apos;ll honor them.
      </p>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    body: (
      <p>
        Streak Stats isn&apos;t intended for children under 13, and we don&apos;t knowingly collect
        information from them. If you believe a child has created an account, contact us and
        we&apos;ll delete it.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        If we change how we handle your information, for example when paid features are added,
        we&apos;ll update this page and its effective date. For significant changes, we&apos;ll let
        you know in the app.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <p>
        Streak Stats is made by Steve Suhr. Questions about this policy or your data:{' '}
        <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
      </p>
    ),
  },
];

export default function StreakStatsPrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Streak Stats · Legal"
      title="Privacy Policy"
      standfirst="What the Streak Stats app collects, why, and how to delete it."
      effectiveDate="September 25, 2026"
      otherPage={{ href: '/streak-stats/terms', label: 'Terms of Service' }}
      sections={sections}
    />
  );
}
