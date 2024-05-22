import React from 'react'
import styles from '@/styles/pages/sites/about.module.css'

export default function About () {
  return (
    <div className={styles.mainDiv}>
      <section className={styles.section}>
        <h1>Acerca de Little Sites</h1>
        <p>
          Little Sites es una organizacion dedicada a empoderar a los pequeños
          negocios, proporcionándoles una plataforma sencilla y <br />
          accesible para crear su presencia en línea. Creemos que cada negocio,
          sin importar su tamaño, merece ser visto y escuchado.
        </p>
      </section>
      <section className={styles.section}>
        <h2>Nuestra Misión</h2>
        <p>
          Nuestra misión es simple: ayudar a los pequeños negocios a crecer.
          Queremos que cada pequeño negocio tenga la oportunidad de destacar{" "}
          <br />
          en el mundo digital. Por eso, ofrecemos una solución fácil y asequible
          para crear sitios web personalizados.
        </p>
      </section>
      <section className={styles.section}>
        <h2>¿Por qué Little Sites?</h2>
        <p>
          Entendemos los desafíos a los que se enfrentan los pequeños negocios
          al intentar establecer una presencia en línea. Por eso, hemos diseñado{" "}
          <br />
          nuestra plataforma para ser lo más sencilla posible. Con Little Sites,
          puedes tener tu sitio web en funcionamiento en poco tiempo, <br />
          sin necesidad de conocimientos técnicos.
        </p>
      </section>
    </div>
  );
}
