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
    await createSecondaryTable();
    await createCMRTable();


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
  return database.query("CREATE TABLE IF NOT EXISTS utilizador ( id INTEGER PRIMARY KEY NOT NULL,  email TEXT , name TEXT, user_name TEXT, password TEXT, token TEXT, refreshToken TEXT, pin TEXT, last_modified INTEGER DEFAULT (strftime('%s', 'now')) ) ");
};

/**
 * create table Utility
 */
export const createSecondaryTable = async () => {
  // open database
  await database.open();

  // query to create tables on database
  return database.query("CREATE TABLE IF NOT EXISTS utility ( idSecondary INTEGER PRIMARY KEY NOT NULL,  idUser INTEGER, code TEXT) ");
};

/**
 * create table CMR
 */
 export const createCMRTable = async () => {
  // open database
  await database.open();

  // query to create tables on database
  return database.query("CREATE TABLE IF NOT EXISTS cmr ( idCmr INTEGER PRIMARY KEY NOT NULL, idUser INTEGER, code TEXT, file TEXT, fav INTEGER) ");
};

/**
 * query all utilizador from the database
 */
export const queryAllUsers = async () => {
  // open database
  await database.open();

  // query to get all of the utilizador from database
  return database.query("SELECT * from utilizador;");
};

/**
 *
 * @param userId
 */
export const getUserById = async (userId: any) => {
  return await database.query("SELECT * FROM utilizador WHERE id = ?;", [
    userId + "",
  ]);
};

/**
 *
 * @param userId
 */
export const getUtility = async () => {
  return await database.query("SELECT * FROM utility;");
};


/**
 *
 * @param userId
 */
 export const getCmrbyId = async (Iduser: any) => {
  return await database.query("SELECT * FROM cmr WHERE Iduser = ?;", [
    Iduser + "",
  ]);
};


/**
 *
 * @param userId
 */
 export const getAllCmr = async () => {
  return await database.query("SELECT * FROM cmr;");
  
};

/**
 *
 * @param userId
 */
export const deleteUserById = async (userId: any) => {
  return await database.query("DELETE FROM utilizador WHERE id = ?;", [
    userId + "",
  ]);
};

/**
 *
 * @param userId
 */
 export const deleteCmrById = async (userId: any) => {
  return await database.query("DELETE FROM cmr WHERE idUser = ? AND fav = ?;", [
    userId, 0
  ]);
};

/**
 *
 * @param userId
 */
 export const deleteCmrnotFav = async () => {
  return await database.query("DELETE FROM cmr WHERE fav = ?;", [
     0
  ]);
};

/**
 *
 * @param userId
 */
export const deleteUtility = async () => {
  return await database.query("DELETE FROM utility;");
};


/**
 *
 * @param userId
 */
export const updateUserById = async (userId: any, userData: any) => {
  const { name } = userData;
  const { pin } = userData;
  return await database.query(
    "UPDATE utilizador SET name=?, pin=? WHERE id = ?;",
    [name, pin, userId + ""]
  );
};

/**
 *
 * @param userId
 */
export const updatePinById = async (userId: any, userPin: any) => {
  const { pin } = userPin;
  return await database.query(
    "UPDATE utilizador SET pin=? WHERE id = ?;",
    [pin, userId + ""]
  );
};

/**
 *
 * @param userId
 */
export const updateTokenById = async (userId: any, token: any, refreshToken: any) => {
  return await database.query(
    "UPDATE utilizador SET token=?, refreshToken=? WHERE id = ?;",
    [token, refreshToken, userId + ""]
  );
};

/**
 *
 * @param userId
 */
 export const updateCmrByCodeaddFav = async (Code: any) => {
  return await database.query(
    "UPDATE cmr SET fav=? WHERE code = ?;",
    [ 1 , Code]
  );
};

/**
 *
 * @param userId
 */
 export const updateCmrByCodedelFav = async (Code: any) => {
  return await database.query(
    "UPDATE cmr SET fav=? WHERE code = ?;",
    [ 0 , Code]
  );
};

/**
 *
 * @param userData
 */
export const createUser = async (userData: any) => {
  const { name, password, email, pin, token, refreshToken } = userData;
  return await database.run(
    "INSERT INTO utilizador (name,password,email,pin,token,refreshToken) VALUES(?,?,?,?,?,?)",
    [name, password, email, pin, token, refreshToken]
  );
};


/**
 *
 * @param userData
 */
export const createUtility = async (userData: any) => {
  const { idUser, code } = userData;
  return await database.run(
    "INSERT INTO utility (idUser,code) VALUES(?,?)",
    [idUser, code]
  );
};



/**
 *
 * @param fileData
 */
 export const createCmr = async (fileData: any) => {
  const { idUser, code, file, fav } = fileData;
  return await database.run(
    "INSERT INTO cmr (idUser,code,file,fav) VALUES(?,?,?,?)",
    [idUser, code, file, fav]
  );
};

