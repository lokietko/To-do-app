var time= new Date();
const dzien=time.getDate();
const mies=time.getMonth();
 const godzina=time.getHours();
 const min=time.getMinutes();


 const form =document.querySelector("form");
 const input=document.querySelector("input");
 const ul=document.querySelector("ul");
 const ileDoZrobienia=document.querySelector(" p .doZrobienia");
const ileZrobione = document.querySelector(" p .zrobione");
const progress=document.querySelector("span pasek");


changeWages=(e)=>{
     const newElementPriorytet=e.target.parentNode.style.color="red";
    ul.appendChild.insertBefore(newElementPriorytet,nextSibling);
}
 procent=(a,b)=>{
    const stosunek=(b/a) *100;

     const progress = document.querySelector("progress");
progress.value=stosunek;
if(progress.value===100){ 
    alert("you are the best baby :] ")
}

 }

 const update= function (){
    const listItems = document.querySelectorAll("li");
    arrlistItems =[...listItems];
    const arPostep = arrlistItems.filter(li => li.className.includes("postep"));

    const arrNotPostep = arrlistItems.filter(li => !li.className.includes("postep"));
    ileZrobione.textContent = arPostep.length;
    ileDoZrobienia.textContent = arrNotPostep.length;

    
procent(arrlistItems.length,arPostep.length);


}


 lineThrough=(e)=>{
     e.target.parentNode.style.textDecoration = "line-through";
     e.target.parentNode.className="postep";

     update();

     e.target.removeEventListener('click', lineThrough);
}
removeTask=(e)=>{
    e.target.parentNode.remove();
    update();
    
}


 addTask=(e)=>{
     e.preventDefault();
     const titleTask=input.value;
     if (titleTask !== "") {//lub dodac return na koncu 
         const task = document.createElement("li");
         //task.className = "tasks";
        task.innerHTML=titleTask + '<button class="delete">usun</button>'+'<button class="done">done</button>'+'<button class="prio">priorytet</button>';
      
        ul.appendChild(task); 
         input.value="";
         task.querySelector(".delete").addEventListener("click",removeTask);

         task.querySelector(".done").addEventListener("click",lineThrough);
         task.querySelector(".prio").addEventListener("click",changeWages);

       
        update();
 }}
form.addEventListener("submit",addTask)


 
