function tinhDiem(){
    let khuVuc = document.getElementById("khuVuc").value
    let doiTuong = document.getElementById("doiTuong").value
    let diem1 = +document.getElementById("input-1").value
    let diem2 = +document.getElementById("input-2").value
    let diem3 = +document.getElementById("input-3").value
    let diemChuan = +document.getElementById("input-4").value

      if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
        document.getElementById("ketQua").innerHTML = "Kết quả: Không đạt";
        document.getElementById("diemTong").innerHTML ="Tổng điểm: Do điểm bạn có môn 0 nên kết quả kh đạt"
        return;
      }

      let diemTong = diem1 + diem2 + diem3;

      if (khuVuc === 'B'){
        diemTong += 2
      } else if (khuVuc === 'C'){
        diemTong += 1
      } else if (khuVuc === 'D'){
        diemTong += 0.5
      }

      if (doiTuong === "2"){
        diemTong += 2.5
      } else if (doiTuong === "3"){
        diemTong += 1.5
      } else if (doiTuong === "4"){
        diemTong += 1
      }

      document.getElementById("diemTong").innerHTML = "Tổng điểm: " + diemTong

      if (diemTong >= diemChuan){
        document.getElementById("ketQua").innerHTML = "Kết quả: Đạt"
      } else {
        document.getElementById("ketQua").innerHTML = "Kết quả: Không đạt"
      }

      
}
// BÀI 2: TÍNH TIỀN ĐIỆN
function tinhTiendien(){
  let name = document.getElementById("name").value
  let soKW = +document.getElementById("soKW").value

  let total = 0
  if(soKW <= 50){
    total += soKW * 500
  } else if(soKW <= 100){
    total += 50 * 500 + (soKW - 50) * 650
  } else if(soKW <= 200){
    total += 50 * 500 + 50 * 650 + (soKW - 100) * 850
  } else if(soKW <= 350){
    total += 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100
  } else{
    total += 50 * 500 + 50 * 650 + 50 * 850 + 150 * 1100 + (soKW - 350) * 1300
  }
  document.getElementById("hotenDien").innerHTML = "Họ tên: " + name
  document.getElementById("tongTiendien").innerHTML = "Tổng tiền điện: " + total + "Đ"
}

// BÀI 3: TÍNH THUẾ TNCN 
function tinhThue(){
  let tenThue = document.getElementById("nameThue").value
  let thuNhapnam = +document.getElementById("thuNhapnam").value
  let nguoiPhuthuoc = +document.getElementById("nguoiPhuthuoc").value


  let thunhapChiuthue = thuNhapnam - 4e6 - nguoiPhuthuoc * 1.6e6
  let thue = 0;

  if (thunhapChiuthue <= 60e6) {
    thue += thunhapChiuthue * 0.05;
  } else if (thunhapChiuthue <= 120e6) {
    thue += thunhapChiuthue * 0.1;
  } else if (thunhapChiuthue <= 210e6) {
    thue += thunhapChiuthue * 0.15;
  } else if (thunhapChiuthue <= 384e6) {
    thue += thunhapChiuthue * 0.2;
  } else if (thunhapChiuthue <= 624e6) {
    thue += thunhapChiuthue * 0.25;
  } else if (thunhapChiuthue <= 960e6) {
    thue += thunhapChiuthue * 0.3;
  } else {
    thue += thunhapChiuthue * 0.35;
  }
  
   document.getElementById("hoTenthue").innerHTML = "Họ tên: " + tenThue
   document.getElementById("thuePhaitra").innerHTML = "Tiền thuế: " + thue.toLocaleString() + "VNĐ"
}
// BÀI 4: TÍNH TIỀN CÁP
 function toogleKH(){
  let loaiKhachHang = document.getElementById("loaiKhachHang").value
  let inputDoanhnghiep = document.getElementById("input-doanhnghiep")
  if(loaiKhachHang === "doanhnghiep"){
    inputDoanhnghiep.style.display = "block"
  } else{
    inputDoanhnghiep.style.display = "none"
  }
} 
  function tinhTiencap(){
  let maKH = document.getElementById("maKH").value
  let kenhCaocap = +document.getElementById("kenhCaocap").value
  let soKetnoi = +document.getElementById("soKetnoi").value
  let loaiKhachHang = document.getElementById("loaiKhachHang").value

  if(loaiKhachHang === "loaiKH"){
    alert("Vui lòng chọn loại khách hàng")
    return
  }
  let phiXuLyHoaDon, phiDichVuCoBan, phiThueKenhCaoCap 
  if(loaiKhachHang === "nhadan"){
    phiXuLyHoaDon = 4.5
    phiDichVuCoBan = 20.5
    phiThueKenhCaoCap = 7.5 * kenhCaocap
  } else if (loaiKhachHang === "doanhnghiep"){
    phiXuLyHoaDon = 15
    phiDichVuCoBan = soKetnoi >= 10 ? 75 + (soKetnoi - 10) * 5 : 75
    phiThueKenhCaoCap = 50 * kenhCaocap
  }
  let tienCap = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap
  document.getElementById("maKhachhang").innerHTML = "Họ tên: " + maKH
  document.getElementById("tienCap").innerHTML = "Tiền cáp: $" + tienCap 
}