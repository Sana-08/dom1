// Event bubbling : child to parent

//if we want to stop the event bubbling. we can use a stopPropagation() method

const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// grandParent.addEventListener("click", (e)=>{
//     e.stopPropagation();
//     // console.log("grandParent bubbling")
//     alert("grandParent bubbling")
// })

// parent.addEventListener("click", (e)=>{
//     // e.stopPropagation();
//     // console.log("parent bubbling")
//     alert("parent bubbling")
// })

// child.addEventListener("click", (e)=>{
//     e.stopPropagation();
//     // console.log("child bubbling")
//     alert("child bubbling")
// })

// Event Capturing : parent to child

// grandParent.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation()
//     console.log("grandParent capturing");
//   },
//   { capture: true }
// );

// parent.addEventListener(
//   "click",
//   (e) => {
//     // e.stopPropagation()
//     console.log("parent capturing");
//   },
//   { capture: true }
// );

// child.addEventListener(
//   "click",
//   (e) => {
//     // e.stopPropagation()
//     console.log("child capturing");
//   },
//   { capture: true }
// );

// If we want to capture the element only once then we can use {once:true} in event listener

// grandParent.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("grandParent capturing");
//   },
//   { once: true }
// );

// parent.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("parent capturing");
//   },
//   { once: true }
// );

// child.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("child capturing");
//   },
//   { once: true }
// );



//to removethe element after a given time

// function printGrandParent(){
//     console.log("grandParent bubbling")
// }
// grandParent.addEventListener("click", printGrandParent);
// setTimeout(()=>{
//     grandParent.removeEventListener("click", printGrandParent);
// },5000)


//to removethe element after a given time using button

// const button=document.querySelector('#btn');

// function printGrandParent(){
//     console.log('grandParent bubbling');
// }

// grandParent.addEventListener("click", printGrandParent);

// function removeGrandParent(){
//     setTimeout(()=>{
//         grandParent.removeEventListener("click",printGrandParent);
//     },2000)
// }
// button.addEventListener("click", removeGrandParent);





// grandParent.addEventListener("mouseover", ()=>{
//     console.log("hovering")
// })

// grandParent.addEventListener("mouseenter", ()=>{
//     console.log("hovering")
// })

// grandParent.addEventListener("mouseleave", ()=>{
//     console.log("hovering")
// })

// grandParent.addEventListener("mouseout", ()=>{
//     console.log("hovering")
// })


