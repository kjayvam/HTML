function loginCheck() {
	//	아이디
	if (document.login.id.value.length == 0) {
		alert("아이디는 필수사항입니다.(js)");
		login.id.focus();
		return;
	} else if (document.login.id.value.length < 4) {
		alert("아이디는 4글자 이상이어야 합니다.(js)");
		login.id.focus();
		return;
	}
	//	비밀번호
	if (document.login.pw.value.length == 0) {
		alert("비밀번호는 필수사항입니다.(js)");
		login.pw.focus();
		return;
	}
	document.login.submit(); // 위의 모든것이 만족하면 submit함
}

//아이디찾기 페이지 이동하기
function idFind() {
	window.location = 'idFind.jsp'
}
//비밀번호찾기 페이지 이동하기
function pwFind() {
	window.location = 'pwFind.jsp'
}
//회원가입 페이지 이동하기
function signUp() {
	window.location = 'signUp.jsp'
}
