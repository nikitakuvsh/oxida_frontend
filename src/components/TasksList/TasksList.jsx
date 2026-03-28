import './TasksList.css';
import botImage from '../../images/icons/bot.svg';
import codeImage from '../../images/icons/code.svg';
import { useNavigate } from 'react-router-dom';

export default function TasksList(){
    const tasks = [
        { id: 1, title: 'Создать ТГ-Бота', image: botImage },
        { id: 2, title: 'Парсер сайтов', image: codeImage }
    ];

    const navigate = useNavigate();

    return (
        <main className='main'>
            <div className='tasks-list'>
                {tasks.length === 0 ? (
                    <p style={{ color: '#d1d5db', textAlign: 'center', width: '100%', fontSize: '16px' }}>
                        Нет свободных задач
                    </p>
                ) : (
                    tasks.map(task => (
                        <div 
                            key={task.id}
                            className='task' 
                            style={{ backgroundImage: `url(${task.image})` }}
                        >
                            <div className='task__content'>
                                <h2 className='task__title'>{task.title}</h2>
                                <button className='task__button' onClick={() => navigate(`/task/${task.id}`)}>Ознакомиться</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </main>
    );
}