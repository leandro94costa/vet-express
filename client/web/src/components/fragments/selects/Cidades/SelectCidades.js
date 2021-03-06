import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Select from 'react-select';
import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';

const cidades = [
    { cidade: "Adamantina" },
    { cidade: "Adolfo" },
    { cidade: "Aguaí" },
    { cidade: "Águas da Prata" },
    { cidade: "Águas de Lindóia" },
    { cidade: "Águas de Santa Bárbara" },
    { cidade: "Águas de São Pedro" },
    { cidade: "Agudos" },
    { cidade: "Alambari" },
    { cidade: "Alfredo Marcondes" },
    { cidade: "Altair" },
    { cidade: "Altinópolis" },
    { cidade: "Alto Alegre" },
    { cidade: "Alumínio" },
    { cidade: "Álvares Florence" },
    { cidade: "Álvares Machado" },
    { cidade: "Álvaro de Carvalho" },
    { cidade: "Alvinlândia" },
    { cidade: "Americana" },
    { cidade: "Américo Brasiliense" },
    { cidade: "Américo de Campos" },
    { cidade: "Amparo" },
    { cidade: "Analândia" },
    { cidade: "Andradina" },
    { cidade: "Angatuba" },
    { cidade: "Anhembi" },
    { cidade: "Anhumas" },
    { cidade: "Aparecida" },
    { cidade: "Aparecida d'Oeste" },
    { cidade: "Apiaí" },
    { cidade: "Araçariguama" },
    { cidade: "Araçatuba" },
    { cidade: "Araçoiaba da Serra" },
    { cidade: "Aramina" },
    { cidade: "Arandu" },
    { cidade: "Arapeí" },
    { cidade: "Araraquara" },
    { cidade: "Araras" },
    { cidade: "Arco-Íris" },
    { cidade: "Arealva" },
    { cidade: "Areias" },
    { cidade: "Areiópolis" },
    { cidade: "Ariranha" },
    { cidade: "Artur Nogueira" },
    { cidade: "Arujá" },
    { cidade: "Aspásia" },
    { cidade: "Assis" },
    { cidade: "Atibaia" },
    { cidade: "Auriflama" },
    { cidade: "Avaí" },
    { cidade: "Avanhandava" },
    { cidade: "Avaré" },
    { cidade: "Bady Bassitt" },
    { cidade: "Balbinos" },
    { cidade: "Bálsamo" },
    { cidade: "Bananal" },
    { cidade: "Barão de Antonina" },
    { cidade: "Barbosa" },
    { cidade: "Bariri" },
    { cidade: "Barra Bonita" },
    { cidade: "Barra do Chapéu" },
    { cidade: "Barra do Turvo" },
    { cidade: "Barretos" },
    { cidade: "Barrinha" },
    { cidade: "Barueri" },
    { cidade: "Bastos" },
    { cidade: "Batatais" },
    { cidade: "Bauru" },
    { cidade: "Bebedouro" },
    { cidade: "Bento de Abreu" },
    { cidade: "Bernardino de Campos" },
    { cidade: "Bertioga" },
    { cidade: "Bilac" },
    { cidade: "Birigui" },
    { cidade: "Biritiba-Mirim" },
    { cidade: "Boa Esperança do Sul" },
    { cidade: "Bocaina" },
    { cidade: "Bofete" },
    { cidade: "Boituva" },
    { cidade: "Bom Jesus dos Perdões" },
    { cidade: "Bom Sucesso de Itararé" },
    { cidade: "Borá" },
    { cidade: "Boracéia" },
    { cidade: "Borborema" },
    { cidade: "Borebi" },
    { cidade: "Botucatu" },
    { cidade: "Bragança Paulista" },
    { cidade: "Braúna" },
    { cidade: "Brejo Alegre" },
    { cidade: "Brodowski" },
    { cidade: "Brotas" },
    { cidade: "Buri" },
    { cidade: "Buritama" },
    { cidade: "Buritizal" },
    { cidade: "Cabrália Paulista" },
    { cidade: "Cabreúva" },
    { cidade: "Caçapava" },
    { cidade: "Cachoeira Paulista" },
    { cidade: "Caconde" },
    { cidade: "Cafelândia" },
    { cidade: "Caiabu" },
    { cidade: "Caieiras" },
    { cidade: "Caiuá" },
    { cidade: "Cajamar" },
    { cidade: "Cajati" },
    { cidade: "Cajobi" },
    { cidade: "Cajuru" },
    { cidade: "Campina do Monte Alegre" },
    { cidade: "Campinas" },
    { cidade: "Campo Limpo Paulista" },
    { cidade: "Campos do Jordão" },
    { cidade: "Campos Novos Paulista" },
    { cidade: "Cananéia" },
    { cidade: "Canas" },
    { cidade: "Cândido Mota" },
    { cidade: "Cândido Rodrigues" },
    { cidade: "Canitar" },
    { cidade: "Capão Bonito" },
    { cidade: "Capela do Alto" },
    { cidade: "Capivari" },
    { cidade: "Caraguatatuba" },
    { cidade: "Carapicuíba" },
    { cidade: "Cardoso" },
    { cidade: "Casa Branca" },
    { cidade: "Cássia dos Coqueiros" },
    { cidade: "Castilho" },
    { cidade: "Catanduva" },
    { cidade: "Catiguá" },
    { cidade: "Cedral" },
    { cidade: "Cerqueira César" },
    { cidade: "Cerquilho" },
    { cidade: "Cesário Lange" },
    { cidade: "Charqueada" },
    { cidade: "Chavantes" },
    { cidade: "Clementina" },
    { cidade: "Colina" },
    { cidade: "Colômbia" },
    { cidade: "Conchal" },
    { cidade: "Conchas" },
    { cidade: "Cordeirópolis" },
    { cidade: "Coroados" },
    { cidade: "Coronel Macedo" },
    { cidade: "Corumbataí" },
    { cidade: "Cosmópolis" },
    { cidade: "Cosmorama" },
    { cidade: "Cotia" },
    { cidade: "Cravinhos" },
    { cidade: "Cristais Paulista" },
    { cidade: "Cruzália" },
    { cidade: "Cruzeiro" },
    { cidade: "Cubatão" },
    { cidade: "Cunha" },
    { cidade: "Descalvado" },
    { cidade: "Diadema" },
    { cidade: "Dirce Reis" },
    { cidade: "Divinolândia" },
    { cidade: "Dobrada" },
    { cidade: "Dois Córregos" },
    { cidade: "Dolcinópolis" },
    { cidade: "Dourado" },
    { cidade: "Dracena" },
    { cidade: "Duartina" },
    { cidade: "Dumont" },
    { cidade: "Echaporã" },
    { cidade: "Eldorado" },
    { cidade: "Elias Fausto" },
    { cidade: "Elisiário" },
    { cidade: "Embaúba" },
    { cidade: "Embu" },
    { cidade: "Embu-Guaçu" },
    { cidade: "Embu das Artes" },
    { cidade: "Emilianópolis" },
    { cidade: "Engenheiro Coelho" },
    { cidade: "Espírito Santo do Pinhal" },
    { cidade: "Espírito Santo do Turvo" },
    { cidade: "Estiva Gerbi" },
    { cidade: "Estrela d'Oeste" },
    { cidade: "Estrela do Norte" },
    { cidade: "Euclides da Cunha Paulista" },
    { cidade: "Fartura" },
    { cidade: "Fernando Prestes" },
    { cidade: "Fernandópolis" },
    { cidade: "Fernão" },
    { cidade: "Ferraz de Vasconcelos" },
    { cidade: "Flora Rica" },
    { cidade: "Floreal" },
    { cidade: "Florínia" },
    { cidade: "Flórida Paulista" },
    { cidade: "Franca" },
    { cidade: "Francisco Morato" },
    { cidade: "Franco da Rocha" },
    { cidade: "Gabriel Monteiro" },
    { cidade: "Gália" },
    { cidade: "Garça" },
    { cidade: "Gastão Vidigal" },
    { cidade: "Gavião Peixoto" },
    { cidade: "General Salgado" },
    { cidade: "Getulina" },
    { cidade: "Glicério" },
    { cidade: "Guaiçara" },
    { cidade: "Guaimbê" },
    { cidade: "Guaíra" },
    { cidade: "Guapiaçu" },
    { cidade: "Guapiara" },
    { cidade: "Guará" },
    { cidade: "Guaraçaí" },
    { cidade: "Guaraci" },
    { cidade: "Guarani d'Oeste" },
    { cidade: "Guarantã" },
    { cidade: "Guararapes" },
    { cidade: "Guararema" },
    { cidade: "Guaratinguetá" },
    { cidade: "Guareí" },
    { cidade: "Guariba" },
    { cidade: "Guarujá" },
    { cidade: "Guarulhos" },
    { cidade: "Guatapará" },
    { cidade: "Guzolândia" },
    { cidade: "Herculândia" },
    { cidade: "Holambra" },
    { cidade: "Hortolândia" },
    { cidade: "Iacanga" },
    { cidade: "Iacri" },
    { cidade: "Iaras" },
    { cidade: "Ibaté" },
    { cidade: "Ibirá" },
    { cidade: "Ibirarema" },
    { cidade: "Ibitinga" },
    { cidade: "Ibiúna" },
    { cidade: "Icém" },
    { cidade: "Iepê" },
    { cidade: "Igaraçu do Tietê" },
    { cidade: "Igarapava" },
    { cidade: "Igaratá" },
    { cidade: "Iguape" },
    { cidade: "Ilha Comprida" },
    { cidade: "Ilha Solteira" },
    { cidade: "Ilhabela" },
    { cidade: "Indaiatuba" },
    { cidade: "Indiana" },
    { cidade: "Indiaporã" },
    { cidade: "Inúbia Paulista" },
    { cidade: "Ipauçu" },
    { cidade: "Iperó" },
    { cidade: "Ipeúna" },
    { cidade: "Ipiguá" },
    { cidade: "Iporanga" },
    { cidade: "Ipuã" },
    { cidade: "Iracemápolis" },
    { cidade: "Irapuã" },
    { cidade: "Irapuru" },
    { cidade: "Itaberá" },
    { cidade: "Itaí" },
    { cidade: "Itajobi" },
    { cidade: "Itaju" },
    { cidade: "Itanhaém" },
    { cidade: "Itaóca" },
    { cidade: "Itapecerica da Serra" },
    { cidade: "Itapetininga" },
    { cidade: "Itapeva" },
    { cidade: "Itapevi" },
    { cidade: "Itapira" },
    { cidade: "Itapirapuã Paulista" },
    { cidade: "Itápolis" },
    { cidade: "Itaporanga" },
    { cidade: "Itapuí" },
    { cidade: "Itapura" },
    { cidade: "Itaquaquecetuba" },
    { cidade: "Itararé" },
    { cidade: "Itariri" },
    { cidade: "Itatiba" },
    { cidade: "Itatinga" },
    { cidade: "Itirapina" },
    { cidade: "Itirapuã" },
    { cidade: "Itobi" },
    { cidade: "Itu" },
    { cidade: "Itupeva" },
    { cidade: "Ituverava" },
    { cidade: "Jaborandi" },
    { cidade: "Jaboticabal" },
    { cidade: "Jacareí" },
    { cidade: "Jaci" },
    { cidade: "Jacupiranga" },
    { cidade: "Jaguariúna" },
    { cidade: "Jales" },
    { cidade: "Jambeiro" },
    { cidade: "Jandira" },
    { cidade: "Jardinópolis" },
    { cidade: "Jarinu" },
    { cidade: "Jaú" },
    { cidade: "Jeriquara" },
    { cidade: "Joanópolis" },
    { cidade: "João Ramalho" },
    { cidade: "José Bonifácio" },
    { cidade: "Júlio Mesquita" },
    { cidade: "Jumirim" },
    { cidade: "Jundiaí" },
    { cidade: "Junqueirópolis" },
    { cidade: "Juquiá" },
    { cidade: "Juquitiba" },
    { cidade: "Lagoinha" },
    { cidade: "Laranjal Paulista" },
    { cidade: "Lavínia" },
    { cidade: "Lavrinhas" },
    { cidade: "Leme" },
    { cidade: "Lençóis Paulista" },
    { cidade: "Limeira" },
    { cidade: "Lindóia" },
    { cidade: "Lins" },
    { cidade: "Lorena" },
    { cidade: "Lourdes" },
    { cidade: "Louveira" },
    { cidade: "Lucélia" },
    { cidade: "Lucianópolis" },
    { cidade: "Luís Antônio" },
    { cidade: "Luiziânia" },
    { cidade: "Lupércio" },
    { cidade: "Lutécia" },
    { cidade: "Macatuba" },
    { cidade: "Macaubal" },
    { cidade: "Macedônia" },
    { cidade: "Magda" },
    { cidade: "Mairinque" },
    { cidade: "Mairiporã" },
    { cidade: "Manduri" },
    { cidade: "Marabá Paulista" },
    { cidade: "Maracaí" },
    { cidade: "Marapoama" },
    { cidade: "Mariápolis" },
    { cidade: "Marília" },
    { cidade: "Marinópolis" },
    { cidade: "Martinópolis" },
    { cidade: "Matão" },
    { cidade: "Mauá" },
    { cidade: "Mendonça" },
    { cidade: "Meridiano" },
    { cidade: "Mesópolis" },
    { cidade: "Miguelópolis" },
    { cidade: "Mineiros do Tietê" },
    { cidade: "Mira Estrela" },
    { cidade: "Miracatu" },
    { cidade: "Mirandópolis" },
    { cidade: "Mirante do Paranapanema" },
    { cidade: "Mirassol" },
    { cidade: "Mirassolândia" },
    { cidade: "Mococa" },
    { cidade: "Mogi das Cruzes" },
    { cidade: "Mogi-Guaçu" },
    { cidade: "Mogi-Mirim" },
    { cidade: "Mombuca" },
    { cidade: "Monções" },
    { cidade: "Mongaguá" },
    { cidade: "Monte Alegre do Sul" },
    { cidade: "Monte Alto" },
    { cidade: "Monte Aprazível" },
    { cidade: "Monte Azul Paulista" },
    { cidade: "Monte Castelo" },
    { cidade: "Monte Mor" },
    { cidade: "Monteiro Lobato" },
    { cidade: "Morro Agudo" },
    { cidade: "Morungaba" },
    { cidade: "Motuca" },
    { cidade: "Murutinga do Sul" },
    { cidade: "Nantes" },
    { cidade: "Narandiba" },
    { cidade: "Natividade da Serra" },
    { cidade: "Nazaré Paulista" },
    { cidade: "Neves Paulista" },
    { cidade: "Nhandeara" },
    { cidade: "Nipoã" },
    { cidade: "Nova Aliança" },
    { cidade: "Nova Campina" },
    { cidade: "Nova Canaã Paulista" },
    { cidade: "Nova Castilho" },
    { cidade: "Nova Europa" },
    { cidade: "Nova Granada" },
    { cidade: "Nova Guataporanga" },
    { cidade: "Nova Independência" },
    { cidade: "Nova Luzitânia" },
    { cidade: "Nova Odessa" },
    { cidade: "Novais" },
    { cidade: "Novo Horizonte" },
    { cidade: "Nuporanga" },
    { cidade: "Ocauçu" },
    { cidade: "Óleo" },
    { cidade: "Olímpia" },
    { cidade: "Onda Verde" },
    { cidade: "Oriente" },
    { cidade: "Orindiúva" },
    { cidade: "Orlândia" },
    { cidade: "Osasco" },
    { cidade: "Oscar Bressane" },
    { cidade: "Osvaldo Cruz" },
    { cidade: "Ourinhos" },
    { cidade: "Ouro Verde" },
    { cidade: "Ouroeste" },
    { cidade: "Pacaembu" },
    { cidade: "Palestina" },
    { cidade: "Palmares Paulista" },
    { cidade: "Palmeira d'Oeste" },
    { cidade: "Palmital" },
    { cidade: "Panorama" },
    { cidade: "Paraguaçu Paulista" },
    { cidade: "Paraibuna" },
    { cidade: "Paraíso" },
    { cidade: "Paranapanema" },
    { cidade: "Paranapuã" },
    { cidade: "Parapuã" },
    { cidade: "Pardinho" },
    { cidade: "Pariquera-Açu" },
    { cidade: "Parisi" },
    { cidade: "Patrocínio Paulista" },
    { cidade: "Paulicéia" },
    { cidade: "Paulínia" },
    { cidade: "Paulistânia" },
    { cidade: "Paulo de Faria" },
    { cidade: "Pederneiras" },
    { cidade: "Pedra Bela" },
    { cidade: "Pedranópolis" },
    { cidade: "Pedregulho" },
    { cidade: "Pedreira" },
    { cidade: "Pedrinhas Paulista" },
    { cidade: "Pedro de Toledo" },
    { cidade: "Penápolis" },
    { cidade: "Pereira Barreto" },
    { cidade: "Pereiras" },
    { cidade: "Peruíbe" },
    { cidade: "Piacatu" },
    { cidade: "Piedade" },
    { cidade: "Pilar do Sul" },
    { cidade: "Pindamonhangaba" },
    { cidade: "Pindorama" },
    { cidade: "Pinhalzinho" },
    { cidade: "Piquerobi" },
    { cidade: "Piquete" },
    { cidade: "Piracaia" },
    { cidade: "Piracicaba" },
    { cidade: "Piraju" },
    { cidade: "Pirajuí" },
    { cidade: "Pirangi" },
    { cidade: "Pirapora do Bom Jesus" },
    { cidade: "Pirapozinho" },
    { cidade: "Pirassununga" },
    { cidade: "Piratininga" },
    { cidade: "Pitangueiras" },
    { cidade: "Planalto" },
    { cidade: "Platina" },
    { cidade: "Poá" },
    { cidade: "Poloni" },
    { cidade: "Pompéia" },
    { cidade: "Pongaí" },
    { cidade: "Pontal" },
    { cidade: "Pontalinda" },
    { cidade: "Pontes Gestal" },
    { cidade: "Populina" },
    { cidade: "Porangaba" },
    { cidade: "Porto Feliz" },
    { cidade: "Porto Ferreira" },
    { cidade: "Potim" },
    { cidade: "Potirendaba" },
    { cidade: "Pracinha" },
    { cidade: "Pradópolis" },
    { cidade: "Praia Grande" },
    { cidade: "Pratânia" },
    { cidade: "Presidente Alves" },
    { cidade: "Presidente Bernardes" },
    { cidade: "Presidente Epitácio" },
    { cidade: "Presidente Prudente" },
    { cidade: "Presidente Venceslau" },
    { cidade: "Promissão" },
    { cidade: "Quadra" },
    { cidade: "Quatá" },
    { cidade: "Queiroz" },
    { cidade: "Queluz" },
    { cidade: "Quintana" },
    { cidade: "Rafard" },
    { cidade: "Rancharia" },
    { cidade: "Redenção da Serra" },
    { cidade: "Regente Feijó" },
    { cidade: "Reginópolis" },
    { cidade: "Registro" },
    { cidade: "Restinga" },
    { cidade: "Ribeira" },
    { cidade: "Ribeirão Bonito" },
    { cidade: "Ribeirão Branco" },
    { cidade: "Ribeirão Corrente" },
    { cidade: "Ribeirão do Sul" },
    { cidade: "Ribeirão dos Índios" },
    { cidade: "Ribeirão Grande" },
    { cidade: "Ribeirão Pires" },
    { cidade: "Ribeirão Preto" },
    { cidade: "Rifaina" },
    { cidade: "Rincão" },
    { cidade: "Rinópolis" },
    { cidade: "Rio Claro" },
    { cidade: "Rio das Pedras" },
    { cidade: "Rio Grande da Serra" },
    { cidade: "Riolândia" },
    { cidade: "Riversul" },
    { cidade: "Rosana" },
    { cidade: "Roseira" },
    { cidade: "Rubiácea" },
    { cidade: "Rubinéia" },
    { cidade: "Sabino" },
    { cidade: "Sagres" },
    { cidade: "Sales" },
    { cidade: "Sales Oliveira" },
    { cidade: "Salesópolis" },
    { cidade: "Salmourão" },
    { cidade: "Saltinho" },
    { cidade: "Salto" },
    { cidade: "Salto de Pirapora" },
    { cidade: "Salto Grande" },
    { cidade: "Sandovalina" },
    { cidade: "Santa Adélia" },
    { cidade: "Santa Albertina" },
    { cidade: "Santa Bárbara d'Oeste" },
    { cidade: "Santa Branca" },
    { cidade: "Santa Clara d'Oeste" },
    { cidade: "Santa Cruz da Conceição" },
    { cidade: "Santa Cruz da Esperança" },
    { cidade: "Santa Cruz das Palmeiras" },
    { cidade: "Santa Cruz do Rio Pardo" },
    { cidade: "Santa Ernestina" },
    { cidade: "Santa Fé do Sul" },
    { cidade: "Santa Gertrudes" },
    { cidade: "Santa Isabel" },
    { cidade: "Santa Lúcia" },
    { cidade: "Santa Maria da Serra" },
    { cidade: "Santa Mercedes" },
    { cidade: "Santa Rita d'Oeste" },
    { cidade: "Santa Rita do Passa Quatro" },
    { cidade: "Santa Rosa de Viterbo" },
    { cidade: "Santa Salete" },
    { cidade: "Santana da Ponte Pensa" },
    { cidade: "Santana de Parnaíba" },
    { cidade: "Santo Anastácio" },
    { cidade: "Santo André" },
    { cidade: "Santo Antônio da Alegria" },
    { cidade: "Santo Antônio de Posse" },
    { cidade: "Santo Antônio do Aracanguá" },
    { cidade: "Santo Antônio do Jardim" },
    { cidade: "Santo Antônio do Pinhal" },
    { cidade: "Santo Expedito" },
    { cidade: "Santópolis do Aguapeí" },
    { cidade: "Santos" },
    { cidade: "São Bento do Sapucaí" },
    { cidade: "São Bernardo do Campo" },
    { cidade: "São Caetano do Sul" },
    { cidade: "São Carlos" },
    { cidade: "São Francisco" },
    { cidade: "São João da Boa Vista" },
    { cidade: "São João das Duas Pontes" },
    { cidade: "São João de Iracema" },
    { cidade: "São João do Pau d'Alho" },
    { cidade: "São Joaquim da Barra" },
    { cidade: "São José da Bela Vista" },
    { cidade: "São José do Barreiro" },
    { cidade: "São José do Rio Pardo" },
    { cidade: "São José do Rio Preto" },
    { cidade: "São José dos Campos" },
    { cidade: "São Lourenço da Serra" },
    { cidade: "São Luís do Paraitinga" },
    { cidade: "São Manuel" },
    { cidade: "São Miguel Arcanjo" },
    { cidade: "São Paulo" },
    { cidade: "São Pedro" },
    { cidade: "São Pedro do Turvo" },
    { cidade: "São Roque" },
    { cidade: "São Sebastião" },
    { cidade: "São Sebastião da Grama" },
    { cidade: "São Simão" },
    { cidade: "São Vicente" },
    { cidade: "Sarapuí" },
    { cidade: "Sarutaiá" },
    { cidade: "Sebastianópolis do Sul" },
    { cidade: "Serra Azul" },
    { cidade: "Serra Negra" },
    { cidade: "Serrana" },
    { cidade: "Sertãozinho" },
    { cidade: "Sete Barras" },
    { cidade: "Severínia" },
    { cidade: "Silveiras" },
    { cidade: "Socorro" },
    { cidade: "Sorocaba" },
    { cidade: "Sud Mennucci" },
    { cidade: "Sumaré" },
    { cidade: "Suzanápolis" },
    { cidade: "Suzano" },
    { cidade: "Tabapuã" },
    { cidade: "Tabatinga" },
    { cidade: "Taboão da Serra" },
    { cidade: "Taciba" },
    { cidade: "Taguaí" },
    { cidade: "Taiaçu" },
    { cidade: "Taiúva" },
    { cidade: "Tambaú" },
    { cidade: "Tanabi" },
    { cidade: "Tapiraí" },
    { cidade: "Tapiratiba" },
    { cidade: "Taquaral" },
    { cidade: "Taquaritinga" },
    { cidade: "Taquarituba" },
    { cidade: "Taquarivaí" },
    { cidade: "Tarabai" },
    { cidade: "Tarumã" },
    { cidade: "Tatuí" },
    { cidade: "Taubaté" },
    { cidade: "Tejupá" },
    { cidade: "Teodoro Sampaio" },
    { cidade: "Terra Roxa" },
    { cidade: "Tietê" },
    { cidade: "Timburi" },
    { cidade: "Torre de Pedra" },
    { cidade: "Torrinha" },
    { cidade: "Trabiju" },
    { cidade: "Tremembé" },
    { cidade: "Três Fronteiras" },
    { cidade: "Tuiuti" },
    { cidade: "Tupã" },
    { cidade: "Tupi Paulista" },
    { cidade: "Turiúba" },
    { cidade: "Turmalina" },
    { cidade: "Ubarana" },
    { cidade: "Ubatuba" },
    { cidade: "Ubirajara" },
    { cidade: "Uchoa" },
    { cidade: "União Paulista" },
    { cidade: "Urânia" },
    { cidade: "Uru" },
    { cidade: "Urupês" },
    { cidade: "Valentim Gentil" },
    { cidade: "Valinhos" },
    { cidade: "Valparaíso" },
    { cidade: "Vargem" },
    { cidade: "Vargem Grande do Sul" },
    { cidade: "Vargem Grande Paulista" },
    { cidade: "Várzea Paulista" },
    { cidade: "Vera Cruz" },
    { cidade: "Vinhedo" },
    { cidade: "Viradouro" },
    { cidade: "Vista Alegre do Alto" },
    { cidade: "Vitória Brasil" },
    { cidade: "Votorantim" },
    { cidade: "Votuporanga" },
    { cidade: "Zacarias" }
].map(suggestion => ({
    value: suggestion.cidade,
    label: suggestion.cidade,
}));

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: 250,
        minWidth: 290,
    },
    input: {
        display: 'flex',
        padding: 0,
        height: 'auto',
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    chip: {
        margin: theme.spacing(0.5, 0.25),
    },
    chipFocused: {
        backgroundColor: emphasize(
            theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
            0.08,
        ),
    },
    noOptionsMessage: {
        padding: theme.spacing(1, 2),
    },
    singleValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        bottom: 6,
        fontSize: 16,
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing(1),
        left: 0,
        right: 0,
    },
    divider: {
        height: theme.spacing(2),
    },
}));

function NoOptionsMessage(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.noOptionsMessage}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

NoOptionsMessage.propTypes = {
    /**
     * The children to be rendered.
     */
    children: PropTypes.node,
    /**
     * Props to be passed on to the wrapper.
     */
    innerProps: PropTypes.object.isRequired,
    selectProps: PropTypes.object.isRequired,
};

function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />;
}

inputComponent.propTypes = {
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({
            current: PropTypes.any.isRequired,
        }),
    ]),
};

function Control(props) {
    const {
        children,
        innerProps,
        innerRef,
        selectProps: { classes, TextFieldProps },
    } = props;

    return (
        <TextField
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: classes.input,
                    ref: innerRef,
                    children,
                    ...innerProps,
                },
            }}
            {...TextFieldProps}
        />
    );
}

Control.propTypes = {
    /**
     * Children to render.
     */
    children: PropTypes.node,
    /**
     * The mouse down event and the innerRef to pass down to the controller element.
     */
    innerProps: PropTypes.shape({
        onMouseDown: PropTypes.func.isRequired,
    }).isRequired,
    innerRef: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.func,
        PropTypes.shape({
            current: PropTypes.any.isRequired,
        }),
    ]).isRequired,
    selectProps: PropTypes.object.isRequired,
};

function Option(props) {
    return (
        <MenuItem
            ref={props.innerRef}
            selected={props.isFocused}
            component="div"
            style={{
                fontWeight: props.isSelected ? 500 : 400,
            }}
            {...props.innerProps}
        >
            {props.children}
        </MenuItem>
    );
}

Option.propTypes = {
    /**
     * The children to be rendered.
     */
    children: PropTypes.node,
    /**
     * props passed to the wrapping element for the group.
     */
    innerProps: PropTypes.shape({
        id: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        onMouseMove: PropTypes.func.isRequired,
        onMouseOver: PropTypes.func.isRequired,
        tabIndex: PropTypes.number.isRequired,
    }).isRequired,
    /**
     * Inner ref to DOM Node
     */
    innerRef: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.func,
        PropTypes.shape({
            current: PropTypes.any.isRequired,
        }),
    ]).isRequired,
    /**
     * Whether the option is focused.
     */
    isFocused: PropTypes.bool.isRequired,
    /**
     * Whether the option is selected.
     */
    isSelected: PropTypes.bool.isRequired,
};

function Placeholder(props) {
    const { selectProps, innerProps = {}, children } = props;
    return (
        <Typography color="textSecondary" className={selectProps.classes.placeholder} {...innerProps}>
            {children}
        </Typography>
    );
}

Placeholder.propTypes = {
    /**
     * The children to be rendered.
     */
    children: PropTypes.node,
    /**
     * props passed to the wrapping element for the group.
     */
    innerProps: PropTypes.object,
    selectProps: PropTypes.object.isRequired,
};

function SingleValue(props) {
    return (
        <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
            {props.children}
        </Typography>
    );
}

SingleValue.propTypes = {
    /**
     * The children to be rendered.
     */
    children: PropTypes.node,
    /**
     * Props passed to the wrapping element for the group.
     */
    innerProps: PropTypes.any.isRequired,
    selectProps: PropTypes.object.isRequired,
};

function ValueContainer(props) {
    return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

ValueContainer.propTypes = {
    /**
     * The children to be rendered.
     */
    children: PropTypes.node,
    selectProps: PropTypes.object.isRequired,
};

function MultiValue(props) {
    return (
        <Chip
            tabIndex={-1}
            label={props.children}
            className={clsx(props.selectProps.classes.chip, {
                [props.selectProps.classes.chipFocused]: props.isFocused,
            })}
            onDelete={props.removeProps.onClick}
            deleteIcon={<CancelIcon {...props.removeProps} />}
        />
    );
}

MultiValue.propTypes = {
    children: PropTypes.node,
    isFocused: PropTypes.bool.isRequired,
    removeProps: PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        onMouseDown: PropTypes.func.isRequired,
        onTouchEnd: PropTypes.func.isRequired,
    }).isRequired,
    selectProps: PropTypes.object.isRequired,
};

function Menu(props) {
    return (
        <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
            {props.children}
        </Paper>
    );
}

Menu.propTypes = {
    /**
     * The children to be rendered.
     */
    children: PropTypes.element.isRequired,
    /**
     * Props to be passed to the menu wrapper.
     */
    innerProps: PropTypes.object.isRequired,
    selectProps: PropTypes.object.isRequired,
};

const components = {
    Control,
    Menu,
    MultiValue,
    NoOptionsMessage,
    Option,
    Placeholder,
    SingleValue,
    ValueContainer,
};

export default function IntegrationReactSelect(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [multi, setMulti] = useState(null);

    useEffect(() => {
        if (props.value) {
            const cities = [];

            props.value.forEach(city => {
                cities.push({ value: city, label: city });
            });
            setMulti(cities);
        }
    }, [props.value]);

    function handleChangeMulti(value) {
        const cities = [];

        setMulti(value);

        value.forEach(element => {
            cities.push(element.value);
        });
        props.onChange(cities);
    }

    const selectStyles = {
        input: base => ({
            ...base,
            color: theme.palette.text.primary,
            '& input': {
                font: 'inherit',
            },
        }),
    };

    return (
        <NoSsr>
            <Select
                classes={classes}
                styles={selectStyles}
                inputId="react-select-multiple"
                TextFieldProps={{
                    label: props.dia,
                    InputLabelProps: {
                        htmlFor: 'react-select-multiple',
                        shrink: true,
                    },
                }}
                placeholder=""
                noOptionsMessage={() => 'Nenhuma cidade encontrada'}
                isDisabled={props.disabled}
                options={cidades}
                components={components}
                value={multi}
                onChange={handleChangeMulti}
                isMulti
            />
        </NoSsr>
    );
}