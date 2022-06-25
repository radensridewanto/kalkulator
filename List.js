import React from "react";

export default function List({data, handleEdit, handleDelete}) {
  return (
    <div className="list-group">
      {
        data.map((kegiatan)=> {
          return (
            <div className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{kegiatan.name}</h5>
          <div>
            <button onClick = {() => handleEdit(kegiatan.id)} className="btn btn-sm btn-link">Edit</button>
            <button onClick = {() => handleDelete(kegiatan.id)} className="btn btn-sm btn-link">Del</button>
          </div>
        </div>
      </div>
          )
        })
      }
    </div>
  );
}
