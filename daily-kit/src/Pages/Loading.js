import React from 'react';

const Loading = () => {
  return (
    <div className={'loadingWrapper'}>
      <img
        className={'loading'}
        src="https://media.giphy.com/media/2c85mEsTFONgM0sOQ/giphy.gif"
        alt="Loading"
      />
    </div>
  );
};

export default Loading;
