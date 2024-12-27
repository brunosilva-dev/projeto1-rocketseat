import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";

function handleParticipantAdd() {
  console.log("Clicou no botão de adicionar!");
}

function handleParticipantRemove(name: string) {
  console.log(`Clicou para remover o usuário ${name}!`);
}

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <Participant
        name="Bruno"
        onRemove={() => handleParticipantRemove("Bruno")}
      />
    </View>
  );
}
