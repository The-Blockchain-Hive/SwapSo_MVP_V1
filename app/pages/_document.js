import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import policy from '../public/csp';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-BCHGD3LJE8"
            strategy="afterInteractive" // Set strategy attribute
            async
          />
          <Script id="ga-script" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BCHGD3LJE8');
            `}
          </Script>
          <link rel="icon" href="/favicon.ico" />
          <meta httpEquiv="Content-Security-Policy" content={policy} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
