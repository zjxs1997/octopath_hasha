

auto();

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

var common = require("lib.js");

// 初始的时候在塔里面，第一个队伍是冰晶



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

function move_upward() {
    swipe(1645, 849, 1645, 200, 2000)
}

function switch_team(k) {
    sleep(500)
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

// ------------------------
// end helper functions
// ------------------------


// -------------------------------------------------------
// --------------------- 70系列  ---------------------
// -------------------------------------------------------


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

// -------------------------------------------------------
// --------------------- 70系列 end ---------------------
// -------------------------------------------------------


// -------------------------------------------------------
// --------------------- 69系列  ---------------------
// -------------------------------------------------------

function fight_69_1() {
    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.move(1, 4, false)
    common.move(2, 2, true)
    common.move(3, 3, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();


}

function fight_69_2() {
    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.move(1, 3, false)
    common.move(2, 2, false)
    common.move(3, 3, true)
    common.move(4, 2, true)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}

function fight_69_3() {
    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.move(1, 2, false)
    common.move(2, 2, true)
    common.move(4, 2, true)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}


function fight_69_4() {
    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.move(1, 4, false)
    common.move(2, 3, false)
    common.move(3, 3, false)
    common.move(4, 3, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}


function fight_69_tower() {
    // 进入篝火
    move_upward()
    while (!common.checkStanding()) sleep(1000);
    click(1224, 182)
    sleep(1000)
    click(934, 710)
    while (!common.checkStanding()) sleep(1000);

    // 去海滩地区
    common.click_little_map();
    click(1552, 640)
    while (!common.checkStanding()) sleep(1000);
    click(1438, 432)
    sleep(1000)
    click(1513, 600)
    while (!common.checkStanding()) sleep(1000);

    // 左下
    common.click_little_map()
    click(1060, 543)
    while (!common.checkStanding()) sleep(1000);
    move_upward()
    fight_69_1()

    // 右下
    common.click_little_map()
    click(1293, 531)
    while (!common.checkStanding()) sleep(1000);
    move_upward()
    fight_69_2()

    // 左上
    common.click_little_map()
    click(1046, 380)
    while (!common.checkStanding()) sleep(1000);
    move_upward()
    fight_69_3()


    common.click_little_map()
    click(1300, 379)
    while (!common.checkStanding()) sleep(1000);
    move_upward()
    fight_69_4()
}


// -------------------------------------------------------
// --------------------- 69系列 end ---------------------
// -------------------------------------------------------







// 冒险家
function goto_colab(floor) {
    common.click_little_map()
    click(957, 424)
    while (!common.checkStanding()) sleep(1000);

    common.click_little_map()
    click(1041, 365)
    while (!common.checkStanding()) sleep(1000);

    common.click_little_map()
    click(1300, 691)
    while (!common.checkStanding()) sleep(1000);

    click(977, 430)
    sleep(1000)
    // if (floor == 2)
    //     click(1504, 525)
    // else if (floor == 3)
    click(1013, 660)
    sleep(500)
    while (!common.checkStanding()) sleep(1000);
}

function fight_colab() {
    goto_colab()

    common.click_little_map()
    click(1639, 300)
    go_or_run()
    // 挑战
    click(1407, 506)
    sleep(1000)
    // 右下角聞き出す
    click(2104, 901)
    sleep(3400)
    // 勝ち取る
    click(1824, 399)
    sleep(1600)
    // 确认危险度等
    click(1479, 826)
    sleep(1600)
    // 确认关系
    click(1463, 751)
    sleep(3400)
    // 瞎鸡儿点，一般这个时候是对话
    click(1463, 751)


    // fight 冒险家
    while (!common.checkCombat()) sleep(1000);

    // todo
    // turn 1
    common.move(3, 4, false)
    common.move(4, 5, true)
    common.all_boost()
    common.move(1, 4, false)
    common.move(2, 4, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.move(4, 3, true)
    common.all_boost()
    common.fight(1, 3, false, 2)
    common.fight(2, 2, false, 2)
    common.move(3, 2, true)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 3
    common.move(3, 4, true)
    common.move(4, 0, true)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 4
    common.move(2, 2, false)
    common.all_boost()
    common.move(4, 5, true)
    common.fight(3, 2, true, 4)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 5
    common.move(4, 1, false)
    common.all_boost()
    common.move(1, 4, false)
    common.move(2, 4, false)
    common.move(3, 4, true)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 6
    common.move(3, 4, false)
    common.move(4, 5, true)
    common.all_boost()
    common.move(1, 4, false)
    common.move(2, 4, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 7
    common.move(2, 0, false)
    common.move(3, 4, true)
    common.all_boost()
    common.move(4, 5, true)
    common.start_attack(1000)
    var res = checker();
    if (res == 2) {
        end_combat();
        return;
    }

    // turn 8
    common.move(2, 4, false)
    common.move(3, 4, true)
    common.start_attack(1000)
    var res = checker();
    if (res == 1) {
        // turn 9
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);
    }
    end_combat();
}









// ------------------------
// 正式开始
// ------------------------


// 70
fight_70_tower()
tower2flame();
flame2tower();


// 69
switch_team(1)
fight_69_tower()
tower2flame();
flame2tower();

// 冒险家
switch_team(-4)
fight_colab()
click(1463, 751)
sleep(2000)
// 确认
click(1269, 641)
sleep(1000)
// 右上角叉叉
click(2104, 28)
sleep(2600)
