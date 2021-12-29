// 第二版，实现了无宿

// 自动刷猫脚本，开局在霧灯かりの滝壺
// 前排：提奥、男剑、李杜、艾维斯
// 后排：火神、两个工具人+随意


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

function task_kill() {
    // 借助悬浮球
    click(2359, 465)
    sleep(800)
    click(2121, 278)
    sleep(1200)

    // 退出app
    swipe(500, 1085, 500, 289, 2000)
    sleep(800)
    // 点别的地方
    click(905, 838)
    sleep(800)
}


function relaunch() {
    // 点app
    click(895, 248)
    sleep(1000)

    while (!common.checkStanding()) {
        sleep(1000);
        click(1140, 498)
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
    common.start_attack(500)
    while (!common.checkCombat()) sleep(1000)

    // turn 3
    common.all_switch()
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
    common.start_attack(500)
    while (!common.checkCombat()) sleep(1000)

    // turn 2
    common.all_switch();
    common.all_boost();
    common.start_attack(500)
    while (!common.checkCombat()) sleep(1000)

    // turn 3
    common.all_switch()
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
                money = money * 1.551;
                log('' + totalBattle + '次战斗，' + catBattle + '次猫，' + littleCatBattle + '次小猫，金钱' + money);
            } else {
                click(1191, 939)
                sleep(2500)
            }
            if (totalBattle % 300 == 0) {
                task_kill()
                relaunch()
            }
        } else {
            i++;
        }
    }
}

