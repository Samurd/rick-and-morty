export function LocationInfo({locationInfo}) {
    return(
        <div className="container-location">
            <div className="container-name-location lc">
                <h2>Name:</h2>
                <h3>{locationInfo.name}</h3>
            </div>
            <div className="container-type lc">
                <h2>Type:</h2>
                <h3>{locationInfo.type}</h3>
            </div>
            <div className="container-dimension lc">
                <h2>Dimension:</h2>
                <h3>{locationInfo.dimension}</h3>
            </div>
            <div className="container-poblation lc">
                <h2>Population:</h2>
                <h3>{locationInfo.residents?.length}</h3>
            </div>
        </div>
    )
}