import React from "react";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";
import { PureInboxScreen } from "./InboxScreen";
import * as TaskListStories from "../TaskList/TaskList.stories";

const store = {
  getState: () => ({ tasks: TaskListStories.Default.args.tasks }),
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

const storyConfig = {
  component: PureInboxScreen,
  title: "InboxScreen",
  deecorators: [(story) => <Provider store={store}>{story()}</Provider>]
};

export default storyConfig;

const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = { error: "Something went wrong while trying to retrieve tasks" };
