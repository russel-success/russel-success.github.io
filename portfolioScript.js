var iDesign=document.querySelector(".iDesignAnimate");
const iBrandList=["iDevelop","iCreate","iIllustrate","iTeam","iCode"];
let i=-1;
setInterval(()=>{
    if(i<iBrandList.length&&i+1<iBrandList.length){ ++i;
    iDesign.innerHTML=iBrandList[i];
    }
    else i=-1;
},2000);
var emailme=document.querySelector(".email");
var alldoc=document.querySelector(".outofform");
var form=document.querySelector("form");
emailme.addEventListener("click",()=>{
    alldoc.style.transition="0.3s";
    alldoc.style.zIndex="1";
    form.style.display="flex";
    form.style.opacity="1"
    form.style.zIndex="2";
    alldoc.style.filter="blur(4px)";
});
function closeFormFx(){
    form.style.zIndex=1;
    alldoc.style.zIndex=2;
    alldoc.style.filter="blur(0px)";
}    
closeForm=document.querySelector(".close");
closeForm.onclick=closeFormFx;    

submitB=document.querySelector("#formButton");
submitB.onclick=closeFormFx;
form.onblur=closeFormFx;


