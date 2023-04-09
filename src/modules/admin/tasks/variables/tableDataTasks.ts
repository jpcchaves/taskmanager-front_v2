import { ITasks } from "../models/ITasks";
import { faker } from "@faker-js/faker";

export const tableDataTasks: ITasks[] = [
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
