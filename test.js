auto()

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

// 人物停住的时候，返回1，原理是检查菜单左下角
var halt = images.read("/storage/emulated/0/checkPic/haltpic.jpg")
function checkStanding() {
    var haltX = 400;
    var haltY = 900;
    var img = null;
    while(!img) {
        log("尝试截图");
        img = captureScreen();
    }
    var key = findImage(img, halt, {
        region: [haltX, haltY, 50, 50]
    })
    if (key)
        return 1;
    else
        return 0;
}
// var res = checkStanding();
// toastLog(res);


// 判断是否进入战斗，进入返回1
var escape = images.read("/storage/emulated/0/checkPic/startpic1.jpg")
function checkCombat() {
    var escapeX = 1170;
    var esacapeY = 900;
    //截图判断
    var img = null;
    while(!img) {
        img = captureScreen();
    }
    var key = findImage(img, escape, {
        region: [1170, 900, 50, 50]
    })
    if (key)
        return 1;
    else
        return 0;
}
// var res = checkCombat();
// toastLog(res);

// 检查战斗是否结束，结束返回1，原理是检查结算界面的硬币icon（部分）
var coin = images.read("/storage/emulated/0/checkPic/coin.jpeg");
function checkCombatEnd() {
    //截图判断
    var img = null;
    while(!img) {
        img = captureScreen();
    }
    var key = findImage(img, coin, {
        region: [1680, 240, 50, 50]
    })
    if (key)
        return 1;
    else
        return 0;
}

var res = checkCombatEnd();
toastLog(res);

