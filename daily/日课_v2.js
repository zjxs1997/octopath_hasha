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
    [1029, 618],            // grape thief
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
// ------------------------------------------------




function challenge() {
    // 流程：挑战
    click(324, 539);
    sleep(3000);
    // 右下角聞き出す
    click(2104, 901)
    sleep(3400)
    // 改成勝ち取る
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
    while (!common.checkCombat()) sleep(1000);
    common.all_boost();
    common.start_attack(1000)
    while (!common.checkCombatEnd())
        sleep(1000);
    // 战斗结束
    end_combat();
    // 瞎鸡儿点
    click(1463, 751)
    sleep(2000)
    // todo，可能不准
    // 确认
    click(1269, 641)
    sleep(1000)
    // 右上角叉叉
    click(2104, 28)
    sleep(2600)
}

challenge();



// ------------------------------------------------
// ------------------------------------------------


function queren() {
    click(1269, 639)
    sleep(1000)
}
function shit_farm() {
    // 流程：牧场
    // 位置完全不一样了，得重写
    common.click_little_map()
    click(794, 647)
    while (!common.checkStanding()) sleep(1000);
    // 羊1
    click(1180, 480)
    sleep(1200)
    queren()
    // 草泥马1
    click(1366, 446)
    sleep(1200)
    queren()
    // 草泥马2
    click(2100, 518)
    sleep(4200)
    queren()
    // 羊2
    click(1340, 299)
    sleep(2500)
    queren()
    // 草泥马3
    click(1056, 419)
    sleep(2000)
    queren()
    // 羊3
    click(600, 470)
    sleep(2500)
    queren()
}

// 没问题了
shit_farm();


// ------------------------------------------------
// ------------------------------------------------



function buy() {
    // 流程：购买
    common.click_little_map()
    click(1305, 537)
    while (!common.checkStanding()) sleep(1000);

    click(1750, 565);
    sleep(3000);
    // 右下角聞き出す
    click(2104, 901)
    sleep(3400)
    click(1820, 427);
    sleep(1600)
    click(1283, 823)
    sleep(1600)
    click(1463, 751)
    sleep(3400)
    // 瞎鸡儿点，一般这个时候是对话
    click(1463, 751)
    sleep(5700)
    queren()
    click(2104, 28)
    sleep(1900)
}

// 大概也没问题了
buy();



// ------------------------------------------------
// ------------------------------------------------




function nuts() {
    // 流程：坚果田
    common.click_little_map()
    click(1540, 447)
    while (!common.checkStanding()) sleep(1000);
    click(1585, 504)
    sleep(2500)
    click(1265, 630);
    sleep(1000)

    click(1523, 572)
    sleep(2500)
    click(1265, 630);
    sleep(1000)

    click(1523, 572)
    sleep(2500)
    click(1265, 630);
    sleep(1000)
}

// 这个函数也没问题
nuts();


// ------------------------------------------------
// ------------------------------------------------



// 流程：无名荒野
function wild() {

    common.click_little_map()
    click(1613, 656)
    while (!common.checkStanding()) sleep(1000);

    // 左上角乌龟
    common.click_little_map()
    click(1107, 200)
    while (!common.checkStanding()) sleep(1000);
    swipe(674, 589, 1548, 589, 2000)
    while (!common.checkCombat()) sleep(1000);
    common.all_boost();
    common.start_attack(1000)
    while (!common.checkCombatEnd())
        sleep(1000);
    end_combat();

    // 上方狼
    common.click_little_map()
    click(1224, 234)
    while (!common.checkStanding()) sleep(1000);
    swipe(1548, 589, 674, 590, 2000)
    while (!common.checkCombat()) sleep(1000);
    common.all_boost();
    common.start_attack(1000)
    while (!common.checkCombatEnd())
        sleep(1000);
    end_combat();

    // 下方树
    common.click_little_map()
    click(1546, 734)
    while (!common.checkStanding()) sleep(1000);
    swipe(674, 589, 1548, 589, 2000)
    while (!common.checkCombat()) sleep(1000);
    common.all_boost();
    common.start_attack(1000)
    while (!common.checkCombatEnd())
        sleep(1000);
    end_combat();

    // 右边树2
    common.click_little_map()
    click(1599, 430)
    while (!common.checkStanding()) sleep(1000);
    swipe(925, 708, 300, 708, 2000)
    while (!common.checkCombat()) sleep(1000);
    common.all_boost();
    common.start_attack(1000)
    while (!common.checkCombatEnd())
        sleep(1000);
    end_combat();
}

wild();



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

function go_or_run() {
    var result = checker();
    while (result == 1) {
        click(1198, 933);
        result = checker();
    }
}



// 流程：追忆之塔
common.click_world_map()
click(1153, 455)
sleep(1400)
// 到这里去
click(1870, 905)
sleep(1300)
// fast travel的确认
click(1432, 695)
while (!common.checkStanding()) sleep(1000);

// 流程：开打塔

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
    if (cor_index == 0) {
        // grape thief
        common.move(1, 3, true)
        common.move(2, 2, false)
        common.move(3, 3, true)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);
        end_combat();
        return;
    }

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





// -------------------------------------------------------
// ----------------------- 砂岩系列 -----------------------
// -------------------------------------------------------

// 暴徒
function shayan1() {
    while (!common.checkCombat()) sleep(1000);
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

// 魔导机
function shayan2() {
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.move(1, 4, false)
    common.move(2, 2, false)
    common.move(3, 4, true)
    common.move(4, 2, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.move(3, 3, false)
    common.move(4, 2, true)
    common.all_boost();
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);

    end_combat();
}

// 魔导机兵
function shayan3() {
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.move(4, 3, true)
    common.all_boost();
    common.move(1, 2, true)
    common.move(2, 4, true)
    common.move(3, 4, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.move(2, 3, false)
    common.move(4, 4, true)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 3
    common.move(1, 3, false)
    common.move(2, 2, false)
    common.move(3, 2, false)
    common.all_boost();
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);

    end_combat()
}

// 魔导飞机
function shayan4() {
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.move(1, 4, false)
    common.move(2, 2, false)
    common.move(3, 4, false)
    common.move(4, 2, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.move(4, 3, false)
    common.all_boost()
    common.move(1, 3, false)
    common.move(2, 2, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 3
    common.move(3, 3, true)
    common.move(4, 2, true)
    common.all_boost();
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);

    end_combat()
}

// 这个在测试的时候shayan3不知道出了什么问题，技能没点对。。。
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

    // 左下角暴徒
    common.click_little_map()
    click(903, 785);
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    shayan1();

    // 右下角魔导机
    common.click_little_map()
    click(1306, 774)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    shayan2();

    // // 右上角魔导机兵
    // common.click_little_map()
    // click(1314, 614)
    // while (!common.checkStanding()) sleep(1000);
    // move_upward();
    // shayan3();

    // 左上角魔导飞机
    common.click_little_map()
    click(916, 621)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    shayan4()

}

function tower2sand() {
    common.click_world_map()
    common.click_map_shrink()
    click(1458, 969)
    sleep(1000)
    click(826, 762)
    sleep(1000)
    click(1331, 909)
    sleep(1000)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
    click(1249, 283)
    sleep(1000);
    while (!common.checkStanding()) sleep(1000);
    click(1396, 389)
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

function sand2palace() {
    common.click_world_map()
    click(1333, 450)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

function palace2sand() {
    common.click_world_map()
    click(1183, 596)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
    click(1249, 283)
    sleep(1000);
    while (!common.checkStanding()) sleep(1000);
    click(1396, 389)
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

function sand2tower() {
    common.click_world_map()
    common.click_map_shrink()
    click(1504, 191)
    sleep(1600)
    click(1289, 365)
    sleep(1600)
    click(1003, 140)
    sleep(1600)
    click(1247, 524)
    click(1247, 524)
    sleep(1600)
    click(1256, 406)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

function shayan_wide() {
    tower2sand();
    sand2palace();

    // 魔导机
    common.click_little_map()
    click(759, 766)
    go_or_run();
    swipe(1548, 589, 674, 589, 2000)
    shayan2()

    // 暴徒
    common.click_little_map()
    click(832, 248)
    go_or_run();

    common.click_little_map()
    click(877, 414)
    go_or_run();

    common.click_little_map();
    click(1423, 600)
    go_or_run();
    swipe(674, 589, 1548, 589, 2000)
    shayan1();

    // // 魔导机兵
    // common.return_to_hotel_door()

    // common.click_little_map()
    // click(1577, 584)
    // go_or_run();

    // common.click_little_map()
    // click(1281, 615)
    // go_or_run()

    // common.click_little_map()
    // click(1524, 473)
    // go_or_run()

    // common.click_little_map()
    // click(1378, 382)
    // go_or_run()

    // common.click_little_map()
    // click(1089, 652)
    // go_or_run()
    // swipe(1548, 589, 674, 589, 2000)

    // shayan3();

    // 魔导飞机
    common.return_to_hotel_door()

    common.click_little_map()
    click(1295, 613)
    go_or_run()

    common.click_little_map()
    click(1607, 906)
    go_or_run()

    common.click_little_map()
    click(1227, 510)
    go_or_run()
    swipe(1738, 700, 1738, 200, 2000)

    shayan4()

    palace2sand();
    sand2tower();
}

// -------------------------------------------------------
// --------------------- 砂岩系列 end ---------------------
// -------------------------------------------------------







// -------------------------------------------------------
// ----------------------- 66系列 -----------------------
// -------------------------------------------------------



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
    if (floor == 2)
        click(1504, 525)
    else if (floor == 3)
        click(1013, 660)
    sleep(500)
    while (!common.checkStanding()) sleep(1000);
}

function fight_colab() {
    common.return_to_hotel_door()
    goto_colab(2)

    common.click_little_map()
    click(1117, 920)
    go_or_run()
    common.swipe_down()
    while (!common.checkStanding()) sleep(1000);

    common.click_little_map()
    click(807, 596)
    go_or_run()

    common.click_little_map()
    click(1576, 296)
    go_or_run()
    common.swipe_up()

    // fight ntr with 66
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.move(1, 2, false)
    common.move(4, 4, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}

// fight boss
function fight_tiger() {
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


    common.click_little_map()
    click(1192, 245)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);
    sleep(1000);

    // fight start
    // turn 1
    common.move(4, 2, false)
    common.all_boost()
    common.move(1, 3, false)
    common.move(2, 2, false)
    common.move(3, 2, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.move(4, 1, true)
    common.all_boost()
    common.move(1, 3, false)
    common.move(2, 2, false)
    common.move(3, 2, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 3
    common.move(4, 3, true)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 4
    common.move(4, 1, true)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 5
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);

    end_combat()
}

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


function fight_66_cat() {
    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);


    // turn 2
    common.all_switch()
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);


    // turn 3
    common.all_switch()
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 4
    common.all_switch()
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();

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

// 魔导机兵
function fight_66_2() {
    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.all_boost()
    common.move(1, 2, false)
    common.move(3, 4, true)
    common.move(4, 2, true)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);


    // turn 2
    common.move(2, 4, false)
    common.move(4, 4, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);


    // turn 3
    common.move(4, 4, true)
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

function fight_66_4() {
    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.all_boost()
    common.move(1, 3, false)
    common.move(3, 4, false)
    common.move(4, 2, true)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);


    // turn 2
    common.move(2, 3, true)
    common.move(4, 4, true)
    common.start_attack(1000)

    while (!common.checkCombat()) sleep(1000);


    // turn 3
    common.move(2, 2, false)
    common.move(3, 2, false)
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


    // 魔导机兵
    common.click_little_map()
    click(1273, 380)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    fight_66_2()

    // 猫
    common.click_little_map()
    click(938, 543)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    fight_66_cat()



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


    // 双头蛇
    common.click_little_map()
    click(1325, 432)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    fight_66_4()
}

function fight_66_wide() {
    tower2flame()
    flame2origin()

    common.click_little_map()
    click(980, 790)
    go_or_run()
    common.swipe_left()
    fight_66_1()

    common.click_little_map()
    click(973, 589)
    go_or_run()
    common.swipe_left()
    fight_66_2()


    origin2relic()

    common.click_little_map()
    click(893, 488)
    go_or_run()
    common.swipe_left()
    fight_66_3()

    common.click_little_map()
    click(1454, 657)
    go_or_run()
    common.swipe_left()
    fight_66_4()

    relic2flame()
    flame2tower()
}


// -------------------------------------------------------
// --------------------- 66系列 end ---------------------
// -------------------------------------------------------


// -------------------------------------------------------
// ----------------------- 珊瑚系列 -----------------------
// -------------------------------------------------------



// 鼻涕虫
function shanhu1() {
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.all_switch()
    common.move(1, 2, false)
    common.move(2, 3, true)
    common.move(3, 3, false)
    common.move(4, 4, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.move(2, 4, false)
    common.move(4, 2, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat()
}

// 骨头
function shanhu2() {
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.all_switch()
    common.move(1, 4, false)
    common.move(2, 4, false)
    common.move(3, 3, false)
    common.move(4, 4, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.move(2, 2, false)
    common.move(3, 3, true)
    common.move(4, 2, true)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat()
}

// 古代遗物
function shanhu3() {
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.move(1, 4, true)
    common.move(2, 3, false)
    common.move(3, 4, false)
    common.move(4, 3, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.move(1, 2, false)
    common.move(4, 4, true)
    common.move(3, 3, false)
    common.all_boost()
    common.move(2, 4, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 3
    common.move(4, 2, true)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat()
}

// 铠甲
function shanhu4() {
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.move(1, 3, false)
    common.move(2, 3, false)
    common.move(3, 3, true)
    common.move(4, 3, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.move(1, 2, true)
    common.move(4, 4, true)
    common.all_boost()
    common.move(2, 4, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 3
    common.move(1, 3, true)
    common.move(4, 2, true)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat()
}


function shanhu() {
    // 进篝火
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

    // 左下角骨头
    common.click_little_map()
    click(922, 861);
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    shanhu2();

    // 右下鼻涕虫
    common.click_little_map()
    click(1316, 862)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    shanhu1();

    // 右上角古代
    common.click_little_map()
    click(1299, 686)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    shanhu3();

    // 左上角铠甲
    common.click_little_map()
    click(921, 700)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    shanhu4();
}

function tower2port() {
    common.click_world_map()
    common.click_map_shrink()
    click(1460, 959)
    sleep(1600)
    click(1247, 524)
    click(1247, 524)
    sleep(1600)
    common.click_map_shrink()
    click(2085, 329)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);

    // 进入旅店
    click(1236, 323)
    sleep(1000)
    while (!common.checkStanding()) sleep(1000)
    // 旅店柜台
    click(1360, 447)
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

function port2sewer() {
    common.click_world_map()
    click(1210, 386)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

function sewer2port() {
    common.click_world_map()
    click(1259, 657)
    sleep(1200)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000)

    // 进入旅店
    click(1236, 323)
    sleep(1000)
    while (!common.checkStanding()) sleep(1000)
    // 旅店柜台
    click(1360, 447)
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

function port2tower() {
    common.click_world_map()
    common.click_map_shrink()
    click(523, 331)
    sleep(1600)
    click(1247, 524)
    click(1247, 524)
    sleep(1600)
    click(1256, 406)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

// not tested yet
function shanhu_wide() {
    tower2port()
    port2sewer();

    // 鼻涕虫
    common.click_little_map()
    click(1364, 378)
    go_or_run()
    common.swipe_right()
    shanhu1()


    // 古代遗物？
    common.click_little_map()
    click(676, 599)
    go_or_run()
    common.swipe_left()
    shanhu3()

    common.click_little_map()
    click(693, 451)
    go_or_run()

    //骨头
    common.click_little_map()
    click(1546, 556)
    go_or_run()
    common.swipe_left()
    shanhu2()

    // 铠甲
    common.click_little_map()
    click(1305, 587)
    go_or_run()
    common.swipe_left()
    shanhu4()

    sewer2port()
    port2tower()
}

// -------------------------------------------------------
// --------------------- 珊瑚系列 end ---------------------
// -------------------------------------------------------


// -------------------------------------------------------
// ----------------------- 冰晶系列 -----------------------
// -------------------------------------------------------

// 山贼
function bingjin1() {
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.move(1, 3, true)
    common.move(2, 4, true)
    common.move(3, 3, false)
    common.move(4, 2, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.move(1, 4, false)
    common.move(4, 3, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}

// 盗贼
function bingjin2() {
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.move(1, 3, true)
    common.move(2, 4, true)
    common.move(3, 3, false)
    common.move(4, 2, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.move(1, 4, false)
    common.move(2, 3, true)
    common.move(3, 4, true)
    common.move(4, 3, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}

function bingjin() {
    // 进篝火
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

    // 左边的山贼
    common.click_little_map()
    click(943, 855)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    bingjin1()


    // 右边的盗贼
    common.click_little_map()
    click(1424, 849)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    bingjin2();

}

function flame2titus() {
    common.click_world_map()
    click(1333, 127)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

function titus2flame() {
    common.click_world_map()
    click(1126, 939)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000)
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

function bingjin_wide() {
    tower2flame()
    flame2titus()

    // 山贼
    common.click_little_map()
    click(1069, 376)
    go_or_run()

    common.click_little_map()
    click(865, 620)
    go_or_run()

    common.click_little_map()
    click(1184, 437)
    go_or_run()
    common.swipe_up()
    bingjin1()

    // 盗贼
    common.click_little_map()
    click(1161, 736)
    go_or_run()

    common.click_little_map()
    click(1558, 315)
    go_or_run()

    common.click_little_map()
    click(1446, 243)
    go_or_run()

    common.click_little_map()
    click(1602, 505)
    go_or_run()

    common.click_little_map()
    click(1281, 551)
    go_or_run()

    common.click_little_map()
    click(1045, 193)
    go_or_run()
    common.swipe_right()
    bingjin2()

    titus2flame()
    flame2tower()
}

// -------------------------------------------------------
// --------------------- 冰晶系列 end ---------------------
// -------------------------------------------------------



// 流程：篝火2
// 先回复一个
tower2flame();
flame2tower();

// 64
switch_team(2);
shayan();
// shayan_wide();
tower2flame();
flame2tower();

// 66
switch_team(2)
fight_66_tower()
fight_66_wide()
fight_colab();
tower2flame()
flame2tower()

// 66 boss
switch_team(1);
fight_tiger()
tower2flame()
flame2tower()

// 63
// switch_team(1);
// bingjin();
// bingjin_wide();

// 65
switch_team(3);
shanhu();
// shanhu_wide();




// ------------------------------------------------
// ------------------------------------------------

function flame2town() {
    common.click_world_map();
    click(1602, 418)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

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

// 流程：回到无名小镇
tower2flame();
sell_in_flame();
flame2town();

// 流程：去画家老婆房里。。。
common.click_little_map()
click(1387, 467)
while (!common.checkStanding()) sleep(1000);


// 流程：完了，震动提示
device.vibrate(1000)



