import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffcc00" />
        <meta name="description" content="SwitchPi - Guadagna con mini-task grazie a Pi Network" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
