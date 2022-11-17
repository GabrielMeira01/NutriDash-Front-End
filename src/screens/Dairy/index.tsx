import React from "react";
import { Background } from "../../components/Background";
import RNPickerSelect from "react-native-picker-select";
import { styles } from "./styles";
import { LogBox, SafeAreaView, View, Alert, Text } from "react-native";
import { db, auth } from "../../firebase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import ModalDropdown from "react-native-modal-dropdown";

// Ignore log notification by message:
LogBox.ignoreLogs(["Warning: ..."]);

// Ignore all log notifications:
LogBox.ignoreAllLogs();
export function Dairy() {
  const [food, setFood] = React.useState(Number);
  const [newFood, setNewFood] = React.useState(Number);

  const addCollection = async (food: Number) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        await addDoc(collection(db, "Usuarios", uid, "comida"), {
          alimento: Number(food),
        });

        Alert.alert("Item adicionado");
      } else {
        Alert.alert(
          "Erro, por favor, preencha todos os campos e tente novamente!"
        );
        return false;
      }
    });
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
        <RNPickerSelect
                 onValueChange={(value) => setFood(value)}
                 items={[
                  {"label":"Arroz, integral, cozido","value":"1"},
                  {"label":"Arroz, integral, cru","value":"2"},
                  {"label":"Arroz, tipo 1, cozido","value":"3"},
                  {"label":"Arroz, tipo 1, cru","value":"4"},
                  {"label":"Arroz, tipo 2, cozido","value":"5"},
                  {"label":"Arroz, tipo 2, cru","value":"6"},
                  {"label":"Aveia, flocos, crua","value":"7"},
                  {"label":"Biscoito, doce, maisena","value":"8"},
                  {"label":"Biscoito, doce, recheado com chocolate","value":"9"},
                  {"label":"Biscoito, doce, recheado com morango","value":"10"},
                  {"label":"Biscoito, doce, wafer, recheado de chocolate","value":"11"},
                  {"label":"Biscoito, doce, wafer, recheado de morango","value":"12"},
                  {"label":"Biscoito, salgado, cream cracker","value":"13"},
                  {"label":"Bolo, mistura para","value":"14"},
                  {"label":"Bolo, pronto, aipim","value":"15"},
                  {"label":"Bolo, pronto, chocolate","value":"16"},
                  {"label":"Bolo, pronto, coco","value":"17"},
                  {"label":"Bolo, pronto, milho","value":"18"},
                  {"label":"Canjica, branca, crua","value":"19"},
                  {"label":"Canjica, com leite integral","value":"20"},
                  {"label":"Cereais, milho, flocos, com sal","value":"21"},
                  {"label":"Cereais, milho, flocos, sem sal","value":"22"},
                  {"label":"Cereais, mingau, milho, infantil","value":"23"},
                  {"label":"Cereais, mistura para vitamina, trigo, cevada e aveia","value":"24"},
                  {"label":"Cereal matinal, milho","value":"25"},
                  {"label":"Cereal matinal, milho, a��car","value":"26"}
                  ,
                  {"label":"Creme de arroz, p�","value":"27"}
                  ,
                  {"label":"Creme de milho, p�","value":"28"}
                  ,
                  {"label":"Curau, milho verde","value":"29"},
                  {"label":"Curau, milho verde, mistura para","value":"30"},
                  {"label":"Farinha, de arroz, enriquecida","value":"31"},
                  {"label":"Farinha, de centeio, integral","value":"32"},
                  {"label":"Farinha, de milho, amarela","value":"33"},
                  {"label":"Farinha, de rosca","value":"34"},
                  {"label":"Farinha, de trigo","value":"35"},
                  {"label":"Farinha, l�ctea, de cereais","value":"36"}
                  ,
                  {"label":"Lasanha, massa fresca, cozida","value":"37"},
                  {"label":"Lasanha, massa fresca, crua","value":"38"},
                  {"label":"Macarr�o, instant�neo","value":"39"}
                  ,
                  {"label":"Macarr�o, trigo, cru","value":"40"}
                  ,
                  {"label":"Macarr�o, trigo, cru, com ovos","value":"41"}
                  ,
                  {"label":"Milho, amido, cru","value":"42"},
                  {"label":"Milho, fub�, cru","value":"43"}
                  ,
                  {"label":"Milho, verde, cru","value":"44"},
                  {"label":"Milho, verde, enlatado, drenado","value":"45"},
                  {"label":"Mingau tradicional, p�","value":"46"}
                  ,
                  {"label":"Pamonha, barra para cozimento, pr�-cozida","value":"47"}
                  ,
                  {"label":"P�o, aveia, forma","value":"48"}
                  ,
                  {"label":"P�o, de soja","value":"49"}
                  ,
                  {"label":"P�o, gl�ten, forma","value":"50"}
                  ,
                  {"label":"P�o, milho, forma","value":"51"}
                  ,
                  {"label":"P�o, trigo, forma, integral","value":"52"}
                  ,
                  {"label":"P�o, trigo, franc�s","value":"53"}
                  ,
                  {"label":"P�o, trigo, sovado","value":"54"}
                  ,
                  {"label":"Pastel, de carne, cru","value":"55"},
                  {"label":"Pastel, de carne, frito","value":"56"},
                  {"label":"Pastel, de queijo, cru","value":"57"},
                  {"label":"Pastel, de queijo, frito","value":"58"},
                  {"label":"Pastel, massa, crua","value":"59"},
                  {"label":"Pastel, massa, frita","value":"60"},
                  {"label":"Pipoca, com �leo de soja, sem sal","value":"61"}
                  ,
                  {"label":"Polenta, pr�-cozida","value":"62"}
                  ,
                  {"label":"Torrada, p�o franc�s","value":"63"}
                  ,
                  {"label":"Ab�bora, cabotian, cozida","value":"64"}
                  ,
                  {"label":"Ab�bora, cabotian, crua","value":"65"}
                  ,
                  {"label":"Ab�bora, menina brasileira, crua","value":"66"}
                  ,
                  {"label":"Ab�bora, moranga, crua","value":"67"}
                  ,
                  {"label":"Ab�bora, moranga, refogada","value":"68"}
                  ,
                  {"label":"Ab�bora, pesco�o, crua","value":"69"}
                  ,
                  {"label":"Abobrinha, italiana, cozida","value":"70"},
                  {"label":"Abobrinha, italiana, crua","value":"71"},
                  {"label":"Abobrinha, italiana, refogada","value":"72"},
                  {"label":"Abobrinha, paulista, crua","value":"73"},
                  {"label":"Acelga, crua","value":"74"},
                  {"label":"Agri�o, cru","value":"75"}
                  ,
                  {"label":"Aipo, cru","value":"76"},
                  {"label":"Alface, americana, crua","value":"77"},
                  {"label":"Alface, crespa, crua","value":"78"},
                  {"label":"Alface, lisa, crua","value":"79"},
                  {"label":"Alface, roxa, crua","value":"80"},
                  {"label":"Alfavaca, crua","value":"81"},
                  {"label":"Alho, cru","value":"82"},
                  {"label":"Alho-por�, cru","value":"83"}
                  ,
                  {"label":"Almeir�o, cru","value":"84"}
                  ,
                  {"label":"Almeir�o, refogado","value":"85"}
                  ,
                  {"label":"Batata, baroa, cozida","value":"86"},
                  {"label":"Batata, baroa, crua","value":"87"},
                  {"label":"Batata, doce, cozida","value":"88"},
                  {"label":"Batata, doce, crua","value":"89"},
                  {"label":"Batata, frita, tipo chips, industrializada","value":"90"},
                  {"label":"Batata, inglesa, cozida","value":"91"},
                  {"label":"Batata, inglesa, crua","value":"92"},
                  {"label":"Batata, inglesa, frita","value":"93"},
                  {"label":"Batata, inglesa, saut�","value":"94"}
                  ,
                  {"label":"Berinjela, cozida","value":"95"},
                  {"label":"Berinjela, crua","value":"96"},
                  {"label":"Beterraba, cozida","value":"97"},
                  {"label":"Beterraba, crua","value":"98"},
                  {"label":"Biscoito, polvilho doce","value":"99"},
                  {"label":"Br�colis, cozido","value":"100"}
                  ,
                  {"label":"Br�colis, cru","value":"101"}
                  ,
                  {"label":"Car�, cozido","value":"102"}
                  ,
                  {"label":"Car�, cru","value":"103"}
                  ,
                  {"label":"Caruru, cru","value":"104"},
                  {"label":"Catalonha, crua","value":"105"},
                  {"label":"Catalonha, refogada","value":"106"},
                  {"label":"Cebola, crua","value":"107"},
                  {"label":"Cebolinha, crua","value":"108"},
                  {"label":"Cenoura, cozida","value":"109"},
                  {"label":"Cenoura, crua","value":"110"},
                  {"label":"Chic�ria, crua","value":"111"}
                  ,
                  {"label":"Chuchu, cozido","value":"112"},
                  {"label":"Chuchu, cru","value":"113"},
                  {"label":"Coentro, folhas desidratadas","value":"114"},
                  {"label":"Couve, manteiga, crua","value":"115"},
                  {"label":"Couve, manteiga, refogada","value":"116"},
                  {"label":"Couve-flor, crua","value":"117"},
                  {"label":"Couve-flor, cozida","value":"118"},
                  {"label":"Espinafre, Nova Zel�ndia, cru","value":"119"}
                  ,
                  {"label":"Espinafre, Nova Zel�ndia, refogado","value":"120"}
                  ,
                  {"label":"Farinha, de mandioca, crua","value":"121"},
                  {"label":"Farinha, de mandioca, torrada","value":"122"},
                  {"label":"Farinha, de puba","value":"123"},
                  {"label":"F�cula, de mandioca","value":"124"}
                  ,
                  {"label":"Feij�o, broto, cru","value":"125"}
                  ,
                  {"label":"Inhame, cru","value":"126"},
                  {"label":"Jil�, cru","value":"127"}
                  ,
                  {"label":"Jurubeba, crua","value":"128"},
                  {"label":"Mandioca, cozida","value":"129"},
                  {"label":"Mandioca, crua","value":"130"},
                  {"label":"Mandioca, farofa, temperada","value":"131"},
                  {"label":"Mandioca, frita","value":"132"},
                  {"label":"Manjeric�o, cru","value":"133"}
                  ,
                  {"label":"Maxixe, cru","value":"134"},
                  {"label":"Mostarda, folha, crua","value":"135"},
                  {"label":"Nhoque, batata, cozido","value":"136"},
                  {"label":"Nabo, cru","value":"137"},
                  {"label":"Palmito, Ju�ara, em conserva","value":"138"}
                  ,
                  {"label":"Palmito, pupunha, em conserva","value":"139"},
                  {"label":"P�o, de queijo, assado","value":"140"}
                  ,
                  {"label":"P�o, de queijo, cru","value":"141"}
                  ,
                  {"label":"Pepino, cru","value":"142"},
                  {"label":"Piment�o, amarelo, cru","value":"143"}
                  ,
                  {"label":"Piment�o, verde, cru","value":"144"}
                  ,
                  {"label":"Piment�o, vermelho, cru","value":"145"}
                  ,
                  {"label":"Polvilho, doce","value":"146"},
                  {"label":"Quiabo, cru","value":"147"},
                  {"label":"Rabanete, cru","value":"148"},
                  {"label":"Repolho, branco, cru","value":"149"},
                  {"label":"Repolho, roxo, cru","value":"150"},
                  {"label":"Repolho, roxo, refogado","value":"151"},
                  {"label":"R�cula, crua","value":"152"}
                  ,
                  {"label":"Salsa, crua","value":"153"},
                  {"label":"Seleta de legumes, enlatada","value":"154"},
                  {"label":"Serralha, crua","value":"155"},
                  {"label":"Taioba, crua","value":"156"},
                  {"label":"Tomate, com semente, cru","value":"157"},
                  {"label":"Tomate, extrato","value":"158"},
                  {"label":"Tomate, molho industrializado","value":"159"},
                  {"label":"Tomate, pur�","value":"160"}
                  ,
                  {"label":"Tomate, salada","value":"161"},
                  {"label":"Vagem, crua","value":"162"},
                  {"label":"Abacate, cru","value":"163"},
                  {"label":"Abacaxi, cru","value":"164"},
                  {"label":"Abacaxi, polpa, congelada","value":"165"},
                  {"label":"Abiu, cru","value":"166"},
                  {"label":"A�a�, polpa, com xarope de guaran� e glucose","value":"167"}
                  ,
                  {"label":"A�a�, polpa, congelada","value":"168"}
                  ,
                  {"label":"Acerola, crua","value":"169"},
                  {"label":"Acerola, polpa, congelada","value":"170"},
                  {"label":"Ameixa, calda, enlatada","value":"171"},
                  {"label":"Ameixa, crua","value":"172"},
                  {"label":"Ameixa, em calda, enlatada, drenada","value":"173"},
                  {"label":"Atem�ia, crua","value":"174"}
                  ,
                  {"label":"Banana, da terra, crua","value":"175"},
                  {"label":"Banana, doce em barra","value":"176"},
                  {"label":"Banana, figo, crua","value":"177"},
                  {"label":"Banana, ma��, crua","value":"178"}
                  ,
                  {"label":"Banana, nanica, crua","value":"179"},
                  {"label":"Banana, ouro, crua","value":"180"},
                  {"label":"Banana, pacova, crua","value":"181"},
                  {"label":"Banana, prata, crua","value":"182"},
                  {"label":"Cacau, cru","value":"183"},
                  {"label":"Caj�-Manga, cru","value":"184"}
                  ,
                  {"label":"Caj�, polpa, congelada","value":"185"}
                  ,
                  {"label":"Caju, cru","value":"186"},
                  {"label":"Caju, polpa, congelada","value":"187"},
                  {"label":"Caju, suco concentrado, envasado","value":"188"},
                  {"label":"Caqui, chocolate, cru","value":"189"},
                  {"label":"Carambola, crua","value":"190"},
                  {"label":"Ciriguela, crua","value":"191"},
                  {"label":"Cupua�u, cru","value":"192"}
                  ,
                  {"label":"Cupua�u, polpa, congelada","value":"193"}
                  ,
                  {"label":"Figo, cru","value":"194"},
                  {"label":"Figo, enlatado, em calda","value":"195"},
                  {"label":"Fruta-p�o, crua","value":"196"}
                  ,
                  {"label":"Goiaba, branca, com casca, crua","value":"197"},
                  {"label":"Goiaba, doce em pasta","value":"198"},
                  {"label":"Goiaba, doce, casc�o","value":"199"}
                  ,
                  {"label":"Goiaba, vermelha, com casca, crua","value":"200"},
                  {"label":"Graviola, crua","value":"201"},
                  {"label":"Graviola, polpa, congelada","value":"202"},
                  {"label":"Jabuticaba, crua","value":"203"},
                  {"label":"Jaca, crua","value":"204"},
                  {"label":"Jambo, cru","value":"205"},
                  {"label":"Jamel�o, cru","value":"206"}
                  ,
                  {"label":"Kiwi, cru","value":"207"},
                  {"label":"Laranja, ba�a, crua","value":"208"}
                  ,
                  {"label":"Laranja, ba�a, suco","value":"209"}
                  ,
                  {"label":"Laranja, da terra, crua","value":"210"},
                  {"label":"Laranja, da terra, suco","value":"211"},
                  {"label":"Laranja, lima, crua","value":"212"},
                  {"label":"Laranja, lima, suco","value":"213"},
                  {"label":"Laranja, p�ra, crua","value":"214"}
                  ,
                  {"label":"Laranja, p�ra, suco","value":"215"}
                  ,
                  {"label":"Laranja, val�ncia, crua","value":"216"}
                  ,
                  {"label":"Laranja, val�ncia, suco","value":"217"}
                  ,
                  {"label":"Lim�o, cravo, suco","value":"218"}
                  ,
                  {"label":"Lim�o, galego, suco","value":"219"}
                  ,
                  {"label":"Lim�o, tahiti, cru","value":"220"}
                  ,
                  {"label":"Ma��, Argentina, com casca, crua","value":"221"}
                  ,
                  {"label":"Ma��, Fuji, com casca, crua","value":"222"}
                  ,
                  {"label":"Maca�ba, crua","value":"223"}
                  ,
                  {"label":"Mam�o, doce em calda, drenado","value":"224"}
                  ,
                  {"label":"Mam�o, Formosa, cru","value":"225"}
                  ,
                  {"label":"Mam�o, Papaia, cru","value":"226"}
                  ,
                  {"label":"Mam�o verde, doce em calda, drenado","value":"227"}
                  ,
                  {"label":"Manga, Haden, crua","value":"228"},
                  {"label":"Manga, Palmer, crua","value":"229"},
                  {"label":"Manga, polpa, congelada","value":"230"},
                  {"label":"Manga, Tommy Atkins, crua","value":"231"},
                  {"label":"Maracuj�, cru","value":"232"}
                  ,
                  {"label":"Maracuj�, polpa, congelada","value":"233"}
                  ,
                  {"label":"Maracuj�, suco concentrado, envasado","value":"234"}
                  ,
                  {"label":"Melancia, crua","value":"235"},
                  {"label":"Mel�o, cru","value":"236"}
                  ,
                  {"label":"Mexerica, Murcote, crua","value":"237"},
                  {"label":"Mexerica, Rio, crua","value":"238"},
                  {"label":"Morango, cru","value":"239"},
                  {"label":"N�spera, crua","value":"240"}
                  ,
                  {"label":"Pequi, cru","value":"241"},
                  {"label":"P�ra, Park, crua","value":"242"}
                  ,
                  {"label":"P�ra, Williams, crua","value":"243"}
                  ,
                  {"label":"P�ssego, Aurora, cru","value":"244"}
                  ,
                  {"label":"P�ssego, enlatado, em calda","value":"245"}
                  ,
                  {"label":"Pinha, crua","value":"246"},
                  {"label":"Pitanga, crua","value":"247"},
                  {"label":"Pitanga, polpa, congelada","value":"248"},
                  {"label":"Rom�, crua","value":"249"}
                  ,
                  {"label":"Tamarindo, cru","value":"250"},
                  {"label":"Tangerina, Ponc�, crua","value":"251"}
                  ,
                  {"label":"Tangerina, Ponc�, suco","value":"252"}
                  ,
                  {"label":"Tucum�, cru","value":"253"}
                  ,
                  {"label":"Umbu, cru","value":"254"},
                  {"label":"Umbu, polpa, congelada","value":"255"},
                  {"label":"Uva, It�lia, crua","value":"256"}
                  ,
                  {"label":"Uva, Rubi, crua","value":"257"},
                  {"label":"Uva, suco concentrado, envasado","value":"258"},
                  {"label":"Azeite, de dend�","value":"259"}
                  ,
                  {"label":"Azeite, de oliva, extra virgem","value":"260"},
                  {"label":"Manteiga, com sal","value":"261"},
                  {"label":"Manteiga, sem sal","value":"262"},
                  {"label":"Margarina, com �leo hidrogenado, com sal (65% de lip�deos)","value":"263"}
                  ,
                  {"label":"Margarina, com �leo hidrogenado, sem sal (80% de lip�deos)","value":"264"}
                  ,
                  {"label":"Margarina, com �leo interesterificado, com sal (65%de lip�deos)","value":"265"}
                  ,
                  {"label":"Margarina, com �leo interesterificado, sem sal (65% de lip�deos)","value":"266"}
                  ,
                  {"label":"�leo, de baba�u","value":"267"}
                  ,
                  {"label":"�leo, de canola","value":"268"}
                  ,
                  {"label":"�leo, de girassol","value":"269"}
                  ,
                  {"label":"�leo, de milho","value":"270"}
                  ,
                  {"label":"�leo, de pequi","value":"271"}
                  ,
                  {"label":"�leo, de soja","value":"272"}
                  ,
                  {"label":"Abadejo, fil�, congelado, assado","value":"273"}
                  ,
                  {"label":"Abadejo, fil�, congelado,cozido","value":"274"}
                  ,
                  {"label":"Abadejo, fil�, congelado, cru","value":"275"}
                  ,
                  {"label":"Abadejo, fil�, congelado, grelhado","value":"276"}
                  ,
                  {"label":"Atum, conserva em �leo","value":"277"}
                  ,
                  {"label":"Atum, fresco, cru","value":"278"},
                  {"label":"Bacalhau, salgado, cru","value":"279"},
                  {"label":"Bacalhau, salgado, refogado","value":"280"},
                  {"label":"Ca��o, posta, com farinha de trigo, frita","value":"281"}
                  ,
                  {"label":"Ca��o, posta, cozida","value":"282"}
                  ,
                  {"label":"Ca��o, posta, crua","value":"283"}
                  ,
                  {"label":"Camar�o, Rio Grande, grande, cozido","value":"284"}
                  ,
                  {"label":"Camar�o, Rio Grande, grande, cru","value":"285"}
                  ,
                  {"label":"Camar�o, Sete Barbas, sem cabe�a, com casca, frito","value":"286"}
                  ,
                  {"label":"Caranguejo, cozido","value":"287"},
                  {"label":"Corimba, cru","value":"288"},
                  {"label":"Corimbat�, assado","value":"289"}
                  ,
                  {"label":"Corimbat�, cozido","value":"290"}
                  ,
                  {"label":"Corvina de �gua doce, crua","value":"291"}
                  ,
                  {"label":"Corvina do mar, crua","value":"292"},
                  {"label":"Corvina grande, assada","value":"293"},
                  {"label":"Corvina grande, cozida","value":"294"},
                  {"label":"Dourada de �gua doce, fresca","value":"295"}
                  ,
                  {"label":"Lambari, congelado, cru","value":"296"},
                  {"label":"Lambari, congelado, frito","value":"297"},
                  {"label":"Lambari, fresco,cru","value":"298"},
                  {"label":"Manjuba, com farinha de trigo, frita","value":"299"},
                  {"label":"Manjuba, frita","value":"300"},
                  {"label":"Merluza, fil�, assado","value":"301"}
                  ,
                  {"label":"Merluza, fil�, cru","value":"302"}
                  ,
                  {"label":"Merluza, fil�, frito","value":"303"}
                  ,
                  {"label":"Pescada, branca, crua","value":"304"},
                  {"label":"Pescada, branca, frita","value":"305"},
                  {"label":"Pescada, fil�, com farinha de trigo, frito","value":"306"}
                  ,
                  {"label":"Pescada, fil�, cru","value":"307"}
                  ,
                  {"label":"Pescada, fil�, frito","value":"308"}
                  ,
                  {"label":"Pescada, fil�, molho escabeche","value":"309"}
                  ,
                  {"label":"Pescadinha, crua","value":"310"},
                  {"label":"Pintado, assado","value":"311"},
                  {"label":"Pintado, cru","value":"312"},
                  {"label":"Pintado, grelhado","value":"313"},
                  {"label":"Porquinho, cru","value":"314"},
                  {"label":"Salm�o, fil�, com pele, fresco,  grelhado","value":"315"}
                  ,
                  {"label":"Salm�o, sem pele, fresco, cru","value":"316"}
                  ,
                  {"label":"Salm�o, sem pele, fresco, grelhado","value":"317"}
                  ,
                  {"label":"Sardinha, assada","value":"318"},
                  {"label":"Sardinha, conserva em �leo","value":"319"}
                  ,
                  {"label":"Sardinha, frita","value":"320"},
                  {"label":"Sardinha, inteira, crua","value":"321"},
                  {"label":"Tucunar�, fil�, congelado, cru","value":"322"}
                  ,
                  {"label":"Apresuntado","value":"323"},
                  {"label":"Caldo de carne, tablete","value":"324"},
                  {"label":"Caldo de galinha, tablete","value":"325"},
                  {"label":"Carne, bovina, ac�m, mo�do, cozido","value":"326"}
                  ,
                  {"label":"Carne, bovina, ac�m, mo�do, cru","value":"327"}
                  ,
                  {"label":"Carne, bovina, ac�m, sem gordura, cozido","value":"328"}
                  ,
                  {"label":"Carne, bovina, ac�m, sem gordura, cru","value":"329"}
                  ,
                  {"label":"Carne, bovina, alm�ndegas, cruas","value":"330"}
                  ,
                  {"label":"Carne, bovina, alm�ndegas, fritas","value":"331"}
                  ,
                  {"label":"Carne, bovina, bucho, cozido","value":"332"},
                  {"label":"Carne, bovina, bucho, cru","value":"333"},
                  {"label":"Carne, bovina, capa de contra-fil�, com gordura, crua","value":"334"}
                  ,
                  {"label":"Carne, bovina, capa de contra-fil�, com gordura, grelhada","value":"335"}
                  ,
                  {"label":"Carne, bovina, capa de contra-fil�, sem gordura, crua","value":"336"}
                  ,
                  {"label":"Carne, bovina, capa de contra-fil�, sem gordura, grelhada","value":"337"}
                  ,
                  {"label":"Carne, bovina, charque, cozido","value":"338"},
                  {"label":"Carne, bovina, charque, cru","value":"339"},
                  {"label":"Carne, bovina, contra-fil�, � milanesa","value":"340"}
                  ,
                  {"label":"Carne, bovina, contra-fil� de costela, cru","value":"341"}
                  ,
                  {"label":"Carne, bovina, contra-fil� de costela, grelhado","value":"342"}
                  ,
                  {"label":"Carne, bovina, contra-fil�, com gordura, cru","value":"343"}
                  ,
                  {"label":"Carne, bovina, contra-fil�, com gordura, grelhado","value":"344"}
                  ,
                  {"label":"Carne, bovina, contra-fil�, sem gordura, cru","value":"345"}
                  ,
                  {"label":"Carne, bovina, contra-fil�, sem gordura, grelhado","value":"346"}
                  ,
                  {"label":"Carne, bovina, costela, assada","value":"347"},
                  {"label":"Carne, bovina, costela, crua","value":"348"},
                  {"label":"Carne, bovina, cox�o duro, sem gordura, cozido","value":"349"}
                  ,
                  {"label":"Carne, bovina, cox�o duro, sem gordura, cru","value":"350"}
                  ,
                  {"label":"Carne, bovina, cox�o mole, sem gordura, cozido","value":"351"}
                  ,
                  {"label":"Carne, bovina, cox�o mole, sem gordura, cru","value":"352"}
                  ,
                  {"label":"Carne, bovina, cupim, assado","value":"353"},
                  {"label":"Carne, bovina, cupim, cru","value":"354"},
                  {"label":"Carne, bovina, f�gado, cru","value":"355"}
                  ,
                  {"label":"Carne, bovina, f�gado, grelhado","value":"356"}
                  ,
                  {"label":"Carne, bovina, fil� mingnon, sem gordura, cru","value":"357"}
                  ,
                  {"label":"Carne, bovina, fil� mingnon, sem gordura, grelhado","value":"358"}
                  ,
                  {"label":"Carne, bovina, flanco, sem gordura, cozido","value":"359"},
                  {"label":"Carne, bovina, flanco, sem gordura, cru","value":"360"},
                  {"label":"Carne, bovina, fraldinha, com gordura, cozida","value":"361"},
                  {"label":"Carne, bovina, fraldinha, com gordura, crua","value":"362"},
                  {"label":"Carne, bovina, lagarto, cozido","value":"363"},
                  {"label":"Carne, bovina, lagarto, cru","value":"364"},
                  {"label":"Carne, bovina, l�ngua, cozida","value":"365"}
                  ,
                  {"label":"Carne, bovina, l�ngua, crua","value":"366"}
                  ,
                  {"label":"Carne, bovina, maminha, crua","value":"367"},
                  {"label":"Carne, bovina, maminha, grelhada","value":"368"},
                  {"label":"Carne, bovina, miolo de alcatra, sem gordura, cru","value":"369"},
                  {"label":"Carne, bovina, miolo de alcatra, sem gordura, grelhado","value":"370"},
                  {"label":"Carne, bovina, m�sculo, sem gordura, cozido","value":"371"}
                  ,
                  {"label":"Carne, bovina, m�sculo, sem gordura, cru","value":"372"}
                  ,
                  {"label":"Carne, bovina, paleta, com gordura, crua","value":"373"},
                  {"label":"Carne, bovina, paleta, sem gordura, cozida","value":"374"},
                  {"label":"Carne, bovina, paleta, sem gordura, crua","value":"375"},
                  {"label":"Carne, bovina, patinho, sem gordura, cru","value":"376"},
                  {"label":"Carne, bovina, patinho, sem gordura, grelhado","value":"377"},
                  {"label":"Carne, bovina, peito, sem gordura, cozido","value":"378"},
                  {"label":"Carne, bovina, peito, sem gordura, cru","value":"379"},
                  {"label":"Carne, bovina, picanha, com gordura, crua","value":"380"},
                  {"label":"Carne, bovina, picanha, com gordura, grelhada","value":"381"},
                  {"label":"Carne, bovina, picanha, sem gordura, crua","value":"382"},
                  {"label":"Carne, bovina, picanha, sem gordura, grelhada","value":"383"},
                  {"label":"Carne, bovina, seca, cozida","value":"384"},
                  {"label":"Carne, bovina, seca, crua","value":"385"},
                  {"label":"Coxinha de frango, frita","value":"386"},
                  {"label":"Croquete, de carne, cru","value":"387"},
                  {"label":"Croquete, de carne, frito","value":"388"},
                  {"label":"Empada de frango, pr�-cozida, assada","value":"389"}
                  ,
                  {"label":"Empada, de frango, pr�-cozida","value":"390"}
                  ,
                  {"label":"Frango, asa, com pele, crua","value":"391"},
                  {"label":"Frango, caipira, inteiro, com pele, cozido","value":"392"},
                  {"label":"Frango, caipira, inteiro, sem pele, cozido","value":"393"},
                  {"label":"Frango, cora��o, cru","value":"394"}
                  ,
                  {"label":"Frango, cora��o, grelhado","value":"395"}
                  ,
                  {"label":"Frango, coxa, com pele, assada","value":"396"},
                  {"label":"Frango, coxa, com pele, crua","value":"397"},
                  {"label":"Frango, coxa, sem pele, cozida","value":"398"},
                  {"label":"Frango, coxa, sem pele, crua","value":"399"},
                  {"label":"Frango, f�gado, cru","value":"400"}
                  ,
                  {"label":"Frango, fil�, � milanesa","value":"401"}
                  ,
                  {"label":"Frango, inteiro, com pele, cru","value":"402"},
                  {"label":"Frango, inteiro, sem pele, assado","value":"403"},
                  {"label":"Frango, inteiro, sem pele, cozido","value":"404"},
                  {"label":"Frango, inteiro, sem pele, cru","value":"405"},
                  {"label":"Frango, peito, com pele, assado","value":"406"},
                  {"label":"Frango, peito, com pele, cru","value":"407"},
                  {"label":"Frango, peito, sem pele, cozido","value":"408"},
                  {"label":"Frango, peito, sem pele, cru","value":"409"},
                  {"label":"Frango, peito, sem pele, grelhado","value":"410"},
                  {"label":"Frango, sobrecoxa, com pele, assada","value":"411"},
                  {"label":"Frango, sobrecoxa, com pele, crua","value":"412"},
                  {"label":"Frango, sobrecoxa, sem pele, assada","value":"413"},
                  {"label":"Frango, sobrecoxa, sem pele, crua","value":"414"},
                  {"label":"Hamb�rguer, bovino, cru","value":"415"}
                  ,
                  {"label":"Hamb�rguer, bovino, frito","value":"416"}
                  ,
                  {"label":"Hamb�rguer, bovino, grelhado","value":"417"}
                  ,
                  {"label":"Ling�i�a, frango, crua","value":"418"}
                  ,
                  {"label":"Ling�i�a, frango, frita","value":"419"}
                  ,
                  {"label":"Ling�i�a, frango, grelhada","value":"420"}
                  ,
                  {"label":"Ling�i�a, porco, crua","value":"421"}
                  ,
                  {"label":"Ling�i�a, porco, frita","value":"422"}
                  ,
                  {"label":"Ling�i�a, porco, grelhada","value":"423"}
                  ,
                  {"label":"Mortadela","value":"424"},
                  {"label":"Peru, congelado, assado","value":"425"},
                  {"label":"Peru, congelado, cru","value":"426"},
                  {"label":"Porco, bisteca, crua","value":"427"},
                  {"label":"Porco, bisteca, frita","value":"428"},
                  {"label":"Porco, bisteca, grelhada","value":"429"},
                  {"label":"Porco, costela, assada","value":"430"},
                  {"label":"Porco, costela, crua","value":"431"},
                  {"label":"Porco, lombo, assado","value":"432"},
                  {"label":"Porco, lombo, cru","value":"433"},
                  {"label":"Porco, orelha, salgada, crua","value":"434"},
                  {"label":"Porco, pernil, assado","value":"435"},
                  {"label":"Porco, pernil, cru","value":"436"},
                  {"label":"Porco, rabo, salgado, cru","value":"437"},
                  {"label":"Presunto, com capa de gordura","value":"438"},
                  {"label":"Presunto, sem capa de gordura","value":"439"},
                  {"label":"Quibe, assado","value":"440"},
                  {"label":"Quibe, cru","value":"441"},
                  {"label":"Quibe, frito","value":"442"},
                  {"label":"Salame","value":"443"},
                  {"label":"Toucinho, cru","value":"444"},
                  {"label":"Toucinho, frito","value":"445"},
                  {"label":"Bebida l�ctea, p�ssego","value":"446"}
                  ,
                  {"label":"Creme de Leite","value":"447"},
                  {"label":"Iogurte, natural","value":"448"},
                  {"label":"Iogurte, natural, desnatado","value":"449"},
                  {"label":"Iogurte, sabor abacaxi","value":"450"},
                  {"label":"Iogurte, sabor morango","value":"451"},
                  {"label":"Iogurte, sabor p�ssego","value":"452"}
                  ,
                  {"label":"Leite, condensado","value":"453"},
                  {"label":"Leite, de cabra","value":"454"},
                  {"label":"Leite, de vaca, achocolatado","value":"455"},
                  {"label":"Leite, de vaca, desnatado, p�","value":"456"}
                  ,
                  {"label":"Leite, de vaca, desnatado, UHT","value":"457"},
                  {"label":"Leite, de vaca, integral","value":"458"},
                  {"label":"Leite, de vaca, integral, p�","value":"459"}
                  ,
                  {"label":"Leite, fermentado","value":"460"},
                  {"label":"Queijo, minas, frescal","value":"461"},
                  {"label":"Queijo, minas, meia cura","value":"462"},
                  {"label":"Queijo, mozarela","value":"463"},
                  {"label":"Queijo, parmes�o","value":"464"}
                  ,
                  {"label":"Queijo, pasteurizado","value":"465"},
                  {"label":"Queijo, petit suisse, morango","value":"466"},
                  {"label":"Queijo, prato","value":"467"},
                  {"label":"Maria mole","value":"468"},
                  {"label":"Queijo, ricota","value":"469"},
                  {"label":"Bebida isot�nica, sabores variados","value":"470"}
                  ,
                  {"label":"Caf�, infus�o 10%","value":"471"}
                  ,
                  {"label":"Cana, aguardente 1","value":"472"},
                  {"label":"Cana, caldo de","value":"473"},
                  {"label":"Cerveja, pilsen 2","value":"474"},
                  {"label":"Ch�, erva-doce, infus�o 5%","value":"475"}
                  ,
                  {"label":"Ch�, mate, infus�o 5%","value":"476"}
                  ,
                  {"label":"Ch�, preto, infus�o 5%","value":"477"}
                  ,
                  {"label":"Coco, �gua de","value":"478"}
                  ,
                  {"label":"Refrigerante, tipo �gua t�nica","value":"479"}
                  ,
                  {"label":"Refrigerante, tipo cola","value":"480"},
                  {"label":"Refrigerante, tipo guaran�","value":"481"}
                  ,
                  {"label":"Refrigerante, tipo laranja","value":"482"},
                  {"label":"Refrigerante, tipo lim�o","value":"483"}
                  ,
                  {"label":"Omelete, de queijo","value":"484"},
                  {"label":"Ovo, de codorna, inteiro, cru","value":"485"},
                  {"label":"Ovo, de galinha, clara, cozida/10minutos","value":"486"},
                  {"label":"Ovo, de galinha, gema, cozida/10minutos","value":"487"},
                  {"label":"Ovo, de galinha, inteiro, cozido/10minutos","value":"488"},
                  {"label":"Ovo, de galinha, inteiro, cru","value":"489"},
                  {"label":"Ovo, de galinha, inteiro, frito","value":"490"},
                  {"label":"Achocolatado, p�","value":"491"}
                  ,
                  {"label":"A��car, cristal","value":"492"}
                  ,
                  {"label":"A��car, mascavo","value":"493"}
                  ,
                  {"label":"A��car, refinado","value":"494"}
                  ,
                  {"label":"Chocolate, ao leite","value":"495"},
                  {"label":"Chocolate, ao leite, com castanha do Par�","value":"496"}
                  ,
                  {"label":"Chocolate, ao leite, diet�tico","value":"497"}
                  ,
                  {"label":"Chocolate, meio amargo","value":"498"},
                  {"label":"Cocada branca","value":"499"},
                  {"label":"Doce, de ab�bora, cremoso","value":"500"}
                  ,
                  {"label":"Doce, de leite, cremoso","value":"501"},
                  {"label":"Gel�ia, mocot�, natural","value":"502"}
                  ,
                  {"label":"Glicose de milho","value":"503"},
                  {"label":"Maria mole","value":"504"},
                  {"label":"Maria mole, coco queimado","value":"505"},
                  {"label":"Marmelada","value":"506"},
                  {"label":"Mel, de abelha","value":"507"},
                  {"label":"Melado","value":"508"},
                  {"label":"Quindim","value":"509"},
                  {"label":"Rapadura","value":"510"},
                  {"label":"Caf�, p�, torrado","value":"511"}
                  ,
                  {"label":"Capuccino, p�","value":"512"}
                  ,
                  {"label":"Fermento em p�, qu�mico","value":"513"}
                  ,
                  {"label":"Fermento, biol�gico, levedura, tablete","value":"514"}
                  ,
                  {"label":"Gelatina, sabores variados, p�","value":"515"}
                  ,
                  {"label":"Sal, diet�tico","value":"516"}
                  ,
                  {"label":"Sal, grosso","value":"517"},
                  {"label":"Shoyu","value":"518"},
                  {"label":"Tempero a base de sal","value":"519"},
                  {"label":"Azeitona, preta, conserva","value":"520"},
                  {"label":"Azeitona, verde, conserva","value":"521"},
                  {"label":"Chantilly, spray, com gordura vegetal","value":"522"},
                  {"label":"Leite, de coco","value":"523"},
                  {"label":"Maionese, tradicional com ovos","value":"524"},
                  {"label":"Acaraj�","value":"525"}
                  ,
                  {"label":"Arroz carreteiro","value":"526"},
                  {"label":"Bai�o de dois, arroz e feij�o-de-corda","value":"527"}
                  ,
                  {"label":"Barreado","value":"528"},
                  {"label":"Bife � cavalo, com contra fil�","value":"529"}
                  ,
                  {"label":"Bolinho de arroz","value":"530"},
                  {"label":"Camar�o � baiana","value":"531"}
                  ,
                  {"label":"Charuto, de repolho","value":"532"},
                  {"label":"Cuscuz, de milho, cozido com sal","value":"533"},
                  {"label":"Cuscuz, paulista","value":"534"},
                  {"label":"Cux�, molho","value":"535"}
                  ,
                  {"label":"Dobradinha","value":"536"},
                  {"label":"Estrogonofe de carne","value":"537"},
                  {"label":"Estrogonofe de frango","value":"538"},
                  {"label":"Feij�o tropeiro mineiro","value":"539"}
                  ,
                  {"label":"Feijoada","value":"540"},
                  {"label":"Frango, com a�afr�o","value":"541"}
                  ,
                  {"label":"Macarr�o, molho bolognesa","value":"542"}
                  ,
                  {"label":"Mani�oba","value":"543"}
                  ,
                  {"label":"Quibebe","value":"544"},
                  {"label":"Salada, de legumes, com maionese","value":"545"},
                  {"label":"Salada, de legumes, cozida no vapor","value":"546"},
                  {"label":"Salpic�o, de frango","value":"547"}
                  ,
                  {"label":"Sarapatel","value":"548"},
                  {"label":"Tabule","value":"549"},
                  {"label":"Tacac�","value":"550"}
                  ,
                  {"label":"Tapioca, com manteiga","value":"551"},
                  {"label":"Tucupi, com pimenta-de-cheiro","value":"552"},
                  {"label":"Vaca atolada","value":"553"},
                  {"label":"Vatap�","value":"554"}
                  ,
                  {"label":"Virado � paulista","value":"555"}
                  ,
                  {"label":"Yakisoba","value":"556"},
                  {"label":"Amendoim, gr�o, cru","value":"557"}
                  ,
                  {"label":"Amendoim, torrado, salgado","value":"558"},
                  {"label":"Ervilha, em vagem","value":"559"},
                  {"label":"Ervilha, enlatada, drenada","value":"560"},
                  {"label":"Feij�o, carioca, cozido","value":"561"}
                  ,
                  {"label":"Feij�o, carioca, cru","value":"562"}
                  ,
                  {"label":"Feij�o, fradinho, cozido","value":"563"}
                  ,
                  {"label":"Feij�o, fradinho, cru","value":"564"}
                  ,
                  {"label":"Feij�o, jalo, cozido","value":"565"}
                  ,
                  {"label":"Feij�o, jalo, cru","value":"566"}
                  ,
                  {"label":"Feij�o, preto, cozido","value":"567"}
                  ,
                  {"label":"Feij�o, preto, cru","value":"568"}
                  ,
                  {"label":"Feij�o, rajado, cozido","value":"569"}
                  ,
                  {"label":"Feij�o, rajado, cru","value":"570"}
                  ,
                  {"label":"Feij�o, rosinha, cozido","value":"571"}
                  ,
                  {"label":"Feij�o, rosinha, cru","value":"572"}
                  ,
                  {"label":"Feij�o, roxo, cozido","value":"573"}
                  ,
                  {"label":"Feij�o, roxo, cru","value":"574"}
                  ,
                  {"label":"Gr�o-de-bico, cru","value":"575"}
                  ,
                  {"label":"Guandu, cru","value":"576"},
                  {"label":"Lentilha, cozida","value":"577"},
                  {"label":"Lentilha, crua","value":"578"},
                  {"label":"Pa�oca, amendoim","value":"579"}
                  ,
                  {"label":"P�-de-moleque, amendoim","value":"580"}
                  ,
                  {"label":"Soja, farinha","value":"581"},
                  {"label":"Soja, extrato sol�vel, natural, fluido","value":"582"}
                  ,
                  {"label":"Soja, extrato sol�vel, p�","value":"583"}
                  ,
                  {"label":"Soja, queijo (tofu)","value":"584"},
                  {"label":"Tremo�o, cru","value":"585"}
                  ,
                  {"label":"Tremo�o, em conserva","value":"586"}
                  ,
                  {"label":"Am�ndoa, torrada, salgada","value":"587"}
                  ,
                  {"label":"Castanha-de-caju, torrada, salgada","value":"588"},
                  {"label":"Castanha-do-Brasil, crua","value":"589"},
                  {"label":"Coco, cru","value":"590"},
                  {"label":"Coco, verde, cru","value":"591"},
                  {"label":"Farinha, de mesocarpo de baba�u, crua","value":"592"}
                  ,
                  {"label":"Gergelim, semente","value":"593"},
                  {"label":"Linha�a, semente","value":"594"}
                  ,
                  {"label":"Pinh�o, cozido","value":"595"}
                  ,
                  {"label":"Pupunha, cozida","value":"596"},
                  {"label":"Noz, crua","value":"597"}
                  ]}
             />
        </View>
      </SafeAreaView>
    </Background>
  );
}
