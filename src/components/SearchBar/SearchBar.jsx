import toast, { Toaster} from "react-hot-toast";
import css from "./SearchBar.module.css";


export default function SearchBar({ onSearch }) {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const searchImg = form.elements.searchImg.value;

        if (searchImg.trim() === "") {
            toast("Please enter a search term!")
            return;
        }

        onSearch(searchImg);
        form.reset();
    };

    return (
        <header className={css.header}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="searchImg"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    className={css["search-input"]}
                />
                <button className={css["search-btn"]} type="submit">
                Search
                </button>
            
            </form>
        </header>
    )
}