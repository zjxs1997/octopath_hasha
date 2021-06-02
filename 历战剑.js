// 现在的这些脚本都需要估算战斗时间，需要更便捷的方式检测战斗结束
// 比如检测截图中是否出现attack按钮

// 另外，这个脚本因为暂时用不上，所以还没有写周回配置


auto()

var common = require("lib.js");

while (true) {
    common.click_little_map()
    click(1347, 574)
    sleep(9000)

    for (var i = 0; i < 1; ++i) {
        // 点npc
        if (i == 0)
            click(1459, 462)
        else
            click(1354, 437)
        sleep(2600)

        common.challenge_npc()

        // turn 1

        // turn 2

        // turn 3

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

}


