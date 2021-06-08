import { GetStaticProps } from 'next';
import Head from 'next/head'
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de marco de 2021</time>
            <strong>Notas sobre sexo e catolicismo</strong>
            <p>Não vou enrolar, vou direto ao ponto: o mundo está uma bagunça em  termos de ideias e valores e a maioria das pessoas (católicas ou não)  estão no bojo desse caos sem entender muito sobre quase nenhum assunto,  especialmente o sexo. Entre católicos, falar sobre isso ora vai para o  lado do tabu e puritanismo, ora vai para o lado da permissividade e  banalidade sexual. De um lado, há pessoas que chegaram ao casamento (e  estão nele) achando que sentir prazer na relação sexual é “um mal  necessário” e que procurar maneiras de melhorar a vida sexual pode ser  pecado. Do outro, há aqueles católicos que usam contraceptivos  artificiais e acham que assistir pornografia é normal. Falta equilíbrio e  bom senso. Falta doutrina!</p>
          </a>
          <a href="#">
            <time>12 de marco de 2021</time>
            <strong>Notas sobre sexo e catolicismo</strong>
            <p>Não vou enrolar, vou direto ao ponto: o mundo está uma bagunça em  termos de ideias e valores e a maioria das pessoas (católicas ou não)  estão no bojo desse caos sem entender muito sobre quase nenhum assunto,  especialmente o sexo. Entre católicos, falar sobre isso ora vai para o  lado do tabu e puritanismo, ora vai para o lado da permissividade e  banalidade sexual. De um lado, há pessoas que chegaram ao casamento (e  estão nele) achando que sentir prazer na relação sexual é “um mal  necessário” e que procurar maneiras de melhorar a vida sexual pode ser  pecado. Do outro, há aqueles católicos que usam contraceptivos  artificiais e acham que assistir pornografia é normal. Falta equilíbrio e  bom senso. Falta doutrina!</p>
          </a>
          <a href="#">
            <time>12 de marco de 2021</time>
            <strong>Notas sobre sexo e catolicismo</strong>
            <p>Não vou enrolar, vou direto ao ponto: o mundo está uma bagunça em  termos de ideias e valores e a maioria das pessoas (católicas ou não)  estão no bojo desse caos sem entender muito sobre quase nenhum assunto,  especialmente o sexo. Entre católicos, falar sobre isso ora vai para o  lado do tabu e puritanismo, ora vai para o lado da permissividade e  banalidade sexual. De um lado, há pessoas que chegaram ao casamento (e  estão nele) achando que sentir prazer na relação sexual é “um mal  necessário” e que procurar maneiras de melhorar a vida sexual pode ser  pecado. Do outro, há aqueles católicos que usam contraceptivos  artificiais e acham que assistir pornografia é normal. Falta equilíbrio e  bom senso. Falta doutrina!</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content']
  })

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {

    }
  }
}