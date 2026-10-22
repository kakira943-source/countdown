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
// 10/22追加分 100M参考
{
        en: "Most problems disappear if you're faster than everyone else for just 100 meters.",
        ja: "大抵の問題は、100メートルだけ誰よりも速ければ全部解決する。",
        author: "Man Who Ate the Finish Line"
    },
    {
        en: "For the next ten seconds, all I need are two legs. That's enough to challenge this world.",
        ja: "今から10秒間、必要なのは脚2本。それだけでこの世界に挑む。",
        author: "Unidentified Object at 43 km/h"
    },
    {
        en: "When I do something harder than reality, reality starts to blur.",
        ja: "現実より辛いことをすると、現実がぼやける。",
        author: "Former Reality Employee"
    },
    {
        en: "Even I can seize glory, if only for a moment.",
        ja: "僕でも一瞬なら栄光を掴める。",
        author: "One-Time World Champion"
    },
    {
        en: "Being number one for a moment means nothing. If you can't keep it up, it isn't ability.",
        ja: "一瞬だけ1位になっても意味はない。継続できなきゃ実力じゃない。",
        author: "Second Place's Father"
    },
    {
        en: "Think less. Underestimate the world. Stop protecting yourself. Even when you win, keep attacking.",
        ja: "浅く考えろ。世の中舐めろ。保身に走るな。勝っても攻めろ。",
        author: "God's Worst Employee"
    },
    {
        en: "Anxiety isn't something to be dealt with. Life is always full of things you might lose. That's where the thrill of being alive comes from.",
        ja: "不安は対処すべきではない。人生は常に失う可能性に満ちている。そこに命の醍醐味がある。",
        author: "Man Holding All the Wrong Cards"
    },
    {
        en: "I am a living thing. I will die. And I will never be born again. That's reason enough.",
        ja: "私は生物だ。死ぬ。そして二度と生まれてこない。理由はそれだけだ。",
        author: "Temporary Organism"
    },


    // ===== ORIGINAL =====

    {
        en: "Don't wait for confidence. Move before your fear can vote.",
        ja: "自信を待つな。恐怖に決定権を与える前に動け。",
        author: "Man Banned from Democracy"
    },
    {
        en: "Don't protect your future. Risk becoming someone who deserves one.",
        ja: "未来を守るな。未来に値する人間になるために賭けろ。",
        author: "Tomorrow's Previous Owner"
    },
    {
        en: "If the odds are terrible, stop asking them for permission.",
        ja: "勝ち目がないなら、勝ち目に許可を求めるのをやめろ。",
        author: "Casino Employee of the Month"
    },
    {
        en: "You don't need less fear. You need something worth being afraid for.",
        ja: "恐怖を減らす必要はない。恐怖を抱えてでも欲しいものを持て。",
        author: "Man Who Scared the Devil"
    },
    {
        en: "Stop trying to feel ready. Readiness is what cowards call permission.",
        ja: "準備が整うのを待つな。覚悟のない奴ほど、許可を待つ。",
        author: "Unauthorized Personnel"
    },
    {
        en: "If failure can destroy you, let it destroy the version of you that was afraid to fail.",
        ja: "失敗で壊れるなら、失敗を恐れていた自分ごと壊してしまえ。",
        author: "Human Version 2.0"
    },
    {
        en: "Don't survive the pressure. Become the reason it exists.",
        ja: "重圧に耐えるな。お前が重圧の原因になれ。",
        author: "Atmospheric Incident"
    },
    {
        en: "Winning once is luck. Winning until they hate you is proof.",
        ja: "一度の勝利なら運でいい。嫌われるほど勝ち続ければ、それは実力だ。",
        author: "Public Enemy No. 2"
    },
    {
        en: "The world is not too hard. You are still negotiating with it.",
        ja: "世界が厳しいんじゃない。まだお前が世界と交渉しているだけだ。",
        author: "Earth's Hostage Negotiator"
    },
    {
        en: "Your limits are allowed to scream. They are not allowed to decide.",
        ja: "限界には叫ばせておけ。決めさせるな。",
        author: "Emergency Contact: None"
    },
    {
        en: "Stop asking whether you can win. Make losing too expensive.",
        ja: "勝てるかを考えるな。負けられないところまで賭けろ。",
        author: "Man with One Chip Left"
    },
    {
        en: "A safe life is still a life you spent.",
        ja: "安全に生きても、人生は減る。",
        author: "Immortality Trial Participant #6"
    },
    {
        en: "You are going to lose everything eventually. Spend yourself on something worthy.",
        ja: "どうせ最後には全部失う。なら、惜しむ価値のないものに人生を使うな。",
        author: "Former Owner of Everything"
    },
    {
        en: "Reality is not an authority. It is the current score.",
        ja: "現実は権威じゃない。ただの途中経過だ。",
        author: "Reality's Former Supervisor"
    },
    {
        en: "Death is guaranteed. Defeat isn't.",
        ja: "死ぬことは決まっている。負けることまでは決まっていない。",
        author: "Death's Least Favorite Customer"
    },


    // ===== MORE =====

    {
        en: "If reality says no, make it repeat itself.",
        ja: "現実に無理だと言われたら、もう一度言わせろ。",
        author: "Man Arguing with Gravity"
    },
    {
        en: "You were born without permission. Continue accordingly.",
        ja: "お前は許可を得て生まれてきたわけじゃない。そのまま行け。",
        author: "Unauthorized Birth"
    },
    {
        en: "The worst possible outcome is still an outcome. Move.",
        ja: "最悪の結末だって結末ではある。動け。",
        author: "Former Safety Inspector"
    },
    {
        en: "Maybe the wall is not there to stop you. Maybe nobody expected you to hit it this hard.",
        ja: "壁はお前を止めるためにあるんじゃない。ここまで本気でぶつかる奴を想定してなかっただけかもしれない。",
        author: "Building Insurance"
    },
    {
        en: "There is no correct way to spend a life that expires.",
        ja: "期限のある人生に、正しい使い方なんてない。",
        author: "Expired Human"
    },
    {
        en: "If you must lose your mind, lose it in a useful direction.",
        ja: "どうせ狂うなら、役に立つ方向に狂え。",
        author: "Psychiatrist from Mars"
    },
    {
        en: "Your life is not short. It is non-refundable.",
        ja: "人生は短いんじゃない。返金不可なんだ。",
        author: "God's Customer Support"
    },
    {
        en: "The universe has survived worse decisions than yours.",
        ja: "宇宙は、お前よりひどい判断を何度も生き延びている。",
        author: "The Big Bang's Lawyer"
    },
    {
        en: "You are not here forever. Act suspiciously.",
        ja: "永遠にいるわけじゃない。少しくらい怪しく生きろ。",
        author: "Unidentified Male, Earth"
    },
    {
        en: "If everything collapses, congratulations. You found the load-bearing lie.",
        ja: "全部崩れたなら、おめでとう。何がお前を支えていた嘘だったのか分かった。",
        author: "Architect of Nothing"
    },
    {
        en: "One day your name will be said for the last time. Give them something difficult to pronounce.",
        ja: "いつかお前の名前は最後に呼ばれる。せめて言いにくい人生にしろ。",
        author: "Man with Seventeen Middle Names"
    },
    {
        en: "The future is coming whether you deserve it or not.",
        ja: "未来は、お前にその資格があろうとなかろうと来る。",
        author: "Tomorrow's Debt Collector"
    },
    {
        en: "You have already survived being born. The rest is mostly paperwork.",
        ja: "お前はもう誕生を生き延びた。残りはだいたい事務処理だ。",
        author: "Department of Human Affairs"
    },
    {
        en: "Do not die with unused arrogance.",
        ja: "使わなかった傲慢さを残して死ぬな。",
        author: "Humble Man's Evil Twin"
    },
    {
        en: "If you become completely unreasonable, reality may eventually file a complaint.",
        ja: "徹底的に無茶を続ければ、そのうち現実のほうから苦情が来る。",
        author: "Reality's Legal Department"
    }
];