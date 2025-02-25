import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.containerPrincipal}>
      <h1>Clínica de Saúde M.O</h1>
      <p className={styles.text}>Aqui, a saúde e o bem-estar de cada paciente
        são nossa maior prioridade. Oferecemos atendimento médico especializado com carinho,
        dedicação e a confiança de profissionais qualificados para cuidar de você e da sua família.</p>
      <Image className={styles.img} src='/images/hello.jpg' alt='' width={300} height={300} />
    </div>
  );
}
//  400px pra cima responsivo

