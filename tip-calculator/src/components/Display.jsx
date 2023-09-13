import Reset from "./Reset"
import React from "react"

function Display({total, calculatedTip, handleResetButton}) {

    const tipRounded = calculatedTip.toFixed(2)
    const totalRounded = total.toFixed(2)

    return (
        <div className="display">
                <div className="display-row">
                        <div className="display-label">
                            <p className="header">Tip amount</p>
                            <p className="unit">/person</p>
                        </div>
                            <p className="display-amount">£{tipRounded}</p>
                        </div>
                    <div className="display-row">
                           <div className="display-label">
                            <p className="header">Total</p>
                            <p className="unit">/person</p>
                        </div>
                            <p className="display-amount">£{totalRounded}</p>
                    </div>
                    <Reset total={total} handleResetButton={handleResetButton}/>
            </div>
     
    )
}

export default Display