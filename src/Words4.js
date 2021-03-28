//    wordInKanji	WordinHiragana	Meaning	JLPT	ambiguous	firstcharrow	last test	first successful test	Tested Kanji	Most Elementary Kanji	LastTestNumber	original row

const csv = [
    "～人	～じん	(n-suf) ~ an / ~ese (eg.: Japanese)	4	TRUE	13			FALSE	2	29	7",
    "～人	～にん	(n-suf) ~ people (number of)	4	TRUE	15			FALSE	2	29	8",
    "一人	ひとり	one person	4	FALSE	433			FALSE	2	29	155",
    "二人	ふたり	two people	4	FALSE	1076			FALSE	2	29	458",
    "人	ひと	human / person	4	FALSE	1163			FALSE	2	29	495",
    "外国人	がいこくじん	foreigner	4	FALSE	4283			FALSE	2	29	1937",
    "大人	おとな	adult	4	FALSE	4358			FALSE	2	33	1971",
    "御主人	ごしゅじん	(one 's) husband	4	FALSE	5924			FALSE	2	29	2702",
    "一	いち	one	4	FALSE	428			FALSE	3	34	152",
    "一つ	ひとつ	one	4	FALSE	431			FALSE	3	30	154",
    "一日	いちにち	one day	4	TRUE	485			FALSE	3	29	178",
    "一日	ついたち	the first day of the month	4	TRUE	487			FALSE	3	29	179",
    "一月	ひとつき	one month	4	FALSE	499			FALSE	3	31	184",
    "一緒	いっしょ	together	4	FALSE	529			FALSE	3	29	197",
    "二	に	two	4	FALSE	1073			FALSE	4	29	456",
    "二つ	ふたつ	two	4	FALSE	1074			FALSE	4	29	457",
    "二十日	はつか	twentieth	4	FALSE	1080			FALSE	4	29	460",
    "二十歳	はたち	20 years old	4	FALSE	1083			FALSE	4	29	461",
    "二日	ふつか	two days / the second	4	FALSE	1086			FALSE	4	29	462",
    "三	さん	three	4	FALSE	584			FALSE	5	29	224",
    "三つ	みっつ	three	4	FALSE	585			FALSE	5	29	225",
    "三日	みっか	the third of the month	4	FALSE	590			FALSE	5	30	227",
    "～日	～にち	~st / ~nd / ~th (day of the month)	4	TRUE	112			FALSE	6	30	52",
    "七日	なのか	the seventh of the month	4	FALSE	564			FALSE	6	31	214",
    "九日	ここのか	ninth	4	FALSE	991			FALSE	6	29	416",
    "五日	いつか	the fifth of the month	4	FALSE	1100			FALSE	6	29	469",
    "今日	きょう	today (common)	4	TRUE	1236			FALSE	6	34	530",
    "八日	ようか	the eighth of the month 	4	FALSE	2104			FALSE	6	29	937",
    "六日	むいか	the sixth of the month	4	FALSE	2148			FALSE	6	30	959",
    "十日	とおか	the tenth of the month	4	FALSE	2958			FALSE	6	34	1334",
    "四日	よっか	the fourth of the month	4	FALSE	3842			FALSE	6	29	1722",
    "土曜日	どようび	Saturday	4	FALSE	3970			FALSE	6	33	1787",
    "日曜日	にちようび	Sunday	4	FALSE	7601			FALSE	6	29	3432",
    "昨日	きのう	yesterday	4	FALSE	7713			FALSE	6	29	3483",
    "月曜日	げつようび	Monday	4	FALSE	7914			FALSE	6	29	3576",
    "木曜日	もくようび	Thursday	4	FALSE	7998			FALSE	6	33	3615",
    "毎日	まいにち	every day	4	FALSE	8598			FALSE	6	29	3926",
    "水曜日	すいようび	Wednesday	4	FALSE	8714			FALSE	6	33	3981",
    "火曜日	かようび	Tuesday	4	FALSE	9415			FALSE	6	31	4311",
    "誕生日	たんじょうび	birthday	4	FALSE	12807			FALSE	6	29	5904",
    "金曜日	きんようび	Friday	4	FALSE	14100			FALSE	6	29	6505",
    "四	し	four  (eg. April)	4	TRUE	3829			FALSE	7	29	1716",
    "四	よん	four  (eg. counter suffixes or time)	4	TRUE	3830			FALSE	7	29	1717",
    "四つ	よっつ	four	4	FALSE	3831			FALSE	7	29	1718",
    "五	ご	five	4	FALSE	1092			FALSE	8	29	465",
    "五つ	いつつ	five	4	FALSE	1093			FALSE	8	30	466",
    "五分	ごふん	five minutes	4	FALSE	1095			FALSE	8	29	467",
    "六	ろく	six	4	FALSE	2145			FALSE	9	29	957",
    "六つ	むっつ	six	4	FALSE	2146			FALSE	9	29	958",
    "七	しち	seven (eg. 7:00 pm, or July )	4	TRUE	560			FALSE	10	30	211",
    "七	なな	seven (eg. counter suffixes)	4	TRUE	561			FALSE	10	29	212",
    "七つ	ななつ	seven	4	FALSE	562			FALSE	10	29	213",
    "八	はち	eight	4	FALSE	2101			FALSE	11	29	935",
    "八つ	やっつ	eight	4	FALSE	2102			FALSE	11	33	936",
    "八百屋	やおや	vegetable store	4	FALSE	2106			FALSE	11	29	938",
    "九	きゅう	nine (long pronunciation)	4	TRUE	987			FALSE	12	33	413",
    "九	く	nine (short pronunciation)	4	TRUE	988			FALSE	12	29	414",
    "九つ	ここのつ	nine	4	FALSE	989			FALSE	12	29	415",
    "十	じゅう	ten (onyomi)	4	TRUE	2951			FALSE	13	29	1330",
    "十	とお	ten (things) (kunyomi)	4	TRUE	2952			FALSE	13	29	1331",
    "円 	えん	(n) (1) Yen, money/(2) circle/	4	TRUE	2224			FALSE	14	29	996",
    "円い	まるい	round	4	FALSE	2225			FALSE	14	29	997",
    "百	ひゃく	hundred	4	FALSE	10274			FALSE	15	31	4713",
    "千	せん	thousand	4	FALSE	2960			FALSE	16	29	1335",
    "～か月	～かげつ	(n-suf) ~ month (s) 	4	FALSE	2			FALSE	17	29	2",
    "～月	～がつ	~ month (eg. January)	4	TRUE	125			FALSE	17	29	58",
    "今月	こんげつ	this month	4	FALSE	1240			FALSE	17	29	532",
    "先月	せんげつ	last month	4	FALSE	2001			FALSE	17	29	885",
    "来月	らいげつ	next month	4	FALSE	8103			FALSE	17	29	3672",
    "毎月	まいつき	every month (less common)	4	TRUE	8602			FALSE	17	29	3928",
    "毎月	まいげつ	every month (more common)	4	TRUE	8604			FALSE	17	29	3929",
    "水	みず	water	4	TRUE	8704			FALSE	19	29	3976",
    "木	き	tree	4	TRUE	7995			FALSE	20	29	3613",
    "～本	～ほん	counter for long objects	4	FALSE	129			FALSE	23	29	60",
    "本	ほん	book	4	TRUE	8033			FALSE	23	34	3633",
    "本棚	ほんだな	bookshelf	4	FALSE	8053			FALSE	23	29	3644",
    "大きい	おおきい	big	4	FALSE	4341			FALSE	24	30	1965",
    "大丈夫	だいじょうぶ	OK	4	FALSE	4353			FALSE	24	29	1969",
    "大使館	たいしかん	embassy	4	FALSE	4366			FALSE	24	29	1975",
    "大切	たいせつ	important	4	FALSE	4377			FALSE	24	29	1980",
    "大勢	おおぜい	many / a great number of	4	FALSE	4379			FALSE	24	31	1981",
    "大好き	だいすき	be very fond of	4	FALSE	4383			FALSE	24	29	1983",
    "大学	だいがく	university	4	FALSE	4386			FALSE	24	29	1984",
    "小さい	ちいさい	small	4	FALSE	5080			FALSE	25	29	2323",
    "～中	～じゅう	(n-suf) the whole ~	4	TRUE	11			FALSE	26	31	6",
    "中	なか	inside	4	TRUE	837			FALSE	26	29	345",
    "雨	あめ	rain	4	FALSE	14450			FALSE	27	33	6684",
    "下	した	(n) under; below; beneath	4	TRUE	648			FALSE	28	34	255",
    "下手	へた	poor / unskilful	4	FALSE	680			FALSE	28	29	270",
    "地下鉄	ちかてつ	subway	4	FALSE	3995			FALSE	28	34	1799",
    "靴下	くつした	socks	4	FALSE	14577			FALSE	28	29	6749",
    "上	うえ	top	4	TRUE	599			FALSE	29	29	232",
    "上げる	あげる	raise / give	4	FALSE	608			FALSE	29	29	236",
    "上手	じょうず	good at	4	FALSE	628			FALSE	29	29	245",
    "上着	うわぎ	jacket, coat	4	FALSE	636			FALSE	29	29	249",
    "川	かわ	river	4	FALSE	5250			FALSE	30	29	2406",
    "山	やま	mountain	4	TRUE	5221			FALSE	31	29	2387",
    "先生	せんせい	teacher	4	FALSE	2003			FALSE	32	29	886",
    "学生	がくせい	student	4	FALSE	4728			FALSE	32	30	2147",
    "生まれる	うまれる	be born	4	FALSE	9951			FALSE	32	33	4563",
    "生徒	せいと	student	4	FALSE	9970			FALSE	32	29	4570",
    "留学生	りゅうがくせい	student studying abroad	4	FALSE	10125			FALSE	32	29	4637",
    "～年	～ねん	~ years	4	FALSE	92			FALSE	33	29	43",
    "万年筆	まんねんひつ	fountain pen	4	FALSE	574			FALSE	33	29	219",
    "今年	ことし	this year	4	FALSE	1230			FALSE	33	29	527",
    "再来年	さらいねん	the year after next	4	FALSE	2243			FALSE	33	29	1007",
    "去年	きょねん	last year	4	FALSE	3127			FALSE	33	29	1414",
    "来年	らいねん	next year	4	FALSE	8099			FALSE	33	29	3670",
    "毎年	まいねん	every year (less common)	4	TRUE	8592			FALSE	33	29	3923",
    "毎年	まいとし	every year (more common)	4	TRUE	8594			FALSE	33	29	3924",
    "先	さき	future / forward	4	TRUE	1978			FALSE	34	29	875",
    "先週	せんしゅう	last week	4	FALSE	2017			FALSE	34	30	893",
    "入る	はいる	enter	4	FALSE	2048			FALSE	35	29	909",
    "入れる	いれる	put in, insert	4	FALSE	2050			FALSE	35	29	910",
    "押し入れ	おしいれ	closet	4	FALSE	6811			FALSE	35	29	3077",
    "出かける	でかける	go out	4	FALSE	2344			FALSE	36	29	1051",
    "出す	だす	take out	4	FALSE	2352			FALSE	36	29	1053",
    "出る	でる	go out	4	FALSE	2354			FALSE	36	29	1054",
    "出口	でぐち	exit	4	FALSE	2375			FALSE	36	29	1062",
    "休み	やすみ	rest / holiday / day off	4	FALSE	1425			FALSE	37	31	607",
    "休む	やすむ	rest / have a day off	4	FALSE	1427			FALSE	37	29	608",
    "夏休み	なつやすみ	summer vacation	4	FALSE	4248			FALSE	37	30	1920",
    "見せる	みせる	show	4	FALSE	12361			FALSE	38	29	5717",
    "見る	みる	look	4	FALSE	12375			FALSE	38	29	5721",
    "左	ひだり	left	4	FALSE	5275			FALSE	39	30	2420",
    "右	みぎ	right	4	FALSE	3429			FALSE	40	29	1527",
    "名前	なまえ	name	4	FALSE	3543			FALSE	41	29	1583",
    "平仮名	ひらがな	Hiragana	4	FALSE	5380			FALSE	41	29	2468",
    "有名	ゆうめい	famous	4	FALSE	7936			FALSE	41	29	3586",
    "片仮名	かたかな	Katakana	4	FALSE	9659			FALSE	41	29	4423",
    "男	おとこ	man	4	FALSE	10096			FALSE	42	29	4623",
    "男の子	おとこのこ	boy	4	FALSE	10100			FALSE	42	34	4625",
    "女	おんな	woman	4	TRUE	4546			FALSE	43	29	2058",
    "女の子	おんなのこ	girl	4	FALSE	4550			FALSE	43	33	2060",
    "お菓子	おかし	snacks	4	FALSE	354			FALSE	44	29	134",
    "子供	こども	child	4	FALSE	4676			FALSE	44	29	2121",
    "帽子	ぼうし	hat / cap	4	FALSE	5362			FALSE	44	29	2459",
    "椅子	いす	chair	4	FALSE	8246			FALSE	44	31	3750",
    "学校	がっこう	school	4	FALSE	4724			FALSE	45	31	2145",
    "自動車	じどうしゃ	car	4	FALSE	11789			FALSE	47	29	5442",
    "自転車	じてんしゃ	bicycle	4	FALSE	11832			FALSE	47	33	5461",
    "車	くるま	car	4	TRUE	13302			FALSE	47	29	6141",
    "電車	でんしゃ	train	4	FALSE	14497			FALSE	47	29	6710",
    "元気	げんき	vigor / energy	4	FALSE	1964			FALSE	48	34	867",
    "天気	てんき	weather	4	FALSE	4462			FALSE	48	33	2020",
    "病気	びょうき	illness / disease	4	FALSE	10191			FALSE	48	29	4670",
    "電気	でんき	electricity	4	FALSE	14479			FALSE	48	29	6701",
    "白い	しろい	white	4	FALSE	10268			FALSE	50	33	4710",
    "万	まん	ten thousand	4	FALSE	566			FALSE	51	29	215",
    "分かる	わかる	understand	4	FALSE	2446			FALSE	52	31	1092",
    "半分	はんぶん	half	4	FALSE	2968			FALSE	52	29	1340",
    "自分	じぶん	oneself	4	FALSE	11785			FALSE	52	29	5440",
    "国	くに	country (kunyomi)	4	TRUE	3924			FALSE	53	34	1762",
    "外国	がいこく	foreign country	4	FALSE	4281			FALSE	53	32	1936",
    "～時	～じ	o’clock	4	FALSE	118			FALSE	54	34	55",
    "～時間	～じかん	~ hour (s) 	4	FALSE	120			FALSE	54	29	56",
    "時々	ときどき	sometimes	4	FALSE	7746			FALSE	54	29	3499",
    "時計	とけい	clock / watch	4	FALSE	7750			FALSE	54	29	3501",
    "時間	じかん	time	4	FALSE	7754			FALSE	54	29	3503",
    "～前	～まえ	(n-suf) ago / before (kunyomi)	4	TRUE	32			FALSE	56	29	16",
    "前	まえ	front	4	TRUE	2634			FALSE	56	29	1184",
    "午前	ごぜん	am	4	FALSE	2961			FALSE	56	29	1336",
    "午後	ごご	afternoon	4	FALSE	2963			FALSE	57	29	1337",
    "後	あと	after / later	4	TRUE	5877			FALSE	57	29	2679",
    "後ろ	うしろ	back	4	FALSE	5878			FALSE	57	29	2680",
    "今	いま	now	4	TRUE	1220			FALSE	59	29	522",
    "今晩	こんばん	tonight	4	FALSE	1238			FALSE	59	29	531",
    "今朝	けさ	this morning	4	FALSE	1242			FALSE	59	30	533",
    "今週	こんしゅう	this week	4	FALSE	1244			FALSE	59	29	534",
    "新聞	しんぶん	newspaper	4	FALSE	7504			FALSE	60	29	3386",
    "聞く	きく	listen / ask	4	FALSE	11610			FALSE	60	29	5350",
    "英語	えいご	English	4	FALSE	11964			FALSE	61	34	5528",
    "旅行	りょこう	travel	4	FALSE	7552			FALSE	62	29	3410",
    "行う	おこなう	do / act	4	FALSE	12156			FALSE	62	29	5618",
    "行く	ゆく	go (rare)	4	TRUE	12166			FALSE	62	29	5622",
    "行く	いく	go (common)	4	TRUE	12168			FALSE	62	30	5623",
    "銀行	ぎんこう	bank	4	FALSE	14159			FALSE	62	29	6537",
    "飛行機	ひこうき	airplane	4	FALSE	14728			FALSE	62	31	6827",
    "来る	くる	come	4	TRUE	8093			FALSE	63	34	3667",
    "来週	らいしゅう	next week	4	FALSE	8105			FALSE	63	29	3673",
    "東	ひがし	east	4	FALSE	8109			FALSE	64	29	3676",
    "西	にし	west	4	FALSE	12314			FALSE	65	29	5697",
    "北	きた	north	4	FALSE	2918			FALSE	66	29	1313",
    "南	みなみ	south	4	FALSE	2995			FALSE	67	29	1353",
    "外	そと	outside	4	TRUE	4270			FALSE	68	29	1930",
    "外	ほか	another / other	4	TRUE	4271			FALSE	68	29	1931",
    "長い	ながい	long	4	FALSE	14189			FALSE	70	30	6556",
    "電話	でんわ	telephone	4	FALSE	14495			FALSE	71	29	6709",
    "お母さん	おかあさん	mother	4	FALSE	323			FALSE	72	29	124",
    "伯母	おば	aunt	4	FALSE	1492			FALSE	72	29	640",
    "母	はは	mother	4	FALSE	8583			FALSE	72	29	3917",
    "お父さん	おとうさん	father	4	FALSE	330			FALSE	73	29	126",
    "伯父	おじ	uncle	4	FALSE	1498			FALSE	73	29	642",
    "父	ちち	father	4	FALSE	9643			FALSE	73	32	4416",
    "毎晩	まいばん	every night	4	FALSE	8600			FALSE	74	29	3927",
    "毎朝	まいあさ	every morning	4	FALSE	8606			FALSE	74	29	3930",
    "毎週	まいしゅう	every week	4	FALSE	8608			FALSE	74	29	3931",
    "図書館	としょかん	library	4	FALSE	3902			FALSE	75	34	1752",
    "書く	かく	write	4	FALSE	7862			FALSE	75	29	3550",
    "辞書	じしょ	dictionary	4	FALSE	13402			FALSE	75	29	6190",
    "高い	たかい	tall / high / expensive	4	FALSE	14890			FALSE	76	31	6899",
    "話	はなし	talk / speech / tale	4	FALSE	12765			FALSE	77	30	5887",
    "話す	はなす	talk / speak	4	FALSE	12779			FALSE	77	29	5891",
    "読む	よむ	read	4	FALSE	12855			FALSE	78	29	5927",
    "友達	ともだち	friend	4	FALSE	3159			FALSE	79	34	1430",
    "食べる	たべる	eat	4	FALSE	14737			FALSE	80	29	6830",
    "食べ物	たべもの	food	4	FALSE	14740			FALSE	80	29	6831",
    "食堂	しょくどう	dining room	4	FALSE	14751			FALSE	80	34	6836",
    "何	なに	what (alone or before a vowel)	4	TRUE	1573			FALSE	81	33	678",
    "何	なん	what (before a consonant)	4	TRUE	1574			FALSE	81	29	679",
    "口	くち	mouth	4	FALSE	3371			FALSE	83	34	1498",
    "目	め	eye	4	FALSE	10327			FALSE	84	29	4739",
    "切手	きって	stamps	4	FALSE	2503			FALSE	85	29	1117",
    "手	て	hand	4	TRUE	6573			FALSE	85	29	2982",
    "手紙	てがみ	letter	4	FALSE	6630			FALSE	85	33	3005",
    "足	あし	leg / foot	4	TRUE	13225			FALSE	86	33	6108",
    "夕方	ゆうがた	evening	4	FALSE	4255			FALSE	87	29	1923",
    "字引	じびき	dictionary	4	FALSE	4685			FALSE	89	29	2126",
    "漢字	かんじ	kanji	4	FALSE	9340			FALSE	89	29	4275",
    "作文	さくぶん	composition	4	FALSE	1635			FALSE	90	33	707",
    "立つ	たつ	stand	4	FALSE	10973			FALSE	91	33	5040",
    "空	そら	(n) sky; the heavens	4	TRUE	10887			FALSE	92	29	5008",
    "町	まち	town (kunyomi)	4	TRUE	10108			FALSE	93	29	4629",
    "赤い	あかい	red	4	FALSE	13165			FALSE	94	29	6081",
    "青い	あおい	blue	4	FALSE	14517			FALSE	95	30	6721",
    "早い	はやい	early	4	FALSE	7629			FALSE	96	29	3445",
    "花	はな	flower	4	FALSE	11898			FALSE	97	29	5497",
    "花瓶	かびん	vase	4	FALSE	11908			FALSE	97	29	5502",
    "音楽	おんがく	music	4	FALSE	14583			FALSE	100	34	6754",
    "明るい	あかるい	bright	4	FALSE	7668			FALSE	101	29	3461",
    "風	かぜ	wind	4	TRUE	14690			FALSE	103	29	6811",
    "風邪	かぜ	cold	4	FALSE	14708			FALSE	103	29	6820",
    "切る	きる	cut	4	FALSE	2491			FALSE	104	29	1112",
    "切符	きっぷ	ticket	4	FALSE	2507			FALSE	104	34	1119",
    "体	からだ	body	4	FALSE	1547			FALSE	105	34	665",
    "言う	いう	to say (common)	4	TRUE	12610			FALSE	107	29	5814",
    "言葉	ことば	phrase / language	4	FALSE	12622			FALSE	107	29	5818",
    "この方	このかた	(this) gentleman / lady	4	FALSE	374			FALSE	108	33	140",
    "海	うみ	sea	4	FALSE	9000			FALSE	113	30	4121",
    "地図	ちず	map	4	FALSE	4010			FALSE	114	29	1806",
    "料理	りょうり	cooking	4	FALSE	7456			FALSE	117	29	3363",
    "少し	すこし	a little	4	FALSE	5131			FALSE	118	30	2343",
    "道	みち	way	4	FALSE	13833			FALSE	119	29	6378",
    "会う	あう	meet	4	FALSE	1451			FALSE	122	30	620",
    "会社	かいしゃ	company	4	FALSE	1457			FALSE	122	29	623",
    "答える	こたえる	answer	4	FALSE	11040			FALSE	123	33	5077",
    "家	いえ	house	4	TRUE	4894			FALSE	124	29	2230",
    "家内	かない	(my) wife	4	FALSE	4901			FALSE	124	29	2234",
    "家族	かぞく	family	4	FALSE	4909			FALSE	124	31	2238",
    "教室	きょうしつ	classroom	4	FALSE	7339			FALSE	125	29	3307",
    "喫茶店	きっさてん	coffee shop	4	FALSE	3784			FALSE	126	29	1694",
    "店	みせ	store	4	TRUE	5503			FALSE	126	34	2529",
    "古い	ふるい	old	4	FALSE	3384			FALSE	127	34	1505",
    "新しい	あたらしい	new	4	FALSE	7487			FALSE	128	33	3379",
    "両親	りょうしん	parents	4	FALSE	820			FALSE	129	29	337",
    "紙	かみ	(n) paper	4	TRUE	11143			FALSE	130	29	5136",
    "同じ	おなじ	the same	4	FALSE	3497			FALSE	132	29	1560",
    "色	いろ	color (kunyomi)	4	TRUE	11888			FALSE	133	34	5490",
    "茶色	ちゃいろ	brown	4	FALSE	11980			FALSE	133	29	5536",
    "黄色い	きいろい	yellow	4	FALSE	14958			FALSE	133	29	6933",
    "黒い	くろい	black	4	FALSE	14964			FALSE	134	33	6936",
    "知る	しる	know	4	FALSE	10607			FALSE	135	29	4860",
    "勉強	べんきょう	study	4	FALSE	2793			FALSE	136	34	1254",
    "強い	つよい	strong	4	FALSE	5715			FALSE	136	33	2608",
    "牛肉	ぎゅうにく	beef	4	FALSE	9675			FALSE	137	29	4431",
    "肉	にく	meat	4	FALSE	11637			FALSE	137	29	5362",
    "鳥肉 	とりにく	(n) chicken meat/	4	FALSE	14941			FALSE	137	29	6924",
    "野菜	やさい	vegetable	4	FALSE	14081			FALSE	139	29	6495",
    "売る	うる	sell	4	FALSE	4214			FALSE	140	31	1904",
    "買い物	かいもの	shopping	4	FALSE	13072			FALSE	141	29	6036",
    "買う	かう	buy	4	FALSE	13075			FALSE	141	29	6037",
    "教える	おしえる	teach / tell	4	FALSE	7329			FALSE	142	29	3303",
    "お茶	おちゃ	tea	4	FALSE	352			FALSE	143	33	133",
    "茶碗	ちゃわん	bowl	4	FALSE	11978			FALSE	143	32	5535",
    "牛乳	ぎゅうにゅう	milk	4	FALSE	9673			FALSE	144	29	4430",
    "鳥	とり	bird	4	FALSE	14938			FALSE	145	33	6922",
    "魚	さかな	fish	4	TRUE	14933			FALSE	146	29	6920",
    "帰る	かえる	return	4	FALSE	5352			FALSE	148	29	2454",
    "映画	えいが	movie	4	FALSE	7706			FALSE	151	31	3479",
    "映画館	えいがかん	movie / theater	4	FALSE	7708			FALSE	151	32	3480",
    "楽しい	たのしい	pleasant / enjoyable	4	FALSE	8285			FALSE	152	34	3769",
    "作る	つくる	make	4	FALSE	1625			FALSE	153	34	702",
    "歌	うた	song (N) (kunyomi)	4	TRUE	8438			FALSE	154	29	3845",
    "歌う	うたう	song (V) 	4	FALSE	8439			FALSE	154	30	3846",
    "兄弟	きょうだい	brother	4	FALSE	1971			FALSE	155	29	871",
    "弟	おとうと	younger brother	4	FALSE	5689			FALSE	155	29	2596",
    "お兄さん	おにいさん	older brother	4	FALSE	242			FALSE	156	29	104",
    "兄	あに	(my) brother	4	FALSE	1970			FALSE	156	34	870",
    "お姉さん	おねえさん	older sister	4	FALSE	263			FALSE	157	34	110",
    "姉	あね	(my) sister	4	FALSE	4610			FALSE	157	30	2088",
    "妹	いもうと	younger sister	4	FALSE	4608			FALSE	158	29	2086",
    "走る	はしる	run	4	FALSE	13181			FALSE	159	29	6087",
    "散歩	さんぽ	take a walk	4	FALSE	7378			FALSE	160	29	3323",
    "歩く	あるく	walk	4	FALSE	8509			FALSE	160	29	3879",
    "近い	ちかい	near	4	FALSE	13450			FALSE	161	29	6212",
    "近く	ちかく	neighborhood	4	FALSE	13452			FALSE	161	30	6213",
    "冬	ふゆ	winter	4	FALSE	2275			FALSE	162	29	1022",
    "春	はる	spring	4	FALSE	7711			FALSE	163	29	3481",
    "夏	なつ	summer	4	FALSE	4247			FALSE	164	29	1919",
    "秋	あき	autumn / fall	4	FALSE	10811			FALSE	165	29	4966",
    "朝	あさ	morning	4	FALSE	7978			FALSE	166	29	3604",
    "朝御飯	あさごはん	breakfast	4	FALSE	7982			FALSE	166	31	3606",
    "昼	ひる	noon	4	FALSE	7719			FALSE	167	29	3486",
    "昼御飯	ひるごはん	lunch	4	FALSE	7725			FALSE	167	29	3489",
    "夜	よる	night	4	TRUE	4314			FALSE	168	29	1952",
    "止まる	とまる	stop	4	FALSE	8451			FALSE	169	31	3852",
    "～台	～だい	(n-suf) counter for machines	4	FALSE	42			FALSE	170	29	21",
    "台所	だいどころ	kitchen	4	FALSE	3418			FALSE	170	29	1522",
    "広い	ひろい	wide / spacious 	4	FALSE	5469			FALSE	172	29	2513",
    "背広	せびろ	suit	4	FALSE	11676			FALSE	172	31	5386",
    "動物	どうぶつ	animal	4	FALSE	2814			FALSE	173	29	1264",
    "建物	たてもの	building	4	FALSE	5560			FALSE	173	29	2556",
    "果物	くだもの	fruit	4	FALSE	8139			FALSE	173	29	3692",
    "荷物	にもつ	parcel / baggage	4	FALSE	12003			FALSE	173	29	5546",
    "飲み物	のみもの	drinks	4	FALSE	14772			FALSE	173	31	6846",
    "仕事	しごと	work	4	FALSE	1274			FALSE	174	34	546",
    "死ぬ	しぬ	die	4	FALSE	8535			FALSE	175	29	3893",
    "安い	やすい	cheap	4	FALSE	4756			FALSE	177	29	2162",
    "意味	いみ	meaning	4	FALSE	6331			FALSE	178	29	2870",
    "住む	すむ	live	4	FALSE	1537			FALSE	180	29	660",
    "問題	もんだい	problem	4	FALSE	3759			FALSE	181	29	1681",
    "質問	しつもん	question	4	FALSE	13139			FALSE	181	33	6068",
    "医者	いしゃ	doctor	4	FALSE	2947			FALSE	183	29	1328",
    "～屋	～や	~ store / shop	4	FALSE	86			FALSE	184	29	40",
    "部屋	へや	room	4	FALSE	13954			FALSE	184	33	6434",
    "重い	おもい	heavy	4	FALSE	14033			FALSE	188	29	6474",
    "動く	うごく	move	4	FALSE	2800			FALSE	190	29	1257",
    "授業	じゅぎょう	class	4	FALSE	7016			FALSE	194	34	3161",
    "駅	えき	station	4	FALSE	14846			FALSE	195	29	6880",
    "洋服	ようふく	(western) clothes	4	FALSE	8913			FALSE	196	32	4080",
    "悪い	わるい	bad	4	FALSE	6269			FALSE	198	29	2842",
    "飲む	のむ	drink	4	FALSE	14779			FALSE	201	31	6848",
    "使う	つかう	use	4	FALSE	1654			FALSE	203	29	716",
    "宿題	しゅくだい	homework	4	FALSE	4930			FALSE	205	33	2249",
    "起きる	おきる	get up	4	FALSE	13189			FALSE	207	29	6091",
    "病院	びょういん	hospital	4	FALSE	10193			FALSE	209	29	4671",
    "開く	あく	to be open	4	TRUE	14229			FALSE	210	29	6574",
    "開ける	あける	open	4	FALSE	14233			FALSE	210	29	6576",
    "写真	しゃしん	photograph	4	FALSE	2272			FALSE	212	29	1020",
    "送る	おくる	to send	4	FALSE	13561			FALSE	216	29	6258",
    "持つ	もつ	have / take / hold / carry	4	FALSE	6889			FALSE	217	29	3109",
    "待つ	まつ	wait	4	FALSE	5866			FALSE	218	29	2673",
    "終わる	おわる	(v5k,vi) finish	4	FALSE	11211			FALSE	220	29	5166",
    "始まる	はじまる	begin	4	FALSE	4616			FALSE	221	29	2091",
    "練習	れんしゅう	practice	4	FALSE	11439			FALSE	224	29	5267",
    "習う	ならう	learn	4	FALSE	11558			FALSE	224	29	5326",
    "着く	つく	arrive	4	FALSE	10546			FALSE	226	29	4834",
    "着る	きる	put on / wear	4	FALSE	10554			FALSE	226	34	4837",
    "服	ふく	clothes	4	FALSE	7958			FALSE	227	29	3596",
    "御飯	ごはん	rice / meal	4	FALSE	5954			FALSE	236	34	2711",
    "晩御飯	ばんごはん	dinner	4	FALSE	7765			FALSE	236	29	3508",
    "借りる	かりる	borrow	4	FALSE	1806			FALSE	241	29	793",
    "貸す	かす	lend	4	FALSE	13083			FALSE	244	29	6040",
    "私	わたくし	I (humble form)	4	TRUE	10800			FALSE	245	31	4960",
    "初めに 	はじめに	(expr) to begin with/first of all/	4	FALSE	2532			FALSE	541	29	1133"
]

const Words = csv.map(
    (entry, index) => {
        const cols = entry.split('\t');
        return {
            idx: index + 2,
            word: cols[0],
            answer: cols[1],
            hint: cols[2],
            ambiguous: "TRUE" === cols[4],
            firstCharRow: parseInt(cols[5]),
            testKanji: parseInt(cols[9])
        }
    }
)

export default Words
