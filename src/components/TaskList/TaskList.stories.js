import React from "react";
import TaskList from "./TaskLisk";
import * as TaskStories from "../Task/Task.stories";

const storyConfig = {
  component: TaskList,
  title: "TaskList",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>]
}

export default storyConfig;

const Template = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { ...TaskStories.Default.args.tas, id: "1", title: "Task 1" },
    { ...TaskStories.Default.args.tas, id: "2", title: "Task 2" },
    { ...TaskStories.Default.args.tas, id: "3", title: "Task 3" },
    { ...TaskStories.Default.args.tas, id: "4", title: "Task 4" },
    { ...TaskStories.Default.args.tas, id: "5", title: "Task 5" },
    { ...TaskStories.Default.args.tas, id: "6", title: "Task 6" },
  ]
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks : [
    ...Default.args.tasks.slice(0,5),
    { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  task: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  tasks: [],
  // loading: false,
};