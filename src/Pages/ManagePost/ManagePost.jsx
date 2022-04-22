import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import styled from "styled-components";
const ManagePost = () => {
  return (
    <ManagePostContainer id="manage-post">
      <div className="container">
        <h1>ManagePost</h1>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Title</th>
                <th>Category</th>
                <th>Short Description</th>
                <th>Image</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>12 Jan, 2022</td>
                <td>Title Goes here</td>
                <td>Tech</td>
                <td>This is simple temporary card for everyone</td>
                <td>
                  <img
                    width={100}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nno7EkxDJgi3dQ4MBPwn2ptJaN2PdkZNyQ&usqp=CAU"
                    alt=""
                  />
                </td>
                <td>
                  <button className="btn btn-primary">
                    <BiEdit />
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger">
                    <BiTrash />
                  </button>
                </td>
                <td>
                  <span className="colorize">Active</span>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>12 Jan, 2022</td>
                <td>Title Goes here</td>
                <td>Tech</td>
                <td>This is simple temporary card for everyone</td>
                <td>
                  <img
                    width={100}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nno7EkxDJgi3dQ4MBPwn2ptJaN2PdkZNyQ&usqp=CAU"
                    alt=""
                  />
                </td>
                <td>
                  <button className="btn btn-primary">
                    <BiEdit />
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger">
                    <BiTrash />
                  </button>
                </td>
                <td>
                  <span className="colorize">Active</span>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>12 Jan, 2022</td>
                <td>Title Goes here</td>
                <td>Tech</td>
                <td>This is simple temporary card for everyone</td>
                <td>
                  <img
                    width={100}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nno7EkxDJgi3dQ4MBPwn2ptJaN2PdkZNyQ&usqp=CAU"
                    alt=""
                  />
                </td>
                <td>
                  <button className="btn btn-primary">
                    <BiEdit />
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger">
                    <BiTrash />
                  </button>
                </td>
                <td>
                  <span className="colorize">Active</span>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>12 Jan, 2022</td>
                <td>Title Goes here</td>
                <td>Tech</td>
                <td>This is simple temporary card for everyone</td>
                <td>
                  <img
                    width={100}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nno7EkxDJgi3dQ4MBPwn2ptJaN2PdkZNyQ&usqp=CAU"
                    alt=""
                  />
                </td>
                <td>
                  <button className="btn btn-primary">
                    <BiEdit />
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger">
                    <BiTrash />
                  </button>
                </td>
                <td>
                  <span className="colorize">Active</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ManagePostContainer>
  );
};

const ManagePostContainer = styled.section`
  position: relative;
  padding: 2rem;
  .table-wrapper {
    margin: 2rem 0rem;
    table {
      width: 100%;
      text-align: left;
      th,
      td {
        padding: 0.4rem;
        border-bottom: 1px solid #f7f7f7;
        .colorize {
          color: green;
        }
        img {
          border-radius: 5px;
        }
        button {
          padding: 0.4rem 0.5rem;
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export default ManagePost;
