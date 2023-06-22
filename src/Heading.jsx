import React from 'react';
import cdata from './array';
import Images from './Images';
function Cart(val) {
    return <>
        <div className="main">
            <Images imgsrc={val.imgsrc} />
            <h1>{val.seth1}</h1>
            <p>{val.setp}</p>

        </div>
    </>
}

function allbox(val, index) {


    return (
        <Cart
            key={val.id}
            imgsrc={val.imgsrc}
            seth1={val.seth1}
            setp1={val.setp}
        />
    );

}

function Heading() {
    return <>

        {cdata.map(allbox)}
    </>
}

export default Heading;