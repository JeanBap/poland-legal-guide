// Poland Legal Guide - Main JS
(function(){
  // Mobile nav
  const ham = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  if(ham && nav){
    ham.addEventListener('click', ()=>{ nav.classList.toggle('open'); });
    document.addEventListener('click', (e)=>{ if(!ham.contains(e.target) && !nav.contains(e.target)) nav.classList.remove('open'); });
  }
  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(q=>{
    q.addEventListener('click', ()=>{
      const ans = q.nextElementSibling;
      const isOpen = ans.classList.contains('open');
      document.querySelectorAll('.faq-answer').forEach(a=>a.classList.remove('open'));
      document.querySelectorAll('.faq-question .faq-icon').forEach(i=>i.textContent='+');
      if(!isOpen){ ans.classList.add('open'); q.querySelector('.faq-icon').textContent='−'; }
    });
  });
})();
