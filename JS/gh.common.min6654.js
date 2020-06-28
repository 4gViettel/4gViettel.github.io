﻿function IsUserName(t){return/^[a-zA-Z0-9.-]+$/.test(t)}function IsEmail(t){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(t)}function formatTextSearch(t){return t.replace(/\+/gi,"%2B").replace(/ /gi,"+")}function formatNumber(t){var n=t.toString().replace(/\$|\,/g,"");isNaN(n)&&(n=""),sign=n==(n=Math.abs(n)),n=Math.floor(100*n+.50000000001),n=Math.floor(n/100).toString();for(var e=0;e<Math.floor((n.length-(1+e))/3);e++)n=n.substring(0,n.length-(4*e+3))+","+n.substring(n.length-(4*e+3));return(sign?"":"-")+n}function showAlert(t){showAlertFocus(t,"")}function showAlertFocus(t,n){ghAlert.alert(t),window.setTimeout(function(){ghAlert.hide(),""!=n&&$("#"+n).focus()},1500)}function showAlertInfo(t){showAlertInfoFocus(t,"")}function showAlertInfoFocus(t,n){showAlertFocus('<div class="msg"><img src="https://gianhangvn.com/resource/icon/info-icon.png"/><p>'+t+"</p></div>",n)}function showAlertWarning(t){showAlert('<div class="msg"><img src="https://gianhangvn.com/resource/icon/warning-icon.png"/><p>'+t+"</p></div>")}function openSocialSharing(t,n,e){var i=445,o=screen.width/2-320,a=screen.height/2-i/2;switch(t){case"twitter":window.open("https://twitter.com/intent/tweet?text="+n+" "+encodeURIComponent(e),"sharertwt","toolbar=0,status=0,width=640, height=445, top="+a+", left="+o);break;case"facebook":window.open("http://www.facebook.com/sharer.php?u="+e,"sharer","toolbar=0,status=0,width=640, height=445, top="+a+", left="+o);break;case"linkedin":window.open("https://www.linkedin.com/shareArticle?mini=true&url="+e+"&title="+n+"&summary="+n+"&source=LinkedIn","sharer","toolbar=0,status=0,width=640, height=445, top="+a+", left="+o)}}function IsCheckValidTuKhoaTimKiemMain(t,n){var e=!0;return 0==$("#"+t).val().trim().length?(e=!1,showAlertInfoFocus(n?ObjLangs.master_msg01:"Vui lòng nhập từ khóa tìm kiếm",t)):$("#"+t).val().trim().length<3&&(e=!1,showAlertInfoFocus(n?ObjLangs.master_msg02:"Từ khóa tìm kiếm phải lớn hơn 3",t)),e}function SearchDataMain(t,n){if(IsCheckValidTuKhoaTimKiemMain(t,n)){var e=formatTextSearch($("#"+t).val().trim());window.location.href=urlTimKiemSanPham+"?txt="+e}}function DangKyBaoGiaXeThanhToan(t,n,e,i,o,a){var r="";""!=a&&(r+=$("#"+a).is(":checked")?"Hình thức thanh toán trả góp":"Hình thức thanh toán trả hết"),SendBaoGiaXe(t,n,e,i,o,r)}function DangKyBaoGiaXe(t,n,e,i,o,a,r){var h="";""!=a&&$("#"+a+":checked").length>0&&(h+="Bảng tính trả góp. "),""!=r&&$("#"+r+":checked").length>0&&(h+="Bảng tính giá lăn bánh. "),SendBaoGiaXe(t,n,e,i,o,h)}function DangKyLaiThuXe(t,n,e,i,o,a){var r="";""!=a&&""!=(r=$("#"+a).val().trim())&&(r="Ngày đăng ký lái thử: "+r),SendLaiThuXe(t,n,e,i,o,r)}function SendBaoGiaXe(t,n,e,i,o,a){var r=!0,h="",l="",s="",c="",g="";(r&&""!=t&&0==(l=$("#"+t).val().trim()).length&&(r=!1,showAlertInfoFocus("Vui lòng nhập Họ tên",t)),r&&""!=n&&0==(s=$("#"+n).val().trim()).length&&(r=!1,showAlertInfoFocus("Vui lòng nhập Số điện thoại",n)),r&&""!=i&&($("#"+i).is("input")?""==(h=$("#"+i).val().trim())&&(r=!1,showAlertInfoFocus("Vui lòng nhập nhập dòng xe",i)):$("#"+i).val()<0?(r=!1,showAlertInfoFocus("Vui lòng nhập chọn dòng xe",i)):h=$("#"+i+" option:selected").text().trim()),r)&&(""!=e&&(c=$("#"+e).val().trim()),$("#"+o).is("input")?g=$("#"+o).val().trim():$("#"+o).val()>0&&(g=$("#"+o+" option:selected").text().trim()),AjaxKhachHang.GuiYeuCauBaoGiaXe(h,l,s,c,g,a).value?window.location.href=urlHoanTatBaoGiaXe+"?code=2":showAlertInfoFocus("Đăng ký báo giá không thành công. Vui lòng thử lại"))}function SendLaiThuXe(t,n,e,i,o,a){var r=!0,h="",l="",s="",c="",g="";(r&&""!=t&&0==(l=$("#"+t).val().trim()).length&&(r=!1,showAlertInfoFocus("Vui lòng nhập Họ tên",t)),r&&""!=n&&0==(s=$("#"+n).val().trim()).length&&(r=!1,showAlertInfoFocus("Vui lòng nhập Số điện thoại",n)),r&&""!=i&&($("#"+i).is("input")?""==(h=$("#"+i).val().trim())&&(r=!1,showAlertInfoFocus("Vui lòng nhập nhập dòng xe",i)):$("#"+i).val()<0?(r=!1,showAlertInfoFocus("Vui lòng nhập chọn dòng xe",i)):h=$("#"+i+" option:selected").text().trim()),r)&&(""!=e&&(c=$("#"+e).val().trim()),$("#"+o).is("input")?g=$("#"+o).val().trim():$("#"+o).val()>0&&(g=$("#"+o+" option:selected").text().trim()),AjaxKhachHang.GuiDangKyLaiXeThu(h,l,s,c,g,a).value?window.location.href=urlHoanTatLaiXeThu+"?code=1":showAlertInfoFocus("Đăng ký lái xe thử không thành công. Vui lòng thử lại"))}ghAlert={alert:function(t){ghAlert._show(t)},hide:function(){ghAlert._hide()},_show:function(t){ghAlert._hide(),ghAlert._handleOverlay("show"),$("BODY").append('<div class="gh-alert" id="alert_container"><div class="gh-alert-dialog" id="alert_content"><div class="gh-alert-content" id="message"></div></div></div>'),window.setTimeout(function(){$("#alert_container").addClass("show")},100),$("#message").html(t)},_hide:function(){$("#alert_container").remove(),ghAlert._handleOverlay("hide")},_handleOverlay:function(t){switch(t){case"show":ghAlert._handleOverlay("hide"),$("BODY").addClass("gh-alert-open"),$("BODY").append('<div class="gh-alert-overlay" id="alert_overlay"></div>');break;case"hide":$("#alert_overlay").remove(),$("BODY").removeClass("gh-alert-open")}}},String.format=function(){for(var t=arguments[0],n=0;n<arguments.length-1;n++){var e=new RegExp("\\{"+n+"\\}","gm");t=t.replace(e,arguments[n+1])}return t};