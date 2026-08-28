/* ---------------- icon set (inline SVG, not unicode glyphs) ---------------- */
/* using real SVG here instead of unicode symbols (⌂, </> etc.) because those
   glyphs are missing in Orbitron/Rajdhani and rendered as blank boxes for
   Home and Scripts specifically. SVG with stroke="currentColor" always renders. */
const ICONS = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9.5h5V14h3v5.5h5V10"/></svg>',
  crosshair: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="7.5"/><line x1="12" y1="2.5" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="21.5"/><line x1="2.5" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="21.5" y2="12"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7M18.4 18.4l-1.7-1.7M7.3 7.3 5.6 5.6"/></svg>',
  braces: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 4c-2 0-3 1-3 3v3c0 1-.6 2-2 2 1.4 0 2 1 2 2v3c0 2 1 3 3 3"/><path d="M15.5 4c2 0 3 1 3 3v3c0 1 .6 2 2 2-1.4 0-2 1-2 2v3c0 2-1 3-3 3"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.6 7-11.6A7 7 0 0 0 5 9.4C5 14.4 12 21 12 21Z"/><circle cx="12" cy="9.4" r="2.3"/></svg>',
  diamond: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M9 3h6l6 6-9 12L3 9Z"/><path d="M3 9h18M9 3l1.5 6L12 21M15 3l-1.5 6L12 21"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="8.5 8 4 12 8.5 16"/><polyline points="15.5 8 20 12 15.5 16"/><line x1="14" y1="5.5" x2="10" y2="18.5"/></svg>',
  guide: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21V5.5Z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"/></svg>',
  news: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4a1 1 0 0 0 1 1h2l4.5 4V5L6 9H4a1 1 0 0 0-1 1Z"/><path d="M16 8.5a4 4 0 0 1 0 7M19 6a7.5 7.5 0 0 1 0 12"/></svg>',
  clients: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8.5" r="3"/><path d="M3.5 20c0-3 2.5-5.2 5.5-5.2S14.5 17 14.5 20"/><circle cx="17" cy="9.5" r="2.4"/><path d="M14.8 15c2.7.3 4.7 2.3 4.7 5"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><line x1="12" y1="11" x2="12" y2="16.5"/><circle cx="12" cy="7.8" r="1" fill="currentColor" stroke="none"/></svg>',
  server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="4" width="17" height="6" rx="1.4"/><rect x="3.5" y="14" width="17" height="6" rx="1.4"/><circle cx="7" cy="7" r=".9" fill="currentColor" stroke="none"/><circle cx="7" cy="17" r=".9" fill="currentColor" stroke="none"/></svg>',
};
function icon(key){ return ICONS[key] || ''; }

/* ---------------- data model (from mindmap) ---------------- */
const DATA = [
  { id:'home', label:'Home', color:'blue', glyph:'home',
    children:[ { id:'home-intro', label:'Introduction' } ] },

  { id:'crosshair', label:'Crosshair', color:'green', glyph:'crosshair',
    children:[
      { id:'crosshair-crosshair', label:'Crosshair' },
      { id:'crosshair-scope', label:'Scope' },
      { id:'crosshair-hitmarker', label:'Hitmarker' },
    ] },

  { id:'settings', label:'Settings', color:'green', glyph:'gear',
    children:[
      { id:'settings-generator', label:'Generator' },
      { id:'settings-ready', label:'Ready Settings' },
    ] },

  { id:'css', label:'CSS', color:'green', glyph:'braces',
    children:[
      { id:'css-generator', label:'CSS Generator' },
      { id:'css-official', label:'Official / Original CSS' },
      { id:'css-ready', label:'Ready CSS' },
    ] },

  { id:'maps', label:'Maps', color:'orange', glyph:'pin',
    children:[
      { id:'maps-official', label:'Official Maps', children:[
          { id:'maps-official-pubs', label:'Pubs' },
          { id:'maps-official-parkour', label:'Parkour' },
          { id:'maps-official-raids', label:'Raids' },
          { id:'maps-official-infected', label:'Infected' },
          { id:'maps-official-tdm', label:'TDM' },
          { id:'maps-official-parkourmode', label:'Parkour (Mode)' },
        ] },
      { id:'maps-custom', label:'Custom Maps' },
    ] },

  { id:'mods', label:'Mods', color:'purple', glyph:'diamond',
    children:[
      { id:'mods-guide', label:'Modding Guide' },
      { id:'mods-files', label:'Mods Files' },
    ] },

  { id:'scripts', label:'Scripts', color:'purple', glyph:'code',
    children:[
      { id:'scripts-krunkscript', label:'KrunkScript', children:[
          { id:'scripts-krunkscript-generator', label:'Generator' },
          { id:'scripts-krunkscript-docs', label:'Krunker Docs / Documentation', children:[
              { id:'scripts-krunkscript-docs-kr', label:'KR Docs' },
              { id:'scripts-krunkscript-docs-swatdoge', label:'Swatdoge' },
            ] },
        ] },
      { id:'scripts-userscript', label:'UserScript', children:[
          { id:'scripts-userscript-legal', label:'Legal Script' },
          { id:'scripts-userscript-hack', label:'Hack Script' },
        ] },
    ] },

  { id:'guides', label:'Guides', color:'cyan', glyph:'guide',
    children:[ { id:'guides-tips', label:'Tips & Tricks' } ] },

  { id:'news', label:'News', color:'cyan', glyph:'news',
    children:[
      { id:'news-updates', label:'Krunker Updates' },
      { id:'news-events', label:'Krunker Events' },
    ] },

  { id:'clients', label:'Clients', color:'cyan', glyph:'clients',
    children:[ { id:'clients-official', label:'Krunker Official & Custom Clients' } ] },

  { id:'servers', label:'Servers', color:'cyan', glyph:'server',
    children:[ { id:'servers-discord', label:'Krunker Discord Community Servers' } ] },

  { id:'about', label:'About Us', color:'cyan', glyph:'info',
    children:[
      { id:'about-discord', label:'Discord' },
      { id:'about-youtube', label:'YouTube' },
    ] },
];

const COLOR_VAR = { blue:'var(--blue)', green:'var(--green)', orange:'var(--orange)', purple:'var(--purple)', cyan:'var(--cyan)' };

/* ---------------- state ---------------- */
let activeMainId = DATA[0].id;
let selectedId = DATA[0].children[0].id;
let expanded = new Set();

function findMain(id){ return DATA.find(n => n.id === id); }
function findPath(nodes, id, trail=[]){
  for(const n of nodes){
    const next = [...trail, n];
    if(n.id === id) return next;
    if(n.children){ const r = findPath(n.children, id, next); if(r) return r; }
  }
  return null;
}
function fullPath(id){
  for(const main of DATA){ const p = findPath([main], id); if(p) return p; }
  return null;
}

/* ---------------- render: main tabs ---------------- */
function renderTabs(){
  const wrap = document.getElementById('mainTabs');
  wrap.innerHTML = '';
  DATA.forEach(main => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (main.id === activeMainId ? ' active' : '');
    btn.style.setProperty('--c', COLOR_VAR[main.color]);
    btn.innerHTML = `<span class="glyph">${icon(main.glyph)}</span>${main.label}`;
    btn.addEventListener('click', () => {
      activeMainId = main.id;
      expanded = new Set([main.id]);
      selectedId = main.id;
      renderAll();
    });
    wrap.appendChild(btn);
  });
}

/* ---------------- render: sidebar tree ---------------- */
function renderTree(){
  const main = findMain(activeMainId);
  document.getElementById('sidebarLabel').textContent = main.label;
  const root = document.getElementById('sidebarTree');
  root.innerHTML = '';
  root.appendChild(buildList([main], main.color));
}
function buildList(nodes, color){
  const ul = document.createElement('ul');
  ul.className = 'tree';
  nodes.forEach(node => {
    const li = document.createElement('li');
    li.className = 'node' + (expanded.has(node.id) ? ' expanded' : '');

    const row = document.createElement('button');
    row.className = 'node-row' + (node.id === selectedId ? ' selected' : '');
    row.style.setProperty('--c', COLOR_VAR[color]);
    row.innerHTML = `<span class="dot"></span><span>${node.label}</span>` +
      (node.children && node.children.length ? '<span class="caret">▶</span>' : '');
    row.addEventListener('click', () => {
      selectedId = node.id;
      if(node.children && node.children.length){
        if(expanded.has(node.id)) expanded.delete(node.id); else expanded.add(node.id);
      }
      renderAll();
    });
    li.appendChild(row);

    if(node.children && node.children.length){
      li.appendChild(buildList(node.children, color));
    }
    ul.appendChild(li);
  });
  return ul;
}

/* ---------------- render: content ---------------- */
/* Leaf nodes that get real embedded tools instead of the generic
   placeholder. Rendered as a full-bleed iframe so the tool's own
   CSS/JS never collides with the hub's. */
const EMBEDS = {
  'settings-generator': 'generator.html',
  'css-generator': 'css-generator.html',
  'scripts-krunkscript-generator': 'ks-generator.html',
  'scripts-krunkscript-docs-kr': 'kr-docs/index.html',
  'scripts-krunkscript-docs-swatdoge': 'https://krdocs.swatdoge.eu/',
};

function renderContent(){
  const path = fullPath(selectedId) || [findMain(activeMainId)];
  const node = path[path.length - 1];
  const main = path[0];
  const color = COLOR_VAR[main.color];

  const el = document.getElementById('content');
  el.style.setProperty('--c', color);

  const crumbs = path.map((n,i) =>
    (i === path.length-1 ? `<b>${n.label.toUpperCase()}</b>` : n.label.toUpperCase())
  ).join(' <span class="sep">/</span> ');

  const kids = node.children && node.children.length ? node.children : null;

  if(EMBEDS[node.id]){
    el.innerHTML = `
      <div class="breadcrumb">${crumbs}</div>
      <div class="content-head">
        <div class="content-icon">${icon(main.glyph)}</div>
        <h2>${node.label}</h2>
      </div>
      <iframe class="embed-frame" src="${EMBEDS[node.id]}" title="${node.label}" loading="lazy"></iframe>
    `;
    return;
  }

  el.innerHTML = `
    <div class="breadcrumb">${crumbs}</div>
    <div class="content-head">
      <div class="content-icon">${icon(main.glyph)}</div>
      <h2>${node.label}</h2>
    </div>
    <p class="content-desc">${describe(node, main, path)}</p>
    <div class="meta-strip">
      <span class="chip">${main.label}</span>
      ${kids ? `<span class="chip">${kids.length} subsection${kids.length>1?'s':''}</span>` : `<span class="chip">Resource page</span>`}
    </div>
    ${kids ? `<div class="child-grid">${kids.map(k => `
        <button class="child-card" data-id="${k.id}">
          <span class="dot"></span>
          <span>${k.label}</span>
        </button>`).join('')}</div>` : ''}
    <div class="status-note">This section mirrors the site mindmap — structure only, content to be filled in as the hub is built out.</div>
  `;

  el.querySelectorAll('.child-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      selectedId = id;
      const p = fullPath(id);
      p.forEach(n => { if(n.children && n.children.length) expanded.add(n.id); });
      renderAll();
    });
  });
}

function describe(node, main, path){
  if(node.children && node.children.length){
    return `Browse the subsections under ${path.slice(0,-1).map(n=>n.label).join(' / ') || main.label} — pick one below to open its page.`;
  }
  return `Resource page for ${node.label}, filed under ${main.label}${path.length>2 ? ' / ' + path.slice(1,-1).map(n=>n.label).join(' / ') : ''}.`;
}

/* ---------------- render: all ---------------- */
function renderAll(){
  renderTabs();
  renderTree();
  renderContent();
}

expanded.add(DATA[0].id);
renderAll();
