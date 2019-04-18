import { Component, createElement } from 'rax';
import { isWeex } from 'universal-env';

const DEFAULT_WIDTH = 100;
const DEFAULT_HEIGHT = 60;

const Switch = (props) => {
  const {
    style,
    disabled,
    value,
    onValueChange,
    onTintColor = '#00e158',
    thumbTintColor = '#ffffff',
    tintColor = '#ffffff'
  } = props;

  const handleClick = (e) => {
    if (disabled) {
      return null;
    }
    var newVal = !value;
    onValueChange && onValueChange.call(this, newVal);
  };

  const handleChange = ({ value }) => {
    onValueChange && onValueChange.call(this, value);
  };

  const getStyles = () => {
    return {
      span: {
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
        minWidth: DEFAULT_WIDTH,
        minHeight: DEFAULT_HEIGHT,
        borderRadius: 40,
        position: 'relative',
        display: 'inline-block',
        margin: 4,
        padding: 0,
        cursor: 'default', // pointer will cause a grey background color on chrome
        verticalAlign: 'middle',
        borderColor: '#dfdfdf',
        borderWidth: '1px',
        borderStyle: 'solid',
        WebkitUserSelect: 'none',
        WebkitBoxSizing: 'content-box',
        WebkitBackfaceVisibility: 'hidden'
      },
      checkedSpan: {
        borderColor: onTintColor,
        backgroundColor: onTintColor,
        boxShadow: onTintColor + ' 0 0 0 16px inset',
        WebkitTransition: 'border 0.2s, box-shadow 0.2s, background-color 1s'
      },
      uncheckedSpan: {
        borderColor: '#dfdfdf',
        backgroundColor: tintColor,
        boxShadow: '#dfdfdf 0 0 0 0 inset',
        WebkitTransition: 'border 0.2s, box-shadow 0.2s'
      },
      disabledSpan: {
        opacity: 0.5,
        cursor: 'not-allowed',
        boxShadow: 'none'
      },
      small: {
        position: 'absolute',
        top: 0,
        width: 60,
        height: 60,
        backgroundColor: thumbTintColor,
        borderRadius: '100%',
        boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
        WebkitTransition: 'all 0.2s ease-in'
      },
      checkedSmall: {
        right: 0,
        // WebkitTransform: 'translateX(40rem)' // should with rem unit that the value is string type
      },
      uncheckedSmall: {
        left: 0,
        // WebkitTransform: 'translateX(0)'
      }
    };
  };
  if (isWeex) {
    let nativeProps = {
      style,
      disabled,
      checked: value,
      onChange: handleChange
    };

    return (
      <switch {...nativeProps} />
    );
  } else {
    let styles = getStyles();
    let spanStyle = value ? { ...styles.span, ...styles.checkedSpan } : { ...styles.span, ...styles.uncheckedSpan };
    let smallStyle = value ? { ...styles.small, ...styles.checkedSmall } : { ...styles.small, ...styles.uncheckedSmall };
    spanStyle = disabled ? { ...spanStyle, ...styles.disabledSpan } : spanStyle;
    spanStyle = {
      ...spanStyle,
      ...style
    };

    return (
      <span onClick={handleClick} style={spanStyle}>
        <small style={smallStyle} />
      </span>
    );
  }
};

const styles = {
  // width and height not work on weex switch
  initial: {
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
};

export default Switch;
