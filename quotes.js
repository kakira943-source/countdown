const quotes = [
    {
        en: "Losing is not an option.",
        ja: "負けるという選択肢はない。",
        author: "Yamamoto Yosinobu",
    },
    {
        en: "From this moment on, I’m going to ruin you. You’re capable of nothing.",
        ja: "今からお前らを台無しにする。お前らは何もできない。",
        author: "Yamamoto Yosinobu",
    },
    {
        en: "It doesn’t matter. I’ll just take care of it as usual.",
        ja: "何ら問題ない。いつも通り始末するだけだ。",
        author: "Yamamoto Yosinobu",
    },
    {
        en: "Losing is not an option.",
        ja: "負けるという選択肢はない。",
        author: "Yamamoto Yosinobu",
    },
    {
        en: "I have no idea what I'm doing.",
        ja: "自分が何をしているのか全く分からない。",
        author: "Unknown",
    },
    {
        en: "Discipline is choosing between what you want now and what you want most.",
        ja: "規律とは、今欲しいものと、本当に欲しいもののどちらを選ぶかということだ。",
        author: "Unknown"
    },
    {
        en: "If you're going through hell, keep going.",
        ja: "地獄を通っているなら、そのまま進め。",
        author: "Winston Churchill"
    },
    {
        en: "No one can make you feel inferior without your consent.",
        ja: "あなたの同意なしに、誰もあなたを劣った存在だと感じさせることはできない。",
        author: "Eleanor Roosevelt"
    },
    {
        en: "You can sleep when you're dead.",
        ja: "眠るのは死んでからでいい。",
        author: "Unknown"
    },
    {
        en: "The easiest person to lie to is the one who already knows exactly what the truth is.",
        ja: "最も簡単に騙せる相手は、真実をすでに知っている自分自身だ。",
        author: "Unknown"
    },
    {
        en: "The cruelest opponent is the one who knows your weaknesses because he has lived inside your head for twenty years.",
        ja: "最も残酷な敵は、お前の弱点を知っている。なぜなら、その敵は二十年間ずっとお前の頭の中にいたからだ。",
        author: "Unknown"
    },
    {
        en: "You are not behind. You are simply standing still, and those are very different problems.",
        ja: "お前は遅れているんじゃない。ただ立ち止まっている。それはまったく別の問題だ。",
        author: "Unknown"
    },
    {
        en: "The version of you that succeeds will probably look boring from the outside. He simply kept showing up.",
        ja: "成功する未来のお前は、外から見ればたぶん退屈な人間だ。ただ毎日、やるべき場所に現れ続けただけだから。",
        author: "Unknown"
    },
     {
        en: "You don't need to defeat everyone. You only need to become someone they can no longer defeat.",
        ja: "全員を倒す必要はない。ただ、もう誰にも倒せない人間になればいい。",
        author: "Unknown"
    },

    {
        en: "The world does not care how difficult your journey was. It only asks what you brought back from it.",
        ja: "世界は、お前の旅がどれほど苦しかったかなど気にしない。ただ、そこから何を持ち帰ったかを問う。",
        author: "Unknown"
    },
    {
        en: "Turn your wounds into wisdom.",
        ja: "傷を知恵に変えろ。",
        author: "Oprah Winfrey"
    },
    {
        en: "The beautiful thing about learning is that nobody can take it away from you.",
        ja: "学ぶことの素晴らしさは、誰にもそれを奪えないことだ。",
        author: "B.B. King"
    },
    {
        en: "The pain of discipline is lighter than the pain of regret.",
        ja: "規律の痛みは、後悔の痛みより軽い。",
        author: "Unknown"
    },
    {
        en: "Become so consistent that your future becomes inevitable.",
        ja: "未来が必然になるほど、一貫して続けろ。",
        author: "Unknown"
    },
    {
        en: "You cannot negotiate with a mountain. You climb it.",
        ja: "山と交渉はできない。ただ登るだけだ。",
        author: "Unknown"
    },
    {
        en: "When there is no path, build one.",
        ja: "道がないなら、自分で作れ。",
        author: "Unknown"
    },
    {
        en: "A man who fears failure has already surrendered.",
        ja: "失敗を恐れる者は、すでに敗北している。",
        author: "Unknown"
    },
    {
        en: "Silence is often the loudest proof of progress.",
        ja: "沈黙は、ときに成長を最も大きく証明する。",
        author: "Unknown"
    },
    {
        en: "Do it tired. Do it afraid. Do it anyway.",
        ja: "疲れていてもやれ。恐れていてもやれ。それでもやれ。",
        author: "Unknown"
    },
    {
        en: "Your excuses are not stronger than your ambition.",
        ja: "お前の言い訳は、お前の野望より強くない。",
        author: "Unknown"
    },
    {
        en: "You become dangerous when you stop needing to be understood.",
        ja: "理解されることを必要としなくなったとき、人は強くなる。",
        author: "Unknown"
    },
    {
        en: "The strongest version of you is built in rooms where nobody is watching.",
        ja: "最も強いお前は、誰にも見られていない場所で作られる。",
        author: "Unknown"
    },
    {
        en: "If you want a different life, you must become a different person.",
        ja: "違う人生が欲しいなら、違う人間になれ。",
        author: "Unknown"
    },
    {
        en: "You don't rise to the level of your goals. You fall to the level of your systems.",
        ja: "人は目標の高さまで上がるのではない。仕組みの水準まで落ちる。",
        author: "James Clear"
    },
    {
        en: "Hard days are not interruptions. They are part of the process.",
        ja: "辛い日は邪魔ではない。それもまた過程の一部だ。",
        author: "Unknown"
    },
    {
        en: "Nobody is coming to save you. That is the good news.",
        ja: "誰もお前を救いに来ない。だからこそ、それは朗報だ。",
        author: "Unknown"
    },
    {
        en: "Outwork the version of yourself that made excuses yesterday.",
        ja: "昨日言い訳をした自分を、今日の自分が超えていけ。",
        author: "Unknown"
    },
    {
        en: "There is no perfect moment. There is only the moment you decide to begin.",
        ja: "完璧な瞬間などない。始めると決めた、その瞬間だけがある。",
        author: "Unknown"
    },
    {
        en: "If nobody believes in you, make your results impossible to ignore.",
        ja: "誰もお前を信じないなら、無視できない結果を出せ。",
        author: "Unknown"
    },
    {
        en: "You have survived every bad day you thought would destroy you.",
        ja: "お前は、壊れると思っていたすべての最悪の日を生き抜いてきた。",
        author: "Unknown"
    },
    {
        en: "The goal is not to be better than everyone. The goal is to be impossible to ignore.",
        ja: "目標は全員より優れることじゃない。無視できない存在になることだ。",
        author: "Unknown"
    },
    {
        en: "You don't need motivation when your standards are higher than your excuses.",
        ja: "言い訳より基準が高ければ、モチベーションなど必要ない。",
        author: "Unknown"
    },
    {
        en: "One day, the years of silence will speak for you.",
        ja: "いつか、沈黙の年月がお前の代わりに語る。",
        author: "Unknown"
    },
    {
        en: "The version of you they underestimated is still under construction.",
        ja: "彼らが過小評価したお前は、まだ建設途中だ。",
        author: "Unknown"
    },
    {
        en: "Keep your head down. Let the results make the noise.",
        ja: "顔を上げるな。結果に騒がせろ。",
        author: "Unknown"
    },
    {
        en: "Do not confuse a slow process with a dead one.",
        ja: "遅い過程を、死んだものと勘違いするな。",
        author: "SYSTEM LOG"
    },
    {
        en: "The answer was never hiding. Your eyes were still learning how to see it.",
        ja: "答えは隠れていたんじゃない。目がそれを見る方法を学んでいる途中だった。",
        author: "THE LENS"
    },
    {
        en: "You cannot negotiate with time. You can only decide what to give it.",
        ja: "時間とは交渉できない。何を捧げるかを決めることしかできない。",
        author: "00:00"
    },
    // 10/22追加。
    {
    en: "Be undeniable.",
    ja: "否定できない存在になれ。",
    author: "Polar Bear"
},
{
    en: "They will notice.",
    ja: "嫌でも気づく。",
    author: "Mantis"
},
{
    en: "Stay hungry. Stay quiet.",
    ja: "飢えろ。黙れ。",
    author: "Alligator"
},
{
    en: "Earn your arrogance.",
    ja: "傲慢になる資格を勝ち取れ。",
    author: "Emperor Penguin"
},
{
    en: "Make doubt expensive.",
    ja: "疑ったことを後悔させろ。",
    author: "Swordfish"
},
{
    en: "Become the problem.",
    ja: "脅威になれ。",
    author: "Wild Boar"
},
{
    en: "Let them underestimate you.",
    ja: "過小評価させておけ。",
    author: "Pigeon"
},
{
    en: "No applause. Just proof.",
    ja: "拍手はいらない。証明しろ。",
    author: "Komodo Dragon"
},
{
    en: "Build in silence.",
    ja: "黙って積み上げろ。",
    author: "Mole"
},
{
    en: "Comfort is a slow death.",
    ja: "安楽は、ゆっくりした死だ。",
    author: "Capybara"
},
{
    en: "Your potential means nothing.",
    ja: "可能性に価値はない。",
    author: "Pelican"
},
{
    en: "Nobody remembers almost.",
    ja: "「あと少し」は誰も覚えていない。",
    author: "Second Horse"
},
{
    en: "Excuses leave no scars.",
    ja: "言い訳では傷ひとつ残らない。",
    author: "Walrus"
},
{
    en: "Results erase opinions.",
    ja: "結果は雑音を消す。",
    author: "Orca"
},
{
    en: "Fear is not a veto.",
    ja: "恐怖に拒否権はない。",
    author: "Honey Badger"
},
{
    en: "Finish what fear started.",
    ja: "恐怖が始めたものを、お前が終わらせろ。",
    author: "Black Mamba"
},
{
    en: "Make failure remember you.",
    ja: "失敗のほうに、お前を覚えさせろ。",
    author: "Moose"
},
{
    en: "You haven't earned tired.",
    ja: "まだ疲れる資格はない。",
    author: "Albatross"
},
{
    en: "Outgrow your old name.",
    ja: "昔のお前を置き去りにしろ。",
    author: "Lobster"
},
{
    en: "Make yesterday obsolete.",
    ja: "昨日の自分を型落ちにしろ。",
    author: "Horseshoe Crab"
},
{
    en: "Become inevitable.",
    ja: "必然になれ。",
    author: "Blue Whale"
},
{
    en: "No rescue is coming.",
    ja: "救援は来ない。",
    author: "Mountain Goat"
},
{
    en: "Prove them irrelevant.",
    ja: "そいつらの評価ごと無意味にしろ。",
    author: "Silverback"
},
{
    en: "Leave no room for luck.",
    ja: "運の入り込む余地を潰せ。",
    author: "Centipede"
},
{
    en: "Don't chase. Become.",
    ja: "追うな。なれ。",
    author: "Crocodile"
},
{
    en: "Again. Until it breaks.",
    ja: "もう一度。壊れるまで。",
    author: "Woodpecker"
},
{
    en: "Weakness keeps receipts.",
    ja: "弱さは、全部覚えている。",
    author: "Elephant"
},
{
    en: "Your move.",
    ja: "次はお前の番だ。",
    author: "Mantis Shrimp"
},
{
    en: "Still watching?",
    ja: "まだ見てるだけか？",
    author: "Barn Owl"
},
{
    en: "Time didn't betray you.",
    ja: "時間はお前を裏切っていない。",
    author: "Greenland Shark"
},
];