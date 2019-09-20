import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import CategoriaCNH from '../../fragments/CategoriaCNH/CategoriaCNH';
import Endereco from '../../fragments/Endereco/Endereco';

import styles from './Usuario.module.css';

const usuario = props => {
    const [selectedDate, handleDateChange] = useState(new Date());
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <h2 className={props.styles.row}>Usuário</h2>
            <div className={props.styles.row}>
                <form noValidate autoComplete="off">
                    <div className={props.styles.row}>
                        <div className={`${props.styles.col} ${props.styles.span3of3}`}>
                            <TextField
                                id="inputNome"
                                label="Nome"
                                margin="normal"
                                required
                                fullWidth
                            />
                        </div>
                    </div>
                    <div className={`${props.styles.row} ${props.styles.clearfix}`}>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            <TextField
                                id="inputCPF"
                                label="CPF"
                                margin="normal"
                                required
                                fullWidth
                            />
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            <KeyboardDatePicker
                                id="inputNascimento"
                                label="Nascimento"
                                format="dd/MM/yyyy"
                                value={selectedDate}
                                onChange={date => handleDateChange(date)}
                                margin="normal"
                            />
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            <TextField
                                id="inputTelefone"
                                label="Telefone"
                                className={props.styles.floatRight}
                                margin="normal"
                                fullWidth
                            />    
                        </div>
                    </div>

                    <h3 className={props.styles.row}>CNH</h3>
                    <div className={props.styles.row}>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            <TextField
                                id="inputNumeroCNH"
                                label="Número"
                                margin="normal"
                                fullWidth
                            />
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            <KeyboardDatePicker
                                id="inputValidadeCNH"
                                label="Validade"
                                format="dd/MM/yyyy"
                                value={selectedDate}
                                onChange={date => handleDateChange(date)}
                                margin="normal"
                            />
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of3} ${props.styles.select}`}>
                            <CategoriaCNH />
                        </div>
                    </div>

                    <Endereco styles={props.styles} />

                    <h3 className={props.styles.row}>Acesso</h3>
                    <div className={props.styles.row}>
                        <div className={`${props.styles.col} ${props.styles.span1of2}`}>
                            <TextField
                                id="inputEmail"
                                label="E-mail"
                                margin="normal"
                                required
                                fullWidth
                            />
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of2} ${styles.administrator}`}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        color="primary"
                                    />
                                }
                                label="Administrador"
                                className={props.styles.floatRight}
                            />
                        </div>
                    </div>
                    <div className={props.styles.row}>
                        <div className={`${props.styles.col} ${props.styles.span1of2}`}>
                            <TextField
                                id="inputSenha"
                                label="Senha"
                                type="password"
                                margin="normal"
                                fullWidth
                            />
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of2}`}>
                            <TextField
                                id="inputConfirmarSenha"
                                label="Confirme a senha"
                                type="password"
                                margin="normal"
                                fullWidth
                            />
                        </div>
                    </div>
                    
                    <div className={`${props.styles.row} ${styles.buttons}`}>
                        <div className={`${props.styles.col} ${props.styles.span1of2}`}>
                            <Button 
                                variant="contained"
                                color="primary"
                                className={`${props.styles.primaryButton} ${props.styles.floatRight}`}
                            >Salvar</Button>
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of2}`}>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={props.styles.secondaryButton}
                            >Cancelar</Button>
                        </div>
                    </div>
                </form>
            </div>
        </MuiPickersUtilsProvider>
    );
}

export default usuario;