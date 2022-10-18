import { Alert } from "react-native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";
import { db, auth } from "../service/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const loginUser = async (email: string, password: string) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return true
      })
      .catch(() => {
        Alert.alert('Falha ao logar, verifique suas credenciais e tente novamente!')
        return false
      })

      return response
  } catch {
    Alert.alert('Falha ao logar, por favor, verifique seus dados e tente novamente!')
    return false
  }
}

const validateLoginUser = async (email: string, password: string) => {
  if (email && password) {
    return await loginUser(email, password)
  } else {
    Alert.alert("Erro, por favor, preencha todos os campos e tente novamente!")
    return false
  }
}

const insertUser = async (name: string, email: string, password: string, weight: string, height: string) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password)
      .then(async data => {
        await setDoc(doc(db, "Usuarios", data.user.uid), {
          nome: name,
          email: email,
          peso: weight,
          altura: height
        })
        Alert.alert("Usuario criado com sucesso!")
      })
    return true
  } catch {
    Alert.alert("Erro, por favor, tente novamente mais taride!")
    return false
  }
}

const validateUserInsertion = async (name: string, email: string, password: string, confirmPassword: string, weight: string, height: string) => {
  if (name && email && password && confirmPassword && weight && height) {
    if (password !== confirmPassword) {
      Alert.alert("Por favor, verifique o campo senha e tente novamente!")
      return false
    } else {
      return await insertUser(name, email, password, weight, height)
    }
  } else {
    Alert.alert("Erro, por favor, preencha todos os campos e tente novamente!")
    return false
  }
}

const forgetPassword = ( email: string) => {
  if (email) {
    try {
      sendPasswordResetEmail(auth, email).
     then(() =>  Alert.alert( 'Redefinir senha', "E-mail enviado com sucesso"))
    }
   catch {
      Alert.alert('Falha ao cadastrar usuário, por favor, verifique seus dados e tente novamente!')
    }
  } else {
    Alert.alert("Erro, por favor, preencha todos os campos e tente novamente!")
  }

}

export { validateUserInsertion, validateLoginUser, forgetPassword }