// 开启招式记忆选项，大概可以节省一丢丢时间
// 中级的马贝拉屎，用来刷nuts

// 队伍配置
// 1:女剑；3:三连
// 2:闪达：2:行云流水
// 3:ddl：2:风4
// 4:男剑：3:输出；后排wingate
// 另外剑耐、风耐、属防工具人拉满

// 饰品配置：
// 女剑：带伤害+速度甲
// 男剑：右手袋

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

var nuts = images.read("/storage/emulated/0/checkPic/nuts.jpg")
function checkNuts() {
    var img = null;
    while (!img) {
        img = captureScreen();
    }
    var key = findImage(img, nuts, {
        region: [990, 460, 50, 50]
    })
    if (key) return 1;
    else return 0;
}


function fuck_marvelous_pone() {
    // turn 1
    common.move(1, 4, false)
    common.move(2, 3, false)
    common.move(3, 3, false);
    common.move(4, 4, false);
    common.all_boost()
    common.start_attack(1000)

    while (!checkMarvelName()) sleep(3000);
    press(1250, 507, 2000);
}

// 返回1表示接着打（有戻る），返回0表示打完了（检测到他名字）
function checker() {
    while (1) {
        if (common.checkArenaCombat()) return 1;
        if (checkMarvelName()) return 0;
        sleep(2000);
    }
}


// 返回1表示胜利了，返回0表示有人死，翻车。
function fuck_marvelous_ptwo() {
    // turn 1
    common.move(1, 4, false)
    common.move(2, 3, false)
    common.move(3, 3, false);
    common.move(4, 4, false);
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);

    // turn 2
    common.all_boost()
    common.start_attack(1000)
    while (!checkMarvelName()) sleep(1000);
    press(1250, 507, 2000);
}

main_counter = 0;

while (1) {
    // 改改
    click(1937, 621);
    sleep(1000);
    click(1473, 762);
    sleep(4000);
    press(1250, 507, 2000);
    while (!common.checkArenaCombat()) sleep(1000);

    fuck_marvelous_pone();

    while (!common.checkArenaCombat()) sleep(1000);

    fuck_marvelous_ptwo();
    while (!checkNuts()) sleep(3000);
    click(1249, 640)
    sleep(800)
    // 关闭确认
    click(1240, 584)
    sleep(800)
    main_counter += 1;
    toastLog("总共打了" + main_counter + "次")
}
