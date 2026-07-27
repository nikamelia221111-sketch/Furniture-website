const navItems = ['Home', 'Services', 'Doctors', 'Products', 'Gallery'];

function Header() {
  return (
    <header>
      <section>
        <div>
          <a className="title" href="#">
            Furniture
          </a>
        </div>
        <div>
          <nav>
            <ul>
              {navItems.map((item) => (
                <li key={item} className={item === 'Gallery' ? 'margin-right' : undefined}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
}

export default Header;
