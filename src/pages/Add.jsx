import React from 'react';

const AddMovie = () => {
  return (
    <div style={styles.container}>
      {/* Left Section: Circular button */}
      <div style={styles.circleContainer}>
        <button style={styles.circleButton}>Add Movie!</button>
      </div>

      {/* Right Section: Form fields */}
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Add a new movie!</h1>
        <input
          type="text"
          placeholder="Movie Name"
          style={styles.inputField}
        />
        <input
          type="text"
          placeholder="Movie picture url"
          style={styles.inputField}
        />
        <textarea
          placeholder="Description"
          style={styles.textarea}
        />
      </div>
    </div>
  );
};

// Example inline CSS. Feel free to move it to an external .css file.
const styles = {
  container: {
    backgroundColor: '#9ad0ec', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    width: '100%',
    minHeight: '300px',
  },
  circleContainer: {
    marginRight: '2rem',
  },
  circleButton: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    border: 'none',
    fontSize: '1.1rem',
    cursor: 'pointer',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '300px',
  },
  title: {
    marginBottom: '1rem',
  },
  inputField: {
    marginBottom: '1rem',
    padding: '0.5rem',
    fontSize: '1rem',
  },
  textarea: {
    marginBottom: '1rem',
    padding: '0.5rem',
    height: '80px',
    fontSize: '1rem',
  },
};

export default AddMovie;
