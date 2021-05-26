//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

// 检查进入战斗后是否出现猫
var cat = images.read("/storage/emulated/0/checkPic/mycat.jpg")
function checkCat() {
    var img = null;
    while(!img) {
        log("尝试截图");
        img = captureScreen();
    }
    var key = findImage(img, cat, {
        region: [738, 442, 100, 100]
    })
    toastLog(key)
    if (key)
        return 1;
    else
        return 0;
}

checkCat();
