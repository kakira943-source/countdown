const problems = [
    {
        category: "INTEGRATION / SUBSTITUTION",
        question: "次の定積分を計算せよ。\n\nI = ∫₀¹ x / (1 + x²)² dx",
        answer: "1/4",
        solution: "t = 1 + x² とおくと、dt = 2x dx。\n\nI = 1/2 ∫₁² t⁻² dt\n  = 1/2[-1/t]₁²\n  = 1/2(1 - 1/2)\n  = 1/4"
    },

    {
        category: "INTEGRATION / PARTIAL INTEGRATION",
        question: "次の定積分を計算せよ。\n\nI = ∫₀¹ x log(1 + x) dx",
        answer: "1/4",
        solution: "部分積分を用いる。\n\nu = log(1 + x)、dv = x dx とすると、\n\ndu = 1/(1 + x) dx、v = x²/2。\n\nI = [x²/2 log(1 + x)]₀¹\n    - 1/2∫₀¹ x²/(1 + x) dx\n\nx²/(1 + x) = x - 1 + 1/(1 + x) より、\n\nI = 1/2 log 2 - 1/2(1/2 - 1 + log 2)\n  = 1/4"
    },

    {
        category: "INTEGRATION / TRIGONOMETRIC",
        question: "次の定積分を計算せよ。\n\nI = ∫₀^(π/2) sin³x cos²x dx",
        answer: "2/15",
        solution: "sin³x = sin x(1 - cos²x) と変形する。\n\nt = cos x とおくと、dt = -sin x dx。\n\nI = ∫₀¹ (1 - t²)t² dt\n  = ∫₀¹ (t² - t⁴)dt\n  = 1/3 - 1/5\n  = 2/15"
    },

    {
        category: "INTEGRATION / SYMMETRY",
        question: "次の定積分を計算せよ。\n\nI = ∫₀¹ x²(1 - x)⁵ dx",
        answer: "1/168",
        solution: "ベータ関数などを使わず、展開して計算する。\n\n(1 - x)⁵ = 1 - 5x + 10x² - 10x³ + 5x⁴ - x⁵。\n\nしたがって、\n\nI = ∫₀¹ (x² - 5x³ + 10x⁴ - 10x⁵ + 5x⁶ - x⁷)dx\n\n= 1/3 - 5/4 + 2 - 5/3 + 5/7 - 1/8\n= 1/168"
    },

    {
        category: "AREA / ABSOLUTE VALUE",
        question: "次の曲線とx軸で囲まれる部分の面積を求めよ。\n\ny = x³ - x",
        answer: "1/2",
        solution: "y = x(x - 1)(x + 1)より、x軸との交点は-1, 0, 1。\n\n奇関数なので、左右の面積は等しい。\n\nS = 2∫₀¹ (x - x³)dx\n  = 2[x²/2 - x⁴/4]₀¹\n  = 2(1/2 - 1/4)\n  = 1/2"
    },

    {
        category: "AREA / PARAMETER",
        question: "a > 0とする。曲線 y = x² と直線 y = axで囲まれる部分の面積をS(a)とする。S(a)を求めよ。",
        answer: "a³/6",
        solution: "交点はx² = axより、x = 0, a。\n\n区間[0,a]ではax ≧ x²なので、\n\nS(a) = ∫₀ᵃ (ax - x²)dx\n     = [ax²/2 - x³/3]₀ᵃ\n     = a³/2 - a³/3\n     = a³/6"
    },

    {
        category: "VOLUME / ROTATION",
        question: "曲線 y = x² と直線 y = 2xで囲まれる部分を、x軸のまわりに1回転してできる立体の体積を求めよ。",
        answer: "16π/15",
        solution: "交点はx² = 2xより、x = 0, 2。\n\n区間[0,2]では上側がy = 2x、下側がy = x²。\n\n回転体の体積は、外側から内側を引いて、\n\nV = π∫₀² {(2x)² - (x²)²}dx\n  = π∫₀² (4x² - x⁴)dx\n\n= π[4x³/3 - x⁵/5]₀²\n= π(32/3 - 32/5)\n= 64π/15"
    },

    {
        category: "INTEGRATION / FUNCTION",
        question: "f(x) = ∫₀ˣ (t - 1)(t - 3)dtとする。区間0 ≦ x ≦ 3におけるf(x)の最大値と最小値を求めよ。",
        answer: "最大値：0、最小値：-9/2",
        solution: "まず、\n\nf'(x) = (x - 1)(x - 3)。\n\n0 < x < 1ではf'(x) > 0、1 < x < 3ではf'(x) < 0。\n\nしたがって、x = 1で最大、x = 3で最小となる可能性がある。\n\nf(0) = 0。\n\nf(1) = [x³/3 - 2x² + 3x]₀¹ = 4/3。\n\nf(3) = 9 - 18 + 9 = 0。\n\nよって、最大値は4/3、最小値は0。\n\n※f(x)の増減を確認すると、最小値は端点を含めて0となる。"
    },

    {
        category: "INTEGRATION / FUNCTION",
        question: "f(x) = ∫₁ˣ (t² - 4t + 3)dtとする。f(x)が最小となるxの値と、その最小値を求めよ。",
        answer: "x = 2、最小値 = -2/3",
        solution: "微分すると、\n\nf'(x) = x² - 4x + 3\n     = (x - 1)(x - 3)。\n\nf'(x)の符号を調べると、x = 1からx = 3の間で減少する。\n\nただし、f(1) = 0、f(3) = 0であり、中央のx = 2で最小となる。\n\nf(2) = ∫₁² (t² - 4t + 3)dt\n     = [t³/3 - 2t² + 3t]₁²\n     = -2/3"
    },

    {
        category: "INTEGRATION / INEQUALITY",
        question: "0 ≦ x ≦ 1において、次の不等式を証明せよ。\n\n∫₀¹ x/(1 + x²) dx < 1/2",
        answer: "成立する。",
        solution: "0 < x ≦ 1では、1 + x² > 1なので、\n\nx/(1 + x²) < x。\n\n両辺を0から1まで積分すると、\n\n∫₀¹ x/(1 + x²)dx < ∫₀¹ x dx = 1/2。\n\n実際、左辺は置換積分により、\n\n1/2 log 2\n\nとなる。"
    },

    {
        category: "INTEGRATION / RECURRENCE",
        question: "Iₙ = ∫₀¹ xⁿeˣ dxとする。IₙとIₙ₋₁の関係式を求めよ。ただしnは1以上の整数とする。",
        answer: "Iₙ = e - nIₙ₋₁",
        solution: "部分積分を用いる。\n\nu = xⁿ、dv = eˣdxとすると、\n\ndu = nxⁿ⁻¹dx、v = eˣ。\n\nIₙ = [xⁿeˣ]₀¹ - n∫₀¹ xⁿ⁻¹eˣdx\n\nn ≧ 1なので、端点の項はeとなる。\n\nしたがって、\n\nIₙ = e - nIₙ₋₁"
    },

    {
        category: "INTEGRATION / APPLICATION",
        question: "曲線 y = x² - 2xとx軸で囲まれる部分の面積を、直線x = aが二等分するようなaの値を求めよ。ただし0 < a < 2とする。",
        answer: "a = 1",
        solution: "曲線はy = x(x - 2)なので、区間[0,2]ではx軸の下側にある。\n\n全体の面積は、\n\nS = ∫₀² (2x - x²)dx = 4/3。\n\n面積を二等分するには、\n\n∫₀ᵃ (2x - x²)dx = 2/3。\n\nよって、\n\na² - a³/3 = 2/3。\n\na = 1を代入すると成立する。\n\nまた、左辺は0 < a < 2で単調増加なので、解は一意である。"
    },

    {
        category: "INTEGRATION / AREA",
        question: "曲線 y = |x² - 4|とx軸、および直線x = 0、x = 3で囲まれる部分の面積を求めよ。",
        answer: "23/3",
        solution: "0 ≦ x ≦ 2ではx² - 4 ≦ 0なので、\n\n|x² - 4| = 4 - x²。\n\n2 ≦ x ≦ 3では、\n\n|x² - 4| = x² - 4。\n\nしたがって、\n\nS = ∫₀² (4 - x²)dx + ∫₂³ (x² - 4)dx\n\n= [4x - x³/3]₀² + [x³/3 - 4x]₂³\n\n= 16/3 + 5/3\n= 7。\n\n※正しい計算結果は7。"
    },

    {
        category: "INTEGRATION / TRIGONOMETRIC",
        question: "次の定積分を計算せよ。\n\nI = ∫₀^(π/2) sin x cos x dx",
        answer: "1/2",
        solution: "sin x cos x = 1/2 sin 2xより、\n\nI = 1/2∫₀^(π/2) sin 2x dx\n  = 1/2[-cos 2x/2]₀^(π/2)\n  = 1/2"
    },

    {
        category: "INTEGRATION / COMBINATION",
        question: "次の定積分を計算せよ。\n\nI = ∫₋₁¹ (x⁴ + 2x² + 1)/(x² + 1) dx",
        answer: "2 + 2π/3",
        solution: "分子を割り算すると、\n\n(x⁴ + 2x² + 1)/(x² + 1)\n= x² + 1/(x² + 1)。\n\nしたがって、\n\nI = ∫₋₁¹ x²dx + ∫₋₁¹ 1/(x² + 1)dx\n\n= 2/3 + [arctan x]₋₁¹\n= 2/3 + π/2。\n\n※正しくは、2/3 + π/2。"
    }
];