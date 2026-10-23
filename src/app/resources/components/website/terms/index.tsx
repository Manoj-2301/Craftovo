/* React import */
import React from 'react';

/** Components */
import Container from '@/Components/common/container';
import AnimateIn from '@/Components/common/animate-in';

/** Styles */
import styles from './terms.module.scss';

const TERMS_SECTIONS = [
  {
    title: 'Agreement to these terms',
    body: (
      <p>
        These terms govern your use of this website and any project or gig you engage Craftovo
        (&quot;we&quot;, &quot;us&quot;) for. By using the site or paying for a project deposit, you
        accept them. If a signed proposal or statement of work says something different, that document
        takes priority for the project it covers.
      </p>
    ),
  },
  {
    title: 'Our services',
    body: (
      <p>
        We are a digital product studio. We design and build websites, web applications, mobile
        applications, e-commerce stores, and custom software, and we offer fixed-scope
        productised gigs with transparent deliverables.
      </p>
    ),
  },
  {
    title: 'Project engagements',
    body: (
      <p>
        Every custom project starts with a proposal describing the scope, deliverables, timeline, and
        price. Work begins once we both agree to it and the initial invoice is paid. Anything outside the
        agreed scope is a change request, quoted separately before we start it.
      </p>
    ),
  },
  {
    title: 'Productised gigs',
    body: (
      <p>
        Gigs are fixed-scope packages with a starting price, delivery estimate, and revision allowance
        shown on each gig page. Starting prices assume standard complexity. Delivery estimates begin from
        the date we receive everything we need from you.
      </p>
    ),
  },
  {
    title: 'Fees and payment',
    body: (
      <p>
        Prices are listed in Indian rupees and exclude taxes unless stated otherwise. Custom projects are
        typically billed in staged invoices tied to milestones; gigs are billed up front. Payment terms
        are stated on each invoice.
      </p>
    ),
  },
  {
    title: 'Revisions and handover',
    body: (
      <p>
        Each gig includes the revision rounds listed on its page; custom projects include the rounds
        named in the proposal. Upon full payment of all invoices, intellectual property rights in the
        deliverables created specifically for your project transfer to you.
      </p>
    ),
  },
];

export const TermsView: React.FC = () => {
  /** ---------- Render ---------- */
  return (
    <div className={styles.legalPageWrapper}>
      <main className={styles.heroSection}>
        <Container>
          <div className={styles.contentContainer}>
            <AnimateIn>
              <h1 className={styles.title}>Terms of Service</h1>
              <span className={styles.lastUpdated}>Last updated: January 2026</span>
            </AnimateIn>

            {TERMS_SECTIONS.map((section, index) => (
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

export default TermsView;
