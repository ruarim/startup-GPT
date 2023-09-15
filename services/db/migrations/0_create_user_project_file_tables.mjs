import { Kysely, sql } from "kysely";

/**
 * @param db {Kysely<any>}
 */
export async function up(db) {
  await db.schema
    .createTable("user")
    .addColumn("id", "integer", (col) => col.primaryKey())
    .addColumn("email", "text", (col) => col.unique().notNull())
    .addColumn("tokens", "integer", (col) => col.defaultTo(0))
    .addColumn("created_at", "timestamp", (col) =>
      col.notNull().defaultTo(sql`now()`)
    )
    .execute();

  await db.schema
    .createTable("project")
    .addColumn("id", "integer", (col) => col.primaryKey())
    .addColumn("user_id", "integer", (col) => col.references("user.id"))
    .addColumn("name", "text", (col) => col.unique().notNull())
    .addColumn("created_at", "timestamp", (col) =>
      col.notNull().defaultTo(sql`now()`)
    )
    .execute();

  await db.schema
    .createTable("prompt")
    .addColumn("id", "integer", (col) => col.primaryKey())
    .addColumn("project_id", "integer", (col) => col.references("project.id"))
    .addColumn("content", "text", (col) => col.unique().notNull())
    .addColumn("investment", "integer", (col) => col.notNull())
    .addColumn("code_gen", "boolean", (col) => col.defaultTo(false))
    .addColumn("generated", "boolean", (col) => col.defaultTo(false))
    .addColumn("created_at", "timestamp", (col) =>
      col.notNull().defaultTo(sql`now()`)
    )
    .execute();

  await db.schema
    .createTable("file")
    .addColumn("id", "integer", (col) => col.primaryKey())
    .addColumn("prompt_id", "integer", (col) => col.references("prompt.id"))
    .addColumn("name", "text", (col) => col.unique().notNull())
    .addColumn("bucket_name", "text", (col) => col.notNull())
    .addColumn("path", "text", (col) => col.notNull())
    .addColumn("type", "text", (col) =>
      col
        .notNull()
        .check(
          sql`type = 'code' OR type = 'docs' OR type = 'resources' OR type = 'requirements'`
        )
    )
    .addColumn("created_at", "timestamp", (col) =>
      col.notNull().defaultTo(sql`now()`)
    )
    .execute();
}

/**
 * @param db {Kysely<any>}
 */
export async function down(db) {
  await db.schema.dropTable("user").execute();
  await db.schema.dropTable("project").execute();
  await db.schema.dropTable("prompt").execute();
  await db.schema.dropTable("file").execute();
}
