import React from 'react'

const AddComment = ({visible, margTop}) => {
    const onAdd = (e) => {
        e.preventDefault();
    }
    return (
    <div style={{visibility: visible, marginTop: margTop }}><h3>Add a Comment</h3>
    <form>
        <label htmlFor="comment">Comment:</label><br />
        <textarea className="rounded my-3" style={{width: '400px'}} rows="5"></textarea><br/>
        <button type="submit" onClick={onAdd}>Submit</button>
    </form>
    </div>
  )
}

export default AddComment