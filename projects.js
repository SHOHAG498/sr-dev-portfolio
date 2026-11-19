(() => {
 const projects=Array.isArray(window.SR_PROJECTS)?window.SR_PROJECTS:[];
 const config=window.SR_PORTFOLIO_CONFIG||{};
 const grid=document.getElementById('project-grid');
 const count=document.getElementById('project-count');
 const age=document.getElementById('portfolio-age');
 const updated=document.getElementById('last-updated');
 const empty=document.getElementById('empty-state');
 const start=new Date((config.startedAt||'2026-11-18')+'T00:00:00');
 const days=Math.max(0,Math.floor((new Date()-start)/86400000));
 count.textContent=projects.length;
 age.textContent=`${days} day${days===1?'':'s'}`;
 updated.textContent=config.lastUpdated?new Date(config.lastUpdated+'T00:00:00').toLocaleDateString(): '—';
 const escapeHTML=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function render(filter='all'){
  const visible=projects.filter(p=>filter==='all'||p.category===filter);
  grid.innerHTML=visible.map(p=>`<a class="panel p-card" href="project.html?id=${encodeURIComponent(p.id)}"><div class="thumb" style="${p.image?`background-image:url('${escapeHTML(p.image)}')`:''}"><span>${escapeHTML(p.category||'Project')}</span></div><div class="p-card-body"><small>${escapeHTML(p.status||'Completed')}</small><h3>${escapeHTML(p.name)}</h3><p>${escapeHTML(p.description)}</p><div class="tags">${(p.tech||[]).map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div><b class="view-project">View details →</b></div></a>`).join('');
  empty.hidden=visible.length>0;
  if(projects.length===0) empty.textContent='No projects added yet. Add your first real project from the local Project Manager.';
  else if(!visible.length) empty.textContent='No projects in this category yet.';
 }
 render();
 document.querySelectorAll('.filter-chip').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter-chip').forEach(b=>b.classList.toggle('active',b===btn));render(btn.dataset.filter)}));
})();
