$(document).ready(function () {
  setHeight();
});

var browserHeight = $(window).height();
var contentHeight = $(document).height();

// Khi thu Sidebar thì set tittle cho thẻ a trong sidebar
$("#check").change(function () {
  var check = $(this).prop("checked");
  $(".sidebar a").each(function () {
    check ? $(this).prop("title", $(this).text()) : $(this).prop("title", "");
  });
});

// Đóng mở nav khi responsive
$(".nav_btn").click(function (e) {
  $(".mobile_nav_items").toggleClass("active");
});

// Nút chọn file trang collaborators
$("#btnImage").click(function () {
  $("#inpFile").click();
});

// Nút chọn file trang distributors
$("#btnLogoNcc").click(function () {
  $("#inpFile").click();
});

// 3 Nút chọn file trang products
$("#btnLink1").click(function () {
  $("#link1").click();
});
$("#btnLink2").click(function () {
  $("#link2").click();
});
$("#btnLink3").click(function () {
  $("#link3").click();
});

// Thiết lập chiều cao cho content
function setHeight() {
  contentHeight > browserHeight
    ? $(".content").height(contentHeight)
    : $(".content").height(browserHeight);
}

// Thiết lập chiều cao cho content khi resize
$(window).resize(function () {
  $(window).height() < browserHeight
    ? $(".content").height($(document).height())
    : $(".content").height(contentHeight);
  console.log($(window).height());
});

function tracuu(thaotac, mode) {
  frmData.thaotac.value = thaotac;
  mode == 99 ? getCty9Excel(frmData) : getCty9Report(frmData);
}

function onchange_sel(id) {
  var urlParams = "msphongban=" + id;

  vms4Ajax.execute({
    action: frmData.selectbox.value,
    params: urlParams,
    dataType: "data",
    position: "vt_nhanvien",
    success: function () {
      chonsen_selectbox();
    },
    debug: false,
  });
}
