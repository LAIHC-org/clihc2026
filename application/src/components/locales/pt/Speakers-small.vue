<script>
import SpeakerItem from '../../SpeakerItem.vue'
import Tr from '@/i18n/translation'

export default {
    components: {
        SpeakerItem
    },
    setup() {
        return {
            Tr
        }
    }
}
</script>

<template>
    <div class="row mb-4">
        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/roberto.png" alt="" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/roberto.png&quot;);">
                </div>
            </template>
            <template #name>
                Dr. Roberto Martinez-Maldonado
            </template>

            Doutor em Tecnologias da Informação e atua como Professor Sênior em Analítica de Aprendizado e Interação
            Humano-Computador na Universidade de Monash, Austrália. É reconhecido por sua pesquisa pioneira em Inteligência
            Artificial Centrada no Ser Humano na Educação, preside conferências internacionais e é Editor Associado da
            Revista Internacional de Inteligência Artificial em Educação.
        </SpeakerItem>

        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/marisol2.png" alt="" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/marisol2.png&quot;);">
                </div>
            </template>
            <template #name>
                Dr. Marisol Wong-Villacres
            </template>

            Professora Associada no Programa de Ciência da Computação da Escuela Superior Politécnica del Litoral,
            Guayaquil, no Equador, obteve seu doutorado em Computação Centrada no Ser Humano pelo Instituto de Tecnologia da
            Geórgia em 2021. Sua pesquisa se concentra no design de tecnologias baseadas em pontos fortes para grupos
            vulneráveis, afastando-se da abordagem tradicional centrada em necessidades.
        </SpeakerItem>
    </div>
    <div class="row">
        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/claudia.png" alt="" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/claudia.png&quot;);">
                </div>
            </template>
            <template #name>
                Dr. Claudia López Moncada
            </template>

            É acadêmica no Departamento de Informática da UTFSM em Valparaíso, Chile. Também é pesquisadora no Centro
            Nacional de Inteligência Artificial (CENIA) e no Núcleo Milênio de Pesquisa do Futuro da Inteligência Artificial
            (FAIR) no Chile. Com um doutorado pela Universidade de Pittsburgh, seu trabalho se concentra na interação
            humano-computador (HCI) e na inteligência artificial centrada nas pessoas.
        </SpeakerItem>

        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/philippe.png" alt="" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/philippe.png&quot;);">
                </div>
            </template>
            <template #name>
                Dr. Philippe Palanque
            </template>

            Professor de Ciência da Computação na Universidade de Toulouse 3, é especialista em Sistemas de Comando e
            Controle, incluindo drones, interfaces militares multimodais e segurança na aviação. Com extensas contribuições
            à pesquisa, ele é membro da Academia CHI da ACM SIGCHI e preside a Assembleia Técnica da IFIP.
        </SpeakerItem>
</div></template>