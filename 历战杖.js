// 历战杖脚本
// 需要开局在river land城镇旅店门口
// 配置：
// 1号位女贼，技能2 anti guard；后排吟游诗人火舞，技能1达人
// 3号位ddl，技能2剑岚武斗
// 5号位稻草人，技能2四连风；后排默尔索，技能2风魔法
// 7号位管家，技能3三连，技能2风杀
// 后排挂个降风耐的，和一个降属防的

auto()

var common = require("lib.js");

while (true) {

    common.click_little_map()
    click(1391, 453)
    sleep(7000)

    for (var i = 0; i < 2; ++i) {
        // 点npc
        click(1325, 590)
        sleep(2600)
        common.challenge_npc()
    
        // turn 1
        common.move(1, 2, true)
        common.move(3, 3, false)
        common.all_boost()
        common.move(2, 3, false)
        common.move(4, 4, false)
        common.start_attack(14640)

        // turn 2
        common.move(1, 3, true)
        common.move(2, 3, false)
        common.move(3, 3, true)
        common.move(4, 4, false)
        common.start_attack(13750)

        // turn 3
        common.move(1, 2, true)
        common.move(2, 3, false)
        common.move(3, 3, false)
        common.move(4, 3, false)
        common.all_boost()
        common.start_attack(14100)

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
    click(1250, 355)
    sleep(3600)
    // 旅店柜台
    click(1411, 433)
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
    click(1030, 680)
    sleep(6000)


}