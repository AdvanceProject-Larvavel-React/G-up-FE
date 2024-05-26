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
        <path d="M7 4V2H2v2h5zm15.707 2.293L18 3.586V3H6v.586L1.293 6.293a1 1 0 00-.293.707V8h20V7a1 1 0 00-.293-.707zM3 8H1V7h2v1zm1 0h14v11H4V8zm2 13a2 2 0 104 0H6zm8 0a2 2 0 104 0h-4zM4 19V8h14v11H4zm2-5h3v3H6v-3zm9 0v3h-3v-3h3zm1 0h2v3h-2v-3zm0-5H4v2h14v-2z"/>
      </svg>
    </button>
  );
};
export default CustomButton;
