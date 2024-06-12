const FollowBtn = () => {
    return (
        <div style={styles.container}>
            <button style={styles.button}>
                <span style={styles.text}>follow</span>
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        marginTop: '50px',
        marginRight: '60px',
        

    },
    button: {
        backgroundColor: '#FF4500',
        border: 'none',
        borderRadius: '4px',
        color: '#FFFFFF',
        cursor: 'pointer',
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: '#FF6347',
        },
    },
    text: {
        textTransform: 'uppercase',
    },
 
};

export default FollowBtn;
