import { helper } from '@ember/component/helper';
import { assert } from '@ember/debug';

export default helper(function hlpr() {
  assert('Asserting in helper', false);
});
