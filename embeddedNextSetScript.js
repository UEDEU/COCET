// 次の問題セットへ移動する関数
function goNextSet() {
    // セッションストレージに、直前のIDが保存されていれば
    if (sessionStorage.getItem("lastSetID") != null) {
        // 次のセットIDを生成
        var nowSetCode = sessionStorage.getItem("lastSetID");
        var nextSetCode = Number(nowSetCode) + 4;

        // 次のセットへ移動
        select_unit('drill', nextSetCode, '');
    }
}

document.onkeydown = function (e) {
    var keyCode = false;
    if (e) {
        event = e;
    }
    if (event) {
        if (event.keyCode) {
            keyCode = event.keyCode;
        } else if (event.which) {
            keyCode = event.which;
        }
    }

    // n
    if (keyCode == "78") {
        console.log("n: pressed");
        goNextSet();
    }
}