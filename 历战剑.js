// 现在的这些脚本都需要估算战斗时间，需要更便捷的方式检测战斗结束
// 比如检测截图中是否出现attack按钮

// 另外，这个脚本因为暂时用不上，所以还没有写周回配置


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
    click(1347, 574)
    sleep(9000)

    for (var i = 0; i < 1; ++i) {
        // 点npc
        if (i == 0)
            click(1459, 462)
        else
            click(1354, 437)
        sleep(2600)

        challenge_npc()

        // turn 1

        // turn 2

        // turn 3

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

}


