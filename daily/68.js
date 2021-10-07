
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

function fight_68_1() {
    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.move(1, 3, true)
    common.move(2, 4, false)
    common.move(3, 3, false)
    common.move(4, 2, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}

function fight_68_2() {
    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.move(1, 3, false)
    common.move(2, 2, false)
    common.move(3, 2, true)
    common.move(4, 2, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}

function fight_68_3() {
    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.move(1, 3, true)
    common.move(2, 3, false)
    common.move(3, 2, true)
    common.move(4, 3, true)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2，要挨打
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}

function fight_68_4() {
    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.move(1, 3, false)
    common.move(2, 3, true)
    common.move(3, 2, true)
    common.move(4, 3, true)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}

function fight_68_5() {
    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.move(1, 3, false)
    common.move(2, 2, false)
    common.move(3, 4, false)
    common.move(4, 4, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.move(3, 3, false)
    common.move(4, 2, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}

function fight_68_tower() {
    // 进入篝火
    move_upward()
    while (!common.checkStanding()) sleep(1000);
    click(1224, 182)
    sleep(1000)
    click(934, 710)
    while (!common.checkStanding()) sleep(1000);

    // 去沙漠地区
    common.click_little_map();
    click(988, 811)
    while (!common.checkStanding()) sleep(1000);
    click(1262, 494)
    sleep(1000)
    click(1513, 600)
    while (!common.checkStanding()) sleep(1000);

    // 屎壳郎
    common.click_little_map()
    click(1581, 778)
    while (!common.checkStanding()) sleep(1000);
    move_upward()
    fight_68_1()

    // 孔雀
    common.click_little_map()
    click(775, 616)
    while (!common.checkStanding()) sleep(1000);
    move_upward()
    fight_68_2()

    //
    common.click_little_map()
    click(1585, 615)
    while (!common.checkStanding()) sleep(1000);
    move_upward()
    fight_68_3()


    common.click_little_map()
    click(1050, 446)
    while (!common.checkStanding()) sleep(1000);
    move_upward()
    fight_68_4()


    common.click_little_map()
    click(921, 452)
    while (!common.checkStanding()) sleep(1000);
    move_upward()
    fight_68_5()
}



fight_68_tower()







