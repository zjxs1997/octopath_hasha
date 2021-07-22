// 默认开启memory

auto();

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

var common = require("lib.js");


counter = 0;
fail_counter = 0;


function handleDeath() {
    if (common.checkBackDeath()) {
        // devicePixelRatio.vibrate(1000)
        log('有角色挂了，重开！')
        click(1198, 933);
        sleep(800);
        click(1483, 693);
    } else
        return false;
    while (!common.checkCloseWin()) sleep(1000);
    fail_counter++;

    toastLog("周回了" + counter + "次，翻车" + fail_counter + "次")

    click(1240, 584)
    sleep(1000)
    return true;
}

function click_boss() {
    click(550, 562)
    sleep(1000)
}
function click_right() {

}

function buff41() {
    click(2097, 746)
    sleep(1000)
    click(1633, 422)
    sleep(1000)
    click(2027, 132)
    sleep(1000)
}

function theo() {
    click(2097, 746)
    sleep(1000)
    // 交代
    click(1640, 886)
    sleep(1000)
    swipe(1715, 595, 2010, 595, 2000)
    sleep(1000)
}

function dance() {
    click(2097, 746)
    sleep(1000)
    click(1640, 886)
    sleep(1000)
    swipe(1290, 429, 1881, 429, 2000)
    sleep(1000)
    click(2027, 132)
    sleep(1000)
}

var host = images.read("/storage/emulated/0/checkPic/host.jpg")
function checkArenaEnd() {
    var img = null;
    while (!img) {
        img = captureScreen();
    }
    var key = findImage(img, host, {
        region: [910, 220, 100, 100]
    })
    img.recycle();
    if (key)
        return 1;
    else
        return 0;
}

function checker() {
    while (1) {
        if (common.checkArenaCombat()) return 0;
        if (checkArenaEnd()) return 1;
    }
}

function win() {
    press(1850, 507, 2000)
    while (!common.checkMedal()) sleep(3000);
    click(1249, 640)
    sleep(1000)
    // 关闭确认
    click(1240, 584)
    sleep(1000)

    toastLog("周回了" + counter + "次，翻车" + fail_counter + "次")
}

function run() {
    fail_counter++;
    click(1198, 933);
    sleep(800);
    click(1483, 693);
    while (!common.checkCloseWin()) sleep(1000);
    click(1240, 584)
    sleep(1000)
}


//   main   //

while (1) {
    counter++;
    // 読む
    click(1932, 743)
    sleep(800)
    // 确认
    click(1475, 739)
    sleep(5000)
    press(1250, 507, 2000)

    while (!common.checkArenaCombat()) sleep(1000);

    // turn 1
    click_boss()
    common.move(1, 4, true)
    common.move(4, 3, true)
    common.move(2, 3, false)
    common.all_boost()
    common.move(3, 2, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 2
    common.move(1, 3, false)
    common.move(2, 2, false)
    common.move(3, 3, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 3
    common.move(1, 4, true)
    common.all_boost()
    common.move(2, 2, false)
    common.move(3, 3, false)
    buff41()
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 4
    common.move(4, 3, true)
    common.all_boost()
    common.move(1, 3, true)
    common.move(2, 4, false)
    common.move(3, 3, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 5
    common.move(4, 4, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 6
    common.move(1, 3, true)
    common.move(3, 2, false)
    common.all_boost()
    common.move(4, 4, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 7
    common.move(1, 2, true)
    common.all_boost()
    // 提奥
    theo()
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 8
    common.all_switch()
    common.move(2, 1, false)
    common.move(3, 3, false)
    common.move(4, 1, true)
    common.all_boost()
    common.move(1, 4, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 9
    common.move(1, 1, true)
    common.all_boost()
    dance()
    common.move(2, 4, true)
    common.move(3, 4, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 10
    common.move(1, 2, false)
    common.move(3, 2, false)
    common.move(4, 3, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 11
    common.move(1, 3, true)
    common.move(4, 4, true)
    common.all_boost()
    common.move(2, 4, false)
    common.move(3, 2, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);

    // turn 12
    common.move(4, 4, true)
    common.all_boost()
    common.start_attack(1000)
    var res = checker();

    if (res == 1) {
        // 赢了
        win();
    } else {
        // turn 13
        common.all_boost();
        common.start_attack(1000)
        var res2 = checker();

        if (res2 == 1) {
            win();
        } else {
            run();
        }
    }


}

