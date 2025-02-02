import './Header.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-box">
                    <a href="#!" className="header-logo">
                        <img src="/image/logo.svg" alt="logo" />
                        <span>Abito</span>
                    </a>
                    <div className="header-controls">
                        <button className="btn btn-outline">Login and registration</button>
                        <button className="btn btn-primary">Submit an ad</button>
                    </div>

                    <div className="header-burger">
                        <img src="/image/burger.svg" alt="burger" />
                    </div>
                </div>
            </div>
        </header>
    )
}