
//JobLv	Str	Agi	Vit	Int	Dex	Luk	Pow	Sta	Wis	Spl	Con	Crt

var data = '''1	0	0	0	0	1	0	0	1	0	0	0	0
2	0	0	0	1	2	0	0	1	0	0	0	0
3	0	0	0	2	2	0	0	1	0	0	0	1
4	1	0	0	2	2	0	0	2	0	0	0	1
5	1	0	1	2	3	0	0	2	0	0	0	1
6	1	0	1	2	4	0	0	2	0	0	0	1
7	1	1	1	2	4	0	0	2	0	0	0	1
8	1	1	1	3	4	1	0	2	0	0	0	1
9	1	2	1	3	4	1	0	2	0	1	0	1
10	2	2	1	3	4	1	1	2	0	1	0	1
11	2	2	1	3	5	1	1	2	0	1	0	2
12	2	2	2	3	5	1	1	2	0	1	1	2
13	2	3	2	3	5	1	1	2	0	1	1	2
14	2	3	2	3	6	1	1	2	0	1	1	2
15	2	3	2	4	6	1	1	2	0	2	1	2
16	2	3	2	4	7	1	1	2	0	2	1	2
17	2	3	2	5	7	1	1	2	0	2	1	2
18	2	3	2	5	8	1	1	2	1	2	1	2
19	2	4	2	5	8	1	1	2	1	2	1	2
20	2	5	2	5	8	1	2	2	1	2	1	2
21	2	5	2	5	9	1	2	2	1	2	1	2
22	2	5	3	5	9	1	2	2	1	3	1	2
23	3	5	3	5	9	1	2	2	1	3	1	2
24	3	5	3	6	9	1	2	2	1	3	2	2
25	3	5	3	7	9	1	2	2	1	3	2	3
26	3	5	4	7	9	1	2	3	1	3	2	3
27	3	5	4	7	9	2	2	3	2	3	2	3
28	3	5	4	7	9	3	2	3	2	3	2	3
29	3	5	4	7	10	3	2	3	2	3	2	3
30	3	5	4	8	10	3	2	3	2	4	2	3
31	4	5	4	8	10	3	2	3	2	4	2	3
32	4	5	4	8	11	3	2	3	2	4	3	3
33	4	6	4	8	11	3	3	3	2	4	3	3
34	4	6	5	8	11	3	3	3	2	4	3	3
35	4	6	5	8	12	3	3	3	2	4	3	3
36	5	6	5	8	12	3	3	3	2	4	3	3
37	5	6	5	9	12	3	3	3	2	4	3	3
38	5	6	5	9	12	4	3	3	2	5	3	3
39	5	6	5	9	12	4	4	3	2	5	4	3
40	5	6	5	9	12	5	4	3	2	5	4	3
41	5	6	5	9	12	5	5	3	2	5	4	3
42	5	6	5	9	12	5	5	3	3	6	4	3
43	5	7	5	9	12	5	5	3	3	6	4	3
44	5	7	5	9	12	5	6	3	3	6	4	3
45	5	7	5	9	12	5	6	3	3	7	5	3
46	5	7	5	9	12	5	6	4	3	7	5	3
47	5	7	5	9	12	5	6	4	4	7	6	3
48	5	7	5	9	12	5	6	5	4	7	6	3
49	5	7	5	9	12	5	6	5	4	7	6	4
50	5	7	5	9	12	5	7	5	4	7	6	4''';

main() {
    var list = data.split('\n');
    var list2 = list.map((v) => v.split('\t').map((v) => int.parse(v)).toList()).toList();

    for (int i = 1; i < list2.length; i++) {
        if (list2[i-1][1] < list2[i][1]) print("[${list2[i][0]},0],");
        if (list2[i-1][2] < list2[i][2]) print("[${list2[i][0]},1],");
        if (list2[i-1][3] < list2[i][3]) print("[${list2[i][0]},2],");
        if (list2[i-1][4] < list2[i][4]) print("[${list2[i][0]},3],");
        if (list2[i-1][5] < list2[i][5]) print("[${list2[i][0]},4],");
        if (list2[i-1][6] < list2[i][6]) print("[${list2[i][0]},5],");
        if (list2[i-1][7] < list2[i][7]) print("[${list2[i][0]},6],");
        if (list2[i-1][8] < list2[i][8]) print("[${list2[i][0]},7],");
        if (list2[i-1][9] < list2[i][9]) print("[${list2[i][0]},8],");
        if (list2[i-1][10] < list2[i][10]) print("[${list2[i][0]},9],");
        if (list2[i-1][11] < list2[i][11]) print("[${list2[i][0]},10],");
        if (list2[i-1][12] < list2[i][12]) print("[${list2[i][0]},11],");
    }
}
