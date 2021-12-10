
auto();

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

var common = require("lib.js");


function move_upward() {
    swipe(1645, 849, 1645, 200, 2000)
}

function end_combat() {
    // 战斗结束
    // 瞎鸡儿点
    click(1463, 751)
    sleep(1500)
    // 瞎鸡儿点
    click(1463, 751)
    sleep(1500)
    // 瞎鸡儿点
    click(1463, 751)
    sleep(5600)
}

function fight_70_1() {
    while (!common.checkCombat()) sleep(1000);

    common.move(1, 4, false)
    common.move(2, 3, false)
    common.move(3, 3, false)
    common.move(4, 4, true)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}

function fight_70_2() {
    while (!common.checkCombat()) sleep(1000);

    // t1
    common.move(1, 4, false)
    common.move(2, 2, true)
    common.move(3, 3, false)
    common.move(4, 4, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // t2
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}

function fight_70_3() {
    while (!common.checkCombat()) sleep(1000);

    common.move(1, 2, false)
    common.move(2, 3, true)
    common.move(3, 4, true)
    common.move(4, 4, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}

function fight_70_4() {
    while (!common.checkCombat()) sleep(1000);

    // t1
    common.move(1, 2, false)
    common.move(2, 3, false)
    common.move(3, 3, true)
    common.move(4, 3, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // t2
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}

function fight_70_tower() {
    // 进入篝火
    move_upward()
    while (!common.checkStanding()) sleep(1000);
    click(1224, 182)
    sleep(1000)
    click(934, 710)
    while (!common.checkStanding()) sleep(1000);

    // 去山地
    common.click_little_map();
    click(1365, 811)
    while (!common.checkStanding()) sleep(1000);
    click(1262, 494)
    sleep(1000)
    click(1513, 600)
    while (!common.checkStanding()) sleep(1000);

    // 1 蝙蝠
    common.click_little_map()
    click(865, 814)
    while (!common.checkStanding()) sleep(1000);
    move_upward()
    fight_70_1()

    // 2 乌龟
    common.click_little_map()
    click(865, 644)
    while (!common.checkStanding()) sleep(1000);
    move_upward()
    fight_70_2()

    // 3 蜗牛
    common.click_little_map()
    click(1331, 434)
    while (!common.checkStanding()) sleep(1000);
    move_upward()
    fight_70_3()

    // 4 变色龙
    common.click_little_map()
    click(1472, 447)
    while (!common.checkStanding()) sleep(1000);
    move_upward()
    fight_70_4()
}

fight_70_tower()
