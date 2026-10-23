import { Container } from '@/components/common/Container/Container';
import { Button } from '@/components/common/Button/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Craftovo',
};

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center py-32">
      <Container className="text-center">
        <h1 className="font-outfit text-[120px] font-medium mb-4 text-text-main/10 leading-none">404</h1>
        <h2 className="font-outfit text-3xl font-medium mb-8 text-text-main">Looks like this page wasn&apos;t crafted yet.</h2>
        <Button href="/" variant="primary">
          Back home &rarr;
        </Button>
      </Container>
    </main>
  );
}
