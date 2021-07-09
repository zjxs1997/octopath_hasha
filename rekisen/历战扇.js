// 这个队伍需要保证输出最大化，不然有点不太够
// 不只是武器，饰品也要
// 配置：
// 1号提奥，技能1三连，2缓回，后排回蓝
// 2号jjc药师，技能2暴击，3三连，后排回蓝，带一个回蓝饰品
// 3号索菲亚，技能2乱冰，3大乱冰
// 4号女贼，技能2降防，3破盾；后排火舞，技能1达人

auto();

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

var common = require("lib.js");
var counter = 0;
while (true) {

    common.click_little_map()
    click(759, 384);
    while (!common.checkStanding()) sleep(1000);


    for (var i = 0; i < 8; ++i) {
        // 点npc
        if (i == 0) {
            click(817, 470)
            sleep(2000)
        } else {
            click(1100, 442)
            sleep(1000)
        }
        common.challenge_npc()

        // turn 1:
        common.move(4, 2, true)
        common.all_boost()
        common.move(1, 3, false)
        common.move(2, 4, false)
        common.move(3, 4, false)
        common.start_attack(1000)
        while (!common.checkCombat())
            sleep(1000);

        // turn 2
        common.move(1, 1, false)
        common.move(4, 4, true)
        common.all_boost()
        common.move(2, 3, false)
        common.move(3, 3, false)
        common.start_attack(1000)
        while (!common.checkCombat())
            sleep(1000);

        // turn 3
        common.move(1, 2, false)
        common.move(4, 3, false)
        // 如果开了memory command的话，下面两句其实可以注释掉
        // common.move(2, 3, false)
        // common.move(3, 2, false)
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
        counter++;
        log("刷了" + counter + "次！")
    }
    common.return_to_hotel_door()
    sleep(1000)
    // 进入旅店
    click(1233, 337)
    sleep(1000)
    while (!common.checkStanding()) sleep(1000);
    // 旅店柜台
    click(1552, 355)
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
    click(1292, 612)
    while (!common.checkStanding()) sleep(1000);
}

