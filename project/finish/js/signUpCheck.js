function infoConfirm() {
    //	닉네임
    if (document.signUp.nick.value.length == 0) {
        alert("닉네임는 필수사항입니다.(js)");
        signUp.nick.focus();
        return;
    } else if (document.signUp.nick.value.length > 10) {
        alert("닉네임 너무 길어요.(js)");
        signUp.nick.focus();
        return;
    }
    //	아이디
    if (document.signUp.id.value.length == 0) {
        alert("아이디는 필수사항입니다.(js)");
        signUp.id.focus();
        return;
    } else if (document.signUp.id.value.length < 5) {
        alert("아이디 너무 짧아요.(js)");
        signUp.id.focus();
        return;
    } else if (document.signUp.id.value.length > 15) {
        alert("아이디 너무 길어요.(js)");
        signUp.id.focus();
        return;
    }
    //	비밀번호
    if (document.signUp.pw.value.length == 0) {
        alert("비밀번호는 필수사항입니다.(js)");
        signUp.pw.focus();
        return;
    } else if (document.signUp.pw.value.length < 8) {
        alert("비밀번호 너무 짧아요.(js)");
        signUp.pw.focus();
        return;
    } else if (document.signUp.pw.value.length > 15) {
        alert("비밀번호 너무 길어요.(js)");
        signUp.pw.focus();
        return;
    }
    //	비밀번호 확인
    if (document.signUp.pw.value != document.signUp.pwCheck.value) {
        alert("비밀번호가 일치하지 않습니다.(js)");
        signUp.pw.focus();
        return;
    }
    //	이름
    if (document.signUp.name.value.length == 0) {
        alert("이름은 필수사항입니다.(js)");
        signUp.name.focus();
        return;
    }
    //	생일
    if (document.signUp.birth.value.length == 0) {
        alert("생일은 필수사항입니다.(js)");
        signUp.birth.focus();
        return;
    }
    //	성별
    if (document.signUp.sex.value.length == 0) {
        alert("생일은 필수사항입니다.(js)");
        signUp.sex.focus();
        return;
    }
    //	전화번호
    if (document.signUp.num.value.length == 0) {
        alert("전화번호는 필수사항입니다.(js)");
        signUp.num.focus();
        return;
    }
    document.signUp.submit();		// 위의 모든것이 만족하면 submit함
}

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