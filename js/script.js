
const body=document.body;
const header=document.getElementById('siteHeader');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>25));

/* Main call flow: every "Llamar" button opens the branch selector. */
const modal=document.getElementById('callModal');
const openCalls=()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');body.classList.add('modal-open')};
const closeCalls=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');body.classList.remove('modal-open')};
document.querySelectorAll('.js-call').forEach(btn=>btn.addEventListener('click',openCalls));
document.getElementById('callClose').addEventListener('click',closeCalls);
modal.addEventListener('click',e=>{if(e.target===modal)closeCalls()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeCalls();document.getElementById('lightbox').classList.remove('open')}});

/* Mobile menu */
const burger=document.getElementById('burger'), mobile=document.getElementById('mobileMenu');
burger.addEventListener('click',()=>mobile.style.display='flex');
document.getElementById('mobileClose').addEventListener('click',()=>mobile.style.display='none');
mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobile.style.display='none'));

/* Menu tabs */
document.querySelectorAll('.menu-tab').forEach(tab=>tab.addEventListener('click',()=>{
  document.querySelectorAll('.menu-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.menu-panel').forEach(p=>p.classList.remove('active'));
  tab.classList.add('active');
  document.getElementById('panel-'+tab.dataset.panel).classList.add('active');
}));

/* Reveal animations */
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('in');observer.unobserve(entry.target)}
}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

/* Gallery lightbox */
const lightbox=document.getElementById('lightbox'), lightboxImg=document.getElementById('lightboxImg');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{
  lightboxImg.src=item.dataset.img; lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden','false');
}));
document.getElementById('lightboxClose').addEventListener('click',()=>lightbox.classList.remove('open'));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.classList.remove('open')});

/* Prevent accidental horizontal drag on gallery buttons */
document.querySelectorAll('.gallery-item img').forEach(img=>img.addEventListener('dragstart',e=>e.preventDefault()));
