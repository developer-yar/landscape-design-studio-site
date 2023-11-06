import { useRouter } from "next/router";
import { Description } from "../components/description.jsx";
import { Layout } from "../components/layout.jsx";
import { SendRequestForm } from "../components/send-request-form.jsx";
import { MyRequest } from "../components/my-request.jsx";
import { SendRequestSupport } from "../components/send-resquest-support.jsx";

export default function SendRequest() {
  const breadcrumb = useRouter();

  const breadcrumbs = [
    {
      id: 1,
      name: "Оформление заявки",
      link: breadcrumb.asPath,
    },
  ];

  return (
    <Layout breadcrumbs={breadcrumbs} title="Оформление заявки">
      <Description text="Наши работники могут сами измерить объём работ и рассчитать их стоимость. От Вас только требуется указать нам, что Вам нужно. Чтобы наш администратор смог связаться с Вами, нам необходимо узнать Ваше имя, номер телефона и электронный адрес. Если у Вас имеются какие-либо вопросы или Вы хотите уточнить информацию, то дополнительно можно оставить сообщение, а также подъехать к нам в офис." />
      <SendRequestForm />
      <MyRequest />
      <SendRequestSupport />
    </Layout>
  );
}
