(() => {
  const BANK = [
    {
      section: "OS types",
      tag: "أنواع أنظمة التشغيل",
      scene: "مستشفى يزرع منظم ضربات قلب (pacemaker). أي تأخير في الاستجابة قد يهدد حياة المريض.",
      ask: "أي نوع نظام تشغيل الأنسب هنا؟",
      choices: [
        "Real time (RTOS) · الزمن الحقيقي",
        "Multitasking · single-user",
        "Multi-user",
        "Single-task · single-user"
      ],
      answer: 0,
      why: "الاستجابة الفورية بلا تأخير ملحوظ = RTOS. السلامة هنا أهم من سهولة سطح المكتب."
    },
    {
      section: "OS types",
      tag: "أنواع أنظمة التشغيل",
      scene: "غسالة ملابس ذكية: برنامجها داخل الجهاز نفسه، وظيفتها ثابتة (غسيل/تجفيف)، ولا تحتاج Windows كامل.",
      ask: "هذا مثال على أي نوع؟",
      choices: [
        "Multi-user",
        "Embedded · مدمج",
        "Multitasking · single-user",
        "Command line OS"
      ],
      answer: 1,
      why: "Embedded = نظام مدمج في العتاد للتحكم بجهاز محدد بوظيفة ثابتة."
    },
    {
      section: "OS types",
      tag: "أنواع أنظمة التشغيل",
      scene: "جدّة اشتريت هاتفًا رخيصًا للمكالمات والرسائل فقط. لا تطبيقات متزامنة ولا متصفح.",
      ask: "أي تصنيف يناسب هذا الجهاز؟",
      choices: [
        "Multitasking · single-user",
        "Multi-user",
        "Single-task · single-user · مهمة واحدة · مستخدم واحد",
        "Real time (RTOS)"
      ],
      answer: 2,
      why: "تطبيق واحد / وظيفة واضحة لمستخدم واحد = Single-task · single-user."
    },
    {
      section: "OS types",
      tag: "أنواع أنظمة التشغيل",
      scene: "طالب يفتح معًا: متصفح + مستند Word + موسيقى على لابتوبه الشخصي.",
      ask: "هذا يصف أي نوع؟",
      choices: [
        "Multi-user",
        "Single-task · single-user",
        "Embedded",
        "Multitasking · single-user · متعدد المهام · مستخدم واحد"
      ],
      answer: 3,
      why: "مستخدم واحد + عدة تطبيقات في آن = Multitasking · single-user (مثل PC والهاتف الذكي)."
    },
    {
      section: "OS types",
      tag: "أنواع أنظمة التشغيل",
      scene: "في مدرسة، 200 طالب يدخلون نفس الخادم معًا لرفع الواجبات وطباعة الملفات.",
      ask: "أي نوع نظام تشغيل يلائم هذا السيناريو؟",
      choices: [
        "Single-task · single-user",
        "Multitasking · single-user فقط",
        "Multi-user · متعدد المستخدمين",
        "Embedded"
      ],
      answer: 2,
      why: "عدة مستخدمين على نفس المورد (خادم/سحابة) = Multi-user."
    },
    {
      section: "OS types",
      tag: "أنواع أنظمة التشغيل",
      scene: "وسادة هوائية في سيارة يجب أن تنتفخ خلال أجزاء من الثانية عند الاصطدام.",
      ask: "المعيار الأهم لاختيار نوع النظام هنا هو…",
      choices: [
        "أن يدعم عشرات المستخدمين معًا",
        "أن يبدو جميلًا مثل Windows",
        "أن يستجيب في الزمن الحقيقي بلا تأخير خطر",
        "أن يشغّل ألعابًا ثقيلة"
      ],
      answer: 2,
      why: "عندما يكون التأخير خطرًا على السلامة نلجأ لـ Real time (RTOS)."
    },
    {
      section: "OS types",
      tag: "مقارنة وفهم",
      scene: "سارة تستخدم هاتفها الذكي وحدها وتفتح واتساب وخرائط ويوتيوب معًا. أحمد وزملاؤه يعدّلون ملف Google Sheets واحد من أجهزة مختلفة.",
      ask: "ما الفرق الصحيح؟",
      choices: [
        "الاثنان Multi-user لأن في تطبيقات كثيرة",
        "سارة: Multitasking · single-user · أحمد وفريقه: Multi-user",
        "سارة: Single-task · أحمد: Embedded",
        "لا فرق — الاثنان نفس نوع نظام التشغيل"
      ],
      answer: 1,
      why: "المفتاح: عدد المستخدمين على نفس المورد. سارة وحدها بعدة تطبيقات؛ الفريق يشارك موردًا واحدًا."
    },
    {
      section: "OS types",
      tag: "مقارنة وفهم",
      scene: "طالب يقول: «التلفاز الذكي Embedded، ومنظم ضربات القلب كمان Embedded… يعني نفس الفكرة تمامًا؟»",
      ask: "أي رد أدق؟",
      choices: [
        "نعم متطابقان 100% ولا فرق أبدًا",
        "كلاهما قد يكون مدمجًا، لكن الـ pacemaker يحتاج غالبًا خاصية الزمن الحقيقي لأن التأخير خطر",
        "التلفاز Multi-user والـ pacemaker Single-task فقط",
        "الـ Embedded لا يُستخدم في الأجهزة الطبية"
      ],
      answer: 1,
      why: "الجهاز الطبي يجمع فكرة Embedded مع حاجة RTOS للاستجابة الفورية."
    },
    {
      section: "OS role",
      tag: "مهام نظام التشغيل",
      scene: "وصّلت طابعة جديدة باللابتوب، وظهرت رسالة تثبيت تعريف الجهاز ثم بدأت الطباعة.",
      ask: "أي دور لنظام التشغيل ظهر هنا؟",
      choices: [
        "Multitasking",
        "Device drivers · تعريفات الأجهزة",
        "Multi-user licensing",
        "Menu-based UI"
      ],
      answer: 1,
      why: "Device drivers تربط الجهاز الرقمي بالطرفيات مثل الطابعات ولوحة المفاتيح والشاشات."
    },
    {
      section: "OS role",
      tag: "مهام نظام التشغيل",
      scene: "فتح الطالب 15 تطبيقًا مع فيديوهات كثيرة، فصار اللابتوب بطيئًا جدًا.",
      ask: "ما التفسير الأدق حسب الدرس؟",
      choices: [
        "نظام التشغيل تعطّل نهائيًا ولا يمكن إصلاحه",
        "الذاكرة وقوة المعالجة محدودة — كثرة التطبيقات تبطئ الأداء",
        "لأن الواجهة كانت Menu-based",
        "لأن الجهاز Embedded"
      ],
      answer: 1,
      why: "من أدوار OS إدارة الذاكرة، لكن الموارد محدودة (Limit)."
    },
    {
      section: "OS role",
      tag: "مهام نظام التشغيل",
      scene: "Antivirus يعمل في الخلفية، والمتصفح مفتوح، ومستند يُكتب، وموسيقى تشتغل — وكلها «معًا».",
      ask: "كيف يحقّق نظام التشغيل ذلك فعليًا؟",
      choices: [
        "يشغّل كل شيء في نفس اللحظة الحرفية بلا تناوب",
        "يعطي كل عملية حصة صغيرة من زمن المعالج بالتناوب فيبدو متزامنًا",
        "يغلق التطبيقات تلقائيًا كل ثانية",
        "يستخدم واجهة CLI فقط"
      ],
      answer: 1,
      why: "Multitasking = تناوب سريع على زمن المعالج، فيبدو للمستخدم أنه متزامن."
    },
    {
      section: "OS role",
      tag: "مهام نظام التشغيل",
      scene: "في الشركة: طباعة عن بُعد، حسابات مستخدمين، ونسخ احتياطي للملفات على الشبكة.",
      ask: "هذا يرتبط أساسًا بأي دور؟",
      choices: [
        "Networking",
        "Adapted UI",
        "Single-task OS",
        "File type JPEG"
      ],
      answer: 0,
      why: "Networking: الوصول لموارد الشبكة مثل remote printing وإدارة المستخدمين وfile backup."
    },
    {
      section: "OS role",
      tag: "مهام نظام التشغيل",
      scene: "نظام التشغيل يفحص باستمرار محاولات الاختراق ويجمع بيانات عن صحة النظام.",
      ask: "هذا الدور اسمه…",
      choices: [
        "Multitasking",
        "Security",
        "Embedded",
        "Graphical only"
      ],
      answer: 1,
      why: "Security من مهام نظام التشغيل ضد الهجمات الإلكترونية."
    },
    {
      section: "UI",
      tag: "الواجهات ومتى نستخدمها",
      scene: "طفل صغير يستخدم جهازًا لأول مرة: ينقر أيقونات ويفتح نوافذ بالفأرة بلا كتابة أوامر.",
      ask: "الواجهة الأنسب؟",
      choices: [
        "Command line (CLI)",
        "Graphical (GUI)",
        "Real time OS",
        "Hex editor"
      ],
      answer: 1,
      why: "GUI سهلة للمستخدم الجديد: نوافذ وأيقونات وقوائم ومؤشر — بلا برمجة."
    },
    {
      section: "UI",
      tag: "الواجهات ومتى نستخدمها",
      scene: "فني شبكات يضبط راوتر عبر أوامر نصية في terminal لأنه يحتاج تحكمًا أدق.",
      ask: "أي واجهة يستخدم؟",
      choices: [
        "Graphical (GUI)",
        "Adapted فقط",
        "Command line (CLI)",
        "Menu-based على ATM"
      ],
      answer: 2,
      why: "CLI للمطورين وفنيي IT والشبكات: مرونة أعلى وتحكم أدق، مع حاجة لمعرفة الأوامر."
    },
    {
      section: "UI",
      tag: "الواجهات ومتى نستخدمها",
      scene: "عند الصراف الآلي تظهر قائمة: سحب · رصيد · تحويل · خروج. نفس الفكرة في آلة تذاكر أو ميكروويف.",
      ask: "هذا نوع الواجهة…",
      choices: [
        "Command line",
        "Menu-based",
        "Multi-user OS",
        "Raw file interface"
      ],
      answer: 1,
      why: "Menu-based: وظائف عبر قائمة جاهزة — شائعة في ATM والطابعات وآلات التذاكر."
    },
    {
      section: "UI",
      tag: "الواجهات ومتى نستخدمها",
      scene: "طالب ضعيف البصر يحتاج خطًا أكبر، تباين ألوان أعلى، وأزرار أوضح على الشاشة.",
      ask: "ماذا نسمي هذا التكييف؟",
      choices: [
        "Adapted UI",
        "Embedded OS",
        "Single-task فقط",
        "Multi-user server"
      ],
      answer: 0,
      why: "Adapted = تكييف اللون وحجم الخط والموضع لدعم إمكانية الوصول accessibility."
    },
    {
      section: "UI",
      tag: "الواجهات ومتى نستخدمها",
      scene: "مقارنة أداء: جهاز ضعيف المواصفات يفتح واجهة ثقيلة مليئة بالرسومات فيصير بطيئًا.",
      ask: "أي جملة صحيحة؟",
      choices: [
        "GUI أخف دائمًا من CLI على التخزين والأداء",
        "GUI غالبًا تزيد المتطلبات على التخزين والأداء مقارنةً بـ CLI أو Menu-based",
        "Menu-based أثقل من كل الواجهات دائمًا",
        "الواجهة لا تؤثر على الأداء أبدًا"
      ],
      answer: 1,
      why: "من الدرس: GUI تستهلك موارد أكثر؛ CLI وMenu-based أخف نسبيًا."
    }
  ];

  const intro = document.getElementById("intro");
  const quiz = document.getElementById("quiz");
  const result = document.getElementById("result");
  const review = document.getElementById("review");
  const nameInput = document.getElementById("student-name");
  const qCount = document.getElementById("q-count");
  const examBar = document.getElementById("exam-bar");
  const qTag = document.getElementById("q-tag");
  const qTitle = document.getElementById("q-title");
  const qScene = document.getElementById("q-scene");
  const qChoices = document.getElementById("q-choices");
  const qPrev = document.getElementById("q-prev");
  const qNext = document.getElementById("q-next");

  let deck = [];
  let i = 0;
  let answers = [];

  function shuffle(arr) {
    const a = [...arr];
    for (let n = a.length - 1; n > 0; n--) {
      const j = Math.floor(Math.random() * (n + 1));
      [a[n], a[j]] = [a[j], a[n]];
    }
    return a;
  }

  function prepareDeck() {
    return shuffle(BANK).map((q) => {
      const indexed = q.choices.map((text, idx) => ({ text, idx }));
      const shuffled = shuffle(indexed);
      const answer = shuffled.findIndex((c) => c.idx === q.answer);
      return {
        section: q.section,
        tag: q.tag,
        scene: q.scene,
        ask: q.ask,
        why: q.why,
        choices: shuffled.map((c) => c.text),
        answer,
        pick: null
      };
    });
  }

  function show(el) {
    [intro, quiz, result, review].forEach((n) => { n.hidden = true; });
    el.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function render() {
    const q = deck[i];
    qCount.textContent = `${i + 1} / ${deck.length}`;
    examBar.style.width = `${((i + 1) / deck.length) * 100}%`;
    qTag.textContent = q.tag;
    qTitle.textContent = q.ask;
    qScene.textContent = q.scene;
    qChoices.innerHTML = "";
    q.choices.forEach((text, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "exam-choice" + (q.pick === idx ? " selected" : "");
      btn.textContent = text;
      btn.addEventListener("click", () => {
        q.pick = idx;
        render();
      });
      qChoices.appendChild(btn);
    });
    qPrev.disabled = i === 0;
    qNext.textContent = i === deck.length - 1 ? "تسليم الإجابات" : "التالي";
  }

  function sectionStats() {
    const map = {};
    deck.forEach((q) => {
      if (!map[q.section]) map[q.section] = { ok: 0, total: 0 };
      map[q.section].total += 1;
      if (q.pick === q.answer) map[q.section].ok += 1;
    });
    return map;
  }

  function finish() {
    const unanswered = deck.filter((q) => q.pick === null).length;
    if (unanswered > 0) {
      const go = confirm(`باقي ${unanswered} سؤال بلا إجابة. تسليم الآن؟`);
      if (!go) return;
    }
    const score = deck.filter((q) => q.pick === q.answer).length;
    const total = deck.length;
    const pct = Math.round((score / total) * 100);
    const name = nameInput.value.trim();
    document.getElementById("final-score").textContent = `${score}/${total}`;
    let title = "تحتاج مراجعة سريعة";
    let msg = "رجع لشرائح أنواع أنظمة التشغيل والواجهات، وركّز على السؤال: متى نختار كل نوع؟";
    if (pct >= 90) {
      title = "ممتاز — فهمك واضح";
      msg = "ميّزت الفروقات والسيناريوهات جيدًا. جاهز تكمل باقي الدرس بعد سؤال النقاش.";
    } else if (pct >= 70) {
      title = "جيد — مع نقاط للمراجعة";
      msg = "الأساس تمام. راجع الأسئلة الغلط في المراجعة قبل ما نكمل CLI.";
    } else if (pct >= 50) {
      title = "مقبول — ثبّت المفاهيم";
      msg = "في خلط بين بعض الأنواع. راجع Embedded مقابل RTOS، وMultitasking مقابل Multi-user.";
    }
    if (name) msg = `${name}: ${msg}`;
    document.getElementById("result-title").textContent = title;
    document.getElementById("result-msg").textContent = msg;

    const labels = {
      "OS types": "أنظمة التشغيل",
      "OS role": "مهام النظام",
      UI: "الواجهات"
    };
    const stats = sectionStats();
    const box = document.getElementById("breakdown");
    box.innerHTML = "";
    Object.keys(labels).forEach((key) => {
      const s = stats[key] || { ok: 0, total: 0 };
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `<h3>${labels[key]}</h3><p>${s.ok}/${s.total}</p>`;
      box.appendChild(card);
    });
    answers = deck;
    show(result);
  }

  function renderReview() {
    const list = document.getElementById("review-list");
    list.innerHTML = "";
    answers.forEach((q, n) => {
      const ok = q.pick === q.answer;
      const item = document.createElement("article");
      item.className = "review-item " + (ok ? "ok" : "bad");
      const yours = q.pick === null ? "بدون إجابة" : q.choices[q.pick];
      const correct = q.choices[q.answer];
      item.innerHTML = `
        <h3>${n + 1}) ${q.ask}</h3>
        <p class="exam-scene" style="margin-bottom:8px">${q.scene}</p>
        <p class="pick">إجابتك: <b class="${ok ? "good" : "bad"}">${yours}</b></p>
        <p class="pick">الصحيح: <b class="good">${correct}</b></p>
        <p class="why"><strong>ليش؟</strong> ${q.why}</p>
      `;
      list.appendChild(item);
    });
    show(review);
  }

  document.getElementById("start-exam").addEventListener("click", () => {
    deck = prepareDeck();
    i = 0;
    show(quiz);
    render();
  });

  qPrev.addEventListener("click", () => {
    if (i > 0) {
      i -= 1;
      render();
    }
  });

  qNext.addEventListener("click", () => {
    if (i < deck.length - 1) {
      i += 1;
      render();
    } else {
      finish();
    }
  });

  document.getElementById("review-btn").addEventListener("click", renderReview);
  document.getElementById("back-result").addEventListener("click", () => show(result));
  document.getElementById("retry-btn").addEventListener("click", () => {
    deck = prepareDeck();
    i = 0;
    show(quiz);
    render();
  });
})();
