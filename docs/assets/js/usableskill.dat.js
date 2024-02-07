(function () {

	USABEL_SKILL_ID_NONE = 0;
	USABEL_SKILL_ID_COLD_BOLT_3 = 1;
	USABEL_SKILL_ID_FIRE_BOLT_3 = 2;
	USABEL_SKILL_ID_BASH_BY_CUTLASS = 3;
	USABEL_SKILL_ID_HEAL_BY_LIGHT_EPSILON = 4;
	USABEL_SKILL_ID_HEAL_1 = 5;
	USABEL_SKILL_ID_CURE_1 = 6;
	USABEL_SKILL_ID_HEAL_BY_BRYUNAK = 7;
	USABEL_SKILL_ID_TOMAHAWK_NAGE_BY_TOMAHAWK = 8;
	USABEL_SKILL_ID_JUPITER_THUNDER_BY_XXXXXXXXXX = 9;
	USABEL_SKILL_ID_RUWACH_BY_SATELLITE_HAIRBAND = 10;
	USABEL_SKILL_ID_PIERCE_3 = 11;
	USABEL_SKILL_ID_ANGELUS_1 = 12;
	USABEL_SKILL_ID_FROST_DIVER_5 = 13;
	USABEL_SKILL_ID_METEOR_STORM_3 = 14;
	USABEL_SKILL_ID_SPEAR_STUB_5 = 15;
	USABEL_SKILL_ID_SIGHT_1 = 16;
	USABEL_SKILL_ID_TELEPORT_1 = 17;
	USABEL_SKILL_ID_LIGHTNING_BOLT = 18;
	USABEL_SKILL_ID_CLOAKING_1 = 19;
	USABEL_SKILL_ID_ENVENOM_3 = 20;
	USABEL_SKILL_ID_MAGNUM_BREAK_3 = 21;
	USABEL_SKILL_ID_HIDING_1 = 22;
	USABEL_SKILL_ID_GEDOKU_1 = 24;
	USABEL_SKILL_ID_STEAL_1 = 27;
	USABEL_SKILL_ID_CLOAKING_3 = 28;
	USABEL_SKILL_ID_CAST_CANCEL_1 = 29;
	USABEL_SKILL_ID_ISHINAGE_1 = 32;
	USABEL_SKILL_ID_FIRE_BOLT_5 = 33;
	USABEL_SKILL_ID_FIRE_BALL_5 = 34;
	USABEL_SKILL_ID_FIRE_WALL_5 = 35;
	USABEL_SKILL_ID_COLO_BOLT_5 = 36;
	USABEL_SKILL_ID_LIGHTNING_BOLT_5 = 37;
	USABEL_SKILL_ID_EARTH_SPIKE_5 = 38;
	USABEL_SKILL_ID_SOUL_STRIKE_5 = 39;
	USABEL_SKILL_ID_RESERECTION_BY_YGGDRASILLNO_HA = 40;
	USABEL_SKILL_ID_FROST_NOVA_2 = 42;
	USABEL_SKILL_ID_MAGNUM_BREAK_5 = 43;
	USABEL_SKILL_ID_SOKUDO_GENSHO_1 = 45;
	USABEL_SKILL_ID_EARTH_SPIKE_3 = 48;
	USABEL_SKILL_ID_GRAND_CROSS_10 = 50;
	USABEL_SKILL_ID_METEOR_ASSALT_BY_TOZOKUNO_SUSUME_DAIIKKAN = 51;
	USABEL_SKILL_ID_SURPRISE_ATTACK_BY_SHINSHUKUZIZAI_HAND = 52;
	USABEL_SKILL_ID_BACK_STUB_BY_SHINSHUKUZIZAI_HAND = 53;
	USABEL_SKILL_ID_SOUL_BREAKER_BY_GODS_SWORD = 54;
	USABEL_SKILL_ID_FROST_NOVA_BY_GODS_HELM = 55;
	USABEL_SKILL_ID_LOV_BY_GODS_GUNTLET = 56;
	USABEL_SKILL_ID_MAGNUM_BREAK_10 = 57;
	USABEL_SKILL_ID_HEAL_10 = 58;
	USABEL_SKILL_ID_METEOR_STORM_5 = 59;
	USABEL_SKILL_ID_HIDING_3 = 60;
	USABEL_SKILL_ID_VOLCANO_5 = 61;
	USABEL_SKILL_ID_SOKUDO_ZOKA_1 = 62;
	USABEL_SKILL_ID_FIRE_WALL_10 = 63;
	USABEL_SKILL_ID_METEOR_STORM_1 = 64;
	USABEL_SKILL_ID_GREED_1 = 65;
	USABEL_SKILL_ID_MAGNUS_EXORCISMUS_10 = 66;
	USABEL_SKILL_ID_LEX_AETERNA_1 = 67;
	USABEL_SKILL_ID_FLAME_LAUNCHER_1 = 68;
	USABEL_SKILL_ID_ITEM_KANTE_1 = 69;
	USABEL_SKILL_ID_BLESSING_5 = 70;
	USABEL_SKILL_ID_CART_REVOLUTION_1 = 71;
	USABEL_SKILL_ID_SEISMIC_WEAPON_1 = 72;
	USABEL_SKILL_ID_DEMONIC_FIRE_3 = 73;
	USABEL_SKILL_ID_HELL_INFERNO_3 = 74;
	USABEL_SKILL_ID_MAGMA_ILLUPTION_3 = 75;
	USABEL_SKILL_ID_PSYCHIC_WAVE_3 = 76;
	USABEL_SKILL_ID_METALIC_SOUND_3 = 77;
	USABEL_SKILL_ID_JUDEX_3 = 78;
	USABEL_SKILL_ID_TEIOAPUCHAGI_7 = 79;
	USABEL_SKILL_ID_SOUL_BREAKER_5 = 80;
	USABEL_SKILL_ID_PRESSURE_5 = 81;
	USABEL_SKILL_ID_GLORIA_1 = 82;
	USABEL_SKILL_ID_FROST_NOVA_10 = 83;
	USABEL_SKILL_ID_LOV_5 = 84;
	USABEL_SKILL_ID_SHUCHURYOKU_KOZYO_1 = 85;
	USABEL_SKILL_ID_CONCENTRATION_5 = 86;
	USABEL_SKILL_ID_ADRENALINE_RUSH_5 = 87;
	USABEL_SKILL_ID_LIGHTNING_LOADER_1 = 88;
	USABEL_SKILL_ID_WEAPON_PERFECTION_2 = 89;
	USABEL_SKILL_ID_ENDURE_5 = 90;
	USABEL_SKILL_ID_METEOR_STORM_10 = 91;
	USABEL_SKILL_ID_UTSUSEMI_1 = 92;
	USABEL_SKILL_ID_HAMMER_FALL_3 = 93;
	USABEL_SKILL_ID_HEAVENS_DRIVE_3 = 94;
	USABEL_SKILL_ID_CLEARANCE_5 = 95;
	USABEL_SKILL_ID_MAGNIFICAT_5 = 96;
	USABEL_SKILL_ID_MAHORYOKU_ZOFUKU_5 = 97;
	USABEL_SKILL_ID_DEFENDER_2 = 98;
	USABEL_SKILL_ID_DELUGE_5 = 99;
	USABEL_SKILL_ID_DARK_CRAW_3 = 100;
	USABEL_SKILL_ID_CLOAKING_EXCEED_3 = 101;
	USABEL_SKILL_ID_BLESSING_1 = 102;
	USABEL_SKILL_ID_DISPELL_5 = 103;
	USABEL_SKILL_ID_VOLCANO_1 = 104;
	USABEL_SKILL_ID_BLESSING_10 = 105;
	USABEL_SKILL_ID_VIOLENT_GALE_5 = 106;
	USABEL_SKILL_ID_KIDATSU_1 = 107;
	USABEL_SKILL_ID_AUTO_GUARD_3 = 108;
	USABEL_SKILL_ID_BASH_3 = 109;
	USABEL_SKILL_ID_KIKO_2 = 110;
	USABEL_SKILL_ID_CLOSE_CONFINE_1 = 111;
	USABEL_SKILL_ID_MONSTER_ZYOHO_1 = 112;
	USABEL_SKILL_ID_FIRE_BALL_3 = 113;
	USABEL_SKILL_ID_FROST_DIVER_3 = 114;
	USABEL_SKILL_ID_LIGHTNING_BOLT_3 = 115;
	USABEL_SKILL_ID_LOUD_VOICE_1 = 116;
	USABEL_SKILL_ID_PEONY_MAMY_1 = 117;
	USABEL_SKILL_ID_POTION_PITCHER_3 = 118;
	USABEL_SKILL_ID_PISHARI_HERB_1 = 119;
	USABEL_SKILL_ID_SEKAIZYUNO_HOKORI_1 = 120;
	USABEL_SKILL_ID_SNOW_FLIP_1 = 121;
	USABEL_SKILL_ID_SOUL_STRIKE_3 = 122;
	USABEL_SKILL_ID_SPELL_BREAKER_1 = 123;
	USABEL_SKILL_ID_STONE_CURSE_3 = 124;
	USABEL_SKILL_ID_NAPALM_VULKAN_3 = 125;
	USABEL_SKILL_ID_FROST_WEAPON_1 = 126;
	USABEL_SKILL_ID_ENCHANT_POISON_10 = 127;
	USABEL_SKILL_ID_GANBANTEIN_1 = 128;
	USABEL_SKILL_ID_TRUE_SIGHT_10 = 129;
	USABEL_SKILL_ID_MELTDOWN_10 = 130;
	USABEL_SKILL_ID_ASSUMPTIO_5 = 131;
	USABEL_SKILL_ID_ENERGY_COAT_1 = 132;
	USABEL_SKILL_ID_AURA_BLADE_3 = 133;
	USABEL_SKILL_ID_SAFETY_WALL_10 = 134;
	USABEL_SKILL_ID_COMPULSION_DISCOUNT_5 = 135;
	USABEL_SKILL_ID_LORD_OF_VERMILLION_10 = 136;
	USABEL_SKILL_ID_GRAND_CROSS_5 = 137;
	USABEL_SKILL_ID_HIDING_5 = 138;
	USABEL_SKILL_ID_JUDEX_10 = 139;
	USABEL_SKILL_ID_CART_BOOST_GENETIC_3 = 140;
	USABEL_SKILL_ID_ASSUMPTIO_3 = 141;
	USABEL_SKILL_ID_BOWLING_BASH_10 = 142;
	USABEL_SKILL_ID_NOPITIGI_3 = 143;
	USABEL_SKILL_ID_KIKO_3 = 144;
	USABEL_SKILL_ID_KIKO_5 = 145;
	USABEL_SKILL_ID_KONGO_4 = 146;
	USABEL_SKILL_ID_CART_BOOST_WS_1 = 147;
	USABEL_SKILL_ID_STORM_GUST_10 = 148;
	USABEL_SKILL_ID_SHUCHURYOKU_KOZYO_10 = 149;
	USABEL_SKILL_ID_GOSPEL_1 = 150;
	USABEL_SKILL_ID_TRUE_SIGHT_5 = 151;
	USABEL_SKILL_ID_FROST_MISTY_3 = 152;
	USABEL_SKILL_ID_MAGNUS_EXORCISMUS_5 = 153;
	USABEL_SKILL_ID_THUNDER_STORM_10 = 154;
	USABEL_SKILL_ID_RECOVERY_1 = 155;
	USABEL_SKILL_ID_PROVIDENCE_3 = 156;
	USABEL_SKILL_ID_SEIMEIRYOKU_HENKAN_3 = 157;
	USABEL_SKILL_ID_MELTDOWN_5 = 158;
	USABEL_SKILL_ID_CHEMICAL_WEAPON_CHARGE_5 = 159;
	USABEL_SKILL_ID_SOKUDO_ZOKA_10 = 160;
	USABEL_SKILL_ID_JUDEX_1 = 161;
	USABEL_SKILL_ID_HELL_INFERNO_5 = 162;
	USABEL_SKILL_ID_EARTH_DRIVE_5 = 163;
	USABEL_SKILL_ID_REFLECT_SHIELD_10 = 164;
	USABEL_SKILL_ID_QUAGMIRE_5 = 165;
	USABEL_SKILL_ID_FROST_WEAPON_5 = 166;
	USABEL_SKILL_ID_PIETY_1 = 167;
	USABEL_SKILL_ID_ORATIO_5 = 168;
	USABEL_SKILL_ID_SILENTIUM_3 = 169;
	USABEL_SKILL_ID_PROVOKE_10 = 170;
	USABEL_SKILL_ID_ASPERSIO_5 = 171;
	USABEL_SKILL_ID_JACK_FROST_3 = 172;
	USABEL_SKILL_ID_CHEMICAL_HELM_CHARGE_5 = 173;
	USABEL_SKILL_ID_OVER_CHARGE_10 = 174;
	USABEL_SKILL_ID_MAXIMIZE_POWER_2 = 175;
	USABEL_SKILL_ID_TENKETSU_KYU_3 = 176;
	USABEL_SKILL_ID_UNLIMIT_5 = 177;
	USABEL_SKILL_ID_AXE_BOOMERANG_3 = 178;
	USABEL_SKILL_ID_SANCTUARY_10 = 179;
	USABEL_SKILL_ID_AUTO_GUARD_10 = 180;
	USABEL_SKILL_ID_SPELL_BREAKER_5 = 181;
	USABEL_SKILL_ID_HEAVENS_DRIVE_5 = 182;
	USABEL_SKILL_ID_STONE_SKIN_2 = 183;
	USABEL_SKILL_ID_STONE_SKIN_1 = 184;
	USABEL_SKILL_ID_ODINNO_CHIKARA_2 = 185;
	USABEL_SKILL_ID_POWER_SWING_10 = 186;
	USABEL_SKILL_ID_ENCHANT_POISON_1 = 187;
	USABEL_SKILL_ID_ENVENOM_5 = 188;
	USABEL_SKILL_ID_CLOUD_KILL_5 = 189;
	USABEL_SKILL_ID_METEOR_ASSALT_10 = 190;
	USABEL_SKILL_ID_BLOOD_SUCKER_5 = 191;
	USABEL_SKILL_ID_TRUMPLE_3 = 192;
	USABEL_SKILL_ID_GOSPEL_10 = 193;
	USABEL_SKILL_ID_OVER_TRUST_5 = 194;
	USABEL_SKILL_ID_DRAIN_LIFE_5 = 195;
	USABEL_SKILL_ID_CRYMSON_ROCK_5 = 196;
	USABEL_SKILL_ID_KOGEKI_SOCHI_YUKOKA_5 = 197;
	USABEL_SKILL_ID_GLORIA_3 = 198;
	USABEL_SKILL_ID_VENOM_IMPRESS_3 = 199;
	USABEL_SKILL_ID_ENDURE_1 = 200;
	USABEL_SKILL_ID_GLORIA_5 = 201;

	InsertSkill = [
		[0,0,0,0],
		[1,1,54,3],
		[2,1,51,3],
		[3,1,6,5],
		[4,1,25,3],
		[5,1,25,1],
		[6,0,26,1],
		[7,1,25,5],
		[8,1,302,1],
		[9,1,126,1],
		[10,1,34,1],
		[11,1,70,3],
		[12,0,30,1],
		[13,1,55,5],
		[14,1,125,3],
		[15,1,71,5],
		[16,0,50,1],
		[17,0,35,1],
		[18,1,56,1],
		[19,0,82,1],
		[20,1,17,3],
		[21,1,7,3],
		[22,0,16,1],
		[23,0,35,1],
		[24,0,18,1],
		[25,0,26,1],
		[26,0,60,5],
		[27,0,15,1],
		[28,0,82,3],
		[29,0,225,1],
		[30,1,49,1],
		[31,0,21,1],
		[32,1,22,1],
		[33,1,51,5],
		[34,1,52,5],
		[35,1,53,5],
		[36,1,54,5],
		[37,1,56,5],
		[38,1,132,5],
		[39,1,47,5],
		[40,1,97,1],
		[41,0,108,1],
		[42,1,130,2],
		[43,1,7,5],
		[44,1,171,1],
		[45,0,28,1],
		[46,1,128,5],
		[47,1,414,3],
		[48,1,132,3],
		[49,1,47,10],
		[50,1,162,10],
		[51,1,264,5],
		[52,1,171,5],
		[53,1,169,10],
		[54,1,263,3],
		[55,1,130,5],
		[56,1,127,1],
		[57,1,7,10],
		[58,1,25,10],
		[59,1,125,5],
		[60,0,16,3],
		[61,0,235,5],
		[62,0,27,1],
		[63,1,53,10],
		[64,1,125,1],
		[65,0,849,1],
		[66,1,104,10],
		[67,0,103,1],
		[68,0,230,1],
		[69,0,63,1],
		[70,0,31,5],
		[71,1,66,1],
		[72,0,233,1],
		[73,1,737,3],
		[74,1,528,3],
		[75,1,811,3],
		[76,1,662,3],
		[77,1,641,3],
		[78,1,476,3],
		[79,1,339,7],
		[80,1,263,5],
		[81,1,283,5],
		[82,0,100,1],
		[83,1,130,10],
		[84,1,127,5],
		[85,0,42,1],
		[86,0,256,5],
		[87,0,152,5],
		[88,0,232,1],
		[89,0,153,2],
		[90,0,9,5],
		[91,1,125,10],
		[92,0,402,1],
		[93,0,151,3],
		[94,1,133,3],
		[95,0,490,5],
		[96,0,99,5],
		[97,0,276,5],
		[98,0,165,2],
		[99,0,236,5],
		[100,1,797,3],
		[101,0,471,3],
		[102,0,31,1],
		[103,0,239,5],
		[104,0,235,1],
		[105,0,31,10],
		[106,0,237,5],
		[107,0,186,1],
		[108,0,851,3],
		[109,1,6,3],
		[110,0,185,2],
		[111,0,383,1],
		[112,0,123,1],
		[113,1,52,3],
		[114,1,55,3],
		[115,1,56,3],
		[116,0,68,1],
		[117,0,986,1],
		[118,0,245,3],
		[119,0,987,1],
		[120,0,988,1],
		[121,0,989,1],
		[122,1,47,3],
		[123,0,227,1],
		[124,1,49,3],
		[125,1,277,3],
		[126,0,231,1],
		[127,0,85,10],
		[128,0,863,1],
		[129,0,270,10],
		[130,0,278,10],
		[131,0,267,5],
		[132,0,58,1],
		[133,0,254,3],
		[134,0,48,10],
		[135,0,181,5],
		[136,1,127,10],
		[137,1,162,5],
		[138,0,16,5],
		[139,1,476,10],
		[140,0,724,3],
		[141,0,267,3],
		[142,1,76,10],
		[143,0,343,3],
		[144,0,185,3],
		[145,0,185,5],
		[146,0,196,4],
		[147,0,281,1],
		[148,1,131,10],
		[149,0,42,10],
		[150,0,285,1],
		[151,0,270,5],
		[152,1,519,3],
		[153,1,104,5],
		[154,1,57,10],
		[155,0,95,1],
		[156,0,164,3],
		[157,0,871,3],
		[158,0,278,5],
		[159,0,249,5],
		[160,0,27,10],
		[161,1,476,1],
		[162,1,528,5],
		[163,1,585,5],
		[164,0,160,10],
		[165,0,134,5],
		[166,0,231,5],
		[167,0,584,1],
		[168,0,484,5],
		[169,0,493,3],
		[170,0,8,10],
		[171,0,92,5],
		[172,1,520,3],
		[173,0,252,5],
		[174,0,61,10],
		[175,0,155,2],
		[176,0,626,3],
		[177,0,795,5],
		[178,1,542,3],
		[179,1,94,10],
		[180,0,851,10],
		[181,0,227,5],
		[182,1,133,5],
		[183,0,996,2],
		[184,0,996,1],
		[185,0,998,2],
		[186,1,543,10],
		[187,0,85,1],
		[188,1,17,5],
		[189,1,663,5],
		[190,1,264,10],
		[191,1,733,5],
		[192,0,571,3],
		[193,0,285,10],
		[194,0,154,5],
		[195,1,526,5],
		[196,1,527,5],
		[197,1,1076,5],
		[198,0,100,3],
		[199,0,459,3],
		[200,0,9,1],
		[201,0,100,5],
		// XXX: 独自実装
		[202,0,260,5],
		[203,0,42,5],
		[204,0,8,5],
	];

})();
