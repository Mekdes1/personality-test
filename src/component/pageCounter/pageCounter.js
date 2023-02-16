import "./pageCounter.css";

export default function PageCounter({ currentPage, totalPage }) {
  return <div className="page-counter">{`${currentPage} / ${totalPage}`}</div>;
}
