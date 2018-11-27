import React from "react";
import side1 from "../../../assets/img/side1.png";
import side2 from "../../../assets/img/side2.png";
import side3 from "../../../assets/img/side3.png";
import side4 from "../../../assets/img/side4.png";
import side5 from "../../../assets/img/side5.png";

class Recommend extends React.Component{

    render(){
        return (
            <div className="recomm-wrap">
                <img src={side1} alt="简书"/>
                <img src={side2} alt="简书"/>
                <img src={side3} alt="简书"/>
                <img src={side4} alt="简书"/>
                <img src={side5} alt="简书"/>
            </div>
        )
    }
}

export default Recommend;