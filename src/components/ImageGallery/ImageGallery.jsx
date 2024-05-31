import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, onImageClick }) {
    return (
        <ul>
            {items.map(({ id, urls, slug }) => (
                <li key={id}>
                    <ImageCard imgLink={urls} imgDescr={slug} onClick={onImageClick} />
                </li>
            ))}</ul>
    );
}