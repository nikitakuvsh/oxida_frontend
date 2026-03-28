import './Profile.css';
import teamLeadImage from '../../images/pictures/me.jpg';
import member from '../../images/pictures/member.png';

export default function Profile() {
    const teamMembers = [
        { name: 'Иванов Алексей', img: member },
        { name: 'Петров Дмитрий', img: member },
        { name: 'Сидоров Максим', img: member },
        { name: 'Козлов Артём', img: member },
        { name: 'Смирнова Анна', img: member },
    ];

    return (
        <div className='profile'>
            <div className='profile__content'>

                {/* LEFT — пользователь */}
                <div className='profile__info profile--left'>
                    <img
                        src={teamLeadImage}
                        alt="user"
                        className='profile__image'
                    />
                    <h2 className='profile__name'>Кувшинников Никита</h2>
                    <p className='profile__role'>FullStack Developer & TeamLead</p>
                </div>

                {/* RIGHT — команда */}
                <div className='profile--right'>
                    {/* <h2 className='profile__title'>Наша команда</h2> */}

                    <div className='team'>

                        {/* лидер */}
                        <div className='team__leader'>
                            <div className='team__circle leader'>
                                <img
                                    src={teamLeadImage}
                                    alt="Лидер"
                                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ marginTop: '8px', fontSize: '12px', color: '#d1d5db', textAlign: 'center' }}>
                                Кувшинников Никита
                            </div>
                        </div>

                        {/* стрелка */}
                        <div className='team__arrow'></div>

                        {/* команда */}
                        <div className='team__members'>
                            {teamMembers.map((member, idx) => (
                                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div className='team__circle'>
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div style={{ marginTop: '6px', fontSize: '11px', color: '#d1d5db', textAlign: 'center' }}>
                                        {member.name}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            <div className='profile__under'>

                <div className='profile__content'>
                    <div className='profile__money'>
                        <h4 className='profile__money-title'>Баланс: 50000Р</h4>
                        <button className='profile__money-button'>Вывести</button>
                    </div>

                    <div className='profile__counters'>
                        <p className='profile__counter'>Всего задач выполнено: 12</p>
                        <p className='profile__counter'>Средний доход за задачу: 7500Р</p>
                    </div>
                </div>
            </div>

            <div className='profile__content'>
                <div className='profile__applications'>
                    <h2 className='applications__title'>Мои заявки на вывод</h2>

                    <div className='applications__list'>
                        <div className='application'>
                            <p className='application__amount'>Сумма: 5000Р</p>
                            <p className='application__date'>Дата: 25.03.2026</p>
                            <span className='application__status approved'>Статус: Одобрено</span>
                        </div>
                        <div className='application'>
                            <p className='application__amount'>Сумма: 10000Р</p>
                            <p className='application__date'>Дата: 20.03.2026</p>
                            <span className='application__status pending'>Статус: В ожидании</span>
                        </div>
                        <div className='application'>
                            <p className='application__amount'>Сумма: 7500Р</p>
                            <p className='application__date'>Дата: 18.03.2026</p>
                            <span className='application__status declined'>Статус: Отклонено</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}