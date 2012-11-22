/*
 contains a latin-english dictionnaries
*/

sourahNames = ["Al Faatiha" ,"Al Baqara" ,"Aal i Imraan" ,"An Nisaa" ,"Al Maaida" ,"Al An'aam" ,"Al A'raaf" ,"Al Anfaal" ,"At Tawba" ,"Yunus" ,"Hud" ,"Yusuf" ,"Ar Ra'd" ,"Ibrahim" ,"Al Hijr" ,"An Nahl" ,"Al Israa" ,"Al Kahf" ,"Maryam" ,"Taa Haa" ,"Al Anbiyaa" ,"Al Hajj" ,"Al Muminoon" ,"An Noor" ,"Al Furqaan" ,"Ash Shu'araa" ,"An Naml" ,"Al Qasas" ,"Al Ankaboot" ,"Ar Room" ,"Luqman" ,"As Sajda" ,"Al Ahzaab" ,"Saba" ,"Faatir" ,"Yaseen" ,"As Saaffaat" ,"Saad" ,"Az Zumar" ,"Al Ghaafir" ,"Fussilat" ,"Ash Shura" ,"Az Zukhruf" ,"Ad Dukhaan" ,"Al Jaathiya" ,"Al Ahqaf" ,"Muhammad" ,"Al Fath" ,"Al Hujuraat" ,"Qaaf" ,"Adh Dhaariyat" ,"At Tur" ,"An Najm" ,"Al Qamar" ,"Ar Rahmaan" ,"Al Waaqia" ,"Al Hadid" ,"Al Mujaadila" ,"Al Hashr" ,"Al Mumtahana" ,"As Saff" ,"Al Jumu'a" ,"Al Munaafiqoon" ,"At Taghaabun" ,"At Talaaq" ,"At Tahrim" ,"Al Mulk" ,"Al Qalam" ,"Al Haaqqa" ,"Al Ma'aarij" ,"Nooh" ,"Al Jinn" ,"Al Muzzammil" ,"Al Muddaththir" ,"Al Qiyaama" ,"Al Insaan" ,"Al Mursalaat" ,"An Naba" ,"An Naazi'aat" ,"Abasa" ,"At Takwir" ,"Al Infitaar" ,"Al Mutaffifin" ,"Al Inshiqaaq" ,"Al Burooj" ,"At Taariq" ,"Al A'laa" ,"Al Ghaashiya" ,"Al Fajr" ,"Al Balad" ,"Ash Shams" ,"Al Lail" ,"Ad Dhuhaa" ,"Ash Sharh" ,"At Tin" ,"Al Alaq" ,"Al Qadr" ,"Al Bayyina" ,"Az Zalzala" ,"Al Aadiyaat" ,"Al Qaari'a" ,"At Takaathur" ,"Al Asr" ,"Al Humaza" ,"Al Fil" ,"Quraish" ,"Al Maa'un" ,"Al Kawthar" ,"Al Kaafiroon" ,"An Nasr" ,"Al Masad" ,"Al Ikhlaas" ,"Al Falaq" ,"An Naas"];

receiters = ["AbdulSamad_64kbps_QuranExplorer.Com" ,"Abdul_Basit_Mujawwad_128kbps" ,"Abdul_Basit_Murattal_192kbps" ,"Abdul_Basit_Murattal_64kbps" ,"Abdullaah_3awwaad_Al-Juhaynee_128kbps" ,"Abdullah_Basfar_192kbps" ,"Abdullah_Basfar_32kbps" ,"Abdullah_Basfar_64kbps" ,"Abdullah_Matroud_128kbps" ,"Abdurrahmaan_As-Sudais_192kbps" ,"Abdurrahmaan_As-Sudais_64kbps" ,"Abu_Bakr_Ash-Shaatree_128kbps" ,"Abu_Bakr_Ash-Shaatree_64kbps" ,"Ahmed_Neana_128kbps" ,"Ahmed_ibn_Ali_al-Ajamy_128kbps_ketaballah.net" ,"Ahmed_ibn_Ali_al-Ajamy_64kbps_QuranExplorer.Com" ,"Alafasy_128kbps" ,"Alafasy_64kbps" ,"Ghamadi_40kbps" ,"Hani_Rifai_192kbps" ,"Hani_Rifai_64kbps" ,"Hudhaify_128kbps" ,"Hudhaify_32kbps" ,"Hudhaify_64kbps" ,"Husary_128kbps" ,"Husary_128kbps_Mujawwad" ,"Husary_64kbps" ,"Husary_Mujawwad_64kbps" ,"Ibrahim_Akhdar_32kbps" ,"Maher_AlMuaiqly_64kbps" ,"Menshawi_16kbps" ,"Minshawy_Mujawwad_192kbps" ,"Minshawy_Mujawwad_64kbps" ,"Minshawy_Murattal_128kbps" ,"Mohammad_al_Tablaway_128kbps" ,"Mohammad_al_Tablaway_64kbps" ,"Muhammad_AbdulKareem_128kbps" ,"Muhammad_Ayyoub_128kbps" ,"Muhammad_Ayyoub_64kbps" ,"Muhammad_Jibreel_128kbps" ,"Muhammad_Jibreel_64kbps" ,"Muhsin_Al_Qasim_192kbps" ,"Parhizgar_48kbps" ,"Salaah_AbdulRahman_Bukhatir_128kbps" ,"Salah_Al_Budair_128kbps" ,"Saood_ash-Shuraym_128kbps" ,"Saood_ash-Shuraym_64kbps" ,"khalefa_al_tunaiji_64kbps" ,"mahmoud_ali_al_banna_32kbps" ,"warsh/warsh_ibrahim_aldosary_128kbps"];

isRTL = false;

dicoVars = {
 'VALID_SOURAH_SELECTION': 'Merci de vous assurer du numéro de la sourate'
 , 'START_END_INTERVAL': 'Les versets de début et de fin doivent être comprises dans un intervalle allant de 1 à '
 , 'REPEAT_TIME_MIN_VAL': 'Le nombre de répétition doit être supérieur à 1'
 , 'REPEAT_ALL_TIME_MIN_VAL': 'Le nombre de répétition de tous les versets selectionnés doit être supérieur à 1'
 , 'START_AYAH_MIN_VAL': 'Le verset de début doit être supérieur à 1'
 , 'START_AYAH_MAX_VAL':  'Le verset de début doit être inférieur à '
 , 'END_AYAH_MAX_VAL':  'Le veret de fin doit être inférieur à '
 , 'END_AYAH_MIN_VAL': 'Le verset de fin doit être supérieur à '
 , 'YES_REPEAT_AFTER_RECITER': 'Les paramètres vont être appliqués à partir du prochain verset'
};

dico = {
 'SOURAH': 'Sourate:' 
 , 'START': 'Début:'
 , 'END': 'Fin:'
 , 'REPEAT': 'Le nombre de répétition de chaque verset'
 , 'REPEAT-ALL': 'Le nombre de répétition de tous les versets sélctionnés'
 , 'GO': 'Commencer la lecture'
 , 'TIMES': 'Une/Plusieurs fois'
 , 'REPEAT-ALL-FOR': 'Répéter'
 , 'INTERVAL': 'Lire les versets'
 , 'FROM': 'De'
 , 'TO': 'Jusqu’à'
 , '0_HINT': 'Mettre 0 pour répéter sans arrêt'
 , '1_AND_2_HINT': 'En saisissant le chiffre 2 les versets vont être répétés  deux  fois,  et en saisissant le chiffre 3 les versets vont être répétés 3 fois'
 , 'REPEAT-AFTER-RECITER': 'Voulez vous réciter après le lecteur'
 , 'YES': 'Oui' 
 , 'NO': 'Non'
 , 'SHOW-HIDE':  'Afficher /  Masquer'
 , 'ADVANCED': 'Options avancées'
 , 'ADVANCED-SETTING-NOTES': 'Vous pouvez changer les paramétres pendant le fonctionnement'
 , 'GET_RECITATION': 'Changer la récitation'
 , 'PLEASE-WAIT': 'Veuillez patienter'
};