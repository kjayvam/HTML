function loginCheck() {
	if (document.reg_frm.id.value.length == 0) {
		alert("아이디는 필수사항입니다.(js)");
		reg_frm.id.focus();
		return;
	}
	if (document.reg_frm.id.value.length < 4) {
		alert("아이디는 4글자 이상이어야 합니다.(js)");
		reg_frm.id.focus();
		return;
	}
	if (document.reg_frm.pw.value.length == 0) {
		alert("비밀번호는 필수사항입니다.(js)");
		reg_frm.pw.focus();
		return;
	}
	if (document.reg_frm.pw.value != document.reg_frm.pw_check.value) {
		alert("비밀번호가 일치하지 않습니다.(js)");
		reg_frm.pw.focus();
		return;
	}
	if (document.reg_frm.email.value.length == 0) {
		alert("메일는 필수사항입니다.(js)");
		reg_frm.email.focus();
		return;
	}
	document.reg_frm.submit(); // 위의 모든것이 만족하면 submit함
}

//아이디찾기 페이지 이동하기
function idFind() {
	window.location='idFind.jsp'
}
//비밀번호찾기 페이지 이동하기
function pwFind() {
	window.location='pwFind.jsp'
}
//회원가입 페이지 이동하기
function signUp() {
	window.location='signUp.jsp'
}
