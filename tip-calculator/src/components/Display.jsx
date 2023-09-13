import Reset from "./Reset"
import React from "react"

function Display({total, calculatedTip}) {
    return (
        <div className="display">
                <div className="display-row">
                        <div className="display-label">
                            <p className="header">Tip amount</p>
                            <p className="unit">/person</p>
                        </div>
                            <p className="display-amount">£{calculatedTip}</p>
                        </div>
                    <div className="display-row">
                           <div className="display-label">
                            <p className="header">Total</p>
                            <p className="unit">/person</p>
                        </div>
                            <p className="display-amount">£{total}</p>
                    </div>
                    <Reset />
            </div>
     
    )
}

export default Display