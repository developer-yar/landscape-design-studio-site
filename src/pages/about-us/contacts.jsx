import { useRouter } from "next/router";
import { Layout } from "../../components/layout.jsx";
import { Text } from "../../components/text.jsx";
import dynamic from "next/dynamic";

const Map = dynamic(async () => (await import("../../components/map.jsx")).Map);

export default function Contacts() {
  const breadcrumb = useRouter();

  const breadcrumbs = [
    {
      id: 1,
      name: "О нас",
      link: "/about-us",
    },
    {
      id: 2,
      name: "Контакты",
      link: breadcrumb.asPath,
    },
  ];

  const text = [
    {
      id: 1,
      text: "+375296075878 Сергей",
    },
    {
      id: 2,
      text: "+375295583660 Павел",
    },
    {
      id: 3,
      text: "+375293552829",
    },
    {
      id: 4,
      text: "Email: info@april-studio.by",
    },
    {
      id: 5,
      text: "Офис г.Минск, ул. Масюковщина, 44-15",
    },
  ];

  return (
    <Layout breadcrumbs={breadcrumbs} title="Контакты">
      <Text text={text} />
      <Map path="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9396.085389054386!2d27.4492432!3d53.9313646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc9ae109c4a07f938!2z0KHRgtGD0LTQuNGPINC70LDQvdC00YjQsNGE0YLQvdC-0LPQviDQtNC40LfQsNC50L3QsCAi0JDQv9GA0LXQu9GMIg!5e0!3m2!1sru!2sby!4v1674402023391!5m2!1sru!2sby" />
    </Layout>
  );
}
