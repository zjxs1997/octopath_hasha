// 新地图刷素材脚本

// 开局需要在granport的下水道

var battle_times = 0;

auto()

var common = require("lib.js");

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

// todo
function hole2town() {
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

function town2hole() {
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

function playerMove(f) {
    common.click_little_map();
    if (f) {
        click(804, 481)
    } else {
        click(1611, 599)
    }
    sleep(500)
}


var total_battle_times = 0;
var flag = true;
var i = 0;

while (1) {
    if (battle_times >= 12) {
        // 重置各种状态
        common.click_little_map()
        click(2085, 59)
        sleep(1000)
        hole2town();
        town2hole();
        battle_times = 0;
        flag = true;
    }

    if (common.checkStanding()) {
        playerMove(flag);
        flag = !flag;
    }

    i = 0;
    while (i < 10 && battle_times < 12) {
        sleep(2500)
        if (common.checkCombat()) {
            sleep(500)
            if (common.checkCat()) {
                // 逃跑
                click(1211, 957)
                sleep(6000)
                continue;
            }
            battle_times++;
            total_battle_times++;

            common.all_switch()
            common.move(1, 4, false)
            common.all_boost();
            click(2020, 929)
            sleep(1000)

            while (!common.checkCombatEnd()) {
                sleep(1000)
            }

            // 瞎鸡儿点
            click(1463, 751)
            sleep(2100)
            // 瞎鸡儿点
            click(1463, 751)
            sleep(3100)
            // 瞎鸡儿点
            click(1463, 751)
            sleep(5600)

            log("战斗了" + total_battle_times + '次')

            if (battle_times >= 12)
                break;

        } else {
            i++;
        }
    }
}

