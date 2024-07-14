const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `randomplants`,
  aliases: [
    `randomplantdeck`,
    `ramdomizedplantdeck`,
    `plantdeckrandom`,
    `randomp`,
    `randp`,
  ],
  category: `Miscellaneous`,
  run: async (client, message, args) => {
    let [result] = await db.query(`select * from bcdecks bc
inner join ccdecks cc
on (bc.deckinfo = cc.deckinfo)
inner join ctdecks ct 
on (bc.deckinfo = ct.deckinfo)
inner join czdecks cz 
on (bc.deckinfo = cz.deckinfo)
inner join gkdecks gk 
on (bc.deckinfo = gk.deckinfo)
inner join gsdecks gs 
on (bc.deckinfo = gs.deckinfo)
inner join ncdecks nc 
on (bc.deckinfo = nc.deckinfo)
inner join rodecks ro 
on (bc.deckinfo = ro.deckinfo)
inner join spdecks sp 
on (bc.deckinfo = sp.deckinfo)
inner join wkdecks wk 
on (bc.deckinfo = wk.deckinfo)
where bc.deckinfo = 'image link:'`);
    const deck = [
      //Plants

      //BC Tbot DB
      `${result[0].anti}`,
      `${result[0].shamcontrol}`,
      //BC WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1061692820521504798/midrangepile.jpg?width=454&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061692821901422712/aplha.jpg?width=530&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061692853501304912/starchlordburst.jpg?width=551&height=588",
      "https://media.discordapp.net/attachments/1152624944262414436/1262047829208076500/starfruitshell.jpg?ex=66952d22&is=6693dba2&hm=e8a2fcb459d6b2267f8a99a919763ca758a27b2e6c537c263c172eb842dddf8d&=&format=webp&width=559&height=614",
      //CT TBOT DB
      `${result[0].anti}`,
      `${result[0].countertron}`,
      `${result[0].cycletron}`,
      `${result[0].elusives}`,
      `${result[0].going3nuts}`,
      `${result[0].joaburst}`,
      `${result[0].startron}`,
      //CT WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1061784807799009340/amphitron.jpg?width=508&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784808126160906/Anti_graves.jpg?width=575&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784808704979015/antigravesantitricks.jpg?width=594&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784810030374992/freezetron.jpg?width=565&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784810344951818/hazelnuts.jpg?width=587&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784811003453490/3counter.jpg",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784811229954079/3goburst.jpg?width=503&height=624",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784844377542667/mop.jpg?width=524&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784844855689236/bouncingbeans.jpg?width=617&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784911633186846/tempoct.jpg?width=512&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784911914213376/trisluive.jpg?width=561&height=625",
      //CC TBOT DB
      `${result[0].bempo}`,
      `${result[0].combased}`,
      `${result[0].comboss}`,
      `${result[0].gatlingtempo}`,
      `${result[0].plantmop}`,
      `${result[0].yrm}`,
      //CC WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1061770084235882608/bottedbowerhouse.png",
      "https://media.discordapp.net/attachments/1152624944262414436/1262050905134469180/leafyaggro.jpg?ex=66952fff&is=6693de7f&hm=e3b76038069bf51dc94c550308ba9507adb4bc0d6227d20a1be02c22a8a8a70b&=&format=webp&width=527&height=614",
      "https://media.discordapp.net/attachments/1152624944262414436/1262051673736740945/luckymoss.jpg?ex=669530b6&is=6693df36&hm=a47fd0a60637b80d374cb5c85788e48afb7812e0a9ba2aae22c9023c5ddff091&=&format=webp&width=553&height=614",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770084932145192/cosmicopea.jpg?width=538&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770085221543968/cptquickonions.jpg?width=534&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770085494177792/dinocopy.jpg?width=509&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770086505009172/berryloop.jpg?width=537&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770086769242182/betterthancomboss.jpg?width=556&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770124916424765/conseed.jpg?width=533&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770125210046474/mossotk.jpg?width=541&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770125574934578/otkpuff.jpg?width=549&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770125826588743/otkseed.jpg?width=570&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770150656884816/podfighterswarm.jpg?width=577&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770150933712926/predictable.jpg?width=522&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770151223103608/scuffedcomboss.jpg?width=481&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770151504134145/weirdflexbutotk.jpg?width=543&height=588",
      "https://media.discordapp.net/attachments/1152624944262414436/1262051895942451290/kaleaggro.jpg?ex=669530eb&is=6693df6b&hm=7bd05bb834436606723442c6e55db326ceb9f3aabdf5fb3ef7296b21f5ea2bfa&=&format=webp&width=585&height=614",
      "https://media.discordapp.net/attachments/1152624944262414436/1262051895942451290/kaleaggro.jpg?ex=669530eb&is=6693df6b&hm=7bd05bb834436606723442c6e55db326ceb9f3aabdf5fb3ef7296b21f5ea2bfa&=&format=webp&width=585&height=614",
      //CZ TBOT DB
      //Aggro Ramp Pea
      `${result[0].aggroramppeas}`,
      //Aggro CZ
      `${result[0].aggrozilla}`,
      //AmongUsZilla
      `${result[0].amonguszilla}`,
      //ApOTK
      `${result[0].apotk}`,
      //HMZ
      `${result[0].healmidzilla}`,
      //HRR
      `${result[0].hrr}`,
      //MidRed
      `${result[0].midred}`,
      //RingZilla
      `${result[0].ringzilla}`,
      //Stallzilla
      `${result[0].stallzilla}`,
      //Mopribus
      `${result[0].mopribus}`,
      //CZ WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1061696586482196620/ramppeas.jpg?width=535&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061696587165859961/CZ_healaggro.jpg?width=514&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061696588017303672/healzilla.jpg?width=578&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061696588323495977/midzilla.jpeg?width=631&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061696589099442236/Ramp_rings.jpg?width=548&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061696628613992458/ramptotrash.jpg?width=460&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061696629180215329/magotk.png?width=621&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061696630027456633/rampredrings.jpg?width=526&height=588",
      "https://media.discordapp.net/attachments/1152624944262414436/1262052738947219538/midpresso.jpg?ex=669531b4&is=6693e034&hm=03d6d8d980a874af69d403bf62f4a93c54dd9117a09215e3adacd0756d58a20c&=&format=webp&width=639&height=614",
      "https://media.discordapp.net/attachments/1152624944262414436/1262053105470803968/flowerheal.jpg?ex=6695320c&is=6693e08c&hm=6d5f288681820ceeb02dc709b7bd1fa4b99c4d700179d9cca3de7c268b35ae15&=&format=webp&width=535&height=614",
      "https://media.discordapp.net/attachments/1152624944262414436/1262053342050390116/ramprings.jpg?ex=66953244&is=6693e0c4&hm=e652b56622b977f327e736de7abe5fba48508b3623a95bff062b0a6a32bf1b09&=&format=webp&width=627&height=614",
      "https://media.discordapp.net/attachments/1152624944262414436/1262053642454827118/ramspresso.webp?ex=6695328c&is=6693e10c&hm=17902ccc3150b9d3d2d7c39e89ea4d98206da609a9bf1cc663deb2dc0176d46d&=&format=webp",
      //GK TBOT DB
      `${result[0].it3}`,
      `${result[0].pea3}`,
      `${result[0].baggro}`,
      `${result[0].ccpaggro}`,
      `${result[0].coffeerings}`,
      `${result[0].devinknuckles}`,
      `${result[0].healthyknuckles}`,
      `${result[0].knucklesmop}`,
      `${result[0].r3d}`,
      `${result[0].savagecucumber}`,
      `${result[0].savagetempo}`,
      `${result[0].sweetvm}`,
      `${result[0].tryknuckles}`,
      `${result[0].zoolander}`,
      //GK WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1061674110339534858/bannaconjure.jpg?width=548&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061674110628925521/bottedknuckles.png",
      "https://media.discordapp.net/attachments/1044626284346605588/1061674111581048862/cofferingsanti.png?width=634&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061674111887216760/Conjure_Burst.jpg?width=548&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061674112176635954/conjurelategame.jpg?width=523&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061674112403132537/conjurepackage.jpg?width=552&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061674112717688952/Control.jpg?width=531&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061674113632063568/aggrotempo.jpg?width=544&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061674145777201162/depresso.jpg?width=549&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061674193692922016/tempopot.jpg?width=626&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061674194854760608/woodenburst.jpg?width=589&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061674195085430894/knuckles_sprout.jpg?width=550&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061674195349680258/laddergk.jpg?width=466&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061674241013063700/starchwreck.jpg?width=549&height=588",
      //GS TBOT DB
      `${result[0].wr100}`,
      `${result[0].abeans}`,
      `${result[0].bbeans}`,
      `${result[0].jbeans}`,
      `${result[0].midshadow}`,
      `${result[0].millie}`,
      `${result[0].mindblower}`,
      `${result[0].peatempo}`,
      `${result[0].savagemayflower}`,
      `${result[0].sovietonion}`,
      `${result[0].yuletide}`,
      //GS WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1061639582816424038/IMG_0547.png?width=530&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061652668952629288/aggrow.jpg?width=514&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061652669254598757/beanshadow.jpg?width=474&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061652669590163526/beanshadow2.jpg?width=518&height=587",
      "https://media.discordapp.net/attachments/1044626284346605588/1061652669900521532/conjuremoss.jpg?width=546&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061652670303178803/floureeze.jpg?width=549&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061652670651322419/freezeonions.jpg?width=548&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061652671309828227/Abeans.jpg?width=526&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061652671586631730/aggro_gs.jpg?width=546&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061654626513997834/latepodfather.jpg?width=502&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061654626761457665/peapatrolfry.jpg?width=511&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061654627046653953/redshadow.jpg?width=537&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061654627306721341/ringss.png?width=624&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061654627671621673/allbeans.jpg?width=554&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061654627940040736/bannabirb.jpg?width=559&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061654628200108062/beansh.jpg?width=548&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061654628657283124/frozen.jpg?width=536&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061656551842136154/midshadow.jpeg?width=536&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061656552081215538/midshadow.png",
      "https://media.discordapp.net/attachments/1044626284346605588/1061656552404164669/onionclap.jpg?width=528&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061656552660025345/pean.jpg?width=550&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061656553280782336/stonkmarket.jpg?width=514&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061656554090274916/techedabeans.jpg?width=550&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061656554413244516/vegs.png",
      //NC TBOT DB
      `${result[0].buffswarm}`,
      `${result[0].cyburn}`,
      `${result[0].gangstaparadise}`,
      `${result[0].hyperswarm}`,
      `${result[0].joashrooms}`,
      `${result[0].midcap}`,
      `${result[0].speeddemon}`,
      //NC WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1061789054422753301/middlest.jpg?width=600&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061789054661820487/rescuekale.jpg?width=570&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061789055039328376/beancap.jpeg",
      "https://media.discordapp.net/attachments/1044626284346605588/1061789089780732094/dragon.jpg?width=491&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061789090254700616/frozentots.jpg?width=554&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061789090548297768/snakeparadise.jpg?width=537&height=588",
      "https://media.discordapp.net/attachments/1152624944262414436/1262054285856997376/midshrooms.jpg?ex=66953325&is=6693e1a5&hm=370aa748325491d05d51a5016f2d25dcf745a538bdc440f934a950ff904baa40&=&format=webp&width=313&height=350",
      // RO TBOT DB
      `${result[0].combose}`,
      `${result[0].freezeheal}`,
      `${result[0].frymidrose}`,
      `${result[0].hmr}`,
      `${result[0].midrose}`,
      `${result[0].rampmidrose}`,
      `${result[0].violetmid}`,
      //RO WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1061703864245559446/freal.png?width=578&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061703864824381540/midrampile.jpg?width=532&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061703865289932910/midrose.jpg?width=632&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061703865579356180/millrose.jpg?width=535&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061703866380468286/32rampcards.jpg?width=554&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061704016150663178/healaggrobeans.jpg?width=537&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061704016578490478/ramphell.jpg?width=516&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061704016985325609/ramprose.jpg?width=560&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061704017266348092/ramprose.png",
      "https://media.discordapp.net/attachments/1044626284346605588/1061704035578679317/RO_healaggro.jpg?width=527&height=587",
      "https://media.discordapp.net/attachments/1152624944262414436/1262054631467384914/cycleheal.jpg?ex=66953377&is=6693e1f7&hm=25bea0013c53367e16e482d54c1a85d1794358e6290bd5d10b5526d160fc5718&=&format=webp&width=565&height=614",
      "https://media.discordapp.net/attachments/1152624944262414436/1262054775403319306/newtempo.jpg?ex=6695339a&is=6693e21a&hm=90284cd8a06efd8f956bc3b4dbdcf76ee781dd2b8c95aa376280b09512ee48d6&=&format=webp&width=536&height=614",
      //SF TBOT DB
      `${result[0].oneone}`,
      `${result[0].aggrosf}`,
      `${result[0].ejection}`,
      `${result[0].funnyflare}`,
      `${result[0].healaggrof}`,
      `${result[0].healmidflare}`,
      `${result[0].physcopineclones}`,
      `${result[0].physcosolstice}`,
      `${result[0].rampclones}`,
      `${result[0].ramp2seedling}`,
      `${result[0].solstice}`,
      //SF WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1061667674851131484/astroburst.jpg?width=464&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667675119550545/astrocado.jpg?width=543&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667675572551680/envchanged.jpg?width=544&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667676130381995/ic.jpg?width=539&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667676365275220/midflare.jpg?width=548&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667676646277151/aggroflare.jpg?width=492&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667676893745162/aggroflareramp.jpg?width=521&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667677132832802/aggroflarerng.jpg?width=514&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667777473167470/berrytroll.jpg?width=530&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667777867415702/dandy.jpg?width=535&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667778353975337/midflarefry.jpg?width=549&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667778857271337/midkale.jpg?width=518&height=587",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667779234779176/midramp.jpg?width=527&height=587",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667779574497361/astroswarm.jpg?width=632&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667839683080230/physcogloomshroom.jpg?width=532&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667840102514748/physcomid.jpg?width=550&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667841188835378/rampberries.jpg?width=524&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667842103193640/Midrng.jpg?width=548&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667842346467328/otkdandy.png?width=635&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667878773981364/physcosweatclones.jpg?width=542&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667879122128956/plasticpeatrollerflare.jpg?width=632&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667879629619381/sfhealaggro.jpg?width=538&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667879956795442/sonicmaggro.jpg?width=562&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667880363622410/physcosonic.jpg?width=552&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667905823051949/trollerflarenext.jpg?width=569&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667906364125224/Trollerflare.jpg?width=515&height=588",
      //SP TBOT DB
      //Bartin
      `${result[0].bartin}`,
      `${result[0].bartinroots}`,
      `${result[0].cyclesp}`,
      `${result[0].magmartin}`,
      `${result[0].pranksterburn}`,
      `${result[0].reliablemolekale}`,
      `${result[0].tempodinoroots}`,
      `${result[0].tokenaggro}`,
      //SP WEB DB

      "https://media.discordapp.net/attachments/1044626284346605588/1061764111454699681/kenmartin2nd.png?width=639&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061764112348094524/3burn.PNG?width=577&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061764114273280070/fig.png?width=630&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061764114600427550/joa.png",
      "https://media.discordapp.net/attachments/1044626284346605588/1061764150059073576/controlsp.jpg?width=541&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061764150428176555/Cycle.jpg?width=518&height=587",
      "https://media.discordapp.net/attachments/1044626284346605588/1061764151233482864/protectseed.jpg?width=567&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061764170632155216/starchpack.jpg?width=547&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061764170921541753/t3mpo.jpg?width=535&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061764171202568233/spudumb.jpg?width=541&height=588",
      //WK TBOT DB
      `${result[0].mid3}`,
      `${result[0].cancerknight}`,
      `${result[0].chemotherapy}`,
      `${result[0].cycleknight}`,
      `${result[0].funnyknight}`,
      `${result[0].healmidwk}`,
      `${result[0].highlander}`,
      `${result[0].midmirror}`,
      `${result[0].nivola}`,
      `${result[0].obnoxious}`,
      `${result[0].packagewk}`,
      `${result[0].rampburst}`,
      `${result[0].shitknight}`,
      //WK WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1061686842526802071/Healaggro.jpg?width=545&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061686842786852924/healmid_wk.jpg",
      "https://media.discordapp.net/attachments/1044626284346605588/1061686843055276062/healsanity.jpg?width=551&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061686843365662751/3knight.jpg?width=481&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061686889528184852/counterknight.jpg?width=467&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061686890362851429/healwk.png?width=865&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061686890895519794/midheal.jpg?width=529&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061686926639378565/trollknight.jpg?width=575&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061686926983303188/wkcontrol.png",
      "https://media.discordapp.net/attachments/1044626284346605588/1061686928107388958/ramptroll.jpg?width=546&height=588",
      "https://media.discordapp.net/attachments/1152624944262414436/1262058591456591986/funnysunstrike.jpg?ex=66953728&is=6693e5a8&hm=9b9405d42110f26d07ddca91d277b9a9e66de4d3592db8b6334a0cae47ebecc3&=&format=webp&width=492&height=614",
    ];
    let embed = new EmbedBuilder()
      .setTitle("Random Plant Deck")
      .setDescription(`Here is your random plant Deck ${message.author}`)
      .setColor("Random")
      .setImage(deck[Math.floor(Math.random() * deck.length)]);

    message.channel.send({ embeds: [embed] });
  },
};
