import '@/styles/globals.css';
import { Navbar } from '@/components/common/Navbar/Navbar';
import { Footer } from '@/components/common/Footer/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <Navbar />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
