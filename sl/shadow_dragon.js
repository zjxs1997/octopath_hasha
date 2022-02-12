// 阵容：
// 1.塞拉斯：2号技能大冰法，1号位置最好换成单冰
// 2. 索菲亚，常规三个技能
// 3. 女剑，常规，带个右手袋
// 4. 军师，常规技能，*但是要先把被动拉出来*



//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

var common = require("lib.js");

// 检查是否进游戏开场界面
var option_img = images.read("/storage/emulated/0/checkPic/option.jpg");
function check_opening() {
    var img = null;
    while (!img) {
        img = captureScreen();
    }
    var key = findImage(
        img, option_img, {
        region: [2030, 930, 80, 55]
    }
    )
    if (key)
        return 1;
    return 0;
}

function checker() {
    while (1) {
        if (common.checkCombat()) return 1;
        if (common.checkCombatEnd()) return 0;
        sleep(1000)
    }
}

// 检查是否有掉落：没有则返回1
var no_item_img = images.read("/storage/emulated/0/checkPic/nashi.jpg");
function check_no_item() {
    var img = null;
    while (!img) {
        img = captureScreen();
    }
    var key = findImage(
        img, no_item_img, {
        region: [1660, 370, 110, 75]
    }
    )
    if (key)
        return 1;
    return 0;
}


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

    while (!check_opening()) sleep(1000);
    // 随便点一下
    click(1140, 498)
    // 一直等到进去了
    while (!common.checkStanding()) sleep(1000);
}

function fight_shadow_dragon() {

    common.swipe_left()

    while (!common.checkCombat()) sleep(1000);

    // turn 1
    common.move(1, 3, false)
    common.move(2, 4, false)
    common.move(3, 4, false)
    common.move(4, 3, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 2
    common.move(1, 2, false)
    common.all_boost()
    common.move(2, 3, false)
    common.move(3, 4, false)
    common.move(4, 4, false)
    common.start_attack(1000)
    while (!common.checkCombat()) sleep(1000);

    // turn 3
    common.move(1, 3, false)
    common.move(2, 2, false)
    common.move(3, 2, false)
    common.all_boost()
    common.start_attack(1000)

    // while (!common.checkCombatEnd()) sleep(1000);
    var res = checker();
    if (res == 1) {
        common.all_boost()
        common.start_attack(1000)
        while (!common.checkCombatEnd()) sleep(1000);
    }
    // 瞎鸡儿点
    click(1463, 751)
    sleep(1000)
    // 点第二下
    click(1463, 751)
    sleep(800)

}


var counter = 0;

while (1) {
    fight_shadow_dragon();
    counter += 1;
    var result = check_no_item();
    if (result == 0) {
        log('出了！' + counter + '次！')
        // 点第三下
        click(1463, 751)
        break;
    }
    log(counter + '次，没出～～')
    task_kill();
    relaunch();
}

