import React, { lazy, Suspense } from 'react';

const LazyChess = lazy(() => import('./Chess'));

const Chess = props => (
  <Suspense fallback={null}>
    <LazyChess {...props} />
  </Suspense>
);

export default Chess;
