interface ComponentDescriptor {
  selector: string;
  templateId: string;
}

export function Component(descriptor: ComponentDescriptor) {
  return function <
    T extends {
      new (...args: any[]): { HTMLId: string; configureListeners: () => void };
    }
  >(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super(...args);
        const containerNode = document.querySelector(descriptor.selector)!;
        const injectedTemplate = document.getElementById(
          descriptor.templateId
        )! as HTMLTemplateElement;

        injectedTemplate.content.firstElementChild!.setAttribute(
          'id',
          this.HTMLId
        );

        containerNode.appendChild(injectedTemplate.content.cloneNode(true));
        this.configureListeners();
      }
    };
  };
}
