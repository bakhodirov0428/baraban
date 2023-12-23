window.addEventListener("keydown", (e) =>{
  const keyBoard = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if(keyBoard){
      keyBoard.classList.add("playing")
     
     
      audio.corenTime= 1;
      audio.play();
  }
});
let keys=document.querySelectorAll(".key")
keys.forEach((item)=> {
  console.log(item);
  item.addEventListener('transitionend', (e)=>{
    
  item.classList.remove("playing")
  })
  })