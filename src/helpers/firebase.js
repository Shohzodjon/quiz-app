// import { db } from "./firebase-config";
// import { collection, getDocs, addDoc } from "firebase/firestore";

// const [users, setUsers] = useState([]);
// const [newName, setNewName] = useState("");
// const [newAge, setNewAge] = useState();
// const usersCollactionRef = collection(db, "users");

// const addUser = async () => {
//   await addDoc(usersCollactionRef, { name: newName, age: newAge });
// };
// useEffect(() => {
//   const getUsers = async () => {
//     const data = await getDocs(usersCollactionRef);
//     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   };
//   getUsers();
// }, []);
