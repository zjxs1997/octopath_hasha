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
    [1058, 627],        // 天马
    [1320, 613],        // deer
    [918, 453],         // 盾斗士
    [1173, 308],        // boss
    [1632, 616],        // 下一个地方
]

frost_coordinates = [
    [1290, 687],            // 研究员1号
    [1430, 681],            // 山猪
    [1439, 534],            // 研究员2号
    [929, 376],             // 蛇鸟
    [1425, 383],            // bear
    [1193, 239],            // boss
    [1623, 688],            // 下一个地方
]

flat_coordinates = [
    [1445, 786],            // beep，野猪
    [1196, 303],            // boss
    [1647, 638],
]

coast_coordinates = [
    [890, 820],             // 海葵
    [1318, 815],            // 海胆
    [1328, 622],            // 鲸鱼
    [1037, 449],            // 飞鱼
    [1319, 449],            // 铠甲
    [1186, 263],            // boss
    [1547, 632],
]

// 平a打不动了呀
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
    [1624, 623]
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
toast("end challenge");



// ------------------------------------------------
// ------------------------------------------------


function queren() {
    click(1269, 639)
    sleep(1000)    
}
function farm() {
    // 流程：牧场
    common.click_little_map()
    click(794, 647)
    while (!common.checkStanding()) sleep(1000);
    // 草泥马1
    click(1175, 462)
    sleep(1200)
    queren()
    // 草泥马2
    click(1360, 459)
    sleep(1200)
    queren()
    // 羊1
    click(1886, 340)
    sleep(4000)
    queren()
    // 羊2
    click(1056, 419)
    sleep(2000)
    queren()
    // 羊3
    click(600, 470)
    sleep(2500)
    queren()
}

// 没问题了
farm();


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
common.click_little_map()
click(1613, 656)
while (!common.checkStanding()) sleep(1000);
//todo

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
// 瞎鸡儿点
click(1463, 751)
sleep(2000)

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
// 瞎鸡儿点
click(1463, 751)
sleep(2000)

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
// 瞎鸡儿点
click(1463, 751)
sleep(2000)

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
// 瞎鸡儿点
click(1463, 751)
sleep(2000)



// ------------------------------------------------
// ------------------------------------------------



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
            common.all_switch()
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
function fight_mountain() {
    // turn 1
    common.move(1, 2, true)
    common.move(2, 3, true)
    common.move(3, 3, false)
    common.move(4, 3, true)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    // 这里其实是想switch的，不过这样也行
    common.move(1, 2, false)
    common.move(2, 4, true)
    common.move(3, 2, true)
    common.move(4, 2, true)
    common.all_boost();
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}
function fight_dessert() {
    common.move(1, 2, true)
    common.move(2, 3, true)
    common.move(3, 3, false)
    common.move(4, 3, true)
    common.all_boost();
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}
function fight_river() {
    common.move(1, 2, true)
    common.move(2, 3, true)
    common.move(3, 2, true)
    common.move(4, 3, true)
    common.all_boost();
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}
function fight_cliff() {
    common.move(1, 2, true)
    common.move(2, 3, true)
    common.move(3, 3, false)
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
            if (cor_index == coordinates.length-1) {
                click(1450, 419)
                sleep(800)
                click(1544, 610)
                while (!common.checkStanding()) sleep(1000);
                break;
            }
            move_upward();
            while (!common.checkCombat()) sleep(1000);
            if (word_index < 4)
                fight();
            else if (word_index == 4)
                fight_mountain();
            else if (word_index == 5)
                fight_dessert();
            else if (word_index == 6)
                fight_river();
            else if (word_index == 7)
                fight_cliff();
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

function yinxue() {
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

    // 左边的草
    common.click_little_map()
    click(1057, 855)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);
    {
        // turn 1
        common.move(1, 4, false)
        common.move(2, 4, false)
        common.move(3, 3, false)
        common.move(4, 3, true)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);
        end_combat();
    }

    // 右边的猫头鹰
    // 艾维斯和姆露速度比较慢，会吃点伤害
    common.click_little_map()
    click(1292, 853)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);
    {
        // turn 1
        common.move(1, 4, false)
        common.move(2, 4, false)
        common.move(3, 3, false)
        common.move(4, 2, false)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);
        end_combat();
    }

    // 左上角的熊
    common.click_little_map()
    click(1068, 705)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);
    {
        // turn 1
        common.move(1, 2, true)
        common.move(2, 3, false)
        common.move(3, 4, false)
        common.move(4, 2, false)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 2
        common.move(1, 4, true)
        common.move(2, 3, false)
        common.move(3, 3, false)
        common.move(4, 2, false)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);
        end_combat();
    }

    // 变色龙，不知道会不会有睡眠之类的技能导致翻车
    common.click_little_map()
    click(1286, 693)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);
    {
        // turn 1
        common.all_switch()
        common.move(1, 4, false)
        common.move(2, 2, false)
        common.move(3, 2, false)
        common.move(4, 4, false)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 2
        common.move(1, 1, false)
        common.move(2, 2, false)
        common.move(3, 3, false)
        common.move(4, 3, false)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);
        end_combat();
    }

}

function bizhi() {
    // 进篝火
    move_upward()
    while (!common.checkStanding()) sleep(1000);
    click(1224, 182)
    sleep(1000)
    click(934, 710)
    while (!common.checkStanding()) sleep(1000);

    // 去forest地区
    click(844, 232)
    sleep(5500)
    click(1513, 600)
    while (!common.checkStanding()) sleep(1000);

    // 左边rat king
    common.click_little_map()
    click(1044, 836)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);
    // 有点勉强
    {
        // turn 1
        common.move(1, 2, true)
        common.move(2, 2, false)
        common.move(3, 4, false)
        common.move(4, 2, true)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);
        end_combat();
    }

    // 右边药师
    common.click_little_map()
    click(1340, 825)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);
    {
        // turn 1
        common.move(1, 3, false)
        common.move(2, 3, true)
        common.move(3, 3, true)
        common.move(4, 1, true)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);
        end_combat();
    }

    // 右上角剑士
    common.click_little_map()
    click(1322, 642)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);
    {
        // turn 1
        common.move(1, 2, false)
        common.move(2, 4, false)
        common.move(3, 3, true)
        common.move(4, 4, false)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 2
        common.move(1, 2, true)
        common.move(2, 4, false)
        common.move(3, 3, false)
        common.move(4, 4, false)
        common.all_boost();
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);
        end_combat();
    }

    // 左边 rat king
    common.click_little_map()
    click(1015, 642)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);
    {
        // turn 1
        common.move(1, 2, false)
        common.move(2, 4, false)
        common.move(3, 3, false)
        common.move(4, 4, false)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 2
        common.move(1, 2, true)
        common.move(2, 4, false)
        common.move(3, 3, false)
        common.move(4, 3, false)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);
        end_combat();
    }

    // 左边虫子
    common.click_little_map()
    click(866, 637)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);
    {
        // turn 1
        common.move(1, 3, false)
        common.all_boost()
        common.move(3, 3, false)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 2
        common.move(1, 2, true)
        common.move(2, 2, false)
        common.move(3, 4, false)
        common.move(4, 2, true)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);
        end_combat();
    }
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
    while (!common.checkCombat()) sleep(1000);
    {
        // turn 1
        common.move(1, 3, true)
        common.move(2, 4, true)
        common.move(3, 3, false)
        common.move(4, 2, false)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 2
        common.move(1, 4, false)
        common.move(2, 4, false)
        common.move(3, 3, false)
        common.move(4, 3, false)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);
        end_combat();
    }

    // 右边的盗贼
    common.click_little_map()
    click(1424, 849)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);
    {
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

    // 右边的熊
    common.click_little_map()
    click(1416, 697)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);
    {
        // turn 1
        common.move(1, 4, false)
        common.move(2, 3, true)
        common.move(3, 3, true)
        common.move(4, 2, false)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 2
        common.move(1, 4, false)
        common.move(2, 2, false)
        common.all_boost()
        common.move(3, 4, false)
        common.move(4, 2, true)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 3
        common.move(1, 4, true)
        common.move(2, 3, true)
        common.move(3, 4, false)
        common.move(4, 2, false)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);
        end_combat();
    }

    // 左边的马
    common.click_little_map()
    click(932, 695)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);
    {
        // turn 1
        common.move(1, 4, false)
        common.move(2, 4, true)
        common.move(3, 3, false)
        common.move(4, 3, true)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 2
        common.move(2, 4, false)
        common.move(3, 3, false)
        common.move(4, 3, true)
        common.all_boost()
        common.move(1, 4, false)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 3
        common.move(1, 2, false)
        common.move(2, 3, true)
        common.move(3, 3, false)
        common.move(4, 3, false)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);
        end_combat();
    }
}


// 流程：篝火2

tower2flame();
flame2tower();

switch_team(-1);

shayan();

tower2flame();
flame2tower();

switch_team(2);

xishui();

tower2flame();
flame2tower();

switch_team(2);

bingjin();

tower2flame();
flame2tower();

switch_team(1);

yinxue();

tower2flame();
flame2tower();

switch_team(2);

bizhi();





// ------------------------------------------------
// ------------------------------------------------




// 流程：回到无名小镇
common.click_world_map()
click(1230, 641);
sleep(1400)
// 到这里去
click(1870, 905)
sleep(1300)
// fast travel的确认
click(1432, 695)
while (!common.checkStanding()) sleep(1000);

// 流程：去画家老婆房里。。。
common.click_little_map()
click(1387, 467)
while (!common.checkStanding()) sleep(1000);


// 流程：完了，震动提示
device.vibrate(1000)



