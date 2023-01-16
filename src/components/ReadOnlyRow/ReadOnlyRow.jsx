import React from "react";
import "./ReadOnlyRow.css";
import { BsTrash } from "react-icons/bs";

const ReadOnlyRow = ({ post, handleDeleteClick }) => {
  return (
    <tr className='items'>
      <td>{post.name}</td>
      <td>{post.surname}</td>
      <td>{post.phone}</td>
      <td>{post.adress}</td>
      <td>{post.email}</td>
      <td className='edit-post'>
        <BsTrash onClick={() => handleDeleteClick(post.id)} />
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
