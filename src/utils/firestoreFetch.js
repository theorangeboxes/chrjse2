import { db } from "../utils/firebaseConfig";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

const firestoreFetch = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const querySnapshot2 = await getDocs(collection(db, "category"));
  const categoryFromFirestore = querySnapshot2.docs.map((i) => ({
    idFS: i.id,
    ...i.data(),
  }));
  console.log(categoryFromFirestore);
  const dataFromFirebase = querySnapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
    category: categoryFromFirestore.filter(
      (i) => i.idFS === item.data().category.id
    )[0],
  }));

  return dataFromFirebase;
};

export default firestoreFetch;
