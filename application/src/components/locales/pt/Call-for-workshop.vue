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
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-dates'})" class="uline">
                Veja todas as datas importantes
            </RouterLink>            
        </div>
        </li>
    </ol>

    <p>
        Os tutoriais e workshops do CLIHC são apresentações aprofundadas de tópicos fundamentais ou de ponta apresentados
        por pesquisadores ou praticantes no campo de IHC. Os tutoriais e workshops capacitam os participantes a aprender
        novas habilidades e oferecem possibilidades de conhecer novas pessoas e discutir tópicos de interesse comum. O
        escopo para tutoriais e workshops é amplo e inclui tópicos como novas tecnologias, abordagens e metodologias de
        pesquisa, práticas de design, insights de usuários/consumidores, investigações em novos
        serviços/aplicações/interfaces, estatísticas e muito mais. Realidade Virtual ou Aumentada, computação vestível e, de
        forma geral, aplicações com tecnologia em movimento são altamente recomendadas.
    </p>
    <p>
        Um tutorial ou workshop deve focar em seu tópico em detalhes e incluir referências para os artigos ou materiais
        "obrigatórios" dentro de seu domínio. Abordagens participativas, nas quais os participantes do tutorial se envolvem
        ativamente em exercícios, são bem-vindas, mas não obrigatórias. O público esperado terá variação em termos de
        conhecimento prévio, mas consistirá principalmente de pesquisadores, estudantes de doutorado, praticantes e
        educadores. Submissões de propostas de tutoriais e workshops por membros da indústria também são bem-vindas.
    </p>
    <p>
        O tema geral da conferência em 2023 é Cultura e Inteligência Artificial, portanto, convidamos tutoriais e workshops
        a discutirem aspectos éticos em seus trabalhos, como parte das definições de problemas, design de sistemas, design
        de experimentos, adoção de instrumentos e métricas e conclusões.
    </p>

    <h3 id="cwt-dates">Datas Importantes</h3>
    <ul>
        <li>Prazo de submissão: <del>31 de julho</del> 11 de agosto PRORROGADA</li>
        <li>Notificação: 28 de agosto</li>
        <li>Versão final: 14 de setembro</li>
        <li>Evento: 30 a 31 de outubro, 1 de novembro</li>
    </ul>

    <h3>Plataforma de Submissão</h3>

    <p>
        Todos os materiais devem ser submetidos eletronicamente para o <a
            href="https://easychair.org/conferences/?conf=clihc2023" class="uline">Sistema de Conferências EasyChair</a>, na
        trilha de Workshops e Tutoriais, até a data limite.
    </p>

    <h3>Formato e Extensão da Submissão</h3>

    <ul>
        <li>
            O formato de submissão a ser utilizado para cada categoria seguirá o <a
                href="https://www.acm.org/publications/proceedings-template" class="uline">novo formato de Artigo Mestre da
                ACM</a>. Os autores podem optar por trabalhar em um dos seguintes formatos:
            <ul>
                <li>Microsoft Word</li>
                <li>LaTeX (recomendado)</li>
            </ul>
        </li>
        <li>
            Máximo de 4 páginas (excluindo referências)
        </li>
        <li>
            O CLIHC aceita submissões em espanhol, inglês e português, mas somente as submissões em inglês podem ser
            publicadas no ACM DL e somente as submissões em espanhol e inglês podem ser publicadas na revista AMEXIHC.
        </li>
        <li>
            <a href="http://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-pdf-author-guide/"
                class="uline">Guia para Submissões Acessíveis</a>
        </li>
    </ul>

    <h3>Informações Rápidas</h3>
    <p>
        O CLIHC 2023 será realizado presencialmente (com participação híbrida) de 30 de outubro a 1 de novembro de 2023 em
        Puebla, México. A apresentação pode ser feita presencialmente ou remotamente. Pelo menos um autor deve se registrar
        para a conferência, seja virtualmente ou presencialmente.
    </p>

    <h3>Preparando a Submissão</h3>
    <p>Em sua proposta, inclua:</p>
    <ul>
        <li>O título do tutorial ou workshop</li>
        <li>Duração recomendada do tutorial ou workshop (pelo menos uma hora, no máximo três horas)</li>
        <li>Objetivos de aprendizagem do tutorial ou workshop</li>
        <li>Público-alvo do tutorial ou workshop</li>
        <li>Os tópicos abordados e a profundidade com que serão abordados</li>
        <li>Visão geral dos materiais fornecidos aos participantes</li>
        <li>Breve biografia do(s) instrutor(es)</li>
        <li>Informações sobre o modelo de entrega do tutorial (por exemplo, presencial ou híbrido). A presença física do(s)
            apresentador(es) do tutorial/workshop é altamente recomendada.</li>
    </ul>

    <h3>Processo de Seleção</h3>
    <p>
        O tutorial e o workshop serão revisados por um comitê que decidirá a aceitação final. Após a aceitação da submissão,
        caberá aos autores do workshop 1) divulgar o evento (workshop ou tutorial) por meio de sua mídia escolhida (por
        exemplo, um site, Twitter), 2) gerenciar o processo de aceitação de submissões e seleção dos participantes e 3) se
        for desejável que os artigos de posição sejam publicados nos anais da ACM ou na revista AMEXIHC, será necessário que
        os autores do workshop proponham um comitê de programa.
    </p>

    <h3>Anonimato</h3>
    <p>
        As submissões de tutoriais e workshops não são anônimas, ou seja, os instrutores não removem seus nomes e afiliações
        dos materiais de submissão.
    </p>

    <h3>Publicação</h3>
    <p>
        As propostas de tutoriais e workshops aceitas podem escolher uma das seguintes mídias de publicação:
    </p>

    <ul>
        <li>Anais da Conferência publicados no ACM DL. Somente submissões em inglês podem ser publicadas nesta mídia. Se sua
            submissão foi aceita em espanhol ou português e deseja publicar aqui, será necessário traduzir sua submissão
            original para o inglês. </li>
        <li><a href="http://aihc.amexihc.org/index.php/aihc" class="uline">Avances en Interacción Humano-Computadora</a>.
                Somente submissões em espanhol ou inglês podem ser publicadas nesta mídia. Se sua submissão foi aceita em
                português e deseja publicar aqui, será necessário traduzir sua submissão original para o espanhol ou inglês.
        </li>
    </ul>

    <h3 class="my-4">{{ $t("organizers.workshops_and_tutorials_chairs_title") }}</h3>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/cesar.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/cesar.png&quot;);">
                    </div>
                </template>
                <template #name>
                    César Collazos
                </template>
                <template #institution>
                    U. Cauca, CO
                </template>
                <template #email>
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/luciana.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/luciana.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Luciana Sá Brito
                </template>
                <template #institution>
                    Universidade Federal do Rio de Janeiro, Brasil
                </template>
                <template #email>
                </template>
            </OrganizerItem>
        </div>
</div></template>