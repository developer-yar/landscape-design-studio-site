import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ShowMore } from "../components/show-more.jsx";
import { RequestContext } from "./context/request.jsx";
import { Subtitle } from "./subtitle.jsx";
import classNames from "classnames";
import styles from "../styles/services.module.scss";

export const ServicesList = ({ services, count = 6 }) => {
  const [visibleServices, setVisibleServices] = useState(count);

  const { choosedServices, setChoosedServices } = useContext(RequestContext);

  const addToRequest = (event) => {
    event.preventDefault();

    const { id, title } = event.target.dataset;

    setChoosedServices([
      ...choosedServices,
      {
        id: parseInt(id),
        title,
      },
    ]);
  };

  const removeFromRequest = (event) => {
    event.preventDefault();

    const { id } = event.target.dataset;

    setChoosedServices(
      choosedServices.filter((service) => service.id != parseInt(id))
    );
  };

  return (
    <div className={styles.services}>
      <>
        {services.services.slice(0, visibleServices).map((service) => (
          <Service
            key={service.id}
            service={service}
            isContained={
              choosedServices.findIndex(
                (element) => element.id === service.id
              ) !== -1
            }
            addToRequest={addToRequest}
            removeFromRequest={removeFromRequest}
          />
        ))}
        <ShowMore
          items={services.services}
          visibleItems={visibleServices}
          setVisibleItems={setVisibleServices}
        />
      </>
    </div>
  );
};

ServicesList.propTypes = {
  services: PropTypes.object.isRequired,
  count: PropTypes.number,
};

const Service = ({ service, isContained, addToRequest, removeFromRequest }) => (
  <div className={classNames(styles.service, "card")}>
    <Subtitle text={service.title} />
    {service.priceFrom && service.priceTo ? (
      <p className={styles.price}>
        Цена от {service.priceFrom} до {service.priceTo} руб.
      </p>
    ) : service.priceFrom ? (
      <p className={styles.price}>Цена {service.priceFrom} руб. </p>
    ) : (
      <p className={styles.price}>Цена рассчитывается на договорной основе</p>
    )}
    {service.startPrice && (
      <p className={styles.startPrice}>
        Минимальная цена за одну единицу измерения для данной услуги составит{" "}
        {service.startPrice} руб.
      </p>
    )}

    <p className={styles.measurementUnit}>
      Единица измерения услуги – {service.measurementUnit}
    </p>

    <button
      className={isContained ? styles.buttonContained : styles.button}
      data-id={service.id}
      data-title={service.title}
      onClick={isContained ? removeFromRequest : addToRequest}
    >
      {isContained ? "Удалить из заказа" : "Добавить к заказу"}
    </button>
  </div>
);

Service.propTypes = {
  service: PropTypes.object.isRequired,
  isContained: PropTypes.bool.isRequired,
  addToRequest: PropTypes.func.isRequired,
  removeFromRequest: PropTypes.func.isRequired,
};
