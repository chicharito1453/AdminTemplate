const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var browserHeight = window.innerHeight;
var contentHeight = document.documentElement.scrollHeight;

// Khi thu Sidebar thì set tittle cho thẻ a trong sidebar
$('#check').onchange = function(){
  var check = this.checked;
  $$(".sidebar a").forEach(element => {
    element.title = check ? element.text : '';
  });
}

// Đóng mở nav khi responsive
$(".nav_btn").onclick = function(e){
  $(".mobile_nav_items").classList.toggle('active');
}

// Nút chọn file trang collaborators
if($('#btnImage')){
  $('#btnImage').onclick = function(){
    $("#inpFileCTV").click();
  }
}


// Nút chọn file trang distributors
if($("#btnLogoNcc")){
  $("#btnLogoNcc").onclick = function(){
    $("#inpFileNCC").click();
  }
}

// 3 Nút chọn file trang products
if($("#btnLink1")){
  $("#btnLink1").onclick = function(){
    $("#link1").click();
  }
}
if($("#btnLink2")){
  $("#btnLink2").onclick = function(){
    $("#link2").click();
  }
}
if($("#btnLink3")){
  $("#btnLink3").onclick = function(){
    $("#link3").click();
  }
}

// Thiết lập chiều cao cho content
function setHeight() {
  $(".content").style.height = 
  contentHeight > browserHeight 
  ? contentHeight +'px'
  : browserHeight +'px';
}

// Thiết lập chiều cao cho content khi resize
window.resize = function(){
  $(".content").style.height = 
  window.innerHeight < browserHeight 
  ? document.documentElement.scrollHeight + 'px'
  : contentHeight;
}

setHeight();