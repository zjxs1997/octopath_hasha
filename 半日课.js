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

// 初始的时候在塔里面，第一个队伍是砂岩



function end_combat() {
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
}

function checker() {
    while (1) {
        if (common.checkCombatEnd()) return 2;
        if (common.checkCombat()) return 1;
        if (common.checkStanding()) return 0;
        sleep(3000);
    }
}

function go_or_run() {
    var result = checker();
    while (result == 1) {
        click(1198, 933);
        result = checker();
    }
}

function move_upward() {
    swipe(1645, 849, 1645, 200, 2000)
}

function switch_team(k) {
    click(633, 928)
    sleep(1500)
    if (k < 0) {
        k = -k;
        for (var i = 0; i < k; ++i) {
            click(783, 550)
            sleep(1000)
        }

    } else {
        for (var i = 0; i < k; ++i) {
            click(2059, 550)
            sleep(1000)
        }
    }
    click(2104, 28)
    sleep(2600)
}

function tower2flame() {
    common.click_world_map();
    click(845, 780)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
    click(1233, 231)
    sleep(1000);
    while (!common.checkStanding()) sleep(1000);
    click(1317, 440)
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
}

function flame2tower() {
    common.click_world_map()
    click(1627, 282)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}


// end helper functions


// -------------------------------------------------------
// ----------------------- 砂岩系列 -----------------------
// -------------------------------------------------------

// 暴徒
function shayan1() {
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.move(2, 1, true)
    common.all_boost();
    common.move(3, 4, false)
    common.move(4, 2, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.move(3, 3, true)
    common.move(4, 2, true)
    common.all_boost();
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);

    end_combat();
}

// 魔导机
function shayan2() {
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.move(1, 4, false)
    common.move(2, 2, false)
    common.move(3, 4, true)
    common.move(4, 2, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.move(1, 4, false)
    common.move(2, 2, false)
    common.move(3, 3, false)
    common.move(4, 2, true)
    common.all_boost();
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);

    end_combat();
}


// 这个在测试的时候shayan3不知道出了什么问题，技能没点对。。。
function shayan() {
    // 进篝火
    move_upward()
    while (!common.checkStanding()) sleep(1000);
    click(1224, 182)
    sleep(1000)
    click(934, 710)
    while (!common.checkStanding()) sleep(1000);

    // 去沙漠地区
    common.click_little_map();
    click(988, 811)
    while (!common.checkStanding()) sleep(1000);
    click(1262, 494)
    sleep(1000)
    click(1513, 600)
    while (!common.checkStanding()) sleep(1000);

    // 左下角暴徒
    common.click_little_map()
    click(903, 785);
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    shayan1();

    // 右下角魔导机
    common.click_little_map()
    click(1306, 774)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    shayan2();
}

function tower2sand() {
    common.click_world_map()
    common.click_map_shrink()
    click(1458, 969)
    sleep(1000)
    click(826, 762)
    sleep(1000)
    click(1331, 909)
    sleep(1000)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

function sand2palace() {
    common.click_world_map()
    click(1333, 450)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

function palace2sand() {
    common.click_world_map()
    click(1183, 596)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
    click(1249, 283)
    sleep(1000);
    while (!common.checkStanding()) sleep(1000);
    click(1396, 389)
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
}

function sand2tower() {
    common.click_world_map()
    common.click_map_shrink()
    click(1504, 191)
    sleep(1600)
    click(1289, 365)
    sleep(1600)
    click(1003, 140)
    sleep(1600)
    click(1247, 524)
    click(1247, 524)
    sleep(1600)
    click(1256, 406)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

function shayan_wide() {
    tower2sand();
    sand2palace();

    // 魔导机
    common.click_little_map()
    click(759, 766)
    go_or_run();
    swipe(1548, 589, 674, 589, 2000)
    shayan2()

    // 暴徒
    common.click_little_map()
    click(832, 248)
    go_or_run();

    common.click_little_map()
    click(877, 414)
    go_or_run();

    common.click_little_map();
    click(1423, 600)
    go_or_run();
    swipe(674, 589, 1548, 589, 2000)
    shayan1();

    palace2sand();
    sand2tower();
}

// -------------------------------------------------------
// --------------------- 砂岩系列 end ---------------------
// -------------------------------------------------------





// -------------------------------------------------------
// ----------------------- 溪水系列 -----------------------
// -------------------------------------------------------


// 小青蛙
function xishui1() {
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.move(1, 4, false)
    common.move(2, 1, false)
    common.move(4, 4, false)
    common.all_boost()
    common.move(3, 4, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.move(1, 2, true)
    common.move(2, 3, false)
    common.move(3, 3, false)
    common.move(4, 4, true)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);

    end_combat()
}

// 蜗牛
function xishui3() {
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.move(1, 2, false)
    common.move(2, 3, true)
    common.move(3, 3, true)
    common.move(4, 2, true)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.move(1, 3, false)
    common.move(2, 3, false)
    common.move(3, 4, false)
    common.move(4, 2, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);

    end_combat()
}

function xishui() {
    // 进篝火
    move_upward()
    while (!common.checkStanding()) sleep(1000);
    click(1224, 182)
    sleep(1000)
    click(934, 710)
    while (!common.checkStanding()) sleep(1000);

    // 去河流地区
    common.click_little_map();
    click(805, 638)
    while (!common.checkStanding()) sleep(1000);
    click(1049, 441)
    sleep(1000)
    click(1513, 600)
    while (!common.checkStanding()) sleep(1000);

    // 右下角小青蛙
    common.click_little_map()
    click(1320, 827)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    xishui1()

    // 左边蜗牛
    common.click_little_map()
    click(860, 632)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    xishui3()
}

function tower2river() {
    common.click_world_map()
    common.click_map_shrink()
    click(619, 817)
    sleep(1000)
    click(1255, 759)
    sleep(1000)
    click(1149, 878)
    sleep(1000)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

function river2bank() {
    common.click_world_map()
    click(1029, 646)
    sleep(1000)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

function bank2river() {
    common.click_world_map()
    click(1427, 395)
    sleep(1000)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
    click(1245, 271)
    sleep(1000);
    while (!common.checkStanding()) sleep(1000);
    click(1306, 366)
    sleep(3500)
    // 瞎鸡儿点
    click(1463, 751)
    sleep(2500)
    // 瞎鸡儿点
    click(1463, 751)
    sleep(2500)
    // 确认宿屋，20块钱
    click(1491, 716)
    sleep(6000)
    // 恢复后的确认
    click(1236, 699)
    sleep(1600)
}

function river2tower() {
    common.click_world_map()
    common.click_map_shrink()
    click(2046, 223)
    sleep(1600)
    click(1285, 359)
    sleep(1600)
    click(980, 161)
    sleep(1600)
    click(1247, 524)
    click(1247, 524)
    sleep(1600)
    click(1256, 406)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

function xishui_wide() {
    tower2river();
    river2bank();

    // 小青蛙
    common.click_little_map()
    click(1150, 345)
    go_or_run();
    common.swipe_right();
    xishui1();

    common.click_little_map()
    click(702, 263)
    go_or_run()
    // 蜗牛
    common.click_little_map()
    click(779, 740)
    go_or_run()
    common.swipe_left()
    xishui3()

    bank2river();
    river2tower();
}



// -------------------------------------------------------
// --------------------- 溪水系列 end ---------------------
// -------------------------------------------------------



// -------------------------------------------------------
// ----------------------- 银雪系列 -----------------------
// -------------------------------------------------------


function yinxue1() {
    // 草
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.move(1, 4, false)
    common.move(2, 4, false)
    common.move(3, 3, false)
    common.move(4, 3, true)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}

function yinxue2() {
    // 猫头鹰
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.move(1, 4, false)
    common.move(2, 4, false)
    common.move(3, 3, false)
    common.move(4, 2, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();
}

function yinxue() {
    // 进篝火
    move_upward()
    while (!common.checkStanding()) sleep(1000);
    click(1224, 182)
    sleep(1000)
    click(934, 710)
    while (!common.checkStanding()) sleep(1000);

    // 去frost地区
    click(1619, 225)
    sleep(5500)
    click(1513, 600)
    while (!common.checkStanding()) sleep(1000);

    // 左边的草
    common.click_little_map()
    click(1057, 855)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    yinxue1()

    // 右边的猫头鹰
    common.click_little_map()
    click(1292, 853)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    yinxue2();
}

function flame2hole() {
    common.click_world_map()
    click(982, 493)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

function hole2flame() {
    // 其实已经不是hole了，但是就这样写
    common.click_world_map()
    click(1328, 595)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
    click(1233, 231)
    sleep(1000);
    while (!common.checkStanding()) sleep(1000);
    click(1317, 440)
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
}

function yinxue_wide() {
    tower2flame();
    flame2hole();

    // 猫头鹰
    common.click_little_map()
    click(1159, 689)
    go_or_run();
    swipe(674, 589, 1548, 589, 2000)
    yinxue2();

    common.return_to_hotel_door()
    swipe(674, 589, 1548, 589, 2000)
    while (!common.checkStanding()) sleep(1000);

    // 草
    common.click_little_map()
    click(1257, 553)
    go_or_run();
    swipe(674, 589, 1548, 589, 2000)
    yinxue1()

    hole2flame();
    flame2tower();
}

// colab的先不用
function goto_colab(floor) {
    common.click_little_map()
    click(957, 424)
    while (!common.checkStanding()) sleep(1000);

    common.click_little_map()
    click(1041, 365)
    while (!common.checkStanding()) sleep(1000);

    common.click_little_map()
    click(1300, 691)
    while (!common.checkStanding()) sleep(1000);

    click(977, 430)
    sleep(1000)
    if (floor == 2)
        click(1504, 525)
    else if (floor == 3)
        click(1013, 660)
    sleep(500)
    while (!common.checkStanding()) sleep(1000);
}

function fight_colab() {
    common.return_to_hotel_door()
    goto_colab(3)

    common.click_little_map()
    click(744, 841)
    go_or_run();

    common.click_little_map()
    click(758, 175)
    go_or_run();
    common.swipe_up()

    // fight frog with yinxue
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.all_switch()
    common.move(1, 3, false)
    common.move(2, 2, false)
    common.move(3, 3, false)
    common.move(4, 2, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();

    common.return_to_hotel_door()
    goto_colab(2)
    common.click_little_map()
    click(1474, 769)
    go_or_run()
    common.swipe_left()

    // fight frog-2 with yinxue
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.move(3, 3, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat();

    // 暂时不想找ntr的流程问题在哪里
    // common.click_little_map()
    // click(1117, 920)
    // go_or_run()
    // common.swipe_down()

    // common.click_little_map()
    // click(807, 596)
    // go_or_run()

    // common.click_little_map()
    // click(1576, 296)
    // go_or_run()
    // common.swipe_up()

    // // fight ntr with yinxue
    // while (!common.checkCombat()) sleep(1000);
    // // turn 1
    // common.move(3, 3, false)
    // common.all_boost()
    // common.start_attack(1000)
    // while (!common.checkCombatEnd()) sleep(1000);
    // end_combat();
}


// -------------------------------------------------------
// --------------------- 银雪系列 end ---------------------
// -------------------------------------------------------


// -------------------------------------------------------
// ----------------------- 珊瑚系列 -----------------------
// -------------------------------------------------------



// 鼻涕虫
function shanhu1() {
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.all_switch()
    common.move(1, 2, false)
    common.move(2, 3, true)
    common.move(3, 3, false)
    common.move(4, 4, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.move(1, 2, false)
    common.move(2, 4, false)
    common.move(3, 3, false)
    common.move(4, 2, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat()
}

// 骨头
function shanhu2() {
    while (!common.checkCombat()) sleep(1000);
    // turn 1
    common.all_switch()
    common.move(1, 4, false)
    common.move(2, 4, false)
    common.move(3, 3, false)
    common.move(4, 4, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.move(1, 4, false)
    common.move(2, 2, false)
    common.move(3, 3, true)
    common.move(4, 2, true)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);
    end_combat()
}

function shanhu() {
    // 进篝火
    move_upward()
    while (!common.checkStanding()) sleep(1000);
    click(1224, 182)
    sleep(1000)
    click(934, 710)
    while (!common.checkStanding()) sleep(1000);

    // 去海滩地区
    common.click_little_map();
    click(1552, 640)
    while (!common.checkStanding()) sleep(1000);
    click(1438, 432)
    sleep(1000)
    click(1513, 600)
    while (!common.checkStanding()) sleep(1000);

    // 左下角骨头
    common.click_little_map()
    click(922, 861);
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    shanhu2();

    // 右下鼻涕虫
    common.click_little_map()
    click(1316, 862)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    shanhu1();
}

function tower2port() {
    common.click_world_map()
    common.click_map_shrink()
    click(1460, 959)
    sleep(1600)
    click(1247, 524)
    click(1247, 524)
    sleep(1600)
    common.click_map_shrink()
    click(2085, 329)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

function port2sewer() {
    common.click_world_map()
    click(1210, 386)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

function sewer2port() {
    common.click_world_map()
    click(1259, 657)
    sleep(1200)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000)

    // 进入旅店
    click(1236, 323)
    sleep(1000)
    while (!common.checkStanding()) sleep(1000)
    // 旅店柜台
    click(1360, 447)
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
}

function port2tower() {
    common.click_world_map()
    common.click_map_shrink()
    click(523, 331)
    sleep(1600)
    click(1247, 524)
    click(1247, 524)
    sleep(1600)
    click(1256, 406)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    while (!common.checkStanding()) sleep(1000);
}

// not tested yet
function shanhu_wide() {
    tower2port()
    port2sewer();

    // 鼻涕虫
    common.click_little_map()
    click(1364, 378)
    go_or_run()
    common.swipe_right()
    shanhu1()

    common.click_little_map()
    click(693, 451)
    go_or_run()

    //骨头
    common.click_little_map()
    click(1546, 556)
    go_or_run()
    common.swipe_left()
    shanhu2()

    sewer2port()
    port2tower()
}
// -------------------------------------------------------
// --------------------- 珊瑚系列 end ---------------------
// -------------------------------------------------------


function bingjin() {
    // 进篝火
    move_upward()
    while (!common.checkStanding()) sleep(1000);
    click(1224, 182)
    sleep(1000)
    click(934, 710)
    while (!common.checkStanding()) sleep(1000);

    // 去frost地区
    click(1619, 225)
    sleep(5500)
    click(1513, 600)
    while (!common.checkStanding()) sleep(1000);

    // 左边的山贼
    common.click_little_map()
    click(943, 855)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);
    {
        // turn 1
        common.move(1, 3, true)
        common.move(2, 4, true)
        common.move(3, 3, false)
        common.move(4, 2, false)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 2
        common.move(1, 4, false)
        common.move(2, 4, false)
        common.move(3, 3, false)
        common.move(4, 3, false)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);
        end_combat();
    }

    // 右边的盗贼
    common.click_little_map()
    click(1424, 849)
    while (!common.checkStanding()) sleep(1000);
    move_upward();
    while (!common.checkCombat()) sleep(1000);
    {
        // turn 1
        common.move(1, 3, true)
        common.move(2, 4, true)
        common.move(3, 3, false)
        common.move(4, 2, false)
        common.start_attack(1000)
        while (!common.checkCombat()) sleep(1000);

        // turn 2
        common.move(1, 4, false)
        common.move(2, 3, true)
        common.move(3, 4, true)
        common.move(4, 3, false)
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);
        end_combat();
    }
}


// 流程：篝火2

shayan();
shayan_wide();

switch_team(2);
xishui();
// xishui_wide();
tower2flame();
flame2tower();

switch_team(2);
bingjin();
tower2flame();
flame2tower();

switch_team(1);
yinxue();
fight_colab();
// yinxue_wide();
tower2flame()
flame2tower();


switch_team(1);
shanhu();
shanhu_wide()


