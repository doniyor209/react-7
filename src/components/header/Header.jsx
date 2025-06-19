import './header.css';

function Header() {
  return (
    <div>
        <header>
            <div className="container">
                <img src="/f.png" alt="left" />
                <nav>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Faq</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Header