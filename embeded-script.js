// ���̖��Z�b�g�ֈړ�����֐�
function goNextSet() {
    // �Z�b�V�����X�g���[�W�ɁA���O��ID���ۑ�����Ă����
    if (sessionStorage.getItem("lastSetID") != null) {
        // ���̃Z�b�gID�𐶐�
        var nowSetCode = sessionStorage.getItem("lastSetID");
        var nextSetCode = Number(nowSetCode) + 4;

        // ���̃Z�b�g�ֈړ�
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