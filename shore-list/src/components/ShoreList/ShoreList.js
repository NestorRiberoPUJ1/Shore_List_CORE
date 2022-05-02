import React, { useEffect, useState } from 'react';

const ShoreList = ({ shoresList }) => {


    const textStyle = {
        textDecoration: 'line-through',
    };

    const [shores, setShores] = useState([]);
    const [firstRender, setFirstRender] = useState(false);
    const [checkedBoxes, setCheckedBoxes] = useState([]);

    const newShore = (thisShore) => {
        let shoreCopy = [...shores];
        shoreCopy.push(thisShore);
        setShores([...shoreCopy]);
        console.log(shoreCopy);
    }

    const checkeds = (index, value) => {
        let copy = checkedBoxes;
        if (value) {
            copy.push(index);
        }
        else {
            copy = copy.filter(item => item !== index);
        }
        setCheckedBoxes([...copy]);
        console.log(copy);
    }

    const deleteShore = (index) => {
        let copy = shores;

        copy = copy.filter((item, item_index) => item_index !== index);

        setShores([...copy]);
    }

    useEffect(() => {
        setFirstRender(true);
    }, [])


    useEffect(() => {
        if (firstRender) {
            newShore(shoresList);
        }
        // eslint-disable-next-line
    }, [shoresList])


    return (
        <ul>
            {
                shores.map((shore, index) => {

                    if (checkedBoxes.includes(index)) {
                        return (
                            <li key={shore + index} className="mt-4">
                                <label style={textStyle}>{shore}</label>
                                <input type="checkbox" onChange={(e) => checkeds(index, e.target.checked)} className="m-2" />
                                <button className='btn btn-warning' onClick={() => deleteShore(index)}>Delete</button>
                            </li>
                        );
                    }
                    else {
                        return (
                            <li key={shore + index} className="mt-4">
                                <label>{shore} </label>
                                <input type="checkbox" onChange={(e) => checkeds(index, e.target.checked)} className="m-2" />
                                <button className='btn btn-warning' onClick={() => deleteShore(index)} >Delete</button>
                            </li>
                        );
                    }

                })
            }
        </ul >
    );
};

export default ShoreList;