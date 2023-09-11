import Reset from "./Reset"
import React from "react"

function Display() {
    return (
        <div className="display">
                <div className="display-row">
                        <div className="display-label">
                            <p className="header">Tip amount</p>
                            <p className="unit">/person</p>
                        </div>
                            <p className="display-amount">£0.00</p>
                        </div>
                    <div className="display-row">
                           <div className="display-label">
                            <p className="header">Total</p>
                            <p className="unit">/person</p>
                        </div>
                            <p className="display-amount">£0.00</p>
                    </div>
                    <Reset />
            </div>
     
    )
}

export default Display