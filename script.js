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
    injectScript(chrome.extension.getURL('embeddedScript.js'), 'body');

}