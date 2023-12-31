import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface File {
  id: number;
  promptId: number | null;
  name: string;
  bucketName: string;
  path: string;
  type: string;
  createdAt: Generated<Timestamp>;
}

export interface Project {
  id: number;
  userId: number | null;
  name: string;
  createdAt: Generated<Timestamp>;
}

export interface Prompt {
  id: number;
  projectId: number | null;
  content: string;
  investment: number;
  codeGen: Generated<boolean | null>;
  generated: Generated<boolean | null>;
  createdAt: Generated<Timestamp>;
}

export interface User {
  id: number;
  email: string;
  tokens: Generated<number | null>;
  createdAt: Generated<Timestamp>;
}

export interface Database {
  file: File;
  project: Project;
  prompt: Prompt;
  user: User;
}
