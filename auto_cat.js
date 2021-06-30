// 自动刷猫脚本，开局在霧灯かりの滝壺，并且叫满大工支援
// 1号位管家， 3号技能三连，1号技能刹那
// 3号位闪达，2号技能行云流水
// 5号和7号的3号位技能凑个6连


var kill_cat_times = 0;

auto()

var common = require("lib.js");

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

// 霧灯かりの滝壺去シェパードロック
function hole2town() {
    common.click_world_map()
    common.click_map_shrink()
    click(1947, 188)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

// シェパードロック先去ドニエスク
// 然后再去霧灯かりの滝壺
function town2hole() {
    common.click_world_map()
    common.click_map_shrink()
    click(409, 853)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);

    common.click_world_map()
    click(1531, 610)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}


// 在シェパードロック旅店回复，并且招募身軽な大工 （みがるなだいく）
function heal_and_hire_worker() {
    // 进入旅店
    click(1241, 354)
    sleep(3600)
    // 旅店柜台
    click(1234, 441)
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
    common.click_little_map()
    // 出门
    click(1104, 668)
    sleep(6000)

    // 雇佣
    common.click_little_map()
    click(1544, 595)
    sleep(10000)
    click(1501, 499)
    sleep(1000)
    common.hire_npc()
}

// 待调试
function fightLittleCat() {
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

function fightCat() {
    // turn 1
    common.move(1, 4, false)
    common.move(2, 3, false)
    common.move(3, 4, false)
    common.move(4, 4, false)
    // 调试
    // toastLog('请您检阅！')
    // sleep(10000)
    // attack
    click(2020, 929)
    sleep(1000)
    while (!common.checkCombat()) {
        sleep(1000)
    }

    // turn 2
    common.use_first_support()
    common.move(1, 2, false)
    common.all_boost()
    // 调试
    // toastLog('请您检阅！')
    // sleep(10000)
    // attack
    click(2020, 929)
    sleep(1000)
    while (!common.checkCombat()) {
        sleep(1000)
    }

    // turn 3
    common.all_switch()
    common.all_boost()
    // 调试
    // toastLog('请您检阅！')
    // sleep(10000)
    // attack
    click(2020, 929)
    sleep(1000)
    while (!common.checkCombatEnd()) {
        sleep(1000)
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


// 发现了一个问题，时不时地会出现：
// 猫刷着刷着，莫名其妙地退出软件了，不知道是被系统杀进程还是什么情况
// 但是最近几次似乎都发生在三次支援都用完之后，因此我怀疑在重置状态地时候出了什么问题

while (1) {
    if (kill_cat_times > 2) {
        // 重置各种状态
        common.click_little_map()
        click(2085, 59)
        // 这里尽量还是sleep长一点，菜单展开来还是要点时间的
        sleep(2000)
        hole2town();
        heal_and_hire_worker();
        town2hole();
        kill_cat_times = 0;
        flag = true;
    }

    if (common.checkStanding()) {
        playerMove(flag);
        flag = !flag;
    }

    i = 0;
    while(i < 10 && kill_cat_times < 3) {
        sleep(2500);
        if (common.checkCombat()) {
            toastLog("进入战斗")
            totalBattle++;
            sleep(500);
            var res_val = common.checkCat()
            if (res_val) {
                toast("是猫，好耶")
                if (res_val == 1) {
                    catBattle++;
                    fightCat();
                    kill_cat_times++;
                }
                else {
                    littleCatBattle++;
                    fightLittleCat();
                }
                log('遇到'+totalBattle+'次战斗，其中' + catBattle +'次猫猫，' +  littleCatBattle + '次小猫猫');
                if (kill_cat_times > 2) {
                    break;
                }
            } else {
                toast("溜了溜了")
                click(1191, 939)
                sleep(2500)
            }
        } else {
            i++;
        }
    }
}

