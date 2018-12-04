import React from 'react';
import PropTypes from 'prop-types';

import { 
  Animated
} from 'react-native';

/**
 * Animates the initial drawing of a wrapped component
 */
export default class AnimatedEntrance extends React.PureComponent {

  static axis = {
    fixed: null,
    horizontal: 'translateX',
    vertical: 'translateY'
  }

  static defaultProps = {
    order: 1,
    duration: 400,
    axis: 'translateX',
    offset: 20,
    delay: 110
  }

  static propTypes = {
    /**
     * Position of element in collection, used to calculate delay (1 for immediate)
     */
    order: PropTypes.number,
    /**
     * Animation duration
     */
    duration: PropTypes.number,
    /**
     * Axis prop types, corresponds to React Native's translate facilities
     */
    axis: PropTypes.string,
    /**
     * Position offset of component
     */
    offset: PropTypes.number,
    /**
     * Animation delay
     */
    offset: PropTypes.number
  }

  constructor(props) {
    super(props);

    this._animated = new Animated.Value(0);
  }
  
  componentDidMount() {
    Animated.timing(this._animated, {
      toValue: 1,
      duration: this.props.duration,
      delay: this.props.order * this.props.delay
    }).start();
  }

  render() {
    const rowStyles = [{ 
      opacity: this._animated,
    }, this.props.axis && {
      transform: [{
        [this.props.axis]: this._animated.interpolate({
          inputRange: [0, 1],
          outputRange: [this.props.offset, 0]
        }),
      }],
    }];

    return (
      <Animated.View useNativeDriver
        style={[rowStyles, this.props.style]} 
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
