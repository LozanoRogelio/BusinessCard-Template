import React from "react"

function Info() {
    return (
        <div className="info-container">
        <img className="picture" src="./images/Rectangle90.png" />
        <h1 className="info--h1">Rogelio Lozano</h1>
        <h4 className="info--h4">Frontend Developer</h4>
        <h6 className="info--h6">lozanorogelio.website</h6>
        <button className="info--button1" type="button"><i className="fa-sharp fa-solid fa-envelope"></i> Email</button>
        <button className="info--button2" type="button"><i className="fa-brands fa-linkedin"></i> LinkedIn</button>
        </div>
    )
}

export default Info