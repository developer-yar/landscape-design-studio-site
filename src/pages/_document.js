import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta
          name="description"
          content="Ландшафтное проектирование. От А до Я. Мы работаем в соответствии со стандартами. А главное с душой и на совесть."
        />
        <meta
          name="keywords"
          content="заказать ландшафтный дизайн, ландшафтное проектирование, благоустройство территорий, озеленение участков, 3D-визуализация, фитодизайн помещений, сады, участки, парки"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
