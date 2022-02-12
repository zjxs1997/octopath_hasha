// 阵容：



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
        click(895, 248)
        sleep(1000);
    }
}

function fight_enemy() {

    common.swipe_left()

    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.move(1, 3, false)
    common.move(2, 2, false)
    common.move(3, 3, false)
    common.move(4, 2, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
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


var counter = 0;

while (1) {
    fight_enemy();
    counter += 1;
    var result = common.checkSoul();
    if (result == 2) {
        log('出了！' + counter + '次！')
        // 点第三下
        click(1463, 751)
        break;
    }
    log(counter + '次，没出～～')
    task_kill();
    relaunch();
}

