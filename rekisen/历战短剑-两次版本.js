// 历战短剑脚本
// 需要开局在cliff land的旅店门口
// 配置：
// 1号位女剑，技能1号位collapse charge；3号位三连斩；后排回蓝工具人
// 3号位火舞，技能1号位达人，装备带吟游诗人；后排男剑；3号位二连
// 5号位泰雷兹，技能2号位二连雷；3号位三连雷
// 7号位密罗德，技能2号位回血；后排女贼，技能2号位anti guard
// 重要：测试不多，可能不太稳

auto()

var common = require("lib.js")

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}


while(true) {
    // 右上角小地图位置
    click(2063, 165)
    sleep(1600)
    click(1548, 900)
    sleep(1000)
    while (!common.checkStanding())
        sleep(1000);
    click(2063, 165)
    sleep(1600)
    click(1319, 788)
    sleep(11500)
    for (var i = 0; i < 2; ++i) {
    // 点npc的位置
    if (i == 0)
        click(1549, 446)
    else
        click(1342, 446)
    sleep(2600)
    // 右下角挑战按钮
    click(2104, 901)
    sleep(3400)
    // 入引
    click(1765, 561)
    sleep(1600)
    // 确认危险度等
    click(1432, 730)
    sleep(1600)
    // 确认关系
    click(1463, 751)
    sleep(3400)
    // 瞎鸡儿点
    click(1463, 751)
    sleep(5700)

    common.move(1, 4, false)
    common.move(2, 4, true)
    common.move(3, 4, false)
    common.move(4, 3, true)
    common.start_attack(1000)
    while (!common.checkCombat())
        sleep(1000);

    common.move(1, 4, false)
    common.move(2, 2, true)
    common.move(3, 4, false)
    common.move(4, 3, true)
    common.start_attack(1000)
    while (!common.checkCombat())
        sleep(1000);

    common.move(1, 2, false)
    common.move(2, 4, true)
    common.move(3, 3, false)
    // all boost
    click(1678, 908)
    sleep(1300)
    common.start_attack(1000)
    while (!common.checkCombatEnd())
        sleep(1000);

    // 瞎鸡儿点
    click(1463, 751)
    sleep(2100)
    // 瞎鸡儿点
    click(1463, 751)
    sleep(3100)
    // 瞎鸡儿点
    click(1463, 751)
    sleep(5600)
    // 瞎鸡儿点
    click(1463, 751)
    sleep(2000)



    // 确认加入后的ok
    click(1236, 699)
    sleep(1600)
    // 右上角叉叉
    click(2104, 28)
    sleep(2600)
    // party菜单
    click(636, 861)
    sleep(2000)
    // 支援者list
    click(475, 786)
    sleep(1600)
    // 选中第一个人
    click(1186, 367)
    sleep(1100)
    // 点wakareru
    click(1439, 842)
    sleep(1400)
    // 确认
    click(1439, 697)
    sleep(1500)
    // 已告别
    click(1239, 704)
    sleep(1400)
    // 右上角叉叉
    click(2104, 28)
    sleep(1900)
    }

    // 大陆地图菜单
    click(1151, 896)
    sleep(1800)
    // 正中间的城市
    click(1228, 515)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    sleep(8500)
    // 进入旅店
    click(1231, 318)
    sleep(3600)
    // 旅店柜台
    click(1339, 374)
    sleep(4100)
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
    click(1065, 627)
    sleep(6000)
}