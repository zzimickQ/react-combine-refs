# react-combine-refs

There is no built in feature in reactjs that lets you combine
react refs. One of the mostly used tool in react is `React.forwardRef` and it only forwars the ref to the parent component and doesn't allow access to current component the ref.

example:

```js
import React, { useRef } from "react";
import useConbinedRef from "react-combine-refs";

const Button = React.forwardRef((props, fRef) => {
  // pass the forwared ref fRef to the combiner hook
  const cRef = useCombinedRef(fRef);

  // use cRef here ...

  const { children, ...otherProps } = props;
  return (
    <Button ref={cRef} {...otherProps}>
      {children}
    </Button>
  );
});

export default function App() {
  const ref = useRef();

  // use ref here ...

  return (
    <div>
      <Button ref={ref}>Hello</Button>
    </div>
  );
}
```

## Licence

MIT License
