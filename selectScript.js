//  2017.09 @kao-carrot

window.onload = function () {
    // 問題ページであれば
    if (Boolean(document.getElementById('sound_flash'))) {
        // 問題セットのIDを取得
        sessionStorage.setItem("lastSetID", Number(document.getElementById('sound_flash').innerHTML.split('"')[3].split("/")[6]));
    }

    // 次ページ遷移の処理の埋め込み
    // もともとあったページ内関数を呼び出すため、埋め込む必要がある。
    var injectScript;
    injectScript = function (file, node) {
        var s, th;
        th = document.getElementsByTagName(node)[0];
        s = document.createElement('script');
        s.setAttribute('type', 'text/javascript');
        s.setAttribute('src', file);
        return th.appendChild(s);
    };
    injectScript(chrome.extension.getURL('/embeddedNextSetScript.js'), 'body');

}

// キーが押されたら呼ばれる関数
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
};

//  解答ボタンと次の問題へを送る関数
function push_button() {
    //  解答ボタンがあるかどうか
    if (document.getElementById("ans_submit") != null) {
        //  あれば、押す
        document.getElementById('ans_submit').click();
    } else {
        // 25問目（最終問題）かどうか
        if (document.getElementsByClassName("bloc-resp bloc-resp-data")[1].textContent == "25 点（25 点満点）") {
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