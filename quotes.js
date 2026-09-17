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
    // 9/17追加
    {
        en: "The future is not waiting. It is being calculated.",
        ja: "未来は待っているんじゃない。計算され、積み上げられている。",
        author: "THE OBSERVER"
    },
    {
        en: "Discipline is what remains when motivation has left the room.",
        ja: "モチベーションが部屋を出ていったあとに残るもの。それが規律だ。",
        author: "UNKNOWN"
    },
    {
        en: "You do not need a sign. You need another hour.",
        ja: "サインなんて必要ない。あと一時間があればいい。",
        author: "00:47"
    },
    {
        en: "Some nights are not meant for sleep. They are meant for becoming.",
        ja: "眠るためではなく、何者かになるためにある夜もある。",
        author: "NIGHT SHIFT"
    },
    {
        en: "The distance between you and the answer is made of smaller questions.",
        ja: "自分と答えの距離は、小さな問いの積み重ねでできている。",
        author: "THE MATHEMATICIAN"
    },
    {
        en: "A quiet mind can still wage a very loud war.",
        ja: "静かな心の中でも、ひどく騒がしい戦争は起きている。",
        author: "UNKNOWN"
    },
    {
        en: "Do not confuse a slow process with a dead one.",
        ja: "遅い過程を、死んだものと勘違いするな。",
        author: "SYSTEM LOG"
    },
    {
        en: "Every difficult problem begins by refusing to look difficult.",
        ja: "難しい問題は、難しそうに見つめることをやめたときに始まる。",
        author: "THE BLACKBOARD"
    },
    {
        en: "You are allowed to be tired. You are not required to disappear.",
        ja: "疲れてもいい。消えてしまう必要はない。",
        author: "UNKNOWN"
    },
    {
        en: "The clock does not judge you. It simply keeps moving.",
        ja: "時計はお前を裁かない。ただ、動き続ける。",
        author: "03:12"
    },
    {
        en: "There is no dramatic moment when a person becomes stronger. There is only repetition.",
        ja: "人が強くなる劇的な瞬間なんてない。ただ反復があるだけだ。",
        author: "THE REPETITION"
    },
    {
        en: "Some answers arrive only after the question has changed you.",
        ja: "問いが自分を変えたあとでしか、辿り着けない答えがある。",
        author: "UNKNOWN"
    },
    {
        en: "The world rewards results. Your work must survive before the world notices.",
        ja: "世界が報いるのは結果だ。世界に気づかれる前に、仕事を生き残らせろ。",
        author: "NIGHT ENGINEER"
    },
    {
        en: "A single page can be a small rebellion against an entire day.",
        ja: "一枚のページは、一日全部に対する小さな反逆になり得る。",
        author: "PAPER / 01"
    },
    {
        en: "Do not wait until you feel ready. Readiness is often a story told afterward.",
        ja: "準備ができるまで待つな。準備ができていたという物語は、たいてい後から作られる。",
        author: "UNKNOWN"
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
    {
        en: "The sharpest weapon in the room may be the person who keeps taking notes.",
        ja: "その部屋で最も鋭い武器は、ノートを取り続ける人間かもしれない。",
        author: "THE LAST DESK"
    },
    {
        en: "A failed attempt is still evidence. Use it.",
        ja: "失敗した試みも証拠だ。使え。",
        author: "LABORATORY NOTE"
    },
    {
        en: "The night does not make you special. What you do inside it might.",
        ja: "夜が君を特別にするわけじゃない。その中で何をするかが、そうするのかもしれない。",
        author: "UNKNOWN"
    },
    {
        en: "There is elegance in solving what once looked impossible.",
        ja: "かつて不可能に見えたものを解くことには、優雅さがある。",
        author: "THE SOLVER"
    },
    {
        en: "Do not worship the goal. Study the machinery that reaches it.",
        ja: "目標を崇拝するな。そこへ到達する仕組みを研究しろ。",
        author: "SYSTEM DESIGN"
    },
    {
        en: "Your limits are often old conclusions written in pencil.",
        ja: "限界とは、鉛筆で書かれた古い結論であることが多い。",
        author: "UNKNOWN"
    },
    {
        en: "The world is noisy. Build something precise.",
        ja: "世界は騒がしい。だから、精密なものを作れ。",
        author: "THE ENGINEER"
    },
    {
        en: "You do not have to conquer the mountain tonight. Find the next foothold.",
        ja: "今夜、山を征服する必要はない。次の足場を見つけろ。",
        author: "NIGHT CLIMBER"
    },
    {
        en: "A problem is not an enemy. It is a machine with a hidden entrance.",
        ja: "問題は敵ではない。入口が隠された機械だ。",
        author: "THE MECHANIC"
    },
    {
        en: "The most dangerous sentence is: I already know enough.",
        ja: "最も危険な言葉は、「もう十分知っている」だ。",
        author: "UNKNOWN"
    },
    {
        en: "The result is temporary. The ability to reach it again is yours.",
        ja: "結果は一時的なものだ。そこへ再び辿り着く力は、自分のものになる。",
        author: "THE PRACTICE"
    },
    {
        en: "Some progress is invisible because it is happening beneath the surface.",
        ja: "進歩の中には、表面下で起きているために見えないものがある。",
        author: "SUBSURFACE"
    },
    {
        en: "Make your doubts precise. Vague fear cannot be solved.",
        ja: "疑いを正確にしろ。曖昧な恐怖は解けない。",
        author: "THE ANALYST"
    },
    {
        en: "The person you become is hidden inside the things you repeat.",
        ja: "君が何者になるかは、繰り返している行動の中に隠れている。",
        author: "UNKNOWN"
    },
    {
        en: "Not every day needs to be victorious. It needs to leave a trace.",
        ja: "すべての日が勝利である必要はない。痕跡を残せばいい。",
        author: "LOG ENTRY"
    },
    {
        en: "When the path disappears, reduce the scale of your next step.",
        ja: "道が見えなくなったら、次の一歩の大きさを小さくしろ。",
        author: "THE CARTOGRAPHER"
    },
    {
        en: "The cleanest solution is often hidden beneath the unnecessary work.",
        ja: "最も美しい解法は、余計な仕事の下に隠れていることが多い。",
        author: "THE PROOF"
    },
    {
        en: "You are not behind. You are inside the process.",
        ja: "遅れているんじゃない。今まさに過程の中にいる。",
        author: "UNKNOWN"
    },
    {
        en: "A mind becomes dangerous when it learns to remain calm around difficulty.",
        ja: "困難の前で冷静でいられるようになったとき、思考は強力になる。",
        author: "THE OBSERVER"
    },
    {
        en: "The blank page is not empty. It is waiting for a decision.",
        ja: "白紙は空っぽではない。決断を待っている。",
        author: "PAPER / 00"
    },
    {
        en: "The answer may be simple. Reaching it is where the education lives.",
        ja: "答えは簡単かもしれない。そこへ至る過程にこそ、学びがある。",
        author: "THE TEACHER"
    },
    {
        en: "Do not measure the night by how long you stayed awake. Measure it by what became clearer.",
        ja: "夜を起きていた長さで測るな。何が明確になったかで測れ。",
        author: "02:26"
    },
    {
        en: "Every system reveals its character under pressure.",
        ja: "あらゆるシステムは、圧力を受けたときにその本性を現す。",
        author: "SYSTEM THEORY"
    },
    {
        en: "You can be uncertain and still move with precision.",
        ja: "不確かでも、正確に進むことはできる。",
        author: "UNKNOWN"
    },
    {
        en: "The work does not become meaningful because it is easy. It becomes meaningful because you return to it.",
        ja: "仕事が意味を持つのは簡単だからではない。何度もそこへ戻るからだ。",
        author: "THE RETURN"
    },
    {
        en: "A difficult question is sometimes a door disguised as a wall.",
        ja: "難しい問いは、ときに壁に偽装された扉だ。",
        author: "THE DOOR"
    },
    {
        en: "The future belongs to those who can remain curious after being wrong.",
        ja: "未来は、間違えたあとも好奇心を失わない人間のものだ。",
        author: "UNKNOWN"
    },
    {
        en: "There is no shortcut through understanding. Only a shorter distance between attempts.",
        ja: "理解への近道はない。あるのは、試行と試行の間隔を短くすることだけだ。",
        author: "THE ITERATION"
    },
    {
        en: "Build a mind that can sit alone with an unfinished problem.",
        ja: "未完成の問題と二人きりでいられる思考を作れ。",
        author: "THE LAST QUESTION"
    },
    {
        en: "The quietest victories are the ones that change your next attempt.",
        ja: "最も静かな勝利とは、次の挑戦を変えるものだ。",
        author: "UNKNOWN"
    },
    {
        en: "The equation does not care how badly you want the answer. Learn to respect it.",
        ja: "方程式は、どれほど答えを望んでいるかなど気にしない。それを尊重することを学べ。",
        author: "THE EQUATION"
    },
    {
        en: "One more attempt is not always courage. Sometimes it is simply good engineering.",
        ja: "もう一度試すことは、必ずしも勇気ではない。時には、単に優れた設計思想だ。",
        author: "THE ENGINEER"
    },
    {
        en: "Your attention is a finite resource. Spend it like it matters.",
        ja: "集中力は有限の資源だ。価値があるものに使え。",
        author: "RESOURCE / 01"
    },
    {
        en: "The day ends. The accumulated structure remains.",
        ja: "一日は終わる。積み上げられた構造は残る。",
        author: "00:00"
    }
];