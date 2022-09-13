import React from "react";
import NewTab from "../components/NewTab";
import RadioButton from "../components/RadioButton";

function SectionOne() {
  return (
    <div className="container section_one">
      <RadioButton />
      <NewTab />
    </div>
  );
}

export default SectionOne;
