import React from "react";
import { render, screen } from "@testing-library/react";
import { Switch } from "./Switch";
import { Case } from "../Case/Case";

test("renders nothing when no cases have been passed", () => {
  render(<Switch expression="foo"></Switch>);

  const foo = screen.queryByText("foo");
  expect(foo).not.toBeInTheDocument();
});

test("renders a basic condition with a single element", () => {
  render(
    <Switch expression="foo">
      <Case clause="foo">foo</Case>
    </Switch>
  );

  const foo = screen.getByText("foo");
  expect(foo).toBeInTheDocument();
});

test("renders a basic condition with two elements", () => {
  render(
    <Switch expression="bar">
      <Case clause="foo">foo</Case>
      <Case clause="bar">bar</Case>
    </Switch>
  );

  const bar = screen.getByText("bar");
  expect(bar).toBeInTheDocument();
});

test("respects usage of break to stop evaluating", () => {
  render(
    <Switch expression="bar">
      <Case clause="foo">foo</Case>
      <Case clause="bar" break>
        bar
      </Case>
      <Case clause="bar">baz</Case>
    </Switch>
  );

  const bar = screen.getByText("bar");
  expect(bar).toBeInTheDocument();

  const baz = screen.queryByText("baz");
  expect(baz).not.toBeInTheDocument();
});

test("renders default value when no other clauses pass", () => {
  render(
    <Switch expression="qux">
      <Case clause="foo">foo</Case>
      <Case clause="bar">bar</Case>
      <Case clause="baz">baz</Case>
      <Case default>none</Case>
    </Switch>
  );

  const none = screen.getByText("none");
  expect(none).toBeInTheDocument();
});
