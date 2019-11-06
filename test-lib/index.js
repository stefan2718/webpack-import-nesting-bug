export class ImportingClass {
  init() {
    console.log("importingFunction");
    return import(/* webpackChunkName: "async" */ "./async").then(lib => {
      lib.helloFn();
    });
  }
}