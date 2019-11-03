import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import MUIDataTable from 'mui-datatables';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import LinearProgress from '@material-ui/core/LinearProgress';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import options from '../fragments/TableOptions/Options';

import styles from './Retiradas.module.css';

const columns = [
    { name: 'id', options: { display: false, viewColumns: false, filter: false, searchable: false } }, 'Clínica', 'Data', 'Observação', 'Motorista'
];

const useStyles = makeStyles(() => ({
    input: {
        display: 'none'
    }
}));

// DEV only
const loading = true;
  
const retiradas = props => {
    const classes = useStyles();
    const authToken = Cookies.get('authToken');
    const { _id, administrator } = Cookies.getJSON('user');
    const [data, setData] = useState([]);

    useEffect(() => {
        const userId = administrator ? '/' : `/driver/${_id}`;

        axios.get(`/pickUps${userId}`, {
            headers: { 'Authorization': `Bearer ${authToken}` }
        })
        .then(response => {
            const retiradas = [];

            response.data.forEach(retirada => {
                const { _id, clinic, date, note, driver } = retirada;

                retiradas.push([_id, clinic.name, formatDate(date), note, driver.user.name]);
            });
            setData(retiradas);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const formatDate = date => {
        const dateArray = date.split('-');
        const day = dateArray[2].substring(0, 2);
        const month = dateArray[1];
        const year = dateArray[0];
        return `${day}/${month}/${year}`;
    }

    return (
        <form className={props.styles.formTable}>
            
            { administrator ? 
                <Fragment>
                    <Grid justify="center" container className={styles.topButton}>
                        <Grid item>
                            <input
                                accept=".xlsx, .xls"
                                className={classes.input}
                                id="contained-button-file"
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button 
                                    variant="contained" 
                                    component="span" 
                                    color="primary" 
                                    className={props.styles.primaryButton}
                                >
                                    Importar
                                </Button>
                            </label>
                        </Grid>
                    </Grid>

                    <div className={styles.progress}>
                    {
                        loading ? <LinearProgress variant="indeterminate" color="primary"/> : <CheckCircleIcon color="primary" fontSize="large"/>
                    }
                    </div>
                </Fragment>
            : <h2 className={props.styles.row}>Retiradas</h2> }

            

            <div className={administrator ? styles.table : styles.marginTop}>
                <MUIDataTable
                    title={administrator ? 'Retiradas' : ''}
                    columns={columns}
                    data={data}
                    options={options(administrator, '/retirada')}
                />
            </div>
        </form>
    );
}

export default retiradas;