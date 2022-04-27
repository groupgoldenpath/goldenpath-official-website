import "./market.css"

function Market() {
    return (
        <div className="Market">
                <div className="frame">
                <iframe src="https://br.widgets.investing.com/live-currency-cross-rates?theme=darkTheme&roundedCorners=true&pairs=1,3,2,4,7,5,8,6,9419,1516" width="100%" height="100%" frameBorder="0" allowTransparency="false" marginWidth="0" marginHeight="0"></iframe>
                </div>
        </div>
    )
}

export { Market }