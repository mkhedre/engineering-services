import { extend, groupedTranslations } from '@mongez/localization';
import { arTranslation, enTranslation } from '@mongez/validator';

extend('en', enTranslation);
extend('ar', arTranslation);

// Add only common localization
groupedTranslations({
  appName: {
    ar: process.env.REACT_APP_NAME as string,
  },
  loading: {
    en: 'Loading...',
    ar: 'جار التحميل...',
  },
  home: {
    en: 'Home',
    ar: 'الرئيسية',
  },
  login: {
    en: 'Login',
    ar: 'تسجيل الدخول',
  },
  pleaseFillLoginData: {
    en: 'Please fill login data',
    ar: 'نرجو من سيادتكم ملئ البيانات لتسجيل الدخول',
  },
  pleaseFillRegisterData: {
    en: 'Please fill login data',
    ar: 'نرجو من سيادتكم ملئ البيانات لتسجيل الدخول',
  },
  name: {
    en: 'Name',
    ar: 'الاسم',
  },
  confirmPassword: {
    en: 'Confirm Password',
    ar: 'تأكيد كلمة المرور',
  },
  association: {
    en: 'Association',
    ar: 'الجمعية',
  },
  phoneNumber: {
    en: 'Phone Number',
    ar: 'رقم الهاتف',
  },
  thanksForRegistration: {
    en: 'Thanks for registration',
    ar: 'شكرا لتسجيلكم, سيتم مراجعة الحساب من قبل الادارة لكي يتم تفعيله.',
  },
  youHaveAccount: {
    en: 'You have account?',
    ar: 'لديك حساب بالفعل؟',
  },
  projects: {
    en: 'Projects',
    ar: 'المشاريع',
  },
  joinUsNow: {
    en: 'joinUsNow',
    ar: 'انضم لنا الآن',
  },
  moreServices: {
    en: 'More Services',
    ar: 'المزيد من الخدمات',
  },
  exploreCompanies: {
    en: 'Explore Companies',
    ar: 'استكشف الشركات',
  },
  EngineeringServices: {
    en: 'Engineering Services',
    ar: 'خدمات هندسية',
  },
  moreOfficces: {
    en: 'More Officcess',
    ar: 'المزيد من المكاتب',
  },
  categoriesSections: {
    en: 'Categories Sections',
    ar: 'أقسام المنصه',
  },
  moreCategories: {
    en: 'More Categories',
    ar: 'المزيد من الاقسام',
  },
  hasOportunity: {
    en: 'You have the opportunity to join the Studio and View platform Your business on thousands of orders and get more from Customers interested in your services',
    ar: 'لديك الفرصة لتقوم بالانضمام الي منصة استوديو وعرض اعمالك علي آلاف الطلبات والحصول علي المزيد مـــــن العملاء المهتمين بخدماتك',
  },
  joinAsOffice: {
    en: 'Are you the owner of an engineering office? Join Now',
    ar: 'انت صاحب مكتب هندسي؟ قم بالانضمام الآن',
  },
  register: {
    en: 'register',
    ar: 'تسجيل دخول',
  },
  newRegistration: {
    en: 'new قegistration',
    ar: 'تسجيل جديد',
  },
  aggreeWithconditions: {
    en: 'aggree With conditions',
    ar: 'موافق على الشروط والاحكام',
  },
  createAccount: {
    en: 'create Account',
    ar: 'انشاء الحساب',
  },
  haveAccount: {
    en: 'have Account',
    ar: 'لدي حساب',
  },
  verifyCode: {
    en: 'verify Code',
    ar: 'كود التحقيق',
  },
  send: {
    en: 'send',
    ar: 'ارسال',
  },
  resend: {
    en: 'resend',
    ar: 'إعادة ارسال',
  },
  welcome: {
    en: 'welcome',
    ar: 'مرحباََ بك',
  },
  forgetPassword: {
    en: 'forget your Password?',
    ar: 'هل نسيت كلمة المرور؟',
  },
  dontHaveAccount: {
    en: 'dont Have Account',
    ar: 'ليس لدى حساب',
  },
  selectFile: {
    en: 'select File',
    ar: 'حدد ملفًا أو قم بسحبه وإفلاته هنا',
  },
  fileDetails: {
    en: 'JPG, PNG or PDF, file size not more than 10MB',
    ar: 'JPG أو PNG أو PDF ، حجم الملف لا يزيد عن 10 ميجابايت',
  },
  firstName: {
    en: 'firstName',
    ar: 'الإسم الاول',
  },
  lastName: {
    en: 'lastName',
    ar: 'اسم العائله',
  },
  messageLabel: {
    en: 'message label',
    ar: 'عنوان الرسالة',
  },
  contactUs: {
    en: 'contact us',
    ar: 'اتصل بنا',
  },
  privacyPolice: {
    en: 'privacy Polices',
    ar: 'سياسة الخصوصيه',
  },
  termsConditions: {
    en: 'terms and Conditions',
    ar: 'الشروط والاحكام',
  },
  initiatives: {
    en: 'Initiatives',
    ar: 'المبادرات',
  },
  agreements: {
    en: 'Agreements',
    ar: 'اتفاقيات الشراكة',
  },
  latestNews: {
    en: 'Latest News',
    ar: 'اخر الأخبار',
  },
  joinNow: {
    en: 'Join Now',
    ar: 'سجل الآن',
  },
  welcomeLogin: {
    en: 'Welcome to login page',
    ar: 'مرحبا بك, تسجيل الدخول',
  },
  somethingWentWrong: {
    en: 'Something Went wrong, please try again later.',
    ar: 'حدث خطأ ما, من فضلك حاول مرة أخرى في وقت لاحق.',
  },
  welcomeBack: {
    en: 'Welcome back %s',
    ar: 'مرحبا بك مجددا %s',
  },
  welcomeRegister: {
    en: 'Welcome to register page',
    ar: 'مرحبا بك, تسجيل جديد',
  },
  email: {
    en: 'Email',
    ar: 'البريد الإلكتروني',
  },
  password: {
    en: 'Password',
    ar: 'كلمة المرور',
  },
  errorHeading: {
    en: 'Error!',
    ar: 'خطأ!',
  },
  categories: {
    en: 'categories',
    ar: 'الأقسام',
  },
  aboutUs: {
    en: 'about us',
    ar: 'من نحن',
  },
  conditionsPage: {
    en: 'conditions ',
    ar: ' الشروط والاحكام',
  },
  privacy: {
    en: 'privacy',
    ar: 'سياسة الخصوصيه ',
  },
  contactUS: {
    en: 'contact uS',
    ar: 'اتصل بنا',
  },
  serviceProvider: {
    en: 'service provider',
    ar: 'مقدم خدمه',
  },
  accessDenied: {
    en: 'Access Denied!',
    ar: 'غير مصرح لك بدخول هذه الصفحة!',
  },
  notFoundPage: {
    en: 'Not Found Page',
    ar: 'الصفحة المطلوبة غير موجودة',
  },
  careers: {
    ar: 'الوظائف',
    en: 'Careers',
  },
  bestOffices: {
    ar: 'افضل المكاتب الهندسيه',
    en: 'best engineering offices',
  },
  whyStudio: {
    ar: 'لماذا تختار منصة استوديو؟',
    en: 'Why choose Studio platform?',
  },
  choseUs1: {
    ar: 'عدد كبير من المكاتب المختلفة والعروض المميزة المناسبة لك',
    en: 'A large number of different offices And special offers suitable for you',
  },
  choseUs2: {
    ar: 'انظمة دفع مختلفة وامـنـــة كلياً لتتناسب مع طريقة دفعك',
    en: 'Different and completely secure payment systems To match your payment method',
  },
  choseUs3: {
    ar: 'مكاتب معتمدة وموثقة ومختبرة من قبل لضمان الجودة والامان',
    en: 'Accredited, documented and tested offices By to ensure quality and safety',
  },
  not1: {
    ar: 'توجد رسالة غير مقروؤة من هيثم محمد صاحب مشروع انشاء تصميم تطبيق اذهب للشات',
    en: 'There is an unread message from Haitham Mohammed, the owner of the project of creating an application design go to chat',
  },
  doProjectsRemotely: {
    ar: 'قم بمشاريعك عن بُعد',
    en: 'do your Projects Remotely',
  },
  askEasly: {
    ar: 'اطلب بسهولة الخدمات الھندسیة من المكاتب المعتمدة الاحترافية    ',
    en: 'Easily order engineering services from professional authorized offices ',
  },
  askAny: {
    ar: 'اطلب ما تريدة من الخدمات الهندسية من خلال مكاتب مختلفة واحترافية ومعتمدة وقم بمشروعك عن بُعد بأمان وبسهولة تامة    ',
    en: 'Order what you want from engineering services through different and professional offices And certified and do your project remotely safely and easily',
  },
  back: {
    ar: 'الرجوع',
    en: 'Back',
  },
  paymentMethods: {
    ar: 'وسائل الدفع للمنصه',
    en: 'payment Methods',
  },
  footerWrites: {
    ar: 'جميع الحقوق محفوظه ',
    en: 'Writes',
  },
  phone: {
    ar: 'رقم الجوال',
    en: 'Phone Number',
  },
  attachments: {
    ar: 'إرفاق ملحقات PDF/JPG/PNG',
    en: 'Attach PDF/JPG/PNG attachments',
  },
  skills: {
    ar: 'الخبرات/المهارات',
    en: 'Experience/Skills',
  },
  submit: {
    ar: 'تقديم',
    en: 'Submit',
  },
  // categories
  StudioPlatformSections: {
    ar: 'أقسام منصة استديو',
    en: 'Studio Platform Sections',
  },
  browseSections: {
    ar: 'تصفح كل الاقسام والخدمات للحصول على ما تحتاجه لتنفيذه لمشروعك',
    en: 'Browse all sections and services to get what you need to implement for your project',
  },
  engineeringServices: {
    ar: 'خدمات هندسية ',
    en: 'Engineering Services ',
  },
  engineeringOfficess: {
    ar: 'المكاتب الهندسية',
    en: 'engineering officess ',
  },
  buyService: {
    ar: 'اشترى الخدمه',
    en: 'buy Service',
  },
  askForPrice: {
    ar: 'طلب عرض سعر',
    en: 'ask For Price',
  },
  servicesNum: {
    ar: 'عدد الخدمات',
    en: 'services number',
  },
  addComment: {
    ar: 'اضف تقييم',
    en: 'add comment',
  },
  orderWith: {
    ar: 'الترتيب حسب',
    en: 'order With',
  },
  comments: {
    ar: 'التقييمات',
    en: 'comments',
  },
  allComments: {
    ar: 'كل التعليقات',
    en: 'all comments',
  },
  engineeringPackages: {
    ar: 'الباكدجات',
    en: 'engineering حackages',
  },
  latest: {
    ar: 'الاحدث',
    en: 'latest',
  },
  addServicesToPasket: {
    ar: 'لاضافة الخدمة لسلة برجاء ملئ البيانات',
    en: 'addServicesToPasket',
  },
  addToPasket: {
    ar: 'إضافة لسلة',
    en: 'add To Pasket',
  },
  addBuildingArchtecture: {
    ar: 'رفع مخططات المبني',
    en: 'add Building Archtecture',
  },
  serviceAddedSuccessfully: {
    ar: 'تم إضافة عرض سعر الخدمة انتقل الي سلة المتشريات ',
    en: 'service Added Successfully to Salla',
  },
  goToSalla: {
    ar: 'سلة المشتريات',
    en: 'goToSalla',
  },
  totalServicesPrice: {
    ar: 'اجمالي تكلفة الخدمات',
    en: 'total Services Price',
  },
  sr: {
    ar: 'ر.س',
    en: 'sr',
  },
  price: {
    ar: 'السعر',
    en: 'price',
  },
  tax: {
    ar: 'الضريبة',
    en: 'tax',
  },
  completePaying: {
    ar: 'إكمال عملية الدفع',
    en: 'complete Paying',
  },
  haveCopoun: {
    ar: 'هل لديك كوبون خصم',
    en: 'you have a Copoun',
  },
  coupon: {
    ar: 'كوبون خصم',
    en: 'coupon',
  },
  myPasket: {
    ar: 'سلة مشتريات خدماتي',
    en: 'my Pasket',
  },
  priceOffer: {
    ar: 'طلب عرض سعر',
    en: 'Request a Quote',
  },
  addYourOrderAndGetPrice: {
    ar: 'قم باضافة طلبك واحصل علي عروض اسعار مختلفة من مقدمي الخدمات والمكاتب الهندسية',
    en: 'addYourOrderAndGetPrice',
  },
  addMainInfo: {
    ar: 'اضف المعلومات الاساسية',
    en: 'Add basic information',
  },
  selectService: {
    ar: 'اختر الخدمة',
    en: 'Select Service',
  },
  clickToSelectService: {
    ar: 'اضغط لاختيار خدمة من الخدمات',
    en: 'Click to select a service from the services',
  },
  descripeNeeds: {
    ar: 'وصف المطلوب',
    en: 'Description of the desired',
  },
  writeNeedsHere: {
    ar: 'قم بكتابة تفاصيل المطلوب',
    en: 'Write down the required details',
  },
  addServiceInformation: {
    ar: 'اضف بیانات الخدمه',
    en: 'Add Service Data',
  },
  City: {
    ar: 'المدينة',
    en: 'City',
  },
  neighborhood: {
    ar: 'اختر الحي',
    en: 'Select neighborhood',
  },
  chooseneighborhood: {
    ar: 'اضغط لاختيار الحي',
    en: 'Click to select the neighborhood',
  },
  address: {
    ar: 'العنوان',
    en: 'Address',
  },
  writeAddress: {
    ar: 'قم بكتابة العنوان',
    en: 'Type the address',
  },
  orderType: {
    ar: 'نوع طلب السعر',
    en: 'Quote Request Type',
  },
  publicOrder: {
    ar: 'طلب عام',
    en: 'General Request',
  },
  showOrder: {
    ar: 'اظهار طلبك لكافة المكاتب ومقدمي الخدمات في المنصة لاستقبال عروض متنوعة',
    en: 'Show your request to all offices and service providers on the platform to receive various offers',
  },
  privateOrder: {
    ar: 'طلب مخصص',
    en: 'Custom Request',
  },
  askPriceOffer: {
    ar: 'الاحدث',
    en: 'askPriceOffer',
  },
  files: {
    ar: 'الملفات والوثائق',
    en: 'Files & Documents',
  },
  showCustomOrder: {
    ar: 'اظهار طلبك لمكاتب ومقدمي خدمات تقوم بتحديدهم انت ولا يظهر بشكل عام للجميع',
    en: 'Show your application to offices and service providers that you specify and it is not generally visible to everyone',
  },
  officesOffers: {
    ar: 'عروض المكاتب',
    en: 'Office Offers',
  },
  acceptOffer: {
    ar: 'أوافق علي العرض',
    en: 'I agree to the offer',
  },
  offerIs: {
    ar: 'العرض ب',
    en: 'offer Is',
  },
  OfficeRequirements: {
    ar: 'اشتراطات المكتب الھندسي',
    en: 'Engineering Office Requirements',
  },
  allowedPayments: {
    ar: 'طريقة الدفع المتاحة',
    en: 'allowed Payments',
  },
  bank: {
    ar: 'بنك',
    en: 'bank',
  },
  AccountHolderName: {
    ar: 'اسم صاحب الحساب',
    en: 'Account Holder Name',
  },
  AccountNumber: {
    ar: 'رقم الحساب',
    en: 'Account Number',
  },
  IBANNumber: {
    ar: 'رقم ايبان',
    en: 'IBAN Number',
  },
  Enteryourdetails: {
    ar: 'ادخل بياناتك',
    en: 'Enter your details',
  },
  Selectthebank: {
    ar: 'اختار البنك المراد تحويل اليه',
    en: 'Select the bank you want to transfer to',
  },
  userName: {
    ar: 'اسم المستخدم',
    en: 'user Name',
  },
  Accountnumbertransferredfrom: {
    ar: 'رقم الحساب المحول منه',
    en: 'Account number transferred from',
  },
  Bankfrom: {
    ar: 'البنك المحول منه',
    en: 'Bank from which the transfer',
  },
  ExpiryDate: {
    ar: 'تاريخ الانتهاء',
    en: 'Expiry Date',
  },
  Payment: {
    ar: ' المبلغ المدفوع',
    en: ' Payment',
  },
  ConversionDate: {
    ar: 'تاريخ التحويل',
    en: 'Conversion Date',
  },
  Observations: {
    ar: 'الملاحظات',
    en: 'Observations',
  },
  Attachimage: {
    ar: 'ارفاق صورة التحويل',
    en: 'Attach a transfer image',
  },
  PaymentConfirmation: {
    ar: 'تاكيد الدفع',
    en: 'Payment Confirmation',
  },
  withTax: {
    ar: 'شامل الضربية',
    en: 'Comprehensive Beating',
  },
  Requiredpayment: {
    ar: 'المطلوب دفعه',
    en: 'Required payment',
  },
  totalPrice: {
    ar: 'السعر الكلى',
    en: 'total Price',
  },
  Availablepayment: {
    ar: 'طريقة الدفع المتاحة',
    en: 'Available payment method',
  },
  Walletbalance: {
    ar: 'رصيد من المحفظة',
    en: 'Wallet balance',
  },
  accountType: {
    ar: 'نوع الحساب',
    en: 'Account Type',
  },
  selectAccountType: {
    ar: 'قم باختيار نوع حسابك',
    en: 'Select your account type',
  },
  personalInfo: {
    ar: 'بيانات شخصية',
    en: 'Personal data',
  },
  img_cv: {
    ar: 'صوره الهويه /  وثيقة العمل الحر / الصورة الشخصية',
    en: 'Copy of ID / Freelance Document / Personal Photo',
  },
  Qualifications: {
    ar: 'مؤهلات',
    en: 'Qualifications',
  },
  youDegree: {
    ar: 'الدرجه العلمية  / اثبات الشهاده العمليه للتخصص / شهادة ضريبة القيمه المضافة ',
    en: 'Degree / Proof of practical certificate of specialization / VAT certificate ',
  },
  services_times: {
    ar: 'الخدمات و مواعيد الحجز',
    en: 'Services & Booking Dates',
  },
  workDays: {
    ar: 'مواعيد ايام العمل علي المنصة',
    en: 'Dates of working days on the platform',
  },
  needMoreInfo: {
    ar: 'إذا كنت بحاجة إلى مزيد من المعلومات ، يرجى مراجعة ',
    en: 'If you need more information, please check ',
  },
  FAQpage: {
    ar: 'صفحة الأسئلة الشائعة',
    en: 'FAQ page',
  },
  chooseAccountType: {
    ar: 'حدد نوع الحساب',
    en: 'Select Account Type',
  },
  joinUs: {
    ar: 'انضم الينا',
    en: 'Join Us',
  },
  personProvider: {
    ar: 'حساب مقدم خدمة',
    en: 'Service Provider Account',
  },
  createPersonAccount: {
    ar: 'انشاء حساب فرد لبيع خدمات الهندسية',
    en: 'Create an individual account to sell engineering services',
  },
  companyProvider: {
    ar: 'حساب الشركات',
    en: 'Corporate Account',
  },
  createCompanyAccount: {
    ar: 'إنشاء حساب الشركة لبيع خدماتك الهندسية',
    en: 'Create a company account to sell your engineering services',
  },
  clickHere: {
    ar: 'اضغط هنا',
    en: 'click Here',
  },
  knowall: {
    ar: 'لمعرفة جميع البيانات المطلوبة منك ',
    en: 'To know all the data required of you ',
  },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },// latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },// latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },// latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },// latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },// latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },// latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },// latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },// latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },// latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },// latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },// latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },// latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },// latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },// latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
  // latest: {
  //   ar: 'الاحدث',
  //   en: 'latest',
  // },
});
