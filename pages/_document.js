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
        <title>TechItems: Exploring the Latest Tech Items and Gadgets for Tech Enthusiasts</title>
          <meta name="description" content="Discover the latest trends and in-depth insights on tech items and gadgets at TechItems. Our informative blog articles cover a wide range of topics, from reviews of the newest tech releases to expert guides on optimizing your tech devices. Stay updated and informed with TechItems, your go-to resource for all things tech" />
          <meta property="og:title" content="TechItems: Exploring the Latest Tech Items and Gadgets for Tech Enthusiasts" key="title" />
          <meta property="og:description" content="Discover the latest trends and in-depth insights on tech items and gadgets at TechItems. Our informative blog articles cover a wide range of topics, from reviews of the newest tech releases to expert guides on optimizing your tech devices. Stay updated and informed with TechItems, your go-to resource for all things tech" />
          <meta property="og:url" content="https://www.techitems.online/" />
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
