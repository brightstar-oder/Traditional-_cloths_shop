import en from "../public/locales/en/translation.json";
import am from "../public/locales/am/translation.json";
import { useTranslation } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "am",
  resources: {
    en: { translation: en },
    am: { translation: am }
  }
});

export default i18n;