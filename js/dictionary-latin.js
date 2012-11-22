/*
 contains a latin-english dictionnaries
*/

sourahNames = ["Al Faatiha" ,"Al Baqara" ,"Aal i Imraan" ,"An Nisaa" ,"Al Maaida" ,"Al An'aam" ,"Al A'raaf" ,"Al Anfaal" ,"At Tawba" ,"Yunus" ,"Hud" ,"Yusuf" ,"Ar Ra'd" ,"Ibrahim" ,"Al Hijr" ,"An Nahl" ,"Al Israa" ,"Al Kahf" ,"Maryam" ,"Taa Haa" ,"Al Anbiyaa" ,"Al Hajj" ,"Al Muminoon" ,"An Noor" ,"Al Furqaan" ,"Ash Shu'araa" ,"An Naml" ,"Al Qasas" ,"Al Ankaboot" ,"Ar Room" ,"Luqman" ,"As Sajda" ,"Al Ahzaab" ,"Saba" ,"Faatir" ,"Yaseen" ,"As Saaffaat" ,"Saad" ,"Az Zumar" ,"Al Ghaafir" ,"Fussilat" ,"Ash Shura" ,"Az Zukhruf" ,"Ad Dukhaan" ,"Al Jaathiya" ,"Al Ahqaf" ,"Muhammad" ,"Al Fath" ,"Al Hujuraat" ,"Qaaf" ,"Adh Dhaariyat" ,"At Tur" ,"An Najm" ,"Al Qamar" ,"Ar Rahmaan" ,"Al Waaqia" ,"Al Hadid" ,"Al Mujaadila" ,"Al Hashr" ,"Al Mumtahana" ,"As Saff" ,"Al Jumu'a" ,"Al Munaafiqoon" ,"At Taghaabun" ,"At Talaaq" ,"At Tahrim" ,"Al Mulk" ,"Al Qalam" ,"Al Haaqqa" ,"Al Ma'aarij" ,"Nooh" ,"Al Jinn" ,"Al Muzzammil" ,"Al Muddaththir" ,"Al Qiyaama" ,"Al Insaan" ,"Al Mursalaat" ,"An Naba" ,"An Naazi'aat" ,"Abasa" ,"At Takwir" ,"Al Infitaar" ,"Al Mutaffifin" ,"Al Inshiqaaq" ,"Al Burooj" ,"At Taariq" ,"Al A'laa" ,"Al Ghaashiya" ,"Al Fajr" ,"Al Balad" ,"Ash Shams" ,"Al Lail" ,"Ad Dhuhaa" ,"Ash Sharh" ,"At Tin" ,"Al Alaq" ,"Al Qadr" ,"Al Bayyina" ,"Az Zalzala" ,"Al Aadiyaat" ,"Al Qaari'a" ,"At Takaathur" ,"Al Asr" ,"Al Humaza" ,"Al Fil" ,"Quraish" ,"Al Maa'un" ,"Al Kawthar" ,"Al Kaafiroon" ,"An Nasr" ,"Al Masad" ,"Al Ikhlaas" ,"Al Falaq" ,"An Naas"];

receiters = ["AbdulSamad_64kbps_QuranExplorer.Com" ,"Abdul_Basit_Mujawwad_128kbps" ,"Abdul_Basit_Murattal_192kbps" ,"Abdul_Basit_Murattal_64kbps" ,"Abdullaah_3awwaad_Al-Juhaynee_128kbps" ,"Abdullah_Basfar_192kbps" ,"Abdullah_Basfar_32kbps" ,"Abdullah_Basfar_64kbps" ,"Abdullah_Matroud_128kbps" ,"Abdurrahmaan_As-Sudais_192kbps" ,"Abdurrahmaan_As-Sudais_64kbps" ,"Abu_Bakr_Ash-Shaatree_128kbps" ,"Abu_Bakr_Ash-Shaatree_64kbps" ,"Ahmed_Neana_128kbps" ,"Ahmed_ibn_Ali_al-Ajamy_128kbps_ketaballah.net" ,"Ahmed_ibn_Ali_al-Ajamy_64kbps_QuranExplorer.Com" ,"Alafasy_128kbps" ,"Alafasy_64kbps" ,"Ghamadi_40kbps" ,"Hani_Rifai_192kbps" ,"Hani_Rifai_64kbps" ,"Hudhaify_128kbps" ,"Hudhaify_32kbps" ,"Hudhaify_64kbps" ,"Husary_128kbps" ,"Husary_128kbps_Mujawwad" ,"Husary_64kbps" ,"Husary_Mujawwad_64kbps" ,"Ibrahim_Akhdar_32kbps" ,"Maher_AlMuaiqly_64kbps" ,"Menshawi_16kbps" ,"Minshawy_Mujawwad_192kbps" ,"Minshawy_Mujawwad_64kbps" ,"Minshawy_Murattal_128kbps" ,"Mohammad_al_Tablaway_128kbps" ,"Mohammad_al_Tablaway_64kbps" ,"Muhammad_AbdulKareem_128kbps" ,"Muhammad_Ayyoub_128kbps" ,"Muhammad_Ayyoub_64kbps" ,"Muhammad_Jibreel_128kbps" ,"Muhammad_Jibreel_64kbps" ,"Muhsin_Al_Qasim_192kbps" ,"Parhizgar_48kbps" ,"Salaah_AbdulRahman_Bukhatir_128kbps" ,"Salah_Al_Budair_128kbps" ,"Saood_ash-Shuraym_128kbps" ,"Saood_ash-Shuraym_64kbps" ,"khalefa_al_tunaiji_64kbps" ,"mahmoud_ali_al_banna_32kbps" ,"warsh/warsh_ibrahim_aldosary_128kbps"];

isRTL = false;

dicoVars = {
	'VALID_SOURAH_SELECTION': 'Please select a valid sourah'
	, 'START_END_INTERVAL': 'Starting/Ending should be within the interval of 1 and '
	, 'REPEAT_TIME_MIN_VAL': 'Repeat times must be greated than 1'
	, 'REPEAT_ALL_TIME_MIN_VAL': 'Repeat all times must be greated than 0'
	, 'START_AYAH_MIN_VAL': 'Start ayah must be greater than 1'
	, 'START_AYAH_MAX_VAL': 'Start ayah cannot be greater than '
	, 'END_AYAH_MAX_VAL': 'End ayah cannot be greater than '
	, 'END_AYAH_MIN_VAL': 'End ayah must be greater than start ayah '
	, 'START_END_FIELD_TYPE': 'START_END_FIELD_TYPE'
	, 'REPEAT_TIMES_FIELD_TYPE': 'REPEAT_TIMES_FIELD_TYPE'
	, 'YES_REPEAT_AFTER_RECITER': 'This will take effect starting from the next played ayah'
};