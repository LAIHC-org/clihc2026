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
                <strong class="text-primary text-gradient">Submissão de resumos:</strong>
                <strong class="text-danger"> 9 de março, 2026</strong><br />
                <strong class="text-primary text-gradient">Submissão de artigos:</strong>
                <strong class="text-danger"> 9 de março, 2026</strong><br />
                <RouterLink
                    :to="Tr.i18nRoute({ name: 'call-for-short-papers', hash: '#csp-dates' })"
                    class="uline"
                >
                    Veja todas as datas importantes
                </RouterLink>
            </div>
        </li>
    </ol>

    <p id="csp-call">
        Chamada de Artigos Curtos
    </p>

    <h3>Apresentação</h3>
    <p>
        A Conferência Latino-Americana de Interação Humano-Computador (CLIHC 2026) convida submissões de Artigos Curtos
        com contribuições originais e inéditas em todas as áreas de Interação Humano-Computador (IHC). Artigos Curtos
        oferecem a oportunidade de relatar pesquisas em estágio inicial promissoras, ideias inovadoras, contribuições
        metodológicas, explorações de design ou resultados parciais claramente relevantes para a comunidade de IHC.
    </p>
    <p>
        Este ano, a CLIHC 2026 ocorrerá em duas cidades, Aracaju/Brasil e Oaxaca/México. As apresentações de Artigos
        Curtos acontecerão em ambas as sedes no Brasil e no México.
    </p>
    <p>
        A CLIHC é o principal fórum de disseminação de pesquisa em IHC na América Latina e acolhe contribuições que
        refletem a diversidade, criatividade e relevância social da pesquisa na região e além.
    </p>

    <h3>Escopo e temas de interesse</h3>
    <p>
        A trilha de Artigos Curtos da CLIHC 2026 segue o mesmo escopo temático da trilha de Artigos Completos e
        recebe contribuições sobre qualquer tópico dentro do amplo campo da Interação Humano-Computador (IHC).
        Artigos Curtos são especialmente adequados para ideias emergentes, pesquisas em estágio inicial, explorações
        de design inovadoras ou contribuições metodológicas focadas que ainda não justificam um artigo completo, mas
        são de claro interesse para a comunidade de IHC.
    </p>
    <p>Os temas de interesse incluem, mas não se limitam a:</p>
    <ul>
        <li>Interação Cérebro–Computador (BCI)</li>
        <li>Trabalho Cooperativo Apoiado por Computador (CSCW) e Computação Social</li>
        <li>Métodos de Design</li>
        <li>Educação e IHC</li>
        <li>IHC para Desenvolvimento (HCI4D)</li>
        <li>Saúde e IHC</li>
        <li>IHC e Inteligência Artificial</li>
        <li>Inclusão e Acessibilidade</li>
        <li>Interfaces de Usuário Inovadoras</li>
        <li>Avaliação da Interação</li>
        <li>Jogos e Interação</li>
        <li>Computação Móvel</li>
        <li>Visualização e Percepção</li>
        <li>Interação Humano–Robô e Telepresença</li>
        <li>Experiência do Usuário (UX) e Usabilidade</li>
        <li>Propriedade Intelectual e IHC</li>
    </ul>
    <p>
        Contribuições interdisciplinares, aplicadas e sensíveis ao contexto—particularmente aquelas que refletem
        perspectivas latino-americanas—são fortemente encorajadas.
    </p>

    <h3>Formato e extensão</h3>
    <p>As submissões de Artigos Curtos devem seguir as diretrizes abaixo:</p>
    <ul>
        <li>Extensão máxima: cinco (5) páginas, incluindo referências</li>
        <li>Idiomas aceitos: inglês, português ou espanhol</li>
        <li>Formatação: as submissões devem seguir o template da Sociedade Brasileira de Computação (SBC)</li>
        <li>Microsoft Word ou LaTeX (recomendado)</li>
        <li>Overleaf</li>
        <li>Todas as submissões devem ser em formato PDF</li>
    </ul>

    <h3>Anonimato e acessibilidade</h3>
    <p>Artigos Curtos devem estar totalmente anonimizados para revisão duplo-cega:</p>
    <ul>
        <li>Os autores devem remover nomes e afiliações do manuscrito</li>
        <li>Auto-referências devem ser omitidas ou anonimizadas</li>
        <li>Evitar terminologia excessivamente local ou específica de instituições; as submissões devem ser voltadas a um público internacional</li>
        <li>
            Recomenda-se fortemente seguir as Diretrizes de Acessibilidade da CLIHC 2023, garantindo que as submissões
            sejam acessíveis a revisores e leitores
        </li>
    </ul>

    <h3>Sistema de submissão</h3>
    <p>
        Todas as submissões de Artigos Curtos devem ser feitas pelo JEMS3 – Journal and Event Management System:
        <a href="https://jems3.sbc.org.br/events/535" class="uline">https://jems3.sbc.org.br/events/535</a>
    </p>

    <h3 id="csp-dates">Datas importantes</h3>
    <p>Todos os prazos são Anywhere on Earth (AoE), 23:59 hrs.</p>
    <ul>
        <li>Prazo para envio de resumos: 9 de março, 2026</li>
        <li>Prazo para envio de artigos: <strong class="text-danger">9 de março, 2026</strong></li>
        <li>Notificação de aceitação: 30 de março, 2026</li>
        <li>Prazo para versão final (camera ready): 12 de abril, 2026</li>
        <li>Datas da conferência: 6–8 de maio, 2026</li>
    </ul>

    <h3>Processo de avaliação</h3>
    <p>
        O processo de avaliação de Artigos Curtos espelha o de Artigos Completos e é projetado para garantir justiça,
        rigor e feedback construtivo. Cada Artigo Curto será avaliado por pelo menos dois membros do Comitê de Programa
        em um processo de revisão duplo-cego. As submissões serão avaliadas segundo os seguintes critérios:
    </p>
    <ul>
        <li>Relevância para Interação Humano-Computador e para a CLIHC</li>
        <li>Clareza do problema de pesquisa, desafio de design ou contribuição</li>
        <li>Originalidade e impacto potencial</li>
        <li>Adequação metodológica em relação ao estágio do trabalho</li>
        <li>Qualidade da escrita, estrutura e argumentação</li>
    </ul>
    <p>
        Embora não se espere que Artigos Curtos apresentem resultados completos ou finais, eles devem demonstrar uma
        metodologia sólida, posicionamento claro em relação ao trabalho relacionado e uma contribuição potencial bem articulada
        para o campo de IHC.
    </p>

    <h3>Por que submeter um Artigo Curto?</h3>
    <p>A trilha de Artigos Curtos oferece uma excelente oportunidade para:</p>
    <ul>
        <li>Apresentar pesquisas em estágio inicial ou em andamento e receber feedback da comunidade de IHC</li>
        <li>Compartilhar ideias novas, conceitos de design ou abordagens metodológicas que ainda não estão totalmente maduras</li>
        <li>Reportar resultados parciais, estudos piloto ou achados exploratórios</li>
        <li>Engajar estudantes de pós-graduação e pesquisadores em início de carreira em um espaço acadêmico internacional</li>
        <li>Fomentar a discussão sobre temas emergentes e desafios regionais em IHC</li>
    </ul>
    <p>
        Artigos Curtos são parte integrante da CLIHC, promovendo diálogo, visibilidade e colaboração entre diversas
        tradições de pesquisa.
    </p>

    <h3>Publicação e apresentação</h3>
    <p>
        Artigos Curtos aceitos serão incluídos nos anais da conferência e apresentados na CLIHC 2026. Pelo menos um
        autor de cada artigo aceito deve se registrar na conferência e apresentar o trabalho.
    </p>

    <p>Esperamos suas contribuições e desejamos recebê-los na CLIHC 2026.</p>

    <h3 class="my-4">{{ $t("organizers.short_papers_cahirs_title") }}</h3>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img
                            src="/assets/img/people/valeria.jpg"
                            alt="Valeria"
                            class="img-fluid shadow rounded-3"
                        />
                    </div>
                    <div
                        class="colored-shadow"
                        style="background-image: url('/assets/img/people/valeria.jpg')"
                    ></div>
                </template>
                <template #name> Dra. Valéria Argôlo Rosa de Queiroz </template>
                <template #institution>
                    Universidade Estadual do Sudoeste da Bahia (UESB), BR
                </template>
                <template #email> </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img
                            src="/assets/img/people/marioMoreno.png"
                            alt="Mario Moreno"
                            class="img-fluid shadow rounded-3"
                        />
                    </div>
                    <div
                        class="colored-shadow"
                        style="background-image: url('/assets/img/people/marioMoreno.png')"
                    ></div>
                </template>
                <template #name> Dr. Mario A. Moreno Rocha </template>
                <template #institution>
                    Universidad Tecnológica de la Mixteca (UTM), MX
                </template>
                <template #email> </template>
            </OrganizerItem>
        </div>
    </div>
</template>
