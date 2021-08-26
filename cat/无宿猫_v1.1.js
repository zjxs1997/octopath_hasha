// 第二版，实现了无宿

// 自动刷猫脚本，开局在霧灯かりの滝壺
// 2号位管家， 1号技能刹那
// 3号位闪达，2号技能行云流水
// 5号位置提奥
// 7号位置李杜

// 注意，管家要保证回蓝8及以上，闪达要保证回蓝17及以上
// 饰品配置：
// 管家：带个回蓝>=9的饰品
// 闪达：带个回蓝的饰品+后排回蓝工具人（但是感觉只要工具人就够了）


// 行动逻辑：

// turn 1
// 全体平a，闪达行云流水，砍掉4+5+5=14盾，一号位可以打4点伤害，总计18点

// turn 2
// 全部换人，管家刹那，别人平a，闪达1点伤害，别的三个需要至少打出11点伤害，总计12点

// turn 3
// 除了管家外换人，平a，4+4+3+4=15伤害




auto()

var common = require("lib.js");

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

function checker() {
    while (1) {
        if (common.checkCombat()) return 1;
        if (common.checkCombatEnd()) return 0;
        sleep(1000)
    }
}

function fightLittleCat_v3() {
    // turn 1
    common.all_boost();
    common.start_attack(500)
    while (!common.checkCombat()) sleep(1000)

    // turn 2
    common.all_switch()
    common.all_boost();
    common.move(1, 2, false)
    common.start_attack(500)
    while (!common.checkCombat()) sleep(1000)

    // turn 3
    common.all_switch()
    common.move(1, 1, true)
    common.all_boost()
    common.start_attack(500)

    var res = checker();
    // 战斗结束返回0，否则返回1
    while (res == 1) {
        common.start_attack(500)
        res = checker();
    }

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


function fightCat() {
    // turn 1
    common.all_boost()
    common.move(2, 3, false)
    common.start_attack(500)
    while (!common.checkCombat()) sleep(1000)

    // turn 2
    common.all_switch();
    common.all_boost();
    common.move(1, 2, false)
    common.start_attack(500)
    while (!common.checkCombat()) sleep(1000)

    // turn 3
    common.all_switch()
    common.move(1, 1, true)
    common.all_boost()
    common.start_attack(500)
    while (!common.checkCombatEnd()) sleep(1000)

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


function playerMove(f) {
    common.click_little_map();
    if (f) {
        click(1355, 385)
    } else {
        click(1206, 353)
    }
    sleep(500)
}


// 主流程

var flag = true;

var i = 0;
var totalBattle = 0;
var catBattle = 0;
var littleCatBattle = 0;


while (1) {
    if (common.checkStanding()) {
        playerMove(flag);
        flag = !flag;
    }

    i = 0;
    while (i < 10) {
        sleep(2500);
        if (common.checkCombat()) {
            totalBattle++;
            sleep(500);
            var res_val = common.checkCat()
            if (res_val) {
                if (res_val == 1) {
                    catBattle++;
                    fightCat();
                }
                else {
                    littleCatBattle++;
                    fightLittleCat_v3();
                }
                var money = 10 * catBattle + 5 * littleCatBattle;
                money = money * 1.548;
                log('' + totalBattle + '次战斗，' + catBattle + '次猫，' + littleCatBattle + '次小猫，金钱' + money);
            } else {
                click(1191, 939)
                sleep(2500)
            }
        } else {
            i++;
        }
    }
}

