'use client'
import { useEffect, useState } from "react";
import styles from './listarMedico.module.css'


export default function efeitos() {
    const [nome, setNome] = useState(undefined)
    const [medicos, setMedicos] = useState([])

    const getMedicos = async (nome) => {
        let response = await fetch('https://api-clinica-2a.onrender.com/medicos');
        let data = await response.json();
        console.log(data, nome)
        if (typeof nome == 'undefined') {
            setMedicos(data);
        } else {
            data = data.filter(n => n.nome.toLowerCase().includes(nome.toLowerCase()));
            setMedicos(data);
        }

        if (!response.ok) {
            throw new Error('Erro ao buscar dados' + response.statusText);
        }

    }

    useEffect(() => {
        getMedicos(nome);
    }, [nome]);

    return (
       
        <div>
            <h1>Nossos Médicos</h1>
            <div className={styles.divao}>
                <h2>Buscar Médico</h2>
                <input onChange={(e) => setNome(e.target.value)} ></input>
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr className={styles.tr}>
                            <th className={styles.th}>ID</th>
                            <th className={styles.th}>Nome</th>
                            <th className={styles.th}>Telefone</th>
                            <th className={styles.th}>Email</th>
                            <th className={styles.th}>Especialidade</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                        {medicos.map((medico, id) => (
                            <tr key={id} className={styles.tr}>
                                <td className={styles.td}>{medico.id}</td>
                                <td className={styles.td}>{medico.nome}</td>
                                <td className={styles.td}>{medico.telefone}</td>
                                <td className={styles.td}>{medico.email}</td>
                                <td className={styles.td}>{medico.especialidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                        {/* <select onChange={(ev) => setMedicos(ev.target.value)}>
            //                 {medicos.map((cidade) => (
            //                     <option value={cidade.id} key={cidade.id}>{cidade.nome} </option>
            //                 ))}
            //             </select>
            //             {cidade ? <p>{cidade}</p> : <p>Escolha a cidade</p>} */}
            </div>
        </div>

    );
}
