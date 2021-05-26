auto()


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

// town2hole()
// toastLog(111)
// sleep(1000)
// hole2town()

// 点右上角小地图
function click_little_map() {
    click(2063, 165)
    sleep(1600)
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
// 在シェパードロック招募身軽な大工 （みがるなだいく）
function hire_worker() {
    click_little_map()
    click(1544, 595)
    sleep(10000)
    click(1501, 499)
    sleep(1000)
    hire_npc()
}

hire_worker()

