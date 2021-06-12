// @flow strict
import * as React from 'react';

type Props = {|
  foo: number,
|};

export const Foo = ({ foo }: Props): React$Element<'div'> => {
  return <div>{foo}</div>;
};
