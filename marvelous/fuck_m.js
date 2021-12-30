// 1.12版本，火力已经膨胀了，随便打
// 无印版本，平平无奇

auto();


//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

var common = require("lib.js");


// 初始时，在追忆之书，main的最底下

var marvelnmame = images.read("/storage/emulated/0/checkPic/marvelname.jpg")
function checkMarvelName() {
    var img = null;
    while (!img) {
        img = captureScreen();
    }
    var key = findImage(img, marvelnmame, {
        region: [815, 220, 100, 100]
    })
    if (key) return 1;
    else return 0;
}



main_counter = 0;


function fuck_marvelous_pone() {
    // turn 1
    common.move(1, 3, false)
    common.move(2, 4, false)
    common.move(3, 3, false)
    common.move(4, 3, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);

    // turn 2
    common.all_boost()
    common.start_attack(1000)

    while (!checkMarvelName()) sleep(1000);
    press(1250, 507, 2000);
}




// 返回1表示胜利了，返回0表示有人死，翻车。
function fuck_marvelous_ptwo() {
    common.all_boost()
    // turn 1
    common.move(1, 4, false)
    common.move(2, 4, false)
    common.move(4, 3, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);

    // turn 2
    common.move(2, 2, false)
    common.move(3, 4, true)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);

    // turn 3
    common.all_boost();
    common.start_attack(1000)
    while (!checkMarvelName()) sleep(1000);
}




while (1) {
    // 読む
    click(1920, 259)
    sleep(800)
    // 确认
    click(1485, 884)
    sleep(5000)
    press(1250, 507, 2000)

    while (!common.checkArenaCombat()) sleep(1000);

    fuck_marvelous_pone();

    while (!common.checkArenaCombat()) sleep(1000);

    fuck_marvelous_ptwo();
    press(1850, 507, 2000)
    sleep(8000)
    click(1299, 771)
    sleep(1000)

    while (!common.checkCloseWin()) sleep(1000);
    click(1240, 584)
    sleep(1000)
    main_counter += 1;
    toastLog("总共打了" + main_counter + "次")

}
