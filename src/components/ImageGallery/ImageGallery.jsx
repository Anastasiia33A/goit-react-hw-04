import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onImageClick }) {
    return (
        <ul className={css["image-gallery"]}>
            {items.map(({ id, urls, slug }) => (
                <li key={id}>
                    <ImageCard  className={css["image-card"]} imgLink={urls.small} imgDescr={slug} onClick={onImageClick} />
                </li>
            ))}</ul>
    );
}