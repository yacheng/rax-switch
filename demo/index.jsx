/* eslint-disable import/no-extraneous-dependencies */
/** @jsx createElement */

import { createElement, render, useState } from 'rax';
import DU from 'driver-universal';
import Switch from '../src';
import View from 'rax-view';
import Text from 'rax-text';

const App = () => {
  const [status, setStatus] = useState(false);
  return (<View>
    <Switch value={false} onValueChange={value => {
      setStatus(value);
    }} />
    <Text>Switch Status: {status}</Text>
  </View>);
};

render(<App />, document.body, { driver: DU });