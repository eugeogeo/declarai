import { Box, Button, Container, Stack, TextField, Typography, useTheme } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

function Login() {

    const theme = useTheme();
    const { control } = useForm();
    return (
        <Box
            sx={{
                backgroundColor: "#E6E6FA",
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
                        sx={{
                            [theme.breakpoints.down("md")]: {
                                flexDirection: "column-reverse",
                                alignItems: "center",
                            },
                        }}
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

                        <Stack 
                            component="form"
                            p={4}
                            boxShadow="2"
                            maxWidth="24rem"
                            width="100%"
                            minHeight="31rem"
                            borderRadius="8px"
                            bgcolor="white"
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
                            <Stack spacing={4} mt={4}>
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
                                variant="outlined"
                            >
                                Entrar
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
  }
  
  export default Login;
  