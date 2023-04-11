import Head from 'next/head';
import Layout from '../components/layout';
import * as LayoutConst from '../components/layout';
import Link from 'next/link';

type errorProps = {
  statusCode: number;
};

export default function ErrorPage({ statusCode }: errorProps) {
  return (
    <Layout>
      <Head>
        <title>{LayoutConst.pageTitle}</title>
      </Head>
      <section className="container w-full flex p-16">
      {statusCode === 404 ? (
        <>
          <h1>Page Not Found</h1>
          <p>Our apologies. This page does not exist.</p>
          <Link href="/">Please visit our homepage instead</Link>
        </>
      ) : (
        <>
        <h1>Server Error</h1>
          <p>Our apologies, there has been an error on our end.</p>
          <Link href="/">Please visit our homepage instead</Link>
        </>
      )}
    </section>
    </Layout>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
