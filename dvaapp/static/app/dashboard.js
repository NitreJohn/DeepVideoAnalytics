/**
 * Created by NitreExplosion on 2017/7/10.
 */

function uploadImage() {
    var canvas = document.createElement("canvas");
    var tempDataURL = canvas.toDataURL("image/png");
    dataUrl.push(tempDataURL.replace(/^data:image\/(png|jpg);base64,/, ""));

    $.ajax({
        type: 'POST',
        url: '/newPic/',
        // data: { "pic" : dataURL , "password" : password },
        data: { "pic" : dataUrl},
        // data: { "title" : title, "content" : content, "haveComment" : yes, "tag": tags },
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'json',
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
            alert("因为未知错误，post失败");
        },
        success: function(data){ //成功
            document.getElementById("submit").disabled = false;
            if (data['success'] == 'y') {
                alert("上传成功");
                location.href = "../";
            }
        }
    });
}