// function handleClick(){
//     const element=document.getElementById('heading');
//     element.textContent="Thank you for click";
// }

// const element=document.getElementById('heading');
// element.onclick= function handleClick(){
//     element.style.backgroundColor="white";
// };
// element.onclick= function handleClick(){
//     element.textContent="Thank you for click";
// };


// element.addEventListener('mouseenter', ()=>{
//     element.textContent="Game ON";
// })
// element.addEventListener('mouseleave', ()=>{
//     element.textContent="Game OVER";
// })

// This is Gaddha Majdoori not recommended
// const div1=document.getElementById('child1');
// div1.addEventListener('click',()=>{
//     div1.textContent="Clicked";
// })

// const div2=document.getElementById('child2');
// div2.addEventListener('click',()=>{
//     div2.textContent="Clicked";
// })

// const div3=document.getElementById('child3');
// div3.addEventListener('click',()=>{
//     div3.textContent="Clicked";
// })

// const div4=document.getElementById('child4');
// div4.addEventListener('click',()=>{
//     div4.textContent="Clicked";
// })

// const div5=document.getElementById('child5');
// div5.addEventListener('click',()=>{
//     div5.textContent="Clicked";
// })

// Smart Work but not optimized
// const parentdiv=document.getElementById('parent');
// console.log(parentdiv.children);
// for (let child of parentdiv.children) {
//     child.addEventListener('click', ()=>{
//         child.textContent="Clicked";
//     })
// }

// optimized method to add and remove eventlistener
const parent=document.getElementById('parent');
function handleClick(e) {
    e.target.textContent="I am Clicked";
}


parent.addEventListener('click', handleClick)

parent.removeEventListener('click', handleClick)
