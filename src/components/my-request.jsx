import { useContext } from "react";
import { Subtitle } from "../components/subtitle.jsx";
import { isEmptyObject } from "./modules/isEmptyObject.js";
import { RequestContext } from "./context/request.jsx";

export const MyRequest = () => {
  const { choosedServices, choosedProject } = useContext(RequestContext);

  return (
    <>
      {!isEmptyObject(choosedServices) ? (
        <>
          <Subtitle
            text={`Ваша заявка включает в себя 
                                            ${
                                              isEmptyObject(choosedProject)
                                                ? ""
                                                : `проект «${choosedProject.title}» и`
                                            } 
                                            следующие услуги: `}
          />
          <ul>
            {choosedServices.map((choosedService) => (
              <li key={choosedService.id}>{choosedService.title}</li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <Subtitle
            text={` ${
              isEmptyObject(choosedProject)
                ? "Чтобы отправить заявку, выберите необходимые Вам услуги или проект"
                : `Ваша заявка включает в себя проект ${choosedProject.title}`
            }`}
          />
        </>
      )}
    </>
  );
};
