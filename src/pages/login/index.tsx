import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOrCreateUser, TypeField } from "../../@types/enum";
import BaseCard from "./components/BaseCard";

function Login() {

    const [logOrCreateUser, setLogOrCreateUser] = useState(1);

    const theme = useTheme();
    const navigate = useNavigate();

    const fields = useMemo(() => {
        if(logOrCreateUser === LogOrCreateUser.LogIn){
            return [
                {
                    name: "registroAcademico", 
                    label: "RA", 
                    type: TypeField.Input
                },
                {
                    name: "senha", 
                    label: "Senha", 
                    type: TypeField.Input
                },
                {
                    name: "entrar",
                    label: "Entrar",
                    type: TypeField.Button,
                    optionsButton:{
                        onClick: async () => { navigate("/")},
                        variant: "contained",
                    }
                },
                {
                    name: "cadastrar",
                    label: "Cadastre-se",
                    type: TypeField.Button,
                    optionsButton:{
                        onClick: async () => { setLogOrCreateUser(LogOrCreateUser.CreateUser)},
                        variant: "outlined",
                        extra:
                            
                            <Typography
                            variant="subtitle2" 
                            color={theme.palette.primary.main}
                        >
                            Ainda não tem uma conta? Crie uma nova com um clique.
                        </Typography>
                        
                    }
                },
            ]
        } else if(logOrCreateUser === LogOrCreateUser.CreateUser){
            return [
                {
                    name: "nome", 
                    label: "Nome", 
                    type: TypeField.Input
                },
                {
                    name: "registroAcademico", 
                    label: "RA", 
                    type: TypeField.Input
                },
                {
                    name: "email", 
                    label: "E-mail", 
                    type: TypeField.Input
                },
                {
                    name: "senha", 
                    label: "Senha", 
                    type: TypeField.Input
                },
                {
                    name: "cadastrar",
                    label: "Cadastrar",
                    type: TypeField.Button,
                    optionsButton:{
                        onClick: async () => { navigate("/")},
                        variant: "contained",                        }
                },
                {
                    name: "logIn",
                    label: "Voltar para o Log-in",
                    type: TypeField.Button,
                    optionsButton:
                    {
                        onClick: async () => { setLogOrCreateUser(LogOrCreateUser.LogIn)},
                        variant: "outlined",
                        extra:
                            <Typography
                                variant="subtitle2" 
                                color={theme.palette.primary.main}
                            >
                                Já tem uma conta? Volte para fazer login.
                            </Typography>
                        }
                    }
            ]
        }
    }, [logOrCreateUser, navigate, theme.palette.primary.main])

    return (
        <Box
        // TODO: cliente pediu degrade no background
            sx={{
                backgroundColor: "#f8e195",
                backgroundPositionX: "right",
                backgroundPositionY: "bottom",
                backgroundRepeat: "no-repeat",
                height: "100vh"
            }}
            >
            <Container> 
                <Box display="flex" alignItems="center" height="100vh">
                    <Stack 
                        justifyContent="space-between"
                        flexDirection="row"
                        width="100vw"
                    >
                        <Stack display="flex" justifyContent="flex-end">
                            <Typography 
                                variant="h4" 
                                component="h1" 
                                color={theme.palette.primary.main}
                            >
                                Declaraí . . .
                            </Typography>
                            {/* TODO: cliente pediu logo das representações academicas */}
                            <Typography 
                                variant="subtitle1" 
                                color={theme.palette.primary.main}
                            >
                                Sistema gerenciador de emissão de declarações acadêmicas
                            </Typography>
                        </Stack>
                        <BaseCard 
                            label={logOrCreateUser === LogOrCreateUser.LogIn ? "Entrar" : "Cadastrar"}
                            fields={fields} 
                        />
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
  }
  
  export default Login;
  