import { notFound } from 'next/navigation';

import { getDictionary, hasLocale } from '@/app/[lang]/dictionaries';

import Header from '@/components/organisms/Header';

export default async function SignInLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }
  const dict = await getDictionary(lang);

  return (
    <>
      <Header
        items={[
          { label: dict.nav.blog, href: '/en/blog', noActive: true },
          { label: dict.nav.portfolio, href: '/', noActive: true },
        ]}
        isSignIn
      />

      {children}
    </>
  );
}
