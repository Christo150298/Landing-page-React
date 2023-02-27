import React from "react";

const Card = (props) => {
    return(
        <div className="col">
            <div className="card" style={{width: "100%", height: "100%"}}> 
                <img className="card-img-top" src={ props.cardContent.image } alt="Card image cap" /> 
                <div className="card-body">
                    <h5 className="card-title">{ props.cardContent.title }</h5>
                    <p className="card-text">{ props.cardContent.content }</p>
                    <a href={ props.cardContent.button.target } className="btn btn-primary">{ props.cardContent.button.text }</a>
                </div>
            </div>
        </div>
    );
}

export default Card;