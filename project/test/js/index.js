function Checkform() {

    if( frm.name.value == "" ) {
    
        frm.name.focus();
        alert("성명을 입력해 주십시오.");
        
        return false;
        
    }
    if( (frm.post[0].checked == false) && (frm.post[1].checked == false) ) {

        alert("우편물 수령 장소를 선택해 주십시오.");
        return false;

    }
    if(frm.confirm.checked != true){

        alert("개인정보 수집에 동의해 주세요.");
        frm.confirm.focus();

        return false;

    }
}
