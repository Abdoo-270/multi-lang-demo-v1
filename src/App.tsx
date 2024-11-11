import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const {t, i18n} = useTranslation();
  const onClickLanguageChane = (e: any) => {
    const language = e.target.value
    i18n.changeLanguage(language)
  }
  return (
    <>
      <h1>Demo</h1>
      <select onChange={onClickLanguageChane}>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>
      <p>
        {t("example")}
      </p>
    </>
  );
}

export default App;
