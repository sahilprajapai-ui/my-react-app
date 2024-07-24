import React ,{ useState } from "react";
function LikeBtn() {
    const [color, setColor] = useState("blue");

    const changeClr = () => {
        setColor(color === "blue" ? "red" : "blue");
    };

    const [isAnimated, setIsAnimated] = useState(false);
    
    const makeanimate = () => {
        changeClr()
        anime()
    }

    const anime = () => {
        color === "blue" ? setIsAnimated(true) : setIsAnimated(false)
    }

    return (
        <div  onClick={makeanimate}  className={`box ${isAnimated ? 'animated' : ''}`}>
         <svg width="40px" height="50px" viewBox="0 0 12 12" enableBackground="new 0 0 12 12" id="like" version="1.1" xmlSpace="preserve">
            <path d="M8.5,1C7.5206299,1,6.6352539,1.4022217,6,2.0504761C5.3648071,1.4022827,4.4793701,1,3.5,1C1.5670166,1,0,2.5670166,0,4.5S2,8,6,11c4-3,6-4.5670166,6-6.5S10.4329834,1,8.5,1z" fill={color} />
        </svg>
        </div>
    )
}

export default LikeBtn;