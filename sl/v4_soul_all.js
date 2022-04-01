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


function judger0(result) {
    return result == 1;
}
function judger1(result) {
    return result == 2;
}
function judger2(result) {
    return result > 0;
}

var options = ["both", "虹", "金"];
var i = dialogs.singleChoice("选择素材类型", options);
judger = [judger2, judger1, judger0][i];
toastLog("你选择了" + options[i])
sleep(1000)


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

    common.swipe_down()

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

    common.swipe_left()

    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.all_boost()
    common.start_attack(1000)

    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.all_switch()
    common.move(1, 4, false)
    common.move(2, 2, false)
    common.move(3, 3, false)
    common.move(4, 3, false)
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

    common.swipe_down()

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
    common.move(3, 3, false)
    common.move(4, 3, false)
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
    common.move(3, 3, false)
    common.move(4, 3, false)
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



// enemy 4
var counter = 0;
common.click_little_map()
click(1352, 595)
sleep(500)
go_or_run()
sleep(500)
switch_team(0)
while (1) {
    fight_enemy4();
    counter += 1;
    var result = common.checkSoul();
    if (judger(result)) {
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
switch_team(-1)


// enemy 3
counter = 0;
common.click_little_map()
click(1358, 721)
sleep(500)
go_or_run()
sleep(500)
switch_team(0)
while (1) {
    fight_enemy3();
    counter += 1;
    var result = common.checkSoul();
    if (judger(result)) {
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
switch_team(-1)


// enemy 2
counter = 0;
common.click_little_map()
click(1359, 772)
sleep(500)
go_or_run()
sleep(500)
switch_team(0)
while (1) {
    fight_enemy2();
    counter += 1;
    var result = common.checkSoul();
    if (judger(result)) {
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
switch_team(-1)


// enemy 1
counter = 0;
common.click_little_map()
click(1507, 762)
sleep(500)
go_or_run()
sleep(500)
switch_team(0)
while (1) {
    fight_enemy1();
    counter += 1;
    var result = common.checkSoul();
    if (judger(result)) {
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


// // enemy 5
// common.click_little_map()
// click(1442, 668)
// sleep(500)
// go_or_run()
// sleep(500)

// switch_team(0)
// while (1) {
//     fight_enemy5();
//     counter += 1;
//     var result = common.checkSoul();
//     if (result > 0) {
//         log('[5] 出了！' + counter + '次！')
//         log(result)
//         // 点第三下
//         click(1463, 751)
//         break;
//     }
//     log('[5] ' + counter + '次，没出～～')
//     task_kill();
//     relaunch();
// }
// sleep(5000)

// common.click_little_map()
// click(1661, 470)
// sleep(500)
// go_or_run()


// // enemy 6
// counter = 0;
// common.click_little_map()
// click(1651, 473)
// sleep(500)
// go_or_run()
// sleep(500)
// switch_team(0)
// while (1) {
//     fight_enemy6();
//     counter += 1;
//     var result = common.checkSoul();
//     if (result > 0) {
//         log('[6] 出了！' + counter + '次！')
//         log(result)
//         // 点第三下
//         click(1463, 751)
//         break;
//     }
//     log('[6] ' + counter + '次，没出～～')
//     task_kill();
//     relaunch();
// }
// sleep(5000)
// switch_team(-2)

