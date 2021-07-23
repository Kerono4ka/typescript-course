import { Component } from '../decorators/component';
import { Project } from '../models/project';
import { Draggable } from '../models/drag-drop';

@Component({
  selector: '[data-id="project"]',
  templateId: 'single-project',
})
export class SingleProject implements Draggable {
  HTMLId: string;
  data: Project;

  constructor(data: Project) {
    this.data = data;
    this.HTMLId = data.id;
  }

  configureListeners() {
    const element = document.getElementById(this.data.id)!;
    element.addEventListener('dragstart', this.dragStartHandler.bind(this));
    element.addEventListener('dragend', this.dragEndHandler);
  }

  addToProjectList() {
    const [h2, h3, p] = [
      `#${this.HTMLId} h2`,
      `#${this.HTMLId} h3`,
      `#${this.HTMLId} p`,
    ].map((id) => document.querySelector(id));

    h2.innerHTML = this.data.title;
    h3.innerHTML = `Number of persons assigned: ${this.data.description}`;
    p.innerHTML = this.data.description;
  }

  dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData('text/plain', this.data.id);
    event.dataTransfer!.effectAllowed = 'move';
  }

  dragEndHandler(_: DragEvent) {}
}
