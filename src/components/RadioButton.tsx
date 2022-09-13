import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch } from "react-redux";
import { sectionOneAction } from "../redux/section_one_redux/sectionone,reduce";
import { useSelectorSectionOne } from "../redux/section_one_redux/sectionone.selector";

function RadioButton() {
  const dispatch = useDispatch();
  const { changeNumber } = useSelectorSectionOne();
  return (
    <FormControl>
      <RadioGroup
        value={changeNumber}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(
          event: React.ChangeEvent<HTMLInputElement>,
          value: string
        ) => {
          dispatch(sectionOneAction.setTabAndRadio(parseInt(value)));
        }}
      >
        <FormControlLabel value="0" control={<Radio />} label="Câu 1" />
        <FormControlLabel value="1" control={<Radio />} label="Câu 2" />
        <FormControlLabel value="2" control={<Radio />} label="Câu 3" />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButton;
