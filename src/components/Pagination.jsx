import { Link } from "react-router-dom";
export default function Pagination({
  currentPage,
  setCurrentPage,
  numberOfPage,
}) {
  const handleSetPage = function (page) {
    if (page === currentPage) return;
    setCurrentPage(page);
  };

  const paginationEl = Array.from(
    { length: numberOfPage },
    (_, i) => i + 1
  ).map((page) => (
    <li key={page}>
      <Link to={`?page=${page}`} onClick={() => handleSetPage(page)}>
        {page}
      </Link>
    </li>
  ));
  return <ul>{paginationEl}</ul>;
}
