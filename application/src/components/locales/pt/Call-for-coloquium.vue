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
            <strong class="text-primary text-gradient">Prazo de envio:</strong> <del>31 de julho</del> <del>11 de agosto PRORROGADA</del> <strong class="text-danger"> {{ $t("about.closed") }}</strong><br>
            <RouterLink :to="Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-dates'})" class="uline">
                Veja todas as datas importantes
            </RouterLink>            
        </div>
        </li>
    </ol>

    <p>
        O CLIHC 2023 é a conferência bienal que tem como objetivo reunir a comunidade de HCI da América Latina. O Colóquio
        de Pós-Graduação do CLIHC 2023 oferece uma oportunidade para estudantes de pós-graduação latino-americanos que
        trabalham em HCI e áreas relacionadas explorarem e desenvolverem seus interesses de pesquisa em um workshop
        interdisciplinar, sob a orientação de um painel de pesquisadores proeminentes.
    </p>

    <p>
        Convidamos estudantes que acreditam se beneficiar desse tipo de feedback em seu trabalho de dissertação/projeto
        final a se candidatarem a essa oportunidade única de compartilhar suas pesquisas com outros estudantes em situação
        semelhante, bem como pesquisadores sêniores da área. Os candidatos bem-sucedidos serão aqueles que apresentarem um
        tópico claro e abordagem de pesquisa, e que tenham feito algum progresso, mas que ainda possam fazer alterações em
        seu plano. Espera-se a participação presencial nesta atividade.
    </p>

    <p>
        Além de descrever como você se beneficiará com a participação, tanto você quanto seu orientador devem estar claros
        sobre o que você pode contribuir para o Colóquio de Pós-Graduação. Ser aceito no Colóquio envolve um compromisso de
        fornecer e receber comentários cuidadosos, com o objetivo de moldar a HCI na América Latina, e de interagir com
        outros participantes em suas respectivas áreas.
    </p>

    <h3>Objetivos</h3>
    <ul>
        <li>Oferecer aos estudantes de pós-graduação em HCI da América Latina a oportunidade de compartilhar e discutir seu
            trabalho com pesquisadores experientes.</li>
        <li>Fornecer feedback sobre a pesquisa atual dos estudantes e orientação sobre direções futuras de pesquisa.</li>
        <li>Oferecer a cada estudante comentários e perspectivas frescas sobre seu trabalho vindos de pesquisadores e
            estudantes de outras instituições.</li>
        <li>Promover o desenvolvimento de uma comunidade de estudiosos solidária e um espírito de pesquisa colaborativa
            entre estudantes de pós-graduação de diferentes universidades da América Latina.</li>
        <li>Permitir que a comunidade conheça projetos de pesquisa desenvolvidos por estudantes de pós-graduação.</li>
    </ul>

    <h3>Durante o Colóquio de Pós-Graduação</h3>

    <p>
        Os estudantes aceitos apresentarão seu trabalho ao grupo, com tempo substancial para discussão e perguntas dos
        pesquisadores participantes e demais participantes. Instruções detalhadas serão fornecidas após a aceitação.
    </p>

    <p>
        Cada participante também deve trazer uma versão reduzida de um pôster apresentando seu trabalho (por exemplo, usando
        papel tamanho carta ou A4) para compartilhar com orientadores e outros estudantes durante as sessões do Colóquio.
        Espera-se a participação presencial nesta atividade.
    </p>

    <h3>Submissões</h3>

    <P>
        A proposta deve conter os seguintes quatro componentes, todos escritos em inglês, português ou espanhol.
    </P>
    <ul>
        <li>
            Resumo Estendido::
            uma descrição de pesquisa de 4 páginas (incluindo referências) abrangendo aspectos centrais do seu trabalho de
            pós-graduação. Este documento deve seguir a versão mais recente do <a
                href="https://www.acm.org/publications/proceedings-template" class="uline">formato ACM Primary Article
                Template</a>. Pontos importantes deste documento incluem:
            <ul>
                <li>Sua situação, ou seja, o contexto do programa de pós-graduação em que seu trabalho está sendo realizado
                    (instituição de origem, país, programa, ano de estudo, etc.).</li>
                <li>Contexto e motivação que impulsionam sua pesquisa.</li>
                <li>Objetivos/perguntas de pesquisa.</li>
                <li>Revisão de literatura/fundamentação teórica de trabalhos relevantes que embasam sua pesquisa.</li>
                <li>Hipótese/tese e/ou declaração do problema.</li>
                <li>Abordagem e métodos de pesquisa seguidos, incluindo uma justificativa relevante.</li>
                <li>Resultados obtidos até o momento e sua validade.</li>
                <li>Status da dissertação e próximos passos (ou seja, o que você já fez e o que falta fazer).</li>
                <li>Contribuições atuais e esperadas.</li>
            </ul>
        </li>

        <li>
            Uma declaração de um parágrafo sobre os benefícios esperados da participação, tanto para você quanto para os
            demais participantes do colóquio (ou seja, o que você contribuirá e o que ganhará) (máximo de 1 página).
        </li>

        <li>
            Uma carta de indicação do seu orientador principal de dissertação/projeto final, que aborde o valor que o
            Colóquio de Pós-Graduação teria para você, qual contribuição você provavelmente fará para o evento e por que
            este é um bom momento para você participar (máximo de 1 página).
        </li>

        <li>
            Uma versão concisa do seu Curriculum Vitae atual, enfatizando formação acadêmica, experiência em pesquisa e
            publicações relevantes (se houver) (1-2 páginas).
        </li>

        <li>
            Envie sua proposta como um único arquivo em PDF através do <a
                href="https://easychair.org/conferences/?conf=clihc2023" class="uline">Sistema de Conferência EasyChair,
            </a>, na trilha do Colóquio de Pós-Graduação, respeitando o prazo.
        </li>

    </ul>
    <p>
        Sua submissão deve ser um trabalho original, não podendo estar em análise simultânea para publicação em outra
        conferência ou periódico, nem ter sido publicado anteriormente. Por favor, forneça referências precisas e completas.
    </p>
    <p>
        As propostas aceitas podem escolher uma das seguintes mídias de publicação:
    </p>
    <ul>
        <li>Anais da Conferência publicados no ACM DL. Somente submissões em inglês podem ser publicadas neste meio. Se sua
            submissão for aceita em espanhol ou português e você desejar publicar aqui, será necessário traduzir sua
            submissão original para o inglês.</li>
        <li>Avances en Interacción Humano-Computadora. Somente submissões em espanhol ou inglês podem ser publicadas neste
            meio. Se sua submissão for aceita em português e você desejar publicar aqui, será necessário traduzir sua
            submissão original para o espanhol ou inglês.</li>
    </ul>

    <h3>Processo de Seleção</h3>
    <p>
        A revisão e decisão de aceitação serão baseadas em diversos fatores. Isso inclui a qualidade de sua proposta e em
        qual estágio você se encontra em seu programa de pós-graduação. Candidatos que possuem uma ideia claramente
        desenvolvida, que estão formalmente considerados por sua instituição como trabalhando em sua dissertação ou projeto
        final, e que ainda têm tempo para serem influenciados pela participação no Colóquio, receberão a maior consideração.
    </p>
    <p>
        Além da avaliação da qualidade da pesquisa, o processo de seleção também levará em consideração fatores adicionais.
        O objetivo é identificar um grupo de estudantes que se beneficiarão significativamente do Colóquio e se apoiarão
        mutuamente em seu crescimento. Como grupo, os candidatos aceitos exibirão uma diversidade de origens e tópicos. Sua
        instituição será levada em conta, e é improvável que aceitemos mais de dois estudantes da mesma instituição e
        certamente não aceitaremos mais de um estudante com o mesmo orientador.
    </p>

    <h3 id="cgc-dates">Datas Importantes (Colóquio de Pós-Graduação)</h3>
    <ul>
        <li>Envio de propostas do Colóquio de Pós-Graduação: <del>31 de julho</del> 11 de agosto PRORROGADA</li>
        <li>Notificação: 28 de agosto</li>
        <li>Versão final: 11 de setembro</li>
        <li>Colóquio de Pós-Graduação: A ser determinado</li>
    </ul>


    <h3 class="my-4">{{ $t("organizers.graduate_colloquium_chairs_title") }}</h3>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/huizilopoztli.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/huizilopoztli.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Huizilopoztli Luna Garcia
                </template>
                <template #institution>
                    UAZ, MX
                </template>
                <template #email>
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/carolina.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/carolina.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Carolina Fuentes
                </template>
                <template #institution>
                    Cardiff University, UK
                </template>
                <template #email>
                </template>
        </OrganizerItem>
    </div>
</div></template>