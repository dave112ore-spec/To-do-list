
let textinputinputarea=document.getElementById("textinputinputarea");
let todolistbtn=document.querySelector("#todolistbtn");
let textinputresult=document.querySelector("#textinputresult");
let todolistfirm =document.querySelector("#todolistfirm ");
try{
todolistbtn.addEventListener("click",ggx);
function ggx(){
    let   textinputvalue= textinputinputarea.value;
    let todolistdiv=document.createElement("div");
    todolistdiv.innerHTML=textinputvalue;
    let todolistremovebtn=document.createElement("button");
    todolistremovebtn.innerHTML="Remove";
    todolistremovebtn.className="todolistremovebtn";
      let todolistdivandremovebtn=document.createElement("div");
     todolistdivandremovebtn.className="todolistdivandremovebtn";
    todolistfirm.classList.add("todolistfirm");
     todolistfirm.classList.add("todolistfirm");
     if(textinputvalue.length==""){
         todolistremovebtn.style.display="none";
           todolistdivandremovebtn.classList.remove(" todolistdivandremovebtn");
     }
      todolistremovebtn.addEventListener("click",function(){
        todolistdivandremovebtn.remove();
      })
      todolistdivandremovebtn.appendChild(todolistdiv);
     todolistdivandremovebtn.appendChild(todolistremovebtn);
    
     textinputresult.appendChild(todolistdivandremovebtn);
  
    textinputinputarea.value="";
}

document.addEventListener("keydown",function(e){
    if(e.key=="Enter"){
      ggx();
    }
});
}

catch(error){
console.log("Error");
}
finally{
    console.log("Finished");
}

       