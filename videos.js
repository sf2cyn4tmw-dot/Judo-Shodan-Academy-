'use strict';
// Curated individual KODOKAN x IJF Academy demonstration videos (100 Techniques series).
// Source: Kodokan official YouTube channel, cross-referenced against the indexed video list
// https://www.reddit.com/r/judo/comments/ofeodr/100_judo_techniques_from_kodokan_20202021/
window.JUDO_VIDEOS = (() => {
  const pairs = `
Ashi garami|BWWb0GoAtZw
Ude hishigi sankaku gatame|WefAmW4azhk
Ude hishigi te gatame|6DnvhY0tQVM
Ude hishigi ashi gatame|ClY7g_pX-4s
Ude hishigi hara gatame|ZzEycg8R_9M
Ude hishigi waki gatame|8F5p1zuJRG0
Ude hishigi hiza gatame|H2HtAJdiJcE
Ude hishigi ude gatame|SBf0aTma1VI
Ude hishigi juji gatame|OWgSOlCuMXw
Ude garami|AIlTvZb4RlE
Do jime|D_0fFcoIbvY
Sankaku jime|lq1CUBRAm7s
Tsukkomi jime|dKKpnD3eLcY
Sode guruma jime|E3nvQzClcAU
Ryote jime|-RHC4V7TQiY
Katate jime|cHeIs-fSqwE
Kataha jime|yaTGgRjnwB8
Okuri eri jime|EiqyoVcIAi8
Hadaka jime|9f0n8jez7iA
Kata juji jime|3VZVUAmiMD8
Gyaku juji jime|t3tQriIPdlI
Nami juji jime|k2cHry9HByQ
Ura gatame|eeAHZB0v3XY
Uki gatame|e_lAjik1SUM
Tate shiho gatame|55-rFmBx53g
Yoko shiho gatame|TT7XJVSEQxA
Kuzure kami shiho gatame|YUrogQWdwiY
Kami shiho gatame|HFuMjOv0WN8
Kata gatame|zQR3IOXxO_Q
Ushiro kesa gatame|SBapox2M2dE
Kuzure kesa gatame|Q2fb9jaoUFQ
Kesa gatame|NDaQuJOFBYk
Kawazu gake|w6G57bWACi0
Kani basami|OR-HGHnarYc
Ko uchi makikomi|_1eygIXLD_w
Harai makikomi|VBaHzKaCXss
Uchi mata makikomi|jZXENTLpJCI
O soto makikomi|DGDv2oMwmas
Daki wakare|Hr0cOMGBDYo
Yoko gake|tP1Sj1uDfSo
Yoko guruma|MehP6I5cY2c
Yoko wakare|bp1tscHlePI
Uki waza|weVOpJ63gII
Uchi makikomi|5BowcjduxVc
Soto makikomi|bWG9O1BVKtQ
Hane makikomi|6CRBGLGz9j8
Tani otoshi|3b9Me3Fohpk
Yoko otoshi|MnNG67pF_a0
Ura nage|Fgi9b8DJ5sQ
Tawara gaeshi|TmTWgrmViZc
Hikikomi gaeshi|92zUYWBp5N8
Sumi gaeshi|5VhduA5xkbA
Tomoe nage|880WbHvHv6A
Uchi mata gaeshi|Sy6sLWxkWYw
Harai goshi gaeshi|4U3It-7PPsc
Hane goshi gaeshi|9bZAZSBtnGs
O uchi gaeshi|dCyZTXyjIXE
O soto gaeshi|8ZjM3X_EANo
Tsubame gaeshi|GwweWqqFB5g
O soto otoshi|2DsVvDw7b8g
O soto guruma|92KbCm6pQeI
O guruma|SnZciTAY9vc
Harai tsurikomi ashi|gGPXvWL8VbE
Ashi guruma|ROeayhvom9U
Ko soto gake|8b6kY4s4zH4
Uchi mata|iUpSu5J-bgw
Okuri ashi harai|nw1ZdRjrdRI
Ko uchi gari|3Jb3tZvr9Ng
Ko soto gari|jeQ541ScLB4
O uchi gari|0itJFhV9pDQ
O soto gari|c-A_nP7mKAc
Sasae tsurikomi ashi|699i--pvYmE
Hiza guruma|JPJx9-oAVns
De ashi harai|4BUUvqxi_Kk
Ushiro goshi|ORIYstuxYT8
Utsuri goshi|4pQd_bEnlf0
Tsuri goshi|51Htlp7xEvE
Harai goshi|qTo8HlAAkOo
Sode tsurikomi goshi|QsmAxpmYLOI
Tsurikomi goshi|McfzA0yRVt4
Koshi guruma|SU7Id6uVJ44
O goshi|yhu1mfy2vJ4
Uki goshi|bPKwtB4lyOQ
Ko uchi gaeshi|_MWAdYi_LC4
Uchi mata sukashi|V-RS3uhtVWM
Kibisu gaeshi|tJylJYfBliA
Kuchiki taoshi|ZNL47q1aJNY
Morote gari|BHLQS4K85bs
Obi tori gaeshi|bpc82SrunUU
Yama arashi|MGlyKmSuzdc
Sumi otoshi|lLU9wv52ni0
Uki otoshi|6H5tmncOY4Q
Obi otoshi|ff8U2TVZIYI
Sukui nage|vU6aJ2kFxoI
Kata guruma|cnHRhSy8yi4
Tai otoshi|4x6S3Q-Ktv8
Seoi otoshi|vu1TMVNnq34
Ippon seoi nage|FQnOlCxo4oI
Seoi nage|zIq0xI0ogxk
Hane goshi|M9_7De6A1kk
`.trim().split('\n').map(line => line.split('|'));
  const normalize = s=>String(s).toLowerCase().replace(/[-\s]+/g,' ').replace(/[^a-z ]/g,'').trim().replace(/^kata ha /,'kataha ');
  const byName=Object.fromEntries(pairs.map(([name,id])=>[normalize(name),`https://www.youtube.com/watch?v=${id}`]));
  // Extras remain searchable if they do not have a canonical single technique in the series.
  const find=name=>byName[normalize(name)]||null;
  const extras = [
    {title:'Kodokan: Kesa gatame escape',url:'https://www.youtube.com/watch?v=5_TS0YHdxcQ',topic:'Pins & escapes'},
    {title:'Kodokan: Kesa gatame',url:find('Kesa gatame'),topic:'Pins & escapes'},
    {title:'Kodokan: O soto gari variations',url:'https://www.youtube.com/watch?v=g3xPwcNEt5A',topic:'Similar techniques'},
    {title:'Kodokan: Sasae vs Harai tsurikomi ashi',url:'https://www.youtube.com/watch?v=zcJg_7cLHSI',topic:'Similar techniques'},
    {title:'Kodokan: Tai otoshi',url:find('Tai otoshi'),topic:'Fundamental throws'},
    {title:'Kodokan: Seoi nage',url:find('Seoi nage'),topic:'Fundamental throws'},
    {title:'Kodokan: Uchi mata',url:find('Uchi mata'),topic:'Fundamental throws'},
    {title:'Kodokan: O uchi gari',url:find('O uchi gari'),topic:'Fundamental throws'}
  ];
  return {find,byName,pairs,extras,channel:'https://www.youtube.com/channel/UCtF6tu7GuZYkZzht5MIv8UQ'};
})();
