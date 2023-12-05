const menuBtn=document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');

menuBtn.onclick=()=>{
  if(menu.classList.contains('hidden')){
    menu.classList.remove('hidden');
    menuOpen.classList.add('hidden');
    menuClose.classList.remove('hidden');
  }else{
    menu.classList.add('hidden');
    menuClose.classList.add('hidden');
    menuOpen.classList.remove('hidden');
  }
}