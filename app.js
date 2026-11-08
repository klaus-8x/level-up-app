const worlds = [
 {id:"school",name:"School Smart",sub:"Lernen ohne Lernchaos",emoji:"🎯",hacks:[
 ["5-Minuten-Start","Nimm dir nur fünf Minuten vor. Fang mit dem kleinsten möglichen Schritt an.",10],
 ["Fokus-Sprint","Lerne 20 Minuten konzentriert und mach danach eine kurze Pause.",10],
 ["Kopf-aus-Kalender","Schreib Klassenarbeiten und Aufgaben auf. Dein Kopf muss sie nicht dauernd festhalten.",10],
 ["Erst leicht, dann knifflig","Starte bei einer Arbeit mit Aufgaben, die du sicher kannst. Das bringt Ruhe und Punkte.",10],
 ["Aktiv statt nur lesen","Leg deine Unterlagen weg und erkläre den Stoff aus dem Kopf. So merkst du, was schon sitzt.",15]
 ]},
 {id:"body",name:"Body Power",sub:"Dein Körper ist dein Team",emoji:"⚡",hacks:[
 ["Bewegungs-Minute","Steh auf, streck dich oder geh kurz umher. Schon kleine Bewegung kann guttun.",10],
 ["Wasser & Energie","Trink regelmäßig Wasser und iss möglichst regelmäßig. Dein Körper braucht Energie.",10],
 ["Schlaf ist Power","Versuch, genug Schlaf zu bekommen. Für Jugendliche sind meist 8–10 Stunden empfehlenswert.",15]
 ]},
 {id:"mind",name:"Mind Power",sub:"Ruhe im Kopf finden",emoji:"🧠",hacks:[
 ["Ruhiger Atem","Atme bequem 4 Sekunden ein und 6 Sekunden aus. Wiederhole es einige Male, ohne dich zu zwingen.",10],
 ["Anti-Panik-Satz","Sag dir: Ich muss nicht alles auf einmal lösen. Ich kümmere mich um den nächsten Schritt.",10],
 ["Fehler sind Daten","Ein Fehler sagt dir, was du noch üben kannst – nicht, was du wert bist.",10],
 ["Kopf-leer-Ritual","Notiere abends: Was war gut? Was beschäftigt mich? Was ist morgen mein erster kleiner Schritt?",10]
 ]},
 {id:"energy",name:"Energy Boost",sub:"Pausen, die wirklich helfen",emoji:"🔋",hacks:[
 ["Echte Pause","Mach in einer Pause etwas anderes als Lernen. Steh auf, schau aus dem Fenster oder beweg dich.",10],
 ["Offline-Freude","Plane eine kleine Sache, auf die du dich freust: Musik, Zeichnen, Sport oder ein Treffen.",10],
 ["Handy-Parkplatz","Leg dein Handy für einen Lernblock außer Reichweite – und gönn dir danach bewusst Zeit dafür.",10]
 ]},
 {id:"life",name:"Life Skills",sub:"Dein Alltag, deine Grenzen",emoji:"🧭",hacks:[
 ["Gestern-Ich-Vergleich","Vergleiche dich nicht mit anderen. Frag dich lieber, was du heute ein kleines bisschen besser kannst.",10],
 ["Nein ist okay","Du darfst freundlich Nein sagen, wenn dir etwas zu viel wird.",10],
 ["Hilfe ist Stärke","Frag eine Person deines Vertrauens um Hilfe, wenn du allein nicht weiterkommst.",10]
 ]},
 {id:"feel",name:"Feel Good",sub:"Für Tage, an denen's schwer ist",emoji:"♡",feel:true,hacks:[
 ["Gefühle rauslassen","Schreib auf, was dich gerade beschäftigt. Ohne Bewertung und ohne dass es schön klingen muss.",10],
 ["Musik-Moment","Hör einen Song, der dir guttut. Du musst dabei nichts anderes schaffen.",10],
 ["Frische-Luft-Reset","Geh, wenn es sich gut und sicher anfühlt, 5–10 Minuten nach draußen oder ans offene Fenster.",10],
 ["Nicht allein bleiben","Schreib einer vertrauten Person: „Mir geht's gerade nicht so gut. Hast du kurz Zeit?“",15],
 ["Wohlfühlpause","Mach es dir gemütlich, trink etwas und gönn dir eine Pause ohne schlechtes Gewissen.",10],
 ["Freundlich zu dir","Frag dich: Was würde ich einem guten Freund sagen, der sich gerade so fühlt wie ich?",10],
 ["Mini-Schritt","Such dir nur eine kleine Sache aus, die dir jetzt guttun könnte. Mehr musst du gerade nicht lösen.",10],
 ["Unterstützung holen","Wenn es länger anhält oder sehr belastend wird, sprich mit einer vertrauten erwachsenen Person.",15]
 ]}
];

const boosts = [
 "Du musst nicht alles auf einmal schaffen. Ein kleiner Schritt zählt.",
 "Pausen sind kein Rückschritt. Sie helfen dir, wieder Kraft zu sammeln.",
 "Du bist mehr als Noten, Leistung und To-do-Listen.",
 "Heute reicht ein nächster Schritt. Nicht der ganze Weg.",
 "Du darfst Hilfe annehmen. Du musst nicht alles allein schaffen.",
 "Es ist okay, wenn heute nicht alles klappt."
];
const defaultState = {done:[],favorites:[],xp:0,challengeStart:null,challengeDays:[],moods:[],lastMood:null};
let state = loadState();
let currentWorld = null;
let deferredInstall = null;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
function loadState(){try{return {...defaultState,...JSON.parse(localStorage.getItem("levelup-state")||"{}")}}catch{return {...defaultState}}}
function save(){localStorage.setItem("levelup-state",JSON.stringify(state));renderAll()}
function toast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2200)}
function allHacks(){return worlds.flatMap(w=>w.hacks.map((h,i)=>({id:`${w.id}-${i}`,world:w,...{title:h[0],desc:h[1],xp:h[2]}})))}
function level(){return Math.floor(state.xp/100)+1}
function renderLevel(){const lv=level(),within=state.xp%100;$("#levelNumber").textContent=String(lv).padStart(2,"0");$("#levelName").textContent=["Starter","Explorer","Fokus-Profi","Mutmacher","Level Legend"][Math.min(lv-1,4)];$("#xpBar").style.width=within+"%";$("#xpText").textContent=state.xp+" XP";$("#nextXp").textContent=`Noch ${100-within} XP bis Level ${lv+1}`}
function renderWorlds(){const grid=$("#worldGrid");grid.innerHTML="";worlds.forEach(w=>{const ids=w.hacks.map((_,i)=>`${w.id}-${i}`),done=ids.filter(id=>state.done.includes(id)).length;const b=document.createElement("button");b.className="world-card"+(w.feel?" feel":"");b.innerHTML=`<span class="emoji">${w.emoji}</span><h3>${w.name}</h3><p>${w.sub}</p><div class="world-progress"><span style="width:${done/ids.length*100}%"></span></div>`;b.addEventListener("click",()=>openWorld(w.id));grid.append(b)})}
function hackMarkup(h){const done=state.done.includes(h.id),fav=state.favorites.includes(h.id);return `<article class="hack-item"><div><h3>${esc(h.title)}</h3><p>${esc(h.desc)}</p><div class="hack-meta"><span>+${h.xp} XP</span><span>${done?"✓ Erledigt":"Kleiner Schritt"}</span></div></div><div class="hack-actions"><button class="icon-btn ${fav?"fav":""}" data-fav="${h.id}" aria-label="Favorit">${fav?"★":"☆"}</button><button class="icon-btn ${done?"done":""}" data-done="${h.id}" aria-label="Als erledigt markieren">${done?"✓":"+"}</button></div></article>`}
function esc(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function openWorld(id){currentWorld=id;const w=worlds.find(x=>x.id===id);$("#hackPanel").hidden=false;$("#panelEyebrow").textContent=w.feel?"WARM & GEBORGEN":"DEINE HACKS";$("#panelTitle").textContent=w.name;$("#hackList").innerHTML=w.hacks.map((h,i)=>hackMarkup({id:`${w.id}-${i}`,world:w,title:h[0],desc:h[1],xp:h[2]})).join("");$("#hackPanel").scrollIntoView({behavior:"smooth",block:"start"})}
function renderFavorites(){const list=$("#favoriteList"),items=allHacks().filter(h=>state.favorites.includes(h.id));list.innerHTML=items.length?items.map(hackMarkup).join(""):'<div class="empty">Noch keine Favoriten. Markiere Hacks mit ☆, die du schnell wiederfinden möchtest.</div>'}
function renderProgress(){const done=state.done.length;$("#statDone").textContent=done;$("#statXp").textContent=state.xp;$("#statFav").textContent=state.favorites.length;$("#doneCount").textContent=`${done} / ${allHacks().length} erledigt`;const days=state.challengeStart?Math.min(14,Math.floor((Date.now()-state.challengeStart)/86400000)+1):0;$("#challengeTrack").innerHTML=Array.from({length:14},(_,i)=>`<span class="day-dot ${state.challengeDays.includes(i+1)?"done":""}">${i+1}</span>`).join("");$("#challengeStatus").textContent=state.challengeStart?`Tag ${days} von 14 · ${state.challengeDays.length} Tage abgehakt`:"Noch nicht gestartet";$("#challengeBtn").textContent=state.challengeStart?"Heute abhaken":"Challenge starten";$("#moodSaved").textContent=state.lastMood?`Dein letzter Check-in: ${state.lastMood}`:"Dein Check-in wird nur auf diesem Gerät gespeichert."}
function renderAll(){renderLevel();renderWorlds();renderFavorites();renderProgress();if(currentWorld)openWorldNoScroll(currentWorld)}
function openWorldNoScroll(id){const w=worlds.find(x=>x.id===id);$("#panelEyebrow").textContent=w.feel?"WARM & GEBORGEN":"DEINE HACKS";$("#panelTitle").textContent=w.name;$("#hackList").innerHTML=w.hacks.map((h,i)=>hackMarkup({id:`${w.id}-${i}`,world:w,title:h[0],desc:h[1],xp:h[2]})).join("")}
function showView(name){$$(".tab").forEach(t=>t.classList.toggle("active",t.dataset.view===name));$("#worldsView").hidden=name!=="worlds";$("#favoritesView").hidden=name!=="favorites";$("#progressView").hidden=name!=="progress";if(name!=="worlds")$("#hackPanel").hidden=true}
function toggleDone(id){if(state.done.includes(id)){state.done=state.done.filter(x=>x!==id);const h=allHacks().find(x=>x.id===id);state.xp=Math.max(0,state.xp-(h?.xp||0));toast("Hack wieder geöffnet.")}else{state.done.push(id);const h=allHacks().find(x=>x.id===id);state.xp+=(h?.xp||10);toast(`Geschafft! +${h?.xp||10} XP`)}save()}
function toggleFav(id){state.favorites=state.favorites.includes(id)?state.favorites.filter(x=>x!==id):[...state.favorites,id];save()}
document.addEventListener("click",e=>{const d=e.target.closest("[data-done]"),f=e.target.closest("[data-fav]");if(d)toggleDone(d.dataset.done);if(f)toggleFav(f.dataset.fav)});
$$(".tab").forEach(t=>t.addEventListener("click",()=>showView(t.dataset.view)));
$("#closePanel").onclick=()=>$("#hackPanel").hidden=true;
$("#newBoost").onclick=()=>$("#dailyBoost").textContent=boosts[Math.floor(Math.random()*boosts.length)];
$("#dailyBoost").textContent=boosts[new Date().getDate()%boosts.length];
$("#sosBtn").onclick=()=>$("#sosDialog").showModal();
$("#privacyBtn").onclick=()=>$("#privacyDialog").showModal();
$$("[data-close]").forEach(b=>b.onclick=()=>$("#"+b.dataset.close).close());
$$("[data-go-feelgood]").forEach(b=>b.onclick=()=>{$("#sosDialog").close();showView("worlds");openWorld("feel")});
$("#challengeBtn").onclick=()=>{if(!state.challengeStart){state.challengeStart=Date.now();toast("Deine Challenge hat begonnen!")}else{const day=Math.min(14,Math.floor((Date.now()-state.challengeStart)/86400000)+1);if(state.challengeDays.includes(day))toast("Heute hast du schon abgehakt.");else{state.challengeDays.push(day);state.xp+=5;toast("Tages-Schritt abgehakt! +5 XP")}}save()};
$$(".mood-options button").forEach(b=>b.onclick=()=>{state.lastMood=`${b.dataset.mood} · ${new Date().toLocaleDateString("de-DE")}`;state.moods.push({mood:b.dataset.mood,date:new Date().toISOString()});save();toast("Check-in gespeichert – nur auf diesem Gerät.")});
$("#exportBtn").onclick=()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="level-up-backup.json";a.click();URL.revokeObjectURL(a.href);toast("Backup erstellt.")};
$("#importFile").onchange=async e=>{const f=e.target.files[0];if(!f)return;try{const data=JSON.parse(await f.text());if(!Array.isArray(data.done)||!Array.isArray(data.favorites))throw Error();state={...defaultState,...data};save();toast("Backup importiert.")}catch{toast("Datei konnte nicht gelesen werden.")}e.target.value=""};
$("#shareBtn").onclick=async()=>{const url=location.href;if(url.startsWith("file:")){toast("Nach Veröffentlichung kannst du den HTTPS-Link teilen.");return}if(navigator.share){try{await navigator.share({title:"LEVEL UP – Life Toolkit",text:"Probier LEVEL UP aus – dein Life Toolkit!",url})}catch{}}else if(navigator.clipboard){await navigator.clipboard.writeText(url);toast("App-Link kopiert – jetzt in WhatsApp einfügen.")}else toast("Kopiere den App-Link aus der Browser-Adresszeile.")};
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredInstall=e;$("#installBtn").hidden=false});
$("#installBtn").onclick=async()=>{if(!deferredInstall)return;deferredInstall.prompt();await deferredInstall.userChoice;deferredInstall=null;$("#installBtn").hidden=true};
if("serviceWorker" in navigator && location.protocol.startsWith("http"))window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
renderAll();