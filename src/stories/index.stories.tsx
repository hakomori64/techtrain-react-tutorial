import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SimpleButton from "..";
import App from "../app";
import InputForm from "../components/InputForm";

storiesOf("My Button", module)
  .add("with text", () => (
    <SimpleButton label="My button" onClick={action("clicked")}>
      Hello Button
    </SimpleButton>
  ))
  .add("inputform", () => <InputForm />);

storiesOf("My ToDo", module).add("with text", () => <App />);
