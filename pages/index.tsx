'use client'
import Head from 'next/head';
import Layout from '../components/layout';
import Logo from '../components/logo/logo';
import Chat from '../components/chat/chat';
import * as LayoutConst from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import Navigation from '../components/navigation/navigation';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{LayoutConst.pageTitle}</title>
      </Head>
      <section className="w-full flex">
        <div className={"md:flex-none p-8 bg-quinary max-w-[500px] hidden md:block " + utilStyles.gradientBg}>
          <Logo></Logo>
          <Navigation></Navigation>
        </div>
        <div className="md:flex-auto p-8">
          <Chat></Chat>
        </div>
      </section>
    </Layout>
  );
}