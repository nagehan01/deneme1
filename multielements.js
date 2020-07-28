// SELECTING ELEMENTS(SAYFA ÜZERİNDEKİ HERHANGİ BİR ELEMANI SEÇME)
// *** Multiple Elements(birden fazla eleman için)
/*
// seçimi className göre yapmak için
// document.getElementsByClassName()
let val;
//val=document.getElementsByClassName("list-group-item");
//val=document.getElementsByClassName("list-group-item")[0];

//val=val[2];

//val[1].style.color="blue";
//val[1].style.fontSize="20px";
//val[2].textContent="new item";

//for(let i=0; i<val.length; i++)
//{
// console.log(val[i].style.color="red");
// console.log(val[i].style.textContent="new item");
//}

// etiket isimleriyle seçim
//document.getElementsByTagName()

// val = document.getElementsByTagName("li");

// ul etkietlerini altındaki a etiketini seçmek için
// val = document.getElementById("task-list");
// val = val.getElementsByTagName("a");
//val=document.getElementsByTagName("a");

// document.querySelectorAll();

// val=document.querySelectorAll("li");

// val.forEach(function(item,index){
//console.log(item);
// item.textContent=`${index} - hello`;
// });

//val=document.querySelectorAll("li:nth-child(odd)"); // tekil olanlarını getirir
val=document.querySelectorAll("li:nth-child(even)"); // çift elemanların ardını boyar
val.forEach(function(item){
item.style.background="#ccc"
});

 console.log(val);
 */