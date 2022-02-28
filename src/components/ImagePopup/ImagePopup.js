import React  from "react";

function ImagePopup(props) {
    return (
        <div className="popup">
            <div className="popup__container">
                <button className="popup__close" onClick={()=> props.togglePopup()} data-testid="closeBtn">
                    <span>X</span>
                </button>
                <div className="popup__body">
                    <img data-testid="image" src={props.imagesrc} className="popup__image"/>
                    <span data-testid="desc" className="caption">{props.imagedesc}</span>
                </div>
            </div>
        </div>
    )
}




export default React.memo(ImagePopup);