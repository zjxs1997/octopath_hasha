// 新地图刷素材脚本

// 开局需要在海
// 角色：1号塞拉斯，3号技能全雷
// 其他工具人拉满即可

var battle_times = 0;

auto()

var common = require("lib.js");

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}


var total_battle_times = 0;
var flag = 0;
var move_counter = 0;
var i = 0;
var max_fight_time = 13;
var sl_time = max_fight_time * 1;

var game_package_name = "com.square_enix.android_googleplay.octopathj";


function hole2town() {
    common.click_world_map()
    // // 现世
    // click(388, 267)
    // sleep(500)

    click(1168, 402)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) {
        sleep(1000)
    }

    sleep(500)
    click(1243, 353)
    sleep(1500)
    while (!common.checkStanding()) {
        sleep(1000)
    }

    // 旅店柜台
    click(1409, 415)
    sleep(3000)
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
    // // 边狱
    // click(469, 384)
    // sleep(500)
    click(1331, 643)
    sleep(1200)
    // 到这里去
    click(1870, 905)
    sleep(1200)
    // fast travel的确认
    click(1432, 695)
    sleep(8500)
}

function playerMove() {
    move_counter += 1;
    if (move_counter % 2 == 0) {
        common.click_world_map()
        click(2095, 55)
        sleep(1000)
    }

    if (flag == 0) {
        common.click_little_map();
        click(742, 678)
        flag = 1;
    } else if (flag == 1) {
        common.click_little_map();
        click(1639, 655)
        flag = 0;
    }
    sleep(500)
}

function checker() {
    while (1) {
        if (common.checkCombat()) return 1;
        if (common.checkCombatEnd()) return 0;
        sleep(1000)
    }
}


function task_kill() {
    app.openAppSetting(game_package_name);
    text(app.getAppName(game_package_name)).waitFor();
    sleep(800)
    click(354, 2258)
    sleep(800)
    click(796, 2210)
    sleep(800)
}


function relaunch() {
    // 开启app
    app.launch(game_package_name)

    while (!common.checkStanding()) {
        // 随便点什么
        // click(895, 248)
        // sleep(1000);
        click(1260, 619)
        sleep(1000)
    }
}


while (1) {
    if (battle_times >= max_fight_time) {
        // 重置各种状态
        common.click_little_map()
        click(2085, 59)
        sleep(1500)
        hole2town();
        town2hole();
        battle_times = 0;
        flag = 0;
        move_counter = 0;

        if (total_battle_times % sl_time == 0) {
            log('重启')
            task_kill();
            relaunch();
        }

    }

    if (common.checkStanding()) {
        playerMove();
    }

    i = 0;
    while (i < 3 && battle_times < max_fight_time) {
        sleep(1000)
        if (common.checkCombat()) {
            battle_times++;
            total_battle_times++;
            sleep(300)

            common.move(1, 4, false)
            common.all_boost();
            click(2020, 929)
            sleep(1000)

            var res = checker()
            if (res == 1) {
                log('猫')
                common.all_switch()
                common.all_boost()
                click(2020, 929)
                sleep(1000)
                res = checker()
            }
            // 战斗结束
            {
                // 闪电五连鞭
                for (var o = 0; o < 5; ++o) {
                    click(1463, 751)
                    sleep(300)
                }
                sleep(3000)
            }

            log("战斗了" + total_battle_times + '次')

            if (battle_times >= max_fight_time)
                break;

        } else {
            i++;
        }
    }
}