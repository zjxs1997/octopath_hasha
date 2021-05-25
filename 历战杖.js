// 历战杖脚本
// 需要开局在river land城镇旅店门口
// 配置：
// 1号位女贼，技能2 anti guard；后排吟游诗人火舞，技能1达人
// 3号位ddl，技能2剑岚武斗
// 5号位稻草人，技能2四连风；后排默尔索，技能2风魔法
// 7号位管家，技能3三连，技能2风杀
// 后排挂个降风耐的，和一个降属防的

auto()

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

// 点右上角小地图
function click_little_map() {
    click(2063, 165)
    sleep(1600)
}

// 从kikidasu开始整个挑战的过程
function challenge_npc() {
    // 右下角挑战按钮，kikidasu
    click(2104, 901)
    sleep(3400)
    // 入引
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
    sleep(1400)
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



while (true) {

    click_little_map()
    click(1391, 453)
    sleep(7000)

    for (var i = 0; i < 2; ++i) {
        // 点npc
        click(1325, 590)
        sleep(2600)
        challenge_npc()
    
        // turn 1
        move(1, 2, true)
        move(3, 3, false)
        all_boost()
        move(2, 3, false)
        move(4, 4, false)
        start_attack(14640)

        // turn 2
        move(1, 3, true)
        move(2, 3, false)
        move(3, 3, true)
        move(4, 4, false)
        start_attack(13750)

        // turn 3
        move(1, 2, true)
        move(2, 3, false)
        move(3, 3, false)
        move(4, 3, false)
        all_boost()
        start_attack(14100)

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
        // 瞎鸡儿点
        click(1463, 751)
        sleep(2000)

        battle_epilouge()
        cancel_support()

    }
    return_to_hotel_door()
    // 进入旅店
    click(1250, 355)
    sleep(3600)
    // 旅店柜台
    click(1411, 433)
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
    click(1030, 680)
    sleep(6000)


}