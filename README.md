This repo reproduces a bug in webpack where you are unable to use a library that relies on dynamic imports for functionality. Those bundles that the library dynamically imports will simply not be available to your program.

See [issue #7843](https://github.com/webpack/webpack/issues/7843) and [issue 6818](https://github.com/webpack/webpack/issues/6818) for tracking.