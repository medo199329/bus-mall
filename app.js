'usestrict'

product.all = [];
let shownProducts = [];
let Clicks = 0;
let rounds = 25;
//let source;
let container = document.getElementById('imagesSection');
let firstImgElement = document.getElementById ('firstImage');
let secondImgElement = document.getElementById('secondImage');
let lastImgElement = document.getElementById ('lastImage'); 

let firstImage;
let secondImage;
let lastImage;


function product(Name,path){
    this.Name = Name;
    this.source = path; 
    this.votes = 0;
    this.shown = 0;

    product.all.push(this);

}

//instances

new product('bag','img/img/bag.jpg');
new product('banana','img/img/banana.jpg');
new product('bathroom','img/img/bathroom.jpg');
new product('boots','img/img/boots.jpg');
new product('breakfast','img/img/breakfast.jpg');
new product('bubblegum','img/img/bubblegum.jpg');
new product('chair','img/img/chair.jpg');
new product('cthulhu','img/img/cthulhu.jpg');
new product('dog-duck','img/img/dog-duck.jpg');
new product('dragon','img/img/dragon.jpg');
new product('pen','img/img/pen.jpg');
new product('pet-sweep','img/img/pet-sweep.jpg');
new product('scissors','img/img/scissors.jpg');
new product('shark','img/img/shark.jpg');
new product('sweep','img/img/sweep.png');
new product('tauntaun','img/img/tauntaun.jpg');
new product('unicorn','img/img/unicorn.jpg');
new product('usb','img/img/usb.gif');
new product('water-can','img/img/water-can.jpg');
new product('wine-glass','img/img/wine-glass.jpg');


function getRandomIndex() {
  let randomIndex = Math.floor(Math.random() * product.all.length);
  return randomIndex;
  
//console.log(getRandomIndex);
}


  function displayImages(){

    firstImage = getRandomIndex();
    secondImage = getRandomIndex();
    lastImage = getRandomIndex();

    while(firstImage === lastImage || firstImage === secondImage ||secondImage === lastImage){
      firstImage = getRandomIndex(); 
    }


    firstImgElement.src= product.all[firstImage].source ;
    product.all[firstImage].shown++;
    secondImgElement.src= product.all[secondImage].source ;
    product.all[secondImage].shown++;
    lastImgElement.src= product.all[lastImage].source ;
    product.all[lastImage].shown++;
     console.log(firstImgElement.src+'test');
   // displayImages()


  }
  displayImages()

  imagesSection.addEventListener('click', handleClicking);
let btnEl;

container.addEventListener('click' , handleClicking)

let presscount = 0;

function handleClicking(event){
  presscount++;
      





    if(rounds >= presscount){
        if(event.target.id === 'firstImage'){
          product.all[firstImage].votes++;
        }else if(event.target.id ==='secondImage'){
          product.all[secondImage].votes++;
        }
        else if(event.target.id ==='lastImage'){
          product.all[lastImage].votes++;
        }else{
          
          return
        }
        displayImages();
      }
     
    else{  
    btnEl = document.getElementById('results');
    btnEl.addEventListener('click',handleShowing);
    gettingList();
    container.removeEventListener('click',handleClicking);
    }
  }
    function handleShowing(){
      gettingList()
        


    }
    let ul = document.getElementById('resultsList');
    let li;

    function gettingList(){

      for(let i = 0 ; i < product.all.length; i++){
       li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = product.all[i].Name + 'has' + product.all[i].votes +'votes';
      }
    }
  
  

 console.log(product.all);