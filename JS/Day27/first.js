// Create new element using Javascript
const newElement=document.createElement('h2');
// console.log(newElement);
newElement.textContent='Strike is coming';
newElement.id='subheading';
// console.log(newElement);


// Now we have to select element below which subheading will come

//select element
const element=document.getElementById('heading');
element.after(newElement);
// element.before(newElement);

// creating new element
const newElement_1=document.createElement('h3');
newElement_1.textContent="Shubh Dipawali Sabhi ko";
newElement_1.id='description';
// This is not suitable method to give classname
// newElement_1.className='hero';
// newElement_1.className+=' content';
newElement_1.classList.add("hero");
newElement_1.classList.add("content");
// newElement_1.classList.remove("hero");
newElement_1.style.backgroundColor='orange';
newElement_1.style.color='black';
newElement_1.style.fontSize='50px';

// we can create attribute of an element that is key-value pair
element.setAttribute('class','hero');

//we can read attributes of an element
console.log(element.getAttribute('class'));

// select element
element.before(newElement_1);


// How do we insert new element inside other elements

// creating new element
// const list=document.createElement('li');
// list.textContent='Item-1';
// const list1=document.createElement('li');
// list1.textContent='Item-2';
// const list2=document.createElement('li');
// list2.textContent='Item-3';
// const list3=document.createElement('li');
// list3.textContent='Item-4';

// select parent element
// const unordered_list=document.getElementById('unordered');

// insert new element inside parent element

// append pushing element at the end position
// unordered_list.append(list,list1);
// unordered_list.append(list1);

// prepend pushing element at the start position
// unordered_list.prepend(list2);

// how do we push element in-between elements
// list.after(list3);

// But we do not have access to that list element
// unordered_list.children[1].after(list3)



const arr=['Milk', 'Curd', 'Butter', 'Paneer', 'Ghee'];
const unordered_list=document.getElementById('unordered');

// This method is not optimized it will disturb UI at every iteration
// for (let food of arr) {
//     const list = document.createElement('li');
//     list.textContent = food;
//     unordered_list.append(list);
// }

//Optimized Method
// we will use fragment it will store all the list elements then pass it to parent element
// const fragment = document.createDocumentFragment();
const fragment = [];
for (let food of arr) {
    const list = document.createElement('li');
    list.textContent = food;
    fragment.push(list);
}

unordered_list.append(...fragment);


// Delete element 
element.remove();