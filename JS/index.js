


let button=document.getElementsByClassName(`btn`)[0];
let dob=document.getElementsByClassName(`date`)[0];
let para=document.getElementById(`result`);
function calculateAge(){
    let a=dob.value;
    if(a===""){
        alert(`please enter your age`)
    }else{
         getAge(a);
    }
};
function getAge(a){
    let current_Date=new Date();
    let birthday_Date=new Date(a);
let age=current_Date.getFullYear()-birthday_Date.getFullYear();
    let month=current_Date.getMonth()-birthday_Date.getMonth();
    
  if (month < 0 ||
    (month === 0 && current_Date.getDate() < birthday_Date.getDate())

  ) {
    age--;
  }


para.innerText=`your age is ${age} year old`;

}
button.addEventListener(`click`,calculateAge);