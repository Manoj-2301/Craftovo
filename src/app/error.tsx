/* React import */
'use client';
import React from 'react';

/** Components */
import CustomButton from '@/Components/common/custom-button';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh', gap: '16px', padding: '32px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#EF4444' }}>Something went wrong!</h2>
      <p style={{ background: 'rgba(0,0,0,0.05)', padding: '16px', borderRadius: '12px', fontFamily: 'monospace', fontSize: '14px', maxWidth: '600px', overflow: 'auto' }}>
        {error?.message || 'An unexpected error occurred'}
      </p>
      <CustomButton variant="primary" onClick={() => reset()}>
        Try again
      </CustomButton>
    </div>
  );
}
