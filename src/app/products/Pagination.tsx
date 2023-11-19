import '../../assets/styles/main.scss';

type PaginationProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  itemCount?: number;
  itemsPerPage?: number;
  totalItems?: number;
  totalPages?: number;
};

const Pagination = (props: PaginationProps) => {
  const totalPages = Math.ceil(props.totalItems ? props.totalItems / 8 : 0);

  const generatePageNumbers = () => {
    if (props.currentPage) {
      const pageNumbers = [];
      if (totalPages <= 6) {
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        if (props.currentPage <= 2) {
          pageNumbers.push(1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages);
        } else if (props.currentPage === 3) {
          pageNumbers.push(2, 3, 4, '...', totalPages - 2, totalPages - 1, totalPages);
        } else if (props.currentPage >= totalPages - 5) {
          pageNumbers.push(totalPages - 5, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
        } else {
          pageNumbers.push(
            props.currentPage - 1,
            props.currentPage,
            props.currentPage + 1,
            '...',
            totalPages - 2,
            totalPages - 1,
            totalPages,
          );
        }
      }
      return pageNumbers;
    }
  };

  return (
    <div className="pagination-container">
      {generatePageNumbers()?.length ? (
        <button
          onClick={() => props.setCurrentPage(1)}
          disabled={props.currentPage === 1}
          className={props.currentPage === 1 ? 'disabled' : ''}
        >
          First
        </button>
      ) : (
        <></>
      )}

      {generatePageNumbers()?.map((pageNumber, index) => (
        <span
          key={index}
          className={`pagination ${isNaN(Number(pageNumber)) ? 'ellipsis' : ''}`}
          style={{
            color: pageNumber === props.currentPage ? '#4460F7' : '',
          }}
          onClick={() => {
            if (typeof pageNumber === 'number') {
              props.setCurrentPage(pageNumber);
            }
          }}
        >
          {pageNumber}
        </span>
      ))}
      {generatePageNumbers()?.length ? (
        <button
          onClick={() => props.setCurrentPage(totalPages)}
          disabled={props.currentPage === totalPages}
          className={props.currentPage === totalPages ? 'disabled' : ''}
        >
          Last
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Pagination;
