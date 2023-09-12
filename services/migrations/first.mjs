import { Kysely } from "kysely";

/**
 * @param db {Kysely<any>}
 */
export async function up(db) {
  //user table
  await db.schema
    .createTable("users")
    .addColumn("id", "integer", (col) => col.autoIncrement().primaryKey())
    .addColumn("email", "text", (col) => col.unique())
    .addColumn("tokens", "integer", (col) => col.default(0))
    .execute();

  await db.schema
    .createTable("projects")
    .addColumn("id", "integer", (col) => col.autoIncrement().primaryKey())
    .addColumn("user_id", "integer", (col) => col.references("users.id"))
    .addColumn("name", "text", (col) => col.unique())
    .addColumn("prompt", "text")
    .addColumn("generated", "boolean", (col) => col.default(false))
    .execute();

  await db.schema
    .createTable("files")
    .addColumn("id", "integer", (col) => col.autoIncrement().primaryKey())
    .addColumn("project_id", "integer", (col) => col.references("projects.id"))
    .addColumn("user_id", "integer", (col) => col.references("user.id"))
    .addColumn("name", "text", (col) => col.unique())
    .addColumn("bucket_name", "text")
    .addColumn("path", "text")
    .addColumn("type", "text") //code | docs | resources | requirements
    .execute();
}

/**
 * @param db {Kysely<any>}
 */
export async function down(db) {
  await db.schema.dropTable("users").execute();
  await db.schema.dropTable("projects").execute();
  await db.schema.dropTable("files").execute();
}
