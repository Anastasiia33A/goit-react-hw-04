export default function LoadMoreBtn({ onClick }) {
   
  return (
    <button className={css.btnmore} type="button" onClick={onClick} >
      Load more
    </button>
  );
}