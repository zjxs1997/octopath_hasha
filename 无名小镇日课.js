// 无名小镇日课脚本
// 没有打讨伐，没有去商店卖材料，没有骗到素材，没有交易所
// 无名荒野似乎没有问题了，但是前面的部分还需要debug

// tobe debug

auto();

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

var common = require("lib.js");

// 初始时，在无名小镇传送点

function challenge() {
    // 流程：挑战
    click(324, 539);
    sleep(3000);
    // 右下角聞き出す
    click(2104, 901)
    sleep(3400)
    // 改成勝ち取る
    click(1824, 399)
    sleep(1600)
    // 确认危险度等
    click(1479, 826)
    sleep(1600)
    // 确认关系
    click(1463, 751)
    sleep(3400)
    // 瞎鸡儿点，一般这个时候是对话
    click(1463, 751)
    while (!common.checkCombat()) sleep(1000);
    common.all_boost();
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
    // todo，可能不准
    // 确认
    click(1269, 641)
    sleep(1000)
    // 右上角叉叉
    click(2104, 28)
    sleep(2600)
}

challenge();
toast("end challenge");




function queren() {
    click(1269, 639)
    sleep(1000)    
}
function farm() {
    // 流程：牧场
    common.click_little_map()
    click(794, 647)
    while (!common.checkStanding()) sleep(1000);
    // 草泥马1
    click(1175, 462)
    sleep(1200)
    queren()
    // 草泥马2
    click(1360, 459)
    sleep(1200)
    queren()
    // 羊1
    click(1886, 340)
    sleep(4000)
    queren()
    // 羊2
    click(1056, 419)
    sleep(2000)
    queren()
    // 羊3
    click(600, 470)
    sleep(2500)
    queren()
}

// 没问题了
farm();





function buy() {
    // 流程：购买
    common.click_little_map()
    click(1305, 537)
    while (!common.checkStanding()) sleep(1000);

    click(1750, 565);
    sleep(3000);
    // 右下角聞き出す
    click(2104, 901)
    sleep(3400)
    click(1820, 427);
    sleep(1600)
    click(1283, 823)
    sleep(1600)
    click(1463, 751)
    sleep(3400)
    // 瞎鸡儿点，一般这个时候是对话
    click(1463, 751)
    sleep(5700)
    queren()
    click(2104, 28)
    sleep(1900)
}

// 大概也没问题了
buy();



function nuts() {
    // 流程：坚果田
    common.click_little_map()
    click(1540, 447)
    while (!common.checkStanding()) sleep(1000);
    click(1585, 504)
    sleep(2500)
    click(1265, 630);
    sleep(1000)

    click(1523, 572)
    sleep(2500)
    click(1265, 630);
    sleep(1000)

    click(1523, 572)
    sleep(2500)
    click(1265, 630);
    sleep(1000)
}

// 这个函数也没问题
nuts();







// 流程：无名荒野
common.click_little_map()
click(1613, 656)
while (!common.checkStanding()) sleep(1000);
//todo

// 左上角乌龟
common.click_little_map()
click(1107, 200)
while (!common.checkStanding()) sleep(1000);
swipe(674, 589, 1548, 589, 2000)
while (!common.checkCombat()) sleep(1000);
common.all_boost();
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

// 上方狼
common.click_little_map()
click(1224, 234)
while (!common.checkStanding()) sleep(1000);
swipe(1548, 589, 674, 590, 2000)
while (!common.checkCombat()) sleep(1000);
common.all_boost();
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

// 下方树
common.click_little_map()
click(1546, 734)
while (!common.checkStanding()) sleep(1000);
swipe(674, 589, 1548, 589, 2000)
while (!common.checkCombat()) sleep(1000);
common.all_boost();
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

// 右边树2
common.click_little_map()
click(1599, 430)
while (!common.checkStanding()) sleep(1000);
swipe(925, 708, 300, 708, 2000)
while (!common.checkCombat()) sleep(1000);
common.all_boost();
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


// 既然没有讨伐，那也没必要卖东西
// // 流程：传送去flame grace
// common.click_world_map()
// common.click();
// sleep(1400)
// // 到这里去
// click(1870, 905)
// sleep(1300)
// // fast travel的确认
// click(1432, 695)
// while (!common.checkStanding()) sleep(1000);

// // 去商店
// common.click_little_map()
// click()
// while (!common.checkStanding()) sleep(1000);
// // 找老板
// click()
// sleep()

// 怎么搞来着？
// 反正就是走一下卖东西的步骤

// 流程：回到无名小镇
common.click_world_map()
click(1135, 571);
sleep(1400)
// 到这里去
click(1870, 905)
sleep(1300)
// fast travel的确认
click(1432, 695)
while (!common.checkStanding()) sleep(1000);

// 流程：去画家老婆房里。。。
common.click_little_map()
click(1387, 467)
while (!common.checkStanding()) sleep(1000);


// 流程：完了，震动提示
device.vibrate(1000)



