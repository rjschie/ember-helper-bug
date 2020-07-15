# ember-helper-bug

This project is a repro for an infinite re-render issue in Ember.

## Repro steps

1. `ember serve`
2. Visit http://localhost:4200
3. Enable "Pause on exceptions" in source console
4. Uncomment either `<MyComponent />` or the `div` with `did-insert this._setupResizer`.

When page reloads, it will pause on exception, and if you click continue
execution it will pause again, ad infinitum.