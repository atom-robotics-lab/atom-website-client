import './globals.css'; // Import global styles
import Navbar from '@/components/navbar'; // Adjust the path if necessary
import Footer from '@/components/footer';

export const metadata = {
  title: 'Atom Robotics Lab',
  description: 'Robotics Society of MAIT',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
