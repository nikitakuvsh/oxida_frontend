import './styles.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Task from './components/Task/Task';
import TasksList from './components/TasksList/TasksList';
import Qr from './components/Qr/Qr';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<><Qr /> <TasksList /></>} />
          <Route path="/task/:id" element={<Task />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;