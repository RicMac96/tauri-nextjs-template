import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/footer';
import Header from '@/components/header';
import ParentProvider from '@/components/ParentWrapper';

const inter = Inter({ subsets: ['latin'] });

//const filterContext: String | undefined = createContext();

export const metadata: Metadata = {
  title: 'OpAux',
  description: 'Operator Auxiliar Tools',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  //const [filter, setFilter] = useState<String | undefined>();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParentProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-grow w-full justify-center align-middle py-10 font-mono">
              {children}
            </main>
            <Footer />
          </div>
        </ParentProvider>
      </body>
    </html>
  );
}
