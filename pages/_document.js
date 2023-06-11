import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        <title>Discount Delights: Your Ultimate Destination for Exclusive Affiliate Sales and Irresistible Deals!</title>
          <meta property="og:title" content="Discount Delights: Your Ultimate Destination for Exclusive Affiliate Sales and Irresistible Deals!" key="title" />
          <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" /> 
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
