import React, { Fragment } from 'react';
import MUIDataTable from 'mui-datatables';

import options from '../fragments/TableOptions/Options';

const columns = ['Nome', 'Nascimento', 'Telefone', 'e-mail'];

const data = [
    ['Lívia Giovanna Mendes', '16/10/1950', '(95) 98153-8671', 'liviamendes@vetexpress.com.br'],
    ['Arthur Guilherme Isaac Ramos', '16/05/1960', '(11) 98956-7871', 'arthurramos@vetexpress.com.br'],
    ['Eduarda Maya da Costa', '08/07/1956', '(96) 99775-5293', 'eduardacosta@vetexpress.com.br'],
    ['Alexandre Anthony Luan Ramos', '06/07/1960', '(95) 99601-2818', 'alexandreramos@vetexpress.com.br'],
    ['Cláudio Paulo dos Santos', '14/01/1986', '(41) 98179-2655', 'claudiosantos@vetexpress.com.br'],
    ['Isabella Rebeca Francisca Viana', '07/03/1965', '(85) 98881-4630', 'isabellaviana@vetexpress.com.br'],
    ['Sérgio Levi Alves', '07/07/1982', '(63) 98897-3100', 'sergioalves@vetexpress.com.br'],
    ['Letícia Adriana Cardoso', '11/08/1975', '(11) 98319-6389', 'leticiacardoso@vetexpress.com.br'],
    ['Anderson Calebe Danilo Gomes', '03/03/1978', '(65) 99712-5720', 'andersongomes@vetexpress.com.br']
]

const usuarios = props => {
    return (
        <Fragment>
            <h2 className={props.styles.row}>Usuários</h2>
            <form className={props.styles.formTable}>
                <MUIDataTable
                    title={''}
                    columns={columns}
                    data={data}
                    options={options}
                />
            </form>
        </Fragment>
    );
}

export default usuarios;