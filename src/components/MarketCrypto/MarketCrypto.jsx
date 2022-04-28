import "./marketCrypto.css"

function MarketCrypto() {
    return (
        <div className="MarketCrypto">
                <div className="frame">
                <iframe src="https://br.widgets.investing.com/top-cryptocurrencies?theme=darkTheme" width="100%" height="100%" frameBorder="0" allowTransparency="true" marginWidth="0" marginHeight="0"></iframe>
                </div>
        </div>
    )
}

export { MarketCrypto }