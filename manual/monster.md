
モンスター実装

修正ファイル
* monster.dat.js   モンスター情報
* monstermap.dat.js   生息地域

## モンスター情報

[ID, NAME, LEVEL, HP, STR, INT, VIT, DEX, AGI, LUK, ATK, MATK, RANGE, DEF, MDEF, BASEEXP, JOBEXP, サイズ, 属性(etc.js), 種族, BOSS, GRASS, QUALIFIED, KANA, RES, MRES, ?...]

|Index|説明|
|---|---|
|サイズ|小型(0), 中型(1), 大型(2)|
|属性|無１(1-4), 水１(11-14), 地１(21-24), 火１(31-34), 風１(41-44), 毒１(51-54), 聖１（61-64), 闇１(71-74), 念１(81-84), 不死１(91-94)| , 
|種族|無形(0), 不死(1), 動物(2), 植物(3), 昆虫(4), 魚類(5), 悪魔(6), 人間(7), 天使(8), 竜族(9)|

## 生息地域

地域<br>
g_MonsterMapCategoryDataArray<br>

[ID, KIND, [NAME,KANA],[MapID, ...]]

マップ<br>
g_MonsterMapDataArray<br>

[ID, KIND, [NAME,KANA], [MonsterID, ...]]

KIND: 通常マップ(0), メモリアルダンジョン(1)
