var listData = [
  {
    id: 1,
    name: "Giày Thể Thao Nam AG0156",
    price: 400000,
    quantity: "10",
    img: "./img/giay2.jpg",
  },
  {
    id: 2,
    name: "Ecko Unltd giày thể thao nam IS22-24505",
    price: 500000,
    quantity: "5",
    img: "./img/giay3.jpg",
  },
  {
    id: 3,
    name: "GNMS49 Giày Sneaker Nam Cổ Thấp",
    price: 6000000,
    quantity: "10",
    img: "./img/giay4.jpg",
  },
  {
    id: 4,
    name: "Giày Thể Thao Nike Air Force 1 07 White",
    price: 7000000,
    quantity: "10",
    img: "./img/giay5.jpg",
  },
  {
    id: 5,
    name: "Giày Air Jordan 1 Low",
    price: 5500000,
    quantity: "2",
    img: "./img/giay6.jpg",
  },
  {
    id: 6,
    name: "Giày Sneaker Nam Tommy ",
    price: 2390000,
    quantity: "5",
    img: "./img/giay7.jpg",
  },

  {
    id: 7,
    name: "Giày Thể Thao Nam S121",
    price: 57000,
    quantity: "15",
    img: "./img/giay8.jpg",
  },
  {
    id: 8,
    name: "Giày Thể Thao Nam adđiass",
    price: 34500,
    quantity: "10",
    img: "./img/hinh-anh-giay-vans-17.jpg",
  },
];

var keyLocalStorageListSP = "DANHSACHSP";

//localStorage.setItem(keyLocalStorageListSP, JSON.stringify(listData));
var data = JSON.parse(localStorage.getItem(keyLocalStorageListSP));
//var data = app.getData(keyLocalStorageListSP);
const productData = document.querySelector("#product_list");

function getDataProduct(data) {
  data.map((item) => {
    productData.innerHTML += `
            <div class="product__list--item">
        <div class="product--img">
          <img src="${item.img}" alt=""/>
          <i class="fa fa-cart-arrow-down" aria-hidden="true" onclick="handleCart(${item.id},${item.quantity})"></i>
        </div>
      
        <div class="product--name">${item.name}</div>
        <div class="product--dec">
          <div class="product--price">Price:${item.price}đ</div>
          <div class="product--qty">Quantity:${item.quantity}</div>
        </div>
      </div>
    `;
  });
}
getDataProduct(data);
// //    Click vao gio hang
function handleCart(idSanPham) {
  const danhsachItemGioHang = layDanhSachItemGioHang(idSanPham);
  const productF = data.find((item) => item.id == idSanPham);
  const itemCart = danhsachItemGioHang.find(
    (item1) => item1.idSanPham == idSanPham
  );
  const qty = productF.quantity;
  if (itemCart && itemCart.soLuong < parseInt(qty)) {
    itemCart.soLuong++;
  } else if (!itemCart && productF.quantity === 0) {
    alert("Hết hàng");
  } else if (!itemCart) {
    var itemGioHang = taoDoiTuongItemGioHang(idSanPham, 1);
    danhsachItemGioHang.push(itemGioHang);
  } else {
    alert("Hết hàng");
  }
  app.saveData(keyLocalStorageItemCart, danhsachItemGioHang);
  // localStorage.setItem(
  //   keyLocalStorageItemCart,
  //   JSON.stringify(danhsachItemGioHang)
  // );
}
