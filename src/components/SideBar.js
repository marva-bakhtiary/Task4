const SideBar = () => {
  return (
    <div>
      <aside>
        <div>
          <button type="button">
            <i className="fas fa-bars"></i>
          </button>
          <div>
            <div>
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
            <h1>Xtra Blog</h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-house-chimney"></i>
                  Blog Home
                </a>
              </li>
              <li>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-pen"></i>
                  Single Post
                </a>
              </li>
              <li>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-users"></i>
                  About Xtra
                </a>
              </li>
              <li className="nav-items">
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-comments"></i>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook social-icons"></i>
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter social-icons"></i>
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram social-icons"></i>
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin social-icons"></i>
            </a>
          </div>
          <p>
            Xtra Blog is a multi-purpose HTML template from TemplateMo website.
            <br />
            Left side is a sticky menu bar. Right side content will scroll up
            and down.
          </p>
        </div>
      </aside>
    </div>
  )
}
export default SideBar
