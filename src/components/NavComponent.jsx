import styles from "./NavComponent.module.css";
import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

function NavComponent() {
  const [posts, setPosts] = useOutletContext();

  const [IsUserLoggedIn, setIsUserLoggedIn] = useOutletContext();

  const [navComponentDropDown, setNavComponentDropDrop] = useState(false);

  const [loggedInUserDropDown, setLoggedInUserDropDown] = useState(false);

  function toggleNavComponentDropDown() {
    setNavComponentDropDrop((navComponentDropDown) => !navComponentDropDown);
  }

  function toggleLoggedUserDropDrown() {
    setLoggedInUserDropDown((loggedInUserDropDown) => !loggedInUserDropDown);
  }

  if (!navComponentDropDown) {
    return (
      <nav className={styles.navContainer}>
        <ul className={styles.navContent}>
          <li data-testid="read" onClick={toggleNavComponentDropDown}>
            Read
            <img
              className={styles.navSvgIcons}
              src="/down-arrow.svg"
              alt="down arrow dropdown"
            />
          </li>
          <Link to="/home">
            <span className={styles.navMainPage}>
              <span className={styles.whiteBackground}>Bul</span>
              <span className={styles.redBackground}>gar</span>
              <span className={styles.greenBackground}>ian</span>
            </span>
          </Link>
          <div className={styles.navRightSideContent}>
            {!IsUserLoggedIn ? (
              <Link to={"/account/login"}>
                <button className={styles.loginButton}>Log in</button>
              </Link>
            ) : (
              <div className={styles.loggedUserContainer}>
                <div className={styles.loggedUserImgContainer}>
                  <img
                    data-testid="logged-user-img"
                    onClick={toggleLoggedUserDropDrown}
                    className={styles.loggedInUserSvg}
                    src="/bulgarian-flag-icon.jpeg"
                    alt="bulgarian flag profile image"
                  />
                </div>
                {!loggedInUserDropDown ? (
                  ""
                ) : (
                  <div className={styles.loggedInToggleDropDown}>
                    <li>
                      <Link to="/create">Create Post</Link>
                    </li>
                    <li>
                      <Link to="/account">Account</Link>
                    </li>
                    <li>
                      <Link to="/logout">Logout</Link>
                    </li>
                  </div>
                )}
              </div>
            )}
            <img
              className={styles.navSvgIcons}
              src="/search.svg"
              alt="search posts"
            />
          </div>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className={styles.navContainer}>
        <ul className={styles.navContent}>
          <li onClick={toggleNavComponentDropDown}>
            Read
            <img
              className={styles.navSvgIcons}
              src="/up-arrow.svg"
              alt="up arrow dropdown"
            />
          </li>
          <Link to="/home">
            <span className={styles.navMainPage}>
              <span className={styles.whiteBackground}>Bul</span>
              <span className={styles.redBackground}>gar</span>
              <span className={styles.greenBackground}>ian</span>
            </span>
          </Link>
          <div className={styles.navRightSideContent}>
            {!IsUserLoggedIn ? (
              <Link to={"/account/login"}>
                <button className={styles.loginButton}>Log in</button>
              </Link>
            ) : (
              <div className={styles.loggedUserContainer}>
                <div className={styles.loggedUserImgContainer}>
                  <img
                    onClick={toggleLoggedUserDropDrown}
                    className={styles.loggedInUserSvg}
                    src="/bulgarian-flag-icon.jpeg"
                    alt=""
                  />
                </div>
                {!loggedInUserDropDown ? (
                  ""
                ) : (
                  <div className={styles.loggedInToggleDropDown}>
                    <li>
                      <Link to="/create">Create Post</Link>
                    </li>
                    <li>
                      <Link to="/account">Account</Link>
                    </li>
                    <li>
                      <Link to="/logout">Logout</Link>
                    </li>
                  </div>
                )}
              </div>
            )}
            <img
              className={styles.navSvgIcons}
              src="/search.svg"
              alt="search posts"
            />
          </div>
        </ul>
        <div className={styles.navMenuWrapper}>
          <div className={styles.navMenuContainer}>
            <div className={styles.navMenuContent}>
              <nav className={styles.navigationLinks}>
                <h2>Topics</h2>
                <Link
                  data-testid="folklore"
                  to="/posts/category/66446821f1f4a04823a2bfe8"
                >
                  Folklore
                </Link>
                <Link
                  data-testid="folklore music"
                  to="/posts/category/6644689bf1f4a04823a2bffa"
                >
                  Folklore Music
                </Link>
                <Link
                  data-testid="culture"
                  to="/posts/category/66446958f1f4a04823a2c030"
                >
                  Culture
                </Link>
                <Link
                  data-testid="history"
                  to="/posts/category/6644691ff1f4a04823a2c01e"
                >
                  History
                </Link>
                <Link
                  data-testid="nature"
                  to="/posts/category/664468d2f1f4a04823a2c00c"
                >
                  Nature
                </Link>
                <Link
                  data-testid="traditions"
                  to="/posts/category/664469abf1f4a04823a2c042"
                >
                  Traditions
                </Link>
                <Link
                  data-testid="customs"
                  to="/posts/category/66446a59f1f4a04823a2c07d"
                >
                  Customs
                </Link>
              </nav>
              <div>
                {posts.slice(0, 2).map((post) => (
                  <article className={styles.navPostArticles} key={post._id}>
                    <figure className={styles.navPostImgContainer}>
                      <Link data-testid="navPostImg" to={`/posts/${post._id}`}>
                        <img
                          className={styles.navPostImg}
                          src={post.image_link}
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div>
                      <div className={styles.navPostDescription}>
                        <Link
                          data-testid="postCategory"
                          to={`/home/posts/category/${post.category[0]._id}`}
                        >
                          {post.category[0].category}
                        </Link>
                        <Link to={`/home/posts/${post._id}`}>
                          <h2>{post.title}</h2>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavComponent;
