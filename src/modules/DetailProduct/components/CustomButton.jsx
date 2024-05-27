import '../styles/CustomButton.css';

const CustomButton = () => {
  return (
    <button className="custom-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#ff007f"
        className="custom-button-icon"
      >
        <path d="M7 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm0 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10-2c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm0 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-9.83-6l1.58-7H19V7H7.33l-.6-3H4v2h1.33l3.6 8.42-1.35 2.58c-.25.47-.41 1.01-.41 1.58 0 1.66 1.34 3 3 3h12v-2H11c-.55 0-1-.45-1-1 0-.1.02-.19.04-.28L10.17 14h8.59c.71 0 1.3-.46 1.58-1.12l3.24-7.15c.07-.15.12-.32.12-.5 0-.83-.67-1.5-1.5-1.5H5.21l-.94-2H1V3h3.31l3.75 8h8.58l-1.16 2.52-8.41 1.98z"/>
      </svg>
    </button>
  );
};

export default CustomButton;
