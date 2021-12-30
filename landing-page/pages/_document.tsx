import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import fixSrcWithBasePath from '../utils/fixSrcWithBasePath';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          />
          <link
            href={
              'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap'
            }
            rel='stylesheet'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href={fixSrcWithBasePath('/apple-touch-icon.png')}
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href={fixSrcWithBasePath('/favicon-32x32.png')}
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href={fixSrcWithBasePath('/favicon-16x16.png')}
          />
          <link rel='manifest' href={fixSrcWithBasePath('/site.webmanifest')} />
          <link
            rel='mask-icon'
            href={fixSrcWithBasePath('/safari-pinned-tab.svg')}
            color='#51C6E4'
          />
          <meta name='msapplication-TileColor' content='#51C6E4' />
          <meta name='theme-color' content='#ffffff' />
          <meta name='description' content='Bombi Bank' />
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
