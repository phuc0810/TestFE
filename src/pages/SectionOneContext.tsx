import React, { useState, createContext } from "react";

const SectionOneContext = createContext(1);

function SectionOneProvider({}) {
  const [radio, setRadio] = useState(true);


  const handleChangeRadioBtn = () => {};

  return (
    <div>
      <SectionOneContext.Provider value={1}>
      </SectionOneContext.Provider>
    </div>
  );
}
export {SectionOneContext,SectionOneProvider}