
//----------------------------------------------------------------
// データの要素番号
//----------------------------------------------------------------
CGlobalConstManager.DefineEnum(
	"EnumItemDataIndex",
	[
		"ITEM_DATA_INDEX_ID",
		"ITEM_DATA_INDEX_KIND",
		"ITEM_DATA_INDEX_EQPFLG",
		"ITEM_DATA_INDEX_POWER",
		"ITEM_DATA_INDEX_WPNLV",
		"ITEM_DATA_INDEX_SLOT",
		"ITEM_DATA_INDEX_WEIGHT",
		"ITEM_DATA_INDEX_EQPLV",
		"ITEM_DATA_INDEX_NAME",
		"ITEM_DATA_INDEX_KANA",
		"ITEM_DATA_INDEX_DETAIL",
		"ITEM_DATA_INDEX_SPBEGIN",
	],
	0,
	1
);



//----------------------------------------------------------------
// アイテムの種類
//----------------------------------------------------------------
CGlobalConstManager.DefineEnum(
	"EnumItemKind",
	[
		// 0
		"ITEM_KIND_NONE",

		// 1
		"ITEM_KIND_KNIFE",
		"ITEM_KIND_SWORD",
		"ITEM_KIND_SWORD_2HAND",
		"ITEM_KIND_SPEAR",
		"ITEM_KIND_SPEAR_2HAND",

		// 6
		"ITEM_KIND_AXE",
		"ITEM_KIND_AXE_2HAND",
		"ITEM_KIND_CLUB",
		"ITEM_KIND_STUFF",
		"ITEM_KIND_BOW",

		// 11
		"ITEM_KIND_KATAR",
		"ITEM_KIND_BOOK",
		"ITEM_KIND_FIST",
		"ITEM_KIND_MUSICAL",
		"ITEM_KIND_WHIP",

		// 16
		"ITEM_KIND_FUMA",
		"ITEM_KIND_HANDGUN",
		"ITEM_KIND_RIFLE",
		"ITEM_KIND_SHOTGUN",
		"ITEM_KIND_GATLINGGUN",

		// 21
		"ITEM_KIND_GRENADEGUN",
		"ITEM_KIND_STUFF2HAND",		// 使用しない
	],
	0,
	1
);

CGlobalConstManager.DefineEnum(
	"EnumItemKind",
	[
		"ITEM_KIND_HEAD_TOP",
		"ITEM_KIND_HEAD_MID",
		"ITEM_KIND_HEAD_UNDER",
	],
	50,
	1
);

CGlobalConstManager.DefineEnum(
	"EnumItemKind",
	[
		"ITEM_KIND_BODY",
		"ITEM_KIND_SHIELD",
		"ITEM_KIND_SHOULDER",
		"ITEM_KIND_FOOT",
		"ITEM_KIND_ACCESSARY",
		"ITEM_KIND_ACCESSARY_ON1",
		"ITEM_KIND_ACCESSARY_ON2",
	],
	60,
	1
);

CGlobalConstManager.DefineEnum(
	"EnumItemKind",
	[
		"ITEM_KIND_SHADOW_ARMS_1HAND",
		"ITEM_KIND_SHADOW_ARMS_2HAND",
		"ITEM_KIND_SHADOW_ARMS_RIGHT",
		"ITEM_KIND_SHADOW_ARMS_LEFT",
		"ITEM_KIND_SHADOW_HEAD_TOP",
		"ITEM_KIND_SHADOW_HEAD_MID",
		"ITEM_KIND_SHADOW_HEAD_UNDER",
		"ITEM_KIND_SHADOW_BODY",
		"ITEM_KIND_SHADOW_SHIELD",
		"ITEM_KIND_SHADOW_SHOULDER",
		"ITEM_KIND_SHADOW_FOOT",
		"ITEM_KIND_SHADOW_ACCESSARY",
		"ITEM_KIND_SHADOW_ACCESSARY_ON1",
		"ITEM_KIND_SHADOW_ACCESSARY_ON2",
	],
	70,
	1
);

CGlobalConstManager.DefineEnum(
	"EnumItemKind",
	[
		"ITEM_KIND_COSTUME",
		"ITEM_KIND_ARROW",
		"ITEM_KIND_BULLET",
	],
	92,
	1
);

CGlobalConstManager.DefineEnum(
	"EnumItemKind",
	[
		"ITEM_KIND_SET",		// セット装備
	],
	100,
	1
);

CGlobalConstManager.DefineEnum(
	"EnumItemKind",
	[
		"ITEM_KIND_UNKNOWN",
	],
	999,
	1
);



//----------------------------------------------------------------
// アイテムの装備フラグ
//----------------------------------------------------------------
CGlobalConstManager.DefineEnum(
	"EnumEquipFlag",
	[
		"ITEM_EQPFLG_NONE",
		"ITEM_EQPFLG_IGNORE_NOVICE_SERIES",
	],
	0,
	1
);

CGlobalConstManager.DefineEnum(
	"EnumEquipFlag",
	[
		"ITEM_EQPFLG_SERIES_NOVICE",
		"ITEM_EQPFLG_SERIES_SWORDMAN",
		"ITEM_EQPFLG_SERIES_THIEF_NINJA",
		"ITEM_EQPFLG_SERIES_ACOLYTE",
		"ITEM_EQPFLG_SERIES_ARCHER",
		"ITEM_EQPFLG_SERIES_MAGICIAN_LINKER",
		"ITEM_EQPFLG_SERIES_MARCHANT",
		"ITEM_EQPFLG_RESERVED_57",						// 57 は欠番
		"ITEM_EQPFLG_SERIES_NINJA",
		"ITEM_EQPFLG_SERIES_GUNSLINGER",

		"ITEM_EQPFLG_RESERVED_60",						// 60 は欠番
		"ITEM_EQPFLG_SERIES_UPPER_OF_SWORDMAN",
		"ITEM_EQPFLG_SERIES_UPPER_OF_THIEF",
		"ITEM_EQPFLG_SERIES_UPPER_OF_ACOLYTE",
		"ITEM_EQPFLG_SERIES_UPPER_OF_ARCHER",
		"ITEM_EQPFLG_SERIES_UPPER_OF_MAGICIAN_LINKER",
		"ITEM_EQPFLG_SERIES_UPPER_OF_MARCHANT",
		"ITEM_EQPFLG_RESERVED_67",						// 67 は欠番
		"ITEM_EQPFLG_SERIES_UPPER_OF_NINJA",
		"ITEM_EQPFLG_SERIES_UPPER_OF_GUNSLINGER",

		"ITEM_EQPFLG_SERIES_SWORDMAN_MARCHANT",
		"ITEM_EQPFLG_TYPE_SILKROBE",					// 剣/聖/魔/商
		"ITEM_EQPFLG_SERIES_SWORDMAN_THIEF_MARCHANT",
		"ITEM_EQPFLG_SERIES_ACOLYTE_MARCHANT",
		"ITEM_EQPFLG_TYPE_BACKLER",						// 剣/盗/聖/商/鳥/踊
		"ITEM_EQPFLG_TYPE_GOOGLE",						// 剣/盗/弓/商
		"ITEM_EQPFLG_SERIES_ARCHER_ROGUE",
		"ITEM_EQPFLG_SERIES_ACOLYTE_MAGICIAN_LINKER",
		"ITEM_EQPFLG_TYPE_KOZAN_HELMET",				// 剣/盗/聖/商
		"ITEM_EQPFLG_SERIES_UPPER_OF_ANY",

		"ITEM_EQPFLG_TYPE_RENDO",						// 盗のみ/狩/悪
		"ITEM_EQPFLG_SERIES_ASSASIN_PRIEST",
		"ITEM_EQPFLG_SERIES_REINCARNATED_OF_ANY",		// 転生職
		"ITEM_EQPFLG_TYPE_BOOTS",						// 剣/盗/弓/商/ﾃｺのみ/拳のみ/銃
		"ITEM_EQPFLG_TYPE_MANT",						// 剣/盗/商/ﾃｺのみ/拳のみ
		"ITEM_EQPFLG_TYPE_SHARP_HEAD_GEAR",				// 剣/盗/聖/商/ﾃｺのみ/拳のみ
		"ITEM_EQPFLG_TYPE_MAJESTIC_GOAT",				// 剣/商/ﾃｺのみ/拳のみ
		"ITEM_EQPFLG_TYPE_MIRROR_SHIELD",				// 剣/ﾃｺのみ/拳のみ
		"ITEM_EQPFLG_SERIES_HUNTER_ROGUE",
		"ITEM_EQPFLG_SERIES_ACOLYTE_ARCHER_MAGICIAN_LINKER",

		"ITEM_EQPFLG_TYPE_ONEHAND_AXE",					// 素/剣/商/暗のみ
		"ITEM_EQPFLG_TYPE_SENTO_GREEVE",				// 剣/盗/商/拳/忍
		"ITEM_EQPFLG_TYPE_DOFRENO_ONO",					// 剣/商/GX/＋
		"ITEM_EQPFLG_SERIES_3RD_EX2ND",
		"ITEM_EQPFLG_TYPE_KOJOSEN_TE_MAGIC",			// 素/聖/魔/繋
		"ITEM_EQPFLG_TYPE_BOOK",						// PR/賢/拳
		"ITEM_EQPFLG_TYPE_BEGINNER",					// 非転生ノビ、非転生一次、非転生二次
		"ITEM_EQPFLG_TYPE_ARROW",						// 矢（シーフ系、アーチャー系）
		"ITEM_EQPFLG_TYPE_BULLET",						// 弾（ガンスリンガー系）
		"ITEM_EQPFLG_RESERVED_99",						// 99 は欠番

		"ITEM_EQPFLG_SERIES_LOWER_OF_NOVICE",
		"ITEM_EQPFLG_SERIES_LOWER_OF_SWORDMAN",
		"ITEM_EQPFLG_SERIES_LOWER_OF_THIEF",
		"ITEM_EQPFLG_SERIES_LOWER_OF_ACOLYTE",
		"ITEM_EQPFLG_SERIES_LOWER_OF_ARCHER",
		"ITEM_EQPFLG_SERIES_LOWER_OF_MAGICIAN_LINKER",
		"ITEM_EQPFLG_SERIES_LOWER_OF_MARCHANT",
		"ITEM_EQPFLG_SERIES_KNIGHT",
		"ITEM_EQPFLG_SERIES_ASSASIN",
		"ITEM_EQPFLG_SERIES_PRIEST",
		"ITEM_EQPFLG_SERIES_HUNTER",
		"ITEM_EQPFLG_SERIES_WIZARD_LINKER",
		"ITEM_EQPFLG_SERIES_BLACKSMITH",
		"ITEM_EQPFLG_SERIES_CRUSADER",
		"ITEM_EQPFLG_SERIES_ROGUE",
		"ITEM_EQPFLG_SERIES_MONK",
		"ITEM_EQPFLG_SERIES_BARD",
		"ITEM_EQPFLG_SERIES_DANCER",
		"ITEM_EQPFLG_SERIES_SAGE",
		"ITEM_EQPFLG_SERIES_ALCHEMIST",
		"ITEM_EQPFLG_SERIES_SUPER_NOVICE",
		"ITEM_EQPFLG_SERIES_LOAR_KNIGHT",
		"ITEM_EQPFLG_SERIES_ASSASIN_CROSS",
		"ITEM_EQPFLG_SERIES_HIGH_PRIEST",
		"ITEM_EQPFLG_SERIES_SNIPER",
		"ITEM_EQPFLG_SERIES_HIGH_WIZARD",
		"ITEM_EQPFLG_SERIES_WHITESMITH",
		"ITEM_EQPFLG_SERIES_PALADIN",
		"ITEM_EQPFLG_SERIES_CHASER",
		"ITEM_EQPFLG_SERIES_CHAMPION",
		"ITEM_EQPFLG_SERIES_CROWN",
		"ITEM_EQPFLG_SERIES_ZYPSY",
		"ITEM_EQPFLG_SERIES_PROFESSOR",
		"ITEM_EQPFLG_SERIES_CREATOR",
	],
	50,
	1
);

CGlobalConstManager.DefineEnum(
	"EnumEquipFlag",
	[
		"ITEM_EQPFLG_TAEGWON",
		"ITEM_EQPFLG_SERIES_KENSEI",
		"ITEM_EQPFLG_SERIES_SOUL_LINKER",
		"ITEM_EQPFLG_RESERVED_144",		// 144 は欠番（58を使用）
		"ITEM_EQPFLG_RESERVED_145",		// 145 は欠番（59を使用）
		"ITEM_EQPFLG_RUNEKNIGHT",
		"ITEM_EQPFLG_GLTCROSS",
		"ITEM_EQPFLG_ARCBISHOP",
		"ITEM_EQPFLG_RANGER",
		"ITEM_EQPFLG_WARLOCK",
		"ITEM_EQPFLG_MECHANIC",
		"ITEM_EQPFLG_ROYALGUARD",
		"ITEM_EQPFLG_SHADOWCHASER",
		"ITEM_EQPFLG_SHURA",
		"ITEM_EQPFLG_MINSTREL",
		"ITEM_EQPFLG_WANDERER",
		"ITEM_EQPFLG_SOURCERER",
		"ITEM_EQPFLG_GENETIC",

		"ITEM_EQPFLG_DRAGON_KNIGHT",
		"ITEM_EQPFLG_SHADOW_CROSS",
		"ITEM_EQPFLG_CARDINAL",
		"ITEM_EQPFLG_WIND_HAWK",
		"ITEM_EQPFLG_ARCH_MAGE",
		"ITEM_EQPFLG_MEISTER",
		"ITEM_EQPFLG_IMPERIAL_GUARD",
		"ITEM_EQPFLG_ABYSS_CHASER",
		"ITEM_EQPFLG_INQUISITOR",
		"ITEM_EQPFLG_TROUBADOUR",
		"ITEM_EQPFLG_TROUVERE",
		"ITEM_EQPFLG_ELEMENTAL_MASTER",
		"ITEM_EQPFLG_BIOLO",
	],
	141,
	1
);

CGlobalConstManager.DefineEnum(
	"EnumEquipFlag",
	[
		"ITEM_EQPFLG_MINSTREL_WANDERER",
		"ITEM_EQPFLG_4TH",
	],
	191,
	1
);

CGlobalConstManager.DefineEnum(
	"EnumEquipFlag",
	[
		"ITEM_EQPFLG_SERIES_SUMMONER",
	],
	201,
	1
);

CGlobalConstManager.DefineEnum(
	"EnumEquipFlag",
	[
		"ITEM_EQPFLG_END",
	],
	999,
	1
);






//----------------------------------------------------------------
// 特殊効果定義
// （**_PLUS は固定値、**_UP はパーセント）
//----------------------------------------------------------------
CGlobalConstManager.DefineEnum(
	"EnumItemSpId",
	[
		"ITEM_SP_NONE",

		"ITEM_SP_STR_PLUS",				// STR		固定値上昇	※セット定義の場合は **_FOR_SET を使用
		"ITEM_SP_AGI_PLUS",				// AGI		固定値上昇	※セット定義の場合は **_FOR_SET を使用
		"ITEM_SP_VIT_PLUS",				// VIT		固定値上昇	※セット定義の場合は **_FOR_SET を使用
		"ITEM_SP_INT_PLUS",				// INT		固定値上昇	※セット定義の場合は **_FOR_SET を使用
		"ITEM_SP_DEX_PLUS",				// DEX		固定値上昇	※セット定義の場合は **_FOR_SET を使用
		"ITEM_SP_LUK_PLUS",				// LUK		固定値上昇	※セット定義の場合は **_FOR_SET を使用
		"ITEM_SP_ALLSTATUS_PLUS",		// 全ステ	固定値上昇	※セット定義の場合は **_FOR_SET を使用
		"ITEM_SP_HIT_PLUS",				// HIT		固定値上昇
		"ITEM_SP_FLEE_PLUS",			// FLEE		固定値上昇

		"ITEM_SP_CRI_PLUS",				// CRI		固定値上昇
		"ITEM_SP_LUCKY_PLUS",			// 完全回避	固定値上昇
		"ITEM_SP_ASPD_UP",				// ASPD		％上昇
		"ITEM_SP_MAXHP_PLUS",			// 最大HP	固定値上昇
		"ITEM_SP_MAXSP_PLUS",			// 最大SP	固定値上昇
		"ITEM_SP_MAXHP_UP",				// 最大HP	％上昇
		"ITEM_SP_MAXSP_UP",				// 最大SP	％上昇
		"ITEM_SP_ATK_PLUS",				// ATK		固定値上昇
		"ITEM_SP_DEF_PLUS",				// DEF		固定値上昇
		"ITEM_SP_MDEF_PLUS",			// MDEF		固定値上昇

		"ITEM_SP_ELEMENTAL",			// 属性武器	[param : 水=1,地,火,風,毒=5,聖,闇,念,死 ]
		"ITEM_SP_RESERVED_21",			// 未使用（21）
		"ITEM_SP_PENETRATE_DEF",
		"ITEM_SP_KIRI_EFFECT",
		"ITEM_SP_DEF_DIVIDE_PENARTY",
		"ITEM_SP_LONGRANGE_DAMAGE_UP",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_BOSS",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_SIZE_SMALL",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_SIZE_MEDIUM",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_SIZE_LARGE",

		"ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_SOLID",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_UNDEAD",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_ANIMAL",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_PLANT",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_INSECT",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_FISH",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_DEMON",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_HUMAN",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_ANGEL",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_DRAGON",

		"ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_VANITY",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_WATER",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_EARTH",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_FIRE",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_WIND",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_POISON",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_HOLY",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_DARK",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_PSYCO",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_UNDEAD",

		"ITEM_SP_RESIST_RACE_SOLID",
		"ITEM_SP_RESIST_RACE_UNDEAD",
		"ITEM_SP_RESIST_RACE_ANIMAL",
		"ITEM_SP_RESIST_RACE_PLANT",
		"ITEM_SP_RESIST_RACE_INSECT",
		"ITEM_SP_RESIST_RACE_FISH",
		"ITEM_SP_RESIST_RACE_DEMON",
		"ITEM_SP_RESIST_RACE_HUMAN",
		"ITEM_SP_RESIST_RACE_ANGEL",
		"ITEM_SP_RESIST_RACE_DRAGON",

		"ITEM_SP_RESIST_ELM_VANITY",
		"ITEM_SP_RESIST_ELM_WATER",
		"ITEM_SP_RESIST_ELM_EARTH",
		"ITEM_SP_RESIST_ELM_FIRE",
		"ITEM_SP_RESIST_ELM_WIND",
		"ITEM_SP_RESIST_ELM_POISON",
		"ITEM_SP_RESIST_ELM_HOLY",
		"ITEM_SP_RESIST_ELM_DARK",
		"ITEM_SP_RESIST_ELM_PSYCO",
		"ITEM_SP_RESIST_ELM_UNDEAD",

		"ITEM_SP_CRITICAL_DAMAGE_UP",
		"ITEM_SP_REFLECT_PHYSICAL_DAMAGE",
		"ITEM_SP_LONGRANGE_CRI_PLUS",
		"ITEM_SP_SKILL_CAST_TIME",
		"ITEM_SP_SKILL_DELAY_DOWN",
		"ITEM_SP_HPR_UP",
		"ITEM_SP_SPR_UP",
		"ITEM_SP_RESIST_BOSS",
		"ITEM_SP_RESIST_LONGRANGE",
		"ITEM_SP_RESIST_NOTBOSS",

		"ITEM_SP_PHYSICAL_DAMAGE_UP",
		"ITEM_SP_DAMAGE_UP_GROUP_GOBLIN",
		"ITEM_SP_DAMAGE_UP_GROUP_COBOLD",
		"ITEM_SP_DAMAGE_UP_GROUP_ORC",
		"ITEM_SP_DAMAGE_UP_GROUP_GOLEM",
		"ITEM_SP_WEAPON_ATK_UP",			// 武器攻撃力＋○○％
		"ITEM_SP_PERFECT_ATTACK_UP",		// ○○％の確率で必中攻撃
		"ITEM_SP_ATK_UP",
		"ITEM_SP_MATK_PLUS",
		"ITEM_SP_MAGICAL_DAMAGE_UP",

		"ITEM_SP_SET_DEFINITION",			// セットの定義。通常は直接指定しない。
		"ITEM_SP_HEAL_UP_USING",
		"ITEM_SP_HEAL_UP_USED",
		"ITEM_SP_HEAL_DAMAGE_UP",
		"ITEM_SP_HEAL_UP_USING_ONLY_HEAL",
		"ITEM_SP_HEAL_UP_USING_ONLY_HEAL_SERIES",
		"ITEM_SP_MAGICAL_DAMAGE_UP_BOSS",
		"ITEM_SP_MAGICAL_DAMAGE_UP_SIZE_SMALL",
		"ITEM_SP_MAGICAL_DAMAGE_UP_SIZE_MEDIUM",
		"ITEM_SP_MAGICAL_DAMAGE_UP_SIZE_LARGE",

		"ITEM_SP_MATK_PLUS_TYPE_NOTSTUFF",
		"ITEM_SP_ASPD_PLUS",
		"ITEM_SP_COST_DOWN",
		"ITEM_SP_EXP_UP_ALL",
		"ITEM_SP_DEF_UP",
		"ITEM_SP_MDEF_UP",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_HUMAN_NOT_PLAYER",
		"ITEM_SP_MAGICAL_DAMAGE_UP_RACE_HUMAN_NOT_PLAYER",
		"ITEM_SP_RESIST_RACE_HUMAN_NOT_PLAYER",
		"ITEM_SP_SKILL_FIXED_MINUS",

		"ITEM_SP_CRITICAL_UP_RACE_SOLID",
		"ITEM_SP_CRITICAL_UP_RACE_UNDEAD",
		"ITEM_SP_CRITICAL_UP_RACE_ANIMAL",
		"ITEM_SP_CRITICAL_UP_RACE_PLANT",
		"ITEM_SP_CRITICAL_UP_RACE_INSECT",
		"ITEM_SP_CRITICAL_UP_RACE_FISH",
		"ITEM_SP_CRITICAL_UP_RACE_DEMON",
		"ITEM_SP_CRITICAL_UP_RACE_HUMAN",
		"ITEM_SP_CRITICAL_UP_RACE_ANGEL",
		"ITEM_SP_CRITICAL_UP_RACE_DRAGON",

		"ITEM_SP_EXP_UP_RACE_SOLID",
		"ITEM_SP_EXP_UP_RACE_UNDEAD",
		"ITEM_SP_EXP_UP_RACE_ANIMAL",
		"ITEM_SP_EXP_UP_RACE_PLANT",
		"ITEM_SP_EXP_UP_RACE_INSECT",
		"ITEM_SP_EXP_UP_RACE_FISH",
		"ITEM_SP_EXP_UP_RACE_DEMON",
		"ITEM_SP_EXP_UP_RACE_HUMAN",
		"ITEM_SP_EXP_UP_RACE_ANGEL",
		"ITEM_SP_EXP_UP_RACE_DRAGON",

		"ITEM_SP_APPEND_STATE_POISON",
		"ITEM_SP_APPEND_STATE_STUN",
		"ITEM_SP_APPEND_STATE_FROZEN",
		"ITEM_SP_APPEND_STATE_CURSED",
		"ITEM_SP_APPEND_STATE_BLIND",
		"ITEM_SP_APPEND_STATE_SLEEP",
		"ITEM_SP_APPEND_STATE_SILENCE",
		"ITEM_SP_APPEND_STATE_CONFUSE",
		"ITEM_SP_APPEND_STATE_BLEEDING",
		"ITEM_SP_APPEND_STATE_STONE",

		"ITEM_SP_APPEND_STATE_BREAK_WEAPON",
		"ITEM_SP_APPEND_STATE_BREAK_HELM",
		"ITEM_SP_APPEND_STATE_BREAK_ARMOR",
		"ITEM_SP_APPEND_STATE_BREAK_SHIELD",
		"ITEM_SP_APPEND_STATE_BREAK_SHOULDER",
		"ITEM_SP_APPEND_STATE_BREAK_SHOES",
		"ITEM_SP_APPEND_STATE_BREAK_ACCESSARY",
		"ITEM_SP_PHYSICAL_RESIST_SIZE_SMALL",
		"ITEM_SP_PHYSICAL_RESIST_SIZE_MEDIUM",
		"ITEM_SP_PHYSICAL_RESIST_SIZE_LARGE",

		"ITEM_SP_RESIST_STATE_POISON",
		"ITEM_SP_RESIST_STATE_STUN",
		"ITEM_SP_RESIST_STATE_FROZEN",
		"ITEM_SP_RESIST_STATE_CURSED",
		"ITEM_SP_RESIST_STATE_BLIND",
		"ITEM_SP_RESIST_STATE_SLEEP",
		"ITEM_SP_RESIST_STATE_SILENCE",
		"ITEM_SP_RESIST_STATE_CONFUSE",
		"ITEM_SP_RESIST_STATE_BLEEDING",
		"ITEM_SP_RESIST_STATE_STONE",

		"ITEM_SP_RESIST_STATE_BREAK_WEAPON",
		"ITEM_SP_RESIST_STATE_BREAK_HELM",
		"ITEM_SP_RESIST_STATE_BREAK_ARMOR",
		"ITEM_SP_RESIST_STATE_BREAK_SHIELD",
		"ITEM_SP_RESIST_STATE_BREAK_SHOULDER",
		"ITEM_SP_RESIST_STATE_BREAK_SHOES",
		"ITEM_SP_RESIST_STATE_BREAK_ACCESSARY",
		"ITEM_SP_RESERVED_167",				// 未使用（167）
		"ITEM_SP_RESERVED_168",				// 未使用（168）
		"ITEM_SP_RESERVED_169",				// 未使用（169）

		"ITEM_SP_MAGICAL_DAMAGE_UP_RACE_SOLID",
		"ITEM_SP_MAGICAL_DAMAGE_UP_RACE_UNDEAD",
		"ITEM_SP_MAGICAL_DAMAGE_UP_RACE_ANIMAL",
		"ITEM_SP_MAGICAL_DAMAGE_UP_RACE_PLANT",
		"ITEM_SP_MAGICAL_DAMAGE_UP_RACE_INSECT",
		"ITEM_SP_MAGICAL_DAMAGE_UP_RACE_FISH",
		"ITEM_SP_MAGICAL_DAMAGE_UP_RACE_DEMON",
		"ITEM_SP_MAGICAL_DAMAGE_UP_RACE_HUMAN",
		"ITEM_SP_MAGICAL_DAMAGE_UP_RACE_ANGEL",
		"ITEM_SP_MAGICAL_DAMAGE_UP_RACE_DRAGON",

		"ITEM_SP_PENETRATE_DEF_RACE_SOLID",
		"ITEM_SP_PENETRATE_DEF_RACE_UNDEAD",
		"ITEM_SP_PENETRATE_DEF_RACE_ANIMAL",
		"ITEM_SP_PENETRATE_DEF_RACE_PLANT",
		"ITEM_SP_PENETRATE_DEF_RACE_INSECT",
		"ITEM_SP_PENETRATE_DEF_RACE_FISH",
		"ITEM_SP_PENETRATE_DEF_RACE_DEMON",
		"ITEM_SP_PENETRATE_DEF_RACE_HUMAN",
		"ITEM_SP_PENETRATE_DEF_RACE_ANGEL",
		"ITEM_SP_PENETRATE_DEF_RACE_DRAGON",

		"ITEM_SP_RESIST_SIZE_SMALL",
		"ITEM_SP_RESIST_SIZE_MEDIUM",
		"ITEM_SP_RESIST_SIZE_LARGE",
		"ITEM_SP_UNREFINABLE",
		"ITEM_SP_UNBREAKABLE",
		"ITEM_SP_STUFF2HAND",
		"ITEM_SP_RESIST_MAGIC",
		"ITEM_SP_SPECIAL_RANGE",
		"ITEM_SP_BODY_ELEMENT",
		"ITEM_SP_LEARNED_SKILL_EFFECT",

		"ITEM_SP_RESERVED_200",				// 未使用（200）
		"ITEM_SP_STR_PLUS_PLANE",			// STR		集中力向上等の基礎値に含まれるもの（拡張表示のデータ収集用）
		"ITEM_SP_AGI_PLUS_PLANE",			// AGI		集中力向上等の基礎値に含まれるもの（拡張表示のデータ収集用）
		"ITEM_SP_VIT_PLUS_PLANE",			// VIT		集中力向上等の基礎値に含まれるもの（拡張表示のデータ収集用）
		"ITEM_SP_INT_PLUS_PLANE",			// INT		集中力向上等の基礎値に含まれるもの（拡張表示のデータ収集用）
		"ITEM_SP_DEX_PLUS_PLANE",			// DEX		集中力向上等の基礎値に含まれるもの（拡張表示のデータ収集用）
		"ITEM_SP_LUK_PLUS_PLANE",			// LUK		集中力向上等の基礎値に含まれるもの（拡張表示のデータ収集用）
		"ITEM_SP_RESERVED_207",				// 未使用（207）
		"ITEM_SP_RESERVED_208",				// 未使用（208）
		"ITEM_SP_RESERVED_209",				// 未使用（209）

		"ITEM_SP_SHORTRANGE_DAMAGE_UP",
		"ITEM_SP_STR_PLUS_FOR_SET",			// STR		固定値上昇		セット定義用（集中力向上等の基礎値に含まれない）
		"ITEM_SP_AGI_PLUS_FOR_SET",			// AGI		固定値上昇		セット定義用（集中力向上等の基礎値に含まれない）
		"ITEM_SP_VIT_PLUS_FOR_SET",			// VIT		固定値上昇		セット定義用（集中力向上等の基礎値に含まれない）
		"ITEM_SP_INT_PLUS_FOR_SET",			// INT		固定値上昇		セット定義用（集中力向上等の基礎値に含まれない）
		"ITEM_SP_DEX_PLUS_FOR_SET",			// DEX		固定値上昇		セット定義用（集中力向上等の基礎値に含まれない）
		"ITEM_SP_LUK_PLUS_FOR_SET",			// LUK		固定値上昇		セット定義用（集中力向上等の基礎値に含まれない）
		"ITEM_SP_ALLSTATUS_PLUS_FOR_SET",	// 全ステ	固定値上昇		セット定義用（集中力向上等の基礎値に含まれない）
		"ITEM_SP_INVALIDATE_ITEM_SP",		// 指定アイテムの効果無効
		"ITEM_SP_INVALIDATE_CARD_SP",		// 指定カードの効果無効

		"ITEM_SP_LEARN_SKILL",
		"ITEM_SP_AUTO_SPELL",
		"ITEM_SP_LEARN_SKILL_LEVEL_UNSPECIFIED",
		"ITEM_SP_AUTO_SPELL_LEVEL_UNSPECIFIED",
		"ITEM_SP_LEARN_SKILL_HIDDEN_DETAIL",		// 詳細表示に表示しない
		"ITEM_SP_AUTO_SPELL_HIDDEN_DETAIL",			// 詳細表示に表示しない
		"ITEM_SP_USE_ENCHANT_ELM_CONF",				// 『属性付与で設定』表示　ランダムオプション用　効果は無し
		"ITEM_SP_NOT_IMPLEMENTED",					// 『未対応』表示　ランダムオプション用　効果は無し
		"ITEM_SP_SIZE_PERFECTION",
		"ITEM_SP_ARMS_ELEMENT",

		"ITEM_SP_POW_PLUS",
		"ITEM_SP_STA_PLUS",
		"ITEM_SP_WIS_PLUS",
		"ITEM_SP_SPL_PLUS",
		"ITEM_SP_CON_PLUS",
		"ITEM_SP_CRT_PLUS",
		"ITEM_SP_ALL_SPECS_PLUS",
		"ITEM_SP_RESERVED_237",				// 未使用（237）
		"ITEM_SP_RESERVED_238",				// 未使用（238）
		"ITEM_SP_RESERVED_239",				// 未使用（239）

		"ITEM_SP_KOZYOSEN_TE_RENTAL_ITEM",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_PLAYER_ALL",
		"ITEM_SP_MAGICAL_DAMAGE_UP_PLAYER_ALL",
		"ITEM_SP_RESIST_PLAYER_ALL",
		"ITEM_SP_ATK_PLUS_GVGTE",
		"ITEM_SP_MATK_PLUS_GVGTE",
		"ITEM_SP_MAXHP_PLUS_GVGTE",
		"ITEM_SP_MAXSP_PLUS_GVGTE",
		"ITEM_SP_HEAL_UP_USING_GVGTE",
		"ITEM_SP_RESIST_FROZEN_GVGTE",

		"ITEM_SP_P_ATK_PLUS",
		"ITEM_SP_S_MATK_PLUS",
		"ITEM_SP_H_PLUS_PLUS",
		"ITEM_SP_C_RATE_PLUS",
		"ITEM_SP_RES_PLUS",
		"ITEM_SP_MRES_PLUS",
		"ITEM_SP_RESERVED_256",				// 未使用（256）
		"ITEM_SP_RESERVED_257",				// 未使用（257）
		"ITEM_SP_RESERVED_258",				// 未使用（258）
		"ITEM_SP_RESERVED_259",				// 未使用（259）

		"ITEM_SP_PHYSICAL_DAMAGE_UP_SIZE_ALL",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_ALL",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_ALL",
		"ITEM_SP_RESIST_RACE_ALL",
		"ITEM_SP_RESIST_ELM_ALL",
		"ITEM_SP_MAGICAL_DAMAGE_UP_SIZE_ALL",
		"ITEM_SP_MAGICAL_DAMAGE_UP_RACE_ALL",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_NOTBOSS",
		"ITEM_SP_MAGICAL_DAMAGE_UP_NOTBOSS",
		"ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_ALL",

		"ITEM_SP_MAGICAL_DAMAGE_UP_ELM_ALL",
		"ITEM_SP_RESIST_MONSTER_ELM_ALL",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_PLAYER_DORAM",
		"ITEM_SP_MAGICAL_DAMAGE_UP_PLAYER_DORAM",
		"ITEM_SP_RESIST_PLAYER_DORAM",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_PLAYER_HUMAN",
		"ITEM_SP_MAGICAL_DAMAGE_UP_PLAYER_HUMAN",
		"ITEM_SP_RESIST_PLAYER_HUMAN",
		"ITEM_SP_RESERVED_278",				// 未使用（278）
		"ITEM_SP_RESERVED_279",				// 未使用（279）

		"ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_VANITY",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_WATER",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_EARTH",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_FIRE",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_WIND",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_POISON",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_HOLY",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_DARK",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_PSYCO",
		"ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_UNDEAD",

		"ITEM_SP_IGNORE_DEF_ALL",
		"ITEM_SP_IGNORE_DEF_NOTBOSS",
		"ITEM_SP_IGNORE_DEF_BOSS",
		"ITEM_SP_IGNORE_DEF_RACE_ALL",
		"ITEM_SP_IGNORE_RES_RACE_ALL",
		"ITEM_SP_IGNORE_MDEF_ALL",
		"ITEM_SP_IGNORE_MDEF_NOTBOSS",
		"ITEM_SP_IGNORE_MDEF_BOSS",
		"ITEM_SP_IGNORE_MDEF_RACE_ALL",
		"ITEM_SP_IGNORE_MRES_RACE_ALL",

		"ITEM_SP_IGNORE_DEF_RACE_SOLID",
		"ITEM_SP_IGNORE_DEF_RACE_UNDEAD",
		"ITEM_SP_IGNORE_DEF_RACE_ANIMAL",
		"ITEM_SP_IGNORE_DEF_RACE_PLANT",
		"ITEM_SP_IGNORE_DEF_RACE_INSECT",
		"ITEM_SP_IGNORE_DEF_RACE_FISH",
		"ITEM_SP_IGNORE_DEF_RACE_DEMON",
		"ITEM_SP_IGNORE_DEF_RACE_HUMAN",
		"ITEM_SP_IGNORE_DEF_RACE_ANGEL",
		"ITEM_SP_IGNORE_DEF_RACE_DRAGON",

		"ITEM_SP_IGNORE_MDEF_RACE_SOLID",
		"ITEM_SP_IGNORE_MDEF_RACE_UNDEAD",
		"ITEM_SP_IGNORE_MDEF_RACE_ANIMAL",
		"ITEM_SP_IGNORE_MDEF_RACE_PLANT",
		"ITEM_SP_IGNORE_MDEF_RACE_INSECT",
		"ITEM_SP_IGNORE_MDEF_RACE_FISH",
		"ITEM_SP_IGNORE_MDEF_RACE_DEMON",
		"ITEM_SP_IGNORE_MDEF_RACE_HUMAN",
		"ITEM_SP_IGNORE_MDEF_RACE_ANGEL",
		"ITEM_SP_IGNORE_MDEF_RACE_DRAGON",

		"ITEM_SP_CRITICAL_DAMAGE_UP_RACE_SOLID",
		"ITEM_SP_CRITICAL_DAMAGE_UP_RACE_UNDEAD",
		"ITEM_SP_CRITICAL_DAMAGE_UP_RACE_ANIMAL",
		"ITEM_SP_CRITICAL_DAMAGE_UP_RACE_PLANT",
		"ITEM_SP_CRITICAL_DAMAGE_UP_RACE_INSECT",
		"ITEM_SP_CRITICAL_DAMAGE_UP_RACE_FISH",
		"ITEM_SP_CRITICAL_DAMAGE_UP_RACE_DEMON",
		"ITEM_SP_CRITICAL_DAMAGE_UP_RACE_HUMAN",
		"ITEM_SP_CRITICAL_DAMAGE_UP_RACE_ANGEL",
		"ITEM_SP_CRITICAL_DAMAGE_UP_RACE_DRAGON",

		"ITEM_SP_RESIST_MONSTER_ELM_VANITY",
		"ITEM_SP_RESIST_MONSTER_ELM_WATER",
		"ITEM_SP_RESIST_MONSTER_ELM_EARTH",
		"ITEM_SP_RESIST_MONSTER_ELM_FIRE",
		"ITEM_SP_RESIST_MONSTER_ELM_WIND",
		"ITEM_SP_RESIST_MONSTER_ELM_POISON",
		"ITEM_SP_RESIST_MONSTER_ELM_HOLY",
		"ITEM_SP_RESIST_MONSTER_ELM_DARK",
		"ITEM_SP_RESIST_MONSTER_ELM_PSYCO",
		"ITEM_SP_RESIST_MONSTER_ELM_UNDEAD",

		"ITEM_SP_MAGICAL_DAMAGE_UP_ELM_VANITY",
		"ITEM_SP_MAGICAL_DAMAGE_UP_ELM_WATER",
		"ITEM_SP_MAGICAL_DAMAGE_UP_ELM_EARTH",
		"ITEM_SP_MAGICAL_DAMAGE_UP_ELM_FIRE",
		"ITEM_SP_MAGICAL_DAMAGE_UP_ELM_WIND",
		"ITEM_SP_MAGICAL_DAMAGE_UP_ELM_POISON",
		"ITEM_SP_MAGICAL_DAMAGE_UP_ELM_HOLY",
		"ITEM_SP_MAGICAL_DAMAGE_UP_ELM_DARK",
		"ITEM_SP_MAGICAL_DAMAGE_UP_ELM_PSYCO",
		"ITEM_SP_MAGICAL_DAMAGE_UP_ELM_UNDEAD",

		"ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_VANITY",
		"ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_WATER",
		"ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_EARTH",
		"ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_FIRE",
		"ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_WIND",
		"ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_POISON",
		"ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_HOLY",
		"ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_DARK",
		"ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_PSYCO",
		"ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_UNDEAD",
	],
	0,
	1
);

CGlobalConstManager.DefinePseudoEnum(
	"EnumItemSpId",
	[
		"ITEM_SP_DMY",
	],
	-1,
	0
);

CGlobalConstManager.DefinePseudoEnum(
	"EnumItemSpId",
	[
		"ITEM_SP_END",
	],
	0,
	0
);

// TODO: データ定義方式移行時に要調整
CGlobalConstManager.DefinePseudoEnum(
	"EnumItemSpId",
	[
		// 物理攻撃時、（モンスター）に与えるダメージ＋○○％
		"ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_OFFSET",
	],
	1000,
	1000
);

CGlobalConstManager.DefinePseudoEnum(
	"EnumItemSpId",
	[
		"ITEM_SP_SKILL_DAMAGE_OFFSET",
		"ITEM_SP_SKILL_CAST_TIME_OFFSET",
		"ITEM_SP_SKILL_CAST_MINUS_OFFSET",
		"ITEM_SP_SKILL_FIXED_TIME_OFFSET",
		"ITEM_SP_SKILL_FIXED_MINUS_OFFSET",
		"ITEM_SP_RESERVED_15000",			// 未使用（15000）
		"ITEM_SP_RESERVED_17000",			// 未使用（17000）
		"ITEM_SP_SKILL_COOL_MINUS_OFFSET",
		"ITEM_SP_SKILL_COST_SCALING_OFFSET",
		"ITEM_SP_SKILL_COST_MINUS_OFFSET",
	],
	5000,
	2000
);

CGlobalConstManager.DefinePseudoEnum(
	"EnumItemSpId",
	[
		// 精錬値が○上がる度に
		"ITEM_SP_REFINE_BY_1_OFFSET",
		"ITEM_SP_REFINE_BY_2_OFFSET",
		"ITEM_SP_REFINE_BY_3_OFFSET",
		"ITEM_SP_REFINE_BY_4_OFFSET",
		"ITEM_SP_REFINE_BY_5_OFFSET",
		"ITEM_SP_REFINE_BY_6_OFFSET",
		"ITEM_SP_REFINE_BY_7_OFFSET",
		"ITEM_SP_REFINE_BY_8_OFFSET",
		"ITEM_SP_REFINE_BY_9_OFFSET",
	],
	100000,
	100000
);

CGlobalConstManager.DefinePseudoEnum(
	"EnumItemSpId",
	[
		// 精錬値が○以上の時
		"ITEM_SP_REFINE_OVER_1_OFFSET",
		"ITEM_SP_REFINE_OVER_2_OFFSET",
		"ITEM_SP_REFINE_OVER_3_OFFSET",
		"ITEM_SP_REFINE_OVER_4_OFFSET",
		"ITEM_SP_REFINE_OVER_5_OFFSET",
		"ITEM_SP_REFINE_OVER_6_OFFSET",
		"ITEM_SP_REFINE_OVER_7_OFFSET",
		"ITEM_SP_REFINE_OVER_8_OFFSET",
		"ITEM_SP_REFINE_OVER_9_OFFSET",
		"ITEM_SP_REFINE_OVER_10_OFFSET",
	],
	1000000,
	1000000
);

CGlobalConstManager.DefinePseudoEnum(
	"EnumItemSpId",
	[
		// 純粋な○○が△△上がる度に

		// TODO: 装備、カード以外未対応（衣装等）

		"ITEM_SP_PURE_STR_BY_10_OFFSET",
		"ITEM_SP_PURE_AGI_BY_10_OFFSET",
		"ITEM_SP_PURE_VIT_BY_10_OFFSET",
		"ITEM_SP_PURE_INT_BY_10_OFFSET",
		"ITEM_SP_PURE_DEX_BY_10_OFFSET",
		"ITEM_SP_PURE_LUK_BY_10_OFFSET",

		"ITEM_SP_PURE_DEX_BY_1_OFFSET",
		"ITEM_SP_PURE_VIT_BY_1_OFFSET",
		// 未使用
	],
	100000000,
	100000000
);

CGlobalConstManager.DefinePseudoEnum(
	"EnumItemSpId",
	[
		// 純粋な○○が△△以上の時
		"ITEM_SP_PURE_STR_90_OFFSET",
		"ITEM_SP_PURE_AGI_90_OFFSET",
		"ITEM_SP_PURE_VIT_90_OFFSET",
		"ITEM_SP_PURE_INT_90_OFFSET",
		"ITEM_SP_PURE_DEX_90_OFFSET",
		"ITEM_SP_PURE_LUK_90_OFFSET",

		"ITEM_SP_PURE_STR_108_OFFSET",
		"ITEM_SP_PURE_AGI_108_OFFSET",
		"ITEM_SP_PURE_VIT_108_OFFSET",
		"ITEM_SP_PURE_INT_108_OFFSET",
		"ITEM_SP_PURE_DEX_108_OFFSET",
		"ITEM_SP_PURE_LUK_108_OFFSET",

		"ITEM_SP_PURE_STR_120_OFFSET",
		"ITEM_SP_PURE_AGI_120_OFFSET",
		"ITEM_SP_PURE_VIT_120_OFFSET",
		"ITEM_SP_PURE_INT_120_OFFSET",
		"ITEM_SP_PURE_DEX_120_OFFSET",
		"ITEM_SP_PURE_LUK_120_OFFSET",

		"ITEM_SP_PURE_STR_125_OFFSET",
		"ITEM_SP_PURE_AGI_125_OFFSET",
		"ITEM_SP_PURE_VIT_125_OFFSET",
		"ITEM_SP_PURE_INT_125_OFFSET",
		"ITEM_SP_PURE_DEX_125_OFFSET",
		"ITEM_SP_PURE_LUK_125_OFFSET",

		"ITEM_SP_PURE_STR_110_OFFSET",
		"ITEM_SP_PURE_AGI_110_OFFSET",
		"ITEM_SP_PURE_VIT_110_OFFSET",
		"ITEM_SP_PURE_INT_110_OFFSET",
		"ITEM_SP_PURE_DEX_110_OFFSET",
		"ITEM_SP_PURE_LUK_110_OFFSET",

		"ITEM_SP_PURE_STR_80_OFFSET",
		"ITEM_SP_PURE_AGI_80_OFFSET",
		"ITEM_SP_PURE_VIT_80_OFFSET",
		"ITEM_SP_PURE_INT_80_OFFSET",
		"ITEM_SP_PURE_DEX_80_OFFSET",
		"ITEM_SP_PURE_LUK_80_OFFSET",

		"ITEM_SP_PURE_STR_130_OFFSET",
		"ITEM_SP_PURE_AGI_130_OFFSET",
		"ITEM_SP_PURE_VIT_130_OFFSET",
		"ITEM_SP_PURE_INT_130_OFFSET",
		"ITEM_SP_PURE_DEX_130_OFFSET",
		"ITEM_SP_PURE_LUK_130_OFFSET",
	],
	1000000000,
	1000000000
);

CGlobalConstManager.DefinePseudoEnum(
	"EnumItemSpId",
	[
		// 職業限定
		"ITEM_SP_JOB_RESTRICT_NOVICE_OFFSET",
	],
	100000000000,
	100000000000
);

CGlobalConstManager.DefinePseudoEnum(
	"EnumItemSpId",
	[
		// 職業限定
		"ITEM_SP_JOB_RESTRICT_RUNE_KNIGHT_OFFSET",
		"ITEM_SP_JOB_RESTRICT_GUILLOTINE_CROSS_OFFSET",
		"ITEM_SP_JOB_RESTRICT_ARCBISHOP_OFFSET",
		"ITEM_SP_JOB_RESTRICT_RANGER_OFFSET",
		"ITEM_SP_JOB_RESTRICT_WARLOCK_OFFSET",
		"ITEM_SP_JOB_RESTRICT_MECHANIC_OFFSET",
		"ITEM_SP_JOB_RESTRICT_ROYALGUARD_OFFSET",
		"ITEM_SP_JOB_RESTRICT_SHADOWCHASER_OFFSET",
		"ITEM_SP_JOB_RESTRICT_SHURA_OFFSET",
		"ITEM_SP_JOB_RESTRICT_MINSTREL_OFFSET",
		"ITEM_SP_JOB_RESTRICT_WANDERER_OFFSET",
		"ITEM_SP_JOB_RESTRICT_SORCERER_OFFSET",
		"ITEM_SP_JOB_RESTRICT_GENETIC_OFFSET",
	],
	4700000000000,
	100000000000
);

CGlobalConstManager.DefinePseudoEnum(
	"EnumItemSpId",
	[
		// 職業限定
		"ITEM_SP_JOB_RESTRICT_KAGERO",
		"ITEM_SP_JOB_RESTRICT_OBORO",
		"ITEM_SP_JOB_RESTRICT_SUPERNOVICE_PLUS",
		"ITEM_SP_JOB_RESTRICT_REBELLION",
		"ITEM_SP_JOB_RESTRICT_SUMMONER",
		"ITEM_SP_JOB_RESTRICT_STAR_EMPEROR_OFFSET",
		"ITEM_SP_JOB_RESTRICT_SOUL_REAPER_OFFSET",
	],
	6000000000000,
	100000000000
);

CGlobalConstManager.DefinePseudoEnum(
	"EnumItemSpId",
	[
		// BaseLvが○上がる度に
		"ITEM_SP_BASE_LV_BY_1_OFFSET",
		"ITEM_SP_BASE_LV_BY_2_OFFSET",
		"ITEM_SP_BASE_LV_BY_3_OFFSET",
		"ITEM_SP_BASE_LV_BY_4_OFFSET",
		"ITEM_SP_BASE_LV_BY_5_OFFSET",
		"ITEM_SP_BASE_LV_BY_6_OFFSET",
		"ITEM_SP_BASE_LV_BY_7_OFFSET",
		"ITEM_SP_BASE_LV_BY_8_OFFSET",
		"ITEM_SP_BASE_LV_BY_9_OFFSET",
		"ITEM_SP_BASE_LV_BY_10_OFFSET",
	],
	10000000000000,
	10000000000000
);

CGlobalConstManager.DefinePseudoEnum(
	"EnumItemSpId",
	[
		// BaseLvが○上がる度に
		"ITEM_SP_BASE_LV_BY_20_OFFSET",
	],
	200000000000000,
	10000000000000
);

CGlobalConstManager.DefinePseudoEnum(
	"EnumItemSpId",
	[
		// BaseLvが○上がる度に
		"ITEM_SP_BASE_LV_BY_99_OFFSET",
	],
	990000000000000,
	10000000000000
);

CGlobalConstManager.DefinePseudoEnum(
	"EnumItemSpId",
	[
		// BaseLvが○以上の時、BaseLvが○以下の時
		"ITEM_SP_BASE_LV_OVER_170_OFFSET",
		"ITEM_SP_BASE_LV_OVER_100_OFFSET",
		"ITEM_SP_BASE_LV_UNDER_99_OFFSET",
		"ITEM_SP_BASE_LV_OVER_175_OFFSET",


		// もう限界なので
		"ITEM_SP_PET_FRIENDLY_OVER_HIGH",			// 親しい
		"ITEM_SP_PET_FRIENDLY_OVER_HIGHEST",		// 極めて親しい
	],
	1000000000000000,
	1000000000000000
);

// TODO: 条件判定はペットの箇所のみ実装済み
// TODO: 数値の限界に来ているので、これ以上の追加は無理
CGlobalConstManager.DefinePseudoEnum(
	"EnumItemSpId",
	[
		// 親密度が○○以上
		// "ITEM_SP_PET_FRIENDLY_OVER_AUTO",		// 自動（親しい扱い）		// 自動以上は定義しない
		// "ITEM_SP_PET_FRIENDLY_OVER_RUNAWAY",		// 逃亡寸前
		// "ITEM_SP_PET_FRIENDLY_OVER_LOWEST",			// 疎々しい
		// "ITEM_SP_PET_FRIENDLY_OVER_LOW",			// 気まずい
		// "ITEM_SP_PET_FRIENDLY_OVER_NORMAL",			// 普通
		//"ITEM_SP_PET_FRIENDLY_OVER_HIGH",			// 親しい
		//"ITEM_SP_PET_FRIENDLY_OVER_HIGHEST",		// 極めて親しい
	],
	10000000000000000,
	10000000000000000
);




/**
 * アイテムの種別名を取得する.
 * @param kindId 種別ＩＤ
 * @return 種別名
 */
function GetItemKindNameText(kindId) {

	switch (kindId) {

	case ITEM_KIND_NONE:
		return "素手";

	case ITEM_KIND_KNIFE:
		return "短剣";

	case ITEM_KIND_SWORD:
		return "片手剣";

	case ITEM_KIND_SWORD_2HAND:
		return "両手剣";

	case ITEM_KIND_SPEAR:
		return "片手槍";

	case ITEM_KIND_SPEAR_2HAND:
		return "両手槍";

	case ITEM_KIND_AXE:
		return "片手斧";

	case ITEM_KIND_AXE_2HAND:
		return "両手斧";

	case ITEM_KIND_CLUB:
		return "鈍器";

	case ITEM_KIND_STUFF:
		return "杖";

	case ITEM_KIND_BOW:
		return "弓";

	case ITEM_KIND_KATAR:
		return "カタール";

	case ITEM_KIND_BOOK:
		return "本";

	case ITEM_KIND_FIST:
		return "ナックル";

	case ITEM_KIND_MUSICAL:
		return "楽器";

	case ITEM_KIND_WHIP:
		return "鞭";

	case ITEM_KIND_FUMA:
		return "風魔手裏剣";

	case ITEM_KIND_HANDGUN:
		return "ハンドガン";

	case ITEM_KIND_RIFLE:
		return "ライフル";

	case ITEM_KIND_SHOTGUN:
		return "ショットガン";

	case ITEM_KIND_GATLINGGUN:
		return "ガトリングガン";

	case ITEM_KIND_GRENADEGUN:
		return "グレネードガン";

	case ITEM_KIND_HEAD_TOP:
		return "頭上段";

	case ITEM_KIND_HEAD_MID:
		return "頭中段";

	case ITEM_KIND_HEAD_UNDER:
		return "頭下段";

	case ITEM_KIND_BODY:
		return "鎧";

	case ITEM_KIND_SHIELD:
		return "盾";

	case ITEM_KIND_SHOULDER:
		return "肩にかける物";

	case ITEM_KIND_FOOT:
		return "靴";

	case ITEM_KIND_ACCESSARY:
		return "アクセサリ";

	case ITEM_KIND_ACCESSARY_ON1:
		return "アクセサリ(1)";

	case ITEM_KIND_ACCESSARY_ON2:
		return "アクセサリ(2)";

	}

	return "不明";
}



/*
 * DEXベース武器かを判定する.
 * @param itemKind アイテム種別
 * @return true:DEXベース、false:STRベース
 */
function IsDexBasedArms (itemKind) {

	switch (itemKind) {

	// DEXベース武器
	case ITEM_KIND_BOW:
	case ITEM_KIND_MUSICAL:
	case ITEM_KIND_WHIP:
	case ITEM_KIND_HANDGUN:
	case ITEM_KIND_RIFLE:
	case ITEM_KIND_SHOTGUN:
	case ITEM_KIND_GATLINGGUN:
	case ITEM_KIND_GRENADEGUN:
		return true;
	}

	return false;
}

/*
 * 過剰精錬ATKが適用される武器かを判定する.
 * @param itemKind アイテム種別
 * @return true:適用される、false:適用されない
 */
function IsEffectiveExceededRefinedAtkArms (itemKind) {

	// 基本的には、STRベースの武器のみ適用
	// ただし、楽器と鞭は、DEXベースだが適用される


	// STRベース武器の場合
	if (!IsDexBasedArms(itemKind)) {
		return true;
	}


	// DEXベース武器の例外
	switch (itemKind) {

	case ITEM_KIND_MUSICAL:
	case ITEM_KIND_WHIP:
		return true;
	}


	return false;
}

/*
 * 銃系列武器かを判定する.
 * @param itemKind アイテム種別
 * @return true:銃系列、false:銃以外
 */
function IsGunSeriesArms (itemKind) {

	switch (itemKind) {

	// 銃系列武器
	case ITEM_KIND_HANDGUN:
	case ITEM_KIND_RIFLE:
	case ITEM_KIND_SHOTGUN:
	case ITEM_KIND_GATLINGGUN:
	case ITEM_KIND_GRENADEGUN:
		return true;
	}

	return false;
}



/**
 * 職業制限テキストを取得する.
 * @param eqpflg 装備フラグ
 * @return 職業制限テキスト
 */
function GetJobRestrictText(eqpflg) {

	switch (eqpflg) {
	case ITEM_EQPFLG_NONE:
		return "すべての職業";

	case ITEM_EQPFLG_IGNORE_NOVICE_SERIES:
		return "ノービスを除く、すべての職業";

	case ITEM_EQPFLG_SERIES_NOVICE:
		return "ノービス系";
	case ITEM_EQPFLG_SERIES_SWORDMAN:
		return "ソードマン系";
	case ITEM_EQPFLG_SERIES_THIEF_NINJA:
		return "シーフ・忍者系";
	case ITEM_EQPFLG_SERIES_ACOLYTE:
		return "アコライト系";
	case ITEM_EQPFLG_SERIES_ARCHER:
		return "アーチャー系";
	case ITEM_EQPFLG_SERIES_MAGICIAN_LINKER:
		return "マジシャン・ソウルリンカー系";
	case ITEM_EQPFLG_SERIES_MARCHANT:
		return "マーチャント系";
// 57 は欠番
	case ITEM_EQPFLG_SERIES_NINJA:
		return "忍者系";
	case ITEM_EQPFLG_SERIES_GUNSLINGER:
		return "ガンスリンガー系";

	case ITEM_EQPFLG_SERIES_UPPER_OF_SWORDMAN:
		return "ソードマン系の二次職、転生二次職、三次職";
	case ITEM_EQPFLG_SERIES_UPPER_OF_THIEF:
		return "シーフ系の二次職、転生二次職、三次職";
	case ITEM_EQPFLG_SERIES_UPPER_OF_ACOLYTE:
		return "アコライト系の二次職、転生二次職、三次職";
	case ITEM_EQPFLG_SERIES_UPPER_OF_ARCHER:
		return "アーチャー系の二次職、転生二次職、三次職";
	case ITEM_EQPFLG_SERIES_UPPER_OF_MAGICIAN_LINKER:
		return "マジシャン・ソウルリンカー系の二次職、転生二次職、三次職";
	case ITEM_EQPFLG_SERIES_UPPER_OF_MARCHANT:
		return "マーチャント系の二次職、転生二次職、三次職";
// 67 は欠番
	case ITEM_EQPFLG_SERIES_UPPER_OF_NINJA:
		return "影狼・朧";
	case ITEM_EQPFLG_SERIES_UPPER_OF_GUNSLINGER:
		return "リベリオン";

	case ITEM_EQPFLG_SERIES_SWORDMAN_MARCHANT:
		return "ソードマン・マーチャント系";
	case ITEM_EQPFLG_TYPE_SILKROBE:
		return "ソードマン・アコライト・マジシャン・マーチャント系";
	case ITEM_EQPFLG_SERIES_SWORDMAN_THIEF_MARCHANT:
		return "ソードマン・シーフ・マーチャント系";
	case ITEM_EQPFLG_SERIES_ACOLYTE_MARCHANT:
		return "アコライト・マーチャント系";
	case ITEM_EQPFLG_TYPE_BACKLER:
		return "ソードマン・シーフ・アコライト・マーチャント・バード・ダンサー系";
	case ITEM_EQPFLG_TYPE_GOOGLE:
		return "ソードマン・シーフ・アーチャー・マーチャント系";
	case ITEM_EQPFLG_SERIES_ARCHER_ROGUE:
		return "アーチャー・ローグ系";
	case ITEM_EQPFLG_SERIES_ACOLYTE_MAGICIAN_LINKER:
		return "アコライト・マジシャン・ソウルリンカー系";
	case ITEM_EQPFLG_TYPE_KOZAN_HELMET:
		return "ソードマン・シーフ・アコライト・マーチャント系";
	case ITEM_EQPFLG_SERIES_UPPER_OF_ANY:
		return "二次職、転生二次職、三次職、拡張二次職";
	case ITEM_EQPFLG_TYPE_RENDO:
		return "シーフのみ・ハンター・ローグ系";
	case ITEM_EQPFLG_SERIES_ASSASIN_PRIEST:
		return "アサシン・プリースト系";
	case ITEM_EQPFLG_SERIES_REINCARNATED_OF_ANY:
		return "転生二次職、三次職（転生）";
	case ITEM_EQPFLG_TYPE_BOOTS:
		return "ソードマン・シーフ・アーチャー・マーチャント・テコンのみ・拳聖のみ・ガンスリンガー系";
	case ITEM_EQPFLG_TYPE_MANT:
		return "ソードマン・シーフ・マーチャント・テコンのみ・拳聖のみ系";
	case ITEM_EQPFLG_TYPE_SHARP_HEAD_GEAR:
		return "ソードマン・シーフ・アコライト・マーチャント・テコンのみ・拳聖のみ系";
	case ITEM_EQPFLG_TYPE_MAJESTIC_GOAT:
		return "ソードマン・マーチャント・テコンのみ・拳聖のみ系";
	case ITEM_EQPFLG_TYPE_MIRROR_SHIELD:
		return "ソードマン・テコンのみ・拳聖のみ系";
	case ITEM_EQPFLG_SERIES_HUNTER_ROGUE:
		return "ハンター・ローグ系";
	case ITEM_EQPFLG_SERIES_ACOLYTE_ARCHER_MAGICIAN_LINKER:
		return "アコライト・アーチャー・マジシャン・ソウルリンカー系";
	case ITEM_EQPFLG_TYPE_ONEHAND_AXE:
		return "ノービス・ソードマン・マーチャント・アサシン系";
	case ITEM_EQPFLG_TYPE_SENTO_GREEVE:
		return "ソードマン・シーフ・マーチャント・拳聖・忍者系";
	case ITEM_EQPFLG_TYPE_DOFRENO_ONO:
		return "ソードマン・マーチャント・ギロチンクロス・スーパーノービス＋系";
	case ITEM_EQPFLG_SERIES_3RD_EX2ND:
		return "三次職、拡張二次職系";
	case ITEM_EQPFLG_TYPE_KOJOSEN_TE_MAGIC:
		return "ノービス・アコライト・マジシャン・ソウルリンカー系";
	case ITEM_EQPFLG_TYPE_BOOK:
		return "プリースト・セージ・拳聖系";
	case ITEM_EQPFLG_TYPE_BEGINNER:
		return "ノービスのみ・非転生一次職・非転生二次職系";

	case ITEM_EQPFLG_SERIES_LOWER_OF_NOVICE:
		return "ノービス・ノービスハイ";
	case ITEM_EQPFLG_SERIES_LOWER_OF_SWORDMAN:
		return "ソードマン・ソードマンハイ";
	case ITEM_EQPFLG_SERIES_LOWER_OF_THIEF:
		return "シーフ・シーフハイ";
	case ITEM_EQPFLG_SERIES_LOWER_OF_ACOLYTE:
		return "アコライト・アコライトハイ";
	case ITEM_EQPFLG_SERIES_LOWER_OF_ARCHER:
		return "アーチャー・アーチャーハイ";
	case ITEM_EQPFLG_SERIES_LOWER_OF_MAGICIAN_LINKER:
		return "マジシャン・マジシャンハイ";
	case ITEM_EQPFLG_SERIES_LOWER_OF_MARCHANT:
		return "マーチャント・マーチャントハイ";
	case ITEM_EQPFLG_SERIES_KNIGHT:
		return "ナイト系";
	case ITEM_EQPFLG_SERIES_ASSASIN:
		return "アサシン系";
	case ITEM_EQPFLG_SERIES_PRIEST:
		return "プリースト系";
	case ITEM_EQPFLG_SERIES_HUNTER:
		return "ハンター系";
	case ITEM_EQPFLG_SERIES_WIZARD_LINKER:
		return "ウィザード・ソウルリンカー系";
	case ITEM_EQPFLG_SERIES_BLACKSMITH:
		return "ブラックスミス系";
	case ITEM_EQPFLG_SERIES_CRUSADER:
		return "クルセイダー系";
	case ITEM_EQPFLG_SERIES_ROGUE:
		return "ローグ系";
	case ITEM_EQPFLG_SERIES_MONK:
		return "モンク系";
	case ITEM_EQPFLG_SERIES_BARD:
		return "バード系";
	case ITEM_EQPFLG_SERIES_DANCER:
		return "ダンサー系";
	case ITEM_EQPFLG_SERIES_SAGE:
		return "セージ系";
	case ITEM_EQPFLG_SERIES_ALCHEMIST:
		return "アルケミスト系";
	case ITEM_EQPFLG_SERIES_SUPER_NOVICE:
		return "スーパーノービス系";
	case ITEM_EQPFLG_SERIES_LOAR_KNIGHT:
		return "ロードナイト系";
	case ITEM_EQPFLG_SERIES_ASSASIN_CROSS:
		return "アサシンクロス系";
	case ITEM_EQPFLG_SERIES_HIGH_PRIEST:
		return "ハイプリースト系";
	case ITEM_EQPFLG_SERIES_SNIPER:
		return "スナイパー系";
	case ITEM_EQPFLG_SERIES_HIGH_WIZARD:
		return "ハイウィザード系";
	case ITEM_EQPFLG_SERIES_WHITESMITH:
		return "ホワイトスミス系";
	case ITEM_EQPFLG_SERIES_PALADIN:
		return "パラディン系";
	case ITEM_EQPFLG_SERIES_CHASER:
		return "チェイサー系";
	case ITEM_EQPFLG_SERIES_CHAMPION:
		return "チャンピオン系";
	case ITEM_EQPFLG_SERIES_CROWN:
		return "クラウン系";
	case ITEM_EQPFLG_SERIES_ZYPSY:
		return "ジプシー系";
	case ITEM_EQPFLG_SERIES_PROFESSOR:
		return "プロフェッサー系";
	case ITEM_EQPFLG_SERIES_CREATOR:
		return "クリエイター系";

	case ITEM_EQPFLG_TAEGWON:
		return "テコンキッド";
	case ITEM_EQPFLG_SERIES_KENSEI:
		return "拳聖";
	case ITEM_EQPFLG_SERIES_SOUL_LINKER:
		return "ソウルリンカー";
// 144 は欠番（58を使用）
// 145 は欠番（59を使用）

	case ITEM_EQPFLG_RUNEKNIGHT:
		return "ルーンナイト";
	case ITEM_EQPFLG_GLTCROSS:
		return "ギロチンクロス";
	case ITEM_EQPFLG_ARCBISHOP:
		return "アークビショップ";
	case ITEM_EQPFLG_RANGER:
		return "レンジャー";
	case ITEM_EQPFLG_WARLOCK:
		return "ウォーロック";
	case ITEM_EQPFLG_MECHANIC:
		return "メカニック";
	case ITEM_EQPFLG_ROYALGUARD:
		return "ロイヤルガード";
	case ITEM_EQPFLG_SHADOWCHASER:
		return "シャドウチェイサー";
	case ITEM_EQPFLG_SHURA:
		return "修羅";
	case ITEM_EQPFLG_MINSTREL:
		return "ミンストレル";
	case ITEM_EQPFLG_WANDERER:
		return "ワンダラー";
	case ITEM_EQPFLG_SOURCERER:
		return "ソーサラー";
	case ITEM_EQPFLG_GENETIC:
		return "ジェネティック";

	case ITEM_EQPFLG_MINSTREL_WANDERER:
		return "ミンストレル・ワンダラー";

	case ITEM_EQPFLG_SERIES_SUMMONER:
		return "サモナー";
	}

	return "不明";
}



/**
 * STRペナルティ回避STRを取得する.
 * @param atk 武器ATK
 * @param wpnlv 武器レベル
 * @returns ペナルティ回避STR
 */
function GetStrPenaltyAvoidStr(atk, wpnlv) {
	var penaValue = Math.floor(atk * 2 / 3);
	var wlvBonus = 4 / (Math.floor(wpnlv) % 10);
	var needStr = Math.ceil(Math.sqrt(penaValue / wlvBonus)) * 10;

	return needStr;
}



/**
 * エンチャントタイプIDを取得する.
 * @param wpnlv 武器レベル（当該データに合成しているので）
 * @returns エンチャントタイプID
 */
function GetEnchantTypeId(wpnlv) {
	return Math.floor(wpnlv / 10) % 10000;
}



/**
 * ランダムオプションタイプIDを取得する.
 * @param wpnlv 武器レベル（当該データに合成しているので）
 * @returns ランダムオプションタイプID
 */
function GetRndOptTypeId(wpnlv) {
	return Math.floor(wpnlv / 10 / 10000);
}



/**
 * スロット数テキストを取得する.
 * @param slotValue スロット定義値
 * @returns スロット数テキスト
 */
function GetSlotText(slotValue) {

	var slotValueWork = 0;
	var slotText = "";

	// スロット定義値を小数点以下切り捨てで取得
	slotValueWork = Math.floor(slotValue);

	// スロット定義値が 0 より大きい間処理
	while (slotValueWork > 0) {

		// 第二条件以降は、先に中黒を追加
		if (slotText.length > 0) {
			slotText += "・";
		}

		// スロット数を追記
		slotText += (slotValueWork % 10);

		// スロット定義値を減算
		slotValueWork = (slotValueWork - (slotValueWork % 10)) / 10;
	}

	// 定義が取得できていない場合は、0 に設定
	if (slotText.length == 0) {
		slotText = "0";
	}

	return slotText;
}



/**
 * 最大スロット数を取得する.
 * @param slotValue スロット定義値
 * @returns 最大スロット数
 */
function GetMaxSlot(slotValue) {

	var slotValueWork = 0;
	var slotCount = 0;
	var slotMax = 0;

	// スロット定義値を小数点以下切り捨てで取得
	slotValueWork = Math.floor(slotValue);

	// スロット定義値が 0 より大きい間処理
	while (slotValueWork > 0) {

		// スロット数を切り出し
		slotCount = slotValueWork % 10;

		// 最大値を更新
		slotMax = Math.max(slotMax, slotCount);

		// スロット定義値を減算
		slotValueWork = (slotValueWork - slotCount) / 10;
	}

	return slotMax;
}



// TODO: 削除予定
function GetItemSP(itemId, spid) {

	var idx = 0;
	var itemData = ItemObjNew[itemId];

	for (idx = 0; ; idx++) {
		if (ITEM_SP_END == itemData[ITEM_DATA_INDEX_SPBEGIN + idx * 2]) {
			break;
		}
		if (spid == itemData[ITEM_DATA_INDEX_SPBEGIN + idx * 2]) {
			return itemData[ITEM_DATA_INDEX_SPBEGIN + idx * 2 + 1];
		}
	}

	return 0;
}



/**
 * アイテム説明テキストを取得する.
 * @param spId SPID
 * @param spValue SP値
 * @return 説明テキスト
 */
function GetItemExplainText(spId, spValue) {

	var condTextFriendlyOver = "";
	var condTextBaseLvOver = "";
	var condTextBaseLvBy = "";
	var condTextJobRestrict = "";
	var condTextPureStatus = "";
	var condTextRefineOver = "";
	var condTextRefineBy = "";

	var sign = "";
	var skillName = "";

	var funcWork = null;
	var idArrayWork = null;

	var textWork = "";
	var textInfoArray = null;



	// 戻り値用テキスト配列
	textInfoArray = new Array();



	// 『親密度が○○以上の時』条件
	var friendlyOver = Math.floor(spId / ITEM_SP_PET_FRIENDLY_OVER_HIGH);
	var friendlyOverEffecct = spId % ITEM_SP_PET_FRIENDLY_OVER_HIGH;

	switch (friendlyOver) {
/*
	case 1:
		condTextFriendlyOver = "親密度が「逃亡寸前」以上の場合、追加で";
		break;
	case 2:
		condTextFriendlyOver = "親密度が「疎々しい」以上の場合、追加で";
		break;
	case 3:
		condTextFriendlyOver = "親密度が「気まずい」以上の場合、追加で";
		break;
	case 4:
		condTextFriendlyOver = "親密度が「普通」以上の場合、追加で";
		break;
*/
	}

	spId = friendlyOverEffecct;



	// 『BaseLvが○以上の時』条件
	var baseLvOver = Math.floor(spId / ITEM_SP_BASE_LV_OVER_170_OFFSET);
	var baseLvOverEffecct = spId % ITEM_SP_BASE_LV_OVER_170_OFFSET;

	switch (baseLvOver) {
	case 1:
		condTextBaseLvOver = "BaseLvが170以上の時、追加で";
		break;
	case 2:
		condTextBaseLvOver = "BaseLvが100以上の時、追加で";
		break;
	case 3:
		condTextBaseLvOver = "BaseLvが99以下の時、追加で";
		break;
	case 4:
		condTextBaseLvOver = "BaseLvが175以上の時、追加で";
		break;
	case 5:
		condTextFriendlyOver = "親密度が「親しい」以上の場合、追加で";
		break;
	case 6:
		condTextFriendlyOver = "親密度が「極めて親しい」の場合、追加で";
		break;
	}

	spId = baseLvOverEffecct;



	// 『BaseLvが○上がる度に』条件
	var baseLvBy = Math.floor(spId / ITEM_SP_BASE_LV_BY_1_OFFSET);
	var baseLvByEffecct = spId % ITEM_SP_BASE_LV_BY_1_OFFSET;

	if (baseLvBy > 0) {
		condTextBaseLvBy = "BaseLvが" + baseLvBy + "上がる度に追加で";
	}

	spId = baseLvByEffecct;



	// 職業限定
	var jobRestrict = Math.floor(spId / ITEM_SP_JOB_RESTRICT_NOVICE_OFFSET) - 1;

	if (jobRestrict >= 0) {
		condTextJobRestrict += GetJobName(jobRestrict) + "が装備時、";
	}

	spId = spId % ITEM_SP_JOB_RESTRICT_NOVICE_OFFSET;



	// 『純粋な○○が△△以上の時』条件
	var statusName = ["Str", "Agi", "Vit", "Int", "Dex", "Luk"];

	var pureStatus = Math.floor(spId / ITEM_SP_PURE_STR_90_OFFSET);
	var pureStatusEffect = spId % ITEM_SP_PURE_STR_90_OFFSET;

	if (1 <= pureStatus && pureStatus <= 6) {
		condTextPureStatus += "純粋な" + statusName[pureStatus - 1] +  "が90以上の時、";
	}
	else if (7 <= pureStatus && pureStatus <= 12) {
		condTextPureStatus += "純粋な" + statusName[pureStatus - 7] +  "が108以上の時、";
	}
	else if (13 <= pureStatus && pureStatus <= 18) {
		condTextPureStatus += "純粋な" + statusName[pureStatus - 13] +  "が120以上の時、";
	}
	else if (19 <= pureStatus && pureStatus <= 24) {
		condTextPureStatus += "純粋な" + statusName[pureStatus - 19] +  "が125以上の時、";
	}
	else if (25 <= pureStatus && pureStatus <= 30) {
		condTextPureStatus += "純粋な" + statusName[pureStatus - 25] +  "が110以上の時、";
	}
	else if (31 <= pureStatus && pureStatus <= 36) {
		condTextPureStatus += "純粋な" + statusName[pureStatus - 31] +  "が80以上の時、";
	}
	else if (37 <= pureStatus && pureStatus <= 42) {
		condTextPureStatus += "純粋な" + statusName[pureStatus - 37] +  "が130以上の時、";
	}

	spId = pureStatusEffect;



	// 『純粋な○○が△△上がる度に』条件
	var pureStatusBy = Math.floor(spId / ITEM_SP_PURE_STR_BY_10_OFFSET);
	var pureStatusByEffect = spId % ITEM_SP_PURE_STR_BY_10_OFFSET;

	if (1 <= pureStatusBy && pureStatusBy <= 6) {
		condTextPureStatus += "純粋な" + statusName[pureStatusBy - 1] +  "が10上がる度に、";
	}
	else if (7 == pureStatusBy) {
		condTextPureStatus += "純粋な" + statusName[PARAM_DEX] +  "が1上がる度に、";
	}
	else if (8 == pureStatusBy) {
		condTextPureStatus += "純粋な" + statusName[PARAM_VIT] +  "が1上がる度に、";
	}

	spId = pureStatusByEffect;



	// 『精錬値が○以上の時』条件
	var refineOver = Math.floor(spId / ITEM_SP_REFINE_OVER_1_OFFSET);
	var refineOverEffect = spId % ITEM_SP_REFINE_OVER_1_OFFSET;

	if (refineOver > 0) {
		condTextRefineOver = "精錬値が" + refineOver + "以上の時、";
	}

	spId = refineOverEffect;



	// 『精錬値が○上がる度に』条件
	var refineBy = Math.floor(spId / ITEM_SP_REFINE_BY_1_OFFSET);
	var refineByEffecct = spId % ITEM_SP_REFINE_BY_1_OFFSET;

	if (refineBy > 0) {
		condTextRefineBy = "精錬値が" + refineBy + "上がる度に追加で";
	}

	spId = refineByEffecct;



	// 条件文字列の組み立て
	textInfoArray.push(["", condTextFriendlyOver + condTextJobRestrict + condTextBaseLvOver + condTextRefineOver + condTextPureStatus + condTextRefineBy + condTextBaseLvBy]);



	sign = (spValue < 0) ? " " : " + ";



	switch (spId) {

	case ITEM_SP_DMY:
		textInfoArray.push(["", ""]);
		break;

	case ITEM_SP_STR_PLUS:
		textInfoArray.push(["", "STR" + sign + spValue]);
		break;

	case ITEM_SP_AGI_PLUS:
		textInfoArray.push(["", "AGI" + sign + spValue]);
		break;

	case ITEM_SP_VIT_PLUS:
		textInfoArray.push(["", "VIT" + sign + spValue]);
		break;

	case ITEM_SP_INT_PLUS:
		textInfoArray.push(["", "INT" + sign + spValue]);
		break;

	case ITEM_SP_DEX_PLUS:
		textInfoArray.push(["", "DEX" + sign + spValue]);
		break;

	case ITEM_SP_LUK_PLUS:
		textInfoArray.push(["", "LUK" + sign + spValue]);
		break;

	case ITEM_SP_ALLSTATUS_PLUS:
		textInfoArray.push(["", "すべてのステータス" + sign + spValue]);
		break;

	case ITEM_SP_HIT_PLUS:
		textInfoArray.push(["", "Hit" + sign + spValue]);
		break;

	case ITEM_SP_FLEE_PLUS:
		textInfoArray.push(["", "Flee" + sign + spValue]);
		break;

	case ITEM_SP_CRI_PLUS:
		textInfoArray.push(["", "Cri" + sign + spValue]);
		break;

	case ITEM_SP_LUCKY_PLUS:
		textInfoArray.push(["", "完全回避" + sign + spValue]);
		break;

	case ITEM_SP_ASPD_UP:
		textInfoArray.push(["", "ASPD" + sign + spValue +"%"]);
		break;

	case ITEM_SP_MAXHP_PLUS:
		textInfoArray.push(["", "MaxHP" + sign + spValue]);
		break;

	case ITEM_SP_MAXSP_PLUS:
		textInfoArray.push(["", "MaxSP" + sign + spValue]);
		break;

	case ITEM_SP_MAXHP_UP:
		textInfoArray.push(["", "MaxHP" + sign + spValue +"%"]);
		break;

	case ITEM_SP_MAXSP_UP:
		textInfoArray.push(["", "MaxSP" + sign + spValue +"%"]);
		break;

	case ITEM_SP_ATK_PLUS:
		textInfoArray.push(["", "ATK" + sign + spValue]);
		break;

	case ITEM_SP_DEF_PLUS:
		textInfoArray.push(["", "DEF" + sign + spValue]);
		break;

	case ITEM_SP_MDEF_PLUS:
		textInfoArray.push(["", "MDEF" + sign + spValue]);
		break;

	case ITEM_SP_ELEMENTAL:
		textInfoArray.push(["", GetElementText(spValue) +"属性武器"]);
		break;

	case ITEM_SP_PENETRATE_DEF:
		if(spValue == 1) {
			textInfoArray.push(["", "敵の防御力を無視する(Boss属性は無視できない)"]);
		}
		else {
			textInfoArray.push(["", "敵の防御力を無視する(Boss属性の防御力も無視できる)"]);
		}
		break;

	case ITEM_SP_KIRI_EFFECT:
		textInfoArray.push(["", "敵のDEFとVITが高いほど高ダメージを与える"]);
		break;

	case ITEM_SP_DEF_DIVIDE_PENARTY:
		textInfoArray.push(["", "自キャラクターの防御力1/"+ spValue + ""]);
		break;

	case ITEM_SP_LONGRANGE_DAMAGE_UP:
		textInfoArray.push(["", "遠距離物理攻撃で与えるダメージ"+ sign + spValue +"%"]);
		break;

	case ITEM_SP_PHYSICAL_DAMAGE_UP_BOSS:
		textInfoArray.push(["", "BOSS属性モンスターに与える物理ダメージ"+ spValue +"%"]);
		break;

	case ITEM_SP_PHYSICAL_DAMAGE_UP_SIZE_SMALL:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_SIZE_MEDIUM:
	case ITEM_SP_PHYSICAL_DAMAGE_UP_SIZE_LARGE:
		textInfoArray.push(["", GetSizeText(spId - ITEM_SP_PHYSICAL_DAMAGE_UP_SIZE_SMALL) + "のモンスターに与える物理ダメージ" + sign + spValue + "%"]);
		break;

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
		textInfoArray.push(["", GetRaceText(spId - ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_SOLID) + "形のモンスターに与える物理ダメージ" + sign + spValue + "%"]);
		break;

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
		textInfoArray.push(["", GetElementText(spId - ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_VANITY) + "属性モンスターに与える物理ダメージ" + sign + spValue + "%"]);
		break;

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
		if (spValue > 0) {
			textInfoArray.push(["", GetRaceText(spId - ITEM_SP_RESIST_RACE_SOLID) + "形モンスターから受けるダメージ" + spValue + "%減少"]);
		}
		else {
			textInfoArray.push(["", GetRaceText(spId - ITEM_SP_RESIST_RACE_SOLID) + "形モンスターから受けるダメージ" + (-1 * spValue) + "%増加"]);
		}
		break;

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
		textInfoArray.push(["", GetElementText(spId - ITEM_SP_RESIST_ELM_VANITY) + "属性攻撃に対する耐性" + sign + spValue + "%"]);
		break;

	case ITEM_SP_CRITICAL_DAMAGE_UP:
		textInfoArray.push(["", "クリティカル攻撃で与えるダメージ" + sign + spValue + "%"]);
		break;

	case ITEM_SP_REFLECT_PHYSICAL_DAMAGE:
		textInfoArray.push(["", "敵の近距離物理攻撃を" + spValue + "%反射"]);
		break;

	case ITEM_SP_LONGRANGE_CRI_PLUS:
		textInfoArray.push(["", "遠距離物理攻撃時、Cri + " + spValue + ""]);
		break;

	case ITEM_SP_SKILL_CAST_TIME:
		textInfoArray.push(["", "詠唱時間" + sign + spValue + "%"]);
		break;

	case ITEM_SP_SKILL_DELAY_DOWN:
		if (spValue > 0) {
			textInfoArray.push(["", "スキル後のディレイ" + spValue + "%減少"]);
		}
		else {
			textInfoArray.push(["", "スキル後のディレイ" + (spValue * -1) + "%増加"]);
		}
		break;

	case ITEM_SP_HPR_UP:
		textInfoArray.push(["", "HP自然回復力" + sign + spValue + "%"]);
		break;

	case ITEM_SP_SPR_UP:
		textInfoArray.push(["", "SP自然回復力" + sign + spValue + "%"]);
		break;

	case ITEM_SP_RESIST_BOSS:
		textInfoArray.push(["", "ボスモンスターに対する耐性" + sign + spValue + "%"]);
		break;

	case ITEM_SP_RESIST_LONGRANGE:
		textInfoArray.push(["", "遠距離攻撃に対する耐性" + sign + spValue + "%"]);
		break;

	case ITEM_SP_RESIST_NOTBOSS:
		textInfoArray.push(["", "一般モンスターに対する耐性" + sign + spValue + "%"]);
		break;

	case ITEM_SP_PHYSICAL_DAMAGE_UP:
		textInfoArray.push(["", "物理攻撃で与えるダメージ" + sign + spValue + "%"]);
		break;

	case ITEM_SP_DAMAGE_UP_GROUP_GOBLIN:
		textInfoArray.push(["", "ゴブリン系に対するダメージ" + sign + spValue + "%"]);
		break;

	case ITEM_SP_DAMAGE_UP_GROUP_COBOLD:
		textInfoArray.push(["", "コボルド系に対するダメージ" + sign + spValue + "%"]);
		break;

	case ITEM_SP_DAMAGE_UP_GROUP_ORC:
		textInfoArray.push(["", "オーク系に対するダメージ" + sign + spValue + "%"]);
		break;

	case ITEM_SP_DAMAGE_UP_GROUP_GOLEM:
		textInfoArray.push(["", "ゴーレム系に対するダメージ" + sign + spValue + "%"]);
		break;

	case ITEM_SP_WEAPON_ATK_UP:
		textInfoArray.push(["", "武器攻撃力" + sign + spValue + "%"]);
		break;

	case ITEM_SP_PERFECT_ATTACK_UP:
		textInfoArray.push(["", spValue + "% の確率で攻撃が必中になる"]);
		break;

	case ITEM_SP_ATK_UP:
		textInfoArray.push(["", "ATK" + sign + spValue + "%"]);
		break;

	case ITEM_SP_MATK_PLUS:
		textInfoArray.push(["", "MATK" + sign + spValue + "(杖型)"]);
		break;

	case ITEM_SP_MAGICAL_DAMAGE_UP:
		textInfoArray.push(["", "魔法攻撃で与えるダメージ" + sign + spValue + "%"]);
		break;

	case ITEM_SP_SET_DEFINITION:
		break;

	case ITEM_SP_HEAL_UP_USING:
		textInfoArray.push(["", "ヒール系スキルを使用した時の回復量" + sign + spValue + "%"]);
		break;

	case ITEM_SP_HEAL_UP_USED:
		textInfoArray.push(["", "ヒール系スキルを受けた時の回復量" + sign + spValue + "%"]);
		break;

	case ITEM_SP_HEAL_DAMAGE_UP:
		textInfoArray.push(["", "不死へのヒールダメージ" + sign + spValue + "%(ハイネスとサンクに効果なし)"]);
		break;

	case ITEM_SP_HEAL_UP_USING_ONLY_HEAL:
		textInfoArray.push(["", "[ヒール]を使用した時の回復量" + sign + spValue + "%"]);
		break;

	case ITEM_SP_HEAL_UP_USING_ONLY_HEAL_SERIES:
		textInfoArray.push(["", "[ヒール][ハイネスヒール][コルセオヒール][サンクチュアリ]を使用した時の回復量" + sign + spValue + "%"]);
		break;

	case ITEM_SP_MAGICAL_DAMAGE_UP_BOSS:
		textInfoArray.push(["", "BOSS属性モンスターに与える魔法ダメージ" + spValue + "%"]);
		break;

	case ITEM_SP_MAGICAL_DAMAGE_UP_SIZE_SMALL:
	case ITEM_SP_MAGICAL_DAMAGE_UP_SIZE_MEDIUM:
	case ITEM_SP_MAGICAL_DAMAGE_UP_SIZE_LARGE:
		textInfoArray.push(["", GetSizeText(spId - ITEM_SP_MAGICAL_DAMAGE_UP_SIZE_SMALL) + "のモンスターに与える魔法ダメージ" + sign + spValue + "%"]);
		break;

	case ITEM_SP_MATK_PLUS_TYPE_NOTSTUFF:
		textInfoArray.push(["", "Matk" + sign + spValue + ""]);
		break;

	case ITEM_SP_ASPD_PLUS:
		textInfoArray.push(["", "ASPD" + sign + spValue + ""]);
		break;

	case ITEM_SP_COST_DOWN:
		if (spValue > 0) {
			textInfoArray.push(["", "スキル使用時の消費SP -" + spValue + "%"]);
		}
		else {
			textInfoArray.push(["red", "スキル使用時の消費SP + "+ (-1 * spValue) + "%"]);
		}
		break;

	case ITEM_SP_EXP_UP_ALL:
		textInfoArray.push(["", "全てのモンスターを倒した時に獲得する経験値" + sign + spValue + "%"]);
		break;

	case ITEM_SP_DEF_UP:
		textInfoArray.push(["", "自キャラクターのDef " + sign + spValue + "%"]);
		break;

	case ITEM_SP_MDEF_UP:
		textInfoArray.push(["", "自キャラクターのMdef " + sign + spValue + "%"]);
		break;

	case ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_HUMAN_NOT_PLAYER:
		textInfoArray.push(["", GetRaceText(RACE_ID_HUMAN) + "形のモンスターに与える物理ダメージ" + sign + spValue + "%（プレイヤーを除く）"]);
		break;

	case ITEM_SP_MAGICAL_DAMAGE_UP_RACE_HUMAN_NOT_PLAYER:
		textInfoArray.push(["", GetRaceText(RACE_ID_HUMAN) + "形のモンスターに与える魔法ダメージ" + sign + spValue + "%（プレイヤーを除く）"]);
		break;

	case ITEM_SP_RESIST_RACE_HUMAN_NOT_PLAYER:
		if (spValue > 0) {
			textInfoArray.push(["", GetRaceText(RACE_ID_HUMAN) + "形モンスターから受けるダメージ" + spValue + "%減少（プレイヤーを除く）"]);
		}
		else {
			textInfoArray.push(["", GetRaceText(RACE_ID_HUMAN) + "形モンスターから受けるダメージ" + (-1 * spValue) + "%増加（プレイヤーを除く）"]);
		}
		break;

	case ITEM_SP_SKILL_FIXED_MINUS:
		if(spValue > 0) {
			textInfoArray.push(["", "固定詠唱時間 " + (spValue / 1000) + "秒減少"]);
		}
		else {
			textInfoArray.push(["", "固定詠唱時間 " + (-1 * spValue / 1000) + "秒増加"]);
		}
		break;

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
		textInfoArray.push(["", GetRaceText(spId - ITEM_SP_CRITICAL_UP_RACE_SOLID) + "形に対してクリティカル" + sign + spValue + ""]);
		break;

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
		textInfoArray.push(["", GetRaceText(spId - ITEM_SP_EXP_UP_RACE_SOLID) + "形のモンスターを倒した時に獲得する経験値" + sign + spValue + "%"]);
		break;

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
		textInfoArray.push(["", "物理攻撃時、" + spValue + "%の確率で敵を" + GetStateText(spId - ITEM_SP_APPEND_STATE_POISON) + "にする"]);
		break;


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
		textInfoArray.push(["", "状態異常 " + GetStateText(spId - ITEM_SP_RESIST_STATE_POISON) + " に対する耐性 + " + spValue + "%"]);
		break;

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
		textInfoArray.push(["", "魔法攻撃で、" + GetRaceText(spId - ITEM_SP_MAGICAL_DAMAGE_UP_RACE_SOLID) + "形モンスターに与えるダメージ" + sign + spValue + "%"]);
		break;

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
		textInfoArray.push(["", GetRaceText(spId - ITEM_SP_PENETRATE_DEF_RACE_SOLID) + "形のモンスターの物理防御力無視"]);
		break;

	case ITEM_SP_RESIST_SIZE_SMALL:
	case ITEM_SP_RESIST_SIZE_MEDIUM:
	case ITEM_SP_RESIST_SIZE_LARGE:
		if (spValue > 0) {
			textInfoArray.push(["", GetSizeText(spId - ITEM_SP_RESIST_SIZE_SMALL) + "モンスターから受けるダメージ" + spValue + "%減少"]);
		}
		else {
			textInfoArray.push(["", GetSizeText(spId - 190) + "モンスターから受けるダメージ" + (-1 * spValue) + "%増加"]);
		}
		break;

	case ITEM_SP_UNREFINABLE:
		textInfoArray.push(["red", "精錬不可能"]);
		break;

	case ITEM_SP_UNBREAKABLE:
		textInfoArray.push(["", "絶対に損傷しない"]);
		break;

	case ITEM_SP_STUFF2HAND:
		textInfoArray.push(["", "両手杖"]);
		break;

	case ITEM_SP_RESIST_MAGIC:
		if(spValue > 0) {
			textInfoArray.push(["", "魔法攻撃で受けるダメージ" + "-" + spValue + "%"]);
		}
		else {
			textInfoArray.push(["", "魔法攻撃で受けるダメージ" + "+" + (0 - spValue) + "%"]);
		}
		break;

	case ITEM_SP_SPECIAL_RANGE:
		textInfoArray.push(["", "射程距離 " + spValue + ""]);
		break;

	case ITEM_SP_BODY_ELEMENT:
		textInfoArray.push(["", "自キャラの防御属性が" + GetElementText(spValue) + "属性になる"]);
		break;

	case ITEM_SP_LEARNED_SKILL_EFFECT:
		skillName = SkillObjNew[spValue][SKILL_DATA_INDEX_NAME];
		skillName = skillName.replace(/\([^)]*\)/g, "");
		skillName = skillName.replace(/\<[^>]*\>/g, "");
		textInfoArray.push(["green", "【習得スキル設定対象】"]);
		textInfoArray.push(["green", "（" + skillName + "）"]);
		textInfoArray.push(["", ""]);
		break;

	case ITEM_SP_SHORTRANGE_DAMAGE_UP:
		textInfoArray.push(["", "近接物理攻撃で与えるダメージ"+ sign + spValue +"%"]);
		break;

	case ITEM_SP_STR_PLUS_FOR_SET:
		textInfoArray.push(["", "STR" + sign + spValue]);
		break;

	case ITEM_SP_AGI_PLUS_FOR_SET:
		textInfoArray.push(["", "AGI" + sign + spValue]);
		break;

	case ITEM_SP_VIT_PLUS_FOR_SET:
		textInfoArray.push(["", "VIT" + sign + spValue]);
		break;

	case ITEM_SP_INT_PLUS_FOR_SET:
		textInfoArray.push(["", "INT" + sign + spValue]);
		break;

	case ITEM_SP_DEX_PLUS_FOR_SET:
		textInfoArray.push(["", "DEX" + sign + spValue]);
		break;

	case ITEM_SP_LUK_PLUS_FOR_SET:
		textInfoArray.push(["", "LUK" + sign + spValue]);
		break;

	case ITEM_SP_ALLSTATUS_PLUS_FOR_SET:
		textInfoArray.push(["", "すべてのステータス" + sign + spValue]);
		break;

	case ITEM_SP_INVALIDATE_ITEM_SP:
		if (ItemObjNew[spValue][ITEM_DATA_INDEX_KIND] == ITEM_KIND_SET) {

			idArrayWork = new Array();

			for (idx = 0; idx < w_SE.length; idx++) {
				if (w_SE[idx][0] == spValue) {
					idArrayWork.push(idx);
				}
			}

			textWork = "[" + GetItemSetMemberText(idArrayWork[0]) + "]セット";
			for (idx = 1; idx < idArrayWork.length; idx++) {
				textWork += "および";
				textInfoArray.push(["", textWork]);

				textWork = "[" + GetItemSetMemberText(idArrayWork[idx]) + "]セット";
			}
			textWork += " の効果が発動しない";

			textInfoArray.push(["", textWork]);
		}
		else {
			textInfoArray.push(["", "[" + ItemObjNew[spValue][ITEM_DATA_INDEX_NAME] + "]" + " の効果が発動しない"]);
		}
		break;

	case ITEM_SP_INVALIDATE_CARD_SP:
		if (CardObjNew[spValue][CARD_DATA_INDEX_KIND] == CARD_KIND_SET) {

			idArrayWork = new Array();

			for (idx = 0; idx < w_SE.length; idx++) {
				if (w_SE[idx][0] == (0 - spValue)) {
					idArrayWork.push(idx);
				}
			}

			textWork = "[" + GetItemSetMemberText(idArrayWork[0]) + "]セット";
			for (idx = 1; idx < idArrayWork.length; idx++) {
				textWork += "および";
				textInfoArray.push(["", textWork]);

				textWork = "[" + GetItemSetMemberText(idArrayWork[idx]) + "]セット";
			}
			textWork += " の効果が発動しない";

			textInfoArray.push(["", textWork]);
		}
		else {
			textInfoArray.push(["", "[" + CardObjNew[spValue][CARD_DATA_INDEX_NAME] + "]カード" + " の効果が発動しない"]);
		}
		break;

	case ITEM_SP_LEARN_SKILL:
		textInfoArray.push(["", "スキル[" + SkillObjNew[InsertSkill[spValue][USABLE_SKILL_DATA_INDEX_SKILL_ID]][SKILL_DATA_INDEX_NAME] + "]Lv " + InsertSkill[spValue][USABLE_SKILL_DATA_INDEX_SKILL_LEVEL] + " 使用可能"]);
		break;

	case ITEM_SP_AUTO_SPELL:

		if (AutoSpellSkill[spValue][AUTO_SPELL_DATA_INDEX_PROBABLY] == 0) {
			textWork = "一定";
		}
		else {
			textWork = AutoSpellSkill[spValue][AUTO_SPELL_DATA_INDEX_PROBABLY] + "%の";
		}

		textInfoArray.push(["", GetAutoSpellTriggerText(AutoSpellSkill[spValue][AUTO_SPELL_DATA_INDEX_TRIGGER]) + "、"
			+ textWork + "確率でオートスペル[" + SkillObjNew[AutoSpellSkill[spValue][AUTO_SPELL_DATA_INDEX_SKILL_ID]][SKILL_DATA_INDEX_NAME] + "]Lv " + AutoSpellSkill[spValue][AUTO_SPELL_DATA_INDEX_SKILL_LEVEL] + "発動"]);

		break;

	case ITEM_SP_LEARN_SKILL_LEVEL_UNSPECIFIED:
		textInfoArray.push(["", "スキル[" + SkillObjNew[InsertSkill[spValue][USABLE_SKILL_DATA_INDEX_SKILL_ID]][SKILL_DATA_INDEX_NAME] + "] 使用可能（装備品の条件により使用可能Lvは変わります）"]);
		break;

	case ITEM_SP_AUTO_SPELL_LEVEL_UNSPECIFIED:

		if (AutoSpellSkill[spValue][AUTO_SPELL_DATA_INDEX_PROBABLY] == 0) {
			textWork = "一定";
		}
		else {
			textWork = AutoSpellSkill[spValue][AUTO_SPELL_DATA_INDEX_PROBABLY] + "%の";
		}

		textInfoArray.push(["", GetAutoSpellTriggerText(AutoSpellSkill[spValue][AUTO_SPELL_DATA_INDEX_TRIGGER]) + "、"
			+ textWork + "確率でオートスペル[" + SkillObjNew[AutoSpellSkill[spValue][AUTO_SPELL_DATA_INDEX_SKILL_ID]][SKILL_DATA_INDEX_NAME] + "] 発動（装備品の条件により発動Lvは変わります）"]);

		break;

	case ITEM_SP_SIZE_PERFECTION:
		textInfoArray.push(["", "全てのモンスターに対し、サイズによる武器ダメージのペナルティが発生しない"]);
		break;

	case ITEM_SP_ARMS_ELEMENT:
		textInfoArray.push(["", "180分間、武器に" + GetElementText(spValue) + "属性を付与"]);
		break;

	case ITEM_SP_POW_PLUS:
		textInfoArray.push(["", "Pow" + sign + spValue]);
		break;
	case ITEM_SP_STA_PLUS:
		textInfoArray.push(["", "Sta" + sign + spValue]);
		break;
	case ITEM_SP_WIS_PLUS:
		textInfoArray.push(["", "Wis" + sign + spValue]);
		break;
	case ITEM_SP_SPL_PLUS:
		textInfoArray.push(["", "Spl" + sign + spValue]);
		break;
	case ITEM_SP_CON_PLUS:
		textInfoArray.push(["", "Con" + sign + spValue]);
		break;
	case ITEM_SP_CRT_PLUS:
		textInfoArray.push(["", "Crt" + sign + spValue]);
		break;
	case ITEM_SP_ALL_SPECS_PLUS:
		textInfoArray.push(["", "全ての特性ステータス" + sign + spValue]);
		break;

	case ITEM_SP_KOZYOSEN_TE_RENTAL_ITEM:
		textInfoArray.push(["", "------------------"]);
		textInfoArray.push(["green", "攻城戦TE専用のレンタルアイテム。レンタル後、24時間で自動消滅する。"]);
		textInfoArray.push(["green", "攻城戦TEの砦内で以下の効果が追加される。"]);
		textInfoArray.push(["green", "※計算機ではプレイヤーに対する効果はヒドラCやタラCと倍率加算しています。"]);
		textInfoArray.push(["green", "※計算機ではモンスター選択欄一番下の[プレイヤー]を選択すると効果があります。"]);
		textInfoArray.push(["green", "※計算機でもモンスターに対しては効果ありません。"]);
		textInfoArray.push(["", "------------------"]);
		break;

	case ITEM_SP_PHYSICAL_DAMAGE_UP_PLAYER_ALL:
		textInfoArray.push(["", "物理攻撃時、プレイヤーに与えるダメージ" + sign + spValue + "%。"]);
		break;

	case ITEM_SP_MAGICAL_DAMAGE_UP_PLAYER_ALL:
		textInfoArray.push(["", "魔法攻撃時、プレイヤーに与えるダメージ" + sign + spValue + "%。"]);
		break;

	case ITEM_SP_RESIST_PLAYER_ALL:
		if (spValue > 0) {
			textInfoArray.push(["", "プレイヤーから受けるダメージ " + spValue + "%減少"]);
		}
		else {
			textInfoArray.push(["", "プレイヤーから受けるダメージ " + (-1 * spValue) + "%増加"]);
		}
		break;

	case ITEM_SP_ATK_PLUS_GVGTE:
		textInfoArray.push(["", "ATK" + sign + spValue + "。"]);
		break;

	case ITEM_SP_MATK_PLUS_GVGTE:
		textInfoArray.push(["", "MATK" + sign + spValue + "。"]);
		break;

	case ITEM_SP_MAXHP_PLUS_GVGTE:
		textInfoArray.push(["", "MaxHP" + sign + spValue + "。"]);
		break;

	case ITEM_SP_MAXSP_PLUS_GVGTE:
		textInfoArray.push(["", "MaxSP" + sign + spValue + "。"]);
		break;

	case ITEM_SP_HEAL_UP_USING_GVGTE:
		textInfoArray.push(["", "[ヒール][ハイネスヒール][コルセオヒール][サンクチュアリ][ポーションピッチャー]を使用した時の回復量" + sign + spValue + "%"]);
		break;

	case ITEM_SP_RESIST_FROZEN_GVGTE:
		textInfoArray.push(["", "状態異常 凍結 に対する耐性 +" + spValue + "%"]);
		break;

	case ITEM_SP_P_ATK_PLUS:
		textInfoArray.push(["", "P.Atk" + sign + spValue]);
		break;
	case ITEM_SP_S_MATK_PLUS:
		textInfoArray.push(["", "S.Matk" + sign + spValue]);
		break;
	case ITEM_SP_H_PLUS_PLUS:
		textInfoArray.push(["", "H.Plus" + sign + spValue]);
		break;
	case ITEM_SP_C_RATE_PLUS:
		textInfoArray.push(["", "C.Rate" + sign + spValue]);
		break;
	case ITEM_SP_RES_PLUS:
		textInfoArray.push(["", "Res" + sign + spValue]);
		break;
	case ITEM_SP_MRES_PLUS:
		textInfoArray.push(["", "Mres" + sign + spValue]);
		break;

	case ITEM_SP_PHYSICAL_DAMAGE_UP_SIZE_ALL:
		textInfoArray.push(["", "物理攻撃時、全てのサイズのモンスターに与えるダメージ" + sign + spValue + "%。"]);
		break;

	case ITEM_SP_PHYSICAL_DAMAGE_UP_RACE_ALL:
		textInfoArray.push(["", "物理攻撃時、全ての種族のモンスターに与えるダメージ" + sign + spValue + "%。"]);
		break;

	case ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_ELM_ALL:
		textInfoArray.push(["", "物理攻撃時、全ての属性のモンスターに与えるダメージ" + sign + spValue + "%。"]);
		break;

	case ITEM_SP_RESIST_RACE_ALL:
		if (spValue > 0) {
			textInfoArray.push(["", "全ての種族のモンスターから受けるダメージ " + spValue + "%減少"]);
		}
		else {
			textInfoArray.push(["", "全ての種族のモンスターから受けるダメージ " + (-1 * spValue) + "%増加"]);
		}
		break;

	case ITEM_SP_RESIST_ELM_ALL:
		if (spValue > 0) {
			textInfoArray.push(["", "全ての属性攻撃で受けるダメージ " + spValue + "%減少"]);
		}
		else {
			textInfoArray.push(["", "全ての属性攻撃で受けるダメージ " + (-1 * spValue) + "%増加"]);
		}
		break;

	case ITEM_SP_MAGICAL_DAMAGE_UP_SIZE_ALL:
		textInfoArray.push(["", "魔法攻撃時、全てのサイズのモンスターに与えるダメージ" + sign + spValue + "%。"]);
		break;

	case ITEM_SP_MAGICAL_DAMAGE_UP_RACE_ALL:
		textInfoArray.push(["", "魔法攻撃時、全ての種族のモンスターに与えるダメージ" + sign + spValue + "%。"]);
		break;

	case ITEM_SP_PHYSICAL_DAMAGE_UP_NOTBOSS:
		textInfoArray.push(["", "物理攻撃時、一般モンスターに与えるダメージ" + sign + spValue + "%。"]);
		break;

	case ITEM_SP_MAGICAL_DAMAGE_UP_NOTBOSS:
		textInfoArray.push(["", "魔法攻撃時、一般モンスターに与えるダメージ" + sign + spValue + "%。"]);
		break;

	case ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_ALL:
		textInfoArray.push(["", "魔法攻撃時、全ての属性のモンスターに与えるダメージ" + sign + spValue + "%。"]);
		break;

	case ITEM_SP_MAGICAL_DAMAGE_UP_ELM_ALL:
		textInfoArray.push(["", "全ての属性魔法攻撃で与えるダメージ" + sign + spValue + "%。"]);
		break;

	case ITEM_SP_RESIST_MONSTER_ELM_ALL:
		if (spValue > 0) {
			textInfoArray.push(["", "全ての属性モンスターから受けるダメージ " + spValue + "%減少"]);
		}
		else {
			textInfoArray.push(["", "全ての属性モンスターから受けるダメージ " + (-1 * spValue) + "%増加"]);
		}
		break;

	case ITEM_SP_PHYSICAL_DAMAGE_UP_PLAYER_DORAM:
		textInfoArray.push(["", "物理攻撃時、ドラム形プレイヤーに与えるダメージ" + sign + spValue + "%。"]);
		break;

	case ITEM_SP_MAGICAL_DAMAGE_UP_PLAYER_DORAM:
		textInfoArray.push(["", "魔法攻撃時、ドラム形プレイヤーに与えるダメージ" + sign + spValue + "%。"]);
		break;

	case ITEM_SP_RESIST_PLAYER_DORAM:
		if (spValue > 0) {
			textInfoArray.push(["", "ドラム形プレイヤーから受けるダメージ " + spValue + "%減少"]);
		}
		else {
			textInfoArray.push(["", "ドラム形プレイヤーから受けるダメージ " + (-1 * spValue) + "%増加"]);
		}
		break;

	case ITEM_SP_PHYSICAL_DAMAGE_UP_PLAYER_HUMAN:
		textInfoArray.push(["", "物理攻撃時、人間形プレイヤーに与えるダメージ" + sign + spValue + "%。"]);
		break;

	case ITEM_SP_MAGICAL_DAMAGE_UP_PLAYER_HUMAN:
		textInfoArray.push(["", "魔法攻撃時、人間形プレイヤーに与えるダメージ" + sign + spValue + "%。"]);
		break;

	case ITEM_SP_RESIST_PLAYER_HUMAN:
		if (spValue > 0) {
			textInfoArray.push(["", "人間形プレイヤーから受けるダメージ " + spValue + "%減少"]);
		}
		else {
			textInfoArray.push(["", "人間形プレイヤーから受けるダメージ " + (-1 * spValue) + "%増加"]);
		}
		break;

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
		textInfoArray.push(["", GetElementText(spId - ITEM_SP_PHYSICAL_DAMAGE_UP_ELM_VANITY) + "属性物理攻撃で与えるダメージ" + sign + spValue + "%"]);
		break;

	case ITEM_SP_IGNORE_DEF_ALL:
		textInfoArray.push(["", "モンスターのDEFを " + sign + spValue + "% 無視"]);
		break;

	case ITEM_SP_IGNORE_DEF_NOTBOSS:
		textInfoArray.push(["", "一般モンスターのDEFを " + sign + spValue + "% 無視"]);
		break;

	case ITEM_SP_IGNORE_DEF_BOSS:
		textInfoArray.push(["", "ボスモンスターのDEFを " + sign + spValue + "% 無視"]);
		break;

	case ITEM_SP_IGNORE_DEF_RACE_ALL:
		textInfoArray.push(["", "全ての種族のDEFを " + sign + spValue + "% 無視"]);
		break;

	case ITEM_SP_IGNORE_RES_RACE_ALL:
		textInfoArray.push(["", "全ての種族のResを " + sign + spValue + "% 無視"]);
		break;

	case ITEM_SP_IGNORE_MDEF_ALL:
		textInfoArray.push(["", "モンスターのMDEFを " + sign + spValue + "% 無視"]);
		break;

	case ITEM_SP_IGNORE_MDEF_NOTBOSS:
		textInfoArray.push(["", "一般モンスターのMDEFを " + sign + spValue + "% 無視"]);
		break;

	case ITEM_SP_IGNORE_MDEF_BOSS:
		textInfoArray.push(["", "ボスモンスターのMDEFを " + sign + spValue + "% 無視"]);
		break;

	case ITEM_SP_IGNORE_MDEF_RACE_ALL:
		textInfoArray.push(["", "全ての種族のMDEFを " + sign + spValue + "% 無視"]);
		break;

	case ITEM_SP_IGNORE_MRES_RACE_ALL:
		textInfoArray.push(["", "全ての種族のMresを " + sign + spValue + "% 無視"]);
		break;

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
		textInfoArray.push(["", GetRaceText(spId - ITEM_SP_IGNORE_DEF_RACE_SOLID) + "形のDEFを " + spValue + "% 無視"]);
		break;

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
		textInfoArray.push(["", GetRaceText(spId - ITEM_SP_IGNORE_MDEF_RACE_SOLID) + "形のMDEFを " + spValue + "% 無視"]);
		break;

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
		textInfoArray.push(["", GetRaceText(spId - ITEM_SP_CRITICAL_DAMAGE_UP_RACE_SOLID) + "形へのクリティカルダメージ +" + spValue + "%"]);
		break;

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
		if (spValue > 0) {
			textInfoArray.push(["", GetElementText(spId - ITEM_SP_RESIST_MONSTER_ELM_VANITY) + "属性モンスターから受けるダメージ" + spValue + "%減少"]);
		}
		else {
			textInfoArray.push(["", GetElementText(spId - ITEM_SP_RESIST_MONSTER_ELM_VANITY) + "属性モンスターから受けるダメージ" + (-1 * spValue) + "%増加"]);
		}
		break;

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
		textInfoArray.push(["", GetElementText(spId - ITEM_SP_MAGICAL_DAMAGE_UP_ELM_VANITY) + "属性魔法攻撃で与えるダメージ" + sign + spValue + "%"]);
		break;

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
		textInfoArray.push(["", GetElementText(spId - ITEM_SP_MAGICAL_DAMAGE_UP_MONSTER_ELM_VANITY) + "属性モンスターに与える魔法ダメージ" + sign + spValue + "%"]);
		break;

	default:

		if (ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_OFFSET <= spId && spId < ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_OFFSET + 1000) {
			textInfoArray.push(["", "物理攻撃時、["+ MonsterObjNew[spId - ITEM_SP_PHYSICAL_DAMAGE_UP_MONSTER_OFFSET][MONSTER_DATA_INDEX_NAME] + "]に与えるダメージ " + sign + spValue + "%"]);
		}

		else if (ITEM_SP_SKILL_DAMAGE_OFFSET <= spId && spId < ITEM_SP_SKILL_DAMAGE_OFFSET + 2000) {
			textInfoArray.push(["", "["+ SkillObjNew[spId - ITEM_SP_SKILL_DAMAGE_OFFSET][SKILL_DATA_INDEX_NAME] + "]で与えるダメージ" + sign + spValue + "%"]);
		}

		else if (ITEM_SP_SKILL_CAST_TIME_OFFSET <= spId && spId < ITEM_SP_SKILL_CAST_TIME_OFFSET + 2000){
			if(spValue > 0) {
				textInfoArray.push(["", "["+ SkillObjNew[spId - ITEM_SP_SKILL_CAST_TIME_OFFSET][SKILL_DATA_INDEX_NAME] + "]の詠唱時間 " + spValue + "%減少"]);
			}
			else {
				textInfoArray.push(["", "["+ SkillObjNew[spId - ITEM_SP_SKILL_CAST_TIME_OFFSET][SKILL_DATA_INDEX_NAME] + "]の詠唱時間 " + (-1 * spValue) + "%増加"]);
			}
		}

		else if (ITEM_SP_SKILL_CAST_MINUS_OFFSET <= spId && spId < ITEM_SP_SKILL_CAST_MINUS_OFFSET + 2000){
			if(spValue > 0) {
				textInfoArray.push(["", "["+ SkillObjNew[spId - ITEM_SP_SKILL_CAST_MINUS_OFFSET][SKILL_DATA_INDEX_NAME] + "]の詠唱時間 " + (spValue / 1000) + "秒減少"]);
			}
			else {
				textInfoArray.push(["", "["+ SkillObjNew[spId - ITEM_SP_SKILL_CAST_MINUS_OFFSET][SKILL_DATA_INDEX_NAME] + "]の詠唱時間 " + (-1 * spValue / 1000) + "秒増加"]);
			}
		}

		else if (ITEM_SP_SKILL_FIXED_TIME_OFFSET <= spId && spId < ITEM_SP_SKILL_FIXED_TIME_OFFSET + 2000){
			if(spValue > 0) {
				textInfoArray.push(["", "["+ SkillObjNew[spId - ITEM_SP_SKILL_FIXED_TIME_OFFSET][SKILL_DATA_INDEX_NAME] + "]の固定詠唱時間 " + spValue + "%減少"]);
			}
			else {
				textInfoArray.push(["", "["+ SkillObjNew[spId - ITEM_SP_SKILL_FIXED_TIME_OFFSET][SKILL_DATA_INDEX_NAME] + "]の固定詠唱時間 " + (-1 * spValue) + "%増加"]);
			}
		}

		else if (ITEM_SP_SKILL_FIXED_MINUS_OFFSET <= spId && spId < ITEM_SP_SKILL_FIXED_MINUS_OFFSET + 2000){
			if(spValue > 0) {
				textInfoArray.push(["", "["+ SkillObjNew[spId - ITEM_SP_SKILL_FIXED_MINUS_OFFSET][SKILL_DATA_INDEX_NAME] + "]の固定詠唱時間 " + (spValue / 1000) + "秒減少"]);
			}
			else {
				textInfoArray.push(["", "["+ SkillObjNew[spId - ITEM_SP_SKILL_FIXED_MINUS_OFFSET][SKILL_DATA_INDEX_NAME] + "]の固定詠唱時間 " + (-1 * spValue / 1000) + "秒増加"]);
			}
		}

		else if (ITEM_SP_SKILL_COOL_MINUS_OFFSET <= spId && spId < ITEM_SP_SKILL_COOL_MINUS_OFFSET + 2000){
			if(spValue > 0) {
				textInfoArray.push(["", "["+ SkillObjNew[spId - ITEM_SP_SKILL_COOL_MINUS_OFFSET][SKILL_DATA_INDEX_NAME] + "]のクールタイム " + (spValue / 1000) + "秒減少"]);
			}
			else {
				textInfoArray.push(["", "["+ SkillObjNew[spId - ITEM_SP_SKILL_COOL_MINUS_OFFSET][SKILL_DATA_INDEX_NAME] + "]のクールタイム " + (-1 * spValue / 1000) + "秒増加"]);
			}
		}

		else if (ITEM_SP_SKILL_COST_SCALING_OFFSET <= spId && spId < ITEM_SP_SKILL_COST_SCALING_OFFSET + 2000){
			if(spValue > 0) {
				textInfoArray.push(["", "["+ SkillObjNew[spId - ITEM_SP_SKILL_COST_SCALING_OFFSET][SKILL_DATA_INDEX_NAME] + "]の消費SP " + spValue + "%増加"]);
			}
			else {
				textInfoArray.push(["", "["+ SkillObjNew[spId - ITEM_SP_SKILL_COST_SCALING_OFFSET][SKILL_DATA_INDEX_NAME] + "]の消費SP " + (-1 * spValue) + "%減少"]);
			}
		}

		else if (ITEM_SP_SKILL_COST_MINUS_OFFSET <= spId && spId < ITEM_SP_SKILL_COST_MINUS_OFFSET + 2000){
			if(spValue > 0) {
				textInfoArray.push(["", "["+ SkillObjNew[spId - ITEM_SP_SKILL_COST_MINUS_OFFSET][SKILL_DATA_INDEX_NAME] + "]の消費SP " + spValue + "減少"]);
			}
			else {
				textInfoArray.push(["", "["+ SkillObjNew[spId - ITEM_SP_SKILL_COST_MINUS_OFFSET][SKILL_DATA_INDEX_NAME] + "]の消費SP " + (-1 * spValue) + "増加"]);
			}
		}
	}



	return textInfoArray;
}
