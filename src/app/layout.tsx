import { Suspense } from 'react'

import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { PriceForm } from "@/widgets/price-form";

import './globals.css';

function SearchBarFallback() {
  return <>placeholder</>
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />

        <Suspense fallback={<SearchBarFallback />}>
          <PriceForm />
        </Suspense>
      </body>
    </html>
  );
}
