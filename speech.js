'use strict';
// Web Speech uses the user's installed iOS/system Japanese voice. Audio files are not bundled.
window.JUDO_SPEECH=(()=>{
  const overrides={
   'o':'おお','shiho':'しほう','judo':'じゅうどう','judoka':'じゅうどうか','judogi':'じゅうどうぎ','dojo':'どうじょう','sensei':'せんせい',
   'rei':'れい','hajime':'はじめ','matte':'まって','uke':'うけ','tori':'とり','kata':'かた',
   'kuzushi':'くずし','tsukuri':'つくり','kake':'かけ','ukemi':'うけみ','randori':'らんどり','shiai':'しあい',
   'kodokan':'こうどうかん','jigoro kano':'かのう じごろう','seiryoku zenyo':'せいりょく ぜんよう','jita kyoei':'じた きょうえい',
   'ippon':'いっぽん','happo no kuzushi':'はっぽうのくずし','shizentai':'しぜんたい','jigotai':'じごたい',
   'shime':'しめ','shiho':'しほう','kyu':'きゅう','dan':'だん','waza ari':'わざあり',
   'shido':'しどう','toketa':'とけた','sore made':'それまで','sonomama':'そのまま','hansoku make':'はんそくまけ'
  };
  const syllables={kya:'きゃ',kyu:'きゅ',kyo:'きょ',sha:'しゃ',shu:'しゅ',sho:'しょ',cha:'ちゃ',chu:'ちゅ',cho:'ちょ',nya:'にゃ',nyu:'にゅ',nyo:'にょ',hya:'ひゃ',hyu:'ひゅ',hyo:'ひょ',mya:'みゃ',myu:'みゅ',myo:'みょ',rya:'りゃ',ryu:'りゅ',ryo:'りょ',gya:'ぎゃ',gyu:'ぎゅ',gyo:'ぎょ',ja:'じゃ',ju:'じゅ',jo:'じょ',shi:'し',chi:'ち',tsu:'つ',fu:'ふ',ji:'じ',a:'あ',i:'い',u:'う',e:'え',o:'お',ka:'か',ki:'き',ku:'く',ke:'け',ko:'こ',sa:'さ',su:'す',se:'せ',so:'そ',ta:'た',te:'て',to:'と',na:'な',ni:'に',nu:'ぬ',ne:'ね',no:'の',ha:'は',hi:'ひ',he:'へ',ho:'ほ',ma:'ま',mi:'み',mu:'む',me:'め',mo:'も',ya:'や',yu:'ゆ',yo:'よ',ra:'ら',ri:'り',ru:'る',re:'れ',ro:'ろ',wa:'わ',wo:'を',ga:'が',gi:'ぎ',gu:'ぐ',ge:'げ',go:'ご',za:'ざ',zu:'ず',ze:'ぜ',zo:'ぞ',da:'だ',de:'で',do:'ど',ba:'ば',bi:'び',bu:'ぶ',be:'べ',bo:'ぼ',pa:'ぱ',pi:'ぴ',pu:'ぷ',pe:'ぺ',po:'ぽ',n:'ん',ti:'てぃ'};
  function kana(term){
    const source=String(term).trim().toLowerCase().replace(/\//g,' ').replace(/[-–]/g,' ');
    return source.split(/\s+/).map(word=>{
      if(overrides[word])return overrides[word];
      let out='';let w=word.replace(/[^a-z]/g,'');
      for(let i=0;i<w.length;){
       if(i+1<w.length&&w[i]===w[i+1]&&/[bcdfghjklmpqrstvwxyz]/.test(w[i])&&w[i]!=='n'){out+='っ';i++;continue}
       if(w[i]==='n'&&i+1<w.length&&w[i+1]!=='y'&&!/[aeiou]/.test(w[i+1])){out+='ん';i++;continue}
       let found=false;
       for(let l=3;l>=1;l--){const seg=w.slice(i,i+l);if(syllables[seg]){out+=syllables[seg];i+=l;found=true;break}}
       if(!found){out+=w[i];i++}
      }return out;
    }).join(' ');
  }
  function speak(term,slow=false){
    if(!('speechSynthesis' in window))return {ok:false,message:'Speech playback is not supported in this browser.'};
    try{
      window.speechSynthesis.cancel();
      const utter=new SpeechSynthesisUtterance(kana(term));
      utter.lang='ja-JP';utter.rate=slow?.72:.88;utter.pitch=1;
      const voices=window.speechSynthesis.getVoices();
      const voice=voices.find(v=>v.lang?.toLowerCase()==='ja-jp')||voices.find(v=>v.lang?.startsWith('ja'));
      if(voice)utter.voice=voice;
      window.speechSynthesis.speak(utter);
      return {ok:true,hasJapaneseVoice:!!voice};
    }catch(e){return {ok:false,message:'Unable to play speech on this device.'}}
  }
  return {kana,speak};
})();
