





// 移行後は common などに移動するもの

// TODO: とりあえず
MIG_SKILL_ID_ANY = -1;
MIG_ITEM_ID_ANY = -1;
MIG_CARD_ID_ANY = -1;
MIG_ARROW_ID_ANY = -1;
MIG_COSTUME_ID_ANY = -1;




//----------------------------------------------------------------
// パラメータＩＤ定義
//----------------------------------------------------------------
CGlobalConstManager.DefineEnum(
	"EnumMigItemParamId",
	[
		// 基本ステータスは旧仕様と同じIDとしたいのでこの順序
		"MIG_PARAM_ID_STR",
		"MIG_PARAM_ID_AGI",
		"MIG_PARAM_ID_VIT",
		"MIG_PARAM_ID_INT",
		"MIG_PARAM_ID_DEX",
		"MIG_PARAM_ID_LUK",
		"MIG_PARAM_ID_POW",
		"MIG_PARAM_ID_STA",
		"MIG_PARAM_ID_WIS",
		"MIG_PARAM_ID_SPL",
		"MIG_PARAM_ID_CON",
		"MIG_PARAM_ID_CRT",
		// ここまで順序固定（ジョブボーナスの取得で依存中）

		"MIG_PARAM_ID_BASE_LV",
		"MIG_PARAM_ID_JOB_LV",

		"MIG_PARAM_ID_ALL_STATUS",
		"MIG_PARAM_ID_ALL_SPEC_STATUS",

		"MIG_PARAM_ID_HIT",
		"MIG_PARAM_ID_FLEE",
		"MIG_PARAM_ID_CRI",
		"MIG_PARAM_ID_LUCKY",
		"MIG_PARAM_ID_ASPD",

		"MIG_PARAM_ID_MAXHP",
		"MIG_PARAM_ID_MAXSP",
		"MIG_PARAM_ID_NOWHP",
		"MIG_PARAM_ID_NOWSP",

		"MIG_PARAM_ID_ATK",
		"MIG_PARAM_ID_MATK",
		"MIG_PARAM_ID_DEF",
		"MIG_PARAM_ID_MDEF",

		"MIG_PARAM_ID_HPR",
		"MIG_PARAM_ID_SPR",

		"MIG_PARAM_ID_GUIDED",
		"MIG_PARAM_ID_WEAPON_ATK",
	],
	0,
	1
);
CGlobalConstManager.DefinePseudoEnum(
	"EnumMigItemParamId",
	[
		"MIG_PARAM_ID_COUNT",
		"MIG_PARAM_ID_ANY",
	],
	EnumMigItemParamId.Count,
	1
);

//----------------------------------------------------------------
// 種族ID定義
//----------------------------------------------------------------
CGlobalConstManager.DefineEnum(
	"EnumMigRaceId",
	[
		"MIG_RACE_ID_SOLID",
		"MIG_RACE_ID_UNDEAD",
		"MIG_RACE_ID_ANIMAL",
		"MIG_RACE_ID_PLANT",
		"MIG_RACE_ID_INSECT",
		"MIG_RACE_ID_FISH",
		"MIG_RACE_ID_DEMON",
		"MIG_RACE_ID_HUMAN",
		"MIG_RACE_ID_ANGEL",
		"MIG_RACE_ID_DRAGON",
	],
	0,
	1
);
CGlobalConstManager.DefinePseudoEnum(
	"EnumMigRaceId",
	[
		"MIG_RACE_ID_COUNT",
		"MIG_RACE_ID_ANY",
		"MIG_RACE_ID_ALL",
	],
	EnumMigRaceId.Count,
	1
);

//----------------------------------------------------------------
// 属性ID定義
//----------------------------------------------------------------
CGlobalConstManager.DefineEnum(
	"EnumMigElementId",
	[
		"MIG_ELEMENT_ID_VANITY",
		"MIG_ELEMENT_ID_WATER",
		"MIG_ELEMENT_ID_EARTH",
		"MIG_ELEMENT_ID_FIRE",
		"MIG_ELEMENT_ID_WIND",
		"MIG_ELEMENT_ID_POISON",
		"MIG_ELEMENT_ID_HOLY",
		"MIG_ELEMENT_ID_DARK",
		"MIG_ELEMENT_ID_PSYCO",
		"MIG_ELEMENT_ID_UNDEAD",
	],
	0,
	1
);
CGlobalConstManager.DefinePseudoEnum(
	"EnumMigElementId",
	[
		"MIG_ELEMENT_ID_COUNT",
		"MIG_ELEMENT_ID_ANY",
		"MIG_ELEMENT_ID_ALL",
		"MIG_ELEMENT_ID_NONE",
	],
	EnumMigElementId.Count,
	1
);

//----------------------------------------------------------------
// サイズID定義
//----------------------------------------------------------------
CGlobalConstManager.DefineEnum(
	"EnumMigSizeId",
	[
		"MIG_SIZE_ID_SMALL",
		"MIG_SIZE_ID_MEDIUM",
		"MIG_SIZE_ID_LARGE",
	],
	0,
	1
);
CGlobalConstManager.DefinePseudoEnum(
	"EnumMigSizeId",
	[
		"MIG_SIZE_ID_COUNT",
		"MIG_SIZE_ID_ANY",
		"MIG_SIZE_ID_ALL",
	],
	EnumMigSizeId.Count,
	1
);

//----------------------------------------------------------------
// ボス属性ＩＤ定義
//----------------------------------------------------------------
CGlobalConstManager.DefineEnum(
	"EnumMigBossId",
	[
		"MIG_BOSS_ID_NORMAL",
		"MIG_BOSS_ID_BOSS",
	],
	0,
	1
);
CGlobalConstManager.DefinePseudoEnum(
	"EnumMigBossId",
	[
		"MIG_BOSS_ID_COUNT",
		"MIG_BOSS_ID_ANY",
		"MIG_BOSS_ID_ALL",
	],
	EnumMigBossId.Count,
	1
);

//----------------------------------------------------------------
// プレイヤー属性ＩＤ定義
//----------------------------------------------------------------
CGlobalConstManager.DefineEnum(
	"EnumMigPlayerId",
	[
		"MIG_PLAYER_ID_HUMAN",
		"MIG_PLAYER_ID_DORAM",
	],
	0,
	1
);
CGlobalConstManager.DefinePseudoEnum(
	"EnumMigPlayerId",
	[
		"MIG_PLAYER_ID_COUNT",
		"MIG_PLAYER_ID_ANY",
		"MIG_PLAYER_ID_ALL",
	],
	EnumMigPlayerId.Count,
	1
);

//----------------------------------------------------------------
// 距離ＩＤ定義
//----------------------------------------------------------------
CGlobalConstManager.DefineEnum(
	"EnumMigRangeId",
	[
		"MIG_RANGE_ID_SHORT",
		"MIG_RANGE_ID_LONG",
	],
	0,
	1
);
CGlobalConstManager.DefinePseudoEnum(
	"EnumMigRangeId",
	[
		"MIG_RANGE_ID_COUNT",
		"MIG_RANGE_ID_ANY",
		"MIG_RANGE_ID_ALL",
	],
	EnumMigRangeId.Count,
	1
);

//----------------------------------------------------------------
// 確率ＩＤ定義（正数は千分率指定の実確率なので、すべて負数の仮想定数として定義する）
//----------------------------------------------------------------
CGlobalConstManager.DefinePseudoEnum(
	"EnumMigProbId",
	[
		"MIG_PROB_ID_CERTAIN",
		"MIG_PROB_ID_LOW",
		"MIG_PROB_ID_MID",
		"MIG_PROB_ID_HIGH",
	],
	-1,
	-1
);

//----------------------------------------------------------------
// ターゲットＩＤ定義
//----------------------------------------------------------------
CGlobalConstManager.DefineEnum(
	"EnumMigTargetId",
	[
		"MIG_TARGET_ID_ENEMY",
		"MIG_TARGET_ID_SELF",
		"MIG_TARGET_ID_ARROUND_ENEMY",
		"MIG_TARGET_ID_ARROUND_SELF",
	],
	0,
	1
);
CGlobalConstManager.DefinePseudoEnum(
	"EnumMigTargetId",
	[
		"MIG_TARGET_ID_COUNT",
		"MIG_TARGET_ID_ANY",
	],
	EnumMigTargetId.Count,
	1
);

//----------------------------------------------------------------
// 時間単位ＩＤ定義
//----------------------------------------------------------------
CGlobalConstManager.DefineEnum(
	"EnumMigTimeUnitId",
	[
		"MIG_TIME_UNIT_ID_SECOND",
		"MIG_TIME_UNIT_ID_MINUTE",
		"MIG_TIME_UNIT_ID_HOUR",
	],
	0,
	1
);
CGlobalConstManager.DefinePseudoEnum(
	"EnumMigTimeUnitId",
	[
		"MIG_TIME_UNIT_ID_COUNT",
		"MIG_TIME_UNIT_ID_ANY",
	],
	EnumMigTimeUnitId.Count,
	1
);

//----------------------------------------------------------------
// 手段ＩＤ定義
//----------------------------------------------------------------
CGlobalConstManager.DefineEnum(
	"EnumMigMethodId",
	[
		"MIG_METHOD_ID_PHYSICAL",
		"MIG_METHOD_ID_PHYSICAL_SHORT",
		"MIG_METHOD_ID_PHYSICAL_LONG",
		"MIG_METHOD_ID_MAGICAL",
		"MIG_METHOD_ID_CRITICAL",
	],
	0,
	1
);
CGlobalConstManager.DefinePseudoEnum(
	"EnumMigMethodId",
	[
		"MIG_METHOD_ID_COUNT",
		"MIG_METHOD_ID_ANY",
	],
	EnumMigMethodId.Count,
	1
);

//----------------------------------------------------------------
// タイミングＩＤ定義
//----------------------------------------------------------------
CGlobalConstManager.DefineEnum(
	"EnumMigTimingId",
	[
		"MIG_TIMING_ID_BY_ATTACK",
		"MIG_TIMING_ID_HITTED",
		"MIG_TIMING_ID_RECEIVED",
	],
	0,
	1
);
CGlobalConstManager.DefinePseudoEnum(
	"EnumMigTimingId",
	[
		"MIG_TIMING_ID_COUNT",
		"MIG_TIMING_ID_ANY",
	],
	EnumMigTimingId.Count,
	1
);

//----------------------------------------------------------------
// アイテム種別ＩＤ定義
//----------------------------------------------------------------

CGlobalConstManager.DefineEnum(
	"EnumMigItemKind",
	[
		"MIG_ITEM_KIND_NONE",


		// TODO: アイテム系列とアイテム位置へ分割へ


		"MIG_ITEM_KIND_KNIFE",
		"MIG_ITEM_KIND_SWORD",
		"MIG_ITEM_KIND_SWORD_2HAND",
		"MIG_ITEM_KIND_SPEAR",
		"MIG_ITEM_KIND_SPEAR_2HAND",
		"MIG_ITEM_KIND_AXE",
		"MIG_ITEM_KIND_AXE_2HAND",
		"MIG_ITEM_KIND_MACE",
		"MIG_ITEM_KIND_STUFF",
		"MIG_ITEM_KIND_STUFF_2HAND",
		"MIG_ITEM_KIND_BOW",
		"MIG_ITEM_KIND_KATAR",
		"MIG_ITEM_KIND_BOOK",
		"MIG_ITEM_KIND_FIST",
		"MIG_ITEM_KIND_MUSICAL",
		"MIG_ITEM_KIND_WHIP",
		"MIG_ITEM_KIND_FUMA",
		"MIG_ITEM_KIND_HANDGUN",
		"MIG_ITEM_KIND_RIFLE",
		"MIG_ITEM_KIND_SHOTGUN",
		"MIG_ITEM_KIND_GATLINGGUN",
		"MIG_ITEM_KIND_GRENADEGUN",

		"MIG_ITEM_KIND_HEAD_TOP",
		"MIG_ITEM_KIND_HEAD_MID",
		"MIG_ITEM_KIND_HEAD_UNDER",
		"MIG_ITEM_KIND_HEAD_TOP_MID",
		"MIG_ITEM_KIND_HEAD_TOP_UNDER",
		"MIG_ITEM_KIND_HEAD_MID_UNDER",
		"MIG_ITEM_KIND_HEAD_ALL",

		"MIG_ITEM_KIND_BODY",
		"MIG_ITEM_KIND_SHIELD",
		"MIG_ITEM_KIND_SHOULDER",
		"MIG_ITEM_KIND_FOOT",
		"MIG_ITEM_KIND_ACCESSORY",
		"MIG_ITEM_KIND_ACCESSORY_ON1",
		"MIG_ITEM_KIND_ACCESSORY_ON2",
	],
	0,
	1
);



//----------------------------------------------------------------
// アイテム系列ＩＤ定義
//----------------------------------------------------------------

CGlobalConstManager.DefineEnum(
	"EnumMigItemType",
	[
		"MIG_ITEM_TYPE_NONE",

		"MIG_ITEM_TYPE_KNIFE",
		"MIG_ITEM_TYPE_SWORD",
		"MIG_ITEM_TYPE_SWORD_2HAND",
		"MIG_ITEM_TYPE_SPEAR",
		"MIG_ITEM_TYPE_SPEAR_2HAND",
		"MIG_ITEM_TYPE_AXE",
		"MIG_ITEM_TYPE_AXE_2HAND",
		"MIG_ITEM_TYPE_MACE",
		"MIG_ITEM_TYPE_STUFF",
		"MIG_ITEM_TYPE_STUFF_2HAND",
		"MIG_ITEM_TYPE_BOW",
		"MIG_ITEM_TYPE_KATAR",
		"MIG_ITEM_TYPE_BOOK",
		"MIG_ITEM_TYPE_FIST",
		"MIG_ITEM_TYPE_MUSICAL",
		"MIG_ITEM_TYPE_WHIP",
		"MIG_ITEM_TYPE_FUMA",
		"MIG_ITEM_TYPE_HANDGUN",
		"MIG_ITEM_TYPE_RIFLE",
		"MIG_ITEM_TYPE_SHOTGUN",
		"MIG_ITEM_TYPE_GATLINGGUN",
		"MIG_ITEM_TYPE_GRENADEGUN",

		"MIG_ITEM_TYPE_HELM",
		"MIG_ITEM_TYPE_ARMOR",
		"MIG_ITEM_TYPE_SHIELD",
		"MIG_ITEM_TYPE_SHOULDER",
		"MIG_ITEM_TYPE_SHOES",
		"MIG_ITEM_TYPE_ACCESSORY",
		"MIG_ITEM_TYPE_ACCESSORY_ON_1",
		"MIG_ITEM_TYPE_ACCESSORY_ON_2",

		"MIG_ITEM_TYPE_ARROW",
		"MIG_ITEM_TYPE_BULLET",
		"MIG_ITEM_TYPE_ETC",	// 収集品
	],
	0,
	1
);

//----------------------------------------------------------------
// アイテム位置ＩＤ定義
//----------------------------------------------------------------

CGlobalConstManager.DefineEnum(
	"EnumMigItemPosition",
	[
		"MIG_ITEM_POSITION_NONE",

		"MIG_ITEM_POSITION_TOP",
		"MIG_ITEM_POSITION_MID",
		"MIG_ITEM_POSITION_UNDER",

		"MIG_ITEM_POSITION_TOP_MID",
		"MIG_ITEM_POSITION_TOP_UNDER",
		"MIG_ITEM_POSITION_MID_UNDER",
		"MIG_ITEM_POSITION_TOP_MID_UNDER",

	],
	0,
	1
);



//----------------------------------------------------------------
// 精錬可否ＩＤ定義
//----------------------------------------------------------------

CGlobalConstManager.DefineEnum(
	"EnumMigItemRefinable",
	[
		"MIG_ITEM_REFINABLE_YES",
		"MIG_ITEM_REFINABLE_NO",
	],
	0,
	1
);

//----------------------------------------------------------------
// 破損可否ＩＤ定義
//----------------------------------------------------------------

CGlobalConstManager.DefineEnum(
	"EnumMigItemBreakable",
	[
		"MIG_ITEM_BREAKABLE_YES",
		"MIG_ITEM_BREAKABLE_NO",
	],
	0,
	1
);

//----------------------------------------------------------------
// 装備箇所ＩＤ定義
//----------------------------------------------------------------
CGlobalConstManager.DefineEnum(
	"EnumMigEquipRegionId",
	[
		"MIG_EQUIP_REGION_ID_ARMS_RIGHT",
		"MIG_EQUIP_REGION_ID_ARMS_LEFT",
		"MIG_EQUIP_REGION_ID_HEAD_TOP",
		"MIG_EQUIP_REGION_ID_HEAD_MID",
		"MIG_EQUIP_REGION_ID_HEAD_UNDER",
		"MIG_EQUIP_REGION_ID_SHIELD",
		"MIG_EQUIP_REGION_ID_BODY",
		"MIG_EQUIP_REGION_ID_SHOULDER",
		"MIG_EQUIP_REGION_ID_FOOT",
		"MIG_EQUIP_REGION_ID_ACCESSORY_1",
		"MIG_EQUIP_REGION_ID_ACCESSORY_2",

		"MIG_EQUIP_REGION_ID_ARROW",
		"MIG_EQUIP_REGION_ID_COSTUME_HEAD_TOP",
		"MIG_EQUIP_REGION_ID_COSTUME_HEAD_MID",
		"MIG_EQUIP_REGION_ID_COSTUME_HEAD_UNDER",
	],
	0,
	1
);
CGlobalConstManager.DefinePseudoEnum(
	"EnumMigEquipRegionId",
	[
		"MIG_EQUIP_REGION_ID_COUNT",
		"MIG_EQUIP_REGION_ID_ANY",
		"MIG_EQUIP_REGION_ID_ALL",
	],
	EnumMigEquipRegionId.Count,
	1
);







CGlobalConstManager.DefinePseudoEnum(
	"EnumMigPetId",
	[
		"MIG_PET_ID_ANY",
	],
	-1,
	0
);



//----------------------------------------------------------------
// 職業ＩＤ定義
//----------------------------------------------------------------
CGlobalConstManager.DefineEnum(
	"EnumMigJobId",
	[
		"MIG_JOB_ID_NOVICE",

		"MIG_JOB_ID_SWORDMAN",
		"MIG_JOB_ID_THIEF",
		"MIG_JOB_ID_ACOLYTE",
		"MIG_JOB_ID_ARCHER",
		"MIG_JOB_ID_MAGICIAN",
		"MIG_JOB_ID_MARCHANT",

		"MIG_JOB_ID_KNIGHT",
		"MIG_JOB_ID_ASSASIN",
		"MIG_JOB_ID_PRIEST",
		"MIG_JOB_ID_HUNTER",
		"MIG_JOB_ID_WIZARD",
		"MIG_JOB_ID_BLACKSMITH",
		"MIG_JOB_ID_CRUSADER",
		"MIG_JOB_ID_ROGUE",
		"MIG_JOB_ID_MONK",
		"MIG_JOB_ID_BARD",
		"MIG_JOB_ID_DANCER",
		"MIG_JOB_ID_SAGE",
		"MIG_JOB_ID_ALCHEMIST",

		"MIG_JOB_ID_SUPERNOVICE",

		"MIG_JOB_ID_LORDKNIGHT",
		"MIG_JOB_ID_ASSASINCROSS",
		"MIG_JOB_ID_HIGHPRIEST",
		"MIG_JOB_ID_SNIPER",
		"MIG_JOB_ID_HIGHWIZARD",
		"MIG_JOB_ID_WHITESMITH",
		"MIG_JOB_ID_PALADIN",
		"MIG_JOB_ID_CHASER",
		"MIG_JOB_ID_CHAMPION",
		"MIG_JOB_ID_CROWN",
		"MIG_JOB_ID_ZYPSY",
		"MIG_JOB_ID_PROFESSOR",
		"MIG_JOB_ID_CREATOR",

		"MIG_JOB_ID_HI_NOVICE",

		"MIG_JOB_ID_HI_SWORDMAN",
		"MIG_JOB_ID_HI_THIEF",
		"MIG_JOB_ID_HI_ACOLYTE",
		"MIG_JOB_ID_HI_ARCHER",
		"MIG_JOB_ID_HI_MAGICIAN",
		"MIG_JOB_ID_HI_MARCHANT",

		"MIG_JOB_ID_TAEGWON",
		"MIG_JOB_ID_STARGRADIATOR",
		"MIG_JOB_ID_SOULLINKER",
		"MIG_JOB_ID_NINJA",
		"MIG_JOB_ID_GUNSLINGER",

		"MIG_JOB_ID_RUNEKNIGHT",
		"MIG_JOB_ID_GILOTINCROSS",
		"MIG_JOB_ID_ARCBISHOP",
		"MIG_JOB_ID_RANGER",
		"MIG_JOB_ID_WARLOCK",
		"MIG_JOB_ID_MECHANIC",
		"MIG_JOB_ID_ROYALGUARD",
		"MIG_JOB_ID_SHADOWCHASER",
		"MIG_JOB_ID_SHURA",
		"MIG_JOB_ID_MINSTREL",
		"MIG_JOB_ID_WANDERER",
		"MIG_JOB_ID_SORCERER",
		"MIG_JOB_ID_GENETIC",

		"MIG_JOB_ID_KAGERO",
		"MIG_JOB_ID_OBORO",

		"MIG_JOB_ID_SUPERNOVICE_PLUS",

		"MIG_JOB_ID_REBELLION",

		"MIG_JOB_ID_SUMMONER",

		"MIG_JOB_ID_STAR_EMPEROR",
		"MIG_JOB_ID_SOUL_REAPER",
	],
	0,
	1
);
CGlobalConstManager.DefinePseudoEnum(
	"EnumMigJobId",
	[
		"MIG_JOB_ID_COUNT",
		"MIG_JOB_ID_ANY",
		"MIG_JOB_ID_ALL",
	],
	EnumMigJobId.Count,
	1
);

//----------------------------------------------------------------
// 職業系統ＩＤ定義
//----------------------------------------------------------------
(function () {

	EnumMigJobId.For(
		function (indexF, nameF, valueF) {
			CGlobalConstManager.DefineEnum(
				"EnumMigJobSeriesId",
				[
					nameF.replace("JOB_ID", "JOB_SERIES_ID"),
					nameF.replace("JOB_ID", "JOB_SERIES_ID") + "_SERIES"
				],
				valueF * 2,
				1
			);
		}
	);

})();

CGlobalConstManager.DefinePseudoEnum(
	"EnumMigJobSeriesId",
	[
		"MIG_JOB_SERIES_ID_COUNT",
		"MIG_JOB_SERIES_ID_ANY",
		"MIG_JOB_SERIES_ID_ALL",
	],
	EnumMigJobSeriesId.Count,
	1
);

//----------------------------------------------------------------
// アイテム装備可否用職業ＩＤ定義
//----------------------------------------------------------------
(function () {

	EnumMigJobId.For(
		function (indexF, nameF, valueF) {
			CGlobalConstManager.DefineEnum("EnumMigRequiredJobId", [nameF.replace("JOB_ID", "REQUIRED_JOB_ID")], valueF, 0);
			CGlobalConstManager.DefineEnum("EnumMigRequiredJobSeriesId", [nameF.replace("JOB_ID", "REQUIRED_JOB_SERIES_ID")], valueF, 0);
			CGlobalConstManager.DefineEnum("EnumMigRequiredJobSeriesIdReincaneted", [nameF.replace("JOB_ID", "REQUIRED_JOB_SERIES_REINCANATED_ID")], valueF, 0);
			CGlobalConstManager.DefineEnum("EnumMigRequiredJobSeries3rdId", [nameF.replace("JOB_ID", "REQUIRED_JOB_SERIES_3RD_ID")], valueF, 0);
		}
	);

})();

CGlobalConstManager.DefinePseudoEnum(
	"EnumMigRequiredJobId",
	[
		"MIG_REQUIRED_JOB_ID_COUNT",
		"MIG_REQUIRED_JOB_ID_ANY",
		"MIG_REQUIRED_JOB_ID_ALL",

		"MIG_REQUIRED_JOB_ID_REINCARNATED",
		"MIG_REQUIRED_JOB_ID_REINCARNATED_1ST",
		"MIG_REQUIRED_JOB_ID_REINCARNATED_2ND",
		"MIG_REQUIRED_JOB_ID_3RD",
		"MIG_REQUIRED_JOB_ID_LADY",
		"MIG_REQUIRED_JOB_ID_NOT_NOVICE",
	],
	EnumMigRequiredJobId.Count,
	1
);

//----------------------------------------------------------------
// 境界フラグＩＤ定義
//----------------------------------------------------------------

CGlobalConstManager.DefineEnum(
	"EnumMigBorderFlagId",
	[
		"MIG_BORDER_FLAG_ID_NONE",

		// TODO: 精錬値が10を超えるようになった場合、現在「10の場合」と表現されている箇所への対応が必要
		"MIG_BORDER_FLAG_ID_EQUAL",
		"MIG_BORDER_FLAG_ID_NOT",
		"MIG_BORDER_FLAG_ID_UNDER",
		"MIG_BORDER_FLAG_ID_OVER",
		"MIG_BORDER_FLAG_ID_BY",
	],
	0,
	1
);
CGlobalConstManager.DefinePseudoEnum(
	"EnumMigBorderFlagId",
	[
		"MIG_BORDER_FLAG_ID_COUNT",
		"MIG_BORDER_FLAG_ID_ANY",
	],
	EnumMigBorderFlagId.Count,
	1
);

//----------------------------------------------------------------
// 効果未適用対象ＩＤ定義
//----------------------------------------------------------------

CGlobalConstManager.DefineEnum(
	"EnumMigDiseffectTargetId",
	[
		"MIG_DISEFFECT_TARGET_ID_NONE",

		"MIG_DISEFFECT_TARGET_ID_PLAYER",
	],
	0,
	1
);
CGlobalConstManager.DefinePseudoEnum(
	"EnumMigDiseffectTargetId",
	[
		"MIG_DISEFFECT_TARGET_ID_COUNT",
		"MIG_DISEFFECT_TARGET_ID_ANY",
	],
	EnumMigDiseffectTargetId.Count,
	1
);

//----------------------------------------------------------------
// 値単位ＩＤ定義
//----------------------------------------------------------------

CGlobalConstManager.DefineEnum(
	"EnumMigValueUnitId",
	[
		"MIG_VALUE_UNIT_ID_NONE",

		"MIG_VALUE_UNIT_ID_PERCENT",
	],
	0,
	1
);
CGlobalConstManager.DefinePseudoEnum(
	"EnumMigValueUnitId",
	[
		"MIG_VALUE_UNIT_ID_COUNT",
	],
	EnumMigValueUnitId.Count,
	1
);










//----------------------------------------------------------------
// SPID定義
//----------------------------------------------------------------

CGlobalConstManager.DefineEnum(
	"EnumMigEquipableSpId",
	[
		"MIG_EQUIPABLE_SP_CONDITION_ID_BASE_LEVEL",
		"MIG_EQUIPABLE_SP_CONDITION_ID_PURE_PARAM",
		"MIG_EQUIPABLE_SP_CONDITION_ID_ITEM_REFINED",
		"MIG_EQUIPABLE_SP_CONDITION_ID_ITEM_REFINED_OLD",
		"MIG_EQUIPABLE_SP_CONDITION_ID_ITEM_EQUIP_REGION_REFINED",
		"MIG_EQUIPABLE_SP_CONDITION_ID_ITEM_TYPE_REFINED",

		"MIG_EQUIPABLE_SP_CONDITION_ID_LEARNED",
		"MIG_EQUIPABLE_SP_CONDITION_ID_LEARNED_LEVEL",
		"MIG_EQUIPABLE_SP_CONDITION_ID_LEARNED_LEVEL_V2",

		"MIG_EQUIPABLE_SP_CONDITION_ID_JOB_EQUIPPING",
		"MIG_EQUIPABLE_SP_CONDITION_ID_JOB_SERIES_EQUIPPING",
		"MIG_EQUIPABLE_SP_CONDITION_ID_EQUIP_WITH_ONE",
		"MIG_EQUIPABLE_SP_CONDITION_ID_EQUIP_WITH_ALL",
		"MIG_EQUIPABLE_SP_CONDITION_ID_EQUIP_WITH_ALL_V2",
		"MIG_EQUIPABLE_SP_CONDITION_ID_PET_WITH_ONE",
		"MIG_EQUIPABLE_SP_CONDITION_ID_PET_WITH_ALL",

		"MIG_EQUIPABLE_SP_CONDITION_ID_KILL",
		"MIG_EQUIPABLE_SP_CONDITION_ID_KILL_RACE",
		"MIG_EQUIPABLE_SP_CONDITION_ID_SKILL_USED",
		"MIG_EQUIPABLE_SP_CONDITION_ID_SKILL_HITTED",
		"MIG_EQUIPABLE_SP_CONDITION_ID_ITEM_USED",
		"MIG_EQUIPABLE_SP_CONDITION_ID_DISARMED",

		"MIG_EQUIPABLE_SP_CONDITION_ID_TIME_EFFECT",			// 管理用マッチャ。テキストから直接パースでは生成しない
		"MIG_EQUIPABLE_SP_CONDITION_ID_EQUIP_WITH_ITEM_TYPE",	// 指定のアイテムタイプと共に装備しているとき、パーサ・適用処理未実装、矢データの手入力補正で使用している

/*
	★★　変更したら、先行移行データの dat を再出力すること　★★
	対象
		mig.enchlist.dat.js
*/

		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_LEVEL",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_SLOT",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PROB",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_SPAN",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_INTERVAL",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_AREA",

		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TRIGGER",				// マッチャ分類用。SPID としては、METHOD と TIMING に分けて設定する
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TARGET",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_MONSTER",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_ATTACK",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_PHYSICAL",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_MAGICAL",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_SIZE",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BOSS",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_STATE",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BUFF",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_JOB",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_JOB_SERIES",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ITEM",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_CARD",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ARROW",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PET",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_SKILL",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ITEM_EQUIP_REGION",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ITEM_TYPE",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_MONSTER",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_MAP_MONSTER",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BORDER_BASE",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BORDER_FLAG",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_CANCEL_EFFECT_SPID",
		"MIG_EQUIPABLE_SP_ATTRIBUTE_ID_DISEFFECT_TARGET",

/*
	★★　変更したら、先行移行データの dat を再出力すること　★★
	対象
		mig.enchlist.dat.js
*/

		"MIG_EQUIPABLE_SP_EFFECT_ID_PARAM",
		"MIG_EQUIPABLE_SP_EFFECT_ID_HEAL_USING",
		"MIG_EQUIPABLE_SP_EFFECT_ID_HEAL_USED",
		"MIG_EQUIPABLE_SP_EFFECT_ID_HEAL_ITEM_USED",
		"MIG_EQUIPABLE_SP_EFFECT_ID_ITEM_HEAL_UP",
		"MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE",
		"MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE_OLD",
		"MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE",
		"MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE_OLD",
		"MIG_EQUIPABLE_SP_EFFECT_ID_RESIST",
		"MIG_EQUIPABLE_SP_EFFECT_ID_RESIST_OLD",
		"MIG_EQUIPABLE_SP_EFFECT_ID_RESIST_ELM_OLD",
		"MIG_EQUIPABLE_SP_EFFECT_ID_CAST_TIME",
		"MIG_EQUIPABLE_SP_EFFECT_ID_FIXED_TIME",
		"MIG_EQUIPABLE_SP_EFFECT_ID_COOL_TIME",
		"MIG_EQUIPABLE_SP_EFFECT_ID_SKILL_DELAY",
		"MIG_EQUIPABLE_SP_EFFECT_ID_SKILL_COST",
		"MIG_EQUIPABLE_SP_EFFECT_ID_EXP",
		"MIG_EQUIPABLE_SP_EFFECT_ID_IGNORE_ALLDEF",
		"MIG_EQUIPABLE_SP_EFFECT_ID_RANGE",
		"MIG_EQUIPABLE_SP_EFFECT_ID_STATE",
		"MIG_EQUIPABLE_SP_EFFECT_ID_STATE_PROB_UP",
		"MIG_EQUIPABLE_SP_EFFECT_ID_BUFF",
		"MIG_EQUIPABLE_SP_EFFECT_ID_IGNORE",
		"MIG_EQUIPABLE_SP_EFFECT_ID_REFLECT",
		"MIG_EQUIPABLE_SP_EFFECT_ID_REDUCE_REFLECT",
		"MIG_EQUIPABLE_SP_EFFECT_ID_USABLE_SKILL",
		"MIG_EQUIPABLE_SP_EFFECT_ID_USABLE_SKILL_AS_REFINED",
		"MIG_EQUIPABLE_SP_EFFECT_ID_USABLE_SKILL_INCREASE_LEVEL",
		"MIG_EQUIPABLE_SP_EFFECT_ID_USABLE_SKILL_FOR_DA",
		"MIG_EQUIPABLE_SP_EFFECT_ID_AUTO_SPELL",
		"MIG_EQUIPABLE_SP_EFFECT_ID_AUTO_SPELL_AS_LEARNED",
		"MIG_EQUIPABLE_SP_EFFECT_ID_AUTO_SPELL_AS_REFINED",
		"MIG_EQUIPABLE_SP_EFFECT_ID_AUTO_SPELL_PROB_UP",
		"MIG_EQUIPABLE_SP_EFFECT_ID_AUTO_BUFF_PROB_UP",
		"MIG_EQUIPABLE_SP_EFFECT_ID_AUTO_BUFF_PROB_UP_EQUIPABLE",

		"MIG_EQUIPABLE_SP_EFFECT_ID_BODY_ELEMENT",
		"MIG_EQUIPABLE_SP_EFFECT_ID_DRAIN_PARAM",
		"MIG_EQUIPABLE_SP_EFFECT_ID_DRAIN_PARAM_VALUE_VARY",
		"MIG_EQUIPABLE_SP_EFFECT_ID_DRAIN_PARAM_PROB_UP",
		"MIG_EQUIPABLE_SP_EFFECT_ID_REFLECT_MAGIC",
		"MIG_EQUIPABLE_SP_EFFECT_ID_TIMELY_PARAM",
		"MIG_EQUIPABLE_SP_EFFECT_ID_REDUCE_SP",
		"MIG_EQUIPABLE_SP_EFFECT_ID_REDUCE_SP_OLD",
		"MIG_EQUIPABLE_SP_EFFECT_ID_HEAL_PARAM",
		"MIG_EQUIPABLE_SP_EFFECT_ID_INCREASE_PARAM",
		"MIG_EQUIPABLE_SP_EFFECT_ID_CURE_STATE",
		"MIG_EQUIPABLE_SP_EFFECT_ID_CLEAR_BUFF",
		"MIG_EQUIPABLE_SP_EFFECT_ID_CLEAR_BUFF_V2",
		"MIG_EQUIPABLE_SP_EFFECT_ID_DROP_ITEM",
		"MIG_EQUIPABLE_SP_EFFECT_ID_DROP_ITEM_PROB_UP",
		"MIG_EQUIPABLE_SP_EFFECT_ID_STATELESS",
		"MIG_EQUIPABLE_SP_EFFECT_ID_IMMORTAL",
		"MIG_EQUIPABLE_SP_EFFECT_ID_KNOCKBACKLESS",
		"MIG_EQUIPABLE_SP_EFFECT_ID_TRUE_SIGHT",
		"MIG_EQUIPABLE_SP_EFFECT_ID_PERFECTION",
		"MIG_EQUIPABLE_SP_EFFECT_ID_PENETRATE_DEF",
		"MIG_EQUIPABLE_SP_EFFECT_ID_PENETRATE_DEF_V2",
		"MIG_EQUIPABLE_SP_EFFECT_ID_KIRI_EFFECT",
		"MIG_EQUIPABLE_SP_EFFECT_ID_COMA_EFFECT",
		"MIG_EQUIPABLE_SP_EFFECT_ID_DEF_DIVIDE_HALF",
		"MIG_EQUIPABLE_SP_EFFECT_ID_ANTI_INTERRUPT",
		"MIG_EQUIPABLE_SP_EFFECT_ID_SPLASH_DAMAGE",
		"MIG_EQUIPABLE_SP_EFFECT_ID_MOVE_UP",
		"MIG_EQUIPABLE_SP_EFFECT_ID_REINCARNATION",
		"MIG_EQUIPABLE_SP_EFFECT_ID_UNREFINABLE",
		"MIG_EQUIPABLE_SP_EFFECT_ID_GRAPHICAL",
		"MIG_EQUIPABLE_SP_EFFECT_ID_EFFECTIC_EQUIP",
		"MIG_EQUIPABLE_SP_EFFECT_ID_CANNOT_HIDE_BY_COSTUME",
		"MIG_EQUIPABLE_SP_EFFECT_ID_TOWN_MAP_ONLY",
		"MIG_EQUIPABLE_SP_EFFECT_ID_CHANGE_MONSTER",
		"MIG_EQUIPABLE_SP_EFFECT_ID_TRANSFORM_MONSTER",
		"MIG_EQUIPABLE_SP_EFFECT_ID_TRANSFORM_MONSTER_PROB_UP",
		"MIG_EQUIPABLE_SP_EFFECT_ID_USE_COOL_TIME",		// アイテム等の再使用待機時間

		"MIG_EQUIPABLE_SP_EFFECT_ID_NO_ITEM_USED",
		"MIG_EQUIPABLE_SP_EFFECT_ID_SPECIAL_RUNE_EFFECT",
		"MIG_EQUIPABLE_SP_EFFECT_ID_CANCEL_EFFECT_GENERAL",
		"MIG_EQUIPABLE_SP_EFFECT_ID_CANCEL_EFFECT_SET",
		"MIG_EQUIPABLE_SP_EFFECT_ID_CANCEL_BUFF_GVG",
		"MIG_EQUIPABLE_SP_EFFECT_ID_CANCEL_EFFECT_GVGTE",
		"MIG_EQUIPABLE_SP_EFFECT_ID_CANCEL_EFFECT_SKILL",
		"MIG_EQUIPABLE_SP_EFFECT_ID_CANCEL_EFFECT_STATE",
		"MIG_EQUIPABLE_SP_EFFECT_ID_CANCEL_EFFECT_AUTO_SPELL",
		"MIG_EQUIPABLE_SP_EFFECT_ID_CAN_SELL_NPC",
		"MIG_EQUIPABLE_SP_EFFECT_ID_CANNOT_TRADE",
		"MIG_EQUIPABLE_SP_EFFECT_ID_CHARA_BIND",
		"MIG_EQUIPABLE_SP_EFFECT_ID_VANISH_EFFECT",
		"MIG_EQUIPABLE_SP_EFFECT_ID_VANISH_EFFECT_V2",
		"MIG_EQUIPABLE_SP_EFFECT_ID_VANISH_EFFECT_AND_CHARA_BIND",
		"MIG_EQUIPABLE_SP_EFFECT_ID_SECRET_EFFECT",

		"MIG_EQUIPABLE_SP_EFFECT_ID_PARAM_OLD_VAGUE",
		"MIG_EQUIPABLE_SP_EFFECT_ID_IGNORE_MDEF_OLD_VAGUE",
		"MIG_EQUIPABLE_SP_EFFECT_ID_SKILL_DELAY_OLD_VAGUE",
		"MIG_EQUIPABLE_SP_EFFECT_ID_AUTO_SPELL_OLD_VAGUE",

/*
	★★　変更したら、先行移行データの dat を再出力すること　★★
	対象
		mig.enchlist.dat.js
*/

		"MIG_EQUIPABLE_SP_STATIC_ID_TYPE",
		"MIG_EQUIPABLE_SP_STATIC_ID_POSITION",
		"MIG_EQUIPABLE_SP_STATIC_ID_EQUIP",			// 『装備 : 』カードデータ用、解析処理等未対応
		"MIG_EQUIPABLE_SP_STATIC_ID_ELEMENT",
		"MIG_EQUIPABLE_SP_STATIC_ID_SLOT",
		"MIG_EQUIPABLE_SP_STATIC_ID_ATK",
		"MIG_EQUIPABLE_SP_STATIC_ID_MATK",
		"MIG_EQUIPABLE_SP_STATIC_ID_DEF",
		"MIG_EQUIPABLE_SP_STATIC_ID_MDEF",
		"MIG_EQUIPABLE_SP_STATIC_ID_REFINABLE",
		"MIG_EQUIPABLE_SP_STATIC_ID_BREAKABLE",
		"MIG_EQUIPABLE_SP_STATIC_ID_WEIGHT",
		"MIG_EQUIPABLE_SP_STATIC_ID_REQUIRED_LEVEL",
		"MIG_EQUIPABLE_SP_STATIC_ID_REQUIRED_LEVEL_NONE",
		"MIG_EQUIPABLE_SP_STATIC_ID_REQUIRED_JOB",
		"MIG_EQUIPABLE_SP_STATIC_ID_REQUIRED_JOB_SERIES",
		"MIG_EQUIPABLE_SP_STATIC_ID_REQUIRED_JOB_SERIES_3RD",


/*
	★★　変更したら、先行移行データの dat を再出力すること　★★
	対象
		mig.enchlist.dat.js
*/

		"MIG_EQUIPABLE_SP_LIST_DATA_ID_ENCHANT_TARGET_LIST",
		"MIG_EQUIPABLE_SP_LIST_DATA_ID_ENCHANT_POSITION_NTH_STAGE",
		"MIG_EQUIPABLE_SP_LIST_DATA_ID_ENCHANT_POSITION_NTH_STAGE_V2",
		"MIG_EQUIPABLE_SP_LIST_DATA_ID_ENCHANT_POSITION_NTH_ENCHANT",
		"MIG_EQUIPABLE_SP_LIST_DATA_ID_ENCHANT_POSITION_NTH_SLOT",
		"MIG_EQUIPABLE_SP_LIST_DATA_ID_ENCHANT_POSITION_NTH_SLOT_V2",
		"MIG_EQUIPABLE_SP_LIST_DATA_ID_ENCHANT_POSITION_NTH_SLOT_V3",
		"MIG_EQUIPABLE_SP_LIST_DATA_ID_ENCHANT_POSITION_NTH_SLOT_V4",
		"MIG_EQUIPABLE_SP_LIST_DATA_ID_ENCHANT_POSITION_NTH_SELECT",
		"MIG_EQUIPABLE_SP_LIST_DATA_ID_ENCHANT_POSITION_SLOT_ENCHANT",
		"MIG_EQUIPABLE_SP_LIST_DATA_ID_REFINE_CONDITION",
		"MIG_EQUIPABLE_SP_LIST_DATA_ID_REFINE_CONDITION_V2",
		"MIG_EQUIPABLE_SP_LIST_DATA_ID_ENCHANT_EFFECT_LIST",
		"MIG_EQUIPABLE_SP_LIST_DATA_ID_REFINE_CONDITION_V3",

	],
	1,
	1
);
CGlobalConstManager.DefinePseudoEnum(
	"EnumMigEquipableSpId",
	[
		"MIG_ITEM_SP_ID_NONE",
		"MIG_ITEM_SP_ID_DUMMY",
	],
	0,
	0
);













// 移行後は不要になるはずのもの

function MigGetItemSpTagArrayByOldSpID (spid) {

	// FOR_SET 系は、SpTag は同一だが、取得先（取得に使用する関数）が異なるので注意

	switch (spid) {

	case ITEM_SP_STR_PLUS:
	case ITEM_SP_STR_PLUS_FOR_SET:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_STR)
			,
		];

	case ITEM_SP_AGI_PLUS:
	case ITEM_SP_AGI_PLUS_FOR_SET:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_AGI)
			,
		];

	case ITEM_SP_VIT_PLUS:
	case ITEM_SP_VIT_PLUS_FOR_SET:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_VIT)
			,
		];

	case ITEM_SP_INT_PLUS:
	case ITEM_SP_INT_PLUS_FOR_SET:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_INT)
			,
		];

	case ITEM_SP_DEX_PLUS:
	case ITEM_SP_DEX_PLUS_FOR_SET:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_DEX)
			,
		];

	case ITEM_SP_LUK_PLUS:
	case ITEM_SP_LUK_PLUS_FOR_SET:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_LUK)
			,
		];

	case ITEM_SP_ALLSTATUS_PLUS:
	case ITEM_SP_ALLSTATUS_PLUS_FOR_SET:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_ALL_STATUS)
			,
		];

	case ITEM_SP_HIT_PLUS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_HIT)
			,
		];

	case ITEM_SP_FLEE_PLUS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_FLEE)
			,
		];

	case ITEM_SP_CRI_PLUS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_CRI)
			,
		];

	case ITEM_SP_LUCKY_PLUS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_LUCKY)
			,
		];

	case ITEM_SP_ASPD_UP:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_ASPD)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_MAXHP_PLUS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_MAXHP)
			,
		];

	case ITEM_SP_MAXSP_PLUS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_MAXSP)
			,
		];

	case ITEM_SP_MAXHP_UP:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_MAXHP)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_MAXSP_UP:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_MAXSP)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_ATK_PLUS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_ATK)
			,
		];

	case ITEM_SP_DEF_PLUS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_DEF)
			,
		];

	case ITEM_SP_MDEF_PLUS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_MDEF)
			,
		];

	case ITEM_SP_LONGRANGE_DAMAGE_UP:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL_LONG)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_PHYSICAL_DAMAGE_UP_BOSS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BOSS, MIG_BOSS_ID_BOSS)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BOSS, MIG_BOSS_ID_BOSS)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_PHYSICAL_DAMAGE_UP_SIZE_SMALL:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_SIZE_MEDIUM:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_SIZE_LARGE:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_SIZE, MIG_SIZE_ID_SMALL + (spid - ITEM_SP_PHYSICAL_DAMAGE_UP_SIZE_SMALL))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_SIZE, MIG_SIZE_ID_SMALL + (spid - ITEM_SP_PHYSICAL_DAMAGE_UP_SIZE_SMALL))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_SOLID:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_UNDEAD:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_ANIMAL:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_PLANT:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_INSECT:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_FISH:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_DEMON:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_HUMAN:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_ANGEL:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_DRAGON:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_SOLID + (spid - ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_SOLID))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_SOLID + (spid - ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_SOLID))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_VANITY:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_WATER:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_EARTH:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_FIRE:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_WIND:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_POISON:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_HOLY:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_DARK:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_PSYCO:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_UNDEAD:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_MONSTER, MIG_ELEMENT_ID_VANITY + (spid - ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_VANITY))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_MONSTER, MIG_ELEMENT_ID_VANITY + (spid - ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_VANITY))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_RESIST_RACE_SOLID:
	case ITEM_SP_RESIST_RACE_UNDEAD:
	case ITEM_SP_RESIST_RACE_ANIMAL:
	case ITEM_SP_RESIST_RACE_PLANT:
	case ITEM_SP_RESIST_RACE_INSECT:
	case ITEM_SP_RESIST_RACE_FISH:
	case ITEM_SP_RESIST_RACE_DEMON:
	case ITEM_SP_RESIST_RACE_HUMAN:
	case ITEM_SP_RESIST_RACE_ANGEL:
	case ITEM_SP_RESIST_RACE_DRAGON:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_SOLID + (spid - ITEM_SP_RESIST_RACE_SOLID))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_SOLID + (spid - ITEM_SP_RESIST_RACE_SOLID))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_SOLID + (spid - ITEM_SP_RESIST_RACE_SOLID))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_SOLID + (spid - ITEM_SP_RESIST_RACE_SOLID))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_RESIST_ELM_VANITY:
	case ITEM_SP_RESIST_ELM_WATER:
	case ITEM_SP_RESIST_ELM_EARTH:
	case ITEM_SP_RESIST_ELM_FIRE:
	case ITEM_SP_RESIST_ELM_WIND:
	case ITEM_SP_RESIST_ELM_POISON:
	case ITEM_SP_RESIST_ELM_HOLY:
	case ITEM_SP_RESIST_ELM_DARK:
	case ITEM_SP_RESIST_ELM_PSYCO:
	case ITEM_SP_RESIST_ELM_UNDEAD:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT, MIG_ELEMENT_ID_VANITY + (spid - ITEM_SP_RESIST_ELM_VANITY))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT, MIG_ELEMENT_ID_VANITY + (spid - ITEM_SP_RESIST_ELM_VANITY))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_ATTACK, MIG_ELEMENT_ID_VANITY + (spid - ITEM_SP_RESIST_ELM_VANITY))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_ATTACK, MIG_ELEMENT_ID_VANITY + (spid - ITEM_SP_RESIST_ELM_VANITY))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_CRITICAL_DAMAGE_UP:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_CRITICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_SKILL_CAST_TIME:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_CAST_TIME)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_SKILL_DELAY_DOWN:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_SKILL_DELAY)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_HPR_UP:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_HPR)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_SPR_UP:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_SPR)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_RESIST_BOSS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BOSS, MIG_BOSS_ID_BOSS)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BOSS, MIG_BOSS_ID_BOSS)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BOSS, MIG_BOSS_ID_BOSS)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BOSS, MIG_BOSS_ID_BOSS)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_RESIST_LONGRANGE:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL_LONG)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL_LONG)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL_LONG)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL_LONG)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_RESIST_NOTBOSS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BOSS, MIG_BOSS_ID_NORMAL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BOSS, MIG_BOSS_ID_NORMAL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BOSS, MIG_BOSS_ID_NORMAL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BOSS, MIG_BOSS_ID_NORMAL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_PHYSICAL_DAMAGE_UP:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE_OLD)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_ATK_UP:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_ATK)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_MAGICAL_DAMAGE_UP:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_MAGICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_MAGICAL_DAMAGE_UP_BOSS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_MAGICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BOSS, MIG_BOSS_ID_BOSS)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_MAGICAL_DAMAGE_UP_SIZE_SMALL:
	case ITEM_SP_MAGICAL_DAMAGE_UP_SIZE_MEDIUM:
	case ITEM_SP_MAGICAL_DAMAGE_UP_SIZE_LARGE:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_MAGICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_SIZE, MIG_SIZE_ID_SMALL + (spid - ITEM_SP_MAGICAL_DAMAGE_UP_SIZE_SMALL))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_MATK_PLUS_TYPE_NOTSTUFF:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_MATK)
			,
		];

	case ITEM_SP_ASPD_PLUS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_ASPD)
			,
		];

	case ITEM_SP_COST_DOWN:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_SKILL_COST)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_EXP_UP_ALL:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_EXP)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_DEF_UP:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_DEF)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_MDEF_UP:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_MDEF)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_SKILL_FIXED_MINUS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_FIXED_TIME)
			,
		];

	case ITEM_SP_CRITICAL_UP_RACE_SOLID:
	case ITEM_SP_CRITICAL_UP_RACE_UNDEAD:
	case ITEM_SP_CRITICAL_UP_RACE_ANIMAL:
	case ITEM_SP_CRITICAL_UP_RACE_PLANT:
	case ITEM_SP_CRITICAL_UP_RACE_INSECT:
	case ITEM_SP_CRITICAL_UP_RACE_FISH:
	case ITEM_SP_CRITICAL_UP_RACE_DEMON:
	case ITEM_SP_CRITICAL_UP_RACE_HUMAN:
	case ITEM_SP_CRITICAL_UP_RACE_ANGEL:
	case ITEM_SP_CRITICAL_UP_RACE_DRAGON:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_CRI)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_SOLID + (spid - ITEM_SP_CRITICAL_UP_RACE_SOLID))
			,
		];

	case ITEM_SP_EXP_UP_RACE_SOLID:
	case ITEM_SP_EXP_UP_RACE_UNDEAD:
	case ITEM_SP_EXP_UP_RACE_ANIMAL:
	case ITEM_SP_EXP_UP_RACE_PLANT:
	case ITEM_SP_EXP_UP_RACE_INSECT:
	case ITEM_SP_EXP_UP_RACE_FISH:
	case ITEM_SP_EXP_UP_RACE_DEMON:
	case ITEM_SP_EXP_UP_RACE_HUMAN:
	case ITEM_SP_EXP_UP_RACE_ANGEL:
	case ITEM_SP_EXP_UP_RACE_DRAGON:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_EXP)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_SOLID + (spid - ITEM_SP_EXP_UP_RACE_SOLID))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_APPEND_STATE_POISON:
	case ITEM_SP_APPEND_STATE_STUN:
	case ITEM_SP_APPEND_STATE_FROZEN:
	case ITEM_SP_APPEND_STATE_CURSED:
	case ITEM_SP_APPEND_STATE_BLIND:
	case ITEM_SP_APPEND_STATE_SLEEP:
	case ITEM_SP_APPEND_STATE_SILENCE:
	case ITEM_SP_APPEND_STATE_CONFUSE:
	case ITEM_SP_APPEND_STATE_BLEEDING:
	case ITEM_SP_APPEND_STATE_STONE:
	case ITEM_SP_APPEND_STATE_BREAK_WEAPON:
	case ITEM_SP_APPEND_STATE_BREAK_HELM:
	case ITEM_SP_APPEND_STATE_BREAK_ARMOR:
	case ITEM_SP_APPEND_STATE_BREAK_SHIELD:
	case ITEM_SP_APPEND_STATE_BREAK_SHOULDER:
	case ITEM_SP_APPEND_STATE_BREAK_SHOES:
	case ITEM_SP_APPEND_STATE_BREAK_ACCESSARY:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_STATE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_STATE, MIG_STATE_ID_POISON + (spid - ITEM_SP_APPEND_STATE_POISON))
			,
		];

	case ITEM_SP_RESIST_STATE_POISON:
	case ITEM_SP_RESIST_STATE_STUN:
	case ITEM_SP_RESIST_STATE_FROZEN:
	case ITEM_SP_RESIST_STATE_CURSED:
	case ITEM_SP_RESIST_STATE_BLIND:
	case ITEM_SP_RESIST_STATE_SLEEP:
	case ITEM_SP_RESIST_STATE_SILENCE:
	case ITEM_SP_RESIST_STATE_CONFUSE:
	case ITEM_SP_RESIST_STATE_BLEEDING:
	case ITEM_SP_RESIST_STATE_STONE:
	case ITEM_SP_RESIST_STATE_BREAK_WEAPON:
	case ITEM_SP_RESIST_STATE_BREAK_HELM:
	case ITEM_SP_RESIST_STATE_BREAK_ARMOR:
	case ITEM_SP_RESIST_STATE_BREAK_SHIELD:
	case ITEM_SP_RESIST_STATE_BREAK_SHOULDER:
	case ITEM_SP_RESIST_STATE_BREAK_SHOES:
	case ITEM_SP_RESIST_STATE_BREAK_ACCESSARY:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_STATE, MIG_STATE_ID_POISON + (spid - ITEM_SP_RESIST_STATE_POISON))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_STATE, MIG_STATE_ID_POISON + (spid - ITEM_SP_RESIST_STATE_POISON))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_STATELESS)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_STATE, MIG_STATE_ID_POISON + (spid - ITEM_SP_RESIST_STATE_POISON))
			,
		];

	case ITEM_SP_MAGICAL_DAMAGE_UP_RACE_SOLID:
	case ITEM_SP_MAGICAL_DAMAGE_UP_RACE_UNDEAD:
	case ITEM_SP_MAGICAL_DAMAGE_UP_RACE_ANIMAL:
	case ITEM_SP_MAGICAL_DAMAGE_UP_RACE_PLANT:
	case ITEM_SP_MAGICAL_DAMAGE_UP_RACE_INSECT:
	case ITEM_SP_MAGICAL_DAMAGE_UP_RACE_FISH:
	case ITEM_SP_MAGICAL_DAMAGE_UP_RACE_DEMON:
	case ITEM_SP_MAGICAL_DAMAGE_UP_RACE_HUMAN:
	case ITEM_SP_MAGICAL_DAMAGE_UP_RACE_ANGEL:
	case ITEM_SP_MAGICAL_DAMAGE_UP_RACE_DRAGON:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_MAGICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_SOLID + (spid - ITEM_SP_MAGICAL_DAMAGE_UP_RACE_SOLID))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_RESIST_SIZE_SMALL:
	case ITEM_SP_RESIST_SIZE_MEDIUM:
	case ITEM_SP_RESIST_SIZE_LARGE:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_SIZE, MIG_SIZE_ID_SMALL + (spid - ITEM_SP_RESIST_SIZE_SMALL))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_SIZE, MIG_SIZE_ID_SMALL + (spid - ITEM_SP_RESIST_SIZE_SMALL))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_SIZE, MIG_SIZE_ID_SMALL + (spid - ITEM_SP_RESIST_SIZE_SMALL))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_SIZE, MIG_SIZE_ID_SMALL + (spid - ITEM_SP_RESIST_SIZE_SMALL))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_RESIST_MAGIC:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_MAGICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_MAGICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_PHYSICAL_DAMAGE_UP_PLAYER_ALL:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_MAGICAL_DAMAGE_UP_PLAYER_ALL:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_MAGICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_RESIST_PLAYER_ALL:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_PHYSICAL_DAMAGE_UP_SIZE_ALL:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_SIZE, MIG_SIZE_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_SIZE, MIG_SIZE_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_ALL:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_ALL:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_MONSTER, MIG_ELEMENT_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_MONSTER, MIG_ELEMENT_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_RESIST_RACE_ALL:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_RESIST_ELM_ALL:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT, MIG_ELEMENT_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT, MIG_ELEMENT_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_ATTACK, MIG_ELEMENT_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_ATTACK, MIG_ELEMENT_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_MAGICAL_DAMAGE_UP_SIZE_ALL:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_MAGICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_SIZE, MIG_SIZE_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_MAGICAL_DAMAGE_UP_RACE_ALL:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_MAGICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_PHYSICAL_DAMAGE_UP_NOTBOSS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BOSS, MIG_BOSS_ID_NORMAL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BOSS, MIG_BOSS_ID_NORMAL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_MAGICAL_DAMAGE_UP_NOTBOSS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_MAGICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BOSS, MIG_BOSS_ID_NORMAL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_ALL:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_MAGICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_MONSTER, MIG_ELEMENT_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_MAGICAL_DAMAGE_UP_ELM_ALL:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_MAGICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_MAGICAL, MIG_ELEMENT_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_RESIST_MONSTER_ELM_ALL:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_MONSTER, MIG_ELEMENT_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_MONSTER, MIG_ELEMENT_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_MONSTER, MIG_ELEMENT_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_MONSTER, MIG_ELEMENT_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_PHYSICAL_DAMAGE_UP_PLAYER_DORAM:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_DORAM)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_DORAM)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_MAGICAL_DAMAGE_UP_PLAYER_DORAM:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_MAGICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_DORAM)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_RESIST_PLAYER_DORAM:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_DORAM)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_DORAM)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_DORAM)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_DORAM)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_PHYSICAL_DAMAGE_UP_PLAYER_HUMAN:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_HUMAN)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_HUMAN)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_MAGICAL_DAMAGE_UP_PLAYER_HUMAN:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_MAGICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_HUMAN)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_RESIST_PLAYER_HUMAN:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_HUMAN)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_HUMAN)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_HUMAN)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PLAYER, MIG_PLAYER_ID_HUMAN)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_VANITY:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_WATER:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_EARTH:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_FIRE:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_WIND:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_POISON:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_HOLY:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_DARK:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_PSYCO:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_UNDEAD:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_PHYSICAL, MIG_ELEMENT_ID_VANITY + (spid - ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_VANITY))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_IGNORE_DEF_ALL:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_IGNORE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_DEF)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_IGNORE_DEF_NOTBOSS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_IGNORE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_DEF)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BOSS, MIG_BOSS_ID_NORMAL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_IGNORE_DEF_BOSS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_IGNORE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_DEF)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BOSS, MIG_BOSS_ID_BOSS)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_IGNORE_DEF_RACE_ALL:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_IGNORE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_DEF)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_IGNORE_MDEF_ALL:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_IGNORE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_MDEF)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_IGNORE_MDEF_NOTBOSS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_IGNORE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_MDEF)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BOSS, MIG_BOSS_ID_NORMAL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_IGNORE_MDEF_BOSS:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_IGNORE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_MDEF)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_BOSS, MIG_BOSS_ID_BOSS)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_IGNORE_MDEF_RACE_ALL:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_IGNORE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_MDEF)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_ALL)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_IGNORE_DEF_RACE_SOLID:
	case ITEM_SP_IGNORE_DEF_RACE_UNDEAD:
	case ITEM_SP_IGNORE_DEF_RACE_ANIMAL:
	case ITEM_SP_IGNORE_DEF_RACE_PLANT:
	case ITEM_SP_IGNORE_DEF_RACE_INSECT:
	case ITEM_SP_IGNORE_DEF_RACE_FISH:
	case ITEM_SP_IGNORE_DEF_RACE_DEMON:
	case ITEM_SP_IGNORE_DEF_RACE_HUMAN:
	case ITEM_SP_IGNORE_DEF_RACE_ANGEL:
	case ITEM_SP_IGNORE_DEF_RACE_DRAGON:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_IGNORE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_DEF)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_SOLID + (spid - ITEM_SP_IGNORE_DEF_RACE_SOLID))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_IGNORE_MDEF_RACE_SOLID:
	case ITEM_SP_IGNORE_MDEF_RACE_UNDEAD:
	case ITEM_SP_IGNORE_MDEF_RACE_ANIMAL:
	case ITEM_SP_IGNORE_MDEF_RACE_PLANT:
	case ITEM_SP_IGNORE_MDEF_RACE_INSECT:
	case ITEM_SP_IGNORE_MDEF_RACE_FISH:
	case ITEM_SP_IGNORE_MDEF_RACE_DEMON:
	case ITEM_SP_IGNORE_MDEF_RACE_HUMAN:
	case ITEM_SP_IGNORE_MDEF_RACE_ANGEL:
	case ITEM_SP_IGNORE_MDEF_RACE_DRAGON:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_IGNORE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_MDEF)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_SOLID + (spid - ITEM_SP_IGNORE_MDEF_RACE_SOLID))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_RESIST_MONSTER_ELM_VANITY:
	case ITEM_SP_RESIST_MONSTER_ELM_WATER:
	case ITEM_SP_RESIST_MONSTER_ELM_EARTH:
	case ITEM_SP_RESIST_MONSTER_ELM_FIRE:
	case ITEM_SP_RESIST_MONSTER_ELM_WIND:
	case ITEM_SP_RESIST_MONSTER_ELM_POISON:
	case ITEM_SP_RESIST_MONSTER_ELM_HOLY:
	case ITEM_SP_RESIST_MONSTER_ELM_DARK:
	case ITEM_SP_RESIST_MONSTER_ELM_PSYCO:
	case ITEM_SP_RESIST_MONSTER_ELM_UNDEAD:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_MONSTER, MIG_ELEMENT_ID_VANITY + (spid - ITEM_SP_RESIST_MONSTER_ELM_VANITY))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_MONSTER, MIG_ELEMENT_ID_VANITY + (spid - ITEM_SP_RESIST_MONSTER_ELM_VANITY))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_MONSTER, MIG_ELEMENT_ID_VANITY + (spid - ITEM_SP_RESIST_MONSTER_ELM_VANITY))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_MONSTER, MIG_ELEMENT_ID_VANITY + (spid - ITEM_SP_RESIST_MONSTER_ELM_VANITY))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_MAGICAL_DAMAGE_UP_ELM_VANITY:
	case ITEM_SP_MAGICAL_DAMAGE_UP_ELM_WATER:
	case ITEM_SP_MAGICAL_DAMAGE_UP_ELM_EARTH:
	case ITEM_SP_MAGICAL_DAMAGE_UP_ELM_FIRE:
	case ITEM_SP_MAGICAL_DAMAGE_UP_ELM_WIND:
	case ITEM_SP_MAGICAL_DAMAGE_UP_ELM_POISON:
	case ITEM_SP_MAGICAL_DAMAGE_UP_ELM_HOLY:
	case ITEM_SP_MAGICAL_DAMAGE_UP_ELM_DARK:
	case ITEM_SP_MAGICAL_DAMAGE_UP_ELM_PSYCO:
	case ITEM_SP_MAGICAL_DAMAGE_UP_ELM_UNDEAD:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_MAGICAL, MIG_ELEMENT_ID_VANITY + (spid - ITEM_SP_MAGICAL_DAMAGE_UP_ELM_VANITY))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_VANITY:
	case ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_WATER:
	case ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_EARTH:
	case ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_FIRE:
	case ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_WIND:
	case ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_POISON:
	case ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_HOLY:
	case ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_DARK:
	case ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_PSYCO:
	case ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_UNDEAD:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_MAGICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_ELEMENT_MONSTER, MIG_ELEMENT_ID_VANITY + (spid - ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_VANITY))
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];



	// 第二期対応
	case ITEM_SP_PERFECT_ATTACK_UP:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_GUIDED)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_REFLECT_PHYSICAL_DAMAGE:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_REFLECT)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL_SHORT)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_SHORTRANGE_DAMAGE_UP:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL_SHORT)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_WEAPON_ATK_UP:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_PARAM)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_PARAM, MIG_PARAM_ID_WEAPON_ATK)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_HUMAN_NOT_PLAYER:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_PHYSICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_HUMAN)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_DISEFFECT_TARGET, MIG_DISEFFECT_TARGET_ID_PLAYER)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_HUMAN)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_DISEFFECT_TARGET, MIG_DISEFFECT_TARGET_ID_PLAYER)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_MAGICAL_DAMAGE_UP_RACE_HUMAN_NOT_PLAYER:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_ATTACK_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_METHOD, MIG_METHOD_ID_MAGICAL)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_TIMING, MIG_TIMING_ID_BY_ATTACK)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_HUMAN)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_DISEFFECT_TARGET, MIG_DISEFFECT_TARGET_ID_PLAYER)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_RESIST_RACE_HUMAN_NOT_PLAYER:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_HUMAN)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_DISEFFECT_TARGET, MIG_DISEFFECT_TARGET_ID_PLAYER)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RESIST_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_HUMAN)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_DISEFFECT_TARGET, MIG_DISEFFECT_TARGET_ID_PLAYER)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_HUMAN)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_DISEFFECT_TARGET, MIG_DISEFFECT_TARGET_ID_PLAYER)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RECEIVE_DAMAGE_OLD)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_RACE, MIG_RACE_ID_HUMAN)
			.AddAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_DISEFFECT_TARGET, MIG_DISEFFECT_TARGET_ID_PLAYER)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_SPECIAL_RANGE:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_RANGE)
			,
		];




	// TODO: 将来的に変えるかも
	case ITEM_SP_HEAL_UP_USING:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_HEAL_USING)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];

	case ITEM_SP_HEAL_UP_USED:
		return [
			new CMigEquipableSpTag()
			.SetSpId(MIG_EQUIPABLE_SP_EFFECT_ID_HEAL_USED)
			.SetAttribute(MIG_EQUIPABLE_SP_ATTRIBUTE_ID_VALUE_UNIT, MIG_VALUE_UNIT_ID_PERCENT)
			,
		];



	// この関数では処理しない（別方式で個別対応する）もの
	case ITEM_SP_ELEMENTAL:
	case ITEM_SP_BODY_ELEMENT:
	case ITEM_SP_ARMS_ELEMENT:
	case ITEM_SP_PENETRATE_DEF:
	case ITEM_SP_LEARN_SKILL:
	case ITEM_SP_LEARN_SKILL_LEVEL_UNSPECIFIED:
	case ITEM_SP_LEARN_SKILL_HIDDEN_DETAIL:
	case ITEM_SP_AUTO_SPELL:
	case ITEM_SP_AUTO_SPELL_LEVEL_UNSPECIFIED:
	case ITEM_SP_AUTO_SPELL_HIDDEN_DETAIL:
		break;



	// TODO: 未対応
	case ITEM_SP_KIRI_EFFECT:
	case ITEM_SP_DEF_DIVIDE_PENARTY:
	case ITEM_SP_LONGRANGE_CRI_PLUS:
	case ITEM_SP_DAMAGE_UP_GROUP_GOBLIN:
	case ITEM_SP_DAMAGE_UP_GROUP_COBOLD:
	case ITEM_SP_DAMAGE_UP_GROUP_ORC:
	case ITEM_SP_DAMAGE_UP_GROUP_GOLEM:
	case ITEM_SP_MATK_PLUS:
	case ITEM_SP_SET_DEFINITION:
	case ITEM_SP_HEAL_DAMAGE_UP:
	case ITEM_SP_HEAL_UP_USING_ONLY_HEAL:
	case ITEM_SP_HEAL_UP_USING_ONLY_HEAL_SERIES:
	case ITEM_SP_PENETRATE_DEF_RACE_SOLID:
	case ITEM_SP_PENETRATE_DEF_RACE_UNDEAD:
	case ITEM_SP_PENETRATE_DEF_RACE_ANIMAL:
	case ITEM_SP_PENETRATE_DEF_RACE_PLANT:
	case ITEM_SP_PENETRATE_DEF_RACE_INSECT:
	case ITEM_SP_PENETRATE_DEF_RACE_FISH:
	case ITEM_SP_PENETRATE_DEF_RACE_DEMON:
	case ITEM_SP_PENETRATE_DEF_RACE_HUMAN:
	case ITEM_SP_PENETRATE_DEF_RACE_ANGEL:
	case ITEM_SP_PENETRATE_DEF_RACE_DRAGON:
	case ITEM_SP_UNREFINABLE:
	case ITEM_SP_UNBREAKABLE:
	case ITEM_SP_STUFF2HAND:
	case ITEM_SP_LEARNED_SKILL_EFFECT:
	case ITEM_SP_INVALIDATE_ITEM_SP:
	case ITEM_SP_INVALIDATE_CARD_SP:
	case ITEM_SP_KOZYOSEN_TE_RENTAL_ITEM:
	case ITEM_SP_ATK_PLUS_GVGTE:
	case ITEM_SP_MATK_PLUS_GVGTE:
	case ITEM_SP_MAXHP_PLUS_GVGTE:
	case ITEM_SP_MAXSP_PLUS_GVGTE:
	case ITEM_SP_HEAL_UP_USING_GVGTE:
	case ITEM_SP_RESIST_FROZEN_GVGTE:
	case ITEM_SP_CRITICAL_DAMAGE_UP_RACE_SOLID:
	case ITEM_SP_CRITICAL_DAMAGE_UP_RACE_UNDEAD:
	case ITEM_SP_CRITICAL_DAMAGE_UP_RACE_ANIMAL:
	case ITEM_SP_CRITICAL_DAMAGE_UP_RACE_PLANT:
	case ITEM_SP_CRITICAL_DAMAGE_UP_RACE_INSECT:
	case ITEM_SP_CRITICAL_DAMAGE_UP_RACE_FISH:
	case ITEM_SP_CRITICAL_DAMAGE_UP_RACE_DEMON:
	case ITEM_SP_CRITICAL_DAMAGE_UP_RACE_HUMAN:
	case ITEM_SP_CRITICAL_DAMAGE_UP_RACE_ANGEL:
	case ITEM_SP_CRITICAL_DAMAGE_UP_RACE_DRAGON:
		break;
	}



	return null;
}











/**
 * 汎用エラーテキストを取得する.
 * @param text 判定対象テキスト
 * @return true:エラーを示すテキスト、false:正常なテキスト
 */
function MigGetGeneralErrorText() {
	return "エラー";
}

/**
 * エラーを示すテキストであるかを判定する.
 * @param text 判定対象テキスト
 * @return true:エラーを示すテキスト、false:正常なテキスト
 */
function MigIsErrorText(text) {

	if (text == MigGetGeneralErrorText()) {
		return true;
	}

	return false;
}



/**
 * 職業系統に属する職業IDの配列を取得する.
 * @param jobSeriesId 職業系統ID
 * @return 職業IDの配列
 */
function MigGetSeriesedJobIdArray(jobSeriesId) {

	switch (jobSeriesId) {
	case MIG_JOB_SERIES_ID_NOVICE_SERIES:
		return [MIG_JOB_ID_NOVICE, MIG_JOB_ID_HI_NOVICE, MIG_JOB_ID_SUPERNOVICE, MIG_JOB_ID_SUPERNOVICE_PLUS];

	case MIG_JOB_SERIES_ID_SWORDMAN_SERIES:
		return [MIG_JOB_ID_SWORDMAN, MIG_JOB_ID_HI_SWORDMAN, MIG_JOB_ID_KNIGHT, MIG_JOB_ID_LORDKNIGHT, MIG_JOB_ID_RUNEKNIGHT, MIG_JOB_ID_CRUSADER, MIG_JOB_ID_PALADIN, MIG_JOB_ID_ROYALGUARD];
	case MIG_JOB_SERIES_ID_THIEF_SERIES:
		return [MIG_JOB_ID_THIEF, MIG_JOB_ID_HI_THIEF, MIG_JOB_ID_ASSASIN, MIG_JOB_ID_ASSASINCROSS, MIG_JOB_ID_GILOTINCROSS, MIG_JOB_ID_ROGUE, MIG_JOB_ID_CHASER, MIG_JOB_ID_SHADOWCHASER];
	case MIG_JOB_SERIES_ID_ACOLYTE_SERIES:
		return [MIG_JOB_ID_ACOLYTE, MIG_JOB_ID_HI_ACOLYTE, MIG_JOB_ID_PRIEST, MIG_JOB_ID_HIGHPRIEST, MIG_JOB_ID_ARCBISHOP, MIG_JOB_ID_MONK, MIG_JOB_ID_CHAMPION, MIG_JOB_ID_SHURA];
	case MIG_JOB_SERIES_ID_ARCHER_SERIES:
		return [MIG_JOB_ID_ARCHER, MIG_JOB_ID_HI_ARCHER, MIG_JOB_ID_HUNTER, MIG_JOB_ID_SNIPER, MIG_JOB_ID_RANGER, MIG_JOB_ID_BARD, MIG_JOB_ID_CROWN, MIG_JOB_ID_MINSTREL, MIG_JOB_ID_DANCER, MIG_JOB_ID_ZYPSY, MIG_JOB_ID_WANDERER];
	case MIG_JOB_SERIES_ID_MAGICIAN_SERIES:
		return [MIG_JOB_ID_MAGICIAN, MIG_JOB_ID_HI_MAGICIAN, MIG_JOB_ID_WIZARD, MIG_JOB_ID_HIGHWIZARD, MIG_JOB_ID_WARLOCK, MIG_JOB_ID_SAGE, MIG_JOB_ID_PROFESSOR, MIG_JOB_ID_SORCERER];
	case MIG_JOB_SERIES_ID_MARCHANT_SERIES:
		return [MIG_JOB_ID_MARCHANT, MIG_JOB_ID_HI_MARCHANT, MIG_JOB_ID_BLACKSMITH, MIG_JOB_ID_WHITESMITH, MIG_JOB_ID_MECHANIC, MIG_JOB_ID_ALCHEMIST, MIG_JOB_ID_CREATOR, MIG_JOB_ID_GENETIC];

	case MIG_JOB_SERIES_ID_KNIGHT_SERIES:
		return [MIG_JOB_ID_KNIGHT, MIG_JOB_ID_LORDKNIGHT, MIG_JOB_ID_RUNEKNIGHT];
	case MIG_JOB_SERIES_ID_ASSASIN_SERIES:
		return [MIG_JOB_ID_ASSASIN, MIG_JOB_ID_ASSASINCROSS, MIG_JOB_ID_GILOTINCROSS];
	case MIG_JOB_SERIES_ID_PRIEST_SERIES:
		return [MIG_JOB_ID_PRIEST, MIG_JOB_ID_HIGHPRIEST, MIG_JOB_ID_ARCBISHOP];
	case MIG_JOB_SERIES_ID_HUNTER_SERIES:
		return [MIG_JOB_ID_HUNTER, MIG_JOB_ID_SNIPER, MIG_JOB_ID_RANGER];
	case MIG_JOB_SERIES_ID_WIZARD_SERIES:
		return [MIG_JOB_ID_WIZARD, MIG_JOB_ID_HIGHWIZARD, MIG_JOB_ID_WARLOCK];
	case MIG_JOB_SERIES_ID_BLACKSMITH_SERIES:
		return [MIG_JOB_ID_BLACKSMITH, MIG_JOB_ID_WHITESMITH, MIG_JOB_ID_MECHANIC];
	case MIG_JOB_SERIES_ID_CRUSADER_SERIES:
		return [MIG_JOB_ID_CRUSADER, MIG_JOB_ID_PALADIN, MIG_JOB_ID_ROYALGUARD];
	case MIG_JOB_SERIES_ID_ROGUE_SERIES:
		return [MIG_JOB_ID_ROGUE, MIG_JOB_ID_CHASER, MIG_JOB_ID_SHADOWCHASER];
	case MIG_JOB_SERIES_ID_MONK_SERIES:
		return [MIG_JOB_ID_MONK, MIG_JOB_ID_CHAMPION, MIG_JOB_ID_SHURA];
	case MIG_JOB_SERIES_ID_BARD_SERIES:
		return [MIG_JOB_ID_BARD, MIG_JOB_ID_CROWN, MIG_JOB_ID_MINSTREL];
	case MIG_JOB_SERIES_ID_DANCER_SERIES:
		return [MIG_JOB_ID_DANCER, MIG_JOB_ID_ZYPSY, MIG_JOB_ID_WANDERER];
	case MIG_JOB_SERIES_ID_SAGE_SERIES:
		return [MIG_JOB_ID_SAGE, MIG_JOB_ID_PROFESSOR, MIG_JOB_ID_SORCERER];
	case MIG_JOB_SERIES_ID_ALCHEMIST_SERIES:
		return [MIG_JOB_ID_ALCHEMIST, MIG_JOB_ID_CREATOR, MIG_JOB_ID_GENETIC];

	case MIG_JOB_SERIES_ID_HI_NOVICE_SERIES:
		return [MIG_JOB_ID_HI_NOVICE];

	case MIG_JOB_SERIES_ID_HI_SWORDMAN_SERIES:
		return [MIG_JOB_ID_HI_SWORDMAN, MIG_JOB_ID_LORDKNIGHT, MIG_JOB_ID_RUNEKNIGHT, MIG_JOB_ID_PALADIN, MIG_JOB_ID_ROYALGUARD];
	case MIG_JOB_SERIES_ID_HI_THIEF_SERIES:
		return [MIG_JOB_ID_HI_THIEF, MIG_JOB_ID_ASSASINCROSS, MIG_JOB_ID_GILOTINCROSS, MIG_JOB_ID_CHASER, MIG_JOB_ID_SHADOWCHASER];
	case MIG_JOB_SERIES_ID_HI_ACOLYTE_SERIES:
		return [MIG_JOB_ID_HI_ACOLYTE, MIG_JOB_ID_HIGHPRIEST, MIG_JOB_ID_ARCBISHOP, MIG_JOB_ID_CHAMPION, MIG_JOB_ID_SHURA];
	case MIG_JOB_SERIES_ID_HI_ARCHER_SERIES:
		return [MIG_JOB_ID_HI_ARCHER, MIG_JOB_ID_SNIPER, MIG_JOB_ID_RANGER, MIG_JOB_ID_CROWN, MIG_JOB_ID_MINSTREL, MIG_JOB_ID_ZYPSY, MIG_JOB_ID_WANDERER];
	case MIG_JOB_SERIES_ID_HI_MAGICIAN_SERIES:
		return [MIG_JOB_ID_HI_MAGICIAN, MIG_JOB_ID_HIGHWIZARD, MIG_JOB_ID_WARLOCK, MIG_JOB_ID_PROFESSOR, MIG_JOB_ID_SORCERER];
	case MIG_JOB_SERIES_ID_HI_MARCHANT_SERIES:
		return [MIG_JOB_ID_HI_MARCHANT, MIG_JOB_ID_WHITESMITH, MIG_JOB_ID_MECHANIC, MIG_JOB_ID_CREATOR, MIG_JOB_ID_GENETIC];

	case MIG_JOB_SERIES_ID_LORDKNIGHT_SERIES:
		return [MIG_JOB_ID_LORDKNIGHT, MIG_JOB_ID_RUNEKNIGHT];
	case MIG_JOB_SERIES_ID_ASSASINCROSS_SERIES:
		return [MIG_JOB_ID_ASSASINCROSS, MIG_JOB_ID_GILOTINCROSS];
	case MIG_JOB_SERIES_ID_HIGHPRIEST_SERIES:
		return [MIG_JOB_ID_HIGHPRIEST, MIG_JOB_ID_ARCBISHOP];
	case MIG_JOB_SERIES_ID_SNIPER_SERIES:
		return [MIG_JOB_ID_SNIPER, MIG_JOB_ID_RANGER];
	case MIG_JOB_SERIES_ID_HIGHWIZARD_SERIES:
		return [MIG_JOB_ID_HIGHWIZARD, MIG_JOB_ID_WARLOCK];
	case MIG_JOB_SERIES_ID_WHITESMITH_SERIES:
		return [MIG_JOB_ID_WHITESMITH, MIG_JOB_ID_MECHANIC];
	case MIG_JOB_SERIES_ID_PALADIN_SERIES:
		return [MIG_JOB_ID_PALADIN, MIG_JOB_ID_ROYALGUARD];
	case MIG_JOB_SERIES_ID_CHASER_SERIES:
		return [MIG_JOB_ID_CHASER, MIG_JOB_ID_SHADOWCHASER];
	case MIG_JOB_SERIES_ID_CHAMPION_SERIES:
		return [MIG_JOB_ID_CHAMPION, MIG_JOB_ID_SHURA];
	case MIG_JOB_SERIES_ID_CROWN_SERIES:
		return [MIG_JOB_ID_CROWN, MIG_JOB_ID_MINSTREL];
	case MIG_JOB_SERIES_ID_ZYPSY_SERIES:
		return [MIG_JOB_ID_ZYPSY, MIG_JOB_ID_WANDERER];
	case MIG_JOB_SERIES_ID_PROFESSOR_SERIES:
		return [MIG_JOB_ID_PROFESSOR, MIG_JOB_ID_SORCERER];
	case MIG_JOB_SERIES_ID_CREATOR_SERIES:
		return [MIG_JOB_ID_CREATOR, MIG_JOB_ID_GENETIC];

	case MIG_JOB_SERIES_ID_TAEGWON_SERIES:
		return [MIG_JOB_ID_TAEGWON, MIG_JOB_ID_STARGRADIATOR, MIG_JOB_ID_STAR_EMPEROR, MIG_JOB_ID_SOULLINKER, MIG_JOB_ID_SOUL_REAPER];
	case MIG_JOB_SERIES_ID_STARGRADIATOR_SERIES:
		return [MIG_JOB_ID_STARGRADIATOR, MIG_JOB_ID_STAR_EMPEROR];
	case MIG_JOB_SERIES_ID_SOULLINKER_SERIES:
		return [MIG_JOB_ID_SOULLINKER, MIG_JOB_ID_SOUL_REAPER];
	case MIG_JOB_SERIES_ID_NINJA_SERIES:
		return [MIG_JOB_ID_NINJA, MIG_JOB_ID_KAGERO, MIG_JOB_ID_OBORO];
	case MIG_JOB_SERIES_ID_GUNSLINGER_SERIES:
		return [MIG_JOB_ID_GUNSLINGER, MIG_JOB_ID_REBELLION];

	case MIG_JOB_SERIES_ID_SUPERNOVICE_SERIES:
		return [MIG_JOB_ID_SUPERNOVICE, MIG_JOB_ID_SUPERNOVICE_PLUS];
	case MIG_JOB_SERIES_ID_SUPERNOVICE_PLUS_SERIES:
		return [MIG_JOB_ID_SUPERNOVICE_PLUS];

	case MIG_JOB_SERIES_ID_RUNEKNIGHT_SERIES:
		return [MIG_JOB_ID_RUNEKNIGHT];
	case MIG_JOB_SERIES_ID_GILOTINCROSS_SERIES:
		return [MIG_JOB_ID_GILOTINCROSS];
	case MIG_JOB_SERIES_ID_ARCBISHOP_SERIES:
		return [MIG_JOB_ID_ARCBISHOP];
	case MIG_JOB_SERIES_ID_RANGER_SERIES:
		return [MIG_JOB_ID_RANGER];
	case MIG_JOB_SERIES_ID_WARLOCK_SERIES:
		return [MIG_JOB_ID_WARLOCK];
	case MIG_JOB_SERIES_ID_MECHANIC_SERIES:
		return [MIG_JOB_ID_MECHANIC];
	case MIG_JOB_SERIES_ID_ROYALGUARD_SERIES:
		return [MIG_JOB_ID_ROYALGUARD];
	case MIG_JOB_SERIES_ID_SHADOWCHASER_SERIES:
		return [MIG_JOB_ID_SHADOWCHASER];
	case MIG_JOB_SERIES_ID_SHURA_SERIES:
		return [MIG_JOB_ID_SHURA];
	case MIG_JOB_SERIES_ID_MINSTREL_SERIES:
		return [MIG_JOB_ID_MINSTREL];
	case MIG_JOB_SERIES_ID_WANDERER_SERIES:
		return [MIG_JOB_ID_WANDERER];
	case MIG_JOB_SERIES_ID_SORCERER_SERIES:
		return [MIG_JOB_ID_SORCERER];
	case MIG_JOB_SERIES_ID_GENETIC_SERIES:
		return [MIG_JOB_ID_GENETIC];

	case MIG_JOB_SERIES_ID_KAGERO_SERIES:
		return [MIG_JOB_ID_KAGERO];
	case MIG_JOB_SERIES_ID_OBORO_SERIES:
		return [MIG_JOB_ID_OBORO];
	case MIG_JOB_SERIES_ID_REBELLION_SERIES:
		return [MIG_JOB_ID_REBELLION];

	case MIG_JOB_SERIES_ID_SUMMONER_SERIES:
		return [MIG_JOB_ID_SUMMONER];

	case MIG_JOB_SERIES_ID_STAR_EMPEROR_SERIES:
		return [MIG_JOB_ID_STAR_EMPEROR];
	case MIG_JOB_SERIES_ID_SOUL_REAPER_SERIES:
		return [MIG_JOB_ID_SOUL_REAPER];

	default:
		return [EnumMigJobId.GetDefinedValue(EnumMigJobSeriesId.GetDefinedName(jobSeriesId).replace("MIG_JOB_SERIES_ID", "MIG_JOB_ID"))];

	}

	return [];
}

/**
 * ジョブ系列名を取得する.
 * @param jobSeriesId ジョブ系列ＩＤ
 */
function MigGetJobSeriesName(jobSeriesId) {

	var suffix = "";
	var definedName = EnumMigJobSeriesId.GetDefinedName(jobSeriesId);

	if (definedName.match(/_SERIES$/) != null) {
		suffix = "系";
		definedName = definedName.replace(/_SERIES$/, "");
	}

	switch (EnumMigJobSeriesId.GetDefinedValue(definedName)) {
	case MIG_JOB_SERIES_ID_NOVICE:
		return "ノービス" + suffix;

	case MIG_JOB_SERIES_ID_SWORDMAN:
		return "ソードマン" + suffix;
	case MIG_JOB_SERIES_ID_THIEF:
		return "シーフ" + suffix;
	case MIG_JOB_SERIES_ID_ACOLYTE:
		return "アコライト" + suffix;
	case MIG_JOB_SERIES_ID_ARCHER:
		return "アーチャー" + suffix;
	case MIG_JOB_SERIES_ID_MAGICIAN:
		return "マジシャン" + suffix;
	case MIG_JOB_SERIES_ID_MARCHANT:
		return "マーチャント" + suffix;

	case MIG_JOB_SERIES_ID_KNIGHT:
		return "ナイト" + suffix;
	case MIG_JOB_SERIES_ID_ASSASIN:
		return "アサシン" + suffix;
	case MIG_JOB_SERIES_ID_PRIEST:
		return "プリースト" + suffix;
	case MIG_JOB_SERIES_ID_HUNTER:
		return "ハンター" + suffix;
	case MIG_JOB_SERIES_ID_WIZARD:
		return "ウィザード" + suffix;
	case MIG_JOB_SERIES_ID_BLACKSMITH:
		return "ブラックスミス" + suffix;
	case MIG_JOB_SERIES_ID_CRUSADER:
		return "クルセイダー" + suffix;
	case MIG_JOB_SERIES_ID_ROGUE:
		return "ローグ" + suffix;
	case MIG_JOB_SERIES_ID_MONK:
		return "モンク" + suffix;
	case MIG_JOB_SERIES_ID_BARD:
		return "バード" + suffix;
	case MIG_JOB_SERIES_ID_DANCER:
		return "ダンサー" + suffix;
	case MIG_JOB_SERIES_ID_SAGE:
		return "セージ" + suffix;
	case MIG_JOB_SERIES_ID_ALCHEMIST:
		return "アルケミスト" + suffix;

	case MIG_JOB_SERIES_ID_HI_NOVICE:
		return "ハイ ノービス" + suffix;

	case MIG_JOB_SERIES_ID_HI_SWORDMAN:
		return "ハイ ソードマン" + suffix;
	case MIG_JOB_SERIES_ID_HI_THIEF:
		return "ハイ シーフ" + suffix;
	case MIG_JOB_SERIES_ID_HI_ACOLYTE:
		return "ハイ アコライト" + suffix;
	case MIG_JOB_SERIES_ID_HI_ARCHER:
		return "ハイ アーチャー" + suffix;
	case MIG_JOB_SERIES_ID_HI_MAGICIAN:
		return "ハイ マジシャン" + suffix;
	case MIG_JOB_SERIES_ID_HI_MARCHANT:
		return "ハイ マーチャント" + suffix;

	case MIG_JOB_SERIES_ID_LORDKNIGHT:
		return "ロードナイト" + suffix;
	case MIG_JOB_SERIES_ID_ASSASINCROSS:
		return "アサシンクロス" + suffix;
	case MIG_JOB_SERIES_ID_HIGHPRIEST:
		return "ハイプリースト" + suffix;
	case MIG_JOB_SERIES_ID_SNIPER:
		return "スナイパー" + suffix;
	case MIG_JOB_SERIES_ID_HIGHWIZARD:
		return "ハイウィザード" + suffix;
	case MIG_JOB_SERIES_ID_WHITESMITH:
		return "ホワイトスミス" + suffix;
	case MIG_JOB_SERIES_ID_PALADIN:
		return "パラディン" + suffix;
	case MIG_JOB_SERIES_ID_CHASER:
		return "チェイサー" + suffix;
	case MIG_JOB_SERIES_ID_CHAMPION:
		return "チャンピオン" + suffix;
	case MIG_JOB_SERIES_ID_CROWN:
		return "クラウン" + suffix;
	case MIG_JOB_SERIES_ID_ZYPSY:
		return "ジプシー" + suffix;
	case MIG_JOB_SERIES_ID_PROFESSOR:
		return "プロフェッサー" + suffix;
	case MIG_JOB_SERIES_ID_CREATOR:
		return "クリエイター" + suffix;

	case MIG_JOB_SERIES_ID_TAEGWON:
		return "テコンキッド" + suffix;
	case MIG_JOB_SERIES_ID_STARGRADIATOR:
		return "拳聖" + suffix;
	case MIG_JOB_SERIES_ID_SOULLINKER:
		return "ソウルリンカー" + suffix;
	case MIG_JOB_SERIES_ID_NINJA:
		return "忍者" + suffix;
	case MIG_JOB_SERIES_ID_GUNSLINGER:
		return "ガンスリンガー" + suffix;

	case MIG_JOB_SERIES_ID_SUPERNOVICE:
		return "スーパーノービス" + suffix;
	case MIG_JOB_SERIES_ID_SUPERNOVICE_PLUS:
		return "スーパーノービス＋" + suffix;

	case MIG_JOB_SERIES_ID_RUNEKNIGHT:
		return "ルーンナイト" + suffix;
	case MIG_JOB_SERIES_ID_GILOTINCROSS:
		return "ギロチンクロス" + suffix;
	case MIG_JOB_SERIES_ID_ARCBISHOP:
		return "アークビショップ" + suffix;
	case MIG_JOB_SERIES_ID_RANGER:
		return "レンジャー" + suffix;
	case MIG_JOB_SERIES_ID_WARLOCK:
		return "ウォーロック" + suffix;
	case MIG_JOB_SERIES_ID_MECHANIC:
		return "メカニック" + suffix;
	case MIG_JOB_SERIES_ID_ROYALGUARD:
		return "ロイヤルガード" + suffix;
	case MIG_JOB_SERIES_ID_SHADOWCHASER:
		return "シャドウチェイサー" + suffix;
	case MIG_JOB_SERIES_ID_SHURA:
		return "修羅" + suffix;
	case MIG_JOB_SERIES_ID_MINSTREL:
		return "ミンストレル" + suffix;
	case MIG_JOB_SERIES_ID_WANDERER:
		return "ワンダラー" + suffix;
	case MIG_JOB_SERIES_ID_SORCERER:
		return "ソーサラー" + suffix;
	case MIG_JOB_SERIES_ID_GENETIC:
		return "ジェネティック" + suffix;

	case MIG_JOB_SERIES_ID_KAGERO:
		return "影狼" + suffix;
	case MIG_JOB_SERIES_ID_OBORO:
		return "朧" + suffix;
	case MIG_JOB_SERIES_ID_REBELLION:
		return "リベリオン" + suffix;

	case MIG_JOB_SERIES_ID_SUMMONER:
		return "サモナー" + suffix;

	case MIG_JOB_SERIES_ID_STAR_EMPEROR:
		return "星帝" + suffix;
	case MIG_JOB_SERIES_ID_SOUL_REAPER:
		return "ソウルリーパー" + suffix;

	}

	return MigGetGeneralErrorText();
}

/**
 * パラメータのテキストを取得する.
 * @param paramId パラメータID
 * @return パラメータのテキスト
 */
function MigGetParamText(paramId) {

	switch (paramId) {

	case MIG_PARAM_ID_BASE_LV:
		return "BaseLv";

	case MIG_PARAM_ID_JOB_LV:
		return "JobLv";


	case MIG_PARAM_ID_STR:
		return "STR";

	case MIG_PARAM_ID_AGI:
		return "AGi";

	case MIG_PARAM_ID_VIT:
		return "VIT";

	case MIG_PARAM_ID_INT:
		return "INT";

	case MIG_PARAM_ID_DEX:
		return "DEX";

	case MIG_PARAM_ID_LUK:
		return "LUK";

	case MIG_PARAM_ID_ALL_STATUS:
		return "ALL_STATUS";


	case MIG_PARAM_ID_HIT:
		return "HIT";

	case MIG_PARAM_ID_FLEE:
		return "FLEE";

	case MIG_PARAM_ID_CRI:
		return "CRI";

	case MIG_PARAM_ID_LUCKY:
		return "LUCKY";

	case MIG_PARAM_ID_ASPD:
		return "ASPD";


	case MIG_PARAM_ID_MAXHP:
		return "MaxHP";

	case MIG_PARAM_ID_MAXSP:
		return "MaxSP";

	case MIG_PARAM_ID_NOWHP:
		return "HP";

	case MIG_PARAM_ID_NOWSP:
		return "SP";


	case MIG_PARAM_ID_ATK:
		return "ATK";

	case MIG_PARAM_ID_MATK:
		return "MATK";

	case MIG_PARAM_ID_DEF:
		return "DEF";

	case MIG_PARAM_ID_MDEF:
		return "MDEF";


	case MIG_PARAM_ID_HPR:
		return "HPR";

	case MIG_PARAM_ID_SPR:
		return "SPR";


	case MIG_PARAM_ID_GUIDED:
		return "GUIDED";

	}

	return MigGetGeneralErrorText();
}



/**
 * 装備領域のテキストを取得する.
 * @param equipRegionId 装備領域ID
 * @return 装備領域のテキスト
 */
function MigGetEquipRegionText(equipRegionId) {

	switch (equipRegionId) {

	case MIG_EQUIP_REGION_ID_ARMS_RIGHT:
		return "右手";

	case MIG_EQUIP_REGION_ID_ARMS_LEFT:
		return "左手";

	case MIG_EQUIP_REGION_ID_HEAD_TOP:
		return "頭上段";

	case MIG_EQUIP_REGION_ID_HEAD_MID:
		return "頭中段";

	case MIG_EQUIP_REGION_ID_HEAD_UNDER:
		return "頭下段";

	case MIG_EQUIP_REGION_ID_SHIELD:
		return "盾";

	case MIG_EQUIP_REGION_ID_BODY:
		return "体";

	case MIG_EQUIP_REGION_ID_SHOULDER:
		return "肩";

	case MIG_EQUIP_REGION_ID_FOOT:
		return "足";

	case MIG_EQUIP_REGION_ID_ACCESSORY_1:
		return "アクセ１";

	case MIG_EQUIP_REGION_ID_ACCESSORY_2:
		return "アクセ２";

	case MIG_EQUIP_REGION_ID_COSTUME_HEAD_TOP:
		return "頭上段（衣装）";

	case MIG_EQUIP_REGION_ID_COSTUME_HEAD_MID:
		return "頭中段（衣装）";

	case MIG_EQUIP_REGION_ID_COSTUME_HEAD_UNDER:
		return "頭下段（衣装）";
	}

	return MigGetGeneralErrorText();
}



/**
 * アイテム系列のテキストを取得する.
 * @param typeId 系列ＩＤ
 * @return アイテム系列のテキスト
 */
function MigGetItemTypeText(typeId) {

	switch (typeId) {

	case MIG_ITEM_TYPE_KNIFE:
		return "短剣";

	case MIG_ITEM_TYPE_SWORD:
		return "片手剣";

	case MIG_ITEM_TYPE_SWORD_2HAND:
		return "両手剣";

	case MIG_ITEM_TYPE_SPEAR:
		return "片手槍";

	case MIG_ITEM_TYPE_SPEAR_2HAND:
		return "両手槍";

	case MIG_ITEM_TYPE_AXE:
		return "片手斧";

	case MIG_ITEM_TYPE_AXE_2HAND:
		return "両手斧";

	case MIG_ITEM_TYPE_MACE:
		return "鈍器";

	case MIG_ITEM_TYPE_STUFF:
		return "片手杖";

	case MIG_ITEM_TYPE_STUFF_2HAND:
		return "両手杖";

	case MIG_ITEM_TYPE_BOW:
		return "弓";

	case MIG_ITEM_TYPE_KATAR:
		return "カタール";

	case MIG_ITEM_TYPE_BOOK:
		return "本";

	case MIG_ITEM_TYPE_FIST:
		return "爪";

	case MIG_ITEM_TYPE_MUSICAL:
		return "楽器";

	case MIG_ITEM_TYPE_WHIP:
		return "鞭";

	case MIG_ITEM_TYPE_FUMA:
		return "風魔手裏剣";

	case MIG_ITEM_TYPE_HANDGUN:
		return "ハンドガン";

	case MIG_ITEM_TYPE_RIFLE:
		return "ライフル";

	case MIG_ITEM_TYPE_SHOTGUN:
		return "ショットガン";

	case MIG_ITEM_TYPE_GATLINGGUN:
		return "ガトリングガン";

	case MIG_ITEM_TYPE_GRENADEGUN:
		return "グレネードガン";

	case MIG_ITEM_TYPE_HELM:
		return "兜";

	case MIG_ITEM_TYPE_ARMOR:
		return "鎧";

	case MIG_ITEM_TYPE_SHIELD:
		return "盾";

	case MIG_ITEM_TYPE_SHOULDER:
		return "肩にかける物";

	case MIG_ITEM_TYPE_SHOES:
		return "靴";

	case MIG_ITEM_TYPE_ACCESSORY:
		return "アクセサリー";

	case MIG_ITEM_TYPE_ACCESSORY_ON_1:
		return "アクセサリー(1)";

	case MIG_ITEM_TYPE_ACCESSORY_ON_2:
		return "アクセサリー(2)";

	case MIG_ITEM_TYPE_ARROW:
		return "矢";

	case MIG_ITEM_TYPE_BULLET:
		return "弾";

	case MIG_ITEM_TYPE_ETC:
		return "収集品";

	}

	return MigGetGeneralErrorText();
}



/**
 * アイテム位置のテキストを取得する.
 * @param positionId 位置ＩＤ
 * @return アイテム位置のテキスト
 */
function MigGetItemPositionText(positionId) {

	switch (positionId) {

	case MIG_ITEM_POSITION_NONE:
		return "-";

	case MIG_ITEM_POSITION_TOP:
		return "上段";

	case MIG_ITEM_POSITION_MID:
		return "中段";

	case MIG_ITEM_POSITION_UNDER:
		return "下段";

	case MIG_ITEM_POSITION_TOP_MID:
		return "上中段";

	case MIG_ITEM_POSITION_TOP_UNDER:
		return "上下段";

	case MIG_ITEM_POSITION_MID_UNDER:
		return "中下段";

	case MIG_ITEM_POSITION_TOP_MID_UNDER:
		return "上中下段";

	}

	return MigGetGeneralErrorText();
}



/**
 * アイテム系列が武器であるかを判定する.
 * @param typeId 系列ＩＤ
 * @return true:武器、false:武器出ない
 */
function MigIsArmsItemType(typeId) {

	switch (typeId) {

	case MIG_ITEM_TYPE_KNIFE:
	case MIG_ITEM_TYPE_SWORD:
	case MIG_ITEM_TYPE_SWORD_2HAND:
	case MIG_ITEM_TYPE_SPEAR:
	case MIG_ITEM_TYPE_SPEAR_2HAND:
	case MIG_ITEM_TYPE_AXE:
	case MIG_ITEM_TYPE_AXE_2HAND:
	case MIG_ITEM_TYPE_MACE:
	case MIG_ITEM_TYPE_STUFF:
	case MIG_ITEM_TYPE_STUFF_2HAND:
	case MIG_ITEM_TYPE_BOW:
	case MIG_ITEM_TYPE_KATAR:
	case MIG_ITEM_TYPE_BOOK:
	case MIG_ITEM_TYPE_FIST:
	case MIG_ITEM_TYPE_MUSICAL:
	case MIG_ITEM_TYPE_WHIP:
	case MIG_ITEM_TYPE_FUMA:
	case MIG_ITEM_TYPE_HANDGUN:
	case MIG_ITEM_TYPE_RIFLE:
	case MIG_ITEM_TYPE_SHOTGUN:
	case MIG_ITEM_TYPE_GATLINGGUN:
	case MIG_ITEM_TYPE_GRENADEGUN:
		return true;

	}

	return false;
}



/**
 * 種族名のテキストを取得する.
 * @param raceId 種族ID
 * @return 種族名のテキスト
 */
function MigGetRaceText(raceId) {

	switch (raceId) {
	case RACE_ID_SOLID:
		return "無形";

	case RACE_ID_UNDEAD:
		return "不死";

	case RACE_ID_ANIMAL:
		return "動物";

	case RACE_ID_PLANT:
		return "植物";

	case RACE_ID_INSECT:
		return "昆虫";

	case RACE_ID_FISH:
		return "魚貝";

	case RACE_ID_DEMON:
		return "悪魔";

	case RACE_ID_HUMAN:
		return "人間";

	case RACE_ID_ANGEL:
		return "天使";

	case RACE_ID_DRAGON:
		return "竜族";
	}

	return MigGetGeneralErrorText();
}



/**
 * 確率定数のテキストを取得する.
 * @param probId 確率定数ID
 * @return 確率定数のテキスト
 */
function MigGetProbText(probId) {

	switch (probId) {
	case MIG_PROB_ID_CERTAIN:
		return "一定";

	case MIG_PROB_ID_LOW:
		return "低";

	case MIG_PROB_ID_MID:
		return "中";

	case MIG_PROB_ID_HIGH:
		return "高";
	}

	return MigGetGeneralErrorText();
}



/**
 * 境界値フラグのテキストを取得する.
 * @param flagId 境界値フラグID
 * @param bShort 短縮形フラグ
 * @return 境界値フラグのテキスト
 */
function MigGetBorderFlagText(flagId, bShort) {

	switch (flagId) {

	case MIG_BORDER_FLAG_ID_EQUAL:
		return (bShort ? "" : "の時");

	case MIG_BORDER_FLAG_ID_NOT:
		return (bShort ? "未習得" : "未習得の時");

	case MIG_BORDER_FLAG_ID_UNDER:
		return ("以下" + (bShort ? "" : "の時"));

	case MIG_BORDER_FLAG_ID_OVER:
		return ("以上" + (bShort ? "" : "の時"));

	case MIG_BORDER_FLAG_ID_BY:
		return (bShort ? "毎" : "上がる毎に");

	}

	return MigGetGeneralErrorText();
}



/**
 * アイテムIDから、設定可能な装備領域の配列を取得する.
 * @param itemId アイテムID
 * @param jobId 職業ID（左手装備検証用）
 * @return 設定可能な装備領域の配列
 */
function MigGetEquipRegionByItemKind(itemId, jobId) {

	var itemData = null;
	var itemStaticDataType = 0;
	var itemStaticDataPosition = 0;
	var candidateRegionIdArray = null;

	// 指定のアイテムデータを取得する
	itemData = g_constDataManager.GetDataObject(CONST_DATA_KIND_ITEM, itemId);

	// 指定のアイテムの装備位置配列を特定する
	// TODO: データ移行過渡処理
	// 移行完了後なら、itemData が null になることはない
	if (!itemData) {
		switch (ItemObjNew[itemId][ITEM_DATA_INDEX_KIND]) {

		case ITEM_KIND_KNIFE:
		case ITEM_KIND_SWORD:
		case ITEM_KIND_SPEAR:
		case ITEM_KIND_AXE:
		case ITEM_KIND_CLUB:
		case ITEM_KIND_STUFF:
		case ITEM_KIND_BOOK:
		case ITEM_KIND_FIST:
		case ITEM_KIND_MUSICAL:
		case ITEM_KIND_WHIP:
			if (IsDualArmsJob(jobId)) {
				candidateRegionIdArray = [MIG_EQUIP_REGION_ID_ARMS_RIGHT, MIG_EQUIP_REGION_ID_ARMS_LEFT];
			}
			else {
				candidateRegionIdArray = [MIG_EQUIP_REGION_ID_ARMS_RIGHT];
			}
			break;

		case ITEM_KIND_SWORD_2HAND:
		case ITEM_KIND_SPEAR_2HAND:
		case ITEM_KIND_AXE_2HAND:
		case ITEM_KIND_BOW:
		case ITEM_KIND_KATAR:
		case ITEM_KIND_FUMA:
		case ITEM_KIND_HANDGUN:
		case ITEM_KIND_RIFLE:
		case ITEM_KIND_SHOTGUN:
		case ITEM_KIND_GATLINGGUN:
		case ITEM_KIND_GRENADEGUN:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_ARMS_RIGHT];
			break;

		case ITEM_KIND_HEAD_TOP:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_HEAD_TOP];
			break;
		case ITEM_KIND_HEAD_MID:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_HEAD_MID];
			break;
		case ITEM_KIND_HEAD_UNDER:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_HEAD_UNDER];
			break;
		case ITEM_KIND_BODY:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_BODY];
			break;
		case ITEM_KIND_SHIELD:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_SHIELD];
			break;
		case ITEM_KIND_SHOULDER:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_SHOULDER];
			break;
		case ITEM_KIND_FOOT:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_FOOT];
			break;
		case ITEM_KIND_ACCESSARY:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_ACCESSORY_1, MIG_EQUIP_REGION_ID_ACCESSORY_2];
			break;
		case ITEM_KIND_ACCESSARY_ON1:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_ACCESSORY_1];
			break;
		case ITEM_KIND_ACCESSARY_ON2:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_ACCESSORY_2];
			break;

		default:
			candidateRegionIdArray = [];
			break;
		}
	}
	else {
		itemStaticDataType = itemData.GetStaticDataOf(MIG_EQUIPABLE_SP_STATIC_ID_TYPE, undefined);
		itemStaticDataPosition = itemData.GetStaticDataOf(MIG_EQUIPABLE_SP_STATIC_ID_POSITION, undefined);

		switch (itemStaticDataType) {

		case MIG_ITEM_TYPE_KNIFE:
		case MIG_ITEM_TYPE_SWORD:
		case MIG_ITEM_TYPE_SPEAR:
		case MIG_ITEM_TYPE_AXE:
		case MIG_ITEM_TYPE_MACE:
		case MIG_ITEM_TYPE_STUFF:
		case MIG_ITEM_TYPE_BOOK:
		case MIG_ITEM_TYPE_FIST:
		case MIG_ITEM_TYPE_MUSICAL:
		case MIG_ITEM_TYPE_WHIP:
			if (IsDualArmsJob(jobId)) {
				candidateRegionIdArray = [MIG_EQUIP_REGION_ID_ARMS_RIGHT, MIG_EQUIP_REGION_ID_ARMS_LEFT];
			}
			else {
				candidateRegionIdArray = [MIG_EQUIP_REGION_ID_ARMS_RIGHT];
			}
			break;

		case MIG_ITEM_TYPE_SWORD_2HAND:
		case MIG_ITEM_TYPE_SPEAR_2HAND:
		case MIG_ITEM_TYPE_AXE_2HAND:
		case MIG_ITEM_TYPE_STUFF_2HAND:
		case MIG_ITEM_TYPE_BOW:
		case MIG_ITEM_TYPE_KATAR:
		case MIG_ITEM_TYPE_FUMA:
		case MIG_ITEM_TYPE_HANDGUN:
		case MIG_ITEM_TYPE_RIFLE:
		case MIG_ITEM_TYPE_SHOTGUN:
		case MIG_ITEM_TYPE_GATLINGGUN:
		case MIG_ITEM_TYPE_GRENADEGUN:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_ARMS_RIGHT];
			break;

		case MIG_ITEM_TYPE_HELM:
			switch (itemStaticDataPosition) {
			case MIG_ITEM_POSITION_TOP:
			case MIG_ITEM_POSITION_TOP_MID:
			case MIG_ITEM_POSITION_TOP_UNDER:
			case MIG_ITEM_POSITION_TOP_MID_UNDER:
				candidateRegionIdArray = [MIG_EQUIP_REGION_ID_HEAD_TOP];
				break;
			case MIG_ITEM_POSITION_MID:
			case MIG_ITEM_POSITION_MID_UNDER:
				candidateRegionIdArray = [MIG_EQUIP_REGION_ID_HEAD_MID];
				break;
			case MIG_ITEM_POSITION_UNDER:
				candidateRegionIdArray = [MIG_EQUIP_REGION_ID_HEAD_UNDER];
				break;
			default:
				candidateRegionIdArray = [];
				break;
			}
			break;

		case MIG_ITEM_TYPE_ARMOR:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_BODY];
			break;
		case MIG_ITEM_TYPE_SHIELD:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_SHIELD];
			break;
		case MIG_ITEM_TYPE_SHOULDER:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_SHOULDER];
			break;
		case MIG_ITEM_TYPE_SHOES:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_FOOT];
			break;
		case MIG_ITEM_TYPE_ACCESSORY:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_ACCESSORY_1, MIG_EQUIP_REGION_ID_ACCESSORY_2];
			break;
		case MIG_ITEM_TYPE_ACCESSORY_ON_1:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_ACCESSORY_1];
			break;
		case MIG_ITEM_TYPE_ACCESSORY_ON_2:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_ACCESSORY_2];
			break;

		default:
			candidateRegionIdArray = [];
			break;
		}
	}

	return candidateRegionIdArray;
}

/**
 * カードIDから、設定可能な装備領域の配列を取得する.
 * @param cardId カードID
 * @param jobId 職業ID（左手装備検証用）
 * @return 設定可能な装備領域の配列
 */
function MigGetEquipRegionByCardKind(cardId, jobId) {

	var cardData = null;
	var candidateRegionIdArray = null;

	// 指定のアイテムデータを取得する
	cardData = g_constDataManager.GetDataObject(CONST_DATA_KIND_CARD, cardId);

	// 指定のアイテムの装備位置配列を特定する
	// TODO: データ移行過渡処理
	// 移行完了後なら、cardData が null になることはない
	if (!cardData) {

		switch (CardObjNew[cardId][CARD_DATA_INDEX_KIND]) {

		case CARD_KIND_ARMS:
			if (IsDualArmsJob(jobId)) {
				candidateRegionIdArray = [MIG_EQUIP_REGION_ID_ARMS_RIGHT, MIG_EQUIP_REGION_ID_ARMS_LEFT];
			}
			else {
				candidateRegionIdArray = [MIG_EQUIP_REGION_ID_ARMS_RIGHT];
			}
			break;

		case CARD_KIND_HEAD:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_HEAD_TOP, MIG_EQUIP_REGION_ID_HEAD_MID];
			break;
		case CARD_KIND_BODY:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_BODY];
			break;
		case CARD_KIND_SHIELD:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_SHIELD];
			break;
		case CARD_KIND_SHOULDER:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_SHOULDER];
			break;
		case CARD_KIND_FOOT:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_FOOT];
			break;
		case CARD_KIND_ACCESSARY:
			candidateRegionIdArray = [MIG_EQUIP_REGION_ID_ACCESSORY_1, MIG_EQUIP_REGION_ID_ACCESSORY_2];
			break;

		default:
			candidateRegionIdArray = [];
			break;
		}
	}
	else {

		// カードデータの移行は未対応
		candidateRegionIdArray = [];
	}

	return candidateRegionIdArray;
}

