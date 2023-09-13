
function Reset ({total, handleResetButton}) {
    return (
        total ? <button className="button" onClick={handleResetButton}>Reset</button> : <button className="button" type="radio" disabled>Reset</button> 
    )
}

export default Reset