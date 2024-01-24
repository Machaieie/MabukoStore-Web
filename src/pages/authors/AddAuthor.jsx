import React, { useState, useEffect } from 'react';
import TextFieldBook from '../../components/textfields/TextFieldBook';
import { Card, CardHeader, Grid, CardContent, FormControl, Box, TextField, Button } from '@mui/material';
import logo from '../../assets/png/backgraundpage.png';
import BookSelect from '../../components/Dropdown/BookSelect';
import BookSubmitButton from '../../components/buttons/BookSubmitButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { authorSchema } from '../../services/SchemaService';
import { toast } from 'react-toastify'; // Make sure to import toast if it's not already imported in your project
import http from '../../http.common';

const AddAuthor = () => {
    const [gender, setGender] = useState('');
    const [isLoading, setLoading] = useState(false);


    const bookOptions = [
        { value: 'Masculino', label: 'Masculino' },
        { value: 'Feminino', label: 'Feminino' },
    ];
    const {
        reset,
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(authorSchema),
    });
    const handleChange = (event) => {
        setGender(event.target.value);
    };

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            await http.post('/author', {
                "name":data.name,
                "gender":gender,
                "biography":data.biography,
                "nationality":data.nationality
            });
            // console.log("Dtaaa", {
            //     "name":data.name,
            //     "gender":gender,
            //     "biography":data.biography,
            //     "nationality":data.nationality
            // });
            toast.success('Autor cadastrado com sucesso!');
            setTimeout(() => {
                setLoading(false);
            }, 1000);
            reset();
        } catch (error) {
            toast.error(error.response?.data.message || 'Erro ao cadastrar autor');
        }
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
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                            marginLeft: "100px"
                        }}>
                            <Grid item xs={6}>
                                <TextField
                                    label="Nome"
                                    name="name"
                                    placeholder="nome"
                                    fullWidth
                                    {...register("name")}
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
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
                                <TextField
                                    label="Biografia"
                                    name="biography"
                                    placeholder="Biografia"
                                    fullWidth
                                    {...register("biography")}
                                    error={!!errors.biography}
                                    helperText={errors.biography?.message}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Nacionalidade"
                                    name="nationality"
                                    placeholder="Nacionalidade"
                                    fullWidth
                                    {...register("nationality")}
                                    error={!!errors.nationality}
                                    helperText={errors.nationality?.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type='submit'
                                    variant="contained"
                                    fullWidth
                                    color="primary">
                                    Cadastrar
                                </Button>
                            </Grid>
                        </Grid>

                    </form>
                </CardContent>
            </Card>
        </Box>
    )
}

export default AddAuthor
