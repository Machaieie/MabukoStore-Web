import React from 'react'
import TextFieldBook from "../../components/textfields/TextFieldBook";
import { Card, CardHeader, Grid, CardContent, FormControl, Box } from "@mui/material";
import logo from "../../assets/png/backgraundpage.png";
import BookSelect from '../../components/Dropdown/BookSelect';
import BookSubmitButton from '../../components/buttons/BookSubmitButton';


const AddAuthor = () => {
    const [gender, setGender] = React.useState('');

    const bookOptions = [
        { value: 'Masculino', label: 'Masculino' },
        { value: 'Feminino', label: 'Feminino' },
    ];
    const handleChange = (event) => {
      setGender(event.target.value);
    };

    const handlesubmit = async (event) => {



    };
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundImage: `url(${logo})`,
                backgroundSize: "30%",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Card sx={{ width: 800, boxShadow: 10, backgroundColor: "#f2f2f2" }}>
                <CardHeader
                    title="Adicionar Autor"
                    sx={{
                        textAlign: "center",
                    }}
                />
                <CardContent>
                    <form onSubmit={handlesubmit}>

                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                            marginLeft: "100px"
                        }}>
                            <Grid item xs={6}>
                                <TextFieldBook
                                    label="Nome"
                                    name="name"
                                    placeholder="nome"
                                    size="100%"
                                />
                            </Grid>
                            <Grid item xs={6}>
                               <BookSelect
                               label="Gênero"
                               onChange={handleChange}
                               value={gender}
                               options={bookOptions}
                               name="gender"
                               />
                            </Grid>
                            <Grid item xs={6}>
                                <TextFieldBook
                                    label="Biografia"
                                    name="biography"
                                    placeholder="Biografia"
                                    size="100%"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextFieldBook
                                    label="Nacionalidade"
                                    name="nationality"
                                    placeholder="Nacionalidade"
                                    size="100%"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <BookSubmitButton label="Cadastrar" onClick={handlesubmit() }/>
                            </Grid>
                        </Grid>

                    </form>
                </CardContent>
            </Card>
        </Box>
    )
}

export default AddAuthor
