import {
  createElement,
  HTMLAttributes,
  ForwardRefExoticComponent,
  forwardRef,
  RefAttributes,
  useState,
  useEffect,
  useRef
} from "rax";
import { isWeex } from "universal-env";
import "./index.css";

export interface SwitchProps
  extends RefAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement> {
  /**
   * set the background color of the switch
   * (设置开关打开的背景色)
   */
  onTintColor?: string;

  /**
   * set the background color when the switch is off
   * (设置开关关闭时的背景色)
   */
  tintColor?: string;

  /**
   * the background color of the switch round button
   * (开关圆形按钮的背景色)
   */
  thumbTintColor?: string;

  /**
   * is disabled
   * (是否禁用)
   */
  disabled?: boolean;
  /**
   * switch on or off by default
   * (开关默认状态开启或关闭)
   * default(默认值):true
   */
  value?: boolean;
  /**
   * change event
   * (值改变时调用此函数)
   */
  onValueChange?: (value: boolean) => void;
}

const Switch: ForwardRefExoticComponent<SwitchProps> = forwardRef(
  (props, ref) => {
    const {
      className,
      style = {},
      disabled,
      value = true,
      onValueChange,
      onTintColor,
      tintColor
    } = props;
    const [checked, setChecked] = useState(value);
    const mountedRef = useRef(false);
    const onChange = ({ value }: any) => {
      if (onValueChange) {
        onValueChange(value);
      }
    };
    const onClick = () => {
      if (disabled) {
        return;
      }
      setChecked(!checked);
    };
    useEffect(() => {
      if (!mountedRef.current) {
        mountedRef.current = true;
      } else {
        onChange({ value: checked });
      }
    }, [checked]);
    if (isWeex) {
      return (
        <switch
          ref={ref}
          style={style}
          disabled={disabled}
          checked={value}
          onChange={onChange}
        />
      );
    } else {
      return (
        <span
          ref={ref}
          className={`rax-switch rax-switch--${
            checked ? "checked" : "unchecked"
          } ${className}`}
          style={{
            ...style,
            backgroundColor: checked ? onTintColor : tintColor
          }}
          onClick={onClick}
        >
          <small
            className={`rax-switch__thumb rax-switch__thumb--${
              checked ? "checked" : "unchecked"
            }`}
          />
        </span>
      );
    }
  }
);

export default Switch;
