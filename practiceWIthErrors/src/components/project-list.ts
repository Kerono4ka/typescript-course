import { Component } from '../decorators/component';
import { DragTarget } from '../models/drag-drop';

@Component({
  selector: '#app',
  templateId: 'project-list',
})
export class ProjectList implements DragTarget {
  constructor(public HTMLId: string) {}

  setTitle(title: string) {
    document.querySelector(`#${this.HTMLId} h2`)!.innerHTML = title;
  }

  configureListeners() {
    const element = document.getElementById(this.HTMLId)!;
    element.addEventListener('dragover', this.dragOverHandler.bind(this));
    element.addEventListener('dragleave', this.dragLeaveHandler.bind(this));
    element.addEventListener('drop', this.dropHandler);
  }

  dragOverHandler(event: DragEvent) {
    if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      event.preventDefault();
      const listEl = document.getElementById(this.HTMLId)!.querySelector('ul')!;
      listEl.classList.add('droppable');
    }
  }

  dropHandler(event: DragEvent) {
    // const prjId = event.dataTransfer!.getData('text/plain');
    console.log(event.dataTransfer!.getData('text/plain'));
  }

  dragLeaveHandler(_: DragEvent) {
    const listEl = document.getElementById(this.HTMLId)!.querySelector('ul')!;
    listEl.classList.remove('droppable');
  }
}
