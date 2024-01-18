import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='mt-4 d-flex justify-content-center align-items-center '>
      <ul style={styles.pagination}>
        {pageNumbers.map(number => (
          <li key={number} style={styles.pageItem} className='page-item display-6'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
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
    paddingRight:'1rem',
  }
  
}