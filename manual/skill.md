
スキル実装

修正ファイル
* CSkillManager.js
* skill.dat.js
* ro4/head.js

遠距離物理
```
// ----------------------------------------------------------------
// ピッキ突き
// ----------------------------------------------------------------
SKILL_ID_PIKKI_TSUKI = skillId;
skillData = new function() {
    this.prototype = new CSkillData();
    CSkillData.call(this);

    this.id = skillId;
    this.name = "ピッキ突き";
    this.kana = "ヒツキツキ";
    this.maxLv = 5;
    this.type = CSkillData.TYPE_ACTIVE | CSkillData.TYPE_PHYSICAL;
    this.range = CSkillData.RANGE_LONG;
    this.element = CSkillData.ELEMENT_VOID;

    this.CostFixed = function(skillLv, charaDataManger) {
        return 30;
    }

    this.Power = function(skillLv, charaDataManger) {
        return -1;
    }

    this.CastTimeVary = function(skillLv, charaDataManger) {
        return -500 + 500 * skillLv;
    }

    this.DelayTimeCommon = function(skillLv, charaDataManger) {
        return 2500 - 500 * skillLv;
    }

};
this.dataArray[skillId] = skillData;
skillId++;
```

魔法
```
// ----------------------------------------------------------------
// マタタビランス
// ----------------------------------------------------------------
SKILL_ID_MATATABI_LANCE = skillId;
skillData = new function() {
    this.prototype = new CSkillData();
    CSkillData.call(this);

    this.id = skillId;
    this.name = "マタタビランス";
    this.kana = "マタタヒランス";
    this.maxLv = 5;
    this.type = CSkillData.TYPE_ACTIVE | CSkillData.TYPE_MAGICAL;
    this.range = CSkillData.RANGE_MAGIC;
    this.element = CSkillData.ELEMENT_SPECIAL;

    this.CostFixed = function(skillLv, charaDataManger) {
        return 30;
    }

    this.Power = function(skillLv, charaDataManger) {
        return 5000;
    }

    this.CastTimeVary = function(skillLv, charaDataManger) {
        return 2000;
    }

};
this.dataArray[skillId] = skillData;
skillId++;
```
