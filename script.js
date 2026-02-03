// Coloque aqui o array JSON que você me mandou antes
const kanjiData = [
    { k:"人", s:{pt:"pessoa", en:"person", es:"persona"}, h:"ひと", r:"hito", ke:"人（ひと） pessoa - hito", oe:"ジン (jin) - 日本人（にほんじん） japonês / ニン (nin) - 三人（さんにん） três pessoas" },
    { k:"男", s:{pt:"homem", en:"man", es:"hombre"}, h:"おとこ", r:"otoko", ke:"男（おとこ） homem - otoko", oe:"ダン (dan) - 男子（だんし） menino / ナン (nan) - 長男（ちょうnan） filho mais velho" },
    { k:"女", s:{pt:"mulher", en:"woman", es:"mujer"}, h:"おんな", r:"onna", ke:"女（おんな） mulher - onna", oe:"ジョ (jo) - 女子（じょし） menina / ニョ (nyo) - 彼女（かのじょ） ela" },
    { k:"子", s:{pt:"criança", en:"child", es:"niño"}, h:"こ", r:"ko", ke:"子（こ） criança - ko", oe:"シ (shi) - 女子（じょし） menina / ス (su) - 椅子（いす） cadeira" },
    { k:"車", s:{pt:"carro", en:"car", es:"carro"}, h:"くるま", r:"kuruma", ke:"車（くるま） carro - kuruma", oe:"シャ (sha) - 電車（でんしゃ） trem" },
    { k:"山", s:{pt:"montanha", en:"mountain", es:"montaña"}, h:"やま", r:"yama", ke:"山（やま） montanha - yama", oe:"サン (san) - 火山（かざん） vulcão" },
    { k:"川", s:{pt:"rio", en:"river", es:"río"}, h:"かわ", r:"kawa", ke:"川（かわ） rio - kawa", oe:"セン (sen) - 川（せん） rio" },
    { k:"田", s:{pt:"campo de arroz", en:"rice field", es:"arrozal"}, h:"た", r:"ta", ke:"田（た） arrozal - ta", oe:"デン (den) - 田園（でんえん） campo" },
    { k:"米", s:{pt:"arroz", en:"rice", es:"arroz"}, h:"こめ", r:"kome", ke:"米（こめ） arroz - kome", oe:"ベイ (bei) - 米国（べいこく） EUA / マイ (mai) - 新米（しんまい） arroz novo" },
    { k:"雨", s:{pt:"chuva", en:"rain", es:"lluvia"}, h:"あめ", r:"ame", ke:"雨（あめ） chuva - ame", oe:"ウ (u) - 雨天（うてん） tempo chuvoso" },
    { k:"上", s:{pt:"cima", en:"up", es:"arriba"}, h:"うえ", r:"ue", ke:"上（うえ） cima - ue", oe:"ジョウ (jō) - 上手（じょうず） habilidoso / ショウ (shō) - 上旬（じょうじゅん） início do mês" },
    { k:"中", s:{pt:"meio/dentro", en:"middle/inside", es:"medio"}, h:"なか", r:"naka", ke:"中（なか） dentro - naka", oe:"チュウ (chū) - 中学校（ちゅうがっこう） escola média / 一日中（いちにちじゅう） o dia todo" },
    { k:"下", s:{pt:"baixo", en:"down/below", es:"abajo"}, h:"した", r:"shita", ke:"下（した） baixo - hita", oe:"カ (ka) - 地下（ちか） subterrâneo / ゲ (ge) - 下水（げすい） esgoto" },
    { k:"左", s:{pt:"esquerda", en:"left", es:"izquierda"}, h:"ひだり", r:"hidari", ke:"左（ひだり） esquerda - hidari", oe:"サ (sa) - 左右（さゆう） esquerda e direita" },
    { k:"右", s:{pt:"direita", en:"right", es:"derecha"}, h:"みぎ", r:"migi", ke:"右（みぎ） direita - migi", oe:"ウ (u) - 右折（うせつ） curva à direita / ユウ (yū) - 左右（さゆう） esquerda e direita" },
    { k:"明", s:{pt:"claro/luz", en:"light", es:"claro"}, h:"あかるい", r:"akarui", ke:"明るい（あかるい） claro - akarui", oe:"メイ (mei) - 明日（あした） amanhã / ミョウ (myō) - 明後日（みょうごにち） depois de amanhã" },
    { k:"休", s:{pt:"descansar", en:"rest", es:"descansar"}, h:"やすむ", r:"yasumu", ke:"休む（やすむ） descansar - yasumu", oe:"キュウ (kyū) - 休日（きゅうじつ） folga / 休憩（きゅうけい） intervalo" },
    { k:"林", s:{pt:"bosque pequeno", en:"grove", es:"bosque"}, h:"はやし", r:"hayashi", ke:"林（はやし） bosque - hayashi", oe:"リン (rin) - 森林（しんりん） floresta" },
    { k:"森", s:{pt:"floresta", en:"forest", es:"selva"}, h:"もり", r:"mori", ke:"森（もり） floresta - mori", oe:"シン (shin) - 森林（しんりん） floresta" },
    { k:"好", s:{pt:"gostar", en:"to like", es:"gustar"}, h:"すき", r:"suki", ke:"好き（すき） gostar - suki", oe:"コウ (kō) - 好物（こうぶつ） comida favorita / 良好（りょうこう） bom" },
    { k:"一", s:{pt:"um", en:"one", es:"uno"}, h:"ひと", r:"hito", ke:"一つ（ひとつ） um - hitotsu", oe:"イチ (ichi) - 一日（いちにち） um dia / イツ (itsu) - 一緒（いっしょ） junto" },
    { k:"二", s:{pt:"dois", en:"two", es:"dos"}, h:"ふた", r:"futa", ke:"二つ（ふたつ） dois - futatsu", oe:"ニ (ni) - 二人（ににん） duas pessoas / 二月（にがつ） fevereiro" },
    { k:"三", s:{pt:"três", en:"three", es:"tres"}, h:"みっつ", r:"mittsu", ke:"三つ（みっつ） três - mittsu", oe:"サン (san) - 三人（さんにん） três pessoas / 三月（さんがつ） março" },
    { k:"四", s:{pt:"quatro", en:"four", es:"cuatro"}, h:"よっつ", r:"yottsu", ke:"四つ（よっつ） quatro - yottsu", oe:"シ (shi) - 四月（しがつ） abril / 四季（しき） quatro estações" },
    { k:"五", s:{pt:"cinco", en:"five", es:"cinco"}, h:"いつつ", r:"itsutsu", ke:"五つ（いつつ） cinco - itsutsu", oe:"ゴ (go) - 五人（ごにん） cinco pessoas / 五月（ごがつ） maio" },
    { k:"六", s:{pt:"seis", en:"six", es:"seis"}, h:"むっつ", r:"muttsu", ke:"六つ（むっつ） seis - muttsu", oe:"ロク (roku) - 六日（むいか） seis dias / 六月（ろくがつ） junho" },
    { k:"七", s:{pt:"sete", en:"seven", es:"siete"}, h:"なな", r:"nana", ke:"七つ（ななつ） sete - nanatsu", oe:"シチ (shichi) - 七月（しちがつ） julho / 七分（しちぶ） sete partes" },
    { k:"八", s:{pt:"oito", en:"eight", es:"ocho"}, h:"やっつ", r:"yattsu", ke:"八つ（ยっつ） oito - yattsu", oe:"ハチ (hachi) - 八日（ようか） oito dias / 八月（はちがつ） agosto" },
    { k:"九", s:{pt:"nove", en:"nine", es:"nueve"}, h:"ここの", r:"kokono", ke:"九つ（ここのつ） nove - kokonotsu", oe:"キュウ (kyū) - 九回（きゅうかい） nove vezes / ク (ku) - 九月（くがつ） setembro" },
    { k:"十", s:{pt:"dez", en:"ten", es:"diez"}, h:"とお", r:"tō", ke:"十（とお） dez - tō", oe:"ジュウ (jū) - 十分（じゅうぶん） suficiente / ジッ (jit) - 十回（じっかい） dez vezes" },
    { k:"百", s:{pt:"cem", en:"hundred", es:"cien"}, h:"もも", r:"momo", ke:"百（もも） cem - momo", oe:"ヒャク (hyaku) - 百円（ひゃくえん） cem ienes / ビャク (byaku) - 三百（さんびゃく） trezentos" },
    { k:"千", s:{pt:"mil", en:"thousand", es:"mil"}, h:"ち", r:"chi", ke:"千（ち） mil - chi", oe:"セン (sen) - 千円（せんえん） mil ienes / ゼン (zen) - 三千（さんぜん） três mil" },
    { k:"万", s:{pt:"dez mil", en:"10k", es:"diez mil"}, h:"よろず", r:"yorozu", ke:"一万（いちまん） dez mil - ichiman", oe:"マン (man) - 万人（ばんにん） dez mil pessoas / バン (ban) - 万国（ばんこく） nações" },
    { k:"円", s:{pt:"iene/círculo", en:"yen/circle", es:"yen"}, h:"まる", r:"maru", ke:"円（まる） círculo - maru", oe:"エン (en) - 百円（ひゃくえん） cem ienes / 五千円（ごせんえん） cinco mil ienes" },
    { k:"色", s:{pt:"cor", en:"color", es:"color"}, h:"いろ", r:"iro", ke:"色（いろ） cor - iro", oe:"ショク (shoku) - 黄色（きいろ） amarelo / シキ (shiki) - 水色（みずいろ） azul claro" },
    { k:"白", s:{pt:"branco", en:"white", es:"blanco"}, h:"しろ", r:"shiro", ke:"白（しろ） branco - shiro", oe:"ハク (haku) - 白人（はくじん） pessoa branca / ビャク (byaku) - 空白（くうはく） espaço em branco" },
    { k:"黒", s:{pt:"preto", en:"black", es:"negro"}, h:"くろ", r:"kuro", ke:"黒（くろ） preto - kuro", oe:"コク (koku) - 黒人（こくじん） pessoa negra / 黒米（こくまい） arroz preto" },
    { k:"赤", s:{pt:"vermelho", en:"red", es:"rojo"}, h:"あか", r:"aka", ke:"赤（あか） vermelho - aka", oe:"セキ (seki) - 赤道（せきどう） equador / シャク (shaku) - 赤十字（せきじゅうじ） Cruz Vermelha" },
    { k:"青", s:{pt:"azul", en:"blue", es:"azul"}, h:"あお", r:"ao", ke:"青（あお） azul - ao", oe:"セイ (sei) - 青年（せいねん） jovem / ショウ (shō) - 青天（せいてん） céu azul" },
    { k:"黄", s:{pt:"amarelo", en:"yellow", es:"amarillo"}, h:"き", r:"ki", ke:"黄（き） amarelo - ki", oe:"コウ (kō) - 黄色（きいろ） amarelo / オウ (ō) - 黄金（おうごん） ouro" },
    { k:"月", s:{pt:"lua/mês", en:"moon/month", es:"luna"}, h:"つき", r:"tsuki", ke:"月（つき） lua - tsuki", oe:"ゲツ (getsu) - 月曜日（げつようび） segunda-feira / ガツ (gatsu) - 一月（いちがつ） janeiro" },
    { k:"火", s:{pt:"fogo", en:"fire", es:"fuego"}, h:"ひ", r:"hi", ke:"火（ひ） fogo - hi", oe:"カ (ka) - 火山（かざん） vulcão / 火曜日（かようび） terça-feira" },
    { k:"水", s:{pt:"água", en:"water", es:"agua"}, h:"みず", r:"mizu", ke:"水（みず） água - mizu", oe:"スイ (sui) - 水曜日（すいようび） quarta-feira / 水上（すいじょう） sobre a água" },
    { k:"木", s:{pt:"árvore", en:"tree", es:"árbol"}, h:"き", r:"ki", ke:"木（き） árvore - ki", oe:"モク (moku) - 木曜日（もくようび） quinta-feira / ボク (boku) - 大木（たいぼく） árvore grande" },
    { k:"金", s:{pt:"ouro/dinheiro", en:"gold/money", es:"oro/dinero"}, h:"かね", r:"kane", ke:"金（かね） dinheiro - kane", oe:"キン (kin) - 金曜日（きんようび） sexta-feira / コン (kon) - 黄金（おうごん） ouro" },
    { k:"土", s:{pt:"terra", en:"earth/soil", es:"tierra"}, h:"つち", r:"tsuchi", ke:"土（つち） terra - tsuchi", oe:"ド (do) - 土曜日（どようび） sábado / ト (to) - 土地（とち） terreno" },
    { k:"日", s:{pt:"sol/dia", en:"sun/day", es:"sol"}, h:"ひ", r:"hi", ke:"日（ひ） dia - hi", oe:"ニチ (nichi) - 日本（にほん） Japão / ジツ (jitsu) - 休日（きゅうじつ） feriado" },
    { k:"曜", s:{pt:"dia da semana", en:"weekday", es:"día semana"}, h:"-", r:"-", ke:"-", oe:"ヨウ (yō) - 月曜日（げつようび） segunda-feira" },
    { k:"毎", s:{pt:"cada/todos", en:"every", es:"cada"}, h:"ごと", r:"goto", ke:"毎日（まいにち） todos os dias - mainichi", oe:"マイ (mai) - 毎週（まいしゅう） toda semana" },
    { k:"週", s:{pt:"semana", en:"week", es:"semana"}, h:"-", r:"-", ke:"-", oe:"シュウ (shū) - 毎週（まいしゅう） toda semana" },
    { k:"行", s:{pt:"ir", en:"to go", es:"ir"}, h:"い", r:"i", ke:"行く（いく） ir - iku", oe:"コウ (kō) - 銀行（ぎんこう） banco / ギョウ (gyō) - 行事（ぎょうじ） evento" },
    { k:"来", s:{pt:"vir", en:"to come", es:"venir"}, h:"く", r:"ku", ke:"来る（くる） vir - kuru", oe:"ライ (rai) - 来月（らいげつ） próximo mês" },
    { k:"帰", s:{pt:"voltar", en:"to return", es:"volver"}, h:"かえ", r:"kae", ke:"帰る（かえる） voltar - kaeru", oe:"キ (ki) - 帰国（きこく） voltar ao país" },
    { k:"始", s:{pt:"começar", en:"to start", es:"empezar"}, h:"はじ", r:"haji", ke:"始める（はじめる） começar - hajimeru", oe:"シ (shi) - 開始（かいし） início" },
    { k:"終", s:{pt:"terminar", en:"to end", es:"terminar"}, h:"お", r:"o", ke:"終わる（おわる） terminar - owaru", oe:"シュウ (shū) - 終了（しゅうりょう） fim" },
    { k:"起", s:{pt:"levantar/acordar", en:"wake up", es:"despertar"}, h:"お", r:"o", ke:"起きる（おきる） acordar - okiru", oe:"キ (ki) - 起床（きしょう） acordar" },
    { k:"寝", s:{pt:"dormir", en:"sleep", es:"dormir"}, h:"ね", r:"ne", ke:"寝る（ねる） dormir - neru", oe:"シン (shin) - 就寝（しゅうしん） ir dormir" },
    { k:"働", s:{pt:"trabalhar", en:"work", es:"trabajar"}, h:"はたら", r:"hatara", ke:"働く（はたらく） trabalhar - hataraku", oe:"ドウ (dō) - 労働（ろうどう） trabalho" },
    { k:"勉", s:{pt:"esforçar-se", en:"to exert", es:"esfuerzo"}, h:"つと", r:"tsuto", ke:"勉める（つとめる） esforçar-se - tsutomeru", oe:"ベン (ben) - 勉強（べんきょう） estudar" },
    { k:"強", s:{pt:"forte", en:"strong", es:"fuerte"}, h:"つよ", r:"tsuyo", ke:"強い（つよい） forte - tsuyoi", oe:"キョウ (kyō) - 勉強（べんきょう） estudar / ゴウ (gō) - 強引（ごういん） forçado" },
    { k:"私", s:{pt:"eu", en:"I/me", es:"yo"}, h:"わたし", r:"watashi", ke:"私（わたし） eu - watashi", oe:"シ (shi) - 私立（しりつ） privado / 私用（しよう） uso pessoal" },
    { k:"家", s:{pt:"casa", en:"house", es:"casa"}, h:"いえ", r:"ie", ke:"家（いえ） casa - ie / 大家（おおや） proprietário", oe:"カ (ka) - 家族（かぞく） família / ケ (ke) - 本家（ほんけ） casa principal" },
    { k:"族", s:{pt:"família", en:"family", es:"familia"}, h:"-", r:"-", ke:"-", oe:"ゾク (zoku) - 家族（かぞく） família / 水族館（すいぞくかん） aquário" },
    { k:"父", s:{pt:"pai", en:"father", es:"padre"}, h:"ちち", r:"chichi", ke:"父（ちち） meu pai - chichi / お父さん（おとうさん） pai", oe:"フ (fu) - 父母（ふぼ） pais / 祖父（そふ） avô" },
    { k:"母", s:{pt:"mãe", en:"mother", es:"madre"}, h:"はは", r:"haha", ke:"母（はは） minha mãe - haha / お母さん（おかあさん） mãe", oe:"ボ (bo) - 父母（ふぼ） pais / 母国（ぼこく） país natal" },
    { k:"兄", s:{pt:"irmão mais velho", en:"older brother", es:"hermano mayor"}, h:"あに", r:"ani", ke:"兄（あni） meu irmão - ani / お兄さん（おにいさん） irmão", oe:"キョウ (kyō) - 兄弟（きょうだい） irmãos / 長兄（ちょうけい） irmão mais velho" },
    { k:"弟", s:{pt:"irmão mais novo", en:"younger brother", es:"hermano menor"}, h:"おとうと", r:"otōto", ke:"弟（おとうと） irmão mais novo - otōto", oe:"ダイ (dai) - 兄弟（きょうだい） irmãos / 子弟（してい） filhos e irmãos" },
    { k:"姉", s:{pt:"irmã mais velha", en:"older sister", es:"hermana mayor"}, h:"あね", r:"ane", ke:"姉（あね） minha irmã - ane / お姉さん（おねえさん） irmã", oe:"シ (shi) - 姉妹（しまい） irmãs / 長姉（ちょうし） irmã mais velha" },
    { k:"妹", s:{pt:"irmã mais nova", en:"younger sister", es:"hermana menor"}, h:"いもうと", r:"imōto", ke:"妹（いもうと） irmã mais nova - imōto", oe:"マイ (mai) - 姉妹（しまい） irmãs / 義妹（ぎまい） cunhada" },
    { k:"主", s:{pt:"mestre/principal", en:"master/main", es:"maestro"}, h:"ぬし", r:"nushi", ke:"持ち主（もちぬし） proprietário", oe:"シュ (shu) - 主人（しゅじん） marido-mestre / 主に（おもに） principalmente" }
];
// 2. DADOS AUXILIARES (Usando sua lista exata)
const countsData = [
    { k:"一つ", h:"ひとつ", r:"hitotsu", t:{pt:"1 objeto", en:"1 thing", es:"1 cosa"}},
    { k:"二つ", h:"ふたつ", r:"futatsu", t:{pt:"2 objetos", en:"2 things", es:"2 cosas"}},
    { k:"三つ", h:"みっつ", r:"mittsu", t:{pt:"3 objetos", en:"3 things", es:"3 cosas"}},
    { k:"四つ", h:"よっつ", r:"yottsu", t:{pt:"4 objetos", en:"4 things", es:"4 cosas"}},
    { k:"五つ", h:"いつつ", r:"itsutsu", t:{pt:"5 objetos", en:"5 things", es:"5 cosas"}},
    { k:"六つ", h:"むっつ", r:"muttsu", t:{pt:"6 objetos", en:"6 things", es:"6 coisas"}},
    { k:"七つ", h:"ななつ", r:"nanatsu", t:{pt:"7 objetos", en:"7 things", es:"7 coisas"}},
    { k:"八つ", h:"やっつ", r:"yattsu", t:{pt:"8 objetos", en:"8 things", es:"8 coisas"}},
    { k:"九つ", h:"ここのつ", r:"kokonotsu", t:{pt:"9 objetos", en:"9 things", es:"9 cosas"}},
    { k:"十", h:"とお", r:"tō", t:{pt:"10 objetos", en:"10 things", es:"10 cosas"}}
];

const weekData = [
    { k:"月曜日", h:"げつようび", r:"getsuyōbi", t:{pt:"Segunda", en:"Monday", es:"Lunes"}},
    { k:"火曜日", h:"かようび", r:"kayōbi", t:{pt:"Terça", en:"Tuesday", es:"Martes"}},
    { k:"水曜日", h:"すいようび", r:"suiyōbi", t:{pt:"Quarta", en:"Wednesday", es:"Miércoles"}},
    { k:"木曜日", h:"もくようび", r:"mokuyōbi", t:{pt:"Quinta", en:"Thursday", es:"Jueves"}},
    { k:"金曜日", h:"きんようび", r:"kinyōbi", t:{pt:"Sexta", en:"Friday", es:"Viernes"}},
    { k:"土曜日", h:"どようび", r:"doyōbi", t:{pt:"Sábado", en:"Saturday", es:"Sábado"}},
    { k:"日曜日", h:"にちようび", r:"nichiyōbi", t:{pt:"Domingo", en:"Sunday", es:"Domingo"}}
];

const monthData = [
    {k:"一日", h:"ついたち", r:"tsuitachi", t:{pt:"Dia 1", en:"Day 1", es:"Día 1"}},
    {k:"二日", h:"ふつか", r:"futsuka", t:{pt:"Dia 2", en:"Day 2", es:"Día 2"}},
    {k:"三日", h:"みっか", r:"mikka", t:{pt:"Dia 3", en:"Day 3", es:"Día 3"}},
    {k:"四日", h:"よっか", r:"yokka", t:{pt:"Dia 4", en:"Day 4", es:"Día 4"}},
    {k:"五日", h:"いつか", r:"itsuka", t:{pt:"Dia 5", en:"Day 5", es:"Día 5"}},
    {k:"六日", h:"むいか", r:"muika", t:{pt:"Dia 6", en:"Day 6", es:"Día 6"}},
    {k:"七日", h:"なのか", r:"nanoka", t:{pt:"Dia 7", en:"Day 7", es:"Día 7"}},
    {k:"八日", h:"ようか", r:"yōka", t:{pt:"Dia 8", en:"Day 8", es:"Día 8"}},
    {k:"九日", h:"ここのか", r:"kokonoka", t:{pt:"Dia 9", en:"Day 9", es:"Día 9"}},
    {k:"十日", h:"とおか", r:"tōka", t:{pt:"Dia 10", en:"Day 10", es:"Día 10"}},
    {k:"二十日", h:"はつか", r:"hatsuka", t:{pt:"Dia 20", en:"Day 20", es:"Día 20"}}
];

let currentLang = 'pt';

/* --- LÓGICA --- */

function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('menuOverlay').classList.toggle('active');
}

function showAnswer() {
    document.getElementById('answer-box').style.display = 'block';
    document.getElementById('tap-hint').style.display = 'none';
}

function changeLang(l, btn) {
    currentLang = l;
    document.querySelectorAll('.btn-lang').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderAll();
}

// Função auxiliar para quebrar strings com "/"
function formatReadings(str) {
    if (!str || str === "-") return "-";
    return str.split('/').map(part => `<div>${part.trim()}</div>`).join('');
}

function nextCard() {
    const random = kanjiData[Math.floor(Math.random() * kanjiData.length)];
    document.getElementById('kanji-main').innerText = random.k;
    document.getElementById('ans-full').innerText = `${random.k} - ${random.h} - ${random.s[currentLang]}`;
    
    // Aplicando a quebra de linha nas leituras do Flashcard
    document.getElementById('ans-kun').innerHTML = formatReadings(random.ke);
    document.getElementById('ans-on').innerHTML = formatReadings(random.oe);
    
    document.getElementById('answer-box').style.display = 'none';
    document.getElementById('tap-hint').style.display = 'block';
}

function renderAll() {
    // Render Grids
    const renderGrid = (id, data) => {
        document.getElementById(id).innerHTML = data.map(item => `
            <div class="card">
                <div style="font-size: 1.5rem; font-weight: bold; color: var(--primary);">${item.k}</div>
                <div style="font-size: 0.9rem; color: #666;">${item.h}</div>
                <div style="font-weight: bold; color: var(--accent);">${item.t[currentLang]}</div>
            </div>
        `).join('');
    };

    renderGrid('grid-counts', countsData);
    renderGrid('grid-week', weekData);
    renderGrid('grid-month', monthData);

    // Render Lista de Referência
    document.getElementById('main-list').innerHTML = kanjiData.map((item, index) => `
        <div class="list-item">
            <div class="list-k">${item.k}</div>
            <div style="flex-grow: 1;">
                <div style="display: flex; justify-content: space-between;">
                    <span style="font-weight: bold; color: var(--primary);">${item.h} - ${item.s[currentLang]}</span>
                    <small style="color: #ccc;">#${index + 1}</small>
                </div>
                <div style="font-size: 0.85rem; margin-top: 5px;">
                    <div class="entry" style="margin-bottom: 5px; border-left: 3px solid var(--accent); padding: 2px 8px;">
                        <span class="label" style="font-size: 0.6rem;">KUN:</span> 
                        ${formatReadings(item.ke)}
                    </div>
                    <div class="entry" style="border-left: 3px solid var(--primary); padding: 2px 8px;">
                        <span class="label" style="font-size: 0.6rem; color: var(--primary);">ON:</span> 
                        ${formatReadings(item.oe)}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Inicialização
renderAll();
nextCard();