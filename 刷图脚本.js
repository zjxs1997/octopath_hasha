// 挂机刷材料/怪脚本。只用平a。
// 不停地all switch & all boost进行平a输出
// 只需要改playerMove函数中两个坐标值即可。


auto()

var common = require("lib.js");

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

function playerMove(f) {
    common.click_little_map();
    if (f) {
        click(813, 172)
    } else {
        click(1560, 808)
    }
    sleep(500)
}

var flag = true;
var i = 0;
var is_first_turn = true;

while (1) {
    if (common.checkStanding()) {
        playerMove(flag);
        flag = !flag;
    }
    i = 0;
    while (i < 10) {
        sleep(1500);
        if (common.checkCombat()) {
            is_first_turn = true;
            sleep(1000)
            while (1) {
                if (common.checkCombat()) {
                    if (!is_first_turn)
                        common.all_switch();
                    common.all_boost();
                    click(2020, 929)
                    sleep(1000)
                    is_first_turn = false;
                }
                else if (common.checkCombatEnd()) {
                    // 瞎鸡儿点
                    click(1463, 751)
                    sleep(2100)
                    // 瞎鸡儿点
                    click(1463, 751)
                    sleep(3100)
                    // 瞎鸡儿点
                    click(1463, 751)
                    sleep(5600)
                    break
                }
                else {
                    sleep(1000)
                }
            }
        } else {
            i++;
        }
    }
}

