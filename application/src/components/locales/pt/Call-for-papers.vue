<script>
import OrganizerItem from '@/components/OrganizerItem.vue';

import Tr from '@/i18n/translation'

export default {
    components: {
        OrganizerItem
    },
    setup() {
        return {
            Tr
        }
    }
}
</script>

<template>
    <ol class="list-group list-group-numbered my-3">
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <strong class="text-primary text-gradient">Prazo de envio</strong> <del>3 de julho PRORROGADO</del><strong class="text-danger"> Fechada</strong><br>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-papers', hash: '#cpf-dates'})" class="uline">
                Veja todas as datas importantes
            </RouterLink>            
        </div>
        </li>
    </ol>

    <p>
        A XI Conferência Latino-Americana de Interação Humano-Computador (CLIHC 2023) tem como objetivo fornecer um fórum de
        excelência que reúna as comunidades de pesquisa em Interação Humano-Computador (IHC) da América Latina e
        internacional para discutir e compartilhar ideias, métodos, abordagens e técnicas para o design, implementação e
        avaliação de experiências interativas de usuário. De acordo com edições anteriores, acreditamos que a IHC deve
        promover a produção de tecnologia que possa ser utilizada e beneficiar o maior número possível de pessoas,
        possibilitando o intercâmbio intercultural e a cooperação entre indivíduos com diferentes origens e necessidades.
    </p>

    <p>
        Este ano, o CLIHC 2023 será realizado em Puebla, México, e online, estando aberto a submissões nas seguintes
        categorias:
    </p>

    <ul>
        <li>Artigos completos</li>
        <li>Artigos curtos</li>
    </ul>

    <p>
        Os autores são convidados a preparar e enviar artigos relatando projetos de pesquisa, designs inovadores, estudos de
        usuários, modelos de interação, estudos de campo, estudos de caso e outros. Acadêmicos, pesquisadores, profissionais
        da indústria, bem como estudantes de graduação e pós-graduação são bem-vindos para participar da seleção revisada
        por pares dos trabalhos que serão apresentados na conferência ou online, de 30 de outubro a 1 de novembro de 2023.
    </p>

    <p>Os tópicos das submissões podem abranger todos os aspectos da IHC, incluindo, mas não se limitando a:</p>

    <ol>
        <li>Computação afetiva</li>
        <li>Interação cérebro-computador (BCI)</li>
        <li>CSCW e computação social</li>
        <li>Métodos de design</li>
        <li>Educação e IHC</li>
        <li>Interação corporificada</li>
        <li>IHC para desenvolvimento (IHC4D)</li>
        <li>Saúde e IHC</li>
        <li>Inclusão e acessibilidade</li>
        <li>Interfaces de usuário inovadoras</li>
        <li>Interfaces e interação em jogos</li>
        <li>Computação móvel</li>
        <li>Percepção e visualização</li>
        <li>Interação humano-robô e telepresença</li>
        <li>Experiência do usuário (UX) e usabilidade</li>
    </ol>

    <h3>Submissão e Datas Importantes</h3>
    <p>
        Todos os manuscritos devem ser submetidos de forma totalmente anonimizada (para anonimizar seu artigo, por favor,
        considere as <a href="https://chi2021.acm.org/for-authors/presenting/papers/chi-anonymization-policy"
            class="uline">diretrizes fornecidas pela CHI</a>). Considere uma audiência internacional: evite termos locais e
        utilize o sistema internacional de unidades. Além disso, siga as <a
            href="./accessibility-recommendations-for-authors" class="uline">diretrizes de acessibilidade</a>.
    </p>

    <h4 id="cpf-dates">Datas Importantes (Artigos Completos e Curtos)</h4>
    <ul>
        <li>Submissão de resumo: <del>12 de junho</del> <strong class="text-danger">26 de junho PRORROGADO</strong></li>
        <li>Envío de artículos: <del>19 de junho</del> <strong class="text-danger">3 de julho PRORROGADO</strong></li>
        <li>Notificação: 31 de julho</li>
        <li>Versão final: 25 de agosto</li>
        <li>Evento: 30 a 31 de outubro, 1 de novembro</li>
    </ul>
    <p>Os prazos são à meia-noite AoE (Anywhere on Earth).</p>

    <h3>Código de Ética</h3>
    <p>
        Seguimos o <a href="https://www.acm.org/code-of-ethics" class="uline">Código de Ética da ACM</a>. Esperamos que
        todas as submissões, pesquisas subjacentes e comportamento durante o processo de revisão e conferência estejam de
        acordo com os princípios e responsabilidades descritos no código.
    </p>

    <h3>Processo de Submissão</h3>
    <p>
        As submissões de artigos completos e curtos devem ser feitas por meio do <a
            href="https://easychair.org/conferences/?conf=clihc2023" class="uline">Sistema de Conferências EasyChair</a>.
    </p>

    <p>
        O formato de submissão a ser utilizado para cada categoria seguirá o <a
            href="https://www.acm.org/publications/proceedings-template" class="uline">novo formato de artigo mestre da
            ACM</a>. Os autores podem escolher trabalhar em um dos seguintes formatos:
    </p>

    <ul>
        <li>Microsoft Word</li>
        <li>LaTeX (recomendado)</li>
    </ul>

    <h3>Categorias de Submissão</h3>

    <h4>Artigos Completos (10 Páginas)</h4>
    <p>
        Projetos de pesquisa que atingiram um estágio maduro e apresentam uma contribuição original ao estado da arte são
        bem-vindos para a categoria de artigos completos. As submissões devem ser relevantes para o tema da conferência e
        não podem ter sido publicadas nem estar em revisão em outra conferência ou periódico. O comprimento máximo para
        artigos completos é de 10 páginas, incluindo referências, e os artigos devem ser escritos em inglês, português ou
        espanhol.
    </p>

    <h4>Artigos Curtos (4 Páginas)</h4>
    <p>
        Projetos de pesquisa que desejam relatar resultados preliminares, parciais ou complementares podem enviar seus
        artigos para a categoria de artigos curtos, que tem um comprimento máximo de 4 páginas, incluindo referências. Os
        artigos enviados devem ser escritos em inglês, português e espanhol. O conteúdo deve ser relevante para a
        conferência e não pode ter sido publicado nem estar em processo de revisão em outra conferência ou periódico.
    </p>

    <p>
        Os artigos serão revisados por pelo menos dois revisores em um processo de dupla anonimização. Observe que os
        artigos submetidos devem ser anonimizados, incluindo referências ao trabalho anterior dos autores.
    </p>

    <p>
        Estamos trabalhando para garantir que os artigos aceitos sejam publicados na ACM Digital Library. Além disso, os
        melhores artigos serão recomendados para submissão de uma versão estendida e publicados em uma edição especial do
        prestigioso <a href="https://www.springer.com/series/6033" class="uline">Human–Computer Interaction Series</a>,
        publicado pela Springer e regularmente indexado na lista mestra de livros da Web of Science.
    </p>

    <h3 class="my-4">{{ $t("organizers.program_chairs_title") }}</h3>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/pablo.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/pablo.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Pablo Torres
                </template>
                <template #institution>
                    UTPL, EC
                </template>
                <template #email>
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/vanessa.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/vanessa.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Vanessa Agredo Delgado
                </template>
                <template #institution>
                    FUNAD, CO
                </template>
                <template #email>
                </template>
            </OrganizerItem>
        </div>

</div></template>