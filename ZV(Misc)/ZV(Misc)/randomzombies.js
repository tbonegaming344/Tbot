const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `randomzombies`,
	aliases: [`zombiesrandom`, `randz`, `randomz`],
	category: `Miscellaneous`,
		run: async(client, message, args) => {
			const deck = [
//BF TBOT DB 
//Garolith Tech
"https://media.discordapp.net/attachments/1044626284346605588/1047968774592147506/image.png",
//Himps
"https://media.discordapp.net/attachments/1030888661581041775/1061706069832904764/IMG_0523.png?width=540&height=588",
//Morality
"https://media.discordapp.net/attachments/1208844365737492532/1208844659867131974/Screenshot_20240216_184145_PvZ_Heroes.jpg?ex=65e4c352&is=65d24e52&hm=98deffe39a87ebede9a8f1e82b974cd2a5dd256a4cfd8a4ba1120ed41ac6a5ae&=&format=webp&width=602&height=614",
//Lockout
"https://media.discordapp.net/attachments/1044626284346605588/1229069832516014091/pirateout.webp?ex=662e577b&is=661be27b&hm=be87dc763d8e6feb16fc12a75f11fa1989a6dfa695a2020a7870562e973067e0&=&format=webp",
//OTK Swabbie
"https://media.discordapp.net/attachments/760579518846206033/1053844953802997760/IMG_9697.png?width=505&height=555",
//Racism
"https://media.discordapp.net/attachments/1044626284346605588/1127703695975534622/IMG_5074.png?width=648&height=625",
//Raiser package
"https://media.discordapp.net/attachments/1044626284346605588/1044626375975378944/IMG_9327.png?width=526&height=604",
//MidPets
"https://media.discordapp.net/attachments/1153820028873998367/1153820029255700490/Screenshot_20230919-181706.png?width=389&height=501",
//BF WEB DB
		"https://media.discordapp.net/attachments/1044626284346605588/1061799296267210842/huntconjure.jpg?width=556&height=588", 
		"https://media.discordapp.net/attachments/1157822351686258708/1157822351891775538/IMG_5481.png?ex=651e9ed7&is=651d4d57&hm=42f9fd46ba37f1dc929ffbc5&=&width=591&height=580",
			"https://media.discordapp.net/attachments/1044626284346605588/1061799296938299392/agentgoat.jpg?width=514&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061799336859672726/firegood.jpg?width=554&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061799337534955582/gravebot.jpg?width=542&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061799337828569168/lockoutnt.jpg?width=597&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061799338067623976/manicalkorv.jpg?width=542&height=588",
			 "https://media.discordapp.net/attachments/1044626284346605588/1061799338298318988/manicalpirates.jpg?width=534&height=588",
			  "https://media.discordapp.net/attachments/1044626284346605588/1061799386025316352/tempoimps.jpg?width=582&height=588",
			   "https://media.discordapp.net/attachments/1044626284346605588/1061799386474086400/thicantihero.jpg?width=563&height=588", 
			   "https://media.discordapp.net/attachments/1044626284346605588/1061799386801262712/whale.jpg?width=493&height=588", 
			   "https://media.discordapp.net/attachments/1044626284346605588/1061799388915179641/swabbiethegoat.jpg?width=532&height=588",
		//EB TBOT DB
"https://media.discordapp.net/attachments/1044626284346605588/1245048081641115648/IMG_6379.png?ex=665754e2&is=66560362&hm=0f5f5bb66377b527fe9a2053bc5923610c7bd2025216b391ef6d6b289dddca67&=&format=webp&quality=lossless&width=510&height=570", 
"https://media.discordapp.net/attachments/1044626284346605588/1128680390937292840/Z_EB_Control_Bunnary_22.jpg",
"https://media.discordapp.net/attachments/1044626284346605588/1045190383866495086/IMG_4213.jpg?width=622&height=604",
//igma burn
"https://media.discordapp.net/attachments/1026325623477641236/1133702398322421802/IMG_6613.png?width=589&height=580",
"https://media.discordapp.net/attachments/1044626284346605588/1045340637412728862/IMG_9381.png?width=579&height=604",
"https://media.discordapp.net/attachments/1092759178352807976/1093246758567542834/IMG_8555.png",
"https://media.discordapp.net/attachments/1044626284346605588/1169715211767386112/NPA.png?ex=6556692e&is=6543f42e&hm=aeb8631e5d6f501c36987bc8&=",
"https://media.discordapp.net/attachments/1044626284346605588/1169717041473785947/PlayerRemoval.png?ex=65566ae2&is=6543f5e2&hm=afc86138b2c67ae47430161e&=",
//Seacret
"https://media.discordapp.net/attachments/1044626284346605588/1229086722693005463/seacret.jpg?ex=662e6736&is=661bf236&hm=963e59e4f9503051f90fed0a4a8df55ce1c82e04205abf701300e53d12b1829c&=&format=webp&width=619&height=570",
"https://media.discordapp.net/attachments/1044626284346605588/1056775376023605278/TEch22.png",
//Ignea
"https://images-ext-1.discordapp.net/external/xmgA_AgeOX6JMo-mu_iB1m6yM1yKrLmcp6YZb8ZPaZ4/https/i.imgur.com/fzpcaX6h.jpg?format=webp&width=621&height=655",
//EB WEB DB
"https://media.discordapp.net/attachments/1044626284346605588/1062141837013417994/IMG_9691.jpg?width=537&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1062141837286060083/IMG_0577.jpg?width=577&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1062141837512540231/IMG_0576.png", 
"https://media.discordapp.net/attachments/1044626284346605588/1062141837793570897/IMG_0575.jpg?width=531&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1062141838015860786/IMG_0574.jpg?width=558&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1062141838309457940/IMG_0573.jpg?width=672&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1062141838607265902/IMG_0571.jpg?width=662&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1062141839148318811/IMG_0570.jpg?width=538&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1062141839374815242/IMG_0569.jpg?width=563&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1062141878054686830/IMG_0568.jpg?width=531&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1062141878339895426/IMG_0567.jpg?width=511&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1062141878608343111/IMG_0566.jpg?width=474&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1062141880088924211/b339352587be6bb5a5bad6c727cd8b0340d207ba12146e26c91b286372faaac2.png", 
"https://media.discordapp.net/attachments/1044626284346605588/1062141896236990514/Screenshot_20220728-030511-604.png?width=575&height=588", 
			//SB TBOT DB 
"https://media.discordapp.net/attachments/1044626284346605588/1061846548121653368/Screenshot_20201115-164655-1.png?width=605&height=586", 
"https://media.discordapp.net/attachments/1044626284346605588/1061846549430280232/unknown-4.png",
"https://media.discordapp.net/attachments/1044626284346605588/1061846549950369893/6208006128faa0c77fe3c5f3cbffbf6cc8e6b401e12b156742da708a21df2dc9.png",
//SB WEB DB 
			"https://media.discordapp.net/attachments/1044626284346605588/1061846547098255410/IMG_0739.jpg?width=570&height=586", "https://media.discordapp.net/attachments/1044626284346605588/1061846547312156692/IMG_0738.jpg?width=585&height=586", "https://media.discordapp.net/attachments/1044626284346605588/1091082050993406082/IMG_1919.png?width=529&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1061846547869999185/IMG_0591.jpg?width=485&height=586", "https://media.discordapp.net/attachments/1044626284346605588/1061846548683702292/IMG_0736.jpg?width=555&height=587",
						//HG TBOT DB
"https://media.discordapp.net/attachments/1044626284346605588/1044975287336710236/IMG_9337.png?width=561&height=604",
"https://media.discordapp.net/attachments/1045888517110251590/1096755740422709249/Screenshot_20230415-131028-240.png?width=577&height=586",
"https://media.discordapp.net/attachments/1045888517110251590/1097542157327413248/image.png",
"https://media.discordapp.net/attachments/1044626284346605588/1045011616032362526/unknown-11.png",
"https://media.discordapp.net/attachments/1044626284346605588/1133210630782976080/ezgif.com-gif-maker_38.gif",
//HG Kitchen Sink Has Everything
"https://media.discordapp.net/attachments/1044626284346605588/1239745836955734016/IMG_6300.png?ex=66440ac8&is=6642b948&hm=2fa1e4d9b5e45d9a7276157d4bd792d815abd079d21769219282be0f0f66219f&=&format=webp&quality=lossless&width=565&height=570",
"https://media.discordapp.net/attachments/1044626284346605588/1045011614648258621/unknown-5.png",
//Mimps
"https://media.discordapp.net/attachments/1189353266614632448/1189353267059232848/IMG_7805.png?ex=659dda8b&is=658b658b&hm=1e159307162d9d82905edb86&=&format=webp&quality=lossless&width=625&height=614",
"https://media.discordapp.net/attachments/1044626284346605588/1045011615017340958/Sueshe_Aggro.png?width=538&height=604",
			"https://media.discordapp.net/attachments/1044626284346605588/1044626374939381860/IMG_9264.png?width=570&height=604",
"https://media.discordapp.net/attachments/1130612055938965645/1130615542877802629/IMG_6329.png?width=641&height=625",
"https://media.discordapp.net/attachments/1044626284346605588/1161358283853004891/YKM.jpg?ex=6538022f&is=65258d2f&hm=4caf37568545f3aadb1753c3&=",
//HG WEB DB
			"https://media.discordapp.net/attachments/1044626284346605588/1062170851161669652/IMG_0611.jpg?width=567&height=588",  
			"https://media.discordapp.net/attachments/1044626284346605588/1062170851614675045/IMG_0609.jpg?width=531&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062170851866312825/IMG_0608.jpg?width=546&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062170852780679278/IMG_0607.jpg?width=569&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062170853019766855/IMG_0606.jpg?width=567&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062170853237850172/IMG_0605.png", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062170853707620383/IMG_0604.jpg?width=556&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062170853925736518/IMG_0603.png?width=621&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062170854269648937/IMG_0602.jpg?width=556&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062170886142177371/IMG_0601.jpg?width=537&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062170886637109268/IMG_0600.jpg?width=550&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062170887119458374/IMG_0599.jpg?width=525&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062170887442415626/IMG_0597.jpg?width=522&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062170891502502029/IMG_0596.jpg?width=473&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062170892337172520/IMG_0595.jpg?width=540&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062170892685295626/IMG_0594.jpg?width=527&height=587", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062170893041807390/IMG_0593.jpg?width=488&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062170893356388402/IMG_0592.jpg?width=518&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062170936331223040/IMG_0590.jpg?width=545&height=588",   
//IF TBOT DB
//lg AGGRO
"https://media.discordapp.net/attachments/1044626284346605588/1045011615407427657/unknown-20-1.png",
//Barrel Pirates
"https://media.discordapp.net/attachments/1044626284346605588/1239491579987623976/2.1.png?ex=66431dfd&is=6641cc7d&hm=b4e5c55ba41e920214bdd9c3c2175592e7e5440c56231ac4e7e3af2e6fbe8bd2&=&format=webp&quality=lossless&width=613&height=570",
	"https://media.discordapp.net/attachments/1030063061953945690/1071950672011993129/Screenshot_20230204-231352-548.png?width=595&height=625",
	"https://media.discordapp.net/attachments/1044626284346605588/1160944168089165864/IMG_5213.jpg?ex=65368082&is=65240b82&hm=ac7539e8428eafe5ef8f97d7&=&width=619&height=580",
"https://media.discordapp.net/attachments/1041382979282423828/1041383270228693132/unknown.png?width=593&height=555",
"https://media.discordapp.net/attachments/1044626284346605588/1160985263271579848/IMG_5224.png?ex=6536a6c8&is=652431c8&hm=19c9a8702bcff0476f45b531&=&width=616&height=580",
"https://media.discordapp.net/attachments/1044626284346605588/1120057054007148614/IMG_3028.png?width=571&height=625",
//Spacestars
"https://media.discordapp.net/attachments/1044626284346605588/1239491580352532652/IMG_6283.png?ex=66431dfd&is=6641cc7d&hm=a1e13bacfd93a840643e729d35ec07b80c1df2bfa342619bd34f752be46f008b&=&format=webp&quality=lossless&width=510&height=570",
"https://media.discordapp.net/attachments/1044626284346605588/1161330017784049784/IMG_5236.png?ex=6537e7dc&is=652572dc&hm=68bf783e31207cd629026353&=&width=543&height=580",
"https://media.discordapp.net/attachments/1044626284346605588/1056775375755161630/IMG_0279.png?width=589&height=625",
"https://media.discordapp.net/attachments/1044626284346605588/1161360617198846011/wrathmartin.png?ex=6538045c&is=65258f5c&hm=c4564064c91ea2455bfacbf9&=",
//IF WEB DB			
			"https://media.discordapp.net/attachments/1044626284346605588/1062141452253138944/IMG_0633.jpg?width=593&height=625", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141452496404540/IMG_0632.jpg?width=586&height=625", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141452735492156/IMG_0631.jpg?width=587&height=625",
			 "https://media.discordapp.net/attachments/1044626284346605588/1062141452966170635/IMG_0630.jpg?width=584&height=625", 
			 "https://media.discordapp.net/attachments/1044626284346605588/1062141453217824879/IMG_0629.jpg?width=591&height=625", 
			 "https://media.discordapp.net/attachments/1044626284346605588/1062141453721145355/IMG_0627.jpg?width=587&height=625", 
			 "https://media.discordapp.net/attachments/1044626284346605588/1062141453943439410/IMG_0626.jpg?width=546&height=624", 
			 "https://media.discordapp.net/attachments/1044626284346605588/1062141454253830205/IMG_0625.jpg?width=567&height=625", 
			 "https://media.discordapp.net/attachments/1044626284346605588/1062141454488703107/IMG_0624.jpg",
			  "https://media.discordapp.net/attachments/1044626284346605588/1062141488596779129/IMG_0622.jpg?width=576&height=625",   
		//IM TBOT DB 
"https://media.discordapp.net/attachments/1044626284346605588/1052255700585295963/image0-32.jpg?width=600&height=555",
"https://media.discordapp.net/attachments/1044626284346605588/1169718634902474842/Happyticia.jpeg?ex=65566c5e&is=6543f75e&hm=42518395334172a23eac0f8a&=",
//Igmaticia
"https://media.discordapp.net/attachments/1044626284346605588/1160987049499828264/IMG_5225.png?ex=6536a872&is=65243372&hm=00593ec7d3f2293b642a996f&=&width=628&height=580",
//OTK Trickster
"https://media.discordapp.net/attachments/1044626284346605588/1231983138616639568/otktrickster.png?ex=6627cd35&is=66267bb5&hm=57ddde1f586dda2b99412197a30f18e111458f39b977768a37e004572b8c717d&=&format=webp&quality=lossless",
//Rampticia
"https://media.discordapp.net/attachments/1060317261690322994/1065450876493373530/IMG_3706.png?width=586&height=587",
//Scimmort
"https://media.discordapp.net/attachments/1044626284346605588/1231721114598772806/science.webp?ex=6637fcad&is=662587ad&hm=c610e209d1da9f47c4c9066d49a6e57172311646b97d0075acb9c3af0044902b&=&format=webp&width=615&height=570",
"https://media.discordapp.net/attachments/1044626284346605588/1183515299325161492/IMG_5840.jpg?ex=65889d84&is=65762884&hm=211f0117ed15848e56a84e34&=&format=webp&width=585&height=570",
"https://media.discordapp.net/attachments/908814148438229033/1109857576860004503/IMG_6516.png?width=649&height=604",
"https://media.discordapp.net/attachments/1044626284346605588/1045190379705745468/unknown.png?width=648&height=604",
"https://media.discordapp.net/attachments/1044626284346605588/1161347205714673674/IMG_5237.jpg?ex=6537f7de&is=652582de&hm=09420dc379c7742012d715b9&=&width=657&height=621",
	"https://media.discordapp.net/attachments/1044626284346605588/1111417389184188537/ycm.png",
//IM WEB DB			
			"https://media.discordapp.net/attachments/1044626284346605588/1062140862525612032/IMG_0656.png?width=828&height=587", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062140862861168732/IMG_0655.jpg?width=555&height=587", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062140863087648899/IMG_0654.jpg?width=540&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062140863356080248/IMG_0653.jpg?width=543&height=587", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062140863557423134/IMG_0652.jpg?width=624&height=587", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062140863817457685/IMG_0651.jpg?width=551&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062140864077500416/IMG_0650.jpg?width=563&height=587", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062140864299814922/IMG_0649.png?width=621&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062140864635346954/IMG_0648.jpg?width=528&height=587", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141140947697684/IMG_0646.jpg?width=551&height=587", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141141195178125/IMG_0645.jpg?width=534&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141141463597146/IMG_0644.jpg?width=513&height=587", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141141685911592/IMG_0643.jpg?width=552&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141141958537236/IMG_0642.jpg?width=396&height=587", 
//NT TBOT DB
"https://media.discordapp.net/attachments/1044626284346605588/1160926756153335828/IMG_5207.jpg?ex=6536704b&is=6523fb4b&hm=c442c397027575150d07ae10&=&width=526&height=580",
"https://media.discordapp.net/attachments/1045888517110251590/1096533284323856436/Screenshot_20230414-220028-386.png?width=580&height=586",
"https://media.discordapp.net/attachments/1105613025731432539/1105735101129695282/Screenshot_20230510-075608-809.png?width=595&height=604",
"https://media.discordapp.net/attachments/1044626284346605588/1050166192150691910/IMG_9555.jpg?width=503&height=555",
"https://media.discordapp.net/attachments/1130342284890746911/1130342285125632051/Screenshot_20230716_211921.jpg?width=566&height=621",
"https://media.discordapp.net/attachments/1042391001039372289/1043945630705397871/glag.png",
"https://media.discordapp.net/attachments/1044626284346605588/1047968773799424011/IMG_9505.png?width=512&height=555",
"https://media.discordapp.net/attachments/1044626284346605588/1161354384786071572/IMG_5238.png?ex=6537fe8e&is=6525898e&hm=0944fa9480145a3c3bd5e133&=&width=654&height=621",
"https://media.discordapp.net/attachments/1134399933370351657/1134399933580062824/IMG_5225.png?width=559&height=621",
"https://media.discordapp.net/attachments/1044626284346605588/1114959263329169509/schoolyard.jpg?width=646&height=604",
"https://media.discordapp.net/attachments/1044626284346605588/1050166192368791582/IMG_9556.jpg?width=510&height=554",
//Floss
"https://media.discordapp.net/attachments/1232152648753348698/1232152896779456563/WYlGSkU.png?ex=663f7d8e&is=663e2c0e&hm=9aa33e30c403692ed07a73d51615bac7f211fdf5a9d5d775cb1e8c87907b920d&=&format=webp&quality=lossless&width=607&height=570",
"https://images-ext-2.discordapp.net/external/rgEqFopGEXrDYCOwgvZEEp5DA_GEkvEhLnRN4kew_vA/https/cdn-longterm.mee6.xyz/plugins/commands/images/744209695123832872/fbce45eb42e826fb9ec4e2152b73c3e17234fbe9a284766431d24e78dc74c137.png",
"https://media.discordapp.net/attachments/1067552920947662909/1102626689835610172/IMG_2366.png?width=548&height=604",
//IceBox
"https://media.discordapp.net/attachments/1209705155214319646/1209708655121793034/IMG_8191.jpg?ex=66160c7a&is=6603977a&hm=a8f9de7c1435d2433500dcb941d6259931d129799678787d95fed8451278b80a&=&format=webp&width=504&height=500",
//NT WEB DB
		"https://media.discordapp.net/attachments/1044626284346605588/1062141638153076818/IMG_0680.jpg?width=595&height=625", 
		 "https://media.discordapp.net/attachments/1044626284346605588/1062141638731903067/IMG_0678.jpg?width=591&height=625", 
		 "https://media.discordapp.net/attachments/1044626284346605588/1062141639000326154/IMG_0677.jpg?width=576&height=625", 
		 "https://media.discordapp.net/attachments/1044626284346605588/1062141639285551244/IMG_0676.jpg?width=604&height=625", 
		 "https://media.discordapp.net/attachments/1044626284346605588/1062141639621083207/IMG_0675.jpg?width=576&height=625", 
		 "https://media.discordapp.net/attachments/1044626284346605588/1062141639864360990/IMG_0674.jpg?width=606&height=625", 
		 "https://media.discordapp.net/attachments/1044626284346605588/1062141640128606318/IMG_0673.jpg?width=572&height=625", 
		 "https://media.discordapp.net/attachments/1044626284346605588/1062141640401223700/IMG_0672.jpg?width=615&height=625", 
		 "https://media.discordapp.net/attachments/1044626284346605588/1062141640619335770/IMG_0671.jpg?width=583&height=625", 
		 "https://media.discordapp.net/attachments/1044626284346605588/1062141668893143051/IMG_0670.jpg?width=582&height=625", 
		 "https://media.discordapp.net/attachments/1044626284346605588/1062141669119627314/IMG_0669.jpg?width=572&height=625", 
		 "https://media.discordapp.net/attachments/1044626284346605588/1062141669652320266/IMG_0668.jpg?width=584&height=625",   


		 // PB TBOT DB
		 "https://media.discordapp.net/attachments/1044626284346605588/1045190220947128370/IMG_9379.png?width=573&height=604",
	 "https://media.discordapp.net/attachments/1044626284346605588/1124404309409415209/IMG_3197.jpg?width=583&height=625",
	 "https://media.discordapp.net/attachments/1044626284346605588/1140820258928726046/IMG_4139.png?width=561&height=621",
	 "https://media.discordapp.net/attachments/1044626284346605588/1118536065486159882/IMG_2945.png?width=566&height=625",
	 "https://media.discordapp.net/attachments/1060317261690322994/1065453499132952666/IMG_3707.png?width=570&height=587",
	 "https://media.discordapp.net/attachments/950984460382388244/951872349383303228/Package.png",
	 "https://media.discordapp.net/attachments/1044626284346605588/1169721134959300618/PureBurn.png?ex=65566eb2&is=6543f9b2&hm=a69dd7b94fd9ff1bc8e40553&=g",
	 "https://media.discordapp.net/attachments/1118253729544667177/1118253730001866772/Screenshot_20210919-192715-249.png",
	 "https://media.discordapp.net/attachments/1044626284346605588/1047968774353080420/IMG_9504.png?width=497&height=555",
	 "https://media.discordapp.net/attachments/1111824247518670940/1111824248160387112/Trickburn.png?width=648&height=604",
	 "https://media.discordapp.net/attachments/1044626284346605588/1161349758770757784/trickstache.png?ex=6537fa3f&is=6525853f&hm=102c47e8f34b7efaaa72436f&=",
	 "https://media.discordapp.net/attachments/1044626284346605588/1165790149678989342/Screenshot_20231021_121655_PvZ_Heroes2.jpg?ex=654821af&is=6535acaf&hm=adb92e74fa1b9cb202e51762&=&width=577&height=580",
	 "https://media.discordapp.net/attachments/1000479455753551934/1126246757924356136/IMG_6342.png",
	 //valksterstache
	 "https://media.discordapp.net/attachments/1044626284346605588/1240853484853788733/vss.webp?ex=6648125c&is=6646c0dc&hm=0a6a0554e16c85f3a62404cad408ab83558ea5ab0547435e30077204e717df31&=&format=webp",
	 //Young Egg Martin
	 "https://media.discordapp.net/attachments/1030888661581041775/1234996829473607772/Screenshot_20240103-051014-025.png?ex=663ff2ed&is=663ea16d&hm=209e2895c13d5bb3397e27a6e82af3eabff55977498ab98350b5ae48523843d7&=&format=webp&quality=lossless&width=553&height=570",
				 "https://media.discordapp.net/attachments/1159338425372123176/1160636375394168915/Screenshot_20231008-105257.png?ex=653561db&is=6522ecdb&hm=cee671c5ca6f16c6c9e5323f&=&width=600&height=621",
	 //PB WEB DB 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847096946335896/IMG_0707.jpg?width=539&height=587", 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847097172824114/IMG_0706.jpg?width=540&height=586", 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847097437073490/IMG_0705.jpg?width=537&height=586", 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847097663561758/IMG_0704.jpg?width=521&height=586", 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847097902633000/IMG_0703.jpg?width=534&height=586", 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847098196242543/IMG_0702.jpg?width=521&height=586", 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847098485645342/IMG_0701.jpg?width=524&height=586", 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847098707939429/IMG_0700.jpg?width=560&height=586", 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847098900885544/IMG_0699.jpg?width=546&height=586", 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847099106402394/IMG_0698.jpg?width=530&height=586", 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847234678886481/IMG_0697.jpg?width=539&height=587",  
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847235106709524/IMG_0695.png?width=621&height=587", 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847235312226354/IMG_0694.jpg?width=630&height=586", 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847235505160192/IMG_0693.jpg?width=519&height=587", 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847235740049508/IMG_0692.jpg?width=551&height=587", 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847236113334282/IMG_0691.jpg?width=551&height=587",   
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847497963741204/0fc96dca129efed11cb885774bbf2eac59f4191bed4773907b36b36b8309fbf8.png", 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847498282520646/Package.png?width=626&height=586", 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847498517385216/Screenshot_20221223-162450_PvZ_Heroes2.jpg?width=573&height=586", 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847498718716004/21d9e7b300b9d9c6c2e42466bc7e48fc992dda61e9da1c914e300794db467552.png?width=555&height=586", 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847499133964288/a10373a91cc6218cf61804b23696decd5641d79d7b03a7d0ba58d89256052134.jpg", 
				 "https://media.discordapp.net/attachments/1044626284346605588/1061847499314303047/IMG_9379.png?width=557&height=587",
				//RB TBOT DB 
//Bolt Bolt
"https://media.discordapp.net/attachments/1044626284346605588/1160933596777947136/IMG_5209.jpg?ex=653676aa&is=652401aa&hm=df9ac1a0e78f9e67c34db094&=&width=534&height=580",
//Boss
"https://media.discordapp.net/attachments/1088919723196035112/1236689658146983998/image.png?ex=663f83ff&is=663e327f&hm=da5c342a5d5f59c4adff283fd6a103fb1236ea3f318d2a90d02bcdb10bc2b7ab&=&format=webp&quality=lossless&width=613&height=570",
//Brickster
"https://media.discordapp.net/attachments/1044626284346605588/1109897867193229332/IMG_2669.png?width=556&height=604",
//Bustbolt
"https://media.discordapp.net/attachments/1044626284346605588/1229096070584340593/bustbolt.png?ex=662e6fea&is=661bfaea&hm=8fc1c174a9bc9b2bc571a1020138fec8d430edf1c37ec18655de5af9da12acd3&=&format=webp&quality=lossless&width=613&height=570",
"https://media.discordapp.net/attachments/1044626284346605588/1160983306712662048/IMG_5223.png?ex=6536a4f6&is=65242ff6&hm=2be881667509e2b5999f6535&=&width=633&height=580",
"https://media.discordapp.net/attachments/1044626284346605588/1119829935767433276/Screenshot_20230616_230920_PvZ_Heroes.jpg?width=580&height=625",
"https://media.discordapp.net/attachments/1044626284346605588/1160996133972222052/IMG_5227.png?ex=6536b0e8&is=65243be8&hm=94ee4c38bdb87695aa7fb027&=&width=631&height=580",
"https://media.discordapp.net/attachments/1044626284346605588/1160998232353161276/IMG_5228.png?ex=6536b2dc&is=65243ddc&hm=0c6edd8101ad4d007e3bc563&=&width=634&height=580",
"https://cdn.discordapp.com/attachments/923709467751772210/1103924545674563594/FullSizeRender_2.jpg",
"https://media.discordapp.net/attachments/1044626284346605588/1169723476559540294/Pharaohster.jpeg?ex=655670e1&is=6543fbe1&hm=b788a27ed8157ba8237dc53f&=",
"https://media.discordapp.net/attachments/1044626284346605588/1161277781762637934/pogerazzi.png?ex=6537b736&is=65254236&hm=f0650b18ff98f46c362671a3&=&width=619&height=580",
"https://media.discordapp.net/attachments/1044626284346605588/1045190221584662528/IMG_9378.png?width=545&height=604",
"https://media.discordapp.net/attachments/1044626284346605588/1161326161503211610/IMG_5235.png?ex=6537e445&is=65256f45&hm=c7e0b8b6a9ca4821d8531351&=&width=615&height=580",
"https://media.discordapp.net/attachments/1064566497944539156/1124805680872816710/Screenshot_20230701_145505.jpg?width=614&height=625",
"https://media.discordapp.net/attachments/1044626284346605588/1169724408311595119/trickbolt.jpeg?ex=655671bf&is=6543fcbf&hm=de55e01823a275e28e0576c4&=",
//RB WEB DB
				"https://media.discordapp.net/attachments/1044626284346605588/1061846680930111488/IMG_0731.jpg?width=545&height=586", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061846681139822694/IMG_0730.jpg?width=525&height=587", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061846681332752466/IMG_0729.jpg?width=548&height=587", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061846681555062924/IMG_0728.jpg?width=542&height=586", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061846681802522665/IMG_0727.jpg?width=548&height=586", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061846682024812574/IMG_0726.jpg?width=521&height=587", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061846682402308126/IMG_0724.jpg?width=521&height=586", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061846682934976592/IMG_0723.jpg?width=555&height=587", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061846726333448304/IMG_0721.jpg?width=552&height=586", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061846726534770739/IMG_0720.jpg?width=516&height=586", 
				//SM TBOT DB
"https://media.discordapp.net/attachments/1044626284346605588/1160937711943823510/IMG_5210.png?ex=65367a7f&is=6524057f&hm=5e781b0c2b451ead3c280cd2&=&width=540&height=580",
"https://media.discordapp.net/attachments/940369914957549578/1064704022671536128/Screenshot_2023-01-17-08-25-44-697_com.ea.gp.pvzheroes-edit.jpg?width=600&height=625",
"https://media.discordapp.net/attachments/1044626284346605588/1169725614211743855/cruisertempo.png?ex=655672de&is=6543fdde&hm=ed71a12f45dc0f99fb009902&=",
"https://media.discordapp.net/attachments/1044626284346605588/1086236360941256754/IMG_20230315_000115.jpg?width=613&height=625",
"https://media.discordapp.net/attachments/1076677104734843001/1127754320377557032/IMG_5084.png?width=648&height=625",
"https://media.discordapp.net/attachments/1044626284346605588/1169726881327759431/horts.png?ex=6556740c&is=6543ff0c&hm=4f0ea41c2ba9dfa83132624d&=",
"https://media.discordapp.net/attachments/1190055418962128956/1190055419398332506/Screenshot_2023-12-28_at_2.09.59_PM.png?ex=65a0687a&is=658df37a&hm=57a6cbb27f21d79915737560&=&format=webp&quality=lossless&width=575&height=614",
"https://media.discordapp.net/attachments/1044626284346605588/1169726446621687919/kingtempo.png?ex=655673a5&is=6543fea5&hm=a2d0a002a5b365e121613935&=",
"https://media.discordapp.net/attachments/1044626284346605588/1044626375706939472/IMG_9328.png?width=558&height=604",
"https://media.discordapp.net/attachments/1044626284346605588/1044626375413350482/IMG_9329.png?width=554&height=604",
"https://media.discordapp.net/attachments/1044626284346605588/1161342133236682842/oobltgargs.png?ex=6537f325&is=65257e25&hm=754559314967f2bd746e99c2&=&width=596&height=621",
"https://media.discordapp.net/attachments/1118010737068093492/1118010737516892160/IMG_7468.png?width=670&height=625",
"https://media.discordapp.net/attachments/1044626284346605588/1169727973335773315/tricksmash.jpg?ex=65567511&is=65440011&hm=74589adea560c3a6a2039448&=",
"https://media.discordapp.net/attachments/1044626284346605588/1138465856410632292/IMG_4025.png?width=539&height=621",
//SM WEB DB
			"https://media.discordapp.net/attachments/1044626284346605588/1061846214292820019/IMG_0766.jpg?width=530&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061846214506713148/IMG_0765.jpg?width=533&height=587",  
			"https://media.discordapp.net/attachments/1044626284346605588/1061846215031001108/IMG_0763.jpg?width=546&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061846215404302336/IMG_0762.jpg?width=534&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061846215660163202/IMG_0761.jpg?width=528&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061846216612270141/IMG_0758.jpg?width=510&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061846247020957746/IMG_0757.jpg?width=524&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061846384040476713/IMG_0756.jpg?width=555&height=587", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061846384334098513/IMG_0755.jpg?width=542&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061846384598319154/IMG_0754.jpg?width=540&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061846384917106698/IMG_0753.jpg?width=576&height=587",  
//ZM TBOT DB 
"https://media.discordapp.net/attachments/1044626284346605588/1064547529565409360/68750B58-2D53-4AEE-B3C8-5CD53F048B5A.jpg?width=571&height=625",
"https://media.discordapp.net/attachments/1064566497944539156/1152558236050927726/Screenshot_20230916_133138_PvZ_Heroes.jpg?width=654&height=621",
"https://media.discordapp.net/attachments/1045888517110251590/1093586714041262180/Screenshot_20230406_193941.jpg?width=609&height=604",
"https://media.discordapp.net/attachments/1058720036547743744/1112961974251311115/Screenshot_20230530-143132.png?width=549&height=603",
"https://media.discordapp.net/attachments/1044626284346605588/1183515299660714054/image.jpg?ex=65889d84&is=65762884&hm=efd4c80ef18d11083dab98a0&=&format=webp&width=594&height=570",
"https://media.discordapp.net/attachments/1044626284346605588/1121579961862586489/IMG_3112.png?width=641&height=625",
"https://cdn.discordapp.com/attachments/1044626284346605588/1128366314583502898/12d59563ef613aa43192c9d8f319a9dae4d9e87d14d6defaf2690d231bdee2ea.png",
"https://media.discordapp.net/attachments/1044626284346605588/1160990031096315985/IMG_5226.png?ex=6536ab39&is=65243639&hm=cfdf8ea7ce8b98ace3a29d8f&=&width=634&height=580",
"https://media.discordapp.net/attachments/1044626284346605588/1050971600226357289/Screenshot_20221209-205504_PvZ_Heroes.jpg?width=522&height=554",
"https://media.discordapp.net/attachments/1158579183996387381/1158594455696314469/Screenshot_20231002_204011.jpg?ex=651e222b&is=651cd0ab&hm=b010e029dd04aa768bce0fe5&=&width=523&height=580",
"https://media.discordapp.net/attachments/1044626284346605588/1161351362324484228/trickmech.png?ex=6537fbbd&is=652586bd&hm=659ea09581f9e6716ff7e7c3&=",
//ZM WEB DB 
			
"https://media.discordapp.net/attachments/1044626284346605588/1061846058872885329/IMG_0783.jpg?width=548&height=587", "https://media.discordapp.net/attachments/1044626284346605588/1061846059099369502/IMG_0782.jpg?width=536&height=586", "https://media.discordapp.net/attachments/1044626284346605588/1061846059317461133/IMG_0781.jpg?width=563&height=587", "https://media.discordapp.net/attachments/1044626284346605588/1061846060990988368/IMG_0777.jpg?width=540&height=586", "https://media.discordapp.net/attachments/1044626284346605588/1061846061251055728/IMG_0776.jpg?width=597&height=587",  
]
			
		let embed = new EmbedBuilder()
	.setTitle("Random Zombie Deck")
	.setDescription(`Here is your random Zombie Deck ${message.author}`)
		.setColor("Random")
.setImage(deck[Math.floor(Math.random() * deck.length)])
	
	message.channel.send({embeds: [ embed ] } )
		}
}