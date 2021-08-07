// 开局66队伍

auto();

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

var common = require("lib.js");


// helper func
function tower2flame() {
    common.click_world_map();
    click(845, 780)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
    click(1233, 231)
    sleep(1000);
    while (!common.checkStanding()) sleep(1000);
    click(1317, 440)
    sleep(3500)
    // 瞎鸡儿点
    click(1463, 751)
    sleep(1100)
    // 确认宿屋，20块钱
    click(1491, 716)
    sleep(6000)
    // 恢复后的确认
    click(1236, 699)
    sleep(1600)
}

function flame2origin() {
    common.click_world_map()
    click(1322, 377)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

function checker() {
    while (1) {
        if (common.checkCombatEnd()) return 2;
        if (common.checkCombat()) return 1;
        if (common.checkStanding()) return 0;
        sleep(3000);
    }
}

function go_or_run() {
    var result = checker();
    while (result == 1) {
        click(1198, 933);
        result = checker();
    }
}

function flame2tower() {
    common.click_world_map()
    click(1627, 282)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

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

function switch_team(k) {
    click(633, 928)
    sleep(1500)
    if (k < 0) {
        k = -k;
        for (var i = 0; i < k; ++i) {
            click(783, 550)
            sleep(1000)
        }

    } else {
        for (var i = 0; i < k; ++i) {
            click(2059, 550)
            sleep(1000)
        }
    }
    click(2104, 28)
    sleep(2600)
}

// end helper func

// new helper func

function origin2relic() {
    common.click_world_map();
    click(1326, 995)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

function relic2flame() {
    common.click_world_map();
    click(1028, 182)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
    click(1233, 231)
    sleep(1000);
    while (!common.checkStanding()) sleep(1000);
    click(1317, 440)
    sleep(3500)
    // 瞎鸡儿点
    click(1463, 751)
    sleep(1100)
    // 确认宿屋，20块钱
    click(1491, 716)
    sleep(6000)
    // 恢复后的确认
    click(1236, 699)
    sleep(1600)
}


// 蜥蜴人
function fight_66_1() {
    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.all_boost()
    common.move(1, 2, false)
    common.move(3, 4, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}


// 青蛙
function fight_66_3() {
    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.move(2, 1, true)
    common.all_boost()
    common.move(1, 3, false)
    common.move(3, 4, false)
    common.move(4, 2, true)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.all_boost()
    common.start_attack(1000)

    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();

}

function fight_66_tower() {

    // 进入篝火
    move_upward()
    while (!common.checkStanding()) sleep(1000);
    click(1224, 182)
    sleep(1000)
    click(934, 710)
    while (!common.checkStanding()) sleep(1000);

    // 去frost地区
    click(1619, 225)
    sleep(5500)
    click(1513, 600)
    while (!common.checkStanding()) sleep(1000);

    // 蜥蜴人
    common.click_little_map()
    click(1058, 388)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    fight_66_1()


    // 去右边flatland
    common.click_little_map()
    click(1477, 681)
    while (!common.checkStanding()) sleep(1000);

    click(1450, 419)
    sleep(800)
    click(1544, 610)
    while (!common.checkStanding()) sleep(1000);


    // 青蛙
    common.click_little_map()
    click(1033, 422)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    fight_66_3()
}

function fight_66_wide() {
    tower2flame()
    flame2origin()

    common.click_little_map()
    click(980, 790)
    go_or_run()
    common.swipe_left()
    fight_66_1()

    origin2relic()

    common.click_little_map()
    click(893, 488)
    go_or_run()
    common.swipe_left()
    fight_66_3()

    relic2flame()
    flame2tower()
}



// main

fight_66_tower()
fight_66_wide()







