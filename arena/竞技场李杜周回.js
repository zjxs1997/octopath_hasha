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
    click(562, 529)
    sleep(1000)
}

function click_left() {
    click(827, 694)
    sleep(1000)
}

function click_right() {
    click(1040, 520)
    sleep(1000)
}

function viola_attack_boss_attack(do_switch) {
    click(2041, 531)
    sleep(1000)
    if (do_switch) {
        click(1545, 873)
        sleep(1000)
    }
    click_boss();
    click(1537, 409)
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

while (1) {
    counter++;
    // 読む
    click(1932, 369)
    sleep(800)
    // 确认
    click(1475, 739)
    sleep(5000)
    press(1250, 507, 2000)

    while (!common.checkArenaCombat()) sleep(1000);


    // turn 1
    click_left()
    common.move(1, 3, false)
    common.move(2, 2, false)
    common.move(4, 2, true)
    viola_attack_boss_attack(false)

    common.all_boost()
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);


    // turn 2
    common.move(4, 3, true)
    common.all_boost()
    common.move(1, 3, false)
    common.move(2, 2, false)
    common.move(3, 4, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);

    // turn 3
    click_left()
    common.move(1, 3, false)
    common.move(2, 2, false)
    common.move(3, 3, true)
    common.move(4, 2, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 4
    common.move(1, 3, false)
    common.move(2, 2, false)
    common.move(3, 2, true)
    common.move(4, 4, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 5
    common.move(4, 3, false)
    common.all_boost()
    common.move(1, 1, false)
    common.move(2, 2, false)
    common.move(3, 3, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 6
    common.move(1, 2, false)
    common.move(2, 2, true)
    common.move(3, 3, true)
    common.move(4, 3, true)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 7
    common.move(2, 4, true)
    common.move(3, 3, false)
    common.all_boost()
    common.move(4, 2, false)
    common.move(1, 3, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 8
    common.move(2, 2, true)
    viola_attack_boss_attack(true)
    common.all_boost()
    common.move(1, 3, false)
    common.move(4, 3, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 9，有可能打到right身上了，不妙哦。。。。
    click_left()
    common.move(2, 2, true)
    common.move(3, 3, true)
    common.move(4, 3, true)
    common.all_boost()
    common.move(1, 1, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 10
    common.move(1, 3, false)
    common.all_boost()
    common.move(2, 2, false)
    common.move(3, 3, true)
    common.move(4, 4, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 11
    viola_attack_boss_attack()
    common.all_boost()
    common.move(1, 1, false)
    common.move(2, 2, false)
    common.move(4, 2, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 12
    click_right()
    common.move(2, 2, true)
    common.all_boost()
    common.move(1, 1, false)
    common.move(3, 2, true)
    common.move(4, 4, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 13
    common.move(4, 3, false)
    common.all_boost()
    common.move(1, 1, false)
    common.move(2, 2, false)
    common.move(3, 2, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 14
    common.move(1, 3, false)
    common.move(2, 4, true)
    common.move(3, 4, true)
    common.move(4, 3, true)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 15
    common.move(1, 2, false)
    common.move(2, 4, false)
    common.move(3, 2, true)
    common.all_boost()
    common.move(4, 2, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 16
    common.move(2, 2, true)
    common.all_boost()
    common.move(4, 2, false)
    viola_attack_boss_attack(true)
    common.move(1, 1, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 17，这里应该击破右边的，然后ddl全打李杜
    click_right()
    common.move(4, 3, true)
    common.all_boost()
    common.move(1, 3, false)
    common.move(2, 3, true)
    common.move(3, 2, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 18
    common.move(3, 3, true)
    common.all_boost()
    common.move(4, 4, false)
    common.move(1, 3, false)
    common.move(2, 4, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 19
    common.move(4, 2, true)
    common.all_boost()
    common.move(1, 2, false)
    common.move(2, 4, false)
    common.move(3, 3, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 20
    common.move(4, 3, true)
    common.all_boost()
    common.move(1, 2, false)
    common.move(2, 4, false)
    common.move(3, 3, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 21
    common.move(1, 2, false)
    common.move(2, 3, true)
    common.move(3, 4, true)
    common.move(4, 3, true)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 22
    common.move(2, 4, true)
    common.all_boost()
    common.move(1, 3, false)
    common.move(3, 2, false)
    common.move(4, 4, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 23
    common.move(1, 3, false)
    common.move(2, 3, false)
    common.move(3, 3, true)
    common.move(4, 2, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 24
    common.move(2, 2, true)
    common.all_boost()
    common.move(1, 1, false)
    common.move(3, 2, false)
    common.move(4, 2, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 25
    common.move(1, 3, false)
    common.move(3, 2, true)
    common.all_boost()
    common.move(2, 4, false)
    common.move(4, 4, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 26
    common.move(1, 2, false)
    common.move(2, 4, false)
    common.move(3, 4, false)
    common.move(4, 2, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);

    // turn 27
    common.move(1, 2, false)
    common.move(2, 4, false)
    common.move(3, 3, true)
    common.move(4, 3, true)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);

    // turn 28
    common.move(1, 2, false)
    common.move(2, 3, true)
    common.move(3, 3, false)
    common.move(4, 2, true)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);

    // turn 29
    common.move(1, 2, false)
    common.move(2, 3, false)
    common.move(3, 3, false)
    common.move(4, 3, true)
    common.all_boost()
    common.start_attack(1000)


    while (!checkArenaEnd()) sleep(3000);
    press(1850, 507, 2000)
    while (!common.checkMedal()) sleep(3000);
    click(1249, 640)
    sleep(1000)
    // 关闭确认
    click(1240, 584)
    sleep(1000)


    toastLog("周回了" + counter + "次，翻车" + fail_counter + "次")

}
