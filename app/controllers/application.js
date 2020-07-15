import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action, /* set */ } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked
  someProp = false;

  @action
  _setupResizerController(element) {
    console.log('running _setupResizer');
    this._resizer = new ResizeObserver(() => {
      this._resizer.unobserve(element);
      this.someProp = true;
      /**
       * Interestingly, only re-renders once when using `set` when doing it
       * through the controller / top-level `div`.
       */
      // set(this, 'someProp', true);
    });
    this._resizer.observe(element);
  }
}
