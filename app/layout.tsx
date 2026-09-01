import type { Metadata } from 'next';
import { Geist, Noto_Sans_Tamil } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const notoTamil = Noto_Sans_Tamil({
  variable: '--font-tamil',
  subsets: ['tamil'],
});

export const metadata: Metadata = {
  title: 'வணக்கம் English — தமிழில் எளிதாக ஆங்கிலம்',
  description: 'தமிழ் பேசும் பெரியவர்களுக்கு அன்றாட ஆங்கில வார்த்தைகளை எளிதாக கற்க உதவும் பயிற்சி.',
  openGraph: {
    title: 'வணக்கம் English',
    description: 'சிறு வார்த்தைகள். பெரிய தன்னம்பிக்கை.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'வணக்கம் English',
    description: 'சிறு வார்த்தைகள். பெரிய தன்னம்பிக்கை.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ta">
      <body
        className={`${geistSans.variable} ${notoTamil.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
