import { Component } from '../decorators/component';
import { SingleProject } from './single-project';
import { Project } from '../models/project';
import { Store } from '../store/store';

@Component({
  selector: '#app',
  templateId: 'project-input',
})
export class ProjectInput {
  constructor(public HTMLId: string) {}

  configureListeners() {}

  setFormSubmission() {
    const btn = document.querySelector('button')!;
    btn.addEventListener('click', this.addProjectHandler);
  }

  addProjectHandler(event: Event) {
    event!.preventDefault();
    const [title, description, people] = ['title', 'description', 'people'].map(
      (id) => (document.getElementById(id)! as HTMLInputElement).value
    );

    const newProject = new Project(title, description, Number(people));

    if (newProject.isProjectValid()) {
      const store = Store.getInstance();
      store.addObjToStore(newProject);
      const singleProject = new SingleProject(newProject);
      singleProject.addToProjectList();
      // store.getObjsFromStore(newProject.constructor.name);
    } else {
      alert(
        'Validation faild!\nTitle, description and people count are required.\nMaximum length of title must be 5 character, of description 10.\nPeople assigned to project must be positive number.'
      );
    }
  }
}
