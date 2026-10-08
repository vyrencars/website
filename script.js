const header=document.querySelector('.header');
addEventListener('scroll',()=>header?.classList.toggle('scrolled',scrollY>40));
const reveals=[...document.querySelectorAll('.reveal')];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});reveals.forEach(x=>io.observe(x));
const slides=[...document.querySelectorAll('.slide')], stories=[...document.querySelectorAll('.story')];let current=0,timer;
function show(i){if(!slides.length)return;current=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===current));stories.forEach((s,n)=>{s.classList.toggle('active',n===current);s.classList.toggle('done',n<current);const f=s.querySelector('.fill');if(f){f.style.animation='none';void f.offsetWidth;f.style.animation=''}});clearTimeout(timer);timer=setTimeout(()=>show(current+1),6000)}
stories.forEach((s,i)=>s.addEventListener('click',()=>show(i)));if(slides.length)show(0);
const menu=document.querySelector('.menu');menu?.addEventListener('click',()=>document.body.classList.toggle('menu-open'));
