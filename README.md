# React Switch

This is an experiment to see if I could write a `switch` statement in a React-y declarative syntax with higher-order components. It's a toy project, deliberately not published on npm, please don't use this in production.

When I conditionally render content in React applications, I commonly find myself doing things like this:

```
return (
    <>
       {isVisible && <Widget />}
       {hasRows && <List />}
    </>
)
```

This pattern can be problematic if you're not [careful](https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx) about how you structure these expressions. These syntax is awfully similar to a common [switch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch), though. What would a declarative `switch` look like?

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
