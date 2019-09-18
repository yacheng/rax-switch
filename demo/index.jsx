/* eslint-disable import/no-extraneous-dependencies */
/** @jsx createElement */

import { createElement, render, useState } from 'rax';
import DU from 'driver-universal';
import Switch from '../src';
import View from 'rax-view';

const App = () => {
  const [state, setState] = useState(false);
  return (<View>
    <Switch value={state} onValueChange={(value) => {
      setState(value);
    }} />
  </View>);
};

render(<App />, document.body, { driver: DU });