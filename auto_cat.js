// 自动刷猫脚本，开局在霧灯かりの滝壺，并且叫满大工支援
// 1号位管家， 3号技能三连，1号技能刹那
// 3号位闪达，2号技能行云流水
// 5号和7号的3号位技能凑个6连


var kill_cat_times = 0;

auto()

//截屏权限请求
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}

var cat = images.read("/storage/emulated/0/checkPic/mycat.jpg")
var escape = images.read("/storage/emulated/0/checkPic/startpic1.jpg")
var halt = images.read("/storage/emulated/0/checkPic/haltpic.jpg")
var coin = images.read("/storage/emulated/0/checkPic/coin.jpeg");


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
    else
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

// 点右上角小地图
function click_little_map() {
    click(2063, 165)
    sleep(1600)
}
function click_world_map() {
    // 大陆地图菜单
    click(1151, 896)
    sleep(1800)
}
function click_map_shrink() {
    click(2046, 935)
    sleep(1000)
}

// 霧灯かりの滝壺去シェパードロック
function hole2town() {
    click_world_map()
    click_map_shrink()
    click(1947, 188)
    sleep(1400)
    // 到这里去
    click(1870, 905)
    sleep(1300)
    // fast travel的确认
    click(1432, 695)
    sleep(8500)
}

// シェパードロック先去ドニエスク
// 然后再去霧灯かりの滝壺
function town2hole() {
    click_world_map()
    click_map_shrink()
    click(409, 853)
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

// 从聞き出す开始雇佣npc
function hire_npc() {
    // 右下角聞き出す
    click(2104, 901)
    sleep(3400)
    // 雇う（やとう）
    click(1765, 561)
    sleep(1600)
    // 不砍价了
    click(1672, 767)
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
// 在シェパードロック旅店回复，并且招募身軽な大工 （みがるなだいく）
function heal_and_hire_worker() {
    // 进入旅店
    click(1241, 354)
    sleep(3600)
    // 旅店柜台
    click(1234, 441)
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
    click_little_map()
    // 出门
    click(1104, 668)
    sleep(6000)

    // 雇佣
    click_little_map()
    click(1544, 595)
    sleep(10000)
    click(1501, 499)
    sleep(1000)
    hire_npc()
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

function use_first_support() {
    click(1352, 922)
    sleep(800)
    click(1372, 424)
    sleep(800)
    // 呼び出す
    click(1493, 866)
    sleep(800)
}

function all_boost() {
    click(1678, 908)
    sleep(1300)
}

function all_switch() {
    click(1526, 944)
    sleep(1000)
}

// 待调试
function fightCat() {
    // turn 1
    move(1, 4, false)
    move(2, 3, false)
    move(3, 4, false)
    move(4, 4, false)
    // 调试
    toastLog('请您检阅！')
    sleep(10000)
    // attack
    click(2020, 929)
    sleep(1000)
    while (!checkCombat()) {
        sleep(1000)
    }

    // turn 2
    use_first_support()
    move(1, 2, false)
    all_boost()
    // 调试
    toastLog('请您检阅！')
    sleep(10000)
    // attack
    click(2020, 929)
    sleep(1000)
    while (!checkCombat()) {
        sleep(1000)
    }

    // turn 3
    all_switch()
    all_boost()
    // 调试
    toastLog('请您检阅！')
    sleep(10000)
    // attack
    click(2020, 929)
    sleep(1000)
    while (!checkEnd()) {
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
}


function playerMove(f) {
    click_little_map();
    if (f) {
        click(1250, 792)
    } else {
        click(1206, 353)
    }
    sleep(500)
}


// 主流程

var flag = true;

var i = 0;
var totalBattle = 0;
var catBattle = 0;


while (1) {
    if (kill_cat_times > 2) {
        // 重置各种状态
        hole2town();
        heal_and_hire_worker();
        town2hole();
        kill_cat_times = 0;
        flag = true;
    }

    if (checkStanding()) {
        playerMove(flag);
        flag = !flag;
    }

    i = 0;
    while(i < 10 && kill_cat_times < 3) {
        sleep(2500);
        if (checkCombat()) {
            toastLog("进入战斗")
            totalBattle++;
            sleep(2000);
            if (checkCat()) {
                toast("是猫，好耶")
                catBattle++;
                kill_cat_times++;
                fightCat();
                log('遇到'+totalBattle+'次战斗，其中' + catBattle +'次猫猫');
                if (kill_cat_times > 2) {
                    break;
                }
            } else {
                toast("溜了溜了")
                click(1191, 939)
                sleep(2500)
            }
        } else {
            i++;
        }
    }
}

