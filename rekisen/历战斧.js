// 配置：
// 1号位风神，技能3三连杖；后排密罗德，技能2群回
// 3号位暗神，技能1二连暗，2大暗；后排暗贼，技能3二连暗
// 5号位管家，技能1三连；后排女剑，技能1剑输出
// 7号位火舞，技能1达人，3搅乱；后排女贼，技能2降防，3二连


auto()

var common = require("lib.js");

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

var outer_count = 0;

while (true) {
    common.click_little_map()
    click(756, 717)
    sleep(1000)
    while (!common.checkStanding())
        sleep(1000);
    
    common.click_little_map()
    click(1591, 710)
    sleep(1000)
    while (!common.checkStanding())
        sleep(1000);

    for (var i = 0; i < 2; ++i) {
        // 点npc
        click(1470, 460)
        sleep(2600)

        common.challenge_npc()

        // turn 1
        common.move(1, 1, true)
        common.move(4, 3, true)
        common.all_boost()
        common.move(2, 2, false)
        common.move(3, 4, false)
        common.start_attack(1000)
        while (!common.checkCombat())
            sleep(1000);

        // turn 2
        common.move(1, 4, true)
        common.move(3, 4, false)
        common.move(4, 2, true)
        common.all_boost()
        common.move(2, 3, false)
        common.start_attack(1000)
        while (!common.checkCombat())
            sleep(1000);

        // turn 3
        common.move(1, 3, true)
        common.move(2, 3, false)
        common.move(3, 2, true)
        common.move(4, 4, false)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombat())
            sleep(1000);

        // turn 4
        common.move(1, 4, true)
        common.move(2, 4, true)
        common.move(3, 4, true)
        common.move(4, 4, true)
        common.start_attack(1000)
        while (!common.checkCombat())
            sleep(1000);

        // turn 5
        common.move(1, 4, false)
        common.move(2, 3, true)
        common.move(3, 4, false)
        common.move(4, 4, false)
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
    common.return_to_hotel_door()
    // 进入旅店
    click(1233, 306)
    sleep(3600)
    // 旅店柜台
    click(1365, 446)
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
    click(1079, 679)
    sleep(6000)

    outer_count++;
    log(outer_count)

}


