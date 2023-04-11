'use client'
import Head from 'next/head';
import utilStyles from '../styles/utils.module.scss';
import { Barlow } from "next/font/google";
const primaryFont = Barlow({
  subsets: ['latin'],
  weight: ['100', '300', '400','600','700'],
  style: ['italic', 'normal'],
  variable: '--primaryFont',
});

export const siteName = 'HZTL FED';
export const siteDescription = 'A showcase of experiments using AI by ' + siteName;
export const pageTitle = siteName + ' | Experiments';
export const welcomeText = siteDescription;
export const copyright = '&copy; 2023 ' + siteName + ' Labs';

type LayoutProps = {
  children: any
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={siteDescription}
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            pageTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteName} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Google Analytics
        <Script
          async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-VEFBHFY9PM');
          `}
        </Script> 
        */}
      </Head>
      <div className={"app " + `${primaryFont.className}`}>
        <main className={"m-auto p-8 md:p-0 " + utilStyles.section}>{children}</main>
      </div>
    </>
  );
}