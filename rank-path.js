'use strict';
// Non-Shodan study topics are suggested learning milestones, not federation requirements.
// Verified organization-specific recommendations are delegated to the original rank library.
window.JUDO_PATH = (()=>{
const ladder=['White belt','Rokkyu','Gokyu','Yonkyu','Sankyu','Nikyu','Ikkyu','Shodan','Nidan'];
const aliases={'Yellow belt':'Gokyu','Orange belt':'Yonkyu','Green belt':'Sankyu','Blue belt':'Nikyu','Brown belt':'Ikkyu','Nidan+':'Nidan'};
const named={'White belt':'White belt','Rokkyu':'Rokkyu · 6th kyu','Gokyu':'Gokyu · 5th kyu','Yonkyu':'Yonkyu · 4th kyu','Sankyu':'Sankyu · 3rd kyu','Nikyu':'Nikyu · 2nd kyu','Ikkyu':'Ikkyu · 1st kyu','Shodan':'Shodan · 1st dan','Nidan':'Nidan · 2nd dan'};
const overview={
'White belt':[
'Dojo etiquette, hygiene and safe partner communication',
'Understand tori and uke, bowing and the commands hajime and matte',
'Learn supervised backward, side and forward ukemi',
'Understand stance, movement, and the purpose of safe breakfalls'
],
'Rokkyu':[
'Practice backward and side ukemi with a qualified coach',
'Explain and recognize kuzushi, tsukuri and kake',
'Recognize fundamental grips and movement patterns',
'Begin basic standing and pinning techniques with safe control',
'Know tori, uke, rei, matte, hajime and osaekomi'
],
'Gokyu':[
'Review ukemi and a basic grip-and-movement sequence',
'Identify first-stage ashi and koshi waza',
'Study O goshi, O soto gari, O uchi gari and De ashi harai',
'Practice Kesa gatame, positional safety and one escape',
'Recognize basic judo Japanese commands and technique names'
],
'Yonkyu':[
'Demonstrate progressive Gokyo fundamentals with supervised partner control',
'Learn Seoi nage, Ko uchi gari, Ko soto gari and Hiza guruma',
'Practice movement-based entries with correct grips and footwork',
'Add pinning variations and escapes from common holds',
'Explain shiai, randori, osaekomi, ippon and waza ari'
],
'Sankyu':[
'Extend throwing knowledge through more te, koshi and ashi waza',
'Practice Tai otoshi, Harai goshi, Uchi mata and Okuri ashi harai',
'Improve hold transitions, escapes and safe ground control',
'Begin developing combination attacks under instructor supervision',
'Understand common referee terms and current competition restrictions'
],
'Nikyu':[
'Review earlier throwing groups with improved timing and balance breaking',
'Practice varied attacks from movement and both sides when appropriate',
'Demonstrate basic combinations, counters and follow-up transitions',
'Review safe application and recognition of allowed shime and kansetsu waza',
'Strengthen ne waza escapes and movement-based randori skills',
'Explain common technique names and Judo theory'
],
'Ikkyu':[
'Revisit your full lower-grade syllabus, not only your favorite throws',
'Show controlled, reliable nage waza from multiple classifications',
'Prepare combinations, counters and opposite-side techniques',
'Review pins, escapes, strangulations, joint locks and defenses with a coach',
'Begin or refine Nage no Kata as required by your examiner',
'Confirm rank eligibility, competition or service points and paperwork'
],
'Shodan':[
'Review the complete lower-rank syllabus with improved proficiency',
'Demonstrate competent throws, controls, escapes, combinations and counters',
'Prepare assigned kata with appropriate formal etiquette',
'Explain essential Kodokan theory, history, safety and terminology',
'Confirm the official promotion process with your rank authority'
],
'Nidan':[
'Extend depth and teaching ability beyond Shodan material',
'Demonstrate technical adaptation, combination and counter understanding',
'Prepare required kata and promotion documentation with your examiner',
'Confirm eligibility and current Nidan assessment requirements'
]};
const canonical=rank=>aliases[rank]||rank;
const previous=(rank,org)=>{let i=ladder.indexOf(canonical(rank));if(org==='USJF'&&canonical(rank)==='Gokyu')return 'White belt';return i>0?ladder[i-1]:null};
const next=(rank,org)=>{let i=ladder.indexOf(canonical(rank));if(org==='USJF'&&canonical(rank)==='White belt')return 'Gokyu';return i>=0&&i<ladder.length-1?ladder[i+1]:null};
const validTarget=(current,target)=>ladder.indexOf(canonical(target))>ladder.indexOf(canonical(current));
const defaults=(current,org)=>next(current,org)||'Nidan';
const options=(selected,org,age='adult')=>ladder.filter(v=>org!=='USJF'||age==='junior'||v!=='Rokkyu').map(v=>({value:v,label:named[v]||(v||'')}));
function items(org,rank,age){
 const isShodan=rank==='Shodan';
 if(isShodan&&org==='USJF'&&age==='adult')return window.JUDO_RANKS.items('USJF','Shodan','adult');
 if(isShodan&&org==='USJA'&&age==='adult')return window.JUDO_RANKS.items('USJA','Shodan','adult');
 const notes=(overview[rank]||overview.Ikkyu).map(t=>[t,'Suggested study milestone, not an official grading requirement']);
 notes.push(['Confirm the exact '+rank+' syllabus with your dojo or examiner','Your local promotion authority makes the final decision']);
 return notes;
}
return {ladder,named,canonical,previous,next,validTarget,defaults,options,items,overview};
})();
