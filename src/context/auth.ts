import { Alert } from "react-native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../service/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const loginUser = async (email: string, password: string) => {
  try {
    if(email && password) {
      const response = await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Usuário logado');
        return true;
      })
      .catch(() => {
        Alert.alert('Falha ao logar, verifique suas credenciais e tente novamente!')
        return false;
      });
    } else {
      Alert.alert("Erro, por favor, preencha todos os campos e tente novamente!")
    }
  } catch {
    Alert.alert('Falha ao logar, por favor, verifique seus dados e tente novamente!')
  }
}

const createUser = (name: string, email: string, password: string, weight: string, height: string) => {
  if (name && email && password && weight && height) {
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async data => {
          await setDoc(doc(db, "Usuarios", data.user.uid), {
            nome: name,
            email: email,
            peso: weight,
            altura: height
          })
          Alert.alert('Usuário cadastrado com sucesso!')
        }).catch(error => Alert.alert('Erro ao criar usuário, por favor tente novamente mais tarde'))
    } catch {
      Alert.alert('Falha ao cadastrar usuário, por favor, verifique seus dados e tente novamente!')
    }
  } else {
    Alert.alert("Erro, por favor, preencha todos os campos e tente novamente!")
  }
}

export { createUser, loginUser }
