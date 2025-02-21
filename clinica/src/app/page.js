import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.containerPrincipal}>
      <h1>Clínica de Saúde M.O</h1>
      <p className={styles.text}>Nossa equipe de profissionais altamente qualificados está pronta para cuidar da sua saúde com dedicação e excelência. Oferecemos um atendimento humanizado, tecnologia de ponta e uma ampla gama de especialidades médicas para garantir seu bem-estar.</p>
    </div>
  );
}
//  400px pra cima responsivo

