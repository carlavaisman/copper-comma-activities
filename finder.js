/* Copper Comma resource finder. Loaded by a small code block on the Resources and Shop pages.
   To change buttons, edit the lists marked EDIT below, then upload this file to GitHub again. */
(function(){
  var CSS='.ccf{font-family:Arial,Helvetica,sans-serif;color:#292622}\n.ccf-search{display:block;width:100% !important;max-width:100% !important;min-width:0 !important;margin:0 !important;box-sizing:border-box !important;-webkit-appearance:none;appearance:none;padding:14px 16px;border:1px solid #bfa88d;background:#fffcf6;font:15px Arial,Helvetica,sans-serif;color:#292622;border-radius:0;outline:none}\n.ccf-search:focus{border-color:#292622}\n.ccf-group{margin-top:18px}\n.ccf-label{display:block;font:700 10px/1.6 Arial,Helvetica,sans-serif;letter-spacing:2px;text-transform:uppercase;color:#835035;margin-bottom:8px}\n.ccf-chips{display:flex;flex-wrap:wrap;gap:8px}\n.ccf-chips button{padding:9px 14px;border:1px solid #b39a7b;background:transparent;color:#292622;font:12px Arial,Helvetica,sans-serif;cursor:pointer;border-radius:0}\n.ccf-chips button:hover{background:#eee5d6}\n.ccf-chips button[aria-pressed="true"]{background:#e6d9c7;border-color:#292622;box-shadow:inset 0 0 0 1px #292622}\n.ccf-bar{display:flex;justify-content:space-between;align-items:baseline;margin:26px 0 16px;border-top:1px solid #d3c5b4;padding-top:16px}\n.ccf-count{font-size:13px;color:#786b5c}\n.ccf-clear{background:none;border:0;padding:0;font:13px Arial,Helvetica,sans-serif;color:#292622;text-decoration:underline;text-underline-offset:5px;cursor:pointer}\n.ccf-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px 24px}\n.ccf-card{display:block;text-decoration:none !important;color:#292622 !important}\n.ccf-img{aspect-ratio:1/1;background:#e9e1d4;overflow:hidden}\n.ccf-img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .3s}\n.ccf-card:hover .ccf-img img{transform:scale(1.03)}\n.ccf-card h3{margin:12px 0 4px !important;font-family:\'DM Serif Display\',Georgia,serif !important;font-weight:400 !important;font-size:20px !important;line-height:1.25 !important;color:#292622}\n.ccf-card:hover h3{color:#8b4e2d}\n.ccf-price{font-size:14px;color:#292622}\n.ccf-empty{padding:30px;border:1px dashed #c6b6a4;text-align:center;font-size:15px;line-height:1.6}\n.ccf-empty a{color:#292622;text-underline-offset:5px}\n@media(max-width:800px){.ccf-grid{grid-template-columns:repeat(2,1fr);gap:22px 14px}.ccf-card h3{font-size:17px !important}}\n.ccf-was{text-decoration:line-through;color:#786b5c;margin-left:4px}\n.ccf-layout{display:grid;grid-template-columns:240px 1fr;gap:44px;align-items:start}\n.ccf-side{position:sticky;top:24px;max-height:calc(100vh - 48px);overflow:auto;padding-right:4px}\n.ccf-side-head{display:flex;justify-content:space-between;align-items:baseline;border-bottom:1px solid #d3c5b4;padding-bottom:10px;margin-bottom:4px}\n.ccf-side-head .ccf-label{margin:0}\n.ccf-sec{border-bottom:1px solid #e0d5c6;padding:12px 0}\n.ccf-sec summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;font:700 10px/1.6 Arial,Helvetica,sans-serif;letter-spacing:2px;text-transform:uppercase;color:#835035}\n.ccf-sec summary::-webkit-details-marker{display:none}\n.ccf-sec summary:after{content:"+";font:16px/1 Arial,Helvetica,sans-serif;color:#292622}\n.ccf-sec[open] summary:after{content:"−"}\n.ccf-list{display:flex;flex-direction:column;gap:2px;margin-top:8px}\n.ccf-list button{display:flex;align-items:center;gap:10px;width:100%;text-align:left;padding:6px 0;border:0;background:none;color:#292622;font:14px/1.3 Arial,Helvetica,sans-serif;cursor:pointer;border-radius:0}\n.ccf-list button:before{content:"";flex:0 0 14px;height:14px;border:1px solid #9c8468;background:#fffcf6;box-sizing:border-box}\n.ccf-list button[aria-pressed="true"]:before{background:#292622;border-color:#292622;box-shadow:inset 0 0 0 2px #fffcf6}\n.ccf-list button:hover{color:#8b4e2d}\n.ccf-top{display:flex;gap:10px}\n.ccf-toggle{display:none;flex:0 0 auto;padding:0 18px;border:1px solid #292622;background:#292622;color:#faf7ef;font:13px Arial,Helvetica,sans-serif;cursor:pointer;border-radius:0}\n.ccf-layout .ccf-bar{margin:18px 0 20px}\n@media(max-width:1100px){.ccf-layout .ccf-grid{grid-template-columns:repeat(2,1fr)}}\n@media(max-width:900px){.ccf-layout{display:flex;flex-direction:column;align-items:stretch;gap:0}.ccf-main{display:contents}.ccf-main>.ccf-label{order:1}.ccf-top{order:2}.ccf-side{order:3;position:static;max-height:none;display:none;border:1px solid #d3c5b4;background:#fffcf6;padding:6px 16px 10px;margin-top:12px}.ccf-layout .ccf-bar{order:4}.ccf-layout .ccf-grid{order:5}.ccf-layout.ccf-open .ccf-side{display:block}.ccf-toggle{display:block}}';
  var MARKUP='<label class="ccf-label" for="ccf-q">Search</label>\n<input id="ccf-q" class="ccf-search" type="search" placeholder="Try “Chanukkah,” “shapes,” or “lesson plan”" autocomplete="off">\n<div class="ccf-group"><span class="ccf-label">Age &amp; grade</span><div class="ccf-chips" data-group="age"></div></div>\n<div class="ccf-group"><span class="ccf-label">Theme</span><div class="ccf-chips" data-group="theme"></div></div>\n<div class="ccf-group"><span class="ccf-label">More</span><div class="ccf-chips" data-group="extra"></div></div>\n<div class="ccf-bar"><span class="ccf-count" role="status" aria-live="polite">The resource finder loads on the live site.</span><button type="button" class="ccf-clear" hidden>Clear all</button></div>\n<div class="ccf-grid"></div>';
  var SHOPMARKUP='<div class="ccf-layout"><aside class="ccf-side" id="ccf-side" aria-label="Filters"><div class="ccf-side-head"><span class="ccf-label">Filter</span><button type="button" class="ccf-clear" hidden>Clear all</button></div>'+
    '<details class="ccf-sec" open><summary>Category</summary><div class="ccf-list" data-group="cat"></div></details>'+
    '<details class="ccf-sec" open><summary>Age &amp; grade</summary><div class="ccf-list" data-group="age"></div></details>'+
    '<details class="ccf-sec"><summary>Theme</summary><div class="ccf-list" data-group="theme"></div></details>'+
    '<details class="ccf-sec"><summary>More</summary><div class="ccf-list" data-group="extra"></div></details></aside>'+
    '<div class="ccf-main"><label class="ccf-label" for="ccf-q">Search</label><div class="ccf-top"><input id="ccf-q" class="ccf-search" type="search" placeholder="Try “Chanukkah,” “shapes,” or “lesson plan”" autocomplete="off"><button type="button" class="ccf-toggle" aria-controls="ccf-side" aria-expanded="false">Filters</button></div>'+
    '<div class="ccf-bar"><span class="ccf-count" role="status" aria-live="polite">The shop loads on the live site.</span></div><div class="ccf-grid"></div></div></div>';
  function boot(root){
    if(root.getAttribute('data-ready'))return; root.setAttribute('data-ready','1');
    var shopMode=root.getAttribute('data-mode')==='shop';
    root.innerHTML=shopMode?SHOPMARKUP:MARKUP;
    /* ---- EDIT THESE LISTS when you add new age or theme tags (spell exactly as in Squarespace) ---- */
    var AGES=["Infants & toddlers","3s","Pre-K","Kindergarten","Grades 1–2","Grades 3–5","Grades 6–8","Grades 9–12","Higher education","Educators"];
    var THEMES=["Jewish learning","Literacy","Math","Science & nature","Social-emotional","Arts & making","Inquiry & curiosity","Assessment & feedback","Planning & leadership","School operations","Family communication","Writing & communication"];
    var EXTRAS=["Bundle","Free","Bilingual","Editable"];
    /* Shop categories: [name shown, the end of the category's web address] */
    var CATS=[["Classroom Resources","classroom-resources"],["Lesson Plans & Worksheets","lesson-plans-worksheets"],["Director & Leadership Tools","director-leadership-tools"],["Professional Learning Kits","professional-learning-kits"]];
    /* Alternate spellings: any word on the right also finds the word on the left */
    var SYN={"chanukkah":["hanukkah","chanukah","hanukah","hannukah"],"passover":["pesach","pesaj"],"alef-bet":["aleph-bet","aleph bet","alef bet","hebrew letters"],"rosh hashanah":["rosh hashana"],"sukkot":["sukkos","succot"],"shabbat":["shabbos","sabbath"],"tu bishvat":["tu b'shvat","tu bshvat"]};
    /* ------------------------------------------------------------------------------------------------ */
    var shop=root.getAttribute('data-shop')||'/shop';
    var tog=root.querySelector('.ccf-toggle'),lay=root.querySelector('.ccf-layout');
    if(tog)tog.onclick=function(){var o=lay.classList.toggle('ccf-open');tog.setAttribute('aria-expanded',String(o));};
    var q=root.querySelector('.ccf-search'), grid=root.querySelector('.ccf-grid'), count=root.querySelector('.ccf-count'), clear=root.querySelector('.ccf-clear');
    var sel={cat:[],age:[],theme:[],extra:[]}, items=[], catMap={};
    function norm(s){return String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[–—]/g,'-').replace(/\s+/g,' ').trim();}
    function expand(term){var t=norm(term), out=[t];Object.keys(SYN).forEach(function(k){var all=[k].concat(SYN[k]);if(all.some(function(a){return a.indexOf(t)===0||t===a;}))out=out.concat(all);});return out;}
    function chips(group,list){var box=root.querySelector('[data-group="'+group+'"]');if(!box)return;list.forEach(function(name){var b=document.createElement('button');b.type='button';b.textContent=name;b.setAttribute('aria-pressed','false');b.onclick=function(){var i=sel[group].indexOf(name);if(i>-1)sel[group].splice(i,1);else sel[group].push(name);b.setAttribute('aria-pressed',String(i===-1));render();};box.appendChild(b);});}
    if(shopMode)chips('cat',CATS.map(function(c){return c[0];}));chips('age',AGES);chips('theme',THEMES);chips('extra',EXTRAS);
    function money(o){if(!o)return null;if(o.priceMoney&&o.priceMoney.value!=null)return Number(o.priceMoney.value);if(typeof o.priceCents==='number')return o.priceCents/100;if(typeof o.price==='number')return o.price/100;return null;}
    function salemoney(o){if(!o||!o.onSale)return null;if(o.salePriceMoney&&o.salePriceMoney.value!=null)return Number(o.salePriceMoney.value);if(typeof o.salePriceCents==='number')return o.salePriceCents/100;if(typeof o.salePrice==='number')return o.salePrice/100;return null;}
    function src(it){var sc=it.structuredContent||{},v=((it.variants&&it.variants.length?it.variants:sc.variants)||[])[0];return v||sc||it;}
    function price(it){var o=src(it),p=money(o);if(p===null)p=money(it.structuredContent)||money(it);return p;}
    function sale(it){var o=src(it),s=salemoney(o);if(s===null)s=salemoney(it.structuredContent);return s;}
    function image(it){var list=(it.items||[]).filter(function(x){return x&&x.assetUrl&&/^image\//.test(x.contentType||'image/');});
      if(list.length)return list[0].assetUrl;if(it.assetUrl&&/^image\//.test(it.contentType||''))return it.assetUrl;return null;}
    function catsOf(it){return (it.categories||[]).concat(catMap[it.id]||[]);}
    function hasAny(tags,want){if(!want.length)return true;var t=tags.map(norm);return want.some(function(w){return t.indexOf(norm(w))>-1;});}
    /* products tagged "All ages" show under every age & grade button */
    function ageOK(tags,want){return !want.length||tags.map(norm).indexOf('all ages')>-1||hasAny(tags,want);}
    function matchText(it,text){if(!text)return true;var hay=norm([it.title,(it.tags||[]).join(' '),catsOf(it).join(' '),it.excerpt||''].join(' ').replace(/<[^>]+>/g,' '));
      return text.split(' ').every(function(word){return expand(word).some(function(w){return hay.indexOf(w)>-1;});})||expand(text).some(function(w){return hay.indexOf(w)>-1;});}
  
    /* Understands ages and grades typed in the search box, e.g. "4yo", "5 year olds", "pre-k", "2nd grade", "middle school" */
    var A0="Infants & toddlers",T3="3s",PK="Pre-K",K="Kindergarten",G12="Grades 1–2",G35="Grades 3–5",G68="Grades 6–8",G912="Grades 9–12",HE="Higher education",ED="Educators";
    var BYAGE={0:[A0],1:[A0],2:[A0],3:[T3],4:[PK],5:[K],6:[K,G12],7:[G12],8:[G12,G35],9:[G35],10:[G35],11:[G35,G68],12:[G68],13:[G68],14:[G912],15:[G912],16:[G912],17:[G912],18:[G912,HE]};
    var BYGRADE={0:[K],1:[G12],2:[G12],3:[G35],4:[G35],5:[G35],6:[G68],7:[G68],8:[G68],9:[G912],10:[G912],11:[G912],12:[G912]};
    var ORD={first:1,second:2,third:3,fourth:4,fifth:5,sixth:6,seventh:7,eighth:8,ninth:9,tenth:10,eleventh:11,twelfth:12};
    var WORDS=[[/\b(infants?|babies|baby|toddlers?|twos)\b/g,[A0]],[/\b(pre-?k|pre k|pk|4-?k|fours|4s)\b/g,[PK]],[/\b(3-?k|threes|3s)\b/g,[T3]],[/\b(preschool(ers?)?|pre-?school|nursery|early childhood)\b/g,[T3,PK]],
      [/\b(kindergarten(ers?)?|kinder|kg)\b/g,[K]],[/\b(elementary|primary)\b/g,[K,G12,G35]],[/\b(middle school(ers?)?|junior high)\b/g,[G68]],
      [/\b(high school(ers?)?|secondary|teens?)\b/g,[G912]],[/\b(college|university|undergrad(uate)?s?|higher ed(ucation)?)\b/g,[HE]],
      [/\b(teachers?|educators?|directors?|staff|leaders?|administrators?|facilitators?|coaches?)\b/g,[ED]]];
    function ageParse(text){var tags=[],t=' '+text+' ',m;
      function add(list){list.forEach(function(x){if(tags.indexOf(x)<0)tags.push(x);});}
      t=t.replace(/\b(\d{1,2})(st|nd|rd|th)?\s*(-|\s)?\s*grade(rs)?\b/g,function(_,n){add(BYGRADE[+n]||[]);return ' ';});
      t=t.replace(/\bgrades?\s*(\d{1,2})(\s*-\s*(\d{1,2}))?\b/g,function(_,a,__,b){for(var i=+a;i<=+(b||a);i++)add(BYGRADE[i]||[]);return ' ';});
      t=t.replace(/\b(first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth)\s*grade(rs)?\b/g,function(_,w){add(BYGRADE[ORD[w]]);return ' ';});
      t=t.replace(/\bages?\s*(\d{1,2})(\s*-\s*(\d{1,2}))?\b/g,function(_,a,__,b){for(var i=+a;i<=+(b||a);i++)add(BYAGE[i]||[]);return ' ';});
      t=t.replace(/\b(\d{1,2})\s*(-|\s)?\s*(yo|y\/o|yrs?|years?)(\s*-?\s*olds?)?\b/g,function(_,n){add(BYAGE[+n]||[]);return ' ';});
      t=t.replace(/\b(\d{1,2})\s*(-|\s)?\s*(\d{1,2})\s*(yo|years?|y\/o)?\b/g,function(_,a,__,b){if(+b>18)return _;for(var i=+a;i<=+b;i++)add(BYAGE[i]||[]);return ' ';});
      t=t.replace(/\b(\d{1,2})s\b/g,function(_,n){add(BYAGE[+n]||[]);return ' ';});
      t=t.replace(/(^|\s)(\d{1,2})(?=\s|$)/g,function(_,sp,n){if(+n>18)return _;add(BYAGE[+n]||[]);return ' ';});
      WORDS.forEach(function(w){t=t.replace(w[0],function(){add(w[1]);return ' ';});});
      return {tags:tags,rest:t.replace(/\s+/g,' ').trim()};}
    var compact=root.getAttribute('data-mode')==='compact';
    function render(){var text=norm(q.value);
      if(compact&&!(text||sel.age.length||sel.theme.length||sel.extra.length)){grid.innerHTML='';clear.hidden=true;count.textContent='Search or choose a filter to narrow things down, or browse everything below.';return;}
      var ap=ageParse(text);
      var res=items.filter(function(it){var tg=it.tags||[];return hasAny(catsOf(it),sel.cat)&&ageOK(tg,sel.age)&&ageOK(tg,ap.tags)&&hasAny(tg,sel.theme)&&sel.extra.every(function(x){return tg.map(norm).indexOf(norm(x))>-1||(norm(x)==='free'&&price(it)===0);})&&matchText(it,ap.rest);});
      var nf=sel.cat.length+sel.age.length+sel.theme.length+sel.extra.length;clear.hidden=!(text||nf);if(tog)tog.textContent=nf?'Filters ('+nf+')':'Filters';
      count.textContent=res.length+(res.length===1?' resource':' resources');
      grid.innerHTML='';
      if(!res.length){grid.innerHTML='<div class="ccf-empty" style="grid-column:1/-1">Nothing matches yet. <a href="/contact">Tell me what you’re looking for</a> and it may become the next resource.</div>';return;}
      res.forEach(function(it){var a=document.createElement('a');a.className='ccf-card';a.href=it.fullUrl;
        var u=image(it),img=u?'<div class="ccf-img"><img loading="lazy" alt="" src="'+u+'?format=500w"></div>':'<div class="ccf-img"></div>';
        var p=price(it),sp=sale(it),pt=p===null?'':(p===0?'Free':'$'+p.toFixed(2));if(sp!==null&&p!==null&&sp<p)pt='$'+sp.toFixed(2)+' <span class="ccf-was">$'+p.toFixed(2)+'</span>';
        a.innerHTML=img+'<h3></h3><div class="ccf-price">'+pt+'</div>';
        a.querySelector('h3').textContent=it.title;var im=a.querySelector('img');if(im)im.alt=it.title;grid.appendChild(a);});}
    q.addEventListener('input',render);
    clear.onclick=function(){q.value='';Object.keys(sel).forEach(function(g){sel[g]=[];});root.querySelectorAll('.ccf-chips button').forEach(function(b){b.setAttribute('aria-pressed','false');});render();};
    /* preselect from the address, e.g. /resources?age=Pre-K&theme=Jewish learning&q=chanukkah */
    var params=new URLSearchParams(location.search);
    ['cat','age','theme','extra'].forEach(function(g){params.getAll(g).forEach(function(v){root.querySelectorAll('[data-group="'+g+'"] button').forEach(function(b){if(norm(b.textContent)===norm(v)){sel[g].push(b.textContent);b.setAttribute('aria-pressed','true');}});});});
    if(params.get('q'))q.value=params.get('q');
    if(shopMode){var pm=location.pathname.replace(/\/$/,'').match(/\/([^\/]+)$/);CATS.forEach(function(c){if(pm&&pm[1]===c[1]&&sel.cat.indexOf(c[0])<0){sel.cat.push(c[0]);root.querySelectorAll('[data-group="cat"] button').forEach(function(b){if(b.textContent===c[0])b.setAttribute('aria-pressed','true');});}});
      if(window.matchMedia('(max-width:900px)').matches)root.querySelectorAll('.ccf-sec').forEach(function(d){d.open=false;});
      hideNative();}
    /* Shop mode: hide Squarespace's own product grid and category buttons so nothing shows twice */
    function hideNative(){document.querySelectorAll('a[href*="/shop/p/"],a[href="'+shop+'"],a[href^="'+shop+'/"],a[href^="'+shop+'?"]').forEach(function(a){
        if(root.contains(a)||a.closest('header,footer,nav'))return;var el=a;
        while(el.parentElement&&el.parentElement!==document.body&&!el.parentElement.contains(root)&&!el.parentElement.matches('main,#sections,article'))el=el.parentElement;
        if(el.contains(root)||el===document.body)return;el.style.display='none';});}
    count.textContent='Loading resources…';
    function load(url,n){return fetch(url+(url.indexOf('?')>-1?'&':'?')+'format=json',{credentials:'same-origin'}).then(function(r){return r.json();}).then(function(d){items=items.concat(d.items||[]);
        if(d.pagination&&d.pagination.nextPage&&d.pagination.nextPageUrl&&n<25)return load(d.pagination.nextPageUrl,n+1);});}
    function loadCat(c){var acc=[];function step(url,n){return fetch(url+(url.indexOf('?')>-1?'&':'?')+'format=json',{credentials:'same-origin'}).then(function(r){return r.json();}).then(function(d){acc=acc.concat(d.items||[]);
        if(d.pagination&&d.pagination.nextPage&&d.pagination.nextPageUrl&&n<25)return step(d.pagination.nextPageUrl,n+1);});}
      return step(shop+'/'+c[1],0).then(function(){acc.forEach(function(it){(catMap[it.id]=catMap[it.id]||[]).push(c[0]);});}).catch(function(){});}
    var base=shopMode?shop:shop;
    load(base,0).then(function(){return shopMode?Promise.all(CATS.map(loadCat)):null;}).then(function(){if(shopMode)hideNative();render();}).catch(function(){count.textContent='';grid.innerHTML='<div class="ccf-empty" style="grid-column:1/-1">The finder couldn’t load right now. <a href="'+shop+'">Browse the full shop</a> instead.</div>';});
  }
  function start(){
    if(!document.getElementById('ccf-css')){var st=document.createElement('style');st.id='ccf-css';st.textContent=CSS;document.head.appendChild(st);}
    document.querySelectorAll('.ccf').forEach(boot);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
