import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';

const inputForm = new ProjectInput('user-input');
inputForm.setFormSubmission();

const todoList = new ProjectList('todo-projects');
todoList.setTitle('To do');
const finishedList = new ProjectList('finished-projects');
finishedList.setTitle('Finished');

// const singleProject = new SingleProject();
