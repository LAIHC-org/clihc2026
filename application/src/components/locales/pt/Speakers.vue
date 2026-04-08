<script setup>
import SpeakerLargeItem from "@/components/SpeakerLargeItem.vue";
</script>

<template>
    <SpeakerLargeItem>
        <template #image>
            <img
                id="ann-blandford"
                class="img border-radius-lg w-100 position-relative z-index-2"
                src="/assets/img/people/annBlandford.png"
                alt="Ann Blandford"
            />
        </template>
        <template #image-shadow>
            <div
                class="colored-shadow"
                style="background-image: url('/assets/img/people/annBlandford.png')"
            ></div>
        </template>
        <template #name> Dra. Ann Blandford </template>
        <template #subtitle> ACM Distinguished Speaker Program </template>

        <p>
            É Professora de Interação Humano-Computador na University College London
            (UCL). É especialista em fatores humanos para tecnologias de saúde digital.
            Liderou projetos nacionais sobre o design de dispositivos médicos
            interativos para usabilidade e segurança, e colaborou com clínicos,
            engenheiros e parceiros da indústria no design e na avaliação de
            tecnologias de saúde interativas para uso por clínicos, pacientes e no
            apoio ao cuidado compartilhado. É Fellow da British Computer Society e
            membro do UK Computing Research Committee. É recipients do prêmio IFIP
            TC13 Pioneer e membra da ACM CHI Academy.
        </p>
    </SpeakerLargeItem>

    <SpeakerLargeItem>
        <template #image>
            <img
                id="luciana-zaina"
                class="img border-radius-lg w-100 position-relative z-index-2"
                src="/assets/img/people/lucianaZaina.png"
                alt="Luciana Zaina"
            />
        </template>
        <template #image-shadow>
            <div
                class="colored-shadow"
                style="background-image: url('/assets/img/people/lucianaZaina.png')"
            ></div>
        </template>
        <template #name> Dra. Luciana Zaina </template>
        <template #subtitle> Professora Titular na UFSCar, Brasil · CNPq Fellow DT-2 </template>

        <p>
            É Professora Titular no Departamento de Computação da Universidade Federal de
            São Carlos, Brasil. Sua expertise está no design de UX e em estudos empíricos
            tanto em Interação Humano-Computador quanto em Engenharia de Software. Atuou
            como pesquisadora principal em projetos de Pesquisa, Desenvolvimento e
            Inovação financiados por agências brasileiras (FAPESP, CNPq e FUNDEP), bem
            como por empresas brasileiras de software. Foi destaque em uma entrevista
            sobre o futuro do Agile UX na indústria, publicada em
            <em>Interaction Design: Beyond Human–Computer Interaction</em> (2023), um dos
            livros de IHC mais amplamente adotados na academia e na prática profissional.
            Seus interesses atuais de pesquisa incluem o design e a avaliação da
            experiência do usuário, a experiência do usuário em sistemas complexos e a
            experiência do usuário de longo prazo, desenvolvidos em estreita colaboração
            com a indústria no Brasil. Desde 2020, é reconhecida como CNPq Fellow (DT-2),
            uma distinção concedida a pesquisadoras e pesquisadores brasileiros
            reconhecidos como líderes de destaque no desenvolvimento de pesquisa aplicada
            orientada à indústria.
        </p>
    </SpeakerLargeItem>

    <SpeakerLargeItem>
        <template #image>
            <img
                id="pedro-reynolds"
                class="img border-radius-lg w-100 position-relative z-index-2"
                src="/assets/img/people/pedroReynolds.png"
                alt="Pedro Reynolds-Cuéllar"
            />
        </template>
        <template #image-shadow>
            <div
                class="colored-shadow"
                style="background-image: url('/assets/img/people/pedroReynolds.png')"
            ></div>
        </template>
        <template #name> Dr. Pedro Reynolds-Cuéllar </template>
        <template #subtitle> Pesquisador Científico no Robotics and AI Institute (RAI) </template>

        <p>
            É Pesquisador Científico no Robotics and AI Institute (RAI), onde desenvolve
            pesquisas que fornecem dados para apoiar decisões sociais baseadas em
            evidências sobre o design, a integração e a regulamentação da robótica e da
            inteligência artificial. Possui Bacharelado em Ciências em Linguística pela
            Universidade Nacional da Colômbia e Mestrado em Ciências pelo grupo Personal
            Robots do MIT Media Lab. Concluiu seu doutorado de forma conjunta nos
            departamentos de Arts, Culture & Technology e Media Arts and Sciences do MIT
            Media Lab. Também é cofundador da Diversa, um coletivo e organização de design
            focados no apoio a iniciativas de tecnologia rural na Colômbia.
        </p>
    </SpeakerLargeItem>
</template>
