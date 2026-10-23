/* React import */
'use client';
import React from 'react';

/** Components */
import ErrorView from '@/Components/website/error-view';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  /** ---------- Render ---------- */
  return <ErrorView error={error} reset={reset} />;
}
