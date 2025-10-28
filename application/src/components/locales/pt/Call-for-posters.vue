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
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-dates'})" class="uline">
                Veja todas as datas importantes
            </RouterLink>            
        </div>
        </li>
    </ol>

    <p>
        Convidamos praticantes, pesquisadores e estudantes a submeter seus trabalhos para a trilha de pôsteres no CLIHC
        2023. Os pôsteres proporcionam uma ótima oportunidade para acadêmicos e praticantes obterem um feedback valioso
        sobre trabalhos em estágio inicial e discutir possíveis colaborações. Os pôsteres devem apresentar trabalhos em
        andamento, resultados preliminares, estudos em pequena escala, novidades científicas e profissionais de última hora
        que mostrem promessa, demonstração de ferramentas técnicas, etc. As contribuições serão exibidas em uma sessão de
        pôsteres durante a conferência CLIHC. Os trabalhos submetidos à trilha de pôsteres podem ser escritos em inglês,
        espanhol ou português e devem ser redigidos na forma de breves artigos de pesquisa autocontidos.
    </p>

    <h3 id="cpt-dates">Datas Importantes (Pôsteres)</h3>
    <ul>
        <li>Submissão dos artigos de pôster: <del>31 de julho</del> 11 de agosto PRORROGADA</li>
        <li>Notificação: 28 de agosto</li>
        <li>Versão final: 14 de setembro</li>
        <li>Evento: 30 a 31 de outubro, 1 de novembro</li>
    </ul>

    <h3>Detalhes da Submissão</h3>

    <P>
        Os autores que desejarem enviar um artigo devem:
    </P>
    <ul>
        <li>
            Submeter um artigo de 4 páginas utilizando o <a href="https://www.acm.org/publications/proceedings-template"
                class="uline">novo formato de artigo mestre da ACM</a>. Os autores podem optar por trabalhar em um dos
            seguintes formatos:
            <ul>
                <li>Microsoft Word</li>
                <li>LaTeX (recomendado)</li>
            </ul>
        </li>
        <li>
            Todos os materiais devem ser enviados eletronicamente para o <a
                href="https://easychair.org/conferences/?conf=clihc2023" class="uline">Sistema de Conferências
                EasyChair</a>, para a trilha de Oficinas e Tutoriais, até a data limite.
        </li>
    </ul>
    <p>
        Sua submissão deve ser um trabalho original. Não pode estar sob revisão simultânea para publicação por outra
        conferência ou periódico, nem ter sido publicada em outro lugar. Por favor, envie referências precisas e completas.
    </p>
    <p>
        Pôsteres aceitos podem escolher uma das seguintes mídias de publicação:
    </p>
    <ul>
        <li>Anais da Conferência publicados no ACM DL. Somente submissões em inglês podem ser publicadas nessa mídia. Se sua
            submissão foi aceita em espanhol ou português e deseja publicar aqui, será necessário traduzir sua submissão
            original para o inglês.</li>
        <li>Avances en Interacción Humano-Computadora. Somente submissões em espanhol ou inglês podem ser publicadas nessa
            mídia. Se sua submissão foi aceita em português e deseja publicar aqui, será necessário traduzir sua submissão
            original para o espanhol ou inglês.</li>
    </ul>

    <h3>Processo de Revisão</h3>
    <p>
        Os artigos serão revisados em sistema de avaliação por pares, com revisão cega, por membros do Subcomitê do Programa
        da Trilha de Pôsteres do CLIHC 2023 (a ser determinado). As submissões serão avaliadas com base em sua
        originalidade, importância da contribuição para o campo, correção técnica e apresentação.
    </p>
    <p>
        Os responsáveis pelos pôsteres enviarão instruções de exposição aos autores dos artigos aceitos.
    </p>

    <h3>Participação</h3>
    <p>
        Um autor de cada submissão aceita deve se inscrever na conferência e apresentar o pôster, com preferência para
        apresentação presencial. No entanto, opções de apresentação virtual podem
    </p>

    <h3 class="my-4">{{ $t("organizers.posters_chairs_title") }}</h3>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/jaime.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/jaime.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Jaime Muñoz Arteaga
                </template>
                <template #institution>
                    Universidad Autónoma de Aguascalientes, MX
                </template>
                <template #email>
                    posters@laihc.org
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/adriana.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/adriana.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Adriana Iñiguez
                </template>
                <template #institution>
                    Universidad de Guadalajara, MX
                </template>
                <template #email>
                    posters@laihc.org
                </template>
            </OrganizerItem>
        </div>
    </div>
</template>