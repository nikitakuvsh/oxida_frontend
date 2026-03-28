import { useParams } from 'react-router-dom';
import './Task.css';
import botImage from '../../images/icons/bot.svg';
import codeImage from '../../images/icons/code.svg';

export default function Task() {
    const { id } = useParams();

    const tasks = [
        {
            id: 1,
            title: 'Создать ТГ-Бота',
            description: 'Разработать Telegram-бота для уведомления о новых задачах. Бот должен иметь кнопки "Принять" и "Отказаться".',
            deadline: '2026-03-28',
            executor: 'Кувшинников Никита',
            tags: ['Middle', 'Backend'],
            comments: [
                { id: 1, author: 'Петров Дмитрий', text: 'Нужно учесть обработку ошибок API.' },
                { id: 2, author: 'Иванова Анна', text: 'Добавить логирование действий пользователя.' }
            ],
            files: ['requirements.docx', 'api_spec.pdf'],
            image: botImage
        },
        {
            id: 2,
            title: 'Парсер сайтов',
            description: 'Написать парсер для сбора информации с сайтов по заданной структуре и формировать CSV.',
            deadline: '2026-03-30',
            executor: null,
            tags: ['Junior', 'Frontend'],
            comments: [],
            files: [],
            image: codeImage
        }
    ];

    const task = tasks.find(t => t.id === Number(id));

    if (!task) return <p style={{ color: '#d1d5db', textAlign: 'center', marginTop: '40px' }}>Задача не найдена</p>;

    // Функция для окраски дедлайна
    const getDeadlineColor = (deadline) => {
        const now = new Date();
        const taskDate = new Date(deadline);
        const diff = (taskDate - now) / (1000*60*60*24); // разница в днях
        if (diff < 0) return '#ff5c5c';       // просрочено
        if (diff <= 3) return '#ffa500';       // скоро
        return '#4caf50';                      // в норме
    }

    return (
        <div className='task-page'>
            <div className='task-page__content'>
                <div className='task-detail'>
                    <div className='task-detail__image' style={{ backgroundImage: `url(${task.image})` }} />

                    <div className='task-detail__info'>
                        <div className='task-detail__header'>
                            <h2 className='task-detail__title'>{task.title}</h2>
                            <span 
                                className='task-detail__deadline'
                                style={{ backgroundColor: getDeadlineColor(task.deadline) }}
                            >
                                Дедлайн: {task.deadline}
                            </span>
                        </div>

                        <p className='task-detail__description'>{task.description}</p>

                        <p className='task-detail__executor'>
                            Исполнитель: {task.executor || 'Пока нет'}
                        </p>

                        {!task.executor && (
                            <button className='task-detail__button'>Взять задачу</button>
                        )}

                        <div className='task-detail__tags'>
                            {task.tags.map((tag, i) => (
                                <span key={i} className='task-detail__tag'>{tag}</span>
                            ))}
                        </div>

                        {task.files.length > 0 && (
                            <div className='task-detail__files'>
                                <h4>Файлы:</h4>
                                <ul>
                                    {task.files.map((f, i) => <li key={i}>{f}</li>)}
                                </ul>
                            </div>
                        )}

                        {task.comments.length > 0 && (
                            <div className='task-detail__comments'>
                                <h4>Комментарии:</h4>
                                {task.comments.map(c => (
                                    <div key={c.id} className='task-detail__comment'>
                                        <strong>{c.author}: </strong>{c.text}
                                    </div>
                                ))}
                            </div>
                        )}

                        {task.comments.length === 0 && (
                            <div className='task-detail__comments-empty'>Нет комментариев</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}