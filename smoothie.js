

let personalObject = [

{
  id: 1,
  name: "Jenny Emenike",
  job: "Cloud Developer",
  experience: "3 years",
  goal: "The smoothies here are delicious and super healthy. I lost up to 20lbs after taking the kiwi smoothie for a week!!!",
  img: "images/lily.jfif"

},

  
{
  id: 2,
  name: "Simon Lee",
  job: "Content Writer",
  experience: "2 years",
  goal: "On my way to work I always buy from SmoothieWorld. Their smoothies are energizing. Most times I take a smoothie instead of eating lunch!!!",
  img: "images/kwan.jfif"

},

{
  id:3,
  name: "Eliana Jokes",
  job: "Blockchain Developer",
  experience: "5 years",
  goal: "No smoothie beats the ones made at SmoothieWorld. I feel energized and less hungry whenever I take this smoothie and it has improved my overall health.",
  img: "images/maria.jfif"
},
{

id: 4,
name: "Joke Silva",
job: "Illustrator",
experience: "6 years",
goal: "Whenever I go to SmoothieWorld, my heart leaps with joy. Whenever I take a sip of the cherry smoothie, I feel so refereshed and so esctatic. SmoothieWorld keep it up!!!",
img: "images/maria.jfif"


}


]



let person = 0;

let front = document.querySelector("#front");
let back = document.querySelector("#back");
let job = document.querySelector(".job");
let name = document.querySelector(".name");
let experience = document.querySelector(".experience");
let goal = document.querySelector(".goal");
let pictures = document.querySelector(".display");



window.addEventListener("DOMContentLoaded", function(){
  showPerson(person)
})


function showPerson(person){
  let details = personalObject[person];
  name.textContent = details.name;
  job.textContent = details.job;
  experience.textContent = details.experience;
  goal.textContent = details.goal;
  pictures.src= details.img

}

front.addEventListener("click", function(){

person++;

if(person > personalObject.length - 1){
  person = 0;
}

showPerson(person);


}
)


back.addEventListener("click", function(){
  person--;
  if(person < 0){
    person = personalObject.length - 1;


  }

  showPerson(person);
})

randomBtn.addEventListener("click", function(){

  let randomPerson = Math.floor(Math.random()* personalObject.length)

  person = randomPerson;

  showPerson(person);
})


  let typing = document.querySelector(".typing");
  let text = [" 100% organic","Refereshing", "Worth the taste", "Grab your smoothie now!!!"]
  let word_count = 0;
  let index = 0;

function type(){



if(word_count === text){
word_count = 0;
}

let words = text[word_count];
let letter = words.slice(0, ++index);
typing.textContent = letter;

if(words.length === letter.length){
word_count++;
index = 0
}

setTimeout(type, 100);

}

type();


let FAQ_holder = document.querySelectorAll(".single-question");




FAQ_holder.forEach(function (questions){

const btn = questions.querySelector(".sign");
btn.addEventListener("click", function(){

FAQ_holder.forEach((item)=> {
if(item !== questions){
item.classList.remove("active");
}
})

if(questions.classList.toggle("active")){;
btn.classList.add("fa-plus-square");
}
btn.classList.remove("fa-minus-square");
})

})


  


let modal = document.querySelector("#modal");
let closeBtn = document.querySelector(".close");
let started = document.querySelector("#click");

started.addEventListener("click", function(){
modal.style.display= "block";
})

closeBtn.addEventListener("click", function(){
modal.style.display="none";
})


let smoothiePic = document.querySelector("#smoothie");
let carouselIndex = 0;
let carouselFunction = function(){

let carouselArray = [ "images/mangoSmoothie.png", "images/juicySmoothie2.png", "images/banana.png"];

if(carouselIndex < carouselArray.length){
smoothiePic.src = carouselArray[carouselIndex];
carouselIndex++
}
else{
carouselIndex = 0;
smoothiePic.src = carouselArray[carouselIndex];

}


}




let carousel = setInterval(carouselFunction, 3000);

let menu = [

{
name: "Carrot Smoothie",
category: "Veg",
img: "images/carrot.jpg"

},

{
name: "Kale & Banana Smoothie",
category: "Mixed",
img: "images/kaleBanana.jfif"

},

{
name: "Beetroot Smoothie",
category: "Veg",
img: "images/beetroot.jpg"

},

{
name: "Lemon & Ginger Smoothie",
category: "Mixed",
img: "images/lemonGinger.jpg"

},

{
name: "Strawberry Smoothie",
category: "Fruit",
img: "images/strawberry.jpg"
}
,
{
name: "Cucumber Smoothie",
category: "Veg",
img: "images/cucumber.jpg"
}
,
{
name: "Pineapple Smoothie",
category: "Fruit",
img: "images/pineapple.jfif"
}
,
{
name: "Banana Smoothie",
category: "Fruit",
img: "images/banana.jfif"
}
,
{
name: "Watermelon Smoothie",
category: "Fruit",
img: "images/watermelon.webp"
}

]



function categorySelection(){

window.addEventListener("DOMContentLoaded", function(){
displayCategory(menu)
})


let selectionHolder = document.getElementById("selections");
let eachSmoothie = document.querySelector(".smoothie");

let dynamicHeight = selectionHolder.getBoundingClientRect().height;
console.log(dynamicHeight);

let eachSmoothieHeight = eachSmoothie.getBoundingClientRect().height;
console.log(eachSmoothieHeight)
let filterBtn = document.querySelectorAll(".filter");
filterBtn.forEach((singleBtn)=>{
singleBtn.addEventListener("click", function(e){
let smoothieCategory = e.currentTarget.dataset.id;


let filteredMenu = menu.filter((menuItem)=>{

  if(menuItem.category === smoothieCategory){
    return menuItem
  }
})


if(smoothieCategory === "All"){
  displayCategory(menu)
  selectionHolder.style.height = `${dynamicHeight}px`;

}else{
  displayCategory(filteredMenu)
  selectionHolder.style.height = `${filteredMenu.length}` ;
 
}
})
})







}
categorySelection();
let dateHolder =  document.querySelector(".dateHolder");
let d = new Date();

dateHolder.innerHTML = d.getFullYear(); 



let navbar = document.querySelector(".navigation-bar");

window.addEventListener("scroll", function(){
let scrollHeight = window.pageYOffset;
console.log(scrollHeight);
let navHeight = navbar.getBoundingClientRect().height;
console.log(navHeight);

if(scrollHeight > navHeight){
navbar.classList.add("fixed-nav");
}
else{
navbar.classList.remove("fixed-nav");
}

let scroll_button = document.querySelector(".do");

if(scrollHeight > 500){
scroll_button.style.visibility = "visible";
}
else{
scroll_button.style.visibility = "hidden";
}


})





function displayCategory(smoothieMenu){
let selection = document.getElementById("selections");

let displaySmoothie = smoothieMenu.map((singleSmoothie)=> {
return `
<div class="singleSmoothie">
<img src = "${singleSmoothie.img}" class="selection_image">
<div class="details">
  <p class = "detail_name">${singleSmoothie.name}</p>
  <p class ="detail_category">${singleSmoothie.category}</p>
</div>

</div>

`
})

displaySmoothie = displaySmoothie.join(" ");
selection.innerHTML = displaySmoothie;


}

displayCategory();


