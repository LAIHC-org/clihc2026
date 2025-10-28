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
            <strong class="text-primary text-gradient">Prazo de submissão:</strong> <del>31 de julho</del> <del>11 de agosto PRORROGADA</del> <strong class="text-danger"> {{ $t("about.closed") }}</strong><br>
        </div>
        </li>
    </ol>

    <h3 id="sdc-dates">Datas Importantes</h3>
    <ul>
        <li>Prazo de submissão: <del>31 de julho</del> 11 de agosto PRORROGADA</li>
        <li>Notificação: 28 de agosto</li>
        <li>Versão final: 14 de setembro (para publicação em inglês no ACM DL ou em espanhol no "Avances en Interacción
            Humano-Computadora")</li>
        <li>Evento: 30 a 31 de outubro, 1 de novembro</li>
    </ul>
    <p>
        Os prazos são até a meia-noite AoE (Anywhere on Earth).
    </p>

    <h3>O que é a competição de design para estudantes na CLIHC 2023?</h3>

    <p>A Competição de Design para Estudantes tem como objetivos:</p>
    <ul>
        <li>Oferecer uma oportunidade para estudantes de diversas áreas (como ciência da computação, HCI, design industrial,
            design de produtos, design visual, design de interação, empreendedorismo, etc.) participarem e demonstrarem suas
            habilidades de resolução de problemas e design em uma competição internacional com seus colegas.</li>
        <li>Proporcionar uma oportunidade para os estudantes participantes da competição de design se encontrarem com a
            comunidade da CLIHC.</li>
        <li>Fornecer perspectivas refrescantes sobre como equipes de design de diferentes disciplinas e partes do mundo
            abordam um problema de design comum.</li>
    </ul>

    <h3>O briefing de design: soluções apropriadas para todos</h3>
    <p>
        Pedimos que você contribua para um (ou vários) dos 17 Objetivos de Desenvolvimento Sustentável identificados pela
        Organização das Nações Unidas:
    </p>

    <ul>
        <li>Erradicação da Pobreza</li>
        <li>Fome Zero</li>
        <li>Saúde e Bem-Estar</li>
        <li>Educação de Qualidade</li>
        <li>Igualdade de Gênero</li>
        <li>Água Limpa e Saneamento</li>
        <li>Energia Acessível e Limpa</li>
        <li>Trabalho Decente e Crescimento Econômico</li>
        <li>Indústria, Inovação e Infraestrutura</li>
        <li>Redução das Desigualdades</li>
        <li>Cidades e Comunidades Sustentáveis</li>
        <li>Consumo e Produção Responsáveis</li>
        <li>Ação contra a Mudança Global do Clima</li>
        <li>Vida na Água</li>
        <li>Vida Terrestre</li>
        <li>Paz, Justiça e Instituições Eficazes</li>
        <li>Parcerias e Meios de Implementação</li>
    </ul>

    <p>
        Seu problema e sua solução precisam estar claramente relacionados a um (ou vários) desses objetivos. Envolver e
        envolver os usuários potenciais. Mostrar que o problema é relevante e que a solução realmente resolve o problema de
        forma sustentável. Verificar como outros podem ter tentado resolver o problema no passado e propor uma abordagem
        nova e inovadora. Assegure o cumprimento dos critérios éticos.
    </p>

    <h3>Requisitos da equipe de estudantes</h3>
    <p>
        As equipes devem ser compostas por pelo menos dois e no máximo quatro estudantes. Não há limite para o número de
        equipes que podem competir em uma determinada universidade ou organização. No entanto, um estudante não pode fazer
        parte de várias equipes.
    </p>
    <p>
        As submissões são convidadas de estudantes em todas as fases de sua carreira universitária, desde a graduação até o
        pós-graduação. Embora não seja um requisito obrigatório, é altamente recomendado que as equipes sejam
        multidisciplinares e/ou multinacionais.
    </p>
    <p>
        A Competição de Design para Estudantes é destinada a estudantes. Envie comprovante de sua condição de estudante,
        enviando uma nota assinada por seu orientador acadêmico, verificando as seguintes informações:
    </p>
    <ul>
        <li>Sua universidade</li>
        <li>Se você era um estudante de pós-graduação (ou seja, nível de mestrado ou doutorado) ou de graduação (ou seja,
            nível de bacharelado) quando o trabalho foi realizado, ou confirme que você está atualmente matriculado em um
            programa acadêmico em tempo integral, ou voltará a ser estudante no próximo semestre.</li>
    </ul>

    <h3>Requisitos da equipe de supervisão</h3>

    <ul>
        <li>Grupos de até quatro estudantes com um supervisor.</li>
        <li>Cada equipe deve ter pelo menos dois estudantes e um supervisor.</li>
        <li>Cada supervisor pode ter apenas uma equipe.</li>
        <li>O supervisor pode ser um professor ou profissional da indústria.</li>
    </ul>

    <p>
        Supervisores acadêmicos, mentores, treinadores ou pessoas que fornecem suporte adicional não devem ser
        co-presidentes, revisores ou juízes da competição ao mesmo tempo. <span class="text-danger">Mentores não podem ser
            autores do artigo</span>.
    </p>

    <h3>Preparando a submissão e estrutura da competição</h3>
    <p>As submissões podem ser em inglês, espanhol ou português.</p>

    <ol>
        <li>
            Submissão para entrar na competição, até 31 de julho
            <ul>
                <li>
                    <strong>Apresentação em slides</strong>: PDF de uma apresentação com no máximo 15 slides (primeiro slide
                    com nome dos estudantes e nome do projeto). A apresentação pode incluir informações relevantes do artigo
                    (descrição do problema e da solução, métodos de pesquisa e design, por que sua solução será utilizada
                    pelos usuários potenciais).
                </li>
                <li>
                    <strong>Artigo</strong>: m relatório escrito de até 6 páginas, incluindo referências (formato: ACM
                    Master Article Submission Templates), o artigo precisa incluir:
                    <ul>
                        <li>Uma descrição clara do problema e da solução</li>
                        <li>Uma visão geral dos métodos de pesquisa e design</li>
                        <li>As razões pelas quais sua solução será utilizada pelos usuários potenciais</li>
                        <li>Reconhecimento de soluções parciais ou incompletas</li>
                        <li>Reconhecimento de qualquer assistência obtida fora da equipe de estudantes (por exemplo,
                            orientadores, especialistas no domínio, soluções existentes, usuários)</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            Submissão após aceitação na competição, até 25 de agosto
            <ul>
                <li>
                    <strong>Artigo</strong>: versão final para publicação (instruções serão fornecidas juntamente com o
                    e-mail de aceitação).
                </li>
                <li>
                    <strong>Vídeo</strong>: ilustrando como sua solução se encaixa na vida dos usuários com a ajuda de
                    cenários ou aborda aspectos humanos dos objetivos de desenvolvimento sustentável escolhidos. O vídeo
                    também pode ilustrar detalhes da interface e da apresentação das informações (máximo de 5 minutos). O
                    vídeo pode incluir:
                    <ul>
                        <li>Exemplos de dados contextuais significativos e sua análise (pesquisa primária, secundária ou
                            ambas)</li>
                        <li>
                            Fontes criativas chave de inspiração para o design (designs e sistemas existentes)
                            <ul>
                                <li>Esboços da solução em evolução</li>
                            </ul>
                        </li>
                        <li>Cenários que descrevem como a solução se encaixa na vida dos usuários e resolve problemas/engaja
                            ou entretém os usuários</li>
                        <li>Detalhes da interface e do design de informações, quando relevantes</li>
                        <li>Destaques dos resultados significativos da avaliação</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>

    <p>
        As submissões selecionadas serão convidadas a apresentar seu trabalho na conferência em uma apresentação final
        (presencial ou virtual). Da mesma forma, todos os estudantes (autores do artigo) devem se inscrever na conferência,
        presencialmente ou virtualmente. As apresentações serão avaliadas por um painel de juízes e devem incluir:
    </p>

    <ul>
        <li>O processo de design seguido</li>
        <li>Uma descrição concisa da solução proposta</li>
        <li>Referência a princípios e teorias de design, quando apropriado</li>
        <li>Reconhecimento de solução parcial ou incompleta</li>
    </ul>

    <p>
        Todas as submissões devem incluir título e informações dos autores, incluindo afiliações. Certifique-se de que as
        submissões não contenham material proprietário ou confidencial e não citem publicações proprietárias ou
        confidenciais.
    </p>

    <p>
        Os artigos aceitos podem escolher uma das seguintes mídias de publicação:
    </p>

    <ul>
        <li>Atas da conferência publicadas no ACM DL. Somente as submissões em inglês podem ser publicadas nessa mídia. Se a
            sua submissão for aceita em espanhol ou português e desejar publicar aqui, você precisará traduzir sua submissão
            original para o inglês.</li>
        <li>Avances en Interacción Humano-Computadora. Somente as submissões em espanhol ou inglês podem ser publicadas
            nessa mídia. Se a sua submissão for aceita em português e desejar publicar aqui, você precisará traduzir sua
            submissão original para o espanhol ou inglês.</li>
    </ul>
    <h3 class="my-4">{{ $t("organizers.student_design_competition_title") }}</h3>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/christian.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/christian.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Christian Sturm
                </template>
                <template #institution>
                    DE
                </template>
                <template #email>
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/iyubanit.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/iyubanit.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Iyubanit Rodriguez
                </template>
                <template #institution>
                    CR
                </template>
                <template #email>
                </template>
            </OrganizerItem>
        </div>

</div></template>