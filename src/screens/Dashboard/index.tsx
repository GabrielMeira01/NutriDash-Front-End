import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { arrayUnion, doc, getDoc } from "@firebase/firestore";
import React, { useState } from "react";
import { Text, View, SafeAreaView, Alert } from "react-native";
import { Background } from "../../components/Background";
import { SmallCard } from "../../components/SmallCard/Index";
import {
  calcBasalMetabolicRate,
  calcCarb,
  calcFatness,
  calcProtein,
} from "../../context/calc";
import { db } from "../../firebase/FirebaseConfig";

import { styles } from "./styles";
import { LogBox } from "react-native";
import { taco } from "../../helpers/tabelaTaco";

// Ignore log notification by message:
LogBox.ignoreLogs(["Warning: ..."]);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

export function Dashboard() {
  const [name, setName] = React.useState("");
  const [weight, setWeight] = React.useState(Number);
  const [height, setHeight] = React.useState(Number);
  const [birthDate, setBirthDate] = React.useState("");
  const [genre, setGenre] = React.useState(Number);
  const [typeDiet, setTypeDiet] = React.useState(Number);
  const [physicalActivity, setPhysicalActivity] = React.useState(Number);
  const [items, setItems] = React.useState("");
  const [carbohydrate, setCarbohydrate] = React.useState(0);
  const [proteine, setProtein] = React.useState(0);
  const [calories, setCalories] = React.useState(0);
  const [lipid, setLipid] = React.useState(0);

  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const docRef = doc(db, "Usuarios", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const user = docSnap.data();
        const data = {
          name: user.nome,
          weight: user.peso,
          height: user.altura,
          birthDate: user.dataNascimento,
          genre: user.sexo,
          physicalActivity: user.atividadeFisica,
          typeDiete: user.tipoDieta,
        };

        setName(data.name);
        setWeight(data.weight);
        setHeight(data.height);
        setBirthDate(data.birthDate);
        setGenre(data.genre);
        setPhysicalActivity(data.physicalActivity);
        setTypeDiet(data.typeDiete);
      }
    }

    if (user) {
      const docRefFood = doc(db, "Alimentos", user.uid);
      const docSnapFood = await getDoc(docRefFood);
      if (docSnapFood.exists()) {
        const user = docSnapFood.data();
        const data = user.items;

        setItems(data.items);

        let listCarb = [];
        let listProtein = [];
        let listLipid = [];
        let listCalories = [];

        for (let i = 0; i < user.items.length; i++) {
          let array = user.items[i].comida;
          let count = array - 1;
          const table = taco[count];
          listCarb.push(Number(table.carbohydrate_g));
          listProtein.push(Number(table.protein_g));
          listLipid.push(Number(table.lipid_g));
          listCalories.push(Number(table.calories_g));
        }

        const resultCarb = listCarb.reduce((sum, item) => {
          return sum + item;
        });

        const resultProtein = listProtein.reduce((sum, item) => {
          return sum + item;
        });

        const resultLipid = listLipid.reduce((sum, item) => {
          return sum + item;
        });

        const resultCalories = listCalories.reduce((sum, item) => {
          return sum + item;
        });

        setCarbohydrate(resultCarb * 4);
        setProtein(resultProtein * 4);
        setLipid(resultLipid * 9);
        setCalories(resultCalories * 4);
      }
    }
  });

  const getCalories =
    calcBasalMetabolicRate(
      genre,
      weight,
      height,
      birthDate,
      physicalActivity
    ) === NaN
      ? 0
      : calcBasalMetabolicRate(
          genre,
          weight,
          height,
          birthDate,
          physicalActivity
        );
  const getFatness = calcFatness(weight) === NaN ? 0 : calcFatness(weight);
  const getProtein =
    calcProtein(weight, physicalActivity) === null
      ? 0
      : calcProtein(weight, physicalActivity);
  const getCarb =
    calcCarb(weight, physicalActivity) === null
      ? 0
      : calcCarb(weight, physicalActivity);

  return (
    <Background>
      <SafeAreaView style={styles.adroidSafeArea}>
        <Text style={styles.helloUser}>Bem vindo, {name}!</Text>
        <View style={styles.container}>
          <SmallCard
            title={"Calorias"}
            content={`Você consumiu ${calories.toFixed(
              0
            )}  Kcal até o momento`}
          />
          <SmallCard
            title={"Carboidratos"}
            content={`Você consumiu ${carbohydrate.toFixed(
              0
            )} Kcal até o momento`}
          />
          <SmallCard
            title={"Gordura"}
            content={`Você consumiu ${lipid.toFixed(
              0
            )} Kcal até o momento`}
          />
          <SmallCard
            title={"Proteina"}
            content={`Você consumiu ${proteine.toFixed(
              0
            )} Kcal de ${getProtein?.toFixed(0)} Kcal`}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}
