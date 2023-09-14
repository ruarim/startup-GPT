import { Kysely, sql } from "kysely";

/**
 * @param db {Kysely<any>}
 */
export async function up(db) {
  await db.schema
    .createTable("users")
    .addColumn("id", "integer", (col) => col.primaryKey())
    .addColumn("email", "text", (col) => col.unique())
    .addColumn("tokens", "integer", (col) => col.defaultTo(0))
    .addColumn("created_at", "timestamp", (col) =>
      col.notNull().defaultTo(sql`now()`)
    )
    .execute();

  await db.schema
    .createTable("projects")
    .addColumn("id", "integer", (col) => col.primaryKey())
    .addColumn("user_id", "integer", (col) => col.references("users.id"))
    .addColumn("name", "text", (col) => col.unique())
    .addColumn("prompt", "text")
    .addColumn("generated", "boolean", (col) => col.defaultTo(false))
    .addColumn("created_at", "timestamp", (col) =>
      col.notNull().defaultTo(sql`now()`)
    )
    .execute();

  await db.schema
    .createTable("files")
    .addColumn("id", "integer", (col) => col.primaryKey())
    .addColumn("project_id", "integer", (col) => col.references("projects.id"))
    .addColumn("user_id", "integer", (col) => col.references("users.id"))
    .addColumn("name", "text", (col) => col.unique())
    .addColumn("bucket_name", "text")
    .addColumn("path", "text")
    .addColumn("type", "text") //code | docs | resources | requirements
    .addColumn("created_at", "timestamp", (col) =>
      col.notNull().defaultTo(sql`now()`)
    )
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
