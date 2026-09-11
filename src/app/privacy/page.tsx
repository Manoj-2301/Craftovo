import { Container } from '@/components/common/Container/Container';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1 py-32 md:py-48">
        <Container>
          <h1 className="font-outfit text-5xl font-medium text-text-main mb-8">Privacy Policy</h1>
          <p className="text-text-muted">Privacy policy.</p>
        </Container>
      </main>
      
    </div>
  );
}
