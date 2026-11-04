/* Judo Academy 9 — original schematic movement aids.
   Top-down teaching sketches, not anatomical measurements or mandatory foot positions.
   All sequences assume a cooperative right-sided sleeve/lapel scenario; left mirrors it.
   Use with a qualified instructor. */
'use strict';
window.JUDO_FOOTWORK = (() => {
  const stance = {
    neutral:{L:[111,189,0],R:[171,189,0]},
    'O uchi gari':{L:[108,166,5],R:[151,125,-22]},
    'Ko uchi gari':{L:[108,176,0],R:[152,148,-20]},
    'Tai otoshi':{L:[127,146,85],R:[204,145,76]},
    'Seoi nage':{L:[145,144,165],R:[111,128,170]},
    'Ippon seoi nage':{L:[145,144,165],R:[111,128,170]},
    'Seoi otoshi':{L:[147,145,175],R:[112,130,175]},
    'Uchi mata':{L:[135,143,78],R:[180,113,-35]},
    'O soto gari':{L:[81,143,8],R:[104,107,-8]},
    'Ko soto gari':{L:[94,147,8],R:[112,124,-6]},
    'Harai goshi':{L:[134,148,81],R:[183,116,-25]},
    'Hiza guruma':{L:[167,142,15],R:[122,185,0]},
    'De ashi harai':{L:[150,132,12],R:[111,165,0]},
    'Sasae tsurikomi ashi':{L:[164,130,5],R:[113,169,0]},
    'O goshi':{L:[146,138,170],R:[109,141,170]},
    'Tomoe nage':{L:[117,151,4],R:[155,142,-15]},
  };
  const typeLabel = {'O uchi gari':'Inner reap','Ko uchi gari':'Small inner reap','Tai otoshi':'Turn & body drop','Seoi nage':'Turn & shoulder entry','Uchi mata':'Inner thigh sweep','O soto gari':'Outer reap','Ko soto gari':'Small outer reap','Harai goshi':'Hip sweep'};
  function frame(e,index){
    if(index===0)return stance[e.from]||stance.neutral;
    if(index===1)return {L:[120,168,-20],R:[157,169,-30]};
    return stance[e.to]||stance.neutral;
  }
  function stepTitle(e,index){return index===0?'FIRST ATTACK':index===1?'RECOVER / REDIRECT':'SECOND ATTACK'}
  function svgFoot(x,y,a,label,active,side){return `<g transform="translate(${x} ${y}) rotate(${a})"><ellipse cx="0" cy="0" rx="12.5" ry="24" fill="${active?'#2d7cbe':side==='uke'?'#d9dfe5':'#b4e7d8'}" stroke="${active?'#175b94':side==='uke'?'#8797a8':'#37997b'}" stroke-width="2"/><ellipse cx="0" cy="-14" rx="7" ry="4" fill="${active?'#f5fbff':'#788899'}" opacity=".85"/><text x="0" y="6" fill="${active?'white':'#263d53'}" text-anchor="middle" font-family="-apple-system,Arial,sans-serif" font-size="13" font-weight="800">${label}</text></g>`}
  function draw(e,index,hand='right'){
    const toRight=hand!=='left',mirror=(x)=>toRight?x:280-x;
    const flipSide=x=>toRight?x:(x==='L'?'R':'L');
    const a=frame(e,index),p=index?frame(e,index-1):null;
    const coords=key=>[mirror(a[key][0]),a[key][1],toRight?a[key][2]:-a[key][2]];
    const inactiveKey=index===0?'L':index===1?'R':({ 'Tai otoshi':'L','Seoi nage':'L','Uchi mata':'L','Harai goshi':'L','O soto gari':'L','Ko soto gari':'L','O uchi gari':'L','Ko uchi gari':'L'}[e.to]||'L');
    const activeKey=inactiveKey==='L'?'R':'L';
    const old=index===0?null:p;
    function path(key){if(!old)return '';const [ox,oy]=[mirror(old[key][0]),old[key][1]], [nx,ny]=coords(key);const d=Math.hypot(nx-ox,ny-oy);if(d<6)return '';return `<path d="M${ox},${oy} Q${(ox+nx)/2+3},${(oy+ny)/2-18} ${nx},${ny}" stroke="${key==='R'?'#2d7cbe':'#42a98c'}" stroke-dasharray="5 5" stroke-width="3" fill="none" marker-end="url(#step-arrow)" opacity=".9"/>`;}
    const [lx,ly,la]=coords('L'),[rx,ry,ra]=coords('R');
    return `<div class="v9-footwork" role="img" aria-label="Schematic ${hand}-stance foot positions for ${e.from} to ${e.to}, stage ${index+1}. Uke feet at top, tori below. The blue foot is the active right-side attacking foot in right stance, not a scale drawing.">
      <div class="v9-footwork-head"><strong>Foot placement · ${index+1} / 3</strong><span>${stepTitle(e,index)}</span></div>
      <svg viewBox="0 0 280 238" class="v9-feet-svg" aria-hidden="true">
        <defs><marker id="step-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" fill="#2d7cbe"/></marker></defs>
        <rect width="280" height="238" rx="15" fill="var(--soft)"/>
        <text x="140" y="18" font-size="10" text-anchor="middle" fill="var(--muted)" font-weight="700">UKE · FACING YOU</text>
        ${svgFoot(mirror(102),73,toRight?180:180,flipSide('R'),false,'uke')}${svgFoot(mirror(178),73,180,flipSide('L'),false,'uke')}
        <path d="M140 105 V130" stroke="var(--muted)" stroke-dasharray="3 4" opacity=".35"/>
        ${path('L')}${path('R')}
        ${svgFoot(lx,ly,la,flipSide('L'),['Hiza guruma','De ashi harai','Sasae tsurikomi ashi'].includes(index===0?e.from:e.to),'tori')}${svgFoot(rx,ry,ra,flipSide('R'),!['Hiza guruma','De ashi harai','Sasae tsurikomi ashi'].includes(index===0?e.from:e.to),'tori')}
        <text x="140" y="227" font-size="10" text-anchor="middle" fill="var(--muted)" font-weight="700">TORI · TOP VIEW</text>
      </svg>
      <div class="v9-foot-legend"><span><i class="v9-key blue"></i> Primary action</span><span><i class="v9-key mint"></i> Base / pivot</span><span><i class="v9-key grey"></i> Uke</span></div>
      <p class="v9-figure-note">Illustrative movement map. The written cues and your coach determine the exact placement, distance and angle.</p>
    </div>`;
  }
  return {draw,has:e=>!!(stance[e.from]&&stance[e.to]),count:Object.keys(stance).length};
})();
