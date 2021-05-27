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
    sleep(3000)
    // 右上角叉叉
    click(2082, 69)
    sleep(1000)
}


hire_npc()
