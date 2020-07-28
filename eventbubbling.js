// EVENT BUBBLING
// içten tıkladığımız bir eleman aynı zamanda diğer elemanın kapsamında olan bir elemen olduğu için
// olaylar tetikleniyor buna Event Bubbling denir. içten dışa doğru bir aktarım sözkonusu
/*
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const card = document.querySelector(".card");
const container = document.querySelector(".container");

const deleteItems=document.querySelectorAll(".fa-times");
const ul=document.querySelector("ul");

ul.addEventListener("click", function(e){
//console.log(e.target);
// iç elemanlara geçiş kontrolü
if(e.target.className==="fas fa-times"){
    e.target.parentElement.parentElement.remove();

    e.preventDefault();
}
});
*/

// deleteItems.forEach(function(item){
// item.addEventListener("click",function(e){
//     console.log(e.target);
// })

// });



// form.addEventListener("click", function () {
//     console.log("form");

// });

// cardBody.addEventListener("click", function () {
//     console.log("cardBody");

// });

// card.addEventListener("click", function () {
//     console.log("card");

// });

// container.addEventListener("click", function () {
//     console.log("container");

// });

// içten dışa aktarımı iptal etmek için
// dıştaki olayların tetiklenmesini engellemek
// hangisini tıklarsak o gelir

// form.addEventListener("click", function (e) {
//     console.log("form");
//     e.stopPropagation()
// });

// cardBody.addEventListener("click", function (e) {
//     console.log("cardBody");
//     e.stopPropagation();
// });

// card.addEventListener("click", function (e) {
//     console.log("card");
//     e.stopPropagation();
// });

// container.addEventListener("click", function (e) {
//     console.log("container");
//     e.stopPropagation();
// });

/*********************************************************************/
// EVENT CAPTURING
// dıştan içe
// form.addEventListener("click", function (e) {
//     console.log("form");
    
// }, true);

// cardBody.addEventListener("click", function (e) {
//     console.log("cardBody");
   
// }, true);

// card.addEventListener("click", function (e) {
//     console.log("card");
    
// }, true);

// container.addEventListener("click", function (e) {
//     console.log("container");
    
// }, true);

