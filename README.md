# React Switch

This is an experiment to see if I could write a `switch` statement in a React-y declarative syntax with higher-order components. It's a toy project, deliberately not published on npm, please don't use this in production.

## Example

```
<Switch expression="foo">
  <Case clause="foo">I render!</Case>
  <Case clause="bar">I don't render!</Case>
<Switch>
```

Check out the [tests](src/components/Switch/Switch.test.tsx) for the `Switch` component for more examples.

## TODO
- fallthrough behavior
- support for non-string expressions
- improved typescript definitions; seems like an ideal time to bring a generic into the mix
