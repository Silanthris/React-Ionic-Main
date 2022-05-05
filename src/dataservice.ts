// SQLITE IMPORTS
import { Plugins } from "@capacitor/core";
import { SQLiteConnection } from "@capacitor-community/sqlite";


const { CapacitorSQLite } = Plugins;

const mSQLite = new SQLiteConnection(CapacitorSQLite);
let database: any;

/**
 * initialize database..
 */
export const initdb = async () => {
  try {
    database = await mSQLite.createConnection(
      "testdb",
      false,
      "no-encryption",
      1
    );


    await createTables();

    return database;
  } catch (e) {
    window.alert(JSON.stringify(e, null, 2));
    return null;
  }
};

/**
 * create table UTILIZADORES
 */
export const createTables = async () => {
  // open database
  await database.open();

  // query to create tables on database
  return database.query("CREATE TABLE IF NOT EXISTS users ( id INTEGER PRIMARY KEY NOT NULL,  email TEXT , name TEXT, user_name TEXT, password TEXT, token TEXT, refreshToken TEXT, pin TEXT, last_modified INTEGER DEFAULT (strftime('%s', 'now')) ) ");
};


/**
 * query all users from the database
 */
export const queryAllUsers = async () => {
  // open database
  await database.open();

  // query to get all of the users from database
  return database.query("SELECT * from USERS;");
};

/**
 *
 * @param userId
 */
export const getUserById = async (userId: any) => {
  return await database.query("SELECT * FROM users WHERE id = ?;", [
    userId + "",
  ]);
};

/**
 *
 * @param userId
 */
export const deleteUserById = async (userId: any) => {
  return await database.query("DELETE FROM users WHERE id = ?;", [
    userId + "",
  ]);
};


/**
 *
 * @param userId
 */
export const updateUserById = async (userId: any, userData: any) => {
  const { name } = userData;
  const { pin } = userData;
  return await database.query(
    "UPDATE users SET name=?, pin=? WHERE id = ?;",
    [name,pin, userId + ""]
  );
};

/**
 *
 * @param userId
 */
 export const updatePinById = async (userId: any, userPin: any) => {
  const { pin } = userPin;
  return await database.query(
    "UPDATE users SET pin=? WHERE id = ?;",
    [pin, userId + ""]
  );
};

/**
 *
 * @param userData
 */
export const createUser = async (userData: any) => {
  const { name, password, email, pin, token, refreshToken } = userData;
  return await database.run(
    "INSERT INTO users (name,password,email,pin,token,refreshToken) VALUES(?,?,?,?,?,?)",
    [name, password, email, pin, token, refreshToken]
  );
};
