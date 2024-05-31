export default function ImageCard({ imgUrl, imgDescr, onClick }) {
    const handleClick = () => {
        onClick(imgUrl);
    };
    return (
        <div>
            <img src={imgUrl}
                alt={imgDescr}
                onClick={handleClick} />
        </div>
    );
}