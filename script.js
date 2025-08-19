// Advertisement configurations - You can easily modify these URLs
const advertisements = {
    linkAds: [
        // Add your 30 link ads here - each worth 1 diamond
        { title: "موقع التسوق الأول", description: "تسوق الآن واحصل على خصم 50%", url: "https://verbalimpliedgorilla.com/m84kx247d?key=2f2cbf89b0c926e19404faecc0eb2843", reward: 1 },
        { title: "تطبيق الألعاب المجاني", description: "حمل أفضل الألعاب مجاناً", url: "https://verbalimpliedgorilla.com/a099dxypf?key=961976172916bd311285f6ed583fb577", reward: 1 },
        { title: "خدمة التوصيل السريع", description: "توصيل مجاني خلال 30 دقيقة", url: "https://verbalimpliedgorilla.com/int5b2j0?key=eb587e5853f4b2ddefd6e6a71bc0b432", reward: 1 },
        { title: "كورسات التعلم المجانية", description: "تعلم البرمجة والتصميم مجاناً", url: "https://verbalimpliedgorilla.com/qx70pupd?key=2100c6354fdc2e2a1345f198e1d9acd1", reward: 1 },
        { title: "متجر الإلكترونيات", description: "أحدث الأجهزة بأفضل الأسعار", url: "https://verbalimpliedgorilla.com/cw9itr3x8?key=4796a038b03d93ddd3e8408f158d6688", reward: 1 },
        { title: "تطبيق الطعام", description: "اطلب طعامك المفضل الآن", url: "https://example-food1.com", reward: 1 },
        { title: "موقع السفر", description: "احجز رحلتك القادمة بخصم", url: "https://example-travel1.com", reward: 1 },
        { title: "متجر الملابس", description: "أزياء عصرية لكل المناسبات", url: "https://example-fashion1.com", reward: 1 },
        { title: "تطبيق الرياضة", description: "تابع النتائج والأخبار الرياضية", url: "https://example-sports1.com", reward: 1 },
        { title: "موقع التعليم", description: "دروس ودورات تعليمية متنوعة", url: "https://example-education1.com", reward: 1 },
        { title: "متجر الكتب", description: "كتب إلكترونية ومطبوعة", url: "https://example-books1.com", reward: 1 },
        { title: "تطبيق الصحة", description: "نصائح صحية ومتابعة اللياقة", url: "https://example-health1.com", reward: 1 },
        { title: "موقع التقنية", description: "أخبار ومراجعات تقنية", url: "https://example-tech1.com", reward: 1 },
        { title: "متجر الهدايا", description: "هدايا مميزة لكل المناسبات", url: "https://example-gifts1.com", reward: 1 },
        { title: "تطبيق الموسيقى", description: "استمع لأغانيك المفضلة", url: "https://example-music1.com", reward: 1 },
        { title: "موقع السيارات", description: "سيارات جديدة ومستعملة", url: "https://example-cars1.com", reward: 1 },
        { title: "متجر الجمال", description: "منتجات العناية والجمال", url: "https://example-beauty1.com", reward: 1 },
        { title: "تطبيق البنك", description: "خدمات مصرفية آمنة ومتطورة", url: "https://example-bank1.com", reward: 1 },
        { title: "موقع العقارات", description: "شقق وفلل للبيع والإيجار", url: "https://example-realestate1.com", reward: 1 },
        { title: "متجر الأطفال", description: "ألعاب وملابس الأطفال", url: "https://example-kids1.com", reward: 1 },
        { title: "تطبيق الطقس", description: "توقعات الطقس الدقيقة", url: "https://example-weather1.com", reward: 1 },
        { title: "موقع الأخبار", description: "آخر الأخبار المحلية والعالمية", url: "https://example-news1.com", reward: 1 },
        { title: "متجر الرياضة", description: "معدات رياضية وملابس رياضية", url: "https://example-sportstore1.com", reward: 1 },
        { title: "تطبيق التصوير", description: "تحرير وتعديل الصور", url: "https://example-photo1.com", reward: 1 },
        { title: "موقع المطاعم", description: "أفضل المطاعم في منطقتك", url: "https://example-restaurants1.com", reward: 1 },
        { title: "متجر الحيوانات", description: "مستلزمات الحيوانات الأليفة", url: "https://example-pets1.com", reward: 1 },
        { title: "تطبيق التأمين", description: "تأمين صحي وعلى السيارات", url: "https://example-insurance1.com", reward: 1 },
        { title: "موقع الحرف", description: "منتجات يدوية وحرف تقليدية", url: "https://example-crafts1.com", reward: 1 },
        { title: "متجر الساعات", description: "ساعات فاخرة وعصرية", url: "https://example-watches1.com", reward: 1 },
        { title: "تطبيق الطبخ", description: "وصفات شهية وسهلة التحضير", url: "https://example-cooking1.com", reward: 1 }
    ],
    directAds: [
        // Add your 30 direct video ads here - each worth 2 diamonds
        { title: "إعلان فري فاير الجديد", description: "شاهد أحدث إعلانات فري فاير", url: "https://example-freefire-video1.com", reward: 2 },
        { title: "إعلان جارينا الخاص", description: "إعلان حصري من جارينا", url: "https://example-garena-video1.com", reward: 2 },
        { title: "مسابقة الألماس الكبرى", description: "شارك واربح 1000 ألماسة", url: "https://example-diamond-contest1.com", reward: 2 },
        { title: "إعلان اللعبة الجديدة", description: "استكشف عالم جديد من الألعاب", url: "https://example-newgame-video1.com", reward: 2 },
        { title: "عروض المتجر الحصرية", description: "خصومات تصل إلى 70%", url: "https://example-store-offers1.com", reward: 2 },
        { title: "إعلان التطبيق المالي", description: "احصل على قروض فورية", url: "https://example-finance-video1.com", reward: 2 },
        { title: "إعلان شركة التأمين", description: "حماية شاملة لك ولعائلتك", url: "https://example-insurance-video1.com", reward: 2 },
        { title: "إعلان السيارات الجديدة", description: "قد سيارة أحلامك الآن", url: "https://example-car-video1.com", reward: 2 },
        { title: "إعلان العقارات", description: "منزل أحلامك في انتظارك", url: "https://example-realestate-video1.com", reward: 2 },
        { title: "إعلان الطعام الشهي", description: "أشهى الوجبات إلى بيتك", url: "https://example-food-video1.com", reward: 2 },
        { title: "إعلان الموضة", description: "أحدث صيحات الموضة", url: "https://example-fashion-video1.com", reward: 2 },
        { title: "إعلان التقنية", description: "أحدث الأجهزة التقنية", url: "https://example-tech-video1.com", reward: 2 },
        { title: "إعلان السفر", description: "وجهات سياحية مذهلة", url: "https://example-travel-video1.com", reward: 2 },
        { title: "إعلان التعليم", description: "طور مهاراتك مع خبرائنا", url: "https://example-education-video1.com", reward: 2 },
        { title: "إعلان الصحة", description: "حياة صحية أفضل تبدأ اليوم", url: "https://example-health-video1.com", reward: 2 },
        { title: "إعلان الرياضة", description: "كن بطل في رياضتك المفضلة", url: "https://example-sports-video1.com", reward: 2 },
        { title: "إعلان الموسيقى", description: "استمع للموسيقى بجودة عالية", url: "https://example-music-video1.com", reward: 2 },
        { title: "إعلان الكتب", description: "مكتبة ضخمة من الكتب", url: "https://example-books-video1.com", reward: 2 },
        { title: "إعلان الألعاب", description: "ألعاب مثيرة وممتعة", url: "https://example-games-video1.com", reward: 2 },
        { title: "إعلان التصوير", description: "التقط لحظاتك المميزة", url: "https://example-photo-video1.com", reward: 2 },
        { title: "إعلان الحيوانات الأليفة", description: "اعتني بحيوانك الأليف", url: "https://example-pets-video1.com", reward: 2 },
        { title: "إعلان الحدائق", description: "نباتات جميلة لبيتك", url: "https://example-garden-video1.com", reward: 2 },
        { title: "إعلان الطبخ", description: "وصفات سهلة ولذيذة", url: "https://example-cooking-video1.com", reward: 2 },
        { title: "إعلان الديكور", description: "ديكور عصري لمنزلك", url: "https://example-decor-video1.com", reward: 2 },
        { title: "إعلان الساعات", description: "ساعات أنيقة لكل المناسبات", url: "https://example-watches-video1.com", reward: 2 },
        { title: "إعلان المجوهرات", description: "مجوهرات فاخرة وأنيقة", url: "https://example-jewelry-video1.com", reward: 2 },
        { title: "إعلان العطور", description: "عطور مميزة تناسب شخصيتك", url: "https://example-perfume-video1.com", reward: 2 },
        { title: "إعلان النظافة", description: "منتجات تنظيف فعالة", url: "https://example-cleaning-video1.com", reward: 2 },
        { title: "إعلان الأدوات", description: "أدوات منزلية ومهنية", url: "https://example-tools-video1.com", reward: 2 },
        { title: "إعلان الخدمات", description: "خدمات متنوعة عالية الجودة", url: "https://example-services-video1.com", reward: 2 }
    ]
};

// Track pending ad rewards (ads that were opened but reward not yet claimed)
let pendingRewards = JSON.parse(localStorage.getItem('pendingRewards') || '[]');

// Language configurations with comprehensive translations
const translations = {
    en: {
        // Login Page
        'login-title': 'FreeFire Diamond Farm',
        'login-subtitle': 'Earn free diamonds by watching ads',
        'game-id-label': '💎 FreeFire Game ID',
        'username-label': '👤 Username',
        'login-submit': '💎 Login 💎',
        'toggle-auth-login': "Don't have an account? Sign up",
        'toggle-auth-signup': "Already have an account? Login",
        'how-it-works-title': '💎 How it works:',
        
        // Home Page
        'header-title': 'FreeFire Diamond Farm',
        'welcome-text': 'Welcome back,',
        'diamonds-label': 'Diamonds',
        'total-ads-label': 'Total Ads',
        'link-ads-label': 'Link Ads',
        'direct-ads-label': 'Direct Ads',
        'progress-title': 'Progress to Withdrawal',
        'watching-link-title': 'Watching Link Ad...',
        'watching-direct-title': 'Watching Direct Ad...',
        'watching-link-subtitle': 'Please wait 3 seconds',
        'watching-direct-subtitle': 'Please wait 5 seconds',
        'link-ads-title': 'Link Ads',
        'link-ads-desc': 'Click on external links',
        'direct-ads-title': 'Direct Ads',
        'direct-ads-desc': 'Watch video advertisements',
        'watch-link-ad': 'Watch Link Ad',
        'watch-direct-ad': 'Watch Direct Ad',
        'withdraw-title': 'Withdraw Diamonds',
        'withdraw-desc-available': 'You can withdraw up to',
        'withdraw-desc-unavailable': 'Complete',
        'withdraw-desc-unavailable-2': 'more ads to unlock withdrawal',
        'withdraw-btn': 'Withdraw',
        'account-info-title': 'Account Information',
        'game-id-text': 'Game ID:',
        'username-text': 'Username:',
        'total-earnings-text': 'Total Earnings:',
        'logout': 'Logout',
        'ready-withdraw': 'Ready to withdraw!',
        'ads-needed': 'more ads needed',
        'diamonds': 'diamonds',
        
        // Withdraw Page
        'withdraw-page-title': 'Withdraw Diamonds',
        'back-to-home': '← Back to Home',
        'available-diamonds-label': 'Available Diamonds',
        'ads-completed-label': 'Ads Completed',
        'max-withdrawal-label': 'Max Withdrawal',
        'withdraw-diamonds-title': 'Withdraw Diamonds',
        'withdraw-diamonds-desc': 'Choose how many diamonds you want to withdraw to your FreeFire account',
        'withdrawing-to-label': 'Withdrawing to FreeFire ID:',
        'available-label': 'Available:',
        'withdrawal-amount-label': 'Withdrawal Amount:',
        'withdrawal-info-title': 'Withdrawal Information:',
        'confirm-withdraw-btn': 'Confirm Withdrawal of',
        'processing-title': 'Processing withdrawal...',
        'processing-subtitle': 'Please wait while we send your diamonds',
        'success-title': 'Withdrawal Successful!',
        'success-message-1': 'diamonds have been sent to your FreeFire account',
        'redirect-text': 'Redirecting to home page...',
        'not-available-title': 'Withdrawal Not Available',
        'not-available-message': 'You need to complete at least 72 ads to unlock withdrawal.',
        
        // Common
        'ads-completed': 'Ads completed:',
        'account': 'Account:',
        'lang-switch': 'العربية'
    },
    ar: {
        // Login Page  
        'login-title': 'مزرعة الألماس فري فاير',
        'login-subtitle': 'اكسب الألماس مجاناً عبر مشاه��ة الإعلانات',
        'game-id-label': '💎 رقم حساب فري فاير',
        'username-label': '👤 اسم المستخدم',
        'login-submit': '💎 تسجيل دخول 💎',
        'toggle-auth-login': 'ليس لديك حساب؟ سجل الآن',
        'toggle-auth-signup': 'لديك حساب؟ سجل دخول',
        'how-it-works-title': '💎 كيف يعمل:',
        
        // Home Page
        'header-title': 'مزرعة الألماس فري فاير',
        'welcome-text': 'مرحباً بك،',
        'diamonds-label': 'الألماس',
        'total-ads-label': 'إجمالي الإعلانات',
        'link-ads-label': 'إعلانات الروابط',
        'direct-ads-label': 'الإعلانات المباشرة',
        'progress-title': 'التقدم نحو السحب',
        'watching-link-title': 'مشاهدة إعلان رابط...',
        'watching-direct-title': 'مشاهدة إعلان مباشر...',
        'watching-link-subtitle': 'الرجاء الانتظار 3 ثواني',
        'watching-direct-subtitle': 'الرجاء الانتظار 5 ثواني',
        'link-ads-title': 'إعلانات الروابط',
        'link-ads-desc': 'اضغط على الروابط الخارجية',
        'direct-ads-title': 'الإعلانات المباشرة',
        'direct-ads-desc': 'شاهد الإعلانات المرئية',
        'watch-link-ad': 'شاهد إعلان رابط',
        'watch-direct-ad': 'شاهد إعلان مباشر',
        'withdraw-title': 'سحب الألماس',
        'withdraw-desc-available': 'يمكنك سحب حتى',
        'withdraw-desc-unavailable': 'أكمل',
        'withdraw-desc-unavailable-2': 'إعلان إضافي لفتح السحب',
        'withdraw-btn': 'سحب',
        'account-info-title': 'معلومات الحساب',
        'game-id-text': 'رقم الحساب:',
        'username-text': 'اسم المستخدم:',
        'total-earnings-text': 'إجمالي الأرباح:',
        'logout': 'تسجيل خروج',
        'ready-withdraw': 'جاهز للسحب!',
        'ads-needed': 'إعلان مطلوب',
        'diamonds': 'ألماسة',
        
        // Withdraw Page
        'withdraw-page-title': 'سحب الألماس',
        'back-to-home': '→ العودة للرئيسية',
        'available-diamonds-label': 'الألماس المتاح',
        'ads-completed-label': 'الإعلانات المكتملة',
        'max-withdrawal-label': 'الحد الأقصى للسحب',
        'withdraw-diamonds-title': 'سحب الألماس',
        'withdraw-diamonds-desc': 'اختر كم ألماسة تريد سحبها إلى حساب فري فاير',
        'withdrawing-to-label': 'السحب إلى رقم فري فاير:',
        'available-label': 'المتاح:',
        'withdrawal-amount-label': 'مبلغ السحب:',
        'withdrawal-info-title': 'معلومات السحب:',
        'confirm-withdraw-btn': 'تأكيد سحب',
        'processing-title': 'جاري معالجة السحب...',
        'processing-subtitle': 'الرجاء الانتظار بينما نرسل ألماسك',
        'success-title': 'تم السحب بنجاح!',
        'success-message-1': 'ألماسة تم إرسالها إلى حساب فري فاير',
        'redirect-text': 'إعادة توجيه إلى الصفحة الرئيسية...',
        'not-available-title': 'السحب غير متاح',
        'not-available-message': 'تحتاج إلى إكمال 72 إعلان على الأقل لفتح السحب.',
        
        // Common
        'ads-completed': 'الإعلانات المكتملة:',
        'account': 'الحساب:',
        'lang-switch': 'English'
    }
};

// Application state
let currentPage = 'login';
let currentLang = 'ar'; // Default to Arabic
let user = null;
let isWatchingAd = false;
let currentAdIndex = { link: 0, direct: 0 }; // Track current ad for rotation

// DOM elements
const elements = {
    pages: {
        login: document.getElementById('login-page'),
        home: document.getElementById('home-page'),
        withdraw: document.getElementById('withdraw-page')
    },
    langBtn: document.getElementById('lang-btn'),
    langText: document.getElementById('lang-text')
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    checkStoredUser();
});

function initializeApp() {
    // Set initial language to Arabic
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateLanguage();
    showPage('login');
}

function setupEventListeners() {
    // Language toggle
    elements.langBtn.addEventListener('click', toggleLanguage);
    
    // Login form
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('toggle-auth').addEventListener('click', toggleAuthMode);
    
    // Home page buttons
    const logoutBtn = document.getElementById('logout-btn');
    const watchLinkBtn = document.getElementById('watch-link-ad');
    const watchDirectBtn = document.getElementById('watch-direct-ad');
    const withdrawBtn = document.getElementById('withdraw-btn');
    
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    if (watchLinkBtn) watchLinkBtn.addEventListener('click', () => watchAd('link'));
    if (watchDirectBtn) watchDirectBtn.addEventListener('click', () => watchAd('direct'));
    if (withdrawBtn) withdrawBtn.addEventListener('click', () => navigateToWithdraw());
    
    // Withdraw page
    const backToHomeBtn = document.getElementById('back-to-home');
    const amountSlider = document.getElementById('amount-slider');
    const confirmWithdrawBtn = document.getElementById('confirm-withdraw');
    
    if (backToHomeBtn) backToHomeBtn.addEventListener('click', () => showPage('home'));
    if (amountSlider) amountSlider.addEventListener('input', updateWithdrawAmount);
    if (confirmWithdrawBtn) confirmWithdrawBtn.addEventListener('click', handleWithdraw);
    
    // Quick select buttons
    document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const amount = parseInt(e.target.dataset.amount) || getMaxWithdraw();
            setWithdrawAmount(amount);
        });
    });
}

function checkStoredUser() {
    const cachedUser = localStorage.getItem('freefireUser');
    const cachedLang = localStorage.getItem('preferredLanguage') || 'ar';
    
    currentLang = cachedLang;
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    if (cachedUser) {
        user = JSON.parse(cachedUser);
        showPage('home');
        updateUserDisplay();
    }
    
    updateLanguage();
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('preferredLanguage', currentLang);
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateLanguage();
}

function updateLanguage() {
    const t = translations[currentLang];
    
    // Update all translatable elements
    Object.keys(t).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (element.tagName === 'INPUT' && element.type !== 'submit') {
                element.placeholder = t[key];
            } else {
                element.innerHTML = t[key];
            }
        }
    });
    
    // Update language button text
    if (elements.langText) {
        elements.langText.textContent = t['lang-switch'];
    }
    
    // Update how it works list with emojis and better formatting
    updateHowItWorksList();
    
    // Update withdrawal info list
    updateWithdrawalInfoList();
    
    // Update dynamic content if user exists
    if (user) {
        updateUserDisplay();
    }
}

function updateHowItWorksList() {
    const list = document.getElementById('how-it-works-list');
    if (!list) return;
    
    const items = currentLang === 'en' ? [
        '💎 Watch ads to earn diamonds',
        '🔗 Link ads = 1 diamond each', 
        '📺 Direct ads = 2 diamonds each',
        '✅ Minimum 72 ads to withdraw',
        '🎯 Maximum withdrawal: 102 diamonds'
    ] : [
        '💎 شاهد الإعلانات لكسب الألماس',
        '🔗 إعلانات الروابط = 1 ألماسة لكل إعلان',
        '📺 الإعلانات المباشرة = 2 ألماسة لكل إعلان', 
        '✅ الحد الأدنى 72 إعلان للسحب',
        '🎯 الحد الأقصى للسحب: 102 ألماسة'
    ];
    
    list.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}

function updateWithdrawalInfoList() {
    const list = document.getElementById('withdrawal-info-list');
    if (!list) return;
    
    const items = currentLang === 'en' ? [
        '⏰ Diamonds will be added to your FreeFire account within 24 hours',
        '💎 Maximum withdrawal per session: 102 diamonds',
        '🔒 Make sure your Game ID is correct before confirming',
        '⚠️ Withdrawals cannot be cancelled once processed'
    ] : [
        '⏰ سيتم إضافة الألماس إلى حساب فري فاير خلال 24 ساعة',
        '💎 الحد الأقصى للسحب لكل جلسة: 102 ألماسة',
        '🔒 تأكد من صحة رقم الحساب قبل التأكيد',
        '⚠️ لا يمكن إلغاء السحب بعد المعالجة'
    ];
    
    list.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}

function showPage(pageId) {
    // Hide all pages
    Object.values(elements.pages).forEach(page => {
        if (page) page.classList.remove('active');
    });
    
    // Show requested page
    if (elements.pages[pageId]) {
        elements.pages[pageId].classList.add('active');
        currentPage = pageId;
    }
}

function handleLogin(e) {
    e.preventDefault();
    
    const gameId = document.getElementById('game-id').value.trim();
    const username = document.getElementById('username').value.trim();
    
    if (gameId && username) {
        user = {
            gameId,
            username,
            diamonds: 0,
            completedAds: 0,
            linkAdsCompleted: 0,
            directAdsCompleted: 0,
            joinDate: new Date().toISOString()
        };
        
        localStorage.setItem('freefireUser', JSON.stringify(user));
        showPage('home');
        updateUserDisplay();
        
        // Show welcome animation
        showWelcomeAnimation();
    }
}

function showWelcomeAnimation() {
    // Simple welcome message (you can enhance this)
    setTimeout(() => {
        const message = currentLang === 'ar' 
            ? `🎉 مرحباً ${user.username}! ابدأ بمشاهدة الإعلانات لكسب الألماس 💎` 
            : `🎉 Welcome ${user.username}! Start watching ads to earn diamonds 💎`;
        console.log(message);
    }, 500);
}

function toggleAuthMode() {
    const toggleBtn = document.getElementById('toggle-auth');
    const submitBtn = document.getElementById('login-submit');
    
    if (!toggleBtn || !submitBtn) return;
    
    const isLogin = submitBtn.textContent.includes('دخول') || submitBtn.textContent.includes('Login');
    
    if (isLogin) {
        toggleBtn.textContent = translations[currentLang]['toggle-auth-signup'];
        submitBtn.innerHTML = currentLang === 'en' ? '💎 Sign Up 💎' : '💎 إنشاء حساب 💎';
    } else {
        toggleBtn.textContent = translations[currentLang]['toggle-auth-login'];
        submitBtn.innerHTML = translations[currentLang]['login-submit'];
    }
}

function handleLogout() {
    localStorage.removeItem('freefireUser');
    user = null;
    showPage('login');
    
    // Reset form
    const gameIdInput = document.getElementById('game-id');
    const usernameInput = document.getElementById('username');
    if (gameIdInput) gameIdInput.value = '';
    if (usernameInput) usernameInput.value = '';
}

function updateUserDisplay() {
    if (!user) return;
    
    // Update header
    const usernameDisplay = document.getElementById('username-display');
    if (usernameDisplay) usernameDisplay.textContent = user.username;
    
    // Update stats with animation
    updateStatWithAnimation('diamonds-count', user.diamonds);
    updateStatWithAnimation('total-ads-count', user.completedAds);
    updateStatWithAnimation('link-ads-count', user.linkAdsCompleted);
    updateStatWithAnimation('direct-ads-count', user.directAdsCompleted);
    
    // Update progress
    updateProgressBar();
    
    // Update withdrawal section
    updateWithdrawalSection();
    
    // Update account info
    const gameIdDisplay = document.getElementById('display-game-id');
    const usernameDisplayInfo = document.getElementById('display-username');
    const earningsDisplay = document.getElementById('display-earnings');
    
    if (gameIdDisplay) gameIdDisplay.textContent = user.gameId;
    if (usernameDisplayInfo) usernameDisplayInfo.textContent = user.username;
    if (earningsDisplay) earningsDisplay.textContent = user.diamonds;
    
    // Update withdraw page if visible
    if (currentPage === 'withdraw') {
        updateWithdrawPageDisplay();
    }
}

function updateStatWithAnimation(elementId, newValue) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const currentValue = parseInt(element.textContent) || 0;
    if (currentValue === newValue) return;
    
    // Simple animation
    const duration = 500;
    const startTime = Date.now();
    const difference = newValue - currentValue;
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentStep = Math.round(currentValue + (difference * progress));
        element.textContent = currentStep;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    animate();
}

function updateProgressBar() {
    const progress = Math.min((user.completedAds / 72) * 100, 100);
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const progressPercent = document.getElementById('progress-percent');
    const progressBadge = document.getElementById('progress-badge');
    
    if (progressFill) {
        progressFill.style.width = `${progress}%`;
    }
    
    const t = translations[currentLang];
    if (progressText) {
        progressText.textContent = `${t['ads-completed']} ${user.completedAds}/72`;
    }
    if (progressPercent) {
        progressPercent.textContent = `${Math.round(progress)}%`;
    }
    
    const canWithdraw = user.completedAds >= 72 && user.diamonds > 0;
    
    if (progressBadge) {
        if (canWithdraw) {
            progressBadge.textContent = `🎉 ${t['ready-withdraw']}`;
            progressBadge.classList.add('ready');
        } else {
            const needed = 72 - user.completedAds;
            progressBadge.textContent = `${needed} ${t['ads-needed']}`;
            progressBadge.classList.remove('ready');
        }
    }
}

function updateWithdrawalSection() {
    const withdrawDesc = document.getElementById('withdraw-desc');
    const withdrawBtn = document.getElementById('withdraw-btn');
    const canWithdraw = user.completedAds >= 72 && user.diamonds > 0;
    const t = translations[currentLang];
    
    if (withdrawDesc && withdrawBtn) {
        if (canWithdraw) {
            const maxWithdraw = Math.min(user.diamonds, 102);
            withdrawDesc.textContent = `${t['withdraw-desc-available']} ${maxWithdraw} ${t['diamonds']} 💎`;
            withdrawBtn.disabled = false;
        } else {
            const needed = 72 - user.completedAds;
            withdrawDesc.textContent = `${t['withdraw-desc-unavailable']} ${needed} ${t['withdraw-desc-unavailable-2']}`;
            withdrawBtn.disabled = true;
        }
    }
}

function watchAd(type) {
    if (isWatchingAd) return;
    
    // Get current ad from rotation
    const currentAd = getCurrentAd(type);
    
    // Generate unique reward ID for this ad view
    const rewardId = Date.now() + '_' + type + '_' + currentAd.reward;
    
    // Store pending reward
    pendingRewards.push({
        id: rewardId,
        type: type,
        reward: currentAd.reward,
        timestamp: Date.now()
    });
    localStorage.setItem('pendingRewards', JSON.stringify(pendingRewards));
    
    // Open the actual ad URL in new tab
    const adWindow = window.open(currentAd.url, '_blank', 'noopener,noreferrer');
    
    // Show message that ad was opened
    const message = currentLang === 'ar' 
        ? `🔗 تم فتح الإعلان! عد إلى هذه الصفحة للحصول على ${currentAd.reward} ألماسة 💎`
        : `🔗 Ad opened! Return to this page to claim ${currentAd.reward} diamond${currentAd.reward > 1 ? 's' : ''} 💎`;
    
    // You can enhance this with a toast notification
    alert(message);
    
    // Set flag to prevent multiple clicks
    isWatchingAd = true;
    
    // Re-enable after 3 seconds to prevent spam
    setTimeout(() => {
        isWatchingAd = false;
    }, 3000);
}

// Check for pending rewards when page gets focus (user returns)
window.addEventListener('focus', function() {
    // Check if user has pending rewards to claim
    if (pendingRewards.length > 0 && user) {
        // Process all pending rewards
        let totalReward = 0;
        let linkRewards = 0;
        let directRewards = 0;
        
        pendingRewards.forEach(reward => {
            // Only claim rewards that are at least 5 seconds old to ensure user had time to view ad
            if (Date.now() - reward.timestamp > 5000) {
                totalReward += reward.reward;
                
                if (reward.type === 'link') {
                    linkRewards++;
                } else {
                    directRewards++;
                }
            }
        });
        
        if (totalReward > 0) {
            // Update user data
            user.diamonds += totalReward;
            user.completedAds += (linkRewards + directRewards);
            user.linkAdsCompleted += linkRewards;
            user.directAdsCompleted += directRewards;
            
            // Save updated user data
            localStorage.setItem('freefireUser', JSON.stringify(user));
            
            // Clear claimed rewards
            pendingRewards = pendingRewards.filter(reward => Date.now() - reward.timestamp <= 5000);
            localStorage.setItem('pendingRewards', JSON.stringify(pendingRewards));
            
            // Update display
            updateUserDisplay();
            
            // Show success message
            const message = currentLang === 'ar' 
                ? `🎉 رائع! حصلت على ${totalReward} ألماسة 💎`
                : `🎉 Great! You earned ${totalReward} diamond${totalReward > 1 ? 's' : ''} 💎`;
            
            // Show success notification
            showClaimNotification(message, totalReward);
        }
    }
});

// Function to show claim notification
function showClaimNotification(message, reward) {
    // Create and show notification element
    const notification = document.createElement('div');
    notification.className = 'claim-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">💎</div>
            <div class="notification-message">${message}</div>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
        color: white;
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(22, 163, 74, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        font-family: 'Tajawal', sans-serif;
        max-width: 300px;
    `;
    
    // Add animation styles if not already added
    if (!document.getElementById('notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            .notification-icon {
                font-size: 24px;
            }
            .claim-notification {
                direction: ${currentLang === 'ar' ? 'rtl' : 'ltr'};
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Clean up old pending rewards (older than 1 hour)
function cleanupOldRewards() {
    const oneHourAgo = Date.now() - (60 * 60 * 1000);
    pendingRewards = pendingRewards.filter(reward => reward.timestamp > oneHourAgo);
    localStorage.setItem('pendingRewards', JSON.stringify(pendingRewards));
}

// Run cleanup on page load
cleanupOldRewards();

function getCurrentAd(type) {
    const adList = type === 'link' ? advertisements.linkAds : advertisements.directAds;
    const currentIndex = currentAdIndex[type];
    const ad = adList[currentIndex];
    
    // Rotate to next ad
    currentAdIndex[type] = (currentIndex + 1) % adList.length;
    
    return ad;
}

function completeAdWatching(type, reward) {
    // Update user data
    user.diamonds += reward;
    user.completedAds += 1;
    
    if (type === 'link') {
        user.linkAdsCompleted += 1;
    } else {
        user.directAdsCompleted += 1;
    }
    
    // Save to localStorage
    localStorage.setItem('freefireUser', JSON.stringify(user));
    
    // Update display
    updateUserDisplay();
    
    // Hide watching animation
    const adWatching = document.getElementById('ad-watching');
    const adOptions = document.getElementById('ad-options');
    
    if (adWatching) adWatching.style.display = 'none';
    if (adOptions) adOptions.style.display = 'grid';
    
    isWatchingAd = false;
    
    // Show completion message
    showCompletionMessage(reward);
}

function showCompletionMessage(reward) {
    const message = currentLang === 'ar' 
        ? `🎉 تم! حصلت على ${reward} ألماسة 💎`
        : `🎉 Complete! You earned ${reward} diamond${reward > 1 ? 's' : ''} 💎`;
    
    // You can enhance this with a modal or toast notification
    console.log(message);
}

function navigateToWithdraw() {
    const canWithdraw = user.completedAds >= 72 && user.diamonds > 0;
    
    if (canWithdraw) {
        showPage('withdraw');
        updateWithdrawPageDisplay();
    }
}

function updateWithdrawPageDisplay() {
    if (!user) return;
    
    const maxWithdraw = Math.min(user.diamonds, 102);
    const canWithdraw = user.completedAds >= 72 && user.diamonds > 0;
    
    // Update stats
    const withdrawDiamonds = document.getElementById('withdraw-diamonds');
    const withdrawAds = document.getElementById('withdraw-ads'); 
    const maxWithdrawAmount = document.getElementById('max-withdraw-amount');
    
    if (withdrawDiamonds) withdrawDiamonds.textContent = user.diamonds;
    if (withdrawAds) withdrawAds.textContent = user.completedAds;
    if (maxWithdrawAmount) maxWithdrawAmount.textContent = maxWithdraw;
    
    // Update game ID display
    const withdrawGameId = document.getElementById('withdraw-game-id');
    const withdrawAccount = document.getElementById('withdraw-account');
    const availableDiamonds = document.getElementById('available-diamonds');
    
    if (withdrawGameId) withdrawGameId.textContent = user.gameId;
    if (withdrawAccount) {
        withdrawAccount.textContent = `${translations[currentLang]['account']} ${user.username}`;
    }
    if (availableDiamonds) availableDiamonds.textContent = `${user.diamonds} 💎`;
    
    // Show/hide appropriate sections
    const withdrawalForm = document.getElementById('withdrawal-form');
    const notAvailable = document.getElementById('withdrawal-not-available');
    
    if (withdrawalForm && notAvailable) {
        if (canWithdraw) {
            withdrawalForm.style.display = 'flex';
            notAvailable.style.display = 'none';
            
            // Setup slider
            const slider = document.getElementById('amount-slider');
            if (slider) {
                slider.max = maxWithdraw;
                slider.value = Math.min(maxWithdraw, 1);
                updateWithdrawAmount();
            }
        } else {
            withdrawalForm.style.display = 'none';
            notAvailable.style.display = 'block';
            
            const needed = 72 - user.completedAds;
            const adsNeededBadge = document.getElementById('ads-needed-badge');
            if (adsNeededBadge) {
                adsNeededBadge.textContent = `${needed} ${translations[currentLang]['ads-needed']}`;
            }
        }
    }
}

function updateWithdrawAmount() {
    const slider = document.getElementById('amount-slider');
    const selectedAmount = document.getElementById('selected-amount');
    const confirmAmount = document.getElementById('confirm-amount');
    const maxLabel = document.getElementById('max-label');
    
    if (!slider) return;
    
    const amount = parseInt(slider.value);
    const maxWithdraw = getMaxWithdraw();
    
    if (selectedAmount) selectedAmount.textContent = `${amount} 💎`;
    if (confirmAmount) confirmAmount.textContent = amount;
    if (maxLabel) maxLabel.textContent = `${maxWithdraw} 💎 (Max)`;
    
    // Update quick select buttons
    document.querySelectorAll('.quick-btn').forEach(btn => {
        const btnAmount = parseInt(btn.dataset.amount);
        if (btnAmount && btnAmount > maxWithdraw) {
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }
    });
}

function setWithdrawAmount(amount) {
    const maxWithdraw = getMaxWithdraw();
    const finalAmount = Math.min(amount, maxWithdraw);
    
    const slider = document.getElementById('amount-slider');
    if (slider) {
        slider.value = finalAmount;
        updateWithdrawAmount();
    }
}

function getMaxWithdraw() {
    return user ? Math.min(user.diamonds, 102) : 0;
}

function handleWithdraw() {
    const slider = document.getElementById('amount-slider');
    if (!slider) return;
    
    const amount = parseInt(slider.value);
    
    if (amount <= 0 || amount > user.diamonds) return;
    
    // Show processing state
    const withdrawalForm = document.getElementById('withdrawal-form');
    const processingWithdrawal = document.getElementById('processing-withdrawal');
    
    if (withdrawalForm) withdrawalForm.style.display = 'none';
    if (processingWithdrawal) processingWithdrawal.style.display = 'block';
    
    // Simulate processing
    setTimeout(() => {
        // Update user data
        user.diamonds -= amount;
        localStorage.setItem('freefireUser', JSON.stringify(user));
        
        // Show success state
        if (processingWithdrawal) processingWithdrawal.style.display = 'none';
        const withdrawalSuccess = document.getElementById('withdrawal-success');
        if (withdrawalSuccess) withdrawalSuccess.style.display = 'block';
        
        // Update success message
        const successAmount = document.getElementById('success-amount');
        const successGameId = document.getElementById('success-game-id');
        
        if (successAmount) successAmount.textContent = amount;
        if (successGameId) successGameId.textContent = user.gameId;
        
        // Redirect after 3 seconds
        setTimeout(() => {
            if (withdrawalSuccess) withdrawalSuccess.style.display = 'none';
            showPage('home');
            updateUserDisplay();
        }, 3000);
        
    }, 2000);
}