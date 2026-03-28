import './Header.css';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <header className='header'>
            <div className='header__content'>
                <div className='header__logo'>
                    <h2 className='header__logo-text'>OXIDA</h2>
                </div>

                <div className='header__nav'>
                    <nav>
                        <Link to="/" className='header__nav-list'>Главная</Link>
                        <Link to="/tasks" className='header__nav-list'>Мои задачи</Link>
                        <Link to="/profile" className='header__nav-list'>Мой профиль</Link>
                    </nav>

                    <p className='header__money'>Баланс: 50000₽</p>
                </div>
            </div>
        </header>
    );
}