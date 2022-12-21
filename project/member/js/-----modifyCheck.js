// 아직 구현 안됬음






// 정보 수정
function updateInfoConfirm() {
    if (document.signUp.pw.value == "") {
        alert("패스워드를 입력하세요.(js)");
        document.signUp.pw.focus();    // password input에 focus가 가도록함
        return;
    }
    if (document.signUp.pw.value != document.signUp.pw_check.value) {
        alert("비밀번호가 일치하지 않습니다.(js)");
        signUp.pw.focus();
        return;
    }
    document.signUp.submit();      // 위의 모든것이 만족하면 submit함
}