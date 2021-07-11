// 等几天测试一下塔2脚本，然后加入到日课脚本里


auto()

var common = require("lib.js");

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
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



function shayan() {
    // 进篝火
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
    
    // 左下角
    common.click_little_map()
    click(903, 785);
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);

    {
        // turn 1
        common.move(2, 1, true)
        common.all_boost();
        common.move(3, 4, false)
        common.move(4, 2, false)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 2
        common.move(3, 3, true)
        common.move(4, 2, true)
        common.all_boost();
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);

        end_combat();
    }

    // 右下角
    common.click_little_map()
    click(1306, 774)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);

    {
        // turn 1
        common.move(1, 4, false)
        common.move(2, 2, false)
        common.move(3, 4, true)
        common.move(4, 2, false)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 2
        common.move(1, 4, false)
        common.move(2, 2, false)
        common.move(3, 3, false)
        common.move(4, 2, true)
        common.all_boost();
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);

        end_combat();
    }

    // 右上角
    common.click_little_map()
    click(1314, 614)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);

    {
        // turn 1
        common.move(4, 3, true)
        common.all_boost();
        common.move(1, 2, true)
        common.move(2, 4, true)
        common.move(3, 4, false)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 2
        common.move(1, 2, false)
        common.move(2, 3, false)
        common.move(3, 4, false)
        common.move(4, 4, true)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 3
        common.move(1, 3, false)
        common.move(2, 2, false)
        common.move(3, 2, false)
        common.move(4, 4, false)
        common.all_boost();
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);

        end_combat()
    }

    // 左上角
    common.click_little_map()
    click(916, 621)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);

    {
        // turn 1
        common.move(1, 4, false)
        common.move(2, 2, false)
        common.move(3, 4, false)
        common.move(4, 2, false)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 2
        common.move(3, 4, false)
        common.move(4, 3, false)
        common.all_boost()
        common.move(1, 3, false)
        common.move(2, 2, false)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 3
        common.move(1, 3, false)
        common.move(2, 2, false)
        common.move(3, 3, true)
        common.move(4, 2, true)
        common.all_boost();
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);

        end_combat()
    }
}


function xishui() {
    // 进篝火
    move_upward()
    while (!common.checkStanding()) sleep(1000);
    click(1224, 182)
    sleep(1000)
    click(934, 710)
    while (!common.checkStanding()) sleep(1000);
    
    // 去河流地区
    common.click_little_map();
    click(805, 638)
    while (!common.checkStanding()) sleep(1000);
    click(1049, 441)
    sleep(1000)
    click(1513, 600)
    while (!common.checkStanding()) sleep(1000);

    // 右下角小青蛙
    common.click_little_map()
    click(1320, 827)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);

    {
        // turn 1
        common.move(1, 2, false)
        common.move(2, 2, false)
        common.move(3, 4, false)
        common.move(4, 4, false)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 2
        common.move(1, 4, false)
        common.move(2, 3, false)
        common.move(3, 3, false)
        common.move(4, 4, false)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);

        end_combat()
    }

    // 右边大青蛙
    common.click_little_map()
    click(1327, 632)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);

    {
        // turn 1
        common.move(1, 2, false)
        common.move(2, 2, false)
        common.move(3, 4, false)
        common.move(4, 4, false)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 2
        common.move(1, 1, false)
        common.move(2, 3, false)
        common.move(4, 4, false)
        common.all_boost()
        // 这个大概写错了。。。
        common.move(3, 4, false)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 3
        common.move(1, 3, true)
        common.move(2, 3, false)
        common.move(3, 3, false)
        common.move(4, 4, true)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);

        end_combat()
    }

    // 左边蜗牛
    common.click_little_map()
    click(860, 632)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);

    {
        // turn 1
        common.move(1, 2, false)
        common.move(2, 3, true)
        common.move(3, 3, true)
        common.move(4, 2, true)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 2
        common.move(1, 3, false)
        common.move(2, 3, false)
        common.move(3, 4, false)
        common.move(4, 2, false)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);

        end_combat()
    }


}


// 经测试，除了两个主流程函数，都没问题了
// main，初始时在塔刚刚进来的时候

switch_team(-1);

shayan();

tower2flame();
flame2tower();

switch_team(2);

xishui();



