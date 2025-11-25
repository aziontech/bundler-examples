import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js on Azion',
  description: 'Deploy your Next.js application to Azion'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
