// Navbar component
function Navbar({setAddAlbumPopup}) {
  return (
    <div style={styles.navbar}>
      {/* app title */}
        <div className="appName">Album Manager</div>
        {/* button to add album */}
        <div className="addAlbumBtn">
          <button style={styles.addAlbumBtn} onClick={() => setAddAlbumPopup(true)}>Add Album</button>
        </div>
      </div> 
  )
}

export default Navbar

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(120, 192, 211)',
    fontSize: '2.5rem',
    color: 'white',
    padding: 5,
    fontWeight: 'bold'
  },
  addAlbumBtn: {
    width: '150px',
    height: '45px',
    margin: '10px',
    border: 'none',
    backgroundColor: '#c54873',
    color: 'white',
    borderRadius: '8px',
    fontSize: '20px',
    cursor: 'pointer',
    transition:'.2s ease-in-out'
  },
  addAlbumBtnHover:{
    backgroundColor:'rgb(0, 122, 141)'
  }
}