// Questions Array
const questions = [
    "هل لديك ميزانية شهرية تنظم من خلالها دخلك ونفقاتك؟",
    "هل تعرف الفرق بين الادخار والاستثمار وكيفية استخدام كل منهما؟",
    "هل تمتلك صندوق طوارئ يغطي نفقاتك لمدة ثلاثة أشهر على الأقل؟",
    "هل تتجنب شراء الأشياء بالتقسيط أو القروض غير الضرورية؟",
    "هل تقوم بتتبع معاملاتك البنكية بانتظام للتأكد من صحتها؟",
    "هل لديك أهداف مالية محددة تعمل على تحقيقها؟",
    "هل تعرف كيف تعمل الفائدة المركبة وتأثيرها على الادخار أو الديون؟",
    "هل تقارن بين الأسعار والخدمات قبل اتخاذ قرارات مالية كبيرة؟",
    "هل تعرف أنواع الاستثمارات المتاحة مثل الأسهم أو العقارات؟",
    "هل تسدد الفواتير والالتزامات المالية في وقتها دون تأخير؟"
  ];
  
  let currentQuestion = 0; // مؤشر السؤال الحالي
  let yesCount = 0; // عداد الإجابات بنعم
  
  // Start Quiz
  function startQuiz() {
    currentQuestion = 0; // إعادة التقدم عند البداية
    yesCount = 0; // إعادة عداد الإجابات
    switchScreen('start-screen', 'question-screen');
    showQuestion();
  }
  
  // Show Current Question
  function showQuestion() {
    document.getElementById('question-title').textContent = `السؤال ${currentQuestion + 1}`;
    document.getElementById('question-text').textContent = questions[currentQuestion];
  }
  
  // Save Answer and Proceed
  function saveAnswer(answer) {
    if (answer === 'yes') yesCount++; // إضافة عداد لنعم
    nextQuestion();
  }
  
  // Go to Next Question
  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      showQuestion();
    } else {
      showResult();
    }
  }
  
  // Go to Previous Question
  function previousQuestion() {
    if (currentQuestion > 0) {
      currentQuestion--;
      showQuestion();
    }
  }
  
  // Show Results
  function showResult() {
    switchScreen('question-screen', 'result-screen');
  
    const resultTitle = document.getElementById('result-title');
    const resultDescription = document.getElementById('result-description');
  
    if (yesCount >= 8) {
      resultTitle.textContent = "خبير الخزينة";
      resultDescription.textContent = "أنت خبير مالي يعرف كيف يدير أموره وكأنه يخطط لميزانية دولة!";
    } else if (yesCount >= 5) {
      resultTitle.textContent = "فيلسوف الميزانية";
      resultDescription.textContent = "تتأكد أن كل ريال ينفق في المكان الصحيح… تقريبًا!";
    } else {
      resultTitle.textContent = "على باب الله";
      resultDescription.textContent = "أنت تعيش اللحظة وتترك الأمور تسير على البركة، تحتاج تعيد النظر في وضعك المالي!";
    }
  }
  
  // Restart Quiz
  function restartQuiz() {
    currentQuestion = 0; // إعادة السؤال الأول
    yesCount = 0; // إعادة عداد الإجابات
    switchScreen('result-screen', 'start-screen');
  }
  
  // Switch Screens
  function switchScreen(hideScreenId, showScreenId) {
    document.getElementById(hideScreenId).classList.add('hidden');
    document.getElementById(showScreenId).classList.remove('hidden');
  }
  function goToStart() {
    // إعادة تعيين جميع المتغيرات
    currentQuestionIndex = 0;
    answers = [];
  
    // إخفاء جميع الشاشات
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.add('hidden');
    });
  
    // عرض شاشة البداية
    document.getElementById('start-screen').classList.remove('hidden');
  }  