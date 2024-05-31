import toast, { Toaster} from "react-hot-toast";


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
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="searchImg"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit">
                Search
                </button>
                <Toaster/>
            </form>
        </header>
    )
}