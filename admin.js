// ═══════════════════════════════════════════════════════════════
// ADMIN.JS — Panel miafina ho an'ny tompon'ny site (Tanjona) ihany
// ═══════════════════════════════════════════════════════════════

// ── 1) TRIGGER MIAFINA ──
// Soraty ny teny miafina eo amin'ny keyboard (na aiza na aiza eo
// amin'ny pejy, tsy mila mikitika input) mba haneho ny bokotra ⚙
// ao ambany havanana. Rehefa efa niditra (login) indray mandeha
// ianao teo amin'ilay solosaina/téléphone, dia tahirizina ao
// amin'ny navigateur ny "clé" ka hiseho ho azy ilay bokotra
// manomboka izay.
const ADMIN_SECRET_CODE = "soltexadmin";
const ADMIN_UNLOCK_KEY = "soltex_admin_unlocked";
let _keyBuffer = "";

document.addEventListener('keydown', (e)=>{
  const tag = (e.target.tagName||"").toLowerCase();
  if(tag==='input' || tag==='textarea') return;
  _keyBuffer += e.key.toLowerCase();
  if(_keyBuffer.length > ADMIN_SECRET_CODE.length) _keyBuffer = _keyBuffer.slice(-ADMIN_SECRET_CODE.length);
  if(_keyBuffer === ADMIN_SECRET_CODE){
    document.getElementById('adminGearBtn').style.display = 'flex';
    toast('🔓 Admin — bokotra miseho');
    _keyBuffer = "";
  }
});

if(localStorage.getItem(ADMIN_UNLOCK_KEY) === '1'){
  document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('adminGearBtn').style.display = 'flex';
  });
}

// ── 2) AUTH ──
let adminSession = null;

async function checkAdminSession(){
  const { data } = await supabaseClient.auth.getSession();
  adminSession = data.session;
}
document.addEventListener('DOMContentLoaded', checkAdminSession);

function openAdminLogin(){
  if(adminSession){ openAdminPanel(); return; }
  document.getElementById('adminLoginModal').style.display = 'flex';
}
function closeAdminModals(){
  document.getElementById('adminLoginModal').style.display = 'none';
  document.getElementById('adminPanel').style.display = 'none';
  document.getElementById('productFormModal').style.display = 'none';
  document.getElementById('adminLoginError').textContent = '';
}
async function adminLogin(){
  const email = document.getElementById('adminEmail').value.trim();
  const password = document.getElementById('adminPassword').value;
  const errEl = document.getElementById('adminLoginError');
  errEl.textContent = '';
  if(!email || !password){ errEl.textContent = 'Fenoy ny email sy mot de passe.'; return; }
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if(error){ errEl.textContent = 'Diso email/mot de passe.'; return; }
  adminSession = data.session;
  localStorage.setItem(ADMIN_UNLOCK_KEY, '1');
  document.getElementById('adminEmail').value = '';
  document.getElementById('adminPassword').value = '';
  document.getElementById('adminLoginModal').style.display = 'none';
  openAdminPanel();
}
async function adminLogout(){
  await supabaseClient.auth.signOut();
  adminSession = null;
  closeAdminModals();
  toast('Nivoaka tao amin\'ny admin ✓');
}

// ── 3) PANEL PRINCIPAL ──
function openAdminPanel(){
  document.getElementById('adminPanel').style.display = 'flex';
  switchAdminTab('produits');
}
function switchAdminTab(tab){
  ['produits','contenu','commandes','visiteurs'].forEach(t=>{
    document.getElementById('tab'+t.charAt(0).toUpperCase()+t.slice(1)).style.display = (t===tab)?'block':'none';
    document.querySelector(`.admin-tab[data-tab="${t}"]`).classList.toggle('active', t===tab);
  });
  if(tab==='produits') renderAdminProductList();
  if(tab==='contenu') loadSiteContentIntoForm();
  if(tab==='commandes') renderAdminOrders();
  if(tab==='visiteurs') renderAdminVisits();
}

// ── 4) PRODUITS: LISTE ──
function renderAdminProductList(){
  const el = document.getElementById('adminProductList');
  if(!products.length){ el.innerHTML = '<p style="color:var(--g600)">Tsy misy produit.</p>'; return; }
  el.innerHTML = products.map(p=>`
    <div class="admin-product-row">
      <img src="${(p.imgs&&p.imgs[0])||''}" onerror="this.style.visibility='hidden'"/>
      <div class="apr-info">
        <div class="apr-name">${p.icon||''} ${p.name}</div>
        <div class="apr-meta">${p.cat} — ${fmtAr(p.price)}${p.old?` (avy ${fmtAr(p.old)})`:''}</div>
      </div>
      <div class="apr-actions">
        <button class="apr-edit" onclick="openProductForm(${p.id})">Ovay</button>
        <button class="apr-del" onclick="deleteProduct(${p.id})">Fafao</button>
      </div>
    </div>
  `).join('');
}

// ── 5) PRODUITS: FORMULAIRE ──
let _pfImages = [];

function openProductForm(id){
  const p = id ? products.find(x=>x.id===id) : null;
  document.getElementById('pfTitle').textContent = p ? 'Ovay produit' : 'Ampio produit';
  document.getElementById('pfId').value = p ? p.id : '';
  document.getElementById('pfName').value = p ? p.name : '';
  document.getElementById('pfIcon').value = p ? (p.icon||'') : '';
  document.getElementById('pfCat').value = p ? p.cat : '';
  document.getElementById('pfType').value = p ? (p.type||'') : '';
  document.getElementById('pfPrice').value = p ? p.price : '';
  document.getElementById('pfOldPrice').value = p && p.old ? p.old : '';
  document.getElementById('pfBadge').value = p ? (p.badge||'') : '';
  document.getElementById('pfDesc').value = p ? (p.desc||'') : '';
  document.getElementById('pfSaveMsg').textContent = '';

  _pfImages = p && p.imgs ? [...p.imgs] : [];
  renderPfImages();

  const specsList = document.getElementById('pfSpecsList');
  specsList.innerHTML = '';
  const specs = p && p.specs ? p.specs : [];
  if(specs.length) specs.forEach(s=>addSpecRow(s.k||s.label||'', s.v||s.value||'')); else addSpecRow();

  const featsList = document.getElementById('pfFeatsList');
  featsList.innerHTML = '';
  const feats = p && p.feats ? p.feats : [];
  if(feats.length) feats.forEach(f=>addFeatRow(typeof f==='string'?f:(f.text||''))); else addFeatRow();

  document.getElementById('productFormModal').style.display = 'flex';
}

function addSpecRow(k='', v=''){
  const row = document.createElement('div');
  row.className = 'adl-row';
  row.innerHTML = `
    <input type="text" placeholder="Anarana (ohatra: Puissance)" class="spec-k" value="${k.replace(/"/g,'&quot;')}"/>
    <input type="text" placeholder="Sanda (ohatra: 300W)" class="spec-v" value="${v.replace(/"/g,'&quot;')}"/>
    <button type="button" class="adl-remove" onclick="this.parentElement.remove()">✕</button>
  `;
  document.getElementById('pfSpecsList').appendChild(row);
}
function addFeatRow(text=''){
  const row = document.createElement('div');
  row.className = 'adl-row';
  row.innerHTML = `
    <input type="text" placeholder="Ohatra: Garantie 12 mois" class="feat-t" value="${text.replace(/"/g,'&quot;')}" style="flex:1"/>
    <button type="button" class="adl-remove" onclick="this.parentElement.remove()">✕</button>
  `;
  document.getElementById('pfFeatsList').appendChild(row);
}

function renderPfImages(){
  const el = document.getElementById('pfImagesPreview');
  el.innerHTML = _pfImages.map((url,i)=>`
    <div class="aip-item">
      <img src="${url}"/>
      <button type="button" class="aip-remove" onclick="removePfImage(${i})">✕</button>
    </div>
  `).join('');
}
function removePfImage(i){ _pfImages.splice(i,1); renderPfImages(); }

async function handleProductImageUpload(e){
  const files = Array.from(e.target.files||[]);
  for(const file of files){
    const path = `products/${Date.now()}_${Math.random().toString(36).slice(2,8)}_${file.name.replace(/[^a-zA-Z0-9.\-_]/g,'')}`;
    const { error } = await supabaseClient.storage.from('product-images').upload(path, file);
    if(error){ toast('❌ Tsy voa-upload ny sary: '+error.message); continue; }
    const { data } = supabaseClient.storage.from('product-images').getPublicUrl(path);
    _pfImages.push(data.publicUrl);
  }
  renderPfImages();
  e.target.value = '';
}

async function saveProduct(){
  const msgEl = document.getElementById('pfSaveMsg');
  const name = document.getElementById('pfName').value.trim();
  const cat = document.getElementById('pfCat').value.trim().toUpperCase();
  if(!name || !cat){ msgEl.style.color='var(--red)'; msgEl.textContent = 'Fenoy ny anarana sy catégorie.'; return; }

  const specs = Array.from(document.querySelectorAll('#pfSpecsList .adl-row')).map(r=>({
    k: r.querySelector('.spec-k').value.trim(), v: r.querySelector('.spec-v').value.trim()
  })).filter(s=>s.k);
  const feats = Array.from(document.querySelectorAll('#pfFeatsList .adl-row')).map(r=>r.querySelector('.feat-t').value.trim()).filter(Boolean);

  const idVal = document.getElementById('pfId').value;
  const row = {
    name, cat,
    type: document.getElementById('pfType').value.trim() || null,
    icon: document.getElementById('pfIcon').value.trim() || null,
    imgs: _pfImages,
    price: parseFloat(document.getElementById('pfPrice').value) || 0,
    old_price: document.getElementById('pfOldPrice').value ? parseFloat(document.getElementById('pfOldPrice').value) : null,
    badge: document.getElementById('pfBadge').value || null,
    description: document.getElementById('pfDesc').value.trim(),
    specs, feats
  };

  let error;
  if(idVal){
    row.id = parseInt(idVal);
    ({ error } = await supabaseClient.from('products').upsert(row));
  } else {
    const maxId = products.reduce((m,p)=>Math.max(m,p.id), 0);
    row.id = maxId + 1;
    ({ error } = await supabaseClient.from('products').insert(row));
  }
  if(error){ msgEl.style.color='var(--red)'; msgEl.textContent = 'Olana: '+error.message; return; }

  msgEl.style.color='var(--green)';
  msgEl.textContent = '✓ Voatahiry!';
  await loadProductsFromSupabase();
  renderAdminProductList();
  setTimeout(()=>{ document.getElementById('productFormModal').style.display='none'; }, 700);
}

async function deleteProduct(id){
  if(!confirm('Hofafana tokoa ity produit ity?')) return;
  const { error } = await supabaseClient.from('products').delete().eq('id', id);
  if(error){ toast('❌ Tsy voafafa: '+error.message); return; }
  await loadProductsFromSupabase();
  renderAdminProductList();
  toast('✓ Voafafa ny produit');
}

// ── 6) CONTENU DU SITE ──
async function loadSiteContentIntoForm(){
  const { data } = await supabaseClient.from('site_content').select('*');
  const map = {}; (data||[]).forEach(r=> map[r.key] = r.value);

  document.getElementById('cfHeroTag').value = map.hero_tag ?? document.getElementById('heroTag').textContent.trim();
  document.getElementById('cfHeroTitle').value = map.hero_title ?? document.getElementById('heroTitle').innerHTML.trim();
  document.getElementById('cfHeroDesc').value = map.hero_desc ?? document.getElementById('heroDesc').textContent.trim();

  const stats = map.hero_stats || [
    {num:'500+',label:'Clients satisfaits'},
    {num:'3 mois',label:'Garantie panneau'},
    {num:'48h',label:'Livraison rapide'}
  ];
  document.getElementById('cfStat1Num').value = stats[0]?.num||'';
  document.getElementById('cfStat1Label').value = stats[0]?.label||'';
  document.getElementById('cfStat2Num').value = stats[1]?.num||'';
  document.getElementById('cfStat2Label').value = stats[1]?.label||'';
  document.getElementById('cfStat3Num').value = stats[2]?.num||'';
  document.getElementById('cfStat3Label').value = stats[2]?.label||'';
}

async function saveSiteContent(){
  const msgEl = document.getElementById('contenuSaveMsg');
  const rows = [
    { key:'hero_tag', value: document.getElementById('cfHeroTag').value },
    { key:'hero_title', value: document.getElementById('cfHeroTitle').value },
    { key:'hero_desc', value: document.getElementById('cfHeroDesc').value },
    { key:'hero_stats', value: [
      { num: document.getElementById('cfStat1Num').value, label: document.getElementById('cfStat1Label').value },
      { num: document.getElementById('cfStat2Num').value, label: document.getElementById('cfStat2Label').value },
      { num: document.getElementById('cfStat3Num').value, label: document.getElementById('cfStat3Label').value }
    ]}
  ];
  const { error } = await supabaseClient.from('site_content').upsert(rows);
  if(error){ msgEl.style.color='var(--red)'; msgEl.textContent = 'Olana: '+error.message; return; }
  msgEl.style.color='var(--green)';
  msgEl.textContent = '✓ Voatahiry! Ho hita amin\'ny site avy hatrany.';
  applySiteContent();
}

async function applySiteContent(){
  try{
    const { data, error } = await supabaseClient.from('site_content').select('*');
    if(error || !data) return;
    const map = {}; data.forEach(r=> map[r.key] = r.value);
    if(map.hero_tag) document.getElementById('heroTag').textContent = map.hero_tag;
    if(map.hero_title) document.getElementById('heroTitle').innerHTML = map.hero_title;
    if(map.hero_desc) document.getElementById('heroDesc').textContent = map.hero_desc;
    if(map.hero_stats && Array.isArray(map.hero_stats)){
      const el = document.getElementById('heroStats');
      el.innerHTML = map.hero_stats.map(s=>`<div><div class="hero-stat-num">${s.num||''}</div><div class="hero-stat-label">${s.label||''}</div></div>`).join('');
    }
  }catch(e){ console.warn('Tsy voaray ny site_content:', e); }
}
document.addEventListener('DOMContentLoaded', applySiteContent);

// ── 7) COMMANDES ──
async function renderAdminOrders(){
  const el = document.getElementById('adminOrdersList');
  el.innerHTML = '<p style="color:var(--g600)">Eo am-pakàna...</p>';
  const { data: orders, error } = await supabaseClient
    .from('orders').select('*').order('created_at', { ascending:false }).limit(50);
  if(error || !orders || !orders.length){ el.innerHTML = '<p style="color:var(--g600)">Tsy misy commande mbola.</p>'; return; }

  const ids = orders.map(o=>o.id);
  const { data: items } = await supabaseClient.from('order_items').select('*').in('order_id', ids);
  const itemsByOrder = {};
  (items||[]).forEach(it=>{ (itemsByOrder[it.order_id] ||= []).push(it); });

  el.innerHTML = orders.map(o=>`
    <div class="admin-order-card">
      <div class="aoc-top"><span>${o.ref}</span><span>${fmtAr(o.total)}</span></div>
      <div class="aoc-meta">
        ${o.prenom} ${o.nom} — ${o.tel}<br/>
        ${o.adresse}, ${o.ville}<br/>
        Paiement: ${o.payment_method} ${o.payment_number?('('+o.payment_number+')'):''} — Statut: ${o.status}<br/>
        ${(itemsByOrder[o.id]||[]).map(it=>`• ${it.qty}× ${it.product_name}`).join('<br/>')}
      </div>
    </div>
  `).join('');
}

// ── 8) VISITEURS ──
async function renderAdminVisits(){
  const statsEl = document.getElementById('adminVisitStats');
  const listEl = document.getElementById('adminVisitList');
  statsEl.innerHTML = '<p style="color:var(--g600)">Eo am-pakàna...</p>';
  listEl.innerHTML = '';

  const { data: visits, error } = await supabaseClient
    .from('site_visits').select('*').order('created_at', { ascending:false }).limit(300);

  if(error || !visits){ statsEl.innerHTML = '<p style="color:var(--red)">Tsy voaray ny angona.</p>'; return; }
  if(!visits.length){ statsEl.innerHTML = '<p style="color:var(--g600)">Tsy misy mpitsidika mbola voaray.</p>'; return; }

  const totalVisits = visits.length;
  const uniqueSessions = new Set(visits.map(v=>v.session_id)).size;
  const todayStr = new Date().toDateString();
  const todayCount = visits.filter(v=> new Date(v.created_at).toDateString()===todayStr).length;

  const byCountry = {};
  visits.forEach(v=>{ const c = v.country||'Tsy fantatra'; byCountry[c]=(byCountry[c]||0)+1; });
  const topCountries = Object.entries(byCountry).sort((a,b)=>b[1]-a[1]).slice(0,5);

  const mobileCount = visits.filter(v=>v.device_type==='Mobile').length;

  statsEl.innerHTML = `
    <div class="admin-form-grid" style="margin-bottom:1rem">
      <div class="admin-order-card"><div class="aoc-top"><span>Fitsidihana rehetra</span><span>${totalVisits}</span></div></div>
      <div class="admin-order-card"><div class="aoc-top"><span>Mpitsidika tokana (unique)</span><span>${uniqueSessions}</span></div></div>
      <div class="admin-order-card"><div class="aoc-top"><span>Androany</span><span>${todayCount}</span></div></div>
      <div class="admin-order-card"><div class="aoc-top"><span>Avy amin'ny finday</span><span>${mobileCount}/${totalVisits}</span></div></div>
    </div>
    <div class="admin-order-card">
      <div class="aoc-top">🌍 Firenena betsaka indrindra</div>
      <div class="aoc-meta">${topCountries.map(([c,n])=>`${c}: ${n}`).join(' &nbsp;|&nbsp; ')}</div>
    </div>
  `;

  listEl.innerHTML = visits.slice(0,50).map(v=>`
    <div class="admin-order-card">
      <div class="aoc-top"><span>${(v.country||'Tsy fantatra')}${v.city?(' — '+v.city):''}</span><span>${new Date(v.created_at).toLocaleString('fr-FR')}</span></div>
      <div class="aoc-meta">
        ${v.device_type||''} — ${v.browser||''}<br/>
        ${v.referrer ? ('Avy amin\'ny: '+v.referrer) : 'Fidirana mivantana'}
      </div>
    </div>
  `).join('');
}