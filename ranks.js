'use strict';
// Learning checklists are NOT promotion determinations. Each item has a source/context label.
window.JUDO_RANKS = (()=>{
 const usjf='https://www.usjf.com/wp-content/uploads/2021/05/Handbook-Final-Revised-Sr.-Jr.-5-1-21.pdf';
 const usja='https://www.usja.net/about/promotion';
 const usa='https://www.usajudo.com/membership/promotions';
 const kodokan='https://kdkjd.org/';
 const common=[
   ['Find a qualified instructor and learn safe dojo etiquette','Learning milestone'],
   ['Demonstrate age appropriate ukemi with instructor supervision','Learning milestone'],
   ['Use Japanese terms for posture, gripping and the three phases of a throw','Learning milestone'],
   ['Demonstrate safe throwing technique and partner control','Learning milestone'],
   ['Learn holds, escapes and safe responses to taps','Learning milestone'],
   ['Discuss promotion criteria with your own dojo or examiner','Local approval required']
 ];
 const shodanUsjf=[
   ['Know and demonstrate the lower rank syllabus with improved proficiency','2021 USJF senior recommendation'],
   ['Demonstrate Yoko otoshi, Ashi guruma, O tsuri goshi and Ko tsuri goshi','2021 USJF senior recommendation'],
   ['Demonstrate Harai tsurikomi ashi, Morote gari, Kuchiki taoshi and Kibisu gaeshi','2021 USJF senior recommendation; some are not legal for shiai'],
   ['Show three opposite side throws','2021 USJF senior recommendation'],
   ['Show three combinations and three counters','2021 USJF senior recommendation'],
   ['Demonstrate additional escapes from osaekomi waza','2021 USJF senior recommendation'],
   ['Demonstrate Tsukkomi jime and Ryote jime plus defenses','2021 USJF senior recommendation'],
   ['Demonstrate increased understanding of kansetsu waza','2021 USJF senior recommendation'],
   ['Complete all five Nage no Kata sets in your assigned role','2021 USJF; competitor uke, noncompetitor tori'],
   ['Confirm time in grade, contest or service record and instructor recommendation','2021 USJF; class and point dependent'],
   ['Confirm membership history and applicable SafeSport, CDC Heads Up and screening','2021 USJF; age and examination route may affect requirements'],
   ['Verify the exact exam checklist with your Yudanshakai','Local approval required; supersedes app checklists']
 ];
 const usjaShodan=[
   ['Complete the exam or evaluation required for 1st Dan','USJA published promotion system'],
   ['Obtain instructor or certified examiner recommendation','USJA published promotion system'],
   ['Check minimum age, time in grade and classes for the specific promotion route','USJA published promotion system'],
   ['Demonstrate nage waza, ne waza, kata and appropriate judo theory for your examination','Learning preparation; confirm exact USJA exam syllabus'],
   ['Check current membership, screening, SafeSport and Heads Up requirements','USJA published promotion system'],
   ['Confirm forms and rank processing requirements with USJA or your examiner','Local approval required']
 ];
 const stages=[
   {value:'Rokkyu',label:'Rokkyu · sixth kyu'},
   {value:'Gokyu',label:'Gokyu · beginning kyu'},
   {value:'Yonkyu',label:'Yonkyu · developing kyu'},
   {value:'Sankyu',label:'Sankyu · third kyu'},
   {value:'Nikyu',label:'Nikyu · second kyu'},
   {value:'Ikkyu',label:'Ikkyu · first kyu'},
   {value:'Shodan',label:'Shodan · first dan'}
 ];
 function stagesFor(org,age){return org==='USJF'&&age==='adult'?stages.filter(x=>x.value!=='Rokkyu'):stages;}
 const guides={
   USJF:{title:'USJF · United States Judo Federation',url:usjf,note:'Adult and junior kyu belt colors are different. USJF publishes recommendations and Yudanshakai control local examinations.'},
   'USA Judo':{title:'USA Judo',url:usa,note:'USA Judo provides rank forms and procedures. Local clubs and examiners determine their applicable technical preparation.'},
   USJA:{title:'USJA · United States Judo Association',url:usja,note:'USJA publishes a promotion system including time in grade and class attendance. Always verify the applicable adult or junior route.'},
   Kodokan:{title:'Kodokan',url:kodokan,note:'Kodokan rank and foreign examination rules are distinct from U.S. national body promotions. Confirm eligibility with Kodokan.'},
   'Other / local dojo':{title:'My dojo or another organization',url:null,note:'Use the learning milestones below and ask your instructor for a local official rank syllabus.'},
   'Not sure':{title:'General Judo learning tracker',url:null,note:'You can study techniques before joining a federation. Rank colors and promotion rules vary.'}
 };
 function items(org,target,age){
   if(age==='junior')return [...common,['Ask your coach for the junior requirements for this grade','Local approval required']];
   if(target==='Shodan'&&org==='USJF')return shodanUsjf;
   if(target==='Shodan'&&org==='USJA')return usjaShodan;
   if(target==='Shodan'&&org==='USA Judo')return [...common,['Review USA Judo Dan procedures and submit the required promotion documents','USA Judo published promotion procedures']];
   if(target==='Shodan'&&org==='Kodokan')return [...common,['Confirm Kodokan examination registration, kata and technical requirements','Kodokan admission and examination rules']];
   return [...common,['Ask your examiner for the precise '+target+' examination list','Local approval required']];
 }
 return {stages,stagesFor,guides,items,common};
})();
