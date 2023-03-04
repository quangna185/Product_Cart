const app = (function () {
  const keyLocalStorageListSP = "DANHSACHSP";
  const keyLocalStorageItemCart = "DANHSACHITEMCART";

  // luu dư liẹu vào localstorage

  const saveData = (key, data) => {
    var jsonDanhSachItemGioHang = JSON.stringify(data);
    localStorage.setItem(key, jsonDanhSachItemGioHang);
  };

  // lây danh sach ra tu localstorage

  const getData = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  // them giữ liệu

  const handleCreateInfo = async (data) => {
    const res = await fetch(`http://localhost:3000/productCart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
      });
  };

  // lây dữ liệu

  const handleGetInfo = async () => {
    const res = await fetch(`http://localhost:3000/productCart`);
    const data = await res.json();
    return data;
  };

  // Xóa dữ liệu

  const handleDeleteInfo = async (id) => {
    const res = await fetch(`http://localhost:3000/productCart/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return {
    saveData,
    getData,
    handleDeleteInfo,
    handleGetInfo,
    handleCreateInfo,
  };
})();
