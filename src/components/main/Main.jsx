import './main.css';

function Main() {
  return (
    <div>
      <main>
        <section className='hero'>
          <div className="container">
            <div className="heroText">
              <h3>Food app</h3>
              <h1>Why stay hungry when <br />
                you can order form Bella Onojie</h1>
              <p>Download the bella onoje's food app now on</p>
              <div className="btns">
                <button className="btn1">Google Play</button>
                <button className="btn2">App Store</button>
              </div>
            </div>


          </div>
        </section>

        <div className="phoneImg">
          <img src="./e.png" alt="" />
        </div>
        <div className="container">
          <hr />
          <h1 className='k'>How the app works</h1>
          <section className="klp">
            <img src="./c.png" alt="" />
            <div className="klpText">
              <h3>Create an account</h3>
              <h1>Create/login to an existing <br />
                account to get started</h1>
              <p>An account is created with your email <br />
                and a desired password</p>
            </div>
          </section>
          <section className="klp">
            <div className="klpText">
              <h3>Create an account</h3>
              <h1>Create/login to an existing <br />
                account to get started</h1>
              <p>An account is created with your email <br />
                and a desired password</p>
            </div>
            <img src="./c.png" alt="" />
          </section>
          <section className="klp">
            <img src="./c.png" alt="" />
            <div className="klpText">
              <h3>Create an account</h3>
              <h1>Create/login to an existing <br />
                account to get started</h1>
              <p>An account is created with your email <br />
                and a desired password</p>
            </div>
          </section>
        </div>
        <section className='hero2'>
          <div className="container">
            <div className="heroText">
              <h1>Download the app now.</h1>
              <p>Available on your favorite store. Start your premium experience now</p>
              <div className="btns">
                <button className="btn1">Google Play</button>
                <button className="btn2">App Store</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Main