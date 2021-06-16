// jjc药师半自动周回脚本，可能翻车
// 开局保证在追忆之书，jjc事件最下方
// 记得开战斗command记忆选项

auto();

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

var common = require("lib.js");

// todo
// todo，往lib里加入翻车检测&结束检测


function handleDeath() {
    if (common.checkBackDeath()) {
        // devicePixelRatio.vibrate(1000)
        log('有角色挂了，重开！')
        click(1198, 933);
        sleep(800);
        click(1483, 693);
    } else
        return false;
    while(!common.checkCloseWin()) sleep(1000);
    click(1240, 584)
    sleep(1000)
    return true;
}

function regener(do_switch) {
    click(2041, 126)
    sleep(1000)
    if (do_switch) {
        click(1545, 873)
        sleep(1000)
    }
    swipe(1604, 407, 2167, 407, 1500)
    sleep(200)
    click(1150, 580)
}

function move333() {
    click(2041, 531)
    sleep(1000)
    swipe(1665, 608, 2022, 608, 1500)
    sleep(200)
    click(1150, 580)
}

function move323() {
    click(2041, 531)
    sleep(1000)
    click(1545, 873)
    sleep(1000)
    swipe(1665, 438, 2022, 438, 1500)
    sleep(200)
    click(1150, 580)
}


counter = 0;
while (1) {
    // 読む
    click(1920, 735)
    sleep(800)
    // 确认
    click(1475, 739)
    sleep(5000)
    press(1250, 507, 2000)

    while (!common.checkArenaCombat()) sleep(1000);

    // turn 1
    common.move(2, 3, true)
    common.move(3, 3, true)
    common.move(4, 3, false)
    common.all_boost();
    common.move(1, 3, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 2
    regener(true);
    toast("hello")
    common.move(2, 4, false)
    toast("fuck")
    common.move(3, 2, false)
    common.move(4, 2, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 3
    common.move(1, 4, false)
    common.move(2, 2, true)
    common.move(4, 4, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 4
    common.move(2, 3, false)
    common.move(4, 3, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 5
    common.move(4, 4, false)
    common.all_boost()
    common.move(1, 4, false)
    common.move(2, 2, false)
    common.move(3, 2, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 6
    common.move(3, 3, false)
    common.all_boost()
    common.move(1, 4, false)
    common.move(2, 2, false)
    common.move(4, 4, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 7
    common.move(2, 3, true)
    common.all_boost()
    common.move(1, 4, false)
    common.move(3, 3, true)
    common.move(4, 2, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 8
    common.move(1, 4, true)
    common.move(2, 4, true)
    common.move(4, 2, true)
    common.all_boost()
    move333()
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 9
    common.move(2, 3, true)
    common.move(4, 3, true)
    common.all_boost();
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 10
    common.move(4, 2, true)
    common.all_boost()
    regener(true);
    move323();
    common.move(2, 2, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 11
    common.move(1, 3, true)
    move333();
    common.move(4, 3, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 12
    common.move(1, 4, true)
    common.all_boost();
    common.move(2, 2, false)
    common.move(3, 3, true)
    common.move(4, 4, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 13
    common.all_boost();
    common.move(2, 2, false)
    common.move(3, 3, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 14
    common.move(3, 2, true)
    common.move(4, 2, false)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 15
    common.move(2, 3, true)
    common.all_boost()
    common.move(1, 4, false)
    common.move(3, 3, true)
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);
    if (handleDeath()) continue;

    // turn 16
    common.move(1, 4, true)
    common.move(2, 4, true)
    common.move(4, 2, true)
    common.all_boost()
    move333();
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);

    // turn 17
    common.move(1, 2, false)
    common.move(2, 2, true)
    common.all_boost()
    common.start_attack(1000)
    while (!common.checkArenaCombat()) sleep(1000);

    



    device.vibrate(1500);
    // 接下来就是自己操作啦^_^



    
    // 最后是检测结束时候的勲章＆閉じる
    // 勋章确认
    while(!common.checkMedal()) sleep(3000);
    click(1249, 640)
    sleep(800)
    // 关闭确认
    click(1240, 584)
    sleep(800)


    counter++;
    log("周回了" + counter + "次！")
}

