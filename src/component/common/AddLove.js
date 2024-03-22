import ListGroup from 'react-bootstrap/ListGroup';

function Add(prop) {

    const tieam = prop.data
    console.log(tieam)
    return (
        <>
            {
                tieam.map((e, i) => {
                    return <ListGroup.Item><div className="tensach"> <div className="ten" >{e.Title}</div><div className="nguoiviet">{e.Author}</div></div></ListGroup.Item>
                })
            }
        </>
    )
}

export default Add;