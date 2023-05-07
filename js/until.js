// Bài 10 Tạo ID ngẫu nhiêu vs ngày tháng giờ cho
function generatedId() {
  var id = "";
  while (id.length < 4) {
    var num = Math.floor(Math.random() * 10);
    if (id.length == 0 && num == 0) continue;
    id += num.toString();
  }
  return id;
}
console.log("So ngau nhiên ", generatedId());

function generateDate() {
  var d = new Date();
  const date = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  const dd = date + "/" + month + "/" + year;
  return dd;
}
console.log("Ngày thang ngẫu nhiên", generateDate());
