import React from "react";

function SectionFour() {
  const students = [
    { id: 1, name: "Jame", score: 9 },
    { id: 2, name: "Davis", score: 6 },
    { id: 3, name: "Davis", score: 7.5 },
    { id: 4, name: "Erik", score: 10 },
  ];

  const newStudents = [...students];

  newStudents
    .sort((s1, s2) => s1.score - s2.score)
    .forEach((student) => (student.score = Math.min(10, student.score + 0.5)));

  console.log("student", students);

  console.log("newStudent", newStudents);

  return <div>SectionFour</div>;
}

export default SectionFour;

/** //* sau khi chạy đoạn code trên xong thì students[0].score mang giá trị là
 *  * {id: 2, name: 'Davis', score: 6.5} vì mặc dù đã tạo ra newStudent nhưng chỉ là tham chiếu
 *  * vùng nhớ ,nên khi thay đổi newStudent thì Student vẫn sẽ bị thay đỏi theo 
 */

// ? nếu xem tác vụ set score làm tác vụ cơ bản , thì độ phức tạp của đoạn code trên là tương đối 
//? sau khi viết lại đoạn code em sử dụng ... (spread operator) để tạo ra 1 mảng mới newStudent và khi thao tác với mảng mới thì giá trị mảng cũ students sẽ không bị thay đổi 



