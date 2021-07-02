// 这里收录的都是应该所有情况通用的函数，没有假定任何可能不一样的坐标。
// 使用的话require试试看，不知道可不可以（还没有测试过）


// //截屏权限请求
// if (!requestScreenCapture(true)) {
//     toast("请求截图失败");
//     exit();
// }


var functions = {};






// --------------------------------------------------------
// 检查类函数，用到这些的话，需要请求截图权限
// --------------------------------------------------------

// 检查进入战斗后是否出现猫
var cat = images.read("/storage/emulated/0/checkPic/mycat.jpg")
var littleCat = images.read("/storage/emulated/0/checkPic/mylitcat.jpg")
functions.checkCat = function() {
    var img = null;
    while(!img) {
        img = captureScreen();
    }
    var key = findImage(img, cat, {
        region: [668, 392, 500, 500]
    })
    if (key){
        return 1;
    }     
    var key2 = findImage(img, littleCat, {
        // region: []
    })
    img.recycle();
    if (key2) {
        return 2;
    }
    return 0;
}
// 人物停住的时候，返回1，原理是检查菜单左下角
var halt = images.read("/storage/emulated/0/checkPic/haltpic.jpg")
functions.checkStanding = function() {
    var haltX = 400;
    var haltY = 900;
    var img = null;
    while(!img) {
        img = captureScreen();
    }
    var key = findImage(img, halt, {
        region: [haltX, haltY, 50, 50]
    })
    img.recycle();
    if (key)
        return 1;
    else
        return 0;
}
// 判断是否进入战斗，进入返回1，原理是检查战斗中的逃走选项是否存在
var escape = images.read("/storage/emulated/0/checkPic/startpic1.jpg")
functions.checkCombat = function() {
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
    img.recycle();
    if (key)
        return 1;
    else
        return 0;
}
// 检查战斗是否结束，结束返回1，原理是检查结算界面的硬币icon（部分）
var coin = images.read("/storage/emulated/0/checkPic/coin.jpeg");
functions.checkCombatEnd = function () {
    //截图判断
    var img = null;
    while(!img) {
        img = captureScreen();
    }
    var key = findImage(img, coin, {
        region: [1680, 240, 50, 50]
    })
    img.recycle();
    if (key)
        return 1;
    else
        return 0;
}


// 检测是否有胜利的勋章的那个icon（有点像棱形）
var medal = images.read("/storage/emulated/0/checkPic/medal.jpg");
functions.checkMedal = function () {
    var img = null;
    while(!img) {
        img = captureScreen();
    }
    var result = findImage(img, medal, {
        region: [970, 450, 50, 50]
    });
    img.recycle();
    if (result)
        return 1;
    else
        return 0;
}

// 检测中间是否有个閉じる
var closewin = images.read("/storage/emulated/0/checkPic/closewin.jpg");
functions.checkCloseWin = function () {
    var img = null;
    while(!img) {
        img = captureScreen();
    }
    var result = findImage(img, closewin, {
        region: [1185, 555, 50, 50]
    });
    img.recycle();
    if (result)
        return 1;
    else
        return 0;
}

//判断是否在jjc中展开战斗
var arena_escape = images.read("/storage/emulated/0/checkPic/arena_escape.jpg")
functions.checkArenaCombat = function() {
    //截图判断
    var img = null;
    while(!img) {
        img = captureScreen();
    }
    var key = findImage(img, arena_escape, {
        region: [1170, 900, 50, 50]
    })
    img.recycle();
    if (key)
        return 1;
    else
        return 0;
}


// 检测后排是否有人倒下
var death2 = images.read("/storage/emulated/0/checkPic/death2.png");
functions.checkBackDeath = function () {
    var img = null;
    while(!img) {
        img = captureScreen();
    }
    var result = images.matchTemplate(img, death2, {
        region: [960, 0],
        threshold: 0.8
    }).matches;
    img.recycle()
    if (result.length > 0)
        return 1;
    else
        return 0;
}






// --------------------------------------------------------
// 操作类函数
// --------------------------------------------------------

// 点选技能
functions.move = function (person, skill, do_switch) {
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
        case 1:
            click(1609, 284)
            break;
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

functions.swipe_left = function () {
    swipe(1548, 589, 674, 589, 2000)
}
functions.swipe_right = function () {
    swipe(674, 589, 1548, 589, 2000)
}
functions.swipe_up = function () {
    swipe(1738, 700, 1738, 200, 2000)
}
functions.swipe_down = function () {
    swipe(1738, 200, 1738, 700, 2000)
}

functions.end_combat = function () {
    // 战斗结束，瞎鸡儿三点
    click(1463, 751)
    sleep(1500)
    click(1463, 751)
    sleep(1500)
    click(1463, 751)
    sleep(5600)
}



// 召唤支援者
functions.use_first_support = function () {
    click(1352, 922)
    sleep(800)
    click(1372, 424)
    sleep(800)
    // 呼び出す
    click(1493, 866)
    sleep(800)
}

// all boost
functions.all_boost = function() {
    click(1678, 908)
    sleep(1300)
}

// all switch
functions.all_switch = function () {
    click(1526, 944)
    sleep(1000)
}

// 从聞き出す开始整个挑战的过程
functions.challenge_npc = function () {
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
functions.hire_npc = function () {
    // 右下角聞き出す
    click(2104, 901)
    sleep(3400)
    // 雇う（やとう）
    click(1765, 561)
    sleep(2000)
    // 还是砍一下吧～
    click(1209, 724)
    sleep(2000)
    // 确认价格
    click(1437, 730)
    sleep(3400)
    // 瞎鸡儿点，一般这个时候是对话
    click(1463, 751)
    sleep(1300)
    // 已加入，确认
    click(1253, 708)
    // 新版本
    sleep(3000)
    // 右上角叉叉
    click(2082, 69)
    sleep(1500)
}

// 从地图开始取消支援
functions.cancel_support = function () {
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
functions.return_to_hotel_door = function () {
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
    // 这个其实可以用while checkStanding，但是暂时就先这样吧
    sleep(8500)
}

// 点右上角小地图
functions.click_little_map = function () {
    click(2063, 165)
    sleep(1600)
}

functions.click_world_map = function () {
    // 大陆地图菜单
    click(1151, 896)
    sleep(1800)
}
functions.click_map_shrink = function () {
    click(2046, 935)
    sleep(1000)
}
// 点右下角attack并sleep
functions.start_attack = function (time) {
    click(2020, 929)
    sleep(time)
}

// 战斗结束后的确认
functions.battle_epilouge = function () {
    // 确认加入后的ok
    click(1236, 699)
    // 新版，感觉是这里要改？
    sleep(4600)
    // 右上角叉叉
    click(2104, 28)
    sleep(2600)
}

// 从确认睡觉到出旅店门前
functions.confirm_rest = function () {
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

module.exports = functions;

