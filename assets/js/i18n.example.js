/**
 * خطة ترجمة مستقبلية — هذا الملف غير محمل في index.html.
 * احفظ معرفات الأسئلة والإجابات ثابتة عند إضافة لغة جديدة.
 * ربط المفاتيح بالقواميس يسمح بترجمة الواجهة دون تغيير التصحيح والمحاكاة.
 */
const EXAMPLE_TRANSLATIONS = {
  ar: {home: 'الرئيسية', learning: 'التعلم', quiz: 'اختبار'},
  en: {home: 'Home', learning: 'Learning', quiz: 'Quiz'}
};
function exampleTranslate(key, lang='ar') {
  return EXAMPLE_TRANSLATIONS[lang]?.[key] ?? EXAMPLE_TRANSLATIONS.ar[key] ?? key;
}
