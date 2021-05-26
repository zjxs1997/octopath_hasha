//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

// 检查进入战斗后是否出现猫
var cat = images.read("/storage/emulated/0/checkPic/mycat.jpg")
function checkCat() {
    var img = null;
    while(!img) {
        log("尝试截图");
        img = captureScreen();
    }
    var key = findImage(img, cat, {
        region: [738, 442, 100, 100]
    })
    toastLog(key)
    if (key)
        return 1;
    else
        return 0;
}

// 人物停住的时候，返回1，原理是检查菜单左下角
var halt = images.read("/storage/emulated/0/checkPic/haltpic.jpg")
function checkStanding() {
    var haltX = 400;
    var haltY = 900;
    var img = null;
    while(!img) {
        log("尝试截图");
        img = captureScreen();
    }
    var key = findImage(img, halt, {
        region: [haltX, haltY, 50, 50]
    })
    if (key)
        return 1;
    else
        return 0;
}
// 判断是否进入战斗，进入返回1，原理是检查战斗中的逃走选项是否存在
var escape = images.read("/storage/emulated/0/checkPic/startpic1.jpg")
function checkCombat() {
    var escapeX = 1170;
    var esacapeY = 900;
    //截图判断
    var img = null;
    while(!img) {
        img = captureScreen();
    }
    var key = findImage(img, escape, {
        region: [1170, 900, 50, 50]
    })
    if (key)
        return 1;
    else
        return 0;
}
// 检查战斗是否结束，结束返回1，原理是检查结算界面的硬币icon（部分）
var coin = images.read("/storage/emulated/0/checkPic/coin.jpeg");
function checkCombatEnd() {
    //截图判断
    var img = null;
    while(!img) {
        img = captureScreen();
    }
    var key = findImage(img, coin, {
        region: [1680, 240, 50, 50]
    })
    if (key)
        return 1;
    else
        return 0;
}

// 点选技能
function move(person, skill, do_switch) {
    switch(person) {
        case 1:
            click(2041, 126)
            break;
        case 2:
            click(2041, 311)
            break;
        case 3:
            click(2041, 531)
            break;
        case 4:
            click(2041, 721)
            break;
    }
    sleep(1000)

    if (do_switch) {
        click(1545, 873)
        sleep(1000)    
    }

    switch(skill) {
        case 2:
            click(1537, 409)
            break;
        case 3:
            click(1533, 575)
            break;
        case 4:
            click(1502, 760)
            break;
    }
    sleep(1000)
}

// all boost
function all_boost() {
    click(1678, 908)
    sleep(1300)
}

// all switch
function all_switch() {
    click(1526, 944)
    sleep(1000)
}

// 从聞き出す开始整个挑战的过程
function challenge_npc() {
    // 右下角挑战按钮，kikidasu
    click(2104, 901)
    sleep(3400)
    // 引き入れる
    click(1765, 561)
    sleep(1600)
    // 确认危险度等
    click(1432, 730)
    sleep(1600)
    // 确认关系
    click(1463, 751)
    sleep(3400)
    // 瞎鸡儿点，一般这个时候是对话
    click(1463, 751)
    sleep(5700)
}
// 从聞き出す开始雇佣npc
function hire_npc() {
    // 右下角聞き出す
    click(2104, 901)
    sleep(3400)
    // 雇う（やとう）
    click(1765, 561)
    sleep(1600)
    // 不砍价了
    click(1668, 593)
    sleep(1600)
    // 确认价格
    click(1437, 730)
    sleep(3400)
    // 瞎鸡儿点，一般这个时候是对话
    click(1463, 751)
    sleep(1300)
    // 已加入，确认
    click(1253, 708)
    sleep(1000)
    // 右上角叉叉
    click(2082, 69)
    sleep(1000)
}

// 从地图开始取消支援
function cancel_support() {
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

// 从地图开始，回到当前城镇的旅店门口
function return_to_hotel_door() {
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
}

// 点右上角小地图
function click_little_map() {
    click(2063, 165)
    sleep(1600)
}

// 点右下角attack并sleep
function start_attack(time) {
    click(2020, 929)
    sleep(time)
}

// 战斗结束后的确认
function battle_epilouge() {
    // 确认加入后的ok
    click(1236, 699)
    sleep(1600)
    // 右上角叉叉
    click(2104, 28)
    sleep(2600)
}

// 从确认睡觉到出旅店门前
function confirm_rest() {
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
    // 未出门
}



