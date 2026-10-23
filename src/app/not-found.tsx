/* React import */
import React from 'react';

/** Libraries */
import type { Metadata } from 'next';

/** Components */
import Container from '@/Components/common/container';
import CustomButton from '@/Components/common/custom-button';

export const metadata: Metadata = {
  title: 'Page Not Found | Craftovo',
};

export default function NotFound() {
  return (
    <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 24px' }}>
      <Container style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '100px', fontWeight: 500, opacity: 0.1, lineHeight: 1, marginBottom: '16px' }}>404</h1>
        <h2 style={{ fontSize: '28px', fontWeight: 500, marginBottom: '32px' }}>Looks like this page wasn&apos;t crafted yet.</h2>
        <CustomButton href="/" variant="primary">
          Back home &rarr;
        </CustomButton>
      </Container>
    </main>
  );
}
