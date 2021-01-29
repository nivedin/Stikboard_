import Document, { Html, Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config';
const {publicRuntimeConfig} = getConfig();

class MyDocument extends Document {


  setGoogleTags(){
  
      return{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-KD3N77X1EQ');
        `
      };
    
  }

 
  render() {

    return (
      <Html lang="en">
        <Head>
        {/* <title>Stik Board</title> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		    <meta charSet="utf-8"/>
        <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <link rel="manifest" href="/images/site.webmanifest"/>
        <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#603cba"/>
        <meta name="msapplication-TileImage" content="/images/mstile-144x144.png"/>
        <meta name="theme-color" content="#381750"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/static/css/styles.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" integrity="sha512-DanfxWBasQtq+RtkNAEDTdX4Q6BPCJQ/kexi/RftcP0BcA4NIJPSi7i31Vl+Yl5OCfgZkdJmCqz+byTOIIRboQ==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KD3N77X1EQ"></script>
        <script dangerouslySetInnerHTML={this.setGoogleTags()}/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument