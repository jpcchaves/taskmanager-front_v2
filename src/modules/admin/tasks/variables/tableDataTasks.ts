import { faker } from "@faker-js/faker";
import { Task } from "../../../../types/tasks/Task";

export const tableDataTasks: Task[] = [
  {
    id: Number(faker.datatype.uuid()),
    task: faker.lorem.words(3),
    concluded: faker.datatype.boolean(),
    createdAt: faker.date.past().toLocaleDateString(),
    deadline: faker.date.future().toLocaleDateString(),
  },
  {
    id: Number(faker.datatype.uuid()),
    task: faker.lorem.words(3),
    concluded: faker.datatype.boolean(),
    createdAt: faker.date.past().toLocaleDateString(),
    deadline: faker.date.future().toLocaleDateString(),
  },
  {
    id: Number(faker.datatype.uuid()),
    task: faker.lorem.words(3),
    concluded: faker.datatype.boolean(),
    createdAt: faker.date.past().toLocaleDateString(),
    deadline: faker.date.future().toLocaleDateString(),
  },
  {
    id: Number(faker.datatype.uuid()),
    task: faker.lorem.words(3),
    concluded: faker.datatype.boolean(),
    createdAt: faker.date.past().toLocaleDateString(),
    deadline: faker.date.future().toLocaleDateString(),
  },
  {
    id: Number(faker.datatype.uuid()),
    task: faker.lorem.words(3),
    concluded: faker.datatype.boolean(),
    createdAt: faker.date.past().toLocaleDateString(),
    deadline: faker.date.future().toLocaleDateString(),
  },
  {
    id: Number(faker.datatype.uuid()),
    task: faker.lorem.words(3),
    concluded: faker.datatype.boolean(),
    createdAt: faker.date.past().toLocaleDateString(),
    deadline: faker.date.future().toLocaleDateString(),
  },
];
