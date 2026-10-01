import Link from 'next/link';

import LegalPage, { type LegalSection } from '../../components/LegalPage';

export const metadata = {
  title: 'Streak Stats Support - Steve Suhr',
  description: 'Help with the Streak Stats app: how it works, common questions, and how to get in touch.',
};

const CONTACT = 'support@stevesuhr.com';

const sections: LegalSection[] = [
  {
    id: 'contact',
    title: 'Get help',
    body: (
      <>
        <p>
          Email <a href={`mailto:${CONTACT}`}>{CONTACT}</a> with questions, problems, or ideas. It
          helps to mention your phone (iPhone or Android) and what you were doing when something
          went wrong.
        </p>
        <p>The answers below cover the most common questions.</p>
      </>
    ),
  },
  {
    id: 'about',
    title: 'What Streak Stats does',
    body: (
      <p>
        Streak Stats counts the days since you started something, whether it&apos;s a habit
        you&apos;re building or one you&apos;re breaking. Tap <strong>+</strong> to add a streak,
        give it a name, and pick the day it started. It defaults to today, and you can choose an
        earlier date if your streak is already under way.
      </p>
    ),
  },
  {
    id: 'sign-in',
    title: 'Signing in',
    body: (
      <>
        <p>
          Sign in with your Google account, or on iPhone, with Sign in with Apple. Your streaks are
          saved to your account, so they&apos;re there on any phone where you sign in.
        </p>
        <p>
          If you use both, they lead to the same account when Apple shares the same email address as
          your Google account. If you chose <strong>Hide My Email</strong> with Apple, your Apple
          sign-in is a separate account with its own streaks.
        </p>
      </>
    ),
  },
  {
    id: 'count',
    title: 'How the day count works',
    body: (
      <p>
        The count is the number of full days since your streak started, using your phone&apos;s
        local date. A streak that started today shows 0, and it goes up by one each midnight. If
        the app is open over midnight, the number updates the next time you open it.
      </p>
    ),
  },
  {
    id: 'manage',
    title: 'Managing your streaks',
    body: (
      <ul>
        <li>
          <strong>Restart</strong>: open a streak and tap <strong>Restart streak</strong>. Your
          current run ends today and the count starts again from 0. Past runs are kept.
        </li>
        <li>
          <strong>Edit</strong>: open a streak and tap <strong>Edit</strong> to change its name or
          the day your current run started. If you&apos;ve restarted before, the start date
          can&apos;t be earlier than the day your previous run ended.
        </li>
        <li>
          <strong>Reorder</strong>: on My Streaks, press and hold a streak for a moment, then drag
          it to a new spot.
        </li>
        <li>
          <strong>Delete</strong>: open a streak, tap <strong>Edit</strong>, then{' '}
          <strong>Delete streak</strong>. This can&apos;t be undone.
        </li>
      </ul>
    ),
  },
  {
    id: 'delete-account',
    title: 'Deleting your account',
    body: (
      <p>
        Tap your profile circle on My Streaks, then <strong>Delete account</strong>. This
        permanently deletes your account and all of your streaks, and disconnects Sign in with
        Apple if you used it. You can also email <a href={`mailto:${CONTACT}`}>{CONTACT}</a> and
        we&apos;ll delete it for you. See the <Link href="/streak-stats/privacy">Privacy Policy</Link>{' '}
        for what we store.
      </p>
    ),
  },
];

export default function StreakStatsSupport() {
  return (
    <LegalPage
      eyebrow="Streak Stats"
      title="Support"
      standfirst="Help with the Streak Stats app, and how to reach us."
      links={[
        { href: '/streak-stats/privacy', label: 'Privacy Policy' },
        { href: '/streak-stats/terms', label: 'Terms of Service' },
      ]}
      sections={sections}
    />
  );
}
