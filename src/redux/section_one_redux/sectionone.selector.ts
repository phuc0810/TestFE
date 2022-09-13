import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { getDanhSachUser } from "./sectionone.thunk";

export const useSelectorSectionOne = () =>
  useSelector((state: RootState) => state.sectionOneReduce);

export const useDSUser = () => {
  const dispatch = useDispatch<any>();
  const arrUser = useSelectorSectionOne();
  console.log(arrUser);
  useEffect(() => {
    dispatch(getDanhSachUser());
  }, []);
  return arrUser;
};
