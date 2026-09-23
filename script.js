// ---------- Discography data ----------
// NOTE: "Beyond" and "Inspire" currently point to the same YouTube ID
// (CZKsiwCu-Ao) because that's what was provided — worth double-checking
// against your upload history in case one link is wrong.
const SONGS = [
  { name:"Beyond",              month:"Dec", year:2020, id:"CZKsiwCu-Ao" },
  { name:"Fade Light",          month:"Dec", year:2020, id:"L8bm6Tpx8Ic" },
  { name:"Inspire",             month:"May", year:2021, id:"CZKsiwCu-Ao" },
  { name:"Freeze",              month:"Jun", year:2021, id:"NdJIr32Ii1w" },
  { name:"Waves",               month:"Sep", year:2021, id:"XqBwP1zESKQ" },
  { name:"Starlight",           month:"Jun", year:2022, id:"mlMbFy0JJec" },
  { name:"Devil's Hour",        month:"Dec", year:2022, id:"PuncBCv5S-g" },
  { name:"Good Vibes",          month:"Jan", year:2023, id:"c6sR21xKM0M" },
  { name:"Stellar",             month:"Feb", year:2023, id:"1Jo1_i6xlHg" },
  { name:"Cold",                month:"May", year:2023, id:"DQv5tGvcabs" },
  { name:"Sunshine",            month:"Jun", year:2023, id:"OXPWS2y6nKQ" },
  { name:"Flux",                month:"Jul", year:2023, id:"0YA0mMExH9M" },
  { name:"Symphony of Shadow",  month:"Sep", year:2023, id:"EYmQowKS51w" },
  { name:"Blaze",                month:"Nov", year:2023, id:"Bl53r8cNRMI" },
  { name:"Voyage",              month:"Apr", year:2024, id:"PKnDMtZwRRc" },
  { name:"Nexus",               month:"Mar", year:2025, id:"PsgS6w7j-KY" },
  { name:"Daze",                month:"Jun", year:2025, id:"l-pOaCWOG_M" },
  { name:"Collide",             month:"Jun", year:2025, id:"4Zwrq7_B07o" },
  { name:"Bling",               month:"Aug", year:2025, id:"ry4aQx4OHko" },
  { name:"Inferno",             month:"Aug", year:2025, id:"wbQJSocsFLI" },
  { name:"Horizon",             month:"Aug", year:2025, id:"YaJgYuyn_u4" },
  { name:"Eclipse",             month:"Aug", year:2025, id:"iktkw6R0dck" },
  { name:"Reignite",            month:"Nov", year:2025, id:"u0zNfdSCuBI" },
];

function ytUrl(id){ return `https://youtu.be/${id}`; }
function ytThumb(id){ return `https://img.youtube.com/vi/${id}/hqdefault.jpg`; }

// ---------- Latest releases (home page music section) ----------
function buildReleaseList(el, count=6){
  if(!el) return;
  const latest = [...SONGS].slice(-count).reverse();
  el.innerHTML = latest.map(s => `
    <a class="release-row" href="${ytUrl(s.id)}" target="_blank" rel="noopener">
      <span class="release-name">${s.name}</span>
      <span class="release-date">${s.month} ${s.year}</span>
    </a>
  `).join('');
}

// ---------- Video grid (discography page) ----------
function buildVideoGrid(el){
  if(!el) return;
  el.innerHTML = [...SONGS].reverse().map(s => `
    <a class="video-card reveal" href="${ytUrl(s.id)}" target="_blank" rel="noopener">
      <div class="thumb-wrap">
        <img src="${ytThumb(s.id)}" alt="${s.name}" loading="lazy">
        <div class="play-badge">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
      <div class="video-meta">
        <div class="name">${s.name}</div>
        <div class="date">${s.month} ${s.year}</div>
      </div>
    </a>
  `).join('');
}

// ---------- Scroll reveal ----------
function initReveal(){
  const items = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){
    items.forEach(i => i.classList.add('in-view'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold:0.12 });
  items.forEach(i => io.observe(i));
}

document.addEventListener('DOMContentLoaded', () => {
  buildReleaseList(document.getElementById('release-list'));
  buildVideoGrid(document.getElementById('video-grid'));
  initReveal();
});
