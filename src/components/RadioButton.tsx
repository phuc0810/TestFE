import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function RadioButton() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(
          event: React.ChangeEvent<HTMLInputElement>,
          value: string
        ) => {
          console.log(value);
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="Câu 1" />
        <FormControlLabel value="2" control={<Radio />} label="Câu 2" />
        <FormControlLabel value="3" control={<Radio />} label="Câu 3" />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButton;
