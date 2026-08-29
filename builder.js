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
      { id:'crosshair-maker', label:'Custom Crosshair Maker' },
      { id:'crosshair-crosshairs', label:'Crosshairs' },
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
        ] },
      { id:'maps-custom', label:'Custom Maps', children:[
          { id:'maps-official-infected', label:'Infected' },
          { id:'maps-official-tdm', label:'TDM' },
          { id:'maps-custom-parkour', label:'Parkour' },
        ] },
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
  'crosshair-maker': 'crosshair-maker.html',
  'crosshair-crosshairs': 'community/crosshairs.html',
  'scripts-krunkscript-generator': 'ks-generator.html',
  'scripts-krunkscript-docs-kr': 'kr-docs/index.html',
  'scripts-krunkscript-docs-swatdoge': 'https://krdocs.swatdoge.eu/',
  'settings-ready': 'community/section.html?cat=settings-ready&title=Ready%20Settings',
  'css-ready': 'community/section.html?cat=css-ready&title=Ready%20CSS',
  'maps-official-infected': 'community/section.html?cat=maps-official-infected&title=Infected',
  'maps-official-tdm': 'community/section.html?cat=maps-official-tdm&title=TDM',
  'maps-custom-parkour': 'community/section.html?cat=maps-custom-parkour&title=Parkour',
  'mods-files': 'community/section.html?cat=mods-files&title=Mods%20Files',
  'scripts-userscript-hack': 'community/section.html?cat=scripts-userscript-hack&title=Hack%20Script',
};

/* Leaf nodes that get a real downloadable resource list instead of the
   generic placeholder. Each entry is one userscript/tool package, with
   full metadata (description, features, tags) sourced from each script's
   own repo/readme. */
const TAG_COLORS = {
  Userscript:'#22d3ee', Software:'#38bdf8', 'External Program':'#38bdf8',
  'In-Game':'#a3e635', Hub:'#e879f9', Tools:'#8b5cf6', Utility:'#2dd4bf',
  UI:'#60a5fa', Enhancement:'#fb923c', Performance:'#4ade80', compatible:'#94a3b8',
};

/* Leaf nodes that already show a curated RESOURCE_LISTS grid, but should
   ALSO let the community post their own submissions below it. */
const COMMUNITY_SECTIONS = {
  'scripts-userscript-legal': { cat:'scripts-userscript-legal', title:'Legal Script' },
};

const RESOURCE_LISTS = {
  'scripts-userscript-legal': [
    {
      slug:'bulk-quicksell', title:'Bulk Quick Sell', version:null,
      icon:'fa-tags', g1:'#f97316', g2:'#dc2626',
      tags:['Userscript','Hub','Tools','Utility'],
      desc:'Select and sell multiple inventory items at once instead of one-by-one clicking.',
      fullDesc:'A quality-of-life userscript that adds checkboxes to your Krunker inventory, letting you select multiple items and sell them all at once with a single button click. Features a clean control panel, "Select All" functionality, and automatic dropdown selection to streamline the tedious selling process.',
      features:['Checkboxes for each inventory item','Elegant and intuitive control panel','\u201cSelect All\u201d button to save time','Automatic selection of \u201cAll items\u201d when selling','Real-time counter of selected items','Uses Krunker\u2019s native selling system','Non-intrusive interface in the top-left corner','Confirmation before execution to avoid mistakes'],
      files:[ {label:'app.js', path:'resources/userscripts/legal/bulk-quicksell/app.js'} ],
      readme:'resources/userscripts/legal/bulk-quicksell/readme.md',
      github:'https://github.com/LombreBlanche34/krunker_bulk_quicksell',
    },
    {
      slug:'bullet-low', title:'Bullet Low', version:'1.0.0',
      icon:'fa-gun', g1:'#ef4444', g2:'#e11d48',
      tags:['Userscript','In-Game','compatible'],
      desc:'Change the color of your ammo when it goes below a certain %.',
      fullDesc:'Changes the color of your ammo counter when it drops below a certain percentage of max capacity (#FF0000 / 25% by default), so a low mag is obvious at a glance.',
      features:['Custom ammo color','Configurable low-ammo threshold'],
      files:[ {label:'bullet_low.js', path:'resources/userscripts/legal/bullet-low/bullet_low.js'} ],
      readme:'resources/userscripts/legal/bullet-low/readme.md',
      github:'https://github.com/LombreBlanche34/krunker_bullet_low/',
    },
    {
      slug:'clan-average-stats', title:'Clan Level Statistics & Chart', version:null,
      icon:'fa-chart-line', g1:'#d946ef', g2:'#7c3aed',
      tags:['Userscript','Hub','Tools','UI'],
      desc:'Displays level statistics and visual charts for clan members across all ranks.',
      fullDesc:'A lightweight userscript that extracts member levels from all clan ranks, calculates average levels per category, and renders an interactive Chart.js visualization with personal level tracking in the Krunker.io clan hub.',
      features:['Real-time statistics by rank (Commanders, Captains, Soldiers, Recruits)','Interactive chart with Chart.js tracking level progression','Personal indicator of your level within the clan','Collapsible panel to save screen space','Automatic calculation of global and category averages','Non-intrusive design integrated into the clan hub','Cyan visual marker for your personal position','Lightweight and optimized for minimal performance impact'],
      files:[ {label:'statsclanhub.js', path:'resources/userscripts/legal/clan-average-stats/statsclanhub.js'} ],
      readme:'resources/userscripts/legal/clan-average-stats/README.md',
      preview:['resources/userscripts/legal/clan-average-stats/example.png'],
      github:'https://github.com/LombreBlanche34/krunker_clan_average_stats',
    },
    {
      slug:'clan-score-chart', title:'Clan Score Chart', version:null,
      icon:'fa-chart-bar', g1:'#10b981', g2:'#0d9488',
      tags:['Userscript','In-Game','Tools','UI'],
      desc:'Displays a dynamic bar chart of clan members\u2019 scores with customizable player count.',
      fullDesc:'A lightweight userscript that visualizes clan member performance through an interactive bar chart. Updates automatically when switching to the clan tab and lets you choose how many top performers to display (5 to 50 players).',
      features:['Real-time visualization of member scores','Customizable selector for number of players displayed','Smooth animations and elegant transitions','Non-intrusive design integrated into the interface','Automatic update when switching tabs','Interactive tooltips to display exact scores','Optimized performance with no impact on the game','Quickly identify the clan\u2019s top players'],
      files:[ {label:'clan_chart.js', path:'resources/userscripts/legal/clan-score-chart/clan_chart.js'} ],
      readme:'resources/userscripts/legal/clan-score-chart/readme.md',
      preview:['resources/userscripts/legal/clan-score-chart/example.png'],
      github:'https://github.com/LombreBlanche34/krunker_clan_score_chart',
    },
    {
      slug:'headshot-streak-sound', title:'Headshot Streak Sounds', version:null,
      icon:'fa-bullseye', g1:'#a855f7', g2:'#db2777',
      tags:['Userscript','In-Game','compatible'],
      desc:'Plays streak sounds when you get consecutive headshot kills.',
      fullDesc:'A userscript that monitors the in-game chat to detect headshot kills. When you chain multiple headshots in a row, it automatically plays the corresponding streak sound (streak 2, streak 3, etc.), adding an extra layer of satisfaction to your gameplay.',
      features:['Automatic headshot detection via chat','Progressive streak sounds based on headshot count','Real-time tracking of consecutive kills','Automatic reset between streaks','No impact on performance','Native game sounds for an immersive experience','Compatible with all game modes','Simple and automatic installation'],
      files:[ {label:'headshot.js', path:'resources/userscripts/legal/headshot-streak-sound/headshot.js'} ],
      github:'https://github.com/LombreBlanche34/krunker_headshot_streak_sound',
    },
    {
      slug:'kovaaks-sim', title:'Kovaaks Sandbox', version:'1.0.1',
      icon:'fa-bullseye', g1:'#f59e0b', g2:'#ea580c',
      tags:['Userscript','In-Game','Enhancement','Performance','compatible'],
      desc:'Transform Krunker into a Kovaak\u2019s-like aim trainer with custom sounds and effects.',
      fullDesc:'A comprehensive aim training enhancement that removes your weapon sounds, adds kill sounds, and implements pitch-based hit feedback. Perfect for players who want a more focused aim training experience similar to Kovaaks.',
      features:['Removes your weapon firing sounds','Custom kill sound','Pitch effect on hitmarkers','Lightweight and optimized for smooth gameplay'],
      files:[ {label:'kovaaks_simulator.js', path:'resources/userscripts/legal/kovaaks-sim/kovaaks_simulator.js'} ],
      readme:'resources/userscripts/legal/kovaaks-sim/readme.md',
      github:'https://github.com/LombreBlanche34/krunker_kovaaks_sim',
    },
    {
      slug:'lobby-finder', title:'Krunker Matchmaker', version:'1.0.2',
      icon:'fa-users', g1:'#6366f1', g2:'#9333ea',
      tags:['Userscript','In-Game','Tools','Utility','compatible'],
      desc:'Browse and join Krunker.io lobbies directly from the main page.',
      fullDesc:'Two lightweight userscripts to browse and join Krunker.io lobbies directly from the main page. Choose between fast cached data or real-time accurate server information to find the perfect lobby.',
      features:['Browse available public lobbies in your region','Display player count, map, mode and remaining time','Join any lobby with one click','Press F2 to refresh the lobby list','Fast version (API cache) or accurate (real-time data)','Avoid \u201clobby full\u201d errors with accurate version','Clean interface that doesn\u2019t interfere with gameplay','Automatic filtering of custom and non-FFA lobbies'],
      files:[
        {label:'matchmaker.js (fast)', path:'resources/userscripts/legal/lobby-finder/matchmaker.js'},
        {label:'precise_matchmaker.js (accurate)', path:'resources/userscripts/legal/lobby-finder/precise_matchmaker.js'},
      ],
      readme:'resources/userscripts/legal/lobby-finder/readme.md',
      preview:['resources/userscripts/legal/lobby-finder/example.png'],
      github:'https://github.com/LombreBlanche34/krunker_lobby_finder',
    },
    {
      slug:'no-custom-weapon-sounds', title:'No Custom Weapon Sounds', version:'1.0.0',
      icon:'fa-rotate-right', g1:'#60a5fa', g2:'#2563eb',
      tags:['Userscript','In-Game','compatible'],
      desc:'Replace custom weapon sounds by default sound.',
      fullDesc:'Forces the default sound (works with mods) in place of any custom weapon sound. You can independently choose whether this applies to your own weapon sounds and/or enemy weapon sounds via settings.js.',
      features:['No custom weapons sounds','Works for your sound and enemy sounds independently'],
      files:[ {label:'no_custom-weapon-sounds.js', path:'resources/userscripts/legal/no-custom-weapon-sounds/no_custom-weapon-sounds.js'} ],
      readme:'resources/userscripts/legal/no-custom-weapon-sounds/README.md',
      github:'https://github.com/LombreBlanche34/krunker_no_custom_weapon_sounds/',
    },
    {
      slug:'onetap-hating', title:'One-Tap Death Counter', version:'1.0.0',
      icon:'fa-crosshairs', g1:'#ef4444', g2:'#e11d48',
      tags:['Userscript','In-Game','Tools','UI','compatible'],
      desc:'Tracks how many times you die to one-tap weapons with real-time statistics.',
      fullDesc:'A lightweight userscript that monitors your deaths to one-tap weapons (Sniper, Crossbow, Infiltrator, Thrown Knives) in Krunker.io. Available in two versions: basic (resets per lobby) and persistent (saves across sessions). Displays a clean HUD counter showing your one-tap death ratio in real-time.',
      features:['Real-time tracking of one-tap deaths','Persistent version with statistics saving','Automatic kill feed analysis via chat','Clean and non-intrusive HUD counter','Detects Sniper, Crossbow, Infiltrator and thrown knives','Zero impact on game performance','Death ratio displayed in real-time (X/Y)','Customizable to track other weapons'],
      files:[
        {label:'onetap_hating.js (per-lobby)', path:'resources/userscripts/legal/onetap-hating/onetap_hating.js'},
        {label:'onetap_hating_persistent.js (saved)', path:'resources/userscripts/legal/onetap-hating/onetap_hating_persistent.js'},
      ],
      readme:'resources/userscripts/legal/onetap-hating/README.md',
      preview:['resources/userscripts/legal/onetap-hating/example.png'],
      github:'https://github.com/LombreBlanche34/krunker_onetap_hating',
    },
    {
      slug:'ranked-external-queue', title:'External Ranked Queue', version:null,
      icon:'fa-desktop', g1:'#22d3ee', g2:'#2563eb',
      tags:['Software','External Program'],
      desc:'External ranked queue manager for maps & region selection for EVERY client.',
      fullDesc:'An external queue manager for Krunker Ranked. Allows you to stay in the ranked queue while switching lobbies, choose preferred maps, and select your region with a standalone desktop application.',
      features:['Stay in ranked queue while switching lobbies','Choose preferred maps before queueing','Region selection support','Standalone external application (not a userscript)','Automatic detection of ranked matchmaking','Lightweight and fast interface','Works with EVERY client'],
      files:[
        {label:'app.py', path:'resources/userscripts/legal/ranked-external-queue/app.py'},
        {label:'requirements.txt', path:'resources/userscripts/legal/ranked-external-queue/requirements.txt'},
      ],
      readme:'resources/userscripts/legal/ranked-external-queue/README.md',
      preview:['resources/userscripts/legal/ranked-external-queue/Auth_page.png','resources/userscripts/legal/ranked-external-queue/Queue_page.png'],
      github:'https://github.com/LombreBlanche34/krunker_ranked_external_queue',
      note:'Standalone Python app, not a browser userscript \u2014 see the readme for setup.',
    },
    {
      slug:'ranked-kill-feed', title:'Ranked Killfeed', version:'1.0.1',
      icon:'fa-skull-crossbones', g1:'#c084fc', g2:'#22c55e',
      tags:['Userscript','In-Game','compatible'],
      desc:'Shows the weapon of the enemy who has just died (AK dead, SMG dead, SNIPER dead\u2026).',
      fullDesc:'Shows the weapon of the enemy who has just died (AK dead, SMG dead, SNIPER dead\u2026), reading kills from your allies straight off the kill feed instead of the chat.',
      features:['No need to read the chat','Instant information about enemy weapons'],
      files:[ {label:'ranked_killfeed.js', path:'resources/userscripts/legal/ranked-kill-feed/ranked_killfeed.js'} ],
      readme:'resources/userscripts/legal/ranked-kill-feed/readme.md',
      preview:['resources/userscripts/legal/ranked-kill-feed/example.png'],
      video:'resources/userscripts/legal/ranked-kill-feed/example.mp4',
      github:'https://github.com/LombreBlanche34/krunker_ranked_kill_feed/tree/main',
    },
    {
      slug:'rankedlb-search-users', title:'Better Ranked Leaderboard', version:null,
      icon:'fa-magnifying-glass', g1:'#fb923c', g2:'#f43f5e',
      tags:['Userscript','In-Game','compatible'],
      desc:'Remove the players limit and add a search bar for username.',
      fullDesc:'Removes the players limit on the ranked leaderboard (1000 players / page instead of the default cap) and adds a search bar so you can jump straight to a specific player.',
      features:['No players limit','Search bar for username'],
      files:[ {label:'rankedLB_searchUsers.js', path:'resources/userscripts/legal/rankedlb-search-users/rankedLB_searchUsers.js'} ],
      readme:'resources/userscripts/legal/rankedlb-search-users/readme.md',
      preview:['resources/userscripts/legal/rankedlb-search-users/example_1.png'],
      github:'https://github.com/LombreBlanche34/krunker_rankedLB_searchUsers',
    },
  ],
};

function tagChip(tag){
  const c = TAG_COLORS[tag] || '#94a3b8';
  return `<span class="tag-chip" style="--tc:${c}">${tag}</span>`;
}

function renderResourceList(node, main, path, crumbs, color){
  const list = RESOURCE_LISTS[node.id];
  const el = document.getElementById('content');
  el.innerHTML = `
    <div class="breadcrumb">${crumbs}</div>
    <div class="content-head">
      <div class="content-icon">${icon(main.glyph)}</div>
      <h2>${node.label}</h2>
    </div>
    <p class="content-desc">Community-made userscripts that only use Krunker\u2019s own client-side systems \u2014 quality-of-life and UI additions, no game manipulation. Click a card to see the full rundown, or grab a file straight away.</p>
    <div class="meta-strip">
      <span class="chip">${main.label}</span>
      <span class="chip">${list.length} script${list.length>1?'s':''}</span>
    </div>
    <div class="resource-grid">
      ${list.map((item,i) => `
        <div class="resource-card" data-idx="${i}" style="--g1:${item.g1}; --g2:${item.g2}">
          <div class="resource-card-glow"></div>
          <div class="resource-card-top">
            <div class="resource-icon"><i class="fas ${item.icon}"></i></div>
            <h3>${item.title}</h3>
          </div>
          <p class="resource-desc">${item.desc}</p>
          <div class="resource-tags">${item.tags.map(tagChip).join('')}</div>
          <div class="resource-actions">
            ${item.files.map(f => `<a class="btn-download" href="${f.path}" download onclick="event.stopPropagation()">\u2913 ${f.label}</a>`).join('')}
            ${item.github ? `<a class="btn-readme" href="${item.github}" target="_blank" rel="noopener" onclick="event.stopPropagation()"><i class="fab fa-github"></i> Code</a>` : ''}
          </div>
          <div class="resource-preview-hint"><i class="fas fa-eye"></i> Click to preview</div>
        </div>`).join('')}
    </div>
    <div class="status-note">Use at your own risk. Always review a script before running it, and keep your userscript manager up to date.</div>
    ${COMMUNITY_SECTIONS[node.id] ? `
      <div class="content-head" style="margin-top:26px;">
        <h2 style="margin:0;">Community Submissions</h2>
      </div>
      <iframe class="embed-frame" src="community/section.html?cat=${encodeURIComponent(COMMUNITY_SECTIONS[node.id].cat)}&title=${encodeURIComponent(COMMUNITY_SECTIONS[node.id].title)}" title="${COMMUNITY_SECTIONS[node.id].title} community submissions" loading="lazy"></iframe>
    ` : ''}
  `;

  el.querySelectorAll('.resource-card').forEach(card => {
    card.addEventListener('click', () => openResourceModal(list[+card.getAttribute('data-idx')]));
  });
}

function openResourceModal(item){
  const modal = document.getElementById('resourceModal');
  document.getElementById('modalIcon').innerHTML = `<i class="fas ${item.icon}"></i>`;
  document.getElementById('modalIcon').style.background = `linear-gradient(135deg, ${item.g1}, ${item.g2})`;
  document.getElementById('modalTitle').textContent = item.title + (item.version ? `  \u00b7  v${item.version}` : '');
  document.getElementById('modalTags').innerHTML = item.tags.map(tagChip).join('');
  document.getElementById('modalDesc').textContent = item.fullDesc || item.desc;

  const media = [];
  if(item.video) media.push(`<video src="${item.video}" class="modal-media-item" controls muted loop playsinline></video>`);
  (item.preview||[]).forEach(p => media.push(`<img src="${p}" class="modal-media-item" alt="${item.title} preview">`));
  document.getElementById('modalMedia').innerHTML = media.length
    ? media.join('')
    : `<div class="modal-media-empty"><i class="fas fa-image"></i><span>No preview available</span></div>`;

  document.getElementById('modalFeatures').innerHTML = item.features.map(f =>
    `<li><i class="fas fa-check-circle"></i><span>${f}</span></li>`).join('');

  const actions = [];
  if(item.note) actions.push(`<p class="modal-note">${item.note}</p>`);
  document.getElementById('modalActions').innerHTML = `
    ${item.note ? `<p class="modal-note">${item.note}</p>` : ''}
    <div class="modal-actions-row">
      ${item.files.map(f => `<a class="btn-download btn-lg" href="${f.path}" download>\u2913 ${f.label}</a>`).join('')}
      ${item.github ? `<a class="btn-readme btn-lg" href="${item.github}" target="_blank" rel="noopener"><i class="fab fa-github"></i> View Code</a>` : ''}
      ${item.readme ? `<a class="btn-readme btn-lg" href="${item.readme}" target="_blank" rel="noopener"><i class="fas fa-file-lines"></i> Readme</a>` : ''}
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeResourceModal(){
  document.getElementById('resourceModal').classList.remove('active');
  document.body.style.overflow = '';
  document.querySelectorAll('.modal-media-item').forEach(m => { if(m.tagName === 'VIDEO') m.pause(); });
}
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('resourceModal');
  if(!overlay) return;
  document.getElementById('modalClose').addEventListener('click', closeResourceModal);
  overlay.addEventListener('click', e => { if(e.target === overlay) closeResourceModal(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeResourceModal(); });
});

/* Leaf nodes that render a simple "join / follow" link card instead of
   the generic placeholder. */
const LINK_PAGES = {
  'about-discord': {
    label:'Discord', url:'https://discord.gg/HVpGk9a5Cu', icon:'fa-discord', iconType:'fab',
    blurb:'Join the Aura Gangs Team Discord for community chat, support, and updates.',
    cta:'Join Discord',
  },
};

function renderLinkPage(node, main, crumbs){
  const link = LINK_PAGES[node.id];
  const el = document.getElementById('content');
  el.innerHTML = `
    <div class="breadcrumb">${crumbs}</div>
    <div class="content-head">
      <div class="content-icon">${icon(main.glyph)}</div>
      <h2>${node.label}</h2>
    </div>
    <p class="content-desc">${link.blurb}</p>
    <div class="meta-strip">
      <span class="chip">${main.label}</span>
    </div>
    <a class="link-cta" href="${link.url}" target="_blank" rel="noopener">
      <i class="${link.iconType} ${link.icon}"></i>
      <span>${link.cta}</span>
    </a>
  `;
}

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

  if(RESOURCE_LISTS[node.id]){
    renderResourceList(node, main, path, crumbs, color);
    return;
  }

  if(LINK_PAGES[node.id]){
    renderLinkPage(node, main, crumbs);
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
