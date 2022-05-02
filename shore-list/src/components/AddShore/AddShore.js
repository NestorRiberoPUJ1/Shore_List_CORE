import React, { useState } from "react";

const AddShore = ({ShoreShare}) => {

    const [newShore, setNewShore] = useState("");

    const createShore = (e,thisShore) => {
        e.preventDefault();
        console.log(thisShore);
        if (thisShore !== "" && thisShore !== undefined) {
            ShoreShare(thisShore);
            setNewShore("");
        }
    }

    return (

        <form onSubmit={(e)=>createShore(e,newShore)}>
            <div className="form-control">
                <label>New Shore:</label>
                <input type="text" className="form-control" onChange={(e)=>setNewShore(e.target.value)} value={newShore}/>
                <button type="submit" className="btn btn-success mt-3 mb-2">Create</button>
            </div>

        </form>

    );

}
export default AddShore;