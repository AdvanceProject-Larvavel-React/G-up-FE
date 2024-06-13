import { Radio } from 'antd';
import  { useState } from 'react';
import styled from 'styled-components';

const LanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  border-radius: 8px;
`;

const RadioButton = styled(Radio)`
  margin-bottom: 8px;
  font-size: 16px;
  color: #333333; 
`;
export const Language = ({ defaultLanguage, onLanguageChange }) => {
  const [language, setLanguage] = useState(defaultLanguage || 'en');

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    if (onLanguageChange) {
      onLanguageChange(selectedLanguage);
    }
  };

  return (
    <LanguageContainer>
      <RadioButton.Group onChange={handleLanguageChange} value={language}>
        <RadioButton value="en">English</RadioButton>
        <RadioButton value="vi">Vietnamese</RadioButton>
      </RadioButton.Group>
    </LanguageContainer>
  );
};
