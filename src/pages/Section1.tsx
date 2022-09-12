import { useState, createContext } from "react";
import RadioButton from "../components/RadioButton";
import TabComponent from "../components/TabComponent";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const SectionContext = createContext(0);

function Section1() {
  const [state, setState] = useState<number>(0);

  return (
    <SectionContext.Provider value={state}>
      <div className="container section_one">
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(
              event: React.ChangeEvent<HTMLInputElement>,
              value: string
            ) => {
              setState(parseInt(value));
            }}
          >
            <FormControlLabel value="0" control={<Radio />} label="Câu 1" />
            <FormControlLabel value="1" control={<Radio />} label="Câu 2" />
            <FormControlLabel value="2" control={<Radio />} label="Câu 3" />
          </RadioGroup>
        </FormControl>
        <TabComponent />
      </div>
    </SectionContext.Provider>
  );
}

export default Section1;
