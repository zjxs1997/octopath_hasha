// 开启招式记忆选项，大概可以节省一丢丢时间


// 队伍配置
// 1:女剑，后排特蕾莎；
// 2:ddl，后排李杜
// 3:泰雷兹，后排管家；
// 4:男剑，后排女贼；

// 技能配置
// 女剑 1：剑1， 2：暗， 3：三连；  特蕾莎 1:疾风
// ddl 2:剑岚；                  李杜 2：双乱， 3:轰
// 艾维斯 3:大雷；                管家 2:风；3:三连
// 男剑 3: 二连；                 女贼 3: 二连

// 饰品配置：
// 女剑：龙5（10）+ 联动速度甲
// 特蕾莎：精灵（5）
// 李杜：龙4（9）+龙3（8）
// 管家：龙1（6）+精灵（6）
// 女贼：黑龙（6）+龙2（7）

auto();


//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

var common = require("lib.js");


// 初始时，在追忆之书，main的最底下

var marvelnmame = images.read("/storage/emulated/0/checkPic/marvelname.jpg")
var randombox = images.read("/storage/emulated/0/checkPic/randombox.jpg")
var ken = images.read("/storage/emulated/0/checkPic/weakken.jpg")
var yari = images.read("/storage/emulated/0/checkPic/weakyari.jpg")
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
function checkRandomBox() {
    var img = null;
    while (!img) {
        img = captureScreen();
    }
    var key = findImage(img, randombox, {
        region: [1020, 455, 50, 50]
    })
    if (key) return 1;
    else return 0;
}
function checkKen() {
    var img = null;
    while (!img) {
        img = captureScreen();
    }
    var key = findImage(img, ken, {
        region: [400, 700, 300, 100]
    })
    if (key) return 1;
    else return 0;
}
function checkYari() {
    var img = null;
    while (!img) {
        img = captureScreen();
    }
    var key = findImage(img, yari, {
        region: [400, 700, 300, 100]
    })
    if (key) return 1;
    else return 0;
}



main_counter = 0;
fail_counter = 0;


function fuck_marvelous_pone() {
    // turn 1
    common.move(4, 4, false);
    common.all_boost();
    common.move(1, 4, false)
    common.move(2, 3, false)
    common.move(3, 4, true);
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);

    // turn 2
    common.move(1, 2, false)
    common.move(3, 3, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);

    // turn 3
    common.all_boost();
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);

    // turn 4
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);

    // turn 5
    common.all_boost();
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

function handleDeath() {
    if (common.checkBackDeath()) {
        toastLog('有角色挂了，重开！')
        click(1198, 933);
        sleep(800);
        click(1483, 693);
    } else
        return false;
    while (!common.checkCloseWin()) sleep(1000);
    click(1240, 584)
    sleep(1000)
    return true;
}



// 返回1表示胜利了，返回0表示有人死，翻车。
function fuck_marvelous_ptwo() {
    // 第一轮直接开干
    // turn 1
    common.move(4, 4, false)
    common.all_boost()
    common.move(1, 4, false)
    common.move(2, 3, false)
    common.move(3, 4, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);

    // turn 2
    common.move(1, 2, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);

    // turn 3
    common.move(3, 4, true)
    common.all_boost();
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);

    var temp;

    // 此时破盾四人组后卫
    while (1) {
        // turn iter1
        common.all_switch();
        common.move(1, 2, false)
        common.move(2, 3, false)
        common.move(3, 4, false)
        common.move(4, 4, false)
        common.start_attack(1000)
        temp = checker();
        if (temp == 0) {
            press(1250, 507, 2000);
            return 1;
        }
        if (handleDeath()) {
            return 0;
        }

        common.move(1, 4, false)
        // 先检查pattern
        // pattern 1 剑风
        // 2: 枪暗
        // 3: 本雷
        var pattern;
        if (checkKen()) {
            toastLog("enter pattern 1，希望别翻车")
            pattern = 1;
        } else if (checkYari()) {
            toastLog("enter pattern 2，太好啦")
            pattern = 2;
        } else {
            toastLog("enter pattern 3，")
            pattern = 3;
        }
        // turn iter2
        switch (pattern) {
            case 1:
                common.move(1, 4, true)
                break;
            case 2:
                common.move(1, 2, false)
                common.all_boost()
                common.move(2, 1, true)
                common.move(4, 1, true)
                break;
            case 3:
                common.move(2, 4, false)
                common.all_boost();
                common.move(1, 1, true)
                break;
        }
        common.start_attack(1000)
        temp = checker();
        if (temp == 0) {
            press(1250, 507, 2000);
            return 1;
        }
        if (handleDeath()) {
            return 0;
        }


        // turn iter 3
        switch (pattern) {
            case 1:
                common.move(1, 2, false)
                common.move(2, 3, true)
                common.move(4, 4, true)
                common.all_boost();
                common.move(3, 1, true)
                break;
            case 2:
                common.move(1, 3, true)
                common.all_boost();
                common.move(2, 1, false)
                common.move(3, 1, true)
                common.move(4, 1, false)
                break;
            case 3:
                common.move(3, 4, true)
                common.all_boost()
                common.move(1, 1, false)
                common.move(2, 1, true)
                common.move(4, 1, true)
                break;
        }
        common.start_attack(1000)
        temp = checker();
        if (temp == 0) {
            press(1250, 507, 2000);
            return 1;
        }
        if (handleDeath()) {
            return 0;
        }
    }
}




while (1) {
    click(1897, 731);
    sleep(1000);
    click(1473, 762);
    sleep(4000);
    press(1250, 507, 2000);
    while (!common.checkArenaCombat()) sleep(1000);

    fuck_marvelous_pone();

    while (!common.checkArenaCombat()) sleep(1000);

    // to be finished
    var result = fuck_marvelous_ptwo();
    if (result == 1) {
        while (!checkRandomBox()) sleep(3000);
        click(1249, 640)
        sleep(800)
        // 关闭确认
        click(1240, 584)
        sleep(800)
    } else {
        fail_counter += 1;
    }
    main_counter += 1;
    toastLog("总共打了" + main_counter + "次，其中翻车" + fail_counter + "次")
}
