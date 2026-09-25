import Link from 'next/link';

import LegalPage, { type LegalSection } from '../../../components/LegalPage';

export const metadata = {
  title: 'Streak Stats Terms of Service - Steve Suhr',
  description: 'The terms for using the Streak Stats app.',
};

const CONTACT = 'support@stevesuhr.com';

const sections: LegalSection[] = [
  {
    id: 'agreement',
    title: 'Agreement',
    body: (
      <p>
        These terms cover your use of the Streak Stats app and its service (&ldquo;Streak
        Stats&rdquo;), made by Steve Suhr (&ldquo;we&rdquo;). By creating an account or using the
        app, you agree to them. If you don&apos;t agree, please don&apos;t use Streak Stats. Our{' '}
        <Link href="/streak-stats/privacy">Privacy Policy</Link> explains how we handle your
        information.
      </p>
    ),
  },
  {
    id: 'account',
    title: 'Your account',
    body: (
      <p>
        You sign in with a Google account, and you&apos;re responsible for activity on your Streak
        Stats account. You must be at least 13 years old to use Streak Stats.
      </p>
    ),
  },
  {
    id: 'use',
    title: 'Acceptable use',
    body: (
      <>
        <p>Please don&apos;t:</p>
        <ul>
          <li>use Streak Stats for anything illegal;</li>
          <li>try to access other people&apos;s accounts or data;</li>
          <li>interfere with, overload, or try to break the service, or scrape it with automated tools.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'content',
    title: 'Your content',
    body: (
      <p>
        The streak labels and dates you enter are yours. You give us permission to store and
        process them only as needed to run the app for you. We don&apos;t claim ownership of them.
      </p>
    ),
  },
  {
    id: 'purchases',
    title: 'Paid features',
    body: (
      <p>
        If Streak Stats offers paid features, they&apos;ll be sold through the Apple App Store or
        Google Play, and billing, renewals, and refunds are handled under their terms.
      </p>
    ),
  },
  {
    id: 'as-is',
    title: 'The app is provided as is',
    body: (
      <p>
        Streak Stats is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without
        warranties of any kind. We work to keep it running and your data safe, but we don&apos;t
        promise it will always be available, error-free, or that data will never be lost. It&apos;s
        a tracking tool, not medical, health, or professional advice.
      </p>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    body: (
      <p>
        To the extent the law allows, we&apos;re not liable for any indirect, incidental, or
        consequential damages, or for lost data, arising from your use of Streak Stats. Some places
        don&apos;t allow these limits, so they may not all apply to you.
      </p>
    ),
  },
  {
    id: 'ending',
    title: 'Ending your use',
    body: (
      <p>
        You can stop using Streak Stats and delete your account at any time from inside the app. We
        may suspend or close accounts that break these terms, and we may change or discontinue the
        service, in which case we&apos;ll try to give reasonable notice.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    body: (
      <p>
        We may update these terms. When we do, we&apos;ll update this page and its effective date.
        Continuing to use Streak Stats after a change means you accept the updated terms.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <p>
        Questions about these terms: <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
      </p>
    ),
  },
];

export default function StreakStatsTerms() {
  return (
    <LegalPage
      eyebrow="Streak Stats · Legal"
      title="Terms of Service"
      standfirst="The terms for using the Streak Stats app."
      effectiveDate="September 25, 2026"
      otherPage={{ href: '/streak-stats/privacy', label: 'Privacy Policy' }}
      sections={sections}
    />
  );
}
