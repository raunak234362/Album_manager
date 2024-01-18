import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul style={styles.pagination}>
        {pageNumbers.map(number => (
          <li key={number} style={styles.pageItem} className='page-item display-6'>
            <a onClick={() => paginate(number)} href='!#' style={styles.pageLink} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

const styles = {
  pagination: {
    listStyleType: 'none',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  pageItem:{
    backgroundColor:'rgb(69, 134, 139)',
    padding:'15px',
    borderRadius:'30px',
    margin:'.5rem',
    cursor:'pointer'
  },
  pageLink: {
    textDecoration: 'none',
    color: 'white', // Adjust text color for better visibility
  },
  
}