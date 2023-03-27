import { Link } from "react-router-dom";
export default function Pagination({ numberOfPage }) {
  const paginationEl = Array.from(
    { length: numberOfPage },
    (_, i) => i + 1
  ).map((page) => (
    <li key={page}>
      <Link to={`?page=${page}`}>{page}</Link>
    </li>
  ));
  return <ul>{paginationEl}</ul>;
}
