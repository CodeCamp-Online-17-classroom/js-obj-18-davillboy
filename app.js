// write code here
บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร

let user = {
  name: 'John',
  sayHi: function () {
    console.log(this.name);
  }
};

(user.sayHi)(); // *

ผลลัพธ์
John 
เรียกใช้ user.sayHi() ในที่นี้ this จะชี้ไปที่ user object ซึ่งมี property name คือ 'John' ดังนั้นเมื่อเรา log this.name ก็จะได้ผลลัพธ์เป็น 'John'
