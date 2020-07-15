import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, /* set */ } from '@ember/object';

export default class MyComponentComponent extends Component {
  @tracked
  someProp = false;

  @action
  _setupResizerComponent(element) {
    console.log('running _setupResizer');
    this._resizer = new ResizeObserver(() => {
      this._resizer.unobserve(element);
      this.someProp = true;
      /**
       * Unlike setting in controller / top-level `div`, the Component always
       * infinitely re-renders regardless of `@tracked` or `set`.
       */
      // set(this, 'someProp', true); // same with this
    });
    this._resizer.observe(element);
  }
}
