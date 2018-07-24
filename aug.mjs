const ae = function augmentError(err) {
  if (err.syscall && err.path) {
    if (String(err.path || '').substr(0, 1) !== '/') {
      err.cwd = process.cwd();
    }
  }
  return err;
};

ae.re = function rethrowAugmentedError(err) { throw ae(err); };

export default ae;
