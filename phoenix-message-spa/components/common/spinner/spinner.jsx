import React, { PropTypes } from 'react';
import Div from '../html/div';
import './spinner-style';

const Spinner = ({ position, ...rest }) => (
  <tiny-spinner-item class={position || 'center'} {...rest} />
);

Spinner.propTypes = {
  position: PropTypes.string,
};

const SpinnerAwarenessComponent = ({ className, isLoading, children, wrapper }) => {
  const WrapperComponent = wrapper || Div;
  let components = children;
  if (isLoading) {
    components = <Spinner />;
  }

  return (
    <WrapperComponent className={className}>
      {components}
    </WrapperComponent>
  );
};

SpinnerAwarenessComponent.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  children: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  wrapper: PropTypes.func,
};

const withSpinner = (Component) => {
  const ComponentWithSpinner = ({ isLoading, ...props }) => {
    if (!isLoading) {
      return <Component {...props} />;
    }

    return <Spinner />;
  };
  ComponentWithSpinner.propTypes = {
    isLoading: PropTypes.bool,
  };
  return ComponentWithSpinner;
};

export {
  withSpinner,
  SpinnerAwarenessComponent,
};

export default Spinner;
