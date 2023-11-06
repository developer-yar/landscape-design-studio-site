import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const RequestContext = createContext();

export const DataRequestContext = ({ children }) => {
  const [choosedServices, setChoosedServices] = useState([]);
  const [choosedProject, setChoosedProject] = useState({});

  useEffect(() => {
    const services = JSON.parse(localStorage.getItem("services") || "[]");
    setChoosedServices(services);
  }, []);

  useEffect(() => {
    const project = JSON.parse(localStorage.getItem("project") || "{}");
    setChoosedProject(project);
  }, []);

  useEffect(() => {
    localStorage.setItem("services", JSON.stringify(choosedServices));
  }, [choosedServices]);

  useEffect(() => {
    localStorage.setItem("project", JSON.stringify(choosedProject));
  }, [choosedProject]);

  return (
    <RequestContext.Provider
      value={{
        choosedServices,
        setChoosedServices,
        choosedProject,
        setChoosedProject,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

DataRequestContext.propTypes = {
  children: PropTypes.node.isRequired,
};
