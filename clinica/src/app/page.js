import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.containerPrincipal}>
      <h1>Clínica de Saúde M.O</h1>
      <p>Boas-vindas ao site da nossa clínica! Aqui estarão disponíveis as informações sobre nossos médicos, pacientes e consultas.</p>
      <div className={styles.divFotos}>
        <Image className={styles.imgPage} src='/images/auscuta.jpg' alt='' width={500} height={300} />
        <Image className={styles.imgPage} src='/images/anota.jpg' alt='' width={500} height={300} />
      </div>
    </div>
  );
}
//  400px pra cima responsivo

