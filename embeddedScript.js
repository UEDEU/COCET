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
    //  1
    if (keyCode == "49") {
        document.getElementById("answer_0_0").checked = true;
    }
    //  2
    if (keyCode == "50") {
        document.getElementById("answer_0_1").checked = true;
    }
    //  3
    if (keyCode == "51") {
        document.getElementById("answer_0_2").checked = true;
    }
    //  4
    if (keyCode == "52") {
        document.getElementById("answer_0_3").checked = true;
    }
    //  5
    if (keyCode == "53") {
        document.getElementById("answer_0_4").checked = true;
    }
    //  テンキーの1
    if (keyCode == "97") {
        document.getElementById("answer_0_0").checked = true;
    }
    //  テンキーの2
    if (keyCode == "98") {
        document.getElementById("answer_0_1").checked = true;
    }
    //  テンキーの3
    if (keyCode == "99") {
        document.getElementById("answer_0_2").checked = true;
    }
    //  テンキーの4
    if (keyCode == "100") {
        document.getElementById("answer_0_3").checked = true;
    }
    //  テンキーの5
    if (keyCode == "101") {
        document.getElementById("answer_0_4").checked = true;
    }
    //  EnterとテンキーのEnter
    if (keyCode == "13") {
        push_button();
    }
    //  スペース
    if (keyCode == "32") {
        push_button();
    }
}

//  解答ボタンと次の問題へを送る関数
function push_button() {
    //  解答ボタンがあるかどうか
    if (document.getElementById("ans_submit") != null) {
        //  あれば、押す
        document.getElementById('ans_submit').click();
    } else {
        // 25問目（最終問題）かどうか
        if (document.getElementsByClassName("bloc-resp bloc-resp-data")[1].textContent.slice(0,2) == 25) {
            // 問題一覧へ
            var obj = document.forms[10];
            obj.method = "POST";
            obj.submit();

        } else {
            //  なかったら、ユーザーが押したいのは次の問題へのはず。
            var obj = document.forms[8];
            obj.method = "POST";
            obj.submit();
        }
    }
}
