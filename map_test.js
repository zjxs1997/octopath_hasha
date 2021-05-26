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

// todo
// 在シェパードロック招募身軽な大工 （みがるなだいく）
function hire_worker() {

}


