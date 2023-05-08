//создать элемент на чистом яваскрипте;
ok = document.createElement('p');
ok.innerHTML='<h1>Gallery on JavaScript';
document.querySelector('main').append(ok);
let img=['site/img/DSC_7553.JPG','site/img/DSC_7554.JPG','site/img/DSC_7555.JPG','site/img/DSC_7556.JPG','site/img/DSC_7557.JPG','site/img/DSC_7558.JPG','site/img/DSC_7559.JPG'];

function imageStart(){
  let images=document.createElement('p');
  images.innerHTML='it\'s a live!<br> Эта фото галерея будет понятна, даже полному ... Барсуку!!!';
  images.setAttribute('src','site/img/DSC_7559.JPG');
  images.setAttribute('alt','photo Gallery on Java Script for youtube');
  images.setAttribute('id','one');
  document.querySelector('main').append(images);
  let i=+0;
  document.querySelector('img').addEventListener('click',()=>{
    i++;
  console.log(`${img[i]}`);
    document.querySelector('img').setAttribute('src',`${img[i]}`);
    if(i>=img.length){
      i=0;
      document.querySelector('img').setAttribute('src',`${img[i]}`);
      console.log(img.length);
    }
  });
}

let count=['one','two','three','four','five','six','seven','eight'];

class image{
  constructor(x){
    this.x=x;
  }
  oj(){
    for(let y=0;y<img.length;y++){
      let lol= document.createElement('img');
      document.querySelector('main').append(lol);
      document.querySelectorAll('img')[y].setAttribute('src',this.x[y]);
      document.querySelectorAll('img')[y].setAttribute('id',`${count[y]}`);
      document.querySelector('img').setAttribute('id',`${count[0]}`);
      let countImages=document.querySelectorAll('img')[y];
      countImages.addEventListener('click',()=>{
        console.log(img[y]);
        document.querySelector('img').setAttribute('src',`${img[y]}`);
      });
    }
  }
}

function ooj(){
  let yy = new image(img);
  yy.oj();
}
ooj();
imageStart();
