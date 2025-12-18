const CONFIG = {
  title: "Style Diagnosis（9タイプ）",
  types: [
    { id: "CLN", label: "きれいめ（クリーン）", tags: ["清潔感","整い","シンプル配色","シャツ/スラックス"] },
    { id: "CAS", label: "カジュアル", tags: ["自然体","着回し","デニム/スウェット","定番スニーカー"] },
    { id: "STR", label: "ストリート", tags: ["オーバー","ロゴ","カーゴ","主役感"] },
    { id: "SPT", label: "スポーティ（アスレジャー）", tags: ["快適","軽い","動きやすい","テック素材"] },
    { id: "MOD", label: "モード", tags: ["黒多め","ミニマル","尖り","直線/極端シルエット"] },
    { id: "AME", label: "アメカジ", tags: ["デニム","チェック","ワーク","王道"] },
    { id: "OUT", label: "アウトドア", tags: ["機能重視","天候対応","マウンパ/フリース","耐久"] },
    { id: "KOR", label: "韓国系", tags: ["淡色","短丈×ワイド","セットアップ","きれいめストリート"] },
    { id: "VIN", label: "古着系（ヴィンテージ）", tags: ["レトロ柄","色褪せ","年代MIX","味"] }
  ],

  // 固定画像（リポジトリ内のファイルを参照）
  // ここを変えれば表示画像を固定で差し替えできます
  images: {
    CLN: ["./images/CLN/1.jpg","./images/CLN/2.jpg","./images/CLN/3.jpg","./images/CLN/4.jpg"],
    CAS: ["./images/CAS/1.jpg","./images/CAS/2.jpg","./images/CAS/3.jpg","./images/CAS/4.jpg"],
    STR: ["./images/STR/1.jpg","./images/STR/2.jpg","./images/STR/3.jpg","./images/STR/4.jpg"],
    SPT: ["./images/SPT/1.jpg","./images/SPT/2.jpg","./images/SPT/3.jpg","./images/SPT/4.jpg"],
    MOD: ["./images/MOD/1.jpg","./images/MOD/2.jpg","./images/MOD/3.jpg","./images/MOD/4.jpg"],
    AME: ["./images/AME/1.jpg","./images/AME/2.jpg","./images/AME/3.jpg","./images/AME/4.jpg"],
    OUT: ["./images/OUT/1.jpg","./images/OUT/2.jpg","./images/OUT/3.jpg","./images/OUT/4.jpg"],
    KOR: ["./images/KOR/1.jpg","./images/KOR/2.jpg","./images/KOR/3.jpg","./images/KOR/4.jpg"],
    VIN: ["./images/VIN/1.jpg","./images/VIN/2.jpg","./images/VIN/3.jpg","./images/VIN/4.jpg"]
  },

  descriptions: {
    CLN: "きちんと感と清潔感で勝負。白黒/ベーシック配色、シャツ・スラックス・ローファー寄りが得意。",
    CAS: "自然体で着回しやすい。デニム/スウェット/パーカー×定番スニーカーが強い。",
    STR: "オーバーサイズ・ロゴ・カーゴで主役を作る。ボリュームのある足元でバランスを取ると映える。",
    SPT: "動きやすさ・軽さ・テック素材。移動やアクティブな日でもストレスが少ない。",
    MOD: "黒/ミニマル/直線的・尖り。『整い（CLN）』より『世界観と形（MOD）』で魅せる。",
    AME: "デニム・ワーク・チェック。王道のアメリカンカジュアルでラフにかっこよく。",
    OUT: "マウンパ/フリース/シェルなど機能最優先。天候や移動に強い“実用おしゃれ”。",
    KOR: "淡色・短丈×ワイド・セットアップ。きれいめ×ストリートの“今っぽさ”。",
    VIN: "レトロ柄・色褪せ・年代MIX。新品っぽさより“味”と“抜け感”で作る。"
  },

  // 同点決着用（モードの世界観を拾いやすい質問を優先）
  tieBreakPriority: ["Q11", "Q10", "Q8"],

  // 選択肢数は自由。モードは「黒/素材/尖り/世界観」で点を厚くしてCLNと差別化
  questions: [
    {
      id: "Q1",
      text: "好きなシルエットは？",
      choices: [
        { text: "ジャスト〜細め", score: { CLN: 5, MOD: 3, KOR: 1 } },
        { text: "ほどよくゆるめ", score: { CAS: 5, AME: 2, VIN: 1 } },
        { text: "オーバーサイズ", score: { STR: 5, CAS: 1, OUT: 1 } },
        { text: "短丈×ワイド（メリハリ）", score: { KOR: 5, STR: 2, MOD: 1 } },
        { text: "極端・尖り（細身or極端ワイド）", score: { MOD: 7, STR: 2, KOR: 1 } }
      ]
    },
    {
      id: "Q2",
      text: "よく使う配色は？",
      choices: [
        { text: "黒〜グレー中心（モノトーン）", score: { MOD: 7, CLN: 2 } },
        { text: "白黒＋ベーシック（ネイビー/ベージュ）", score: { CLN: 5, CAS: 2, AME: 1 } },
        { text: "淡色（アイボリー/パステル）", score: { KOR: 5, CLN: 1 } },
        { text: "差し色強め・柄/ロゴも好き", score: { STR: 5, VIN: 2, AME: 1 } },
        { text: "アース/カーキ/機能っぽい色", score: { OUT: 5, SPT: 2, AME: 1 } }
      ]
    },
    {
      id: "Q3",
      text: "よく着るトップスは？",
      choices: [
        { text: "シャツ（きれいめ）", score: { CLN: 5, KOR: 1, MOD: 1 } },
        { text: "きれいめニット/カーデ", score: { CLN: 4, MOD: 3, KOR: 1 } },
        { text: "スウェット", score: { CAS: 5, AME: 2, STR: 1 } },
        { text: "パーカー", score: { CAS: 3, STR: 4, AME: 1 } },
        { text: "ロゴT/グラフィック", score: { STR: 5, VIN: 2 } },
        { text: "ジャージ/ドライ/機能T", score: { SPT: 5, OUT: 2 } },
        { text: "黒の無地（タートル/カットソー）でまとめがち", score: { MOD: 7, CLN: 1 } }
      ]
    },
    {
      id: "Q4",
      text: "ボトムの定番は？",
      choices: [
        { text: "スラックス（きれいな落ち感）", score: { CLN: 4, MOD: 5, KOR: 1 } },
        { text: "ストレートデニム", score: { AME: 3, CAS: 3, VIN: 2 } },
        { text: "ワイドデニム", score: { STR: 3, KOR: 3, VIN: 2, CAS: 1 } },
        { text: "カーゴ/ワークパンツ", score: { STR: 5, OUT: 2, AME: 1 } },
        { text: "ナイロン/ジャージパンツ", score: { SPT: 5, OUT: 2, STR: 1 } },
        { text: "黒パンツでまとめる（細身/ストレート）", score: { MOD: 7, CLN: 1 } }
      ]
    },
    {
      id: "Q5",
      text: "好きなアウターは？",
      choices: [
        { text: "コート/テーラード（整う）", score: { CLN: 5, MOD: 3 } },
        { text: "ロングコート×黒で“世界観”", score: { MOD: 8, CLN: 1 } },
        { text: "デニムジャケット", score: { AME: 5, VIN: 2, CAS: 1 } },
        { text: "ワークジャケット/カバーオール", score: { AME: 5, VIN: 2, STR: 1 } },
        { text: "ダウン/ボリューム", score: { STR: 5, CAS: 2 } },
        { text: "マウンパ/シェル（機能）", score: { OUT: 5, SPT: 2 } }
      ]
    },
    {
      id: "Q6",
      text: "靴の好みは？",
      choices: [
        { text: "革靴/ローファー寄り（上品）", score: { CLN: 5, MOD: 3 } },
        { text: "細身でシンプルなスニーカー", score: { CLN: 3, CAS: 3, KOR: 2 } },
        { text: "レトロなスニーカー（雰囲気）", score: { CAS: 3, AME: 3, VIN: 2 } },
        { text: "厚底/ボリューム系", score: { STR: 5, KOR: 4 } },
        { text: "ランニング系（軽い・歩ける）", score: { SPT: 5, OUT: 2 } },
        { text: "ブーツ（重め/ワーク/レザー）", score: { AME: 4, MOD: 4, VIN: 2 } }
      ]
    },
    {
      id: "Q7",
      text: "服で一番外したくないのは？",
      choices: [
        { text: "清潔感・きちんと見え", score: { CLN: 6, KOR: 1 } },
        { text: "“雰囲気”とラクさ（普段使い）", score: { CAS: 6, AME: 2 } },
        { text: "快適さ・動きやすさ", score: { SPT: 6, OUT: 2 } },
        { text: "トレンド・盛れ感", score: { STR: 6, KOR: 2 } },
        { text: "黒で締める/ミニマルで尖らせる", score: { MOD: 8, CLN: 1 } },
        { text: "古着っぽい“味”", score: { VIN: 6, AME: 2, CAS: 1 } }
      ]
    },
    {
      id: "Q8",
      text: "好きな素材感は？（MOD差別化）",
      choices: [
        { text: "上質・落ち感（ウール/レザー寄り）", score: { MOD: 8, CLN: 2 } },
        { text: "コットン・裏毛・デニム", score: { AME: 5, CAS: 3 } },
        { text: "テック素材（ナイロン/ギア）", score: { SPT: 5, OUT: 3, STR: 1 } },
        { text: "古着っぽい風合い（加工/色褪せ）", score: { VIN: 5, AME: 2, STR: 1 } }
      ]
    },
    {
      id: "Q9",
      text: "柄・デザインの好みは？",
      choices: [
        { text: "無地・余白（ミニマル）", score: { MOD: 6, CLN: 3 } },
        { text: "無地・ベーシック（失敗しない）", score: { CLN: 6, CAS: 2 } },
        { text: "ロゴ/グラフィック強め", score: { STR: 6, VIN: 2 } },
        { text: "チェック/ワークっぽい", score: { AME: 6, VIN: 2 } },
        { text: "レトロ柄/年代っぽさ", score: { VIN: 6, AME: 2, CAS: 1 } }
      ]
    },
    {
      id: "Q10",
      text: "コーデの主役は？（最重要）",
      choices: [
        { text: "“整い”と品（きちんと感）", score: { CLN: 7, KOR: 1 } },
        { text: "“雰囲気”とラフさ", score: { CAS: 7, AME: 2, VIN: 1 } },
        { text: "“インパクト”とシルエット/ロゴ", score: { STR: 7, KOR: 3 } },
        { text: "“機能”と快適さ（動ける）", score: { SPT: 7, OUT: 3 } },
        { text: "“黒/ミニマル/尖り”の世界観", score: { MOD: 10, CLN: 1 } }
      ]
    },
    {
      id: "Q11",
      text: "惹かれる“世界観”は？（同点の決め手）",
      choices: [
        { text: "黒でまとめて“静かに強い”", score: { MOD: 9, CLN: 1 } },
        { text: "きれいに整って“好印象”", score: { CLN: 7, KOR: 1 } },
        { text: "写真映えする“今っぽさ”", score: { KOR: 7, STR: 2 } },
        { text: "ラフで落ち着く“日常”", score: { CAS: 7, AME: 2 } },
        { text: "実用第一の“ギア感”", score: { OUT: 7, SPT: 3 } },
        { text: "味のある“古着の空気感”", score: { VIN: 7, AME: 2 } }
      ]
    }
  ]
};

// ===== DOM =====
const $ = (id) => document.getElementById(id);

const el = {
  start: $("start"),
  startBtn: $("startBtn"),
  quiz: $("quiz"),
  qText: $("qText"),
  choices: $("choices"),
  backBtn: $("backBtn"),
  nextBtn: $("nextBtn"),
  progressFill: $("progressFill"),
  step: $("step"),
  result: $("result"),
  resultMain: $("resultMain"),
  resultSub: $("resultSub"),
  resultExplain: $("resultExplain"),
  mainTags: $("mainTags"),
  subTags: $("subTags"),
  imageGrid: $("imageGrid"),
  resultScores: $("resultScores"),
  restartBtn: $("restartBtn"),
};

const state = {
  idx: 0,
  answers: new Array(CONFIG.questions.length).fill(null),
};

// ===== UI =====
function show(node){ node.classList.remove("hidden"); }
function hide(node){ node.classList.add("hidden"); }

function render() {
  const total = CONFIG.questions.length;
  const q = CONFIG.questions[state.idx];

  el.step.textContent = `${state.idx + 1} / ${total}`;
  el.progressFill.style.width = `${Math.round(((state.idx + 1) / total) * 100)}%`;

  el.qText.textContent = `${q.id}. ${q.text}`;
  el.choices.innerHTML = "";

  const selected = state.answers[state.idx];

  q.choices.forEach((choice, i) => {
    const label = document.createElement("label");
    label.className = "choice";
    label.htmlFor = `${q.id}_${i}`;

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "choice";
    input.id = `${q.id}_${i}`;
    input.value = String(i);
    input.checked = selected === i;

    input.addEventListener("change", () => {
      state.answers[state.idx] = i;
      el.nextBtn.disabled = false;
    });

    label.appendChild(input);
    label.appendChild(document.createTextNode(choice.text));
    el.choices.appendChild(label);
  });

  el.backBtn.disabled = (state.idx === 0);
  el.nextBtn.textContent = (state.idx === total - 1) ? "結果を見る" : "次へ";
  el.nextBtn.disabled = (state.answers[state.idx] === null);
}

function calculate() {
  const typeIds = CONFIG.types.map(t => t.id);
  const scores = Object.fromEntries(typeIds.map(id => [id, 0]));

  CONFIG.questions.forEach((q, qi) => {
    const ansIndex = state.answers[qi];
    if (ansIndex === null || ansIndex === undefined) return;
    const choice = q.choices[ansIndex];
    const sc = choice?.score || {};
    for (const [tid, pts] of Object.entries(sc)) {
      if (scores[tid] != null) scores[tid] += pts;
    }
  });

  const sorted = Object.entries(scores)
    .map(([id, score]) => ({ id, score }))
    .sort((a,b) => b.score - a.score);

  // main
  const topScore = sorted[0].score;
  const tiedTop = sorted.filter(x => x.score === topScore).map(x => x.id);
  const mainId = tiedTop.length > 1 ? breakTie(tiedTop) : sorted[0].id;

  // sub (必ず2位)
  const remaining = sorted.filter(x => x.id !== mainId);
  const secondScore = remaining[0].score;
  const tiedSecond = remaining.filter(x => x.score === secondScore).map(x => x.id);
  const subId = tiedSecond.length > 1 ? breakTie(tiedSecond) : remaining[0].id;

  return { scores, sorted, mainId, subId };
}

function breakTie(tiedTypeIds){
  for (const qid of CONFIG.tieBreakPriority) {
    const qIndex = CONFIG.questions.findIndex(q => q.id === qid);
    if (qIndex === -1) continue;
    const ansIndex = state.answers[qIndex];
    if (ansIndex === null || ansIndex === undefined) continue;

    const choice = CONFIG.questions[qIndex].choices[ansIndex];
    const sc = choice?.score || {};

    let best = tiedTypeIds[0];
    let bestPts = sc[best] ?? 0;

    for (const tid of tiedTypeIds.slice(1)) {
      const pts = sc[tid] ?? 0;
      if (pts > bestPts) { best = tid; bestPts = pts; }
    }

    const numTop = tiedTypeIds.filter(tid => (sc[tid] ?? 0) === bestPts).length;
    if (numTop === 1) return best;
  }

  // 定義順で先
  const order = CONFIG.types.map(t => t.id);
  for (const id of order) if (tiedTypeIds.includes(id)) return id;
  return tiedTypeIds[0];
}

function renderFixedImages(typeId){
  const urls = CONFIG.images[typeId] || [];
  el.imageGrid.innerHTML = "";

  // 4枚は必須想定（不足なら警告表示）
  const showUrls = urls.slice(0, 4);
  showUrls.forEach((url, idx) => {
    const img = document.createElement("img");
    img.loading = "lazy";
    img.alt = `${typeId} image ${idx+1}`;
    img.src = url;

    // 画像が無い/パス間違いのときに分かるように
    img.addEventListener("error", () => {
      img.alt = `画像が見つかりません: ${url}`;
      img.style.objectFit = "contain";
      img.style.padding = "18px";
      img.style.color = "rgba(255,255,255,.6)";
      img.src = ""; // broken表示を消す
      img.setAttribute("data-missing", "true");
      img.outerHTML = `<div class="missingImg">Missing: <code>${url}</code></div>`;
    });

    el.imageGrid.appendChild(img);
  });

  // 4枚未満の場合（設置ミス対策）
  if (showUrls.length < 4) {
    for (let i = showUrls.length; i < 4; i++) {
      const div = document.createElement("div");
      div.className = "missingImg";
      div.innerHTML = `Missing: <code>./images/${typeId}/${i+1}.jpg</code>`;
      el.imageGrid.appendChild(div);
    }
  }
}

function showResult(){
  const r = calculate();

  const mainType = CONFIG.types.find(t => t.id === r.mainId);
  const subType  = CONFIG.types.find(t => t.id === r.subId);

  el.resultMain.textContent = `メイン：${mainType?.label || r.mainId}`;
  el.resultSub.textContent  = `サブ：${subType?.label || r.subId}`;

  const mainDesc = CONFIG.descriptions[r.mainId] || "";
  const subDesc  = CONFIG.descriptions[r.subId] || "";
  el.resultExplain.textContent = `特徴：${mainDesc} /（サブ）${subDesc}`;

  el.mainTags.textContent = (mainType?.tags || []).slice(0,4).join("・");
  el.subTags.textContent  = (subType?.tags  || []).slice(0,4).join("・");

  el.resultScores.textContent = r.sorted.map(x => `${x.id}:${x.score}`).join("  /  ");

  renderFixedImages(r.mainId);

  hide(el.quiz);
  show(el.result);
}

// ===== Events =====
el.startBtn.addEventListener("click", () => {
  hide(el.start);
  show(el.quiz);
  hide(el.result);
  state.idx = 0;
  render();
});

el.backBtn.addEventListener("click", () => {
  if (state.idx > 0) {
    state.idx--;
    render();
  }
});

el.nextBtn.addEventListener("click", () => {
  const total = CONFIG.questions.length;
  if (state.idx < total - 1) {
    state.idx++;
    render();
  } else {
    showResult();
  }
});

el.restartBtn.addEventListener("click", () => {
  state.idx = 0;
  state.answers.fill(null);
  hide(el.result);
  hide(el.quiz);
  show(el.start);
  el.progressFill.style.width = "0%";
  el.step.textContent = "";
});

// 初期状態
document.title = CONFIG.title;
