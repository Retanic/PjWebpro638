
window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm; 
}

function validateForm() {
    var x = document.forms["myForm"]["password"]
    var y = document.forms["myForm"]["repassword"]
    
    if(x.value == y.value){
        alert("Register Success!")
    
    }
    else{
        var errorhtml = document.getElementById("errormsg");
        errorhtml.innerHTML = "Error password";
       
        return false;
      
    }
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}

