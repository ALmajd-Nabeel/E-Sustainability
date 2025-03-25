const questions = [
    {
        question: "ما هو تعريف الاستدامة؟",
        answers: [
            { text: "استخدام الموارد بكفاءة للحفاظ على البيئة", correct: true },
            { text: "زيادة الاستهلاك بشكل دائم", correct: false },
            { text: "إهمال إعادة التدوير", correct: false },
            { text: "الاستهلاك غير المحدود", correct: false }
        ]
    },
    {
        question: "أي من هذه الإجراءات يساهم في تقليل استهلاك الطاقة؟",
        answers: [
            { text: "استخدام المصابيح التقليدية", correct: false },
            { text: "تشغيل التلفاز طوال اليوم", correct: false },
            { text: "إطفاء الأجهزة عند عدم الحاجة إليها", correct: true },
            { text: "ترك المياه مفتوحة أثناء تنظيف الأسنان", correct: false }
        ]
    },
    {
        question: "ما هي أهمية إعادة التدوير؟",
        answers: [
            { text: "زيادة التلوث البيئي", correct: false },
            { text: "تقليل النفايات والحفاظ على الموارد", correct: true },
            { text: "استهلاك المزيد من المواد الخام", correct: false },
            { text: "عدم الاستفادة من النفايات", correct: false }
        ]
    },
    {
        question: "ما هو المصدر الرئيسي للطاقة المتجددة؟",
        answers: [
            { text: "الفحم", correct: false },
            { text: "النفط", correct: false },
            { text: "الغاز الطبيعي", correct: false },
            { text: "الشمس", correct: true }
        ]
    },
    {
        question: "أي من هذه العادات يساعد في تقليل هدر المياه؟",
        answers: [
            { text: "ترك الصنبور مفتوحًا أثناء غسل الصحون", correct: false },
            { text: "سقي النباتات بالمياه الصالحة للشرب بكثرة", correct: false },
            { text: "إصلاح التسربات المائية", correct: true },
            { text: "استخدام كميات كبيرة من الماء في كل مرة", correct: false }
        ]
    },
    {
        question: "ما هو الهدف من استخدام الطاقة المتجددة؟",
        answers: [
            { text: "تقليل الاعتماد على الوقود الأحفوري", correct: true },
            { text: "زيادة استهلاك الوقود الأحفوري", correct: false },
            { text: "إلحاق الضرر بالبيئة", correct: false },
            { text: "زيادة انبعاثات الكربون", correct: false }
        ]
    },
    {
        question: "ما هو التأثير الإيجابي لزراعة الأشجار؟",
        answers: [
            { text: "تنقية الهواء وإنتاج الأكسجين", correct: true },
            { text: "زيادة تلوث الهواء", correct: false },
            { text: "استنزاف التربة", correct: false },
            { text: "زيادة انبعاثات الكربون", correct: false }
        ]
    },
    {
        question: "لماذا يجب علينا تقليل استخدام البلاستيك؟",
        answers: [
            { text: "لأنه مفيد للحياة البرية", correct: false },
            { text: "لأنه يسبب تلوث البيئة", correct: true },
            { text: "لأنه يزيد من خصوبة التربة", correct: false },
            { text: "لأنه يتحلل بسرعة", correct: false }
        ]
    },
    {
        question: "ما هو التأثير السلبي للاحتباس الحراري؟",
        answers: [
            { text: "ارتفاع درجات الحرارة العالمية", correct: true },
            { text: "تحسين جودة الهواء", correct: false },
            { text: "تقليل الفيضانات", correct: false },
            { text: "تقليل ذوبان الجليد", correct: false }
        ]
    },
    {
        question: "كيف يمكننا المساهمة في حماية البيئة؟",
        answers: [
            { text: "إلقاء القمامة في الشوارع", correct: false },
            { text: "استخدام المزيد من الوقود الأحفوري", correct: false },
            { text: "زيادة تلوث المياه", correct: false },
            { text: "تقليل النفايات وإعادة التدوير", correct: true }
        ]
    }
];
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score");
const scoreValue = document.getElementById("score-value");
const homeButton = document.getElementById("home-button");
const iconContainer = document.getElementById("icon-container"); // مكان عرض العلامات

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add("hidden");
    homeButton.classList.add("hidden");
    scoreDisplay.classList.add("hidden");
    iconContainer.innerHTML = ''; // مسح العلامات السابقة
    showQuestion();
}

function showQuestion() {
    resetState();
    iconContainer.innerHTML = ''; // مسح العلامات السابقة عند الانتقال للسؤال الجديد
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.addEventListener("click", () => selectAnswer(answer.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add("hidden");
    answerButtons.innerHTML = "";
}

function selectAnswer(correct) {
    if (correct) {
        score++;
        showIcon("correct");
    } else {
        showIcon("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });

    nextButton.classList.remove("hidden");
}

function showIcon(type) {
    const icon = document.createElement("span");
    icon.classList.add("icon");

    if (type === "correct") {
        icon.classList.add("correct");
        icon.innerHTML = "✔";  // علامة صح
    } else if (type === "incorrect") {
        icon.classList.add("incorrect");
        icon.innerHTML = "❌";  // علامة إكس
    }

    iconContainer.appendChild(icon);
}

nextButton.addEventListener("click", () => {
    // إخفاء العلامة عند الانتقال للسؤال التالي
    iconContainer.innerHTML = '';  // إخفاء العلامات عند الضغط على "التالي"
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionElement.innerText = "لقد أكملت اللعبة!";
    answerButtons.classList.add("hidden");
    nextButton.classList.add("hidden");

    let rating = "";
    if (score >= 9) {
        rating = "ممتاز";
    } else if (score >= 7) {
        rating = "جيد جدا";
    } else if (score >= 5) {
        rating = "جيد";
    } else if (score >= 3) {
        rating = "مقبول";
    } else {
        rating = "سيء";
    }
    
    scoreDisplay.classList.remove("hidden");
    scoreValue.innerHTML = `${rating}<br>${score}`;
    homeButton.classList.remove("hidden");
}

startGame();

