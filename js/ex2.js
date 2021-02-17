var input=document.querySelector(".b_input");
var btn=document.querySelector(".b_btn");
var blocklist=document.querySelector(".b_list");

function createElements(text){
    var newElem=document.createElement("p");
    var deleteSpan=document.createElement("span");
    var checker = document.createElement("INPUT");
    checker .setAttribute("type", "checkbox");
    checker.className="b_boxes";
    deleteSpan.className="b_delete";
    deleteSpan.textContent="delete";
    newElem.className="b_elem";
    newElem.textContent=text;
    newElem.appendChild(deleteSpan);
    newElem.appendChild(checker);
    checker.addEventListener("click",function(){
        if(checker.checked==true)
            newElem.style.textDecoration="line-through";
        else{
            newElem.style.textDecoration="none";
        }
    })
    deleteSpan.addEventListener("click",function(){
        blocklist.removeChild(newElem);
    });
    blocklist.appendChild(newElem);
}

    btn.addEventListener("click",function(e){
        e.preventDefault();
        if(!(input.value==="New Task"||input.value==="")){
            createElements(input.value);
            input.value="New Task";
        }

    });
    input.addEventListener("focus",function(){
        input.value="";
    });
    input.addEventListener("blur",function(){
        if(input.value===""){
            input.value="New Task";
        }
    });

