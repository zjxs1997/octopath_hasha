// 不太稳，算了

auto()

var common = require("lib.js");

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}




while (1) {
    // 点npc
    click(1470, 460)
    sleep(2600)

    common.challenge_npc()

    // turn 1
    common.all_boost()
    common.move(2, 2, false)
    common.start_attack(1000)
    while (!common.checkCombat())
        sleep(1000);

    // turn 2
    common.all_switch()
    common.move(1, 3, false)
    common.move(2, 1, true)
    common.move(3, 2, false)
    common.move(4, 3, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombat())
        sleep(1000);

    // turn 3
    common.move(2, 2, true)
    common.all_boost()

    common.start_attack(1000)
    while (!common.checkCombatEnd())
        sleep(1000);


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
    // 瞎鸡儿点
    click(1463, 751)
    sleep(2000)

    common.battle_epilouge()
    common.cancel_support()

}


