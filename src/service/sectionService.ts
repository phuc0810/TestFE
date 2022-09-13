import { http } from "../util/config";

export class SectionService {
  layDanhSachUSer = () => {
    return http.get("/todos");
  };
}

export const sectionService = new SectionService();
