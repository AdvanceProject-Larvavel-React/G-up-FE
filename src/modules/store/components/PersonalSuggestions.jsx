

import '../styles/PersonalSuggestions.css';

const PersonalSuggestions = () => {
    const suggestions = [
        {
            image: 'product1.jpg',
            title: '09-Skin White in Creamy Pack Whiteout',
            price: '$24.00',
        },
        // Add more suggestion data here
    ];
    return (
        <div className="personal-suggestions">
            <h2 className="title">PERSONAL SUGGESTIONS FOR YOU</h2>
            <div className="suggestion-grid">
                {suggestions.map((suggestion, index) => (
                    <div key={index} className="suggestion-card">
                        <img src={suggestion.image} alt={suggestion.name} className="suggestion-image" />
                        <h3 className="suggestion-title">{suggestion.name}</h3>
                        <p className="suggestion-price">${suggestion.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

 export default PersonalSuggestions;



