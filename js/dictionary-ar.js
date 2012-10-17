
/*
Contains the arabic dictionnarie

default: latin-english
*/

sourahNames = ["الفاتحة" ,"البقرة" ,"آل عمران" ,"النساء" ,"المائدة" ,"الأنعام" ,"الأعراف" ,"الأنفال" ,"التوبة" ,"يونس" ,"هود" ,"يوسف" ,"الرعد" ,"إبراهيم" ,"الحجر" ,"النحل" ,"الإسراء" ,"الكهف" ,"مريم" ,"طه" ,"الأنبياء" ,"الحج" ,"المؤمنون" ,"النّور" ,"الفرقان" ,"الشعراء" ,"النّمل" ,"القصص" ,"العنكبوت" ,"الرّوم" ,"لقمان" ,"السجدة" ,"الأحزاب" ,"سبأ" ,"فاطر" ,"يس" ,"الصافات" ,"ص" ,"الزمر" ,"غافر" ,"فصّلت" ,"الشورى" ,"الزخرف" ,"الدّخان" ,"الجاثية" ,"الأحقاف" ,"محمد" ,"الفتح" ,"الحجرات" ,"ق" ,"الذاريات" ,"الطور" ,"النجم" ,"القمر" ,"الرحمن" ,"الواقعة" ,"الحديد" ,"المجادلة" ,"الحشر" ,"الممتحنة" ,"الصف" ,"الجمعة" ,"المنافقون" ,"التغابن" ,"الطلاق" ,"التحريم" ,"الملك" ,"القلم" ,"الحاقة" ,"المعارج" ,"نوح" ,"الجن" ,"المزّمّل" ,"المدّثر" ,"القيامة" ,"الإنسان" ,"المرسلات" ,"النبأ" ,"النازعات" ,"عبس" ,"التكوير" ,"الإنفطار" ,"المطفّفين" ,"الإنشقاق" ,"البروج" ,"الطارق" ,"الأعلى" ,"الغاشية" ,"الفجر" ,"البلد" ,"الشمس" ,"الليل" ,"الضحى" ,"الشرح" ,"التين" ,"العلق" ,"القدر" ,"البينة" ,"الزلزلة" ,"العاديات" ,"القارعة" ,"التكاثر" ,"العصر" ,"الهمزة" ,"الفيل" ,"قريش" ,"الماعون" ,"الكوثر" ,"الكافرون" ,"النصر" ,"المسد" ,"الإخلاص" ,"الفلق" ,"النّاس"];
receiters = ["AbdulSamad_64kbps_QuranExplorer.Com" ,"Abdul_Basit_Mujawwad_128kbps" ,"Abdul_Basit_Murattal_192kbps" ,"Abdul_Basit_Murattal_64kbps" ,"Abdullaah_3awwaad_Al-Juhaynee_128kbps" ,"Abdullah_Basfar_192kbps" ,"Abdullah_Basfar_32kbps" ,"Abdullah_Basfar_64kbps" ,"Abdullah_Matroud_128kbps" ,"Abdurrahmaan_As-Sudais_192kbps" ,"Abdurrahmaan_As-Sudais_64kbps" ,"Abu_Bakr_Ash-Shaatree_128kbps" ,"Abu_Bakr_Ash-Shaatree_64kbps" ,"Ahmed_Neana_128kbps" ,"Ahmed_ibn_Ali_al-Ajamy_128kbps_ketaballah.net" ,"Ahmed_ibn_Ali_al-Ajamy_64kbps_QuranExplorer.Com" ,"Alafasy_128kbps" ,"Alafasy_64kbps" ,"Ghamadi_40kbps" ,"Hani_Rifai_192kbps" ,"Hani_Rifai_64kbps" ,"Hudhaify_128kbps" ,"Hudhaify_32kbps" ,"Hudhaify_64kbps" ,"Husary_128kbps" ,"Husary_128kbps_Mujawwad" ,"Husary_64kbps" ,"Husary_Mujawwad_64kbps" ,"Ibrahim_Akhdar_32kbps" ,"Maher_AlMuaiqly_64kbps" ,"Menshawi_16kbps" ,"Minshawy_Mujawwad_192kbps" ,"Minshawy_Mujawwad_64kbps" ,"Minshawy_Murattal_128kbps" ,"Mohammad_al_Tablaway_128kbps" ,"Mohammad_al_Tablaway_64kbps" ,"Muhammad_AbdulKareem_128kbps" ,"Muhammad_Ayyoub_128kbps" ,"Muhammad_Ayyoub_64kbps" ,"Muhammad_Jibreel_128kbps" ,"Muhammad_Jibreel_64kbps" ,"Muhsin_Al_Qasim_192kbps" ,"Parhizgar_48kbps" ,"Salaah_AbdulRahman_Bukhatir_128kbps" ,"Salah_Al_Budair_128kbps" ,"Saood_ash-Shuraym_128kbps" ,"Saood_ash-Shuraym_64kbps" ,"khalefa_al_tunaiji_64kbps" ,"mahmoud_ali_al_banna_32kbps" ,"warsh/warsh_ibrahim_aldosary_128kbps"];

isRTL = true;

dicoVars = {
	'VALID_SOURAH_SELECTION': 'الرجاء التأكد من صحة اسم السورة'
	, 'START_END_INTERVAL': 'على آيتي البداية و النهاية أن تكونا ضمن المجال 1 إلى '
	, 'REPEAT_TIME_MIN_VAL': 'يجب أن يكون عدد التكرار أكبر من 1'
	, 'START_AYAH_MIN_VAL': 'الآية الأولى يجب أن تكون أكبر من 1'
	, 'START_AYAH_MAX_VAL': 'Start ayah cannot be greater than '
	, 'END_AYAH_MAX_VAL': 'End ayah cannot be greater than '
	, 'END_AYAH_MIN_VAL': 'End ayah must be greater than start ayah '
};

dico = {
	'SOURAH': 'سورة:'
	, 'START': 'من:'
	, 'END': 'إلى:'
	, 'REPEAT': 'عدد تكرار كل آية:'
	, 'REPEAT-ALL': 'تكرار الكل:'
	, 'GO': 'إبدأ القراءة'
	, 'TIMES': 'مرة/مرات'
	, 'REPEAT-ALL-FOR': 'أعد:'
	, 'INTERVAL': 'إقرأ الآيات:'
	, 'FROM': 'من:'
	, 'TO': 'إلى:'
	, '0_HINT': 'أدخل 0 للتكرار دون توقف'
	, '1_AND_2_HINT': 'بإدخالك رقم 2 سيتم تكرار الآيات مرتين، ثلاثة للتكرار ثلاث مرات، '
};