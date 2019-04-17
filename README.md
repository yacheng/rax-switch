# rax-switch [![npm](https://img.shields.io/npm/v/rax-switch.svg)](https://www.npmjs.com/package/rax-switch)
> Renders a boolean input.

## Install

```bash
$ npm install rax-switch --save
```

## Import

```jsx
import Switch from 'rax-switch';
```

## Example
```js
import { createElement, useState } from 'rax';
import Switch from 'rax-switch';

export default (props) => {
  const [toggle, setToggle] = useState(true);

  return (
    <Switch
      value={toggle}
      onValueChange={(value) => {
        setToggle(value);
      }}
    />
  );
};
```