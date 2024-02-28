import Document, { Html, Head, Main, NextScript } from 'next/document';
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
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-BCHGD3LJE8"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-BCHGD3LJE8');
              `,
            }}
          />
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
