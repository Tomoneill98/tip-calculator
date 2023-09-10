import React from "react";

const tipAmount = [
5,10,15,20,25, 'Custom'
]


function Tip() {
    return (
        <div className="tip-buttons">
            {tipAmount.map((amount, index) => (
                <button className="tip-amount" key={index} type="button">{amount}</button>
            ))}
        </div>
    )
}

export default Tip