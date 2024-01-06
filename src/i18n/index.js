import { createI18n } from "vue-i18n";
import pluralRules from "./rules/pluralization";
import numberFormats from "./rules/numbers.js";
import datetimeFormats from "./rules/datetime.js";
import _en from "./locales/en.json" assert { type: "json" };
import _tr from "./locales/tr.json" assert { type: "json" };

const i18n = createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  // forceStringify: false,
  messages: { tr: _tr, en: _en },
  runtimeOnly: false,
  pluralRules,
  numberFormats,
  datetimeFormats,
});
/**
 * import oloma-va locales
 */
import { en, tr } from "vuetify-admin/src/locales";
/**
 * va messages
 */
const vaMessages = { en, tr };
/**
 * load va i18n locales
 */
Object.keys(vaMessages).forEach((locale) => {
  i18n.global.mergeLocaleMessage(locale, { va: vaMessages[locale] });
})
export default i18n