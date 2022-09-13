import React from "react";
import { useDispatch } from "react-redux";
import { sectionOneAction } from "../redux/section_one_redux/sectionone,reduce";
import { useDSUser } from "../redux/section_one_redux/sectionone.selector";

import Button from "@mui/material/Button";

function SectionThree() {
  const { arrCompleted, arrIncomplete } = useDSUser();
  // console.log(arrCompleted);

  const dispatch = useDispatch();

  return (
    <div className="flex justify-center mt-5">
      <div className="mr-10">
        <Button
          variant="contained"
          className="btn bg-black text-white"
          onClick={() => {
            dispatch(sectionOneAction.filterCompleted());
          }}
        >
          Đếm số task đã hoàn thành
        </Button>
        {arrCompleted?.length && (
          <div>Số task đã hoàn thành là {arrCompleted?.length}</div>
        )}
      </div>
      <div>
        <Button
          variant="contained"
          className="btn bg-black text-white"
          onClick={() => {
            dispatch(sectionOneAction.filterUserIncomplete(10));
          }}
        >
          Đếm số task user id 10 chưa hoàn thành
        </Button>
        {arrIncomplete?.length && (
          <div>Số task chưa hoàn thành là {arrIncomplete?.length}</div>
        )}
      </div>
    </div>
  );
}

export default SectionThree;
