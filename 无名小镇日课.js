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
    [769, 453],         // 蘑菇
    [918, 453],         // 盾斗士
    [1173, 308],        // boss
    [1632, 616],        // 下一个地方
]

frost_coordinates = [
    [1060, 840],            // 狐狸1号
    [1290, 687],            // 研究员1号
    [1430, 681],            // 山猪
    [1439, 534],            // 研究员2号
    [929, 376],             // 蛇鸟
    [1051, 379],            // 狐狸2号
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
    [1551, 628],            // next
]

sun_coordinates = [
    [1370, 630]
]

river_coordinates = [
    [1454, 703]
]

cliff_coordinates = [
    [1624, 623]
]

all_coordinates = [
    forest_coordinates,
    frost_coordinates,
    flat_coordinates,
    coast_coordinates,
    // mountain_coordinates,
    // sun_coordinates,
    // river_coordinates,
    // cliff_coordinates,
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
            fight();
        }
    }
}


// 追忆塔平a还得测试
do_tower();



// common.return_to_hotel_door();
// 如果要插入篝火2的脚本，在下面：





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



