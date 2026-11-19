(() => {
  const page = document.body.dataset.page || '';
  const fallback = document.body.dataset.back || (page === 'future-projects' ? 'projects.html' : 'index.html#menu');
  const sprite = `
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <linearGradient id="gSR" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#19d3ff"/><stop offset=".5" stop-color="#e8ecff"/><stop offset="1" stop-color="#b537ff"/></linearGradient>
    <linearGradient id="gCrown" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#19d3ff"/><stop offset="1" stop-color="#ff3df2"/></linearGradient>
  </defs>
  <symbol id="logo-sr" viewBox="0 0 200 120"><path d="M52 32 L60 8 L80 24 L100 2 L120 24 L140 8 L148 32 Z" fill="rgba(25,211,255,.12)" stroke="url(#gCrown)" stroke-width="3"/><circle cx="60" cy="8" r="3.5" fill="#19d3ff"/><circle cx="100" cy="2" r="3.5" fill="#fff"/><circle cx="140" cy="8" r="3.5" fill="#ff3df2"/><text x="100" y="112" text-anchor="middle" font-family="Orbitron,Arial Black,sans-serif" font-weight="800" font-style="italic" font-size="82" fill="url(#gSR)">SR</text></symbol>
  <symbol id="i-home" viewBox="0 0 24 24"><path d="M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6"/></symbol>
  <symbol id="i-cube" viewBox="0 0 24 24"><path d="M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8"/></symbol>
  <symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></symbol>
  <symbol id="i-book" viewBox="0 0 24 24"><path d="M2 4h7a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H2zM22 4h-7a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h8z"/></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></symbol></svg>`;
  const links = [['home','index.html','i-home','Home'],['projects','projects.html','i-cube','Projects'],['about','about.html','i-user','About'],['story','story.html','i-book','Stories'],['contact','contact.html','i-mail','Contact']];
  const activePage = page === 'future-projects' ? 'projects' : page;
  const nav = links.map(([id,href,icon,label]) => `<a class="${activePage===id?'active':''}" href="${href}" ${activePage===id?'aria-current="page"':''}><svg class="i"><use href="#${icon}"/></svg><span>${label}</span></a>`).join('');
  const header = `<header class="topbar"><a class="brand" href="index.html"><svg class="brand-logo"><use href="#logo-sr"/></svg><span class="brand-copy"><span class="brand-name">SR.<b>DEV</b></span><span class="brand-tag">BUILD . CREATE . LEARN . REPEAT.</span></span></a><nav class="nav" aria-label="Main navigation">${nav}</nav></header><button class="back-btn press" type="button" aria-label="Go back">← <span>Back</span></button>`;
  document.body.insertAdjacentHTML('afterbegin', sprite + '<div class="cursor-glow"></div>' + header);
  const back = document.querySelector('.back-btn');
  back.addEventListener('click', () => {
    if (document.referrer && new URL(document.referrer).origin === location.origin && history.length > 1) history.back();
    else location.href = fallback;
  });
  const glow = document.querySelector('.cursor-glow');
  if (glow && matchMedia('(pointer:fine)').matches) {
    let x=0,y=0,gx=0,gy=0;
    addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;glow.classList.add('visible')});
    document.addEventListener('mouseleave',()=>glow.classList.remove('visible'));
    const tick=()=>{gx+=(x-gx)*.18;gy+=(y-gy)*.18;glow.style.transform=`translate(${gx}px,${gy}px) translate(-50%,-50%)`;requestAnimationFrame(tick)};tick();
  }
  document.addEventListener('click', e => {
    const el=e.target.closest('.press'); if(!el || el.tagName==='BUTTON' && el===back) return;
    const r=el.getBoundingClientRect(), size=Math.hypot(r.width,r.height)*1.7, span=document.createElement('span');
    span.className='ripple'; span.style.width=span.style.height=`${size}px`; span.style.left=`${e.clientX-r.left-size/2}px`; span.style.top=`${e.clientY-r.top-size/2}px`;
    el.appendChild(span); span.addEventListener('animationend',()=>span.remove(),{once:true});
  });
})();
