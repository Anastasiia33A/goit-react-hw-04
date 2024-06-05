import css from '../ImageCard/ImageCard.module.css';

export default function ImageCard({ imgUrl, imgDescr, onClick }) {
    const handleClick = () => {
        onClick(imgUrl);
    };
    return (
        <div className={css["image-card"]}>
            <img
                src={imgUrl}
                alt={imgDescr}
                onClick={handleClick} />
        </div>
    );
}