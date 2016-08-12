//  2016.08 @kao-carrot

// キーが押されたら呼ばれるやつ
document.onkeydown = function(e) {
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
 
 	//  テンキーじゃない1
	if (keyCode == "49") {
		s_ans1();
	}
	//  テンキーじゃない2
	if (keyCode == "50") {
		s_ans2();
	}
	//  テンキーじゃない3
	if (keyCode == "51") {
		s_ans3();
	}
	//  テンキーじゃない4
	if (keyCode == "52") {
		s_ans4();
	}
	//  テンキーじゃない5
	if (keyCode == "53") {
		s_ans5();
	}
	//  でっかいEnterとテンキーのEnter
	if (keyCode == "13") {
		push_button();
	}
	//  Space
	if (keyCode == "32") {
		push_button();
	}
	
	//  テンキーの1
	if (keyCode == "97") {
		console.log("t_1 : pressed");
		s_ans1();
	}
	//  テンキーの2
	if (keyCode == "98") {
		console.log("t_2 : pressed");
		s_ans2();
	}
	//  テンキーの3
	if (keyCode == "99") {
		console.log("t_3 : pressed");
		s_ans3();
	}
	//  テンキーの4
	if (keyCode == "100") {
		console.log("t_4 : pressed");
		s_ans4();
	}
	//  テンキーの5
	if (keyCode == "101") {
		console.log("t_5 : pressed");
		s_ans5();
	}

};

//  1個目の選択肢を選ぶやつ
function s_ans1() {
	document.getElementById("answer_0_0").checked = true;
}
//  2個目の選択肢を選ぶやつ
function s_ans2() {
	document.getElementById("answer_0_1").checked = true;
}
//  3個目の選択肢を選ぶやつ
function s_ans3() {
	document.getElementById("answer_0_2").checked = true;
}
//  4個目の選択肢を選ぶやつ
function s_ans4() {
	document.getElementById("answer_0_3").checked = true;
}
//  5個目の選択肢を選ぶやつ
function s_ans5() {
	document.getElementById("answer_0_4").checked = true;
}
//  解答ボタンと次の問題へを送るやつ
function push_button() {
	//  とりあえず、解答ボタンが有るかどうか
	if (document.getElementById("ans_submit") != null) {
		//  あったら、押す
		document.getElementById('ans_submit').click();
	}else {
		//  なかったら、ユーザーが押したいのは次の問題へのはず。
		//  どうやらこいつだけフォームの送信らしいので、ちょいと強引に...
		var obj = document.forms[8];
		obj.method = "POST";
		obj.submit();	
	}
}