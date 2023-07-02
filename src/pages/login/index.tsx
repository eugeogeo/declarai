import { Box, Button, Container, Stack, TextField, Typography, useTheme } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

function Login() {

    const theme = useTheme();
    const { control } = useForm();
    return (
        <Box
            sx={{
                backgroundColor: "#F6F8F7",
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
                                declaraí . . .
                            </Typography>
                            <Typography 
                                variant="subtitle1" 
                                color={theme.palette.primary.main}
                            >
                                sistema gerenciador de emissão de declarações acadêmicas
                            </Typography>
                        </Stack>

                        <Box 
                            component="form"
                            boxShadow="10"
                            p={6}
                            maxWidth="24rem"
                            width="100%"
                            minHeight="31rem"
                            borderRadius="8px"
                            bgcolor="white"
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                            // onSubmit={handleSubmit(onSubmit)}
                            sx={{
                            [theme.breakpoints.down("md")]: {
                                maxWidth: "24rem",
                            },
                            [theme.breakpoints.up("md")]: {
                                maxWidth: "28rem",
                            },
                            }}
                        >
                            <Stack direction="row" alignItems="center">
                                <Typography 
                                    variant="h4" 
                                    component="h1" 
                                    color={theme.palette.primary.main}
                                >
                                    entrar
                                </Typography>
                            </Stack>
                            <Stack spacing={2}>
                                <Controller
                                name="usuario"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                    id="email"
                                    label="E-mail"
                                    variant="filled"
                                    //   error={!!errors.usuario}
                                    //   helperText={errors.usuario?.message}
                                    {...field}
                                    />
                                )}
                                />

                                <Controller
                                name="senha"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                    id="senha"
                                    label="Senha"
                                    variant="filled"
                                    //   error={!!errors.senha}
                                    //   helperText={errors.senha?.message}
                                    {...field}
                                    />
                                )}
                                />
                            </Stack>
                            <Stack spacing={1}>
                                <Button
                                    // isLoading={isSubmitting}
                                    sx={{
                                        marginTop: "auto",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                    fullWidth
                                    type="submit"
                                    id="buttonLogin"
                                    size="large"
                                    variant="contained"
                                >
                                    Entrar
                                </Button>
                                <Button
                                    // isLoading={isSubmitting}
                                    sx={{
                                        marginTop: "auto",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                    fullWidth
                                    type="submit"
                                    id="buttonNewUsuario"
                                    size="large"
                                    variant="outlined"
                                >
                                    Criar conta
                                </Button>
                                <Typography
                                variant="subtitle2" 
                                color={theme.palette.primary.main}
                                >
                                    Ainda não tem uma conta? Crie uma nova com um clique.
                                </Typography>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
  }
  
  export default Login;
  