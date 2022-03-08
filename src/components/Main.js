import img1 from '../assets/img-01.jpg'
import img2 from '../assets/img-02.jpg'
import img3 from '../assets/img-03.jpg'
import img4 from '../assets/img-04.jpg'
import img5 from '../assets/img-05.jpg'
import img6 from '../assets/img-06.jpg'

const Main = () => {
  return (
    <div>
      <section>
        <div>
          <form>
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div>
          <div>
            <article>
              <hr />

              <a href="https://google.com" target="_blank" rel="noreferrer">
                <div>
                  <img src={img1} alt="post" />
                </div>
                <span>New</span>
                <h2>Simple and useful HTML layout</h2>
              </a>
              <p>
                There is a clickable image with beautiful hover effect and
                active title link for each post item. Left side is a sticky menu
                bar. Right side is a blog content that will scroll up and down.
              </p>
              <div>
                <span>Travel . Events</span>
                <span>June 24, 2020</span>
              </div>
              <hr />
              <div>
                <span>36 comments</span>
                <span>by Admin Nat</span>
              </div>
            </article>
            <article>
              <hr />

              <a href="https://google.com" target="_blank" rel="noreferrer">
                <div>
                  <img src={img2} alt="post" />
                </div>
                <span>New</span>
                <h2>Multi-purpose blog template</h2>
              </a>
              <p>
                <a
                  href="https://templatemo.com/tm-553-xtra-blog"
                  target="_blank"
                  rel="noreferrer"
                >
                  Xtra Blog
                </a>
                is a multi-purpose HTML CSS template from TemplateMo website.
                Blog list, single post, about, contact pages are included. Left
                sidebar fixed width and content area is a fluid full-width.
              </p>
              <div>
                <span>Creative . Design . Business</span>
                <span>June 16, 2020</span>
              </div>
              <hr />
              <div>
                <span>48 comments</span>
                <span>by Admin Sam</span>
              </div>
            </article>
            <article>
              <hr />

              <a href="https://google.com" target="_blank" rel="noreferrer">
                <div>
                  <img src={img3} alt="post" />
                </div>
                <h2>How can you apply Xtra Blog</h2>
              </a>
              <p>
                You are
                <u>allowed</u>
                to convert this template as any kind of CMS theme or template
                for your custom website builder. You can also use this for your
                clients. Thank you for choosing us.
              </p>
              <div>
                <span>Music . Audio</span>
                <span>June 11, 2020</span>
              </div>
              <hr />
              <div>
                <span>24 comments</span>
                <span>by John Walker</span>
              </div>
            </article>
            <article>
              <hr />

              <a href="https://google.com" target="_blank" rel="noreferrer">
                <div>
                  <img src={img4} alt="post" />
                </div>
                <h2>A little restriction to apply</h2>
              </a>
              <p>
                You are
                <u>not allowed</u>
                to re-distribute this template as a downloadable ZIP file on any
                template collection website. This is strongly prohibited as we
                worked hard for this template. Please contact TemplateMo for
                more information.
                <br />
                For example,
                <a
                  href="https://www.free-css.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Free-CSS
                </a>
                redistributed this Xtra Blog template on their website without
                asking any permission. It is an illegal act by Free-CSS website
                doing an unauthorized reposting.
              </p>
              <div>
                <span>Artworks . Design</span>
                <span>June 4, 2020</span>
              </div>
              <hr />
              <div>
                <span>72 comments</span>
                <span>by Admin Sam</span>
              </div>
            </article>
            <article>
              <hr />

              <a href="https://google.com" target="_blank" rel="noreferrer">
                <div>
                  <img src={img5} alt="post" />
                </div>
                <h2>Color hexa values of Xtra Blog</h2>
              </a>
              <p>
                If you wish to kindly support us, please contact us or
                contribute a small PayPal amount to info [at] templatemo.com
                that is helpful for us.
                <br />
                Title #099 New #0CC
                <br />
                <span>Text #999 Line #CCC Next #0CC Prev #F0F0F0</span>
              </p>
              <div>
                <span>Creative . Video . Audio</span>
                <span>May 31, 2020</span>
              </div>
              <hr />
              <div>
                <span>84 comments</span>
                <span>by Admin Sam</span>
              </div>
            </article>
            <article>
              <hr />

              <a href="https://google.com" target="_blank" rel="noreferrer">
                <div>
                  <img src={img6} alt="post" />
                </div>
                <h2>Donec convallis varius risus</h2>
              </a>
              <p>
                Quisque id ipsum vel sem maximus vulputate sed quis velit. Nunc
                vel turpis eget orci elementum cursus vitae in eros. Quisque
                vulputate nulla ut dolor consectetur luctus.
              </p>
              <div>
                <span>Visual . Artworks</span>
                <span>June 16, 2020</span>
              </div>
              <hr />
              <div>
                <span>96 comments</span>
                <span>by Admin Nat</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Main
