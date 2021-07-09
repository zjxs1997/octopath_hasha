// 历战书脚本
// 需要开局在平原城镇的旅店门口
// 配置：
// 1号位女贼，技能2号位anti guard；后排稻草人，2号位四连风
// 3号位管家，技能3号位三连，1号位刹那；后排李图
// 5号位风剑，技能2号位剑岚武斗；后排火舞，吟游诗人，技能1号位达人
// 7号位闪达，技能3号位哈根；后排wingate


auto()

var common = require("lib.js");

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

while (true) {
    common.click_little_map()
    // 点图书馆位置
    click(950, 605)
    sleep(1000)
    while (!common.checkStanding())
        sleep(1000);

    common.click_little_map()
    // 点小地图npc位置
    click(1248, 455)
    sleep(3300)

    for (var i = 0; i < 3; ++i) {
        // 这里的start attack逻辑太老了，有空的时候可以改一下
        // 点npc
        click(1313, 458)
        sleep(2600)
        
        common.challenge_npc()

        // turn 1
        common.all_switch()
        common.move(1, 3)
        common.move(3, 2)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombat())
            sleep(1000);

        // turn 2
        common.all_switch()
        common.move(3, 3)
        common.move(4, 4)
        common.all_boost()
        common.move(1, 3)
        common.move(2, 4)
        common.start_attack(1000)
        while (!common.checkCombat())
            sleep(1000);

        // turn 3
        common.move(1, 2)
        common.move(2, 2)
        common.move(3, 3)
        common.move(4, 4)
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
    click(1282, 343)
    sleep(3600)

    // 旅店柜台
    click(1154, 439)
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
    // 右上角小地图位置
    click(2063, 165)
    sleep(1300)
    // 出门
    click(1248, 677)
    sleep(6000)

}

