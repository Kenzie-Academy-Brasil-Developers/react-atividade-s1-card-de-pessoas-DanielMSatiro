import "./index.css"

function Developer ({name,age,country}) {
    return (
        <div className="DeveloperCard">
            <span>
                <p className="Destaque">Dev: {name}</p>
                <p>Idade: {age}</p>
                <p>País: {country}</p>
            </span>
        </div>
    )
}

export default Developer