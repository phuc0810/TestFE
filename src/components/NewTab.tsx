import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  sectionOneAction,
  sectionOneReduce,
} from "../redux/section_one_redux/sectionone,reduce";
import { useSelectorSectionOne } from "../redux/section_one_redux/sectionone.selector";
import { useDispatch } from "react-redux";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function NewTab() {
  const [value, setValue] = React.useState(0);

  const { changeNumber } = useSelectorSectionOne();

  console.log(changeNumber);

  const dispatch = useDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(sectionOneAction.setTabAndRadio(newValue));
    // setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={changeNumber}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Câu 1" {...a11yProps(0)} />
          <Tab label="Câu 2" {...a11yProps(1)} />
          <Tab label="Câu 3" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={changeNumber} index={0}>
        <h1 className="title text-2xl">
          Khi truy cập vào 1 trang web trình duyệt sẽ làm gì ?
        </h1>
        <p>
          Khi truy cập trang web, trình duyệt sẽ gọi tới máy chủ DNS để biên
          dịch URL trang web thành một địa chỉ IP, mỗi trang web có địa chỉ IP
          riêng biệt. Khi tìm thấy địa chỉ IP của trang web chúng ta đang vào,
          địa chỉ IP đó sẽ được trả về cho trình duyệt. Trình duyệt sẽ sử dụng
          địa chi IP đó để yêu cầu HTTP gọi tới Server lưu trữ trang web đó. Nó
          sẽ kết nối cổng số 80 trên Server bằng giao thức TCP/IP. Nếu Server
          chấp nhận thì sẽ gửi lại thông báo "200 OK". Và sau đó trình duyệt sẽ
          truy xuất mã HTML của trang web cụ thể được yêu cầu. Khi trình duyệt
          của bạn nhận được mã HTML đó từ Server thì nó sẽ hiển thị ra cửa sổ
          của trình duyệt một trang web hoàn chỉnh - awesome! Khi chúng ta đóng
          trình duyệt thì quá trình kết nối với Server sẽ kết thúc.
        </p>
      </TabPanel>
      <TabPanel value={changeNumber} index={1}>
        <h1 className="title text-2xl">
          Nếu có 2 CSS selectors cùng ứng với 1 element thì style của element sẽ
          thể hiện như thế nào ?
        </h1>
        <p>
          - TH1: nếu trong trường hợp 2 CSS selector cùng cấp với nhau và cùng
          ứng với 1 element thì css selector ở dưới sẽ đè ở trên
          <br />
          -TH2 : nếu 2 CSS selector khác cấp với nhau thì phụ thuộc vào độ ưu
          tiên * lớn hơn id lớn hơn class lớn hơn element
        </p>
      </TabPanel>
      <TabPanel value={changeNumber} index={2}>
        <h1 className="title text-2xl">
          Callback và Promise trong js dùng để làm gì ?
        </h1>
        <p>
          - Callback function là một function A được truyền vào một function B
          dưới dạng một tham số. Tại một thời điểm nào đó tùy thuộc vào cách
          function B được xây dựng mà function A sẽ được function B gọi để thực
          thi. <br />
          -Promise là 1 object đặc biệt , 1 object Promise sẽ luôn luôn có then
          và catch,Then xẩy ra khi gọi hàm resolve ,catch xẩy ra khi gọi hàm
          reject ,Dùng Promise để khử callback hell trong trường hợp cần thiết
          ,Giá trị nhận được trong then/catch sẽ tùy thuộc vào giá trị khi ta
          resolve/reject . Dùng để call api 
        </p>
      </TabPanel>
    </Box>
  );
}

export default NewTab;
