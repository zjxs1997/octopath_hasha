//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}
var cat = images.read("/storage/emulated/0/checkPic/mycat.jpg")
var littleCat = images.read("/storage/emulated/0/checkPic/mylitcat.jpg")

// 检查进入战斗后是否出现猫
function checkCat() {
    var img = null;
    while(!img) {
        log("尝试截图");
        img = captureScreen();
    }
    var key = findImage(img, cat, {
        region: [668, 392, 500, 500]
    })
    if (key){
        device.vibrate(1000)
        return 1;
    }     
    var key2 = findImage(img, littleCat, {
        // region: []
    })
    if (key2) {
        device.vibrate(1000)
        return 2;
    }
    return 0;
}

var k = checkCat();
toastLog(k);
