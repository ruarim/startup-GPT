import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Files {
  id: number;
  projectId: number | null;
  userId: number | null;
  name: string | null;
  bucketName: string | null;
  path: string | null;
  type: string | null;
  createdAt: Generated<Timestamp>;
}

export interface Projects {
  id: number;
  userId: number | null;
  name: string | null;
  prompt: string | null;
  generated: Generated<boolean | null>;
  createdAt: Generated<Timestamp>;
}

export interface Users {
  id: number;
  email: string | null;
  tokens: Generated<number | null>;
  createdAt: Generated<Timestamp>;
}

export interface Database {
  files: Files;
  projects: Projects;
  users: Users;
}
