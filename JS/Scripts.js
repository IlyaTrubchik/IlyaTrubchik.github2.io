const  Doers = [
{
  name:"Аляксандр Аляксеевіч Аляксееў",
  years:"1978-Настоящее время",
  shortinfo:"Нарадзіўся 14 лістапада 1978 года ў г. Казань, у сям’і вайскоўца. З 1979 года сям’я пераехала ў Беларусь. У 2000 годзе скончыў факультэт менеджменту Беларускага дзяржаўнага эканамічнага ўніверсітэта. У 2000 годзе ўзнагароджаны медалём Міністэрства адукацыі і навукі Расійскай Федэрацыі «За лепшую навуковую працу» сярод маладых вучоных па выніках адкрытага ўсерасійскага конкурсу. У 2004 годзе абараніў дысертацыю, прысуджана навуковая ступень кандыдата эканамічных навук.",
  image:"images/Aliaksandr_Aliakseyeu.png"
},
{
    name:"Ян Булгак",
    years:"1876-1950 гг.",
    shortinfo:"Ян Булга́к (польск.: Jan Bułhak; 6 кастрычніка 1876, маёнтак каля в. Асташын Навагрудскага павета — 4 лютага 1950, Гіжыцка) — віленскі майстар мастацкай краязнаўчай фатаграфіі, «бацька польскай фатаграфіі», адзін з піянераў польскай мастацкай фатаграфіі, этнограф, фалькларыст. Яго творчасць лічыцца часткай супольнай культурнай спадчыны Беларусі, Літвы і Польшчы.",
    image:"images/Yan_Bylgak.png"
},
{
    name:"Бенедыкт Генрык Тышкевіч",
    years:"11 декабря 1852-1935",
    shortinfo:"Бенеды́кт Ге́нрык Тышке́віч (польск.: Benedykt Henryk Tyszkiewicz; 1852, Немеж, Віленскі павет, Віленская губерня, Расійская імперыя — 1935, Ментона, Францыя) — фатограф, нашчадак шляхецкага роду, калекцыянер. Адзін з піянераў мастацкай фатаграфіі Беларусі і Літвы.",
    image:"images/Tyshkevich.png"
},
{
    name:"Теофил Эугениуш Баретти",
    years:"17 декабря 1862-26 мая 1910",
    shortinfo:"Тэафіл Эўгеніюш Барэ́ці (польск.: Teofil-Eugeniusz Boretti; 1860, Варшава, Царства Польскае — 1910) — польскі і беларускі фотамастак-пейзажыст.Паходзіў са шляхецкага роду італьянскага паходжання. Нарадзіўся ў Варшаве ў шматдзетнай сям’і архітэктара Юзафа Антонія Барэці[pl] (1825—1878) і Антоніны Эміліі з Янікоўскіх (1829—1918). Рана асвоіў фатаграфію, паколькі многія яго сваякі, у тым ліку родны дзядзька і цёзка Тэафіл Барэці (1834—1910), — займаліся ёю прафесійна.",
    image:"images/Boretti.png"
},
{
    name:"Міхаіл Рыгоравіч Баразна",
    years:"20 ноября 1962-Настоящее время",
    shortinfo:"Міхаіл Рыгоравіч Баразна (20 лістапада 1962, Ракушава, Круглянскі раён Магілёўскай вобласці) — беларускі мастацтвазнавец, мастацкі крытык, фотамастак. Кандыдат мастацтвазнаўства (1998). Рэктар Беларускай дзяржаўнай акадэміі мастацтваў (з 2010). Ганаровы член Расійскай акадэміі мастацтваў. У якасці рэктара БДАМ удзельнічаў у рэпрэсіях супраць студэнтаў, якія пратэставалі супраць фальсіфікацыі прэзідэнцкіх выбараў 2020 года. У сувязі з гэтым з чэрвеня 2021 года знаходзіцца ў санкцыйных спісах Еўрасаюза.",
    image:"images/Barazna.png"
},
{
    name:"Юзюк Фарботка",
    years:"5 сентября 1893-8 июля 1956",
    shortinfo:"Юзюк Фарбо́тка (сапр.: Язэ́п Аўгусці́навіч Фарбо́тка, 5 верасня 1893, в. Налібакі, Мінскі павет, Мінская губерня (цяпер Стаўбцоўскі раён, Мінская вобласць) — 8 чэрвеня 1956, г. Лодзь) — беларускі паэт, літаратуразнавец, перакладчык, удзельнік грамадска-палітычнага руху Беларусі пачатку ХХ стагоддзя.",
    image:"images/Farbotka.png"
}
];
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };
function DoerOfDay(){
    let id = getRandomInt(6);//Get random from 0-1
  //  let id = 1;
    document.getElementById("DoerName").innerHTML = Doers[id].name;
    document.getElementById("DoerYears").innerHTML = Doers[id].years;
    document.getElementById("DoerShortInfo").innerHTML = Doers[id].shortinfo;
    document.getElementById("DoerImage").src =Doers[id].image;
}