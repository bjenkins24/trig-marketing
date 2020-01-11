/* eslint-disable */
(function() {
  const { warn } = console;

  console.warn = function() {
    if (
      !arguments[0].includes('In React 17.x, only the UNSAFE_ name will work')
    ) {
      warn.apply(console, arguments);
    }
  };
})();
