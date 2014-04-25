/*
	This file define an indexed array:
		index: the sourah number
		value: number of verses
*/

var isRTL = false;
var dicoVars = {};

reciters = {
   "1":{
      "name":"Abdul Basit Murattal"
   },
   "2":{
      "name":"Abdul Basit Murattal"
   },
   "3":{
      "name":"Abdul Basit Mujawwad"
   },
   "4":{
      "name":"Abdullah Basfar"
   },
   "5":{
      "name":"Abdullah Basfar"
   },
   "6":{
      "name":"Abdullah Basfar"
   },
   "7":{
      "name":"Abdurrahmaan As-Sudais"
   },
   "8":{
      "name":"Abdurrahmaan As-Sudais"
   },
   "9":{
      "name":"AbdulSamad"
   },
   "10":{
      "name":"Abu Bakr Ash-Shaatree"
   },
   "11":{
      "name":"Abu Bakr Ash-Shaatree"
   },
   "12":{
      "name":"Ahmed ibn Ali al-Ajamy"
   },
   "13":{
      "name":"Ahmed ibn Ali al-Ajamy"
   },
   "14":{
      "name":"Alafasy"
   },
   "15":{
      "name":"Alafasy"
   },
   "16":{
      "name":"Ghamadi"
   },
   "17":{
      "name":"Hani Rifai"
   },
   "18":{
      "name":"Hani Rifai"
   },
   "19":{
      "name":"Husary"
   },
   "20":{
      "name":"Husary"
   },
   "21":{
      "name":"Husary Mujawwad"
   },
   "22":{
      "name":"Husary Mujawwad"
   },
   "23":{
      "name":"Hudhaify"
   },
   "24":{
      "name":"Hudhaify"
   },
   "25":{
      "name":"Hudhaify"
   },
   "26":{
      "name":"Ibrahim Akhdar"
   },
   "28":{
      "name":"Maher Al Muaiqly"
   },
   "30":{
      "name":"Menshawi"
   },
   "32":{
      "name":"Minshawy Mujawwad"
   },
   "33":{
      "name":"Minshawy Mujawwad"
   },
   "34":{
      "name":"Minshawy Murattal"
   },
   "35":{
      "name":"Mohammad al Tablaway"
   },
   "36":{
      "name":"Mohammad al Tablaway"
   },
   "37":{
      "name":"Muhammad Ayyoub"
   },
   "38":{
      "name":"Muhammad Ayyoub"
   },
   "40":{
      "name":"Muhammad Jibreel"
   },
   "41":{
      "name":"Muhammad Jibreel"
   },
   "43":{
      "name":"Saood bin Ibraaheem Ash-Shuraym"
   },
   "44":{
      "name":"Saood bin Ibraaheem Ash-Shuraym"
   },
   "49":{
      "name" : "Parhizgar_64Kbps"
   },
   "51":{
      "name":"Salaah AbdulRahman Bukhatir"
   },
   "52":{
      "name":"Muhsin Al Qasim"
   },
   "53":{
      "name":"Abdullaah 3awwaad Al-Juhaynee"
   },
   "54":{
      "name":"Salah Al Budair"
   },
   "55":{
      "name":"Abdullah Matroud"
   },
   "56":{
      "name":"Ahmed Neana"
   },
   "57":{
      "name":"Muhammad AbdulKareem"
   },
   "58":{
     "name":"Khalefa Al-Tunaiji"
   },
   "59":{
     "name":"Mahmoud Ali Al-Banna"
   },
   "60":{
     "name":"(Warsh) Ibrahim Al-Dosary"
   },
   "61":{
     "name":"(Warsh) Yassin Al-Jazaery"
   },
   "65":{
     "name":"Husary (Muallim)"
   },
   "66":{
     "name":"Khalid Abdullah al-Qahtanee"
   }
};

recitations = {
   "1":{
	   "subfolder":"Abdul_Basit_Murattal_64kbps",
	   "bitrate":"64kbps"
   },
   "2":{
      "subfolder":"Abdul_Basit_Murattal_192kbps",
      "bitrate":"192kbps"
   },
   "3":{
      "subfolder":"Abdul_Basit_Mujawwad_128kbps",
      "bitrate":"128kbps"
   },
   "4":{
      "subfolder":"Abdullah_Basfar_32kbps",
      "bitrate":"32kbps"
   },
   "5":{
      "subfolder":"Abdullah_Basfar_64kbps",
      "bitrate":"64kbps"
   },
   "6":{
      "subfolder":"Abdullah_Basfar_192kbps",
      "bitrate":"192kbps"
   },
   "7":{
      "subfolder":"Abdurrahmaan_As-Sudais_64kbps",
      "bitrate":"64kbps"
   },
   "8":{
      "subfolder":"Abdurrahmaan_As-Sudais_192kbps",
      "bitrate":"192kbps"
   },
   "9":{
      "subfolder":"AbdulSamad_64kbps_QuranExplorer.Com",
      "bitrate":"64kbps"
   },
   "10":{
      "subfolder":"Abu_Bakr_Ash-Shaatree_64kbps",
      "bitrate":"64kbps"
   },
   "11":{
      "subfolder":"Abu_Bakr_Ash-Shaatree_128kbps",
      "bitrate":"128kbps"
   },
   "12":{
      "subfolder":"Ahmed_ibn_Ali_al-Ajamy_64kbps_QuranExplorer.Com",
      "bitrate":"64kbps"
   },
   "13":{
	"subfolder":"Ahmed_ibn_Ali_al-Ajamy_128kbps_ketaballah.net",
	"bitrate":"128kbps"
   },
   "14":{
      "subfolder":"Alafasy_64kbps",
      "bitrate":"64kbps"
   },
   "15":{
      "subfolder":"Alafasy_128kbps",
      "bitrate":"128kbps"
   },
   "16":{
      "subfolder":"Ghamadi_40kbps",
      "bitrate":"40kbps"
   },
   "17":{
      "subfolder":"Hani_Rifai_64kbps",
      "bitrate":"64kbps"
   },
   "18":{
      "subfolder":"Hani_Rifai_192kbps",
      "bitrate":"192kbps"
   },
   "19":{
      "subfolder":"Husary_64kbps",
      "bitrate":"64kbps"
   },
   "20":{
      "subfolder":"Husary_128kbps",
      "bitrate":"128kbps"
   },
   "21":{
      "subfolder":"Husary_Mujawwad_64kbps",
      "bitrate":"64kbps"
   },
   "22":{
      "subfolder":"Husary_128kbps_Mujawwad",
      "bitrate":"128kbps"
   },
   "23":{
      "subfolder":"Hudhaify_32kbps",
      "bitrate":"32kbps"
   },
   "24":{
      "subfolder":"Hudhaify_64kbps",
      "bitrate":"64kbps"
   },
   "25":{
      "subfolder":"Hudhaify_128kbps",
      "bitrate":"128kbps"
   },
   "26":{
      "subfolder":"Ibrahim_Akhdar_32kbps",
      "bitrate":"32kbps"
   },
   "28":{
	"subfolder":"Maher_AlMuaiqly_64kbps",
	"bitrate":"64kbps"
   },
   "30":{
      "subfolder":"Menshawi_16kbps",
      "bitrate":"16kbps"
   },
   "32":{
      "subfolder":"Minshawy_Mujawwad_64kbps",
      "bitrate":"64kbps"
   },
   "33":{
      "subfolder":"Minshawy_Mujawwad_192kbps",
      "bitrate":"192kbps"
   },
   "34":{
      "subfolder":"Minshawy_Murattal_128kbps",
      "bitrate":"128kbps"
   },
   "35":{
      "subfolder":"Mohammad_al_Tablaway_64kbps",
      "bitrate":"64kbps"
   },
   "36":{
      "subfolder":"Mohammad_al_Tablaway_128kbps",
      "bitrate":"128kbps"
   },
   "37":{
      "subfolder":"Muhammad_Ayyoub_128kbps",
      "bitrate":"128kbps"
   },
   "38":{
      "subfolder":"Muhammad_Ayyoub_64kbps",
      "bitrate":"64kbps"
   },
   "40":{
      "subfolder":"Muhammad_Jibreel_64kbps",
      "bitrate":"64kbps"
   },
   "41":{
      "subfolder":"Muhammad_Jibreel_128kbps",
      "bitrate":"128kbps"
   },
   "43":{
      "subfolder":"Saood_ash-Shuraym_64kbps",
      "bitrate":"64kbps"
   },
   "44":{
      "subfolder":"Saood_ash-Shuraym_128kbps",
      "bitrate":"128kbps"
   },
   "49":{
      "subfolder":"Parhizgar_48kbps",
      "bitrate":"64Kbps"
   },
   "51":{
      "subfolder":"Salaah_AbdulRahman_Bukhatir_128kbps",
      "bitrate":"128kbps"
   },
   "52":{
      "subfolder":"Muhsin_Al_Qasim_192kbps",
      "bitrate":"192kbps"
   },
   "53":{
      "subfolder":"Abdullaah_3awwaad_Al-Juhaynee_128kbps",
      "bitrate":"128kbps"
   },
   "54":{
      "subfolder":"Salah_Al_Budair_128kbps",
      "bitrate":"128kbps"
   },
   "55":{
      "subfolder":"Abdullah_Matroud_128kbps",
      "bitrate":"128kbps"
   },
   "56":{
      "subfolder":"Ahmed_Neana_128kbps",
      "bitrate":"128kbps"
   },
   "57":{
      "subfolder":"Muhammad_AbdulKareem_128kbps",
      "bitrate":"128kbps"
   },
   "58":{
     "subfolder":"khalefa_al_tunaiji_64kbps",
     "bitrate":"64kbps"
   },
   "59":{
     "subfolder":"mahmoud_ali_al_banna_32kbps",
     "bitrate":"32kbps"
   },
   "60":{
     "subfolder":"warsh/warsh_ibrahim_aldosary_128kbps",
     "bitrate":"128kbps"
   },
   "61":{
     "subfolder":"warsh/warsh_yassin_al_jazaery_64kbps",
     "bitrate":"64kbps"
   },
   "65":{
     "subfolder":"Husary_Muallim_128kbps",
     "bitrate":"128kbps"
   },
   "66":{
     "subfolder":"Khaalid_Abdullaah_al-Qahtaanee_192kbps",
     "bitrate":"192kbps"
   }
};

ayahPerSourah = {
	'001':7
	,'002': 286
	,'003': 200
	,'004': 176
	,'005': 120
	,'006':165
	,'007':206
	,'008':75
	,'009':129
	,'010':109
	,'011':123
	,'012':111
	,'013':43
	,'014':52
	,'015':99
	,'016':128
	,'017':111
	,'018':110
	,'019':98
	,'020':135
	,'021':112
	,'022': 78
	,'023': 118
	,'024': 64
	,'025': 77
	,'026': 227
	,'027': 93
	,'028': 88
	,'029': 69
	,'030':60
	,'031':34
	,'032':30
	,'033':73
	,'034':54
	,'035':45
	,'036':83
	,'037':182
	,'038':88
	,'039':75
	,'040':85
	,'041':54
	,'042':53
	,'043':89
	,'044':59
	,'045':37
	,'046':35
	,'047':38
	,'048':29
	,'049':18
	,'050':45
	,'051':60
	,'052':49
	,'053':62
	,'054':55
	,'055':78
	,'056':96
	,'057':29
	,'058':22
	,'059':24
	,'060':13
	,'061':14
	,'062':11
	,'063':11
	,'064':18
	,'065':12
	,'066':12
	,'067':30
	,'068':52
	,'069':52
	,'070':44
	,'071':28
	,'072':28
	,'073':20
	,'074':56
	,'075':40
	,'076':31
	,'077':50
	,'078':40
	,'079':46
	,'080':42
	,'081':29
	,'082':19
	,'083':36
	,'084':25
	,'085':22
	,'086':17
	,'087':19
	,'088':26
	,'089':30
	,'090':20
	,'091':15
	,'092':21
	,'093':11
	,'094':8
	,'095':8
	,'096':19
	,'097':5
	,'098':8
	,'099':8
	,'100':11
	,'101':11
	,'102':8
	,'103':3
	,'104':9
	,'105':5
	,'106':4
	,'107':7
	,'108':3
	,'109':6
	,'110':3
	,'111':5
	,'112':4
	,'113':5
	,'114':6
};
