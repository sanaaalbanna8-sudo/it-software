(() => {
  const slides = [...document.querySelectorAll(".slide")];
  const bar = document.getElementById("bar");
  const dots = document.getElementById("dots");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  let i = 0;
  let bits = [];

  slides.forEach((_, n) => {
    const b = document.createElement("button");
    b.type = "button";
    b.addEventListener("click", () => go(n));
    dots.appendChild(b);
  });

  function go(n) {
    i = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach((s, k) => s.classList.toggle("active", k === i));
    [...dots.children].forEach((d, k) => d.classList.toggle("on", k === i));
    bar.style.width = ((i + 1) / slides.length) * 100 + "%";
    prev.disabled = i === 0;
    next.disabled = i === slides.length - 1;
  }

  prev.addEventListener("click", () => go(i - 1));
  next.addEventListener("click", () => go(i + 1));
  document.addEventListener("keydown", (e) => {
    if (["INPUT", "SELECT", "TEXTAREA"].includes(e.target.tagName)) return;
    if (e.key === "ArrowLeft") go(i + 1);
    if (e.key === "ArrowRight") go(i - 1);
    if (e.key === "Home") go(0);
    if (e.key === "End") go(slides.length - 1);
    if (e.key === "f" || e.key === "F") document.getElementById("full-btn").click();
  });

  document.getElementById("full-btn").addEventListener("click", () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  });

  let sx = 0;
  document.addEventListener("touchstart", (e) => { sx = e.changedTouches[0].screenX; }, { passive: true });
  document.addEventListener("touchend", (e) => {
    if (!document.getElementById("game-board").hidden) return;
    const dx = e.changedTouches[0].screenX - sx;
    if (Math.abs(dx) > 60) go(i + (dx > 0 ? 1 : -1));
  }, { passive: true });

  go(0);

  const intro = document.getElementById("game-intro");
  const board = document.getElementById("game-board");
  const result = document.getElementById("game-result");
  const img = document.getElementById("g-img");
  const title = document.getElementById("g-title");
  const round = document.getElementById("g-round");
  const scoreEl = document.getElementById("g-score");
  const streakEl = document.getElementById("g-streak");
  const why = document.getElementById("g-why");
  const btnA = document.getElementById("pick-a");
  const btnB = document.getElementById("pick-b");
  let deck = [];
  let q = 0;
  let score = 0;
  let streak = 0;
  let locked = false;

  function shuffle(arr) {
    const a = [...arr];
    for (let n = a.length - 1; n > 0; n--) {
      const j = Math.floor(Math.random() * (n + 1));
      [a[n], a[j]] = [a[j], a[n]];
    }
    return a;
  }

  function startGame() {
    deck = shuffle(GAME);
    q = 0;
    score = 0;
    streak = 0;
    locked = false;
    intro.hidden = true;
    result.hidden = true;
    board.hidden = false;
    showQ();
  }

  function showQ() {
    const item = deck[q];
    img.src = item.img;
    img.alt = item.title;
    title.textContent = item.title;
    round.textContent = `${q + 1} / ${deck.length}`;
    scoreEl.textContent = `Score ${score}`;
    streakEl.textContent = `Streak ${streak}`;
    btnA.textContent = item.a;
    btnB.textContent = item.b;
    why.hidden = true;
    why.innerHTML = "";
    locked = false;
    btnA.disabled = false;
    btnB.disabled = false;
  }

  function answer(pick) {
    if (locked) return;
    locked = true;
    const item = deck[q];
    const ok = pick === item.answer;
    btnA.disabled = true;
    btnB.disabled = true;
    if (ok) {
      score += 1;
      streak += 1;
      beep(880, 0.08);
      if (streak >= 3) burst();
    } else {
      streak = 0;
      beep(180, 0.12);
    }
    scoreEl.textContent = `Score ${score}`;
    streakEl.textContent = `Streak ${streak}`;
    const right = item.answer === "a" ? item.a : item.b;
    why.hidden = false;
    why.className = "why " + (ok ? "good" : "bad");
    why.innerHTML = `
      <h3>${ok ? "Correct" : "Try again"} — ${right}</h3>
      <p>${item.why}</p>
      <button class="next-round" type="button">${q + 1 === deck.length ? "Result" : "Next image"}</button>
    `;
    why.querySelector("button").addEventListener("click", () => {
      if (q + 1 >= deck.length) finish();
      else {
        q += 1;
        showQ();
      }
    });
  }

  function finish() {
    board.hidden = true;
    result.hidden = false;
    const pct = Math.round((score / deck.length) * 100);
    document.getElementById("score-ring").style.setProperty("--p", pct + "%");
    document.getElementById("final-score").textContent = score + "/" + deck.length;
    const titleEl = document.getElementById("result-title");
    const msgEl = document.getElementById("result-msg");
    if (pct === 100) {
      titleEl.textContent = "كمال!";
      msgEl.textContent = "ميّزت أنظمة التشغيل والواجهات والمساعدات والتطبيقات وأنواع الملفات.";
      burst(true);
    } else if (pct >= 75) {
      titleEl.textContent = "أداء قوي";
      msgEl.textContent = "القاعدة واضحة: اسأل عن الدور والاحتياج قبل الاسم التجاري.";
    } else {
      titleEl.textContent = "جولة ثانية؟";
      msgEl.textContent = "راجع: مضمّن ≠ سطح مكتب، مساعد ≠ تطبيق، GUI سهلة لكن أثقل، RAW أغنى من JPEG.";
    }
  }

  btnA.addEventListener("click", () => answer("a"));
  btnB.addEventListener("click", () => answer("b"));
  document.getElementById("start-game").addEventListener("click", startGame);
  document.getElementById("replay").addEventListener("click", startGame);

  function beep(freq, time) {
    try {
      const ac = new (window.AudioContext || window.webkitAudioContext)();
      const o = ac.createOscillator();
      const g = ac.createGain();
      o.frequency.value = freq;
      o.connect(g);
      g.connect(ac.destination);
      g.gain.value = 0.05;
      o.start();
      setTimeout(() => { o.stop(); ac.close(); }, time * 1000);
    } catch (_) {}
  }

  function size() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  }
  size();
  addEventListener("resize", size);

  function burst(big) {
    const n = big ? 120 : 40;
    for (let k = 0; k < n; k++) {
      bits.push({
        x: innerWidth * (0.3 + Math.random() * 0.4),
        y: innerHeight * 0.2,
        vx: (Math.random() - 0.5) * 14,
        vy: Math.random() * -10 - 4,
        g: 0.22,
        s: 4 + Math.random() * 6,
        c: ["#3d9cff", "#ff8a3d", "#ffd166", "#5dffc2", "#fff"][k % 5],
        a: 1,
      });
    }
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bits = bits.filter((p) => p.a > 0.05);
    bits.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.g;
      p.a -= 0.012;
      ctx.globalAlpha = p.a;
      ctx.fillStyle = p.c;
      ctx.fillRect(p.x, p.y, p.s, p.s * 0.6);
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }
  tick();
})();
