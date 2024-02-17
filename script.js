// alert("lodiang");
function addNewWEfeild(){
    // console.log("working")
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder','enter here');


    let weob=document.getElementById("we");
    let weAddbuttonob=document.getElementById("weADDbutton");

    weob.insertBefore(newNode,weAddbuttonob);

}

function addNewAQfeild(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqfield');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder','enter here');


    let aqob=document.getElementById("aq");
    let aqAddbuttonob=document.getElementById("aqADDbutton");

    aqob.insertBefore(newNode,aqAddbuttonob);
}
function generatecv(){
    // console.log()
    let namefield = document.getElementById("namefield").value;
    let namet = document.getElementById("namet");
    namet.innerHTML = namefield;
    document.getElementById("namet2").innerHTML = namefield;
    document.getElementById("contactt").innerHTML = document.getElementById("contactfield").value;
    document.getElementById("addresst").innerHTML = document.getElementById("addressfield").value;
    document.getElementById("fbt").innerHTML = document.getElementById("fbfield").value;
    document.getElementById("instat").innerHTML = document.getElementById("instafield").value;
    document.getElementById("linkt").innerHTML = document.getElementById("linkfield").value;
    document.getElementById("objectivet").innerHTML = document.getElementById("objectivefield").value;
    let wes=document.getElementsByClassName("wefield");
    let str="";
    for(let e of wes){
        str=str+`<li> ${e.value}</li>`;
    }
    document.getElementById("wet").innerHTML = str;
    let aqs=document.getElementsByClassName("eqfield");
    let str1="";
    for(let e of aqs){
        str1=str1+`<li> ${e.value}</li>`;
    }
    document.getElementById("aqt").innerHTML = str1;
    
    
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

    let file = document.getElementById("imgfield").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend = function(){
        document.getElementById("imgtemplate").src = reader.result;
    }
    



}
function printcv(){
    window.print();
}