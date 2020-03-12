// function P1(){
//     var text = document.getElementById("text1");
//     var post = document.getElementById("post1");
//    post.innerHTML = text.value;
// }
// function P2(){
//     var text = document.getElementById("text1");
//     var replyy1 = document.getElementById("reply1");
//     replyy1.innerHTML = text.value;
// }
// function P3(){
//     var text = document.getElementById("text1");
//     var replyy2 = document.getElementById("reply2");
//     replyy2.innerHTML = text.value;
// }

count = 0;

function postFunction(){
    count = count + 1;  
if(count == 1){
    var text = document.getElementById("text1");
    var post = document.getElementById("post1");
    post.innerHTML = text.value; 
}

else if (count == 2){
    var text = document.getElementById("text1");
    var replyy1 = document.getElementById("reply1");
    replyy1.innerHTML = text.value;
}

else if (count == 3) {
    var text = document.getElementById("text1");
    var replyy2 = document.getElementById("reply2");
    replyy2.innerHTML = text.value;
}
else{
    count = 0;
}
}

function clearFunction(){
    var post = document.getElementById("post1");
    var replyy1 = document.getElementById("reply1");
    var replyy2 = document.getElementById("reply2");
    post.innerHTML = "";
    replyy1.innerHTML = "";
    replyy2.innerHTML = "";
    count = 0;
}

