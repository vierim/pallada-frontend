import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Modal } from '@/shared/modal/modal';
import { PriceForm } from "@/widgets/price-form";

import './globals.css';

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

        <PriceForm />
      </body>
    </html>
  );
}
