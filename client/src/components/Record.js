import React from "react";

export default function Record(props) {
  return (
    <tr>
      <td>{props.record.month_name}</td>
      <td>{props.record.month_number}</td>
      <td>{props.record.day}</td>
      <td>{props.record.sleep_quality}</td>
      <td>{props.record.sleep_length}</td>
      <td>{props.record.dream}</td>
      <td>
        |
        <button
          className="btn btn-link"
          onClick={() => {
            props.deleteRecord(props.record._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
