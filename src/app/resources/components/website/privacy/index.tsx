/* React import */
import React from 'react';

/** Components */
import Container from '@/Components/common/container';
import AnimateIn from '@/Components/common/animate-in';

/** Styles */
import styles from './privacy.module.scss';

const PRIVACY_SECTIONS = [
  {
    title: 'Overview',
    body: (
      <p>
        This policy explains what information Craftovo (&quot;we&quot;, &quot;us&quot;) collects when you use
        this website or contact us, how we use it, and the choices you have. It applies to this website,
        our contact form, and our project intake form.
      </p>
    ),
  },
  {
    title: 'Information you give us',
    body: (
      <>
        <p>You choose what to share with us. It falls into three groups:</p>
        <ul>
          <li>
            <strong>Contact form</strong> — your name, email address, and whatever you write in the project
            details field.
          </li>
          <li>
            <strong>Project intake brief</strong> — your business details, audience, scope, budget range,
            timeline, and contact information. You can skip anything you&apos;d rather not answer.
          </li>
          <li>
            <strong>Email and calls</strong> — anything you send us while we&apos;re discussing a project.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Information collected automatically',
    body: (
      <p>
        Like most websites, our hosting provider records basic technical details when you visit — such as
        your IP address, browser type, the page you requested, and the time of the request. We use this
        only to keep the site running reliably and securely, not to build profiles of visitors.
      </p>
    ),
  },
  {
    title: 'Cookies and analytics',
    body: (
      <p>
        This website does not use advertising or tracking cookies, and we don&apos;t run third-party
        analytics. If you start a project brief, your answers are saved in your own browser&apos;s local
        storage so you can pick up where you left off — that draft never leaves your device until you
        submit it, and clearing your browser data removes it.
      </p>
    ),
  },
  {
    title: 'How we use your information',
    body: (
      <>
        <p>We use what you share only to:</p>
        <ul>
          <li>Reply to your enquiry, typically within 24 hours.</li>
          <li>Review your project brief and prepare a proposal or quote.</li>
          <li>Deliver work you&apos;ve hired us for, and communicate about it.</li>
          <li>Keep basic business records, including invoices.</li>
        </ul>
        <p>We do not sell, rent, or trade your personal information to anyone.</p>
      </>
    ),
  },
  {
    title: 'Who stores this information',
    body: (
      <p>
        Your information is stored on our secure infrastructure: website hosting, email provider, and project
        management tools. These providers process data only on our instructions and follow strict data protection
        standards.
      </p>
    ),
  },
];

export const PrivacyView: React.FC = () => {
  /** ---------- Render ---------- */
  return (
    <div className={styles.legalPageWrapper}>
      <main className={styles.heroSection}>
        <Container>
          <div className={styles.contentContainer}>
            <AnimateIn>
              <h1 className={styles.title}>Privacy Policy</h1>
              <span className={styles.lastUpdated}>Last updated: January 2026</span>
            </AnimateIn>

            {PRIVACY_SECTIONS.map((section, index) => (
              <AnimateIn key={section.title} delay={index * 0.05} className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <div className={styles.sectionBody}>{section.body}</div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </main>
    </div>
  );
};

export default PrivacyView;
