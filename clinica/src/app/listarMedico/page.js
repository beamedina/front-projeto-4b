'use client'
import { useEffect, useState } from "react"
import styles from './listarMedico.module.css'

export default function efeitos() {
    const [medicos, setMedicos] = useState([]);
    // const [nomes, setNomes] = useState('');

    const getMedicos = async () => {
        const response = await fetch('https://api-clinica-2a.onrender.com/medicos')
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados: ' + response.statusText);
        }
        const data = await response.json()
        setMedicos(data);
        console.log(data)
    }
    //kkk


    useEffect(() => {
        // console.log('Renderizou');
        getMedicos();
    }, [])

    // useEffect(() => {
    //     getCidades();
    // }, [estado])

    return (
        <div>
            <h1>Nossos Médicos</h1>
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
                {medicos.map((cidade) => (
                    <option value={cidade.id} key={cidade.id}>{cidade.nome} </option>
                ))}
            </select>
            {cidade ? <p>{cidade}</p> : <p>Escolha a cidade</p>} */}

        </div>
    )
}
