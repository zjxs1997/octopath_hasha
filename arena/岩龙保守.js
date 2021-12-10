// jjc药师半自动周回脚本，可能翻车
// 开局保证在追忆之书，jjc事件最下方
// 记得开战斗command记忆选项

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
    click(1240, 584)
    sleep(1000)
    return true;
}

function click_down() {
    click(846, 579)
    sleep(800)
}

function click_up() {
    click(1059, 417)
    sleep(800)
}

function checker() {
    while (1) {
        if (common.checkArenaCombat()) return 0;
        if (checkArenaEnd()) return 1;
    }
}

function win() {
    press(1850, 507, 2000)
    sleep(8000)
    click(1299, 771)
    sleep(1000)

    toastLog("周回了" + counter + "次，翻车" + fail_counter + "次")
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

    // turn 1
    common.move(3, 3, true)
    common.all_boost()
    common.move(2, 4, false)
    common.fight(4, 0, false, 2)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);


    // turn 2
    common.all_switch()
    common.move(1, 4, false)
    common.move(2, 3, false)
    common.move(4, 3, false)
    common.all_boost()
    common.move(3, 4, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;


    // turn 3
    common.all_boost()
    common.move(1, 4, true)
    common.move(2, 2, false)
    common.move(3, 3, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;


    // turn 4
    common.all_switch()
    common.move(1, 3, true)
    common.move(2, 4, false)
    common.move(3, 4, false)
    common.move(4, 4, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;


    // turn 5
    common.move(1, 2, true)
    common.all_boost()
    common.move(3, 0, true)
    common.fight(2, 1, false, 3)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;


    // turn 6
    common.move(1, 3, true)
    common.move(3, 3, true)
    common.all_boost()
    common.move(4, 4, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;


    // turn 7
    common.move(4, 1, false)
    common.all_boost()
    common.move(1, 2, true)
    common.move(2, 4, false)
    common.move(3, 4, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;



    // turn 8
    common.fight(2, 2, true, 4)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;


    // turn 9
    common.move(2, 2, true)
    common.move(3, 3, false)
    common.all_boost()
    common.move(4, 0, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 10
    common.move(1, 3, true)
    common.move(4, 4, false)
    common.move(2, 0, false)
    common.move(3, 0, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 11
    // 开始杀鸟
    common.all_switch()
    common.move(4, 4, false)
    common.move(2, 4, false)
    common.all_boost()
    common.move(1, 4, false)
    common.move(3, 3, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 12
    common.fight(3, 2, false, 4)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 13
    click_down()
    common.move(1, 2, true)
    common.move(2, 2, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 14
    click_up()
    common.fight(3, 2, false, 4)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 15
    click_down()
    common.move(1, 3, false)
    common.move(3, 3, true)
    common.all_boost()
    common.fight(2, 1, false, 3)
    common.fight(4, 3, false, 3)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 16
    // 处理掉下面那只鸟
    common.move(3, 0, true)
    common.move(1, 4, true)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 17
    common.move(1, 3, true)
    common.move(3, 3, true)
    common.move(4, 2, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 18
    // 应该可以杀掉第二只鸟
    common.move(3, 3, true)
    common.all_boost()
    common.start_attack(1000)
    var res = checker();

    if (res == 1) {
        // win
    } else {
        while (res == 0) {
            common.start_attack(1000)
            res = checker();
        }
    }

    counter++;
    win();

    // 最后是检测结束时候的勲章＆閉じる
    // 勋章确认
    while (!common.checkCloseWin()) sleep(1000);
    click(1240, 584)
    sleep(1000)

    log("周回了" + counter + "次！")
}

