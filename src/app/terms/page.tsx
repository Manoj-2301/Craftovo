import { Container } from '@/components/common/Container/Container';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1 py-32 md:py-48">
        <Container>
          <h1 className="font-outfit text-5xl font-medium text-text-main mb-8">Terms of Service</h1>
          <p className="text-text-muted">Terms of service.</p>
        </Container>
      </main>
      
    </div>
  );
}
