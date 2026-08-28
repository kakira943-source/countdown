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
        en: "You miss 100% of the shots you don't take.",
        ja: "打たなかったシュートは100%外れる。",
        author: "Wayne Gretzky"
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
    // Football 
    {
        en: "Talent without working hard is nothing.",
        ja: "努力しない才能には何の意味もない。",
        author: "Cristiano Ronaldo"
    },
    {
        en: "You have to fight to reach your dream. You have to sacrifice and work hard for it.",
        ja: "夢にたどり着くには戦わなければならない。犠牲を払い、懸命に努力しなければならない。",
        author: "Lionel Messi"
    },
    {
        en: "I always want more. I am never satisfied.",
        ja: "常にもっと欲しい。決して満足しない。",
        author: "Zlatan Ibrahimović"
    },
    {
        en: "Everything is practice.",
        ja: "すべては練習だ。",
        author: "Pelé"
    },
    {
        en: "The more difficult the victory, the greater the happiness in winning.",
        ja: "勝利が難しいほど、勝ったときの喜びは大きい。",
        author: "Pelé"
    },

    // Musicians 🎧
    {
        en: "You have to lose yourself in order to find yourself.",
        ja: "自分自身を見つけるには、一度自分を失わなければならない。",
        author: "Bob Dylan"
    },
    {
        en: "Music is the strongest form of magic.",
        ja: "音楽は最も強力な魔法だ。",
        author: "Marilyn Manson"
    },
    {
        en: "Life is what happens when you're busy making other plans.",
        ja: "人生とは、別の計画を立てている間に起こるものだ。",
        author: "John Lennon"
    },
    {
        en: "Turn your wounds into wisdom.",
        ja: "傷を知恵に変えろ。",
        author: "Oprah Winfrey"
    },
    {
        en: "I decided that if I could paint, I would paint myself.",
        ja: "もし描けるなら、自分自身を描こうと決めた。",
        author: "David Bowie"
    },
    {
        en: "The beautiful thing about learning is that nobody can take it away from you.",
        ja: "学ぶことの素晴らしさは、誰にもそれを奪えないことだ。",
        author: "B.B. King"
    },
    {
        en: "If you have to ask what jazz is, you'll never know.",
        ja: "ジャズとは何かと尋ねなければならないなら、永遠に分からない。",
        author: "Louis Armstrong"
    },
    {
        en: "A dream you dream alone is only a dream. A dream you dream together is reality.",
        ja: "一人で見る夢はただの夢だ。皆で見る夢は現実になる。",
        author: "John Lennon"
    },
    {
        en: "Don't let anyone tell you that you can't do something.",
        ja: "誰にも「お前にはできない」と言わせるな。",
        author: "Will Smith"
    },
    {
        en: "I don't make music for eyes. I make music for ears.",
        ja: "私は目のために音楽を作らない。耳のために作る。",
        author: "David Bowie"
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
        en: "Stay dangerous. Stay disciplined. Stay difficult to replace.",
        ja: "強くあれ。律を守れ。代わりの利かない人間になれ。",
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
];