// 这个队伍需要保证输出最大化，不然有点不太够
// 不只是武器，饰品也要
// 配置：
// 1号位男商，要带点加速度的装备，然后饰品全部带回血的，1号技能治愈，2号嘲讽；后排女贼，2号降防
// 3号位阿妮艾斯，2号技能holy；后排舞娘，3号技能搅乱
// 5号位舞男，3号技能四连；后排密罗德，三号技能光法
// 7号位军师，2号技能乱光，3号技能大光；后排闪达，1号技能哈根


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
    click(1646, 645);
    while (!common.checkStanding())
        sleep(1000);
    
    
    common.click_little_map()
    click(1292, 792)
    while (!common.checkStanding())
        sleep(1000);

    // todo: 确定这个循环次数
    for (var i = 0; i < 6; ++i) {
        // 点npc
        click(1302, 457)
        sleep(2600)
        common.challenge_npc()

        // turn 1:
        common.move(1, 3, false)
        common.move(2, 4, true)
        common.move(3, 4, false)
        common.move(4, 3, false)
        common.start_attack(1000)
        while (!common.checkCombat())
            sleep(1000);

        // turn 2
        common.move(1, 3, true)
        common.move(2, 3, true)
        common.move(3, 1, false)
        common.move(4, 4, false)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombat())
            sleep(1000);

        // turn 3
        common.move(1, 2, true)
        common.move(2, 4, true)
        common.move(3, 4, true)
        common.move(4, 2, true)
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
    // 进入旅店
    click(1263, 230)
    sleep(3600)
    // 旅店柜台
    click(1318, 422)
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
    click(1082, 656)
    sleep(6000)
}

