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
    //  �e���L�[��1
    if (keyCode == "97") {
        document.getElementById("answer_0_0").checked = true;
    }
    //  �e���L�[��2
    if (keyCode == "98") {
        document.getElementById("answer_0_1").checked = true;
    }
    //  �e���L�[��3
    if (keyCode == "99") {
        document.getElementById("answer_0_2").checked = true;
    }
    //  �e���L�[��4
    if (keyCode == "100") {
        document.getElementById("answer_0_3").checked = true;
    }
    //  �e���L�[��5
    if (keyCode == "101") {
        document.getElementById("answer_0_4").checked = true;
    }
    //  Enter�ƃe���L�[��Enter
    if (keyCode == "13") {
        push_button();
    }
    //  �X�y�[�X
    if (keyCode == "32") {
        push_button();
    }
}

//  �𓚃{�^���Ǝ��̖��ւ𑗂�֐�
function push_button() {
    //  �𓚃{�^�������邩�ǂ���
    if (document.getElementById("ans_submit") != null) {
        //  ����΁A����
        document.getElementById('ans_submit').click();
    } else {
        // 25��ځi�ŏI���j���ǂ���
        if (document.getElementsByClassName("bloc-resp bloc-resp-data")[1].textContent == "25 �_�i25 �_���_�j") {
            // ���ꗗ��
            var obj = document.forms[10];
            obj.method = "POST";
            obj.submit();

        } else {
            //  �Ȃ�������A���[�U�[�����������͎̂��̖��ւ̂͂��B
            var obj = document.forms[8];
            obj.method = "POST";
            obj.submit();
        }
    }
}