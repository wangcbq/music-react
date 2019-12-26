import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { show: false }
    }
    componentDidMount() {
      this.setState({ show: true });
    }
    render() {
      return (
        <CSSTransition in={this.state.show} classNames='fade' timeout={300} unmountOnExit>
          <WrappedComponent {...this.props} />
        </CSSTransition>
      );
    }
  }
};
