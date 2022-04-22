import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../../App";
import { auth } from "../../Firebase/Firebase.config";
const Header = () => {
  const { isAuth } = useContext(AppContext);
  const navigate = useNavigate();

  /* handle Log out  */
  const logOut = async () => {
    await signOut(auth).then(() => {
      toast.success(`Log out successfully done.`);
      navigate("/login");
    });
  };

  return (
    <HeaderContainer id="header">
      <div className="container">
        <nav className="navbar">
          <NavLink className="logo" to="/">
            <FaBloggerB /> Blog
          </NavLink>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            {isAuth && (
              <>
                <li>
                  <NavLink to="/create-post">Create Post</NavLink>
                </li>
                <li>
                  <NavLink to="/manage-post">Manage Post</NavLink>
                </li>
              </>
            )}
          </ul>
          {isAuth ? (
            <div className="profile">
              <div className="avatar">
                {auth?.currentUser?.photoURL ? (
                  <img
                    width={50}
                    src={
                      auth?.currentUser?.photoURL
                        ? auth?.currentUser?.photoURL
                        : '"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5iROb1TgJ_rcl-6r-68v1yjtID052zxSkw&usqp=CAU"'
                    }
                    alt="avatar"
                  />
                ) : (
                  auth?.currentUser?.displayName?.slice(0, 1)
                )}
              </div>
              <div className="details">
                <h4>
                  {auth?.currentUser?.displayName
                    ? auth?.currentUser?.displayName
                    : "Not Available"}
                </h4>
                <small title={auth?.currentUser?.email}>
                  {auth?.currentUser?.email
                    ? auth?.currentUser?.email.slice(0, 14) + "..."
                    : "Not Available"}
                </small>
              </div>
              <button onClick={logOut} className="btn btn-danger">
                <AiOutlineLogout /> Log Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="btn btn-primary"
            >
              <AiOutlineLogin /> Login
            </button>
          )}
        </nav>
      </div>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header`
  position: relative;
  padding: 1rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08);
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      font-size: 1.5rem;
      color: var(--secondary-color);
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-weight: bold;
      svg {
        fill: var(--primary-color);
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 2rem;
      a {
        color: var(--secondary-color);
        &.active {
          color: var(--primary-color);
        }
      }
    }
    .profile {
      display: flex;
      align-items: center;
      gap: 1rem;
      .details {
        position: relative;
        small {
          margin-top: -2px;
          display: block;
        }
      }
      .avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 3px solid #e2e0e0;
        overflow: hidden;
        display: grid;
        place-items: center;
        font-size: 2rem;
        color: var(--primary-color);
        font-weight: bold;
        user-select: none;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;
export default Header;
