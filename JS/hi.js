const selectElement=(element)=>document.querySelector(element);
selectElement('.mode1').addEventListener('click',()=>{
  selectElement('.section1').classList.toggle('active');
});