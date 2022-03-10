import { db } from "../utils/firebaseConfig";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";

const firestoreFetch = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const querySnapshot2 = await getDocs(collection(db, "category"));
  const categoryFromFirestore = querySnapshot2.docs.map((i) => ({
    idFS: i.id,
    ...i.data(),
  }));
  console.log(categoryFromFirestore);
  const dataFromFirebase = querySnapshot.docs.map((item) => ({
    idFS: item.id,
    ...item.data(),
    category: categoryFromFirestore.filter(
      (i) => i.idFS === item.data().category.id
    )[0],
  }));

  return dataFromFirebase;
};

export const createOrderFirestore = async (order) => {
  const newOrderRef = doc(collection(db, "orders"));
  await setDoc(newOrderRef, order);
  return newOrderRef;
};

export default firestoreFetch;
