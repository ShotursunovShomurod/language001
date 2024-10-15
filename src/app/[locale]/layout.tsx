import Header from "@/components/feature/header/Header";
import React from "react";
import "@/scss/main.scss";
import Footer from "@/components/feature/footer/Footer";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
