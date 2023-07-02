import { Box, Button, Stack, TextField, Typography, useTheme } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { TypeField } from "../../../@types/enum";
import { ReactElement } from "react";

type FieldType = {
  name: string;
  label: string;
  type: number;
  optionsButton?:{
    onClick: () => Promise<void>;
    variant: string;
    extra?: ReactElement;
  }
};
// TODO: adicionar opção de colocar mascaras

type Props = {
  label: string;
  fields: FieldType[] | undefined;
};

const BaseCard = ({ label, fields = []}: Props) => {

  const theme = useTheme();
  const {control} = useForm();

  const buttons = fields?.filter((field) => {
    return field.type === TypeField.Button;
  });

  const inputs = fields?.filter((field)=>{
    return field.type === TypeField.Input;
  })

  return(
    <Box 
      component="form"
      boxShadow="10"
      p={5}
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
        {label}
      </Typography>
    </Stack>
    <Stack spacing={1} mt={4}>
      {
        inputs.map((input) => {
          return (
            <Controller
              name={input.name}
              control={control}
              render={({ field }) => (
                <TextField
                  id={input.name}
                  label={input.label}
                  variant="filled"
                  //   error={!!errors.usuario}
                  //   helperText={errors.usuario?.message}
                  {...field}
                />
            )}
            />

          );
        })
      }
    </Stack>
    <Stack spacing={1} mt={4}>
      {
        buttons?.map((button) => {
          return(
            <>
              <Button
                sx={{
                      marginTop: "auto",
                      display: "flex",
                      alignItems: "center",
                    }}
                    fullWidth
                    onClick={button.optionsButton?.onClick}
                    id={button.label}
                    size="large"
                    variant={button.optionsButton?.variant as "outlined" | "text" | "contained"}
                    >
                {button.name}
              </Button>
              {
                button.optionsButton?.extra ?? button.optionsButton?.extra
              }
            </>
          );
        })
      }
    </Stack>
  </Box>
  );
}

export default BaseCard;