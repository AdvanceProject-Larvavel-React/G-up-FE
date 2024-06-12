import { Switch } from 'antd';
import { useState } from 'react';

export const ColorThemeSettings = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div style={styles.container}>
      <span style={styles.label}>This is Dark/Light theme icon for Super Admin:</span>
      <Switch
        checkedChildren="🌙"
        unCheckedChildren="☀️"
        checked={darkMode}
        onChange={handleThemeChange}
        style={styles.switch}
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  label: {
    marginRight: '10px',
  },
  switch: {
    marginLeft: '30px',
  },
};