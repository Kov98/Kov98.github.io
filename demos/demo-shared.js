'use strict';
const navToggle = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.demo-nav .links');
if(navToggle && navLinks){
 navToggle.addEventListener('click',()=>{
  const opened = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded',String(opened));
 });
 navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  navLinks.classList.remove('open');navToggle.setAttribute('aria-expanded','false');
 }));
}
document.querySelectorAll('[data-demo-form]').forEach(form=>{
 form.addEventListener('submit',event=>{
  event.preventDefault();
  const output = form.querySelector('.form-msg');
  if(output){output.textContent='This is a portfolio concept. No message was sent. Contact functionality can be connected for a real client project.';output.setAttribute('role','status');}
 });
});