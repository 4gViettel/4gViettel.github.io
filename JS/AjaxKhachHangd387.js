if (typeof AjaxKhachHang == "undefined") AjaxKhachHang = {};
AjaxKhachHang_class = function () { };
Object.extend(AjaxKhachHang_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
    GetDataQuanHuyen: function (pIDTinhThanh) {
        return this.invoke("GetDataQuanHuyen", { "pIDTinhThanh": pIDTinhThanh }, this.GetDataQuanHuyen.getArguments().slice(1));
    },
    GetPhiVanChuyen: function (pTongTien, pIDTinhThanh) {
        return this.invoke("GetPhiVanChuyen", { "pTongTien": pTongTien, "pIDTinhThanh": pIDTinhThanh }, this.GetPhiVanChuyen.getArguments().slice(2));
    },
    GetPhiVanChuyenThanhQuan: function (pTongTien, pIDTinhThanh, pIDQuanHuyen) {
        return this.invoke("GetPhiVanChuyenThanhQuan", { "pTongTien": pTongTien, "pIDTinhThanh": pIDTinhThanh, "pIDQuanHuyen": pIDQuanHuyen }, this.GetPhiVanChuyenThanhQuan.getArguments().slice(3));
    },
    AddSanPhamToGioHang: function (pIDSanPham, pSoLuong) {
        return this.invoke("AddSanPhamToGioHang", { "pIDSanPham": pIDSanPham, "pSoLuong": pSoLuong }, this.AddSanPhamToGioHang.getArguments().slice(2));
    },
    UpdateSanPhamGioHang: function (pIDSanPham, pSoLuong) {
        return this.invoke("UpdateSanPhamGioHang", { "pIDSanPham": pIDSanPham, "pSoLuong": pSoLuong }, this.UpdateSanPhamGioHang.getArguments().slice(2));
    },
    DeleteSanPhamGioHang: function (pIDSanPham) {
        return this.invoke("DeleteSanPhamGioHang", { "pIDSanPham": pIDSanPham }, this.DeleteSanPhamGioHang.getArguments().slice(1));
    },
    GetTongTienGioHang: function () {
        return this.invoke("GetTongTienGioHang");
    },
    CloseLeftAdvert: function () {
        return this.invoke("CloseLeftAdvert");
    },
    CloseRightAdvert: function () {
        return this.invoke("CloseRightAdvert");
    },
    GuiDangKyLaiXeThu: function (pLoaiXe, pHoTen, pDienThoai, pEmail, pDiaChi, pNoiDung) {
        return this.invoke("GuiDangKyLaiXeThu", { "pLoaiXe": pLoaiXe, "pHoTen": pHoTen, "pDienThoai": pDienThoai, "pEmail": pEmail, "pDiaChi": pDiaChi, "pNoiDung": pNoiDung }, this.GuiDangKyLaiXeThu.getArguments().slice(6));
    },
    GuiYeuCauBaoGiaXe: function (pLoaiXe, pHoTen, pDienThoai, pEmail, pDiaChi, pNoiDung) {
        return this.invoke("GuiYeuCauBaoGiaXe", { "pLoaiXe": pLoaiXe, "pHoTen": pHoTen, "pDienThoai": pDienThoai, "pEmail": pEmail, "pDiaChi": pDiaChi, "pNoiDung": pNoiDung }, this.GuiYeuCauBaoGiaXe.getArguments().slice(6));
    },
    GuiYeuCauNhanThongTinDuAn: function (pHoTen, pDienThoai, pEmail, pIsTaiLieu, pIsChinhSach, pIsBangGia, pCurrentUrl) {
        return this.invoke("GuiYeuCauNhanThongTinDuAn", {
            "pHoTen": pHoTen, "pDienThoai": pDienThoai, "pEmail": pEmail,
            "pIsTaiLieu": pIsTaiLieu, "pIsChinhSach": pIsChinhSach, "pIsBangGia": pIsBangGia, "pCurrentUrl": pCurrentUrl
        }, this.GuiYeuCauNhanThongTinDuAn.getArguments().slice(7));
    },
    DatHangNhanh: function (pIDSanPham, pSoLuong, pHoTenDatHang, pDienThoaiDatHang, pEmailDatHang, pDiaChiDatHang, pGhiChuDatHang) {
        return this.invoke("DatHangNhanh", {
            "pIDSanPham": pIDSanPham, "pSoLuong": pSoLuong, "pHoTenDatHang": pHoTenDatHang, "pDienThoaiDatHang": pDienThoaiDatHang,
            "pEmailDatHang": pEmailDatHang, "pDiaChiDatHang": pDiaChiDatHang, "pGhiChuDatHang": pGhiChuDatHang
        }, this.DatHangNhanh.getArguments().slice(7));
    },
    GuiBinhChonSanPham: function (pIDSanPham, pSoDiem) {
        return this.invoke("GuiBinhChonSanPham", { "pIDSanPham": pIDSanPham, "pSoDiem": pSoDiem }, this.GuiBinhChonSanPham.getArguments().slice(2));
    },
    GuiBinhChonTinTuc: function (pIDTinTuc, pSoDiem) {
        return this.invoke("GuiBinhChonTinTuc", { "pIDTinTuc": pIDTinTuc, "pSoDiem": pSoDiem }, this.GuiBinhChonTinTuc.getArguments().slice(2));
    },
    url: '/ajaxpro/AjaxKhachHang,GianHangVN.ashx'
}));
AjaxKhachHang = new AjaxKhachHang_class();