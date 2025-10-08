import React from 'react';
import { useTranslation } from 'react-i18next';

const Translator = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <button onClick={() => changeLanguage(i18n.language === 'en' ? 'ur' : 'en')}>
      {i18n.language === 'en' ? 'اردو' : 'English'}
    </button>
  );
};

export default Translator;