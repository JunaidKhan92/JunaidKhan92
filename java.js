let input=document.querySelector("input")
let btun=document.querySelector(".btn")
let in_comp=document.querySelector('.inComplete')
let comp=document.querySelector(".Complete")
let input_data=[];
//let Newdata=[];

function Add_value(){
  input_data=[];
  putData=[];
  let a=input.value
  if(a){
    input_data.push(a)
    putData.push(a)
    input.value="";
  }
 for(let c=0;c<input_data.length; c++){
  let li=document.createElement("li")
  let userTask=document.createTextNode(input_data[c])
  li.appendChild(userTask)
  li.className="text";
 in_comp.appendChild(li);
 }
  let texto = document.getElementsByClassName("text");

  for(let a=0; a<texto.length; a++){
     texto[a].onclick = function (){
       input.value=texto[a].innerText;
       texto[a].style.display="none";
       let b=putData.slice(a,a+1)
       Newdata=[];
       Newdata.push(input.value)
       console.log(Newdata)
       Completed()

       function Completed(){
        let li=document.createElement("li")
        let userTask=document.createTextNode(Newdata)
        li.appendChild(userTask)
        li.className="text2";
        comp.appendChild(li)
        let text2 = document.getElementsByClassName("text2");
        for(let a=0; a<Newdata.length; a++){
           Newdata[a].onclick = function (){
            input.value=Newdata[a].innerText;
             Newdata[a].style.display="none";
           }
          }
        } 
     }     
  }
}


input.addEventListener("keydown",(e)=>{
  if(e.key==="Enter"){
    Add_value()
  }
})
