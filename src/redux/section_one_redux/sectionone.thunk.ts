import { createAsyncThunk } from "@reduxjs/toolkit";
import { sectionService } from "../../service/sectionService";
import { sectionOneAction } from "./sectionone,reduce";

export const getDanhSachUser = createAsyncThunk(
  "section_one_redux/getDanhSachUser",
  async (params, { dispatch }) => {
    try {
      const result = await sectionService.layDanhSachUSer();
      console.log(result);
      dispatch(sectionOneAction.arrUser(result.data));
    } catch (error) {
      console.log(error);
    }
  }
);
