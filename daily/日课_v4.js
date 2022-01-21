// 无名小镇日课脚本
// 没有打讨伐，没有去商店卖材料，没有骗到素材，没有交易所
// 无名荒野似乎没有问题了，但是前面的部分还需要debug

// tobe debug

auto();

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

var common = require("lib.js");

// 初始时，在无名小镇传送点


forest_coordinates = [
    [1173, 308],        // boss
    [1632, 616],        // 下一个地方
]

frost_coordinates = [
    [1193, 239],            // boss
    [1623, 688],            // 下一个地方
]

flat_coordinates = [
    [1196, 303],            // boss
    [1647, 638],
]

coast_coordinates = [
    [1186, 263],            // boss
    [1547, 632],
]

mountain_coordinates = [
    [1186, 253],            // boss
    [1551, 628],            // next
]

sun_coordinates = [
    [1168, 280],
    [1370, 630]
]

river_coordinates = [
    [1192, 233],
    [1454, 703]
]

cliff_coordinates = [
    [1175, 292],
    [1175, 292]
]

all_coordinates = [
    forest_coordinates,
    frost_coordinates,
    flat_coordinates,
    coast_coordinates,
    mountain_coordinates,
    sun_coordinates,
    river_coordinates,
    cliff_coordinates,
]



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


// ------------------------------------------------
// item收集者
// ------------------------------------------------
common.click_world_map()
// 从塔里看小镇的坐标
click(1224, 630)
sleep(800)
// item回收按钮的坐标
click(1692, 920)
sleep(800)
// 顺便去小镇的坐标是：1988, 915
// 这里记一下，免得以后重新测
click(1473, 847)
sleep(800)
click(1288, 787)
sleep(800)
click(2063, 68)
sleep(800)




// ------------------------------------------------
// ------------------------------------------------



function checker() {
    while (1) {
        if (common.checkCombatEnd()) return 2;
        if (common.checkCombat()) return 1;
        if (common.checkStanding()) return 0;
        sleep(3000);
    }
}

// 流程：追忆之塔

function move_upward() {
    swipe(1645, 849, 1645, 200, 2000)
}

// 平a打怪
function fight() {
    while (1) {
        if (common.checkCombat()) {
            common.all_boost()
            // attack
            click(2020, 929)
        }
        if (common.checkCombatEnd()) {
            end_combat();
            return;
        }
        sleep(1000);
    }
}
//  to be tested
function fight_mountain(cor_index) {

    // boss
    common.move(1, 2, false)
    common.move(2, 3, false)
    common.move(3, 4, false)
    common.move(4, 4, true)
    common.all_boost()
    common.start_attack(1000)
    var res = checker();
    if (res == 1) {
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);
    }
    end_combat();
}
function fight_dessert() {
    common.move(1, 2, true)
    common.move(2, 2, false)
    common.move(3, 3, true)
    common.move(4, 4, true)
    common.all_boost();
    common.start_attack(1000)
    var res = checker();
    if (res == 1) {
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);
    }
    end_combat();
}
function fight_river() {
    common.move(1, 2, false)
    common.move(2, 2, false)
    common.move(3, 4, false)
    common.move(4, 2, false)
    common.all_boost();
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}
function fight_cliff() {
    common.move(1, 3, true)
    common.move(2, 3, false)
    common.move(3, 4, false)
    common.move(4, 2, false)
    common.all_boost();
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}


function do_tower() {
    // 进篝火
    move_upward()
    while (!common.checkStanding()) sleep(1000);
    click(1224, 182)
    sleep(1000)
    click(1540, 526)
    while (!common.checkStanding()) sleep(1000);

    // 去森林
    click(839, 221)
    sleep(5000)
    click(1513, 600)
    while (!common.checkStanding()) sleep(1000);

    // 开始循环
    for (var word_index = 0; word_index < all_coordinates.length; ++word_index) {
        coordinates = all_coordinates[word_index];
        for (var cor_index = 0; cor_index < coordinates.length; ++cor_index) {
            var x = coordinates[cor_index][0];
            var y = coordinates[cor_index][1];
            common.click_little_map();
            click(x, y);
            while (!common.checkStanding()) sleep(1000);
            if (cor_index == coordinates.length - 1) {
                if (word_index == all_coordinates.length - 1)
                    break;
                click(1450, 419)
                sleep(800)
                click(1544, 610)
                while (!common.checkStanding()) sleep(1000);
                break;
            }
            move_upward();
            while (!common.checkCombat()) sleep(1000);
            if (word_index == 4)
                fight_mountain(cor_index);
            else if (word_index == 5)
                fight_dessert();
            else if (word_index == 6 && cor_index == 0)
                fight_river();
            else if (word_index == 7 && cor_index == 0)
                fight_cliff();
            else
                fight()
        }
    }
}


do_tower();


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


// ------------------------------------------------
// ------------------------------------------------

function sell_in_flame() {
    common.click_little_map();
    click(1084, 652)
    sleep(1000);
    while (!common.checkStanding()) sleep(1000);

    common.click_little_map()
    click(1240, 678)
    sleep(1000);
    while (!common.checkStanding()) sleep(1000);

    click(1464, 367)
    sleep(2500)
    click(1464, 367)
    sleep(2500)
    click(1464, 367)
    sleep(2500)
    // 卖出东西了，点ok
    click(1266, 919)
    sleep(2500)
    click(2081, 67)
    sleep(1500)
}


tower2flame();
sell_in_flame();
flame2tower();
