auto()


var common = require("lib.js");

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

forest_coordinates = [
    [1058, 627],        // 天马
    [1320, 613],        // 不知道是啥
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
            // 瞎鸡儿点
            click(1463, 751)
            sleep(1500)
            // 瞎鸡儿点
            click(1463, 751)
            sleep(1500)
            // 瞎鸡儿点
            click(1463, 751)
            sleep(5600)
            return;
        }
        sleep(1000);
    }
}


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


