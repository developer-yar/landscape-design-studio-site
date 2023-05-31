import { useRouter } from "next/router";
import { Layout } from "../../components/layout.jsx";
import { Text } from "../../components/text.jsx";

export default function AboutUs() {
  const breadcrumb = useRouter();

  const breadcrumbs = [
    {
      id: 1,
      name: "О нас",
      link: breadcrumb.asPath,
    },
  ];

  const text = [
    {
      id: 1,
      text: "Каждая ландшафтная композиция – это, прежде всего сад, пусть разный по размеру и назначению, но свой, неповторимый и единственный. Со своей душой и настроением.",
    },
    {
      id: 2,
      text: "Мы долго учились, пробовали, много работали и достигали желаемого результата. Мы ценим каждый участок земли, как возможность создать что-то неповторимое, дорогое и близкое для Вас, используя все наши знания и опыт с учетом современных тенденций и технологий.",
    },
    {
      id: 3,
      text: "Где-то в глубине души вы понимаете, что сад и ландшафтный дизайн - это не только совокупность газона, деревьев, кустарников, цветников, дорожек и пр. От того, какая заложена структура, зависит не только внешний вид сада, но также функциональность и эргономичность его использования. Если посадку растений в последующем возможно корректировать, то наличие и конфигурацию дорожек, площадок, установленные беседки, устроенные водоемы и ручьи задают жесткий каркас, от которого в последующем придется отталкиваться.",
    },
    {
      id: 4,
      text: "Ландшафтный дизайн в Минске и Беларуси должен учитывать и ландшафт местности, окружающую среду, характер застройки.",
    },
    {
      id: 5,
      text: "В саду мы постоянно замечаем что-то новое. Весной ждем появления первых крокусов и свежей зелени газона, любуемся яркостью тюльпанов и поэтической нежностью нарциссов. Истосковавшиеся после зимы от недостатка солнца мы радуемся новым проявлениям жизни.",
    },
    {
      id: 6,
      text: "Наступающее лето приносит ощущение отдыха и наслаждения. Обилие зелени, пышные шапки гортензий, нескончаемое цветение лапчатки и спиреи, богатство роз заставляют возвращаться на участок вновь и вновь.",
    },
    {
      id: 7,
      text: "Незаметно подкрадывающаяся осень радует глаз сначала первым золотистым листиком березы, затем ягодами рябины и боярышника.",
    },
    {
      id: 8,
      text: "И только тот, кто постоянно находится рядом с природой, понимает, что даже наступление холодов не снижает декоративность сада. Первый заморозок словно превращает все за окном в сказку: сверкающий на листьях кустарников иней, застывшие в умирающей красоте астры и хризантемы. Красота сада постепенно переходит в монохромную гамму, мы начинаем ценить фактуру и форму. Отдельные акценты ценятся на вес золота: оранжево-красные грозди рябины, пурпурные кисти барбариса, тяжелые грозди ягод бирючины, пурпурные или наоборот соломенно-желтые побеги свидины, зелень хвойных растений. Обилие плодов и семян сада привлекает пернатых друзей: кого подкрепиться, а кого и затаиться в туях и можжевельниках от ветра и мороза.",
    },
    {
      id: 9,
      text: "Мы будем рады вместе с Вами заложить начало вашего сада или вдохнуть новую жизнь в уже существующий!",
    },
    {
      id: 10,
      text: "Мы работаем в соответствии со стандартами, а главное с душой и на совесть!",
    },
    {
      id: 11,
      text: "Студия ландшафтного дизайна «Апрель»",
    },
  ];

  return (
    <Layout breadcrumbs={breadcrumbs} title="О нас">
      <Text text={text} />
    </Layout>
  );
}
