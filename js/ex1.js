
var i=1;
var q=30;
function checker() {
  var checkBox = document.getElementsByClassName("checkboxes");
  var text = document.getElementById("tdl");
  console.log(text);
  if (checkBox.checked == true){
      text.style.display = "block";
  } else {
      text.style.display = "none";
}
}
function myFunction() {

    let p=document.createElement('p'+i);
    let c=document.createElement("INPUT");
    let ims=document.createElement("BUTTON"+i);
    c.setAttribute("type","checkbox");
    
    p.innerHTML=document.getElementById("myText").value;
    p.classList.add("demo");
    c.classList.add("checkboxes");
    ims.classList.add("image");
    c.addEventListener('click',checker);
    let body=document.querySelector('body');
    
    p.style.marginTop=q+"px";
    c.style.marginTop=q+6+"px";
    ims.style.marginTop=q+3+"px";
    body.appendChild(p);
    p.appendChild(c);
    p.appendChild(ims);
    ims.addEventListener("click",function(){
      body.removeChild(p);
      body.removeChild(c);
      body.removeChild(ims);
    })
    i++;
    q=q+20;
    
    
    
    
    
  }