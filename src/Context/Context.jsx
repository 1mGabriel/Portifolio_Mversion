import React, { createContext, useRef } from "react";
export const StateContext = createContext();
const Context = ({ children }) => {
  const curriculoRef = useRef(null);
  const aboutRef = useRef(null);
  const tecRef = useRef(null);
  const habilityRef = useRef(null);
  const destaqueRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div>
      <StateContext.Provider
        value={{
          curriculoRef,
          aboutRef,
          tecRef,
          habilityRef,
          destaqueRef,
          projectsRef,
        }}
      >
        {children}
      </StateContext.Provider>
    </div>
  );
};

export default Context;
