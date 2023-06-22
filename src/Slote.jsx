import React from "react";

const slot = (props) => {

    const { x, y, z } = props;
    if (x === y && y === z) {
        return (
            <>
                <div className="slotegame">
                    <h1>{x}{y}{z}</h1>
                    <p>This is matching</p>
                    <hr />
                </div>

            </>
        )
    } else {
        return (
            <>
                <div className="slotegame">
                    <h1>{x}{y}{z}</h1>
                    <p>This is not matching</p>
                    <hr />
                </div>

            </>
        )
    }
}







export default slot;