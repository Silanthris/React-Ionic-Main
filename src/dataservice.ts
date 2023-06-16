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
    await createBlTable();

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
  return database.query("CREATE TABLE IF NOT EXISTS cmr ( idCmr INTEGER PRIMARY KEY NOT NULL, idUser INTEGER, code TEXT, file TEXT, fav TEXT, loading TEXT, origin TEXT, delivery TEXT, destination TEXT, carrierBookingReference TEXT ) ");
};

/**
 * create table CMR
 */
 export const createBlTable = async () => {
  // open database
  await database.open();

  // query to create tables on database
  return database.query("CREATE TABLE IF NOT EXISTS bl ( idBl INTEGER PRIMARY KEY NOT NULL, idUser INTEGER, code TEXT, file TEXT, fav TEXT, portOfLoading TEXT, portOfDischarge TEXT, journey TEXT, voyage TEXT) ");
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
 export const getBlbyId = async (Iduser: any) => {
  return await database.query("SELECT * FROM bl WHERE Iduser = ?;", [
    Iduser + "",
  ]);
};

/**
 *
 * @param userId
 */
 export const getCmrbyCode = async (code: any) => {
  return await database.query("SELECT * FROM cmr WHERE code = ?;", [
    code + "",
  ]);
};

/**
 *
 * @param userId
 */
 export const getBlbyCode = async (code: any) => {
  return await database.query("SELECT * FROM bl WHERE code = ?;", [
    code + "",
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
 export const deleteCmrnotFav = async (fav: any) => {
  return await database.query("DELETE FROM cmr WHERE fav = ?;", [
     fav + "",
  ]);
};

/**
 *
 * @param userId
 */
 export const deleteBlnotFav = async (fav: any) => {
  return await database.query("DELETE FROM bl WHERE fav = ?;", [
     fav + "",
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
 * @param fileData
 */
 export const updateCmrbyCode = async (code: any, file: any, loading: any, origin: any, delivery: any, destination: any, carrierBookingReference: any) => {
  return await database.run(
    "UPDATE cmr SET file=?, loading=?, origin=?, delivery=?, destination=?, carrierBookingReference=? WHERE code = ?",
    [file, loading, origin, delivery, destination, carrierBookingReference, code]
  );
};

/**
 *
 * @param fileData
 */
 export const updateBlbyCode = async (file: any, portOfLoading: any, portOfDischarge: any, journey: any, voyage: any, code: any) => {
  return await database.run(
    "UPDATE bl SET file=?, portOfLoading=?, portOfDischarge=?, journey=?, voyage=? WHERE code = ?",
    [file, portOfLoading, portOfDischarge, journey, voyage, code]
  );
};


/**
 *
 * @param idCmr
 */
 export const updateCmrByCodeaddFav = async (idCmr2: any) => {
  const fav = "1";

  console.log("idCmr wtf man")
  console.log(idCmr2)
  const idcmrr = JSON.stringify(idCmr2)
  console.log(idcmrr)

  var partsArray = idcmrr.split(':');
  console.log(partsArray[2])
  console.log(partsArray)

  var partsArray2 = partsArray[1].split('}');
  console.log(partsArray2)

  const idCmr = partsArray2[0]

  return await database.query(
    "UPDATE cmr SET fav=? WHERE idCmr = ?;",
    [ fav, idCmr]
  );
};

/**
 *
 * @param idCmr
 */
 export const updateCmrByCodedelFav = async (idCmr2: any) => {
  const fav = "0";

  const idcmrr = JSON.stringify(idCmr2)
  console.log(idcmrr)

  var partsArray = idcmrr.split(':');
  console.log(partsArray[2])
  console.log(partsArray)

  var partsArray2 = partsArray[1].split('}');
  console.log(partsArray2)

  const idCmr = partsArray2[0]

  return await database.query(
    "UPDATE cmr SET fav=? WHERE idCmr = ?;",
    [ fav, idCmr]
  );
};

/**
 *
 * @param idCmr
 */
 export const updateBlByCodeaddFav = async (idBl2: any) => {
  const fav = "1";

  console.log("idBl wtf man")
  console.log(idBl2)
  const idbll = JSON.stringify(idBl2)
  console.log(idbll)

  var partsArray = idbll.split(':');
  console.log(partsArray[2])
  console.log(partsArray)

  var partsArray2 = partsArray[1].split('}');
  console.log(partsArray2)

  const idBl = partsArray2[0]

  return await database.query(
    "UPDATE bl SET fav=? WHERE idBl = ?;",
    [ fav, idBl]
  );
};

/**
 *
 * @param idCmr
 */
 export const updateBlByCodedelFav = async (idBl2: any) => {
  const fav = "0";

  const idbll = JSON.stringify(idBl2)
  console.log(idbll)

  var partsArray = idbll.split(':');
  console.log(partsArray[2])
  console.log(partsArray)

  var partsArray2 = partsArray[1].split('}');
  console.log(partsArray2)

  const idBl = partsArray2[0]

  return await database.query(
    "UPDATE bl SET fav=? WHERE idBl = ?;",
    [ fav, idBl]
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
  const { idUser, code, file, fav, loading, origin, delivery, destination, carrierBookingReference } = fileData;
  return await database.run(
    "INSERT INTO cmr (idUser,code,file,fav,loading,origin,delivery,destination,carrierBookingReference) VALUES(?,?,?,?,?,?,?,?,?)",
    [idUser, code, file, fav, loading, origin, delivery, destination, carrierBookingReference]
  );
};

/**
 *
 * @param fileData
 */
 export const createBl = async (fileData: any) => {
  const { idUser, code, file, fav, portOfLoading, portOfDischarge, journey, voyage} = fileData;
  return await database.run(
    "INSERT INTO bl (idUser,code,file,fav,portOfLoading,portOfDischarge,journey,voyage) VALUES(?,?,?,?,?,?,?,?)",
    [idUser, code, file, fav, portOfLoading, portOfDischarge, journey, voyage]
  );
};
