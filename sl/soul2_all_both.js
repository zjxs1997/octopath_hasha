// 开始的时候在峡谷


// ---------------------------------------------------------
// helper 函数
// ---------------------------------------------------------



//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

var common = require("lib.js");


function task_kill() {
    // 借助悬浮球
    click(2359, 465)
    sleep(800)
    click(2121, 278)
    sleep(1200)

    // 退出app
    swipe(500, 1085, 500, 289, 2000)
    sleep(800)
    // 点别的地方
    click(905, 838)
    sleep(800)
}


function relaunch() {
    // 点app
    click(895, 248)
    sleep(1000)
    while (!common.checkStanding()) {
        // 随便点什么
        //click(895, 248)
        click(1241, 592)
        sleep(1000);
    }
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

// ---------------------------------------------------------
// helper 函数
// ---------------------------------------------------------


function fight_enemy1() {

    common.swipe_up()
    common.swipe_up()

    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.all_boost()
    common.start_attack(1000)


    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.all_switch()
    common.move(1, 4, false)
    common.move(2, 4, false)
    common.move(3, 4, false)
    common.move(4, 2, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);


    // 瞎鸡儿点
    click(1463, 751)
    sleep(1000)
    // 点第二下
    click(1463, 751)
    sleep(800)

}


function fight_enemy2() {

    common.swipe_left()

    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.all_boost()

    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.all_switch()
    common.move(1, 4, false)
    common.move(3, 4, false)

    common.move(4, 4, false)
    common.move(2, 3, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);


    // 瞎鸡儿点
    click(1463, 751)
    sleep(1000)
    // 点第二下
    click(1463, 751)
    sleep(800)

}


function fight_enemy3() {

    common.swipe_up()
    common.swipe_right()

    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.all_boost()
    common.start_attack(1000)

    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.all_switch()
    common.move(1, 4, false)
    common.move(2, 2, false)
    common.move(3, 2, false)
    common.move(4, 2, false)
    common.all_boost()
    common.start_attack(1000)

    while (!common.checkCombatEnd()) sleep(1000);


    // 瞎鸡儿点
    click(1463, 751)
    sleep(1000)
    // 点第二下
    click(1463, 751)
    sleep(800)

}

function fight_enemy4() {

    common.swipe_left()

    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.all_boost()

    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.all_switch()
    common.move(1, 2, false)
    common.move(3, 2, false)

    common.move(4, 3, false)
    common.move(2, 3, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);


    // 瞎鸡儿点
    click(1463, 751)
    sleep(1000)
    // 点第二下
    click(1463, 751)
    sleep(800)

}

function fight_enemy5() {
    common.swipe_up()

    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.all_boost()

    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.all_switch()
    common.move(1, 4, false)
    common.move(2, 2, false)
    common.move(3, 4, false)
    common.move(4, 2, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);


    // 瞎鸡儿点
    click(1463, 751)
    sleep(1000)
    // 点第二下
    click(1463, 751)
    sleep(800)
}

function fight_enemy6() {
    common.swipe_up()

    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.all_boost()

    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.all_switch()
    common.move(1, 4, false)
    common.move(2, 2, false)
    common.move(3, 4, false)
    common.move(4, 2, false)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkCombatEnd()) sleep(1000);


    // 瞎鸡儿点
    click(1463, 751)
    sleep(1000)
    // 点第二下
    click(1463, 751)
    sleep(800)
}





// enemy 1
var counter = 0;
common.click_little_map()
click(1349, 456)
sleep(500)
go_or_run()
sleep(500)
switch_team(0)
while (1) {
    fight_enemy1();
    counter += 1;
    var result = common.checkSoul();
    if (result > 0) {
        log('[1] 出了！' + counter + '次！')
        log(result)
        // 点第三下
        click(1463, 751)
        break;
    }
    log('[1] ' + counter + '次，没出～～')
    task_kill();
    relaunch();
}
sleep(5000)
switch_team(1)
common.click_little_map()
click(1118, 175)
sleep(500)
go_or_run()



// enemy 2
counter = 0;
common.click_little_map()
click(1234, 275)
sleep(500)
go_or_run()
sleep(500)
switch_team(0)
while (1) {
    fight_enemy2();
    counter += 1;
    var result = common.checkSoul();
    if (result > 0) {
        log('[2] 出了！' + counter + '次！')
        log(result)
        // 点第三下
        click(1463, 751)
        break;
    }
    log('[2] ' + counter + '次，没出～～')
    task_kill();
    relaunch();
}
sleep(5000)
switch_team(1)
common.return_to_hotel_door()
click(1991, 386)
sleep(1500)
while (!common.checkStanding()) {
    sleep(1000);
}

// enemy 3
counter = 0;
common.click_little_map()
click(1482, 377)
sleep(500)
go_or_run()
sleep(500)
switch_team(0)
while (1) {
    fight_enemy3();
    counter += 1;
    var result = common.checkSoul();
    if (result > 0) {
        log('[3] 出了！' + counter + '次！')
        log(result)
        // 点第三下
        click(1463, 751)
        break;
    }
    log('[3] ' + counter + '次，没出～～')
    task_kill();
    relaunch();
}
sleep(5000)
switch_team(1)
common.click_little_map()
click(1335, 144)
sleep(500)
go_or_run()

// enemy 4
counter = 0;
common.click_little_map()
click(1059, 498)
sleep(500)
go_or_run()
sleep(500)
switch_team(0)
while (1) {
    fight_enemy4();
    counter += 1;
    var result = common.checkSoul();
    if (result > 0) {
        log('[4] 出了！' + counter + '次！')
        log(result)
        // 点第三下
        click(1463, 751)
        break;
    }
    log('[4] ' + counter + '次，没出～～')
    task_kill();
    relaunch();
}
sleep(5000)
switch_team(-1)
common.click_world_map()
click(2037, 914)
sleep(800)
// ヴァローレ
click(1542, 250)
sleep(800)
click(1231, 546)
click(1231, 546)
sleep(800)
// 裏森
click(1162, 637)
sleep(800)
// 到这里去
click(1870, 905)
sleep(1300)
// fast travel的确认
click(1432, 695)
while (!common.checkStanding()) {
    sleep(1000);
}

// enemy 5
common.click_little_map()
click(1442, 668)
sleep(500)
go_or_run()
sleep(500)
// 这个不sl
fight_enemy5()
click(1463, 751)
sleep(5000)

common.click_little_map()
click(1661, 470)
sleep(500)
go_or_run()


// enemy 6
counter = 0;
common.click_little_map()
click(1651, 473)
sleep(500)
go_or_run()
sleep(500)
switch_team(0)
while (1) {
    fight_enemy6();
    counter += 1;
    var result = common.checkSoul();
    if (result > 0) {
        log('[6] 出了！' + counter + '次！')
        log(result)
        // 点第三下
        click(1463, 751)
        break;
    }
    log('[6] ' + counter + '次，没出～～')
    task_kill();
    relaunch();
}
sleep(5000)
switch_team(-2)

