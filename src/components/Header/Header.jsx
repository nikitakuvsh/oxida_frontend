import './Header.css';

export default function Header(){
    return (
        <header className='header'>
            <div className='header__content'>
                <div className='header__logo'>
                    <h2 className='header__logo-text'>OXIDA</h2>
                </div>

                <div className='header__nav'>
                    <nav>
                        <a className='header__nav-list'>Главная</a>
                        <a className='header__nav-list'>Мои задачи</a>
                        <a className='header__nav-list'>Мой профиль</a>
                    </nav>

                    <p className='header__money'>Баланс: 50000Р</p>
                </div>
            </div>
        </header>
    );
}