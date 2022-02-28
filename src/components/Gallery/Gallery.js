import { useState } from 'react';
import ImagePopup from "../ImagePopup/ImagePopup";
import { IMAGES } from '../../Images';

export default function Gallery() {
    const [popupState, setPopupState] = useState(false);
    const [imagesrc, setImagescr] = useState('');
    const [imagedesc, setImagedesc] = useState('');

    function togglePopup(imagesrc, imagedesc) {
        setPopupState(!popupState);
        setImagescr(imagesrc);
        setImagedesc(imagedesc);
    }
    return (
        <div className="gallery-grid">
            {IMAGES
                .map((image, index) => {
                    return (
                        <figure key={index} className="gallery-grid__item" onClick={() => togglePopup(image.imagescr, image.description)}>
                            <img className="gallery-grid__image" src={image.imagescr}  alt={image.description}/>
                            <figcaption className="caption">{image.description}</figcaption>
                        </figure>
                    );
                })}
            <div className={"popupoverlay " + (popupState ? "open" :  "closed")} data-testid="popupcontainer" >
                {popupState ? <ImagePopup  togglePopup={togglePopup} popup={popupState} imagesrc={imagesrc} imagedesc={imagedesc}/> : null}
            </div>
        </div>
    )
}


