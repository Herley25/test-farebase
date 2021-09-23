import React, {useState} from "react";
import {Platform, View} from "react-native";

import {Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText} from "../SignIn/styles";

export default function SignIn() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [passsword, setPassword] = useState("");

    return(
        <Background>
            <View style={{borderBottomWidth: 1, borderBottomColor: "#00b94a"}}></View>
            <Container
            behavior={Platform.OS === "ios" ? "padding" : "" }
            enable
            >
                <AreaInput>
                    <Input 
                    placeholder="Nome"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={nome}
                    onChangeText={ (text) => setEmail(text) }
                    />
                </AreaInput>

                <AreaInput>
                    <Input 
                    placeholder="Email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={email}
                    onChangeText={ (text) => setEmail(text) }
                    />
                </AreaInput>
                

                <AreaInput>
                    <Input 
                    placeholder="Senha"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={passsword}
                    onChangeText={ (text) => setPassword(text) }
                    />
                </AreaInput>

                <SubmitButton>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>

            </Container>
        </Background>
    );
}