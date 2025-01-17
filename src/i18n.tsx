import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEnglish from "./Translation/English/translation.json"

import translationArabic from "./Translation/Arabic/translation.json"

const resources = {
    en: {
        translation: translationEnglish
    },
    ar: {
        translation:translationArabic
    }
}
i18next.use(initReactI18next).init({
    resources,
    lng:"en", //default language
})

export default i18next