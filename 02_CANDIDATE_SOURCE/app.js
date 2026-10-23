/* Minimal progressive enhancement: no network, no storage, no synthetic live data. */
(()=>{'use strict';
const supported=Object.freeze({front:{title:'Vorne',detail:'Du betrachtest den Würfel von vorne. Die markierte Ecke A ist in allen Ansichten dieselbe.'},top:{title:'Oben',detail:'Du betrachtest denselben Würfel von oben. Ecke A bleibt markiert.'},right:{title:'Rechts',detail:'Du betrachtest denselben Würfel von rechts. Ecke A bleibt markiert.'}});
const status=document.getElementById('view-status');
const panels=Array.from(document.querySelectorAll('[data-main-view]'));
const links=Array.from(document.querySelectorAll('[data-view]'));
if(!status||panels.length!==3||links.length!==3) return;
const readFragment=()=>{const match=/^#view-(front|top|right)$/.exec(location.hash);return match?match[1]:'front';};
const show=(name)=>{
 const key=Object.prototype.hasOwnProperty.call(supported,name)?name:'front';
 for(const panel of panels) panel.hidden=panel.dataset.mainView!==key;
 for(const link of links){if(link.dataset.view===key){link.setAttribute('aria-current','true');}else link.removeAttribute('aria-current');}
 status.textContent='Ansicht: '+supported[key].title+'. '+supported[key].detail;
};
// No data from URL fragments is interpolated into HTML. Whitelist only.
addEventListener('hashchange',()=>show(readFragment()));
addEventListener('popstate',()=>show(readFragment()));
for(const link of links){link.addEventListener('click',event=>{
 event.preventDefault();
 const key=link.dataset.view;
 if(!Object.prototype.hasOwnProperty.call(supported,key))return;
 if(readFragment()!==key)history.pushState(null,'','#view-'+key);
 show(key);
});}
const reset=document.getElementById('reset');
reset?.addEventListener('click',event=>{event.preventDefault();if(readFragment()!=='front')history.pushState(null,'','#view-front');show('front');});
show(readFragment());
})();
