// Run: node tests/check.mjs  (requires only Node.js)
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const ctx={window:{}}; vm.createContext(ctx);
for(const filename of ['data.js','curriculum.js','videos.js','ranks.js','speech.js','coaching.js','rank-path.js','flows.js','entry-guides.js'])vm.runInContext(fs.readFileSync(new URL('../'+filename,import.meta.url),'utf8'),ctx);
const F=ctx.window.JUDO_FLOWS; const EG=ctx.window.JUDO_ENTRIES;
assert.ok(EG.count>=18, `Expected at least 18 detailed entry guides; got ${EG.count}`);
for(const [id,g] of Object.entries(EG.guides)){assert.ok(F.edges.some(e=>e.id===id),`Guide has no matching connection: ${id}`);assert.equal(g.steps.length,3);assert.equal(g.path.length,3);for(const st of g.steps)for(const k of ["hands","feet","timing"])assert.ok(st[k]?.length>=25,`${id}: missing ${k}`);assert.ok(g.setup&&g.mistake,`${id}: missing setup or pitfall`);}
const D=ctx.window.JUDO_DATA,C=ctx.window.JUDO_COURSE,V=ctx.window.JUDO_VIDEOS,R=ctx.window.JUDO_RANKS,T=ctx.window.JUDO_SPEECH,G=ctx.window.JUDO_COACH,X=null;
assert.ok(F.edges.length>=30, 'At least 30 authored judo connections');
assert.equal(new Set(F.edges.map(e=>e.id)).size,F.edges.length);
for(const edge of F.edges){
  assert.ok(D.techniques.find(t=>t.name===edge.from),`Bad source technique in ${edge.id}`);
  assert.ok(D.techniques.find(t=>t.name===edge.to),`Bad target technique in ${edge.id}`);
  assert.ok(['Combination','Counter','Ground transition'].includes(edge.kind),`Bad kind ${edge.id}`);
  for(const field of ['reaction','hands','feet','finish','drill'])assert.ok(edge[field]?.length>25,`Missing detail ${field} in ${edge.id}`);
  if(edge.source)assert.ok(F.sources[edge.source],`Missing source ${edge.source} in ${edge.id}`);
}
assert.ok(F.edges.some(x=>x.from==='Tai otoshi'&&x.to==='O uchi gari'));
assert.ok(F.edges.some(x=>x.from==='O soto gari'&&x.to==='Harai goshi'));
assert.ok(F.edges.some(x=>x.from==='O uchi gari'&&x.to==='Tai otoshi'));
assert.ok(F.edges.some(x=>x.kind==='Ground transition'));
assert.ok(F.edges.some(x=>x.kind==='Counter'));
assert.equal(D.groups.length,5);
assert.equal(D.groups.flat().length,40);
assert.equal(D.techniques.filter(t=>t.official).length,100);
assert.equal(D.techniques.filter(t=>t.official&&t.section==='Nage waza').length,68);
assert.equal(D.techniques.filter(t=>t.official&&t.section==='Katame waza').length,32);
assert.equal(new Set(D.techniques.map(t=>t.id)).size,D.techniques.length);
assert.equal(new Set(C.lessons.map(l=>l.id)).size,C.lessons.length);
for(const route of C.routes)assert.equal(route.lessonIds.filter(id=>!C.lessonById[id]).length,0);
for(const l of C.lessons.filter(l=>!l.oldNumber)){assert.ok(l.explain.length>=2);assert.ok(l.practice.length>=1)}
assert.ok(D.vocabulary.length>=70);
assert.equal(V.pairs.length,100);
for(const item of D.techniques.filter(t=>t.official))assert.ok(V.find(item.name),`Missing video for ${item.name}`);
assert.equal(G.quizBank.length,D.vocabulary.length+200);
assert.ok(Object.keys(G.guides).length>=25);
for(const guide of Object.values(G.guides)){assert.ok(guide.idea&&guide.errors.length>=3&&guide.drill)}
assert.equal(G.workouts.length,0);
for(const q of G.quizBank){assert.equal(q.options.length,4);assert.ok(q.options.includes(q.answer));assert.equal(new Set(q.options).size,4)}
assert.ok(R.items('USJF','Shodan','adult').length>=10);
assert.ok(R.items('USJA','Shodan','adult').length>=5);
assert.equal(T.kana('Tai otoshi'),'たい おとし');
for(const path of ['index.html','apple.css','style.css','app.js','data.js','curriculum.js','ranks.js','videos.js','speech.js','coaching.js','rank-path.js','flows.js','entry-guides.js','sw.js','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png'])assert.ok(fs.existsSync(new URL('../'+path,import.meta.url)),`Missing static asset: ${path}`);
assert.equal(ctx.window.JUDO_PATH.previous('Ikkyu'),'Nikyu');
assert.equal(ctx.window.JUDO_PATH.next('White belt','USJF'),'Gokyu');
assert.ok(ctx.window.JUDO_PATH.items('USJF','Shodan','adult').length>=10);
console.log(`PASS: ${C.lessons.length} lessons, ${D.techniques.length} techniques, ${V.pairs.length} Kodokan videos, ${D.vocabulary.length} vocabulary cards, ${C.routes.length} pathways, 277 additional recall questions, guided lessons, coaching notes, focused rank and flow study + 18 advanced entry guides + speech tests`);
