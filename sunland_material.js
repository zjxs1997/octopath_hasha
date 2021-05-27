// 新地图刷素材脚本

// 开局需要在sunland新地图的洞穴
// 角色：1号位泰雷兹，3号技能全雷
// 3号位ddl，1号技能全风
// 其他工具人拉满即可

var battle_times = 0;

auto()

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

var cat = images.read("/storage/emulated/0/checkPic/mycat.jpg")
var littleCat = images.read("/storage/emulated/0/checkPic/mylitcat.jpg")
var halt = images.read("/storage/emulated/0/checkPic/haltpic.jpg")
var coin = images.read("/storage/emulated/0/checkPic/coin.jpeg");
var escape = images.read("/storage/emulated/0/checkPic/startpic1.jpg")

// 检查进入战斗后是否出现猫
function checkCat() {
    var img = null;
    while(!img) {
        log("尝试截图");
        img = captureScreen();
    }
    var key = findImage(img, cat, {
        region: [668, 392, 500, 500]
    })
    if (key){
        device.vibrate(1000)
        return 1;
    }     
    var key2 = findImage(img, littleCat, {
        // region: []
    })
    if (key2) {
        device.vibrate(1000)
        return 2;
    }
    return 0;
}
// 人物停住的时候，返回1，原理是检查菜单左下角
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

// all boost
function all_boost() {
    click(1678, 908)
    sleep(1300)
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
function click_little_map() {
    click(2063, 165)
    sleep(1600)
}
function click_world_map() {
    // 大陆地图菜单
    click(1151, 896)
    sleep(1800)
}

function hole2town() {
    click_world_map()
    click(1217, 741)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    sleep(8500)

    // 进入旅店
    click(1268, 302)
    sleep(3600)
    // 旅店柜台
    click(1407, 422)
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

function town2hole() {
    click_world_map()
    click(1262, 322)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    sleep(8500)

    click_world_map()
    click(1531, 610)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    sleep(8500)

}

function playerMove(f) {
    click_little_map();
    if (f) {
        click(1623, 289)
    } else {
        click(812, 864)
    }
    sleep(500)
}


var total_battle_times = 0;
var flag = true;
var i = 0;

while (1) {
    if (battle_times >= 10) {
        // 重置各种状态
        click_little_map()
        click(2085, 59)
        sleep(1000)
        hole2town();
        town2hole();
        battle_times = 0;
        flag = true;
    }
    if (checkStanding()) {
        playerMove(flag);
        flag = !flag;
    }

    i = 0;
    while (i < 10 && battle_times < 10) {
        sleep(2500)
        if (checkCombat()) {
            toastLog("进入战斗")
            battle_times++;
            total_battle_times++;
            sleep(2000)

            if (checkCat()) {
                toastLog("草，怎么是猫")
                // 逃跑
                click(1211, 957)
                sleep(6000)
                continue;
            }

            // 战斗流程，todo
            move(1, 4, false)
            move(2, 2, false)
            all_boost();
            click(2020, 929)
            sleep(1000)
        
            while (!checkCombatEnd()) {
                sleep(1000)
            }
        
            // 瞎鸡儿点
            click(1463, 751)
            sleep(2100)
            // 瞎鸡儿点
            click(1463, 751)
            sleep(3100)
            // 瞎鸡儿点
            click(1463, 751)
            sleep(5600)

            log("战斗了" + total_battle_times + '次')

            if (battle_times >= 10)
                break;

        } else {
            i++;
        }
    }
}

