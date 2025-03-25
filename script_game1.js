const questions = [
    {
        question: "ما هو تعريف الاستدامة التكنولوجية؟",
        answers: [
            { text: "زيادة استهلاك الموارد دون مراعاة البيئة", correct: false },
            { text: "استخدام التكنولوجيا بكفاءة لتحقيق الاستدامة", correct: true },
            { text: "الاعتماد فقط على الوقود الأحفوري", correct: false }
        ]
    },
    {
        question: "أي من هذه التقنيات تساعد في تقليل استهلاك الطاقة؟",
        answers: [
            { text: "استخدام مصابيح LED الذكية", correct: true },
            { text: "ترك الأجهزة الإلكترونية تعمل طوال اليوم", correct: false },
            { text: "استخدام أجهزة كهربائية قديمة", correct: false },
        ]
    },
    {
        question: "ما فائدة الحوسبة السحابية في الاستدامة؟",
        answers: [
            { text: "زيادة استهلاك الكهرباء", correct: false },
            { text: "تقليل الحاجة إلى مراكز بيانات كبيرة تستهلك طاقة عالية", correct: true },
            { text: "تعزيز استخدام أجهزة ضخمة غير فعالة", correct: false },
        ]
    },
    {
        question: "ما هي ميزة السيارات الكهربائية مقارنة بالسيارات التقليدية؟",
        answers: [
            { text: "زيادة استهلاك الوقود", correct: false },
            { text: "عدم وجود فرق بيئي بينها وبين السيارات العادية", correct: false },
            { text: "تقليل انبعاثات الكربون", correct: true }
        ]
    },
    {
        question: "كيف يمكن للذكاء الاصطناعي المساعدة في الاستدامة؟",
        answers: [
            { text: "زيادة استهلاك الطاقة دون فائدة", correct: false },
            { text: "عدم التأثير على الاستدامة بأي شكل", correct: false },
            { text: "تحليل البيانات لتحسين كفاءة استخدام الموارد", correct: true }
        ]
    },
    {
        question: "ما هو دور إنترنت الأشياء في تحقيق الاستدامة؟",
        answers: [
            { text: "زيادة النفايات الإلكترونية", correct: false },
            { text: "تمكين الإدارة الذكية للطاقة والموارد", correct: true },
            { text: "زيادة الاعتماد على الوقود الأحفوري", correct: false }
        ]
    },
    {
        question: "كيف تساهم الأجهزة الذكية في تقليل هدر الطاقة؟",
        answers: [
            { text: "التحكم التلقائي في الاستهلاك بناءً على الحاجة", correct: true },
            { text: "تشغيل جميع الأجهزة طوال اليوم", correct: false },
            { text: "زيادة استهلاك الكهرباء بشكل غير مبرر", correct: false }
        ]
    },
    {
        question: "ما هو دور الطباعة ثلاثية الأبعاد في تحقيق الاستدامة؟",
        answers: [
            { text: "تقليل الهدر في المواد الخام", correct: true },
            { text: "استهلاك كميات أكبر من المواد", correct: false },
            { text: "عدم وجود فائدة بيئية لها", correct: false }
        ]
    },
    {
        question: "ما هي فائدة الشبكات الذكية في مجال الطاقة؟",
        answers: [
            { text: "زيادة استهلاك الطاقة غير الضرورية", correct: false },
            { text: "عدم تحسين كفاءة الأنظمة الكهربائية", correct: false },
            { text: "تحسين توزيع الطاقة وتقليل الفاقد", correct: true }
        ]
    },
    {
        question: "كيف يمكن تقليل النفايات الإلكترونية؟",
        answers: [
            { text: "إعادة التدوير وإعادة الاستخدام", correct: true },
            { text: "التخلص من الأجهزة في القمامة العادية", correct: false },
            { text: "شراء أجهزة جديدة باستمرار دون حاجة", correct: false }
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
const iconContainer = document.getElementById("icon-container"); 

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add("hidden");
    homeButton.classList.add("hidden");
    scoreDisplay.classList.add("hidden");
    iconContainer.innerHTML = '';
    showQuestion();
}

function showQuestion() {
    resetState();
    iconContainer.innerHTML = '';
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
        icon.innerHTML = "✔";
    } else if (type === "incorrect") {
        icon.classList.add("incorrect");
        icon.innerHTML = "❌";
    }

    iconContainer.appendChild(icon);
}

nextButton.addEventListener("click", () => {
    iconContainer.innerHTML = ''; 
    
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

