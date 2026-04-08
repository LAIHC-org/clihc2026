<script>
import Tr from '@/i18n/translation'

export default {
    setup() {
        const nonSbcCategories = [
            {
                name: 'Estudantes de ensino médio, técnico e de graduação',
                price: 'R$ 140,00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/Estudante%20de%20Ensino%20M%C3%A9dio%2C%20T%C3%A9cnico%20e%20Gradua%C3%A7%C3%A3o'
            },
            {
                name: 'Estudantes de pós-graduação',
                price: 'R$ 190,00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/Estudante%20de%20P%C3%B3s-Gradua%C3%A7%C3%A3o'
            },
            {
                name: 'Professor/a de Educação Básica',
                price: 'R$ 215,00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/Professores%20do%20Ensino%20M%C3%A9dio%20e%20EBTT'
            },
            {
                name: 'Profissional ou Professor/a da Educação Superior',
                price: 'R$ 355,00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/Profissionais%20e%20Professores%20do%20Magist%C3%A9rio%20Superior'
            }
        ]

        const sbcCategories = [
            {
                name: 'Estudantes de ensino médio, técnico e de graduação',
                price: 'R$ 115,00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/%5BMembro%20SBC%5D%20Estudante%20de%20Ensino%20M%C3%A9dio%2C%20T%C3%A9cnico%20e%20Gradua%C3%A7%C3%A3o'
            },
            {
                name: 'Estudantes de pós-graduação',
                price: 'R$ 160,00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/%5BMembro%20SBC%5D%20Estudante%20de%20P%C3%B3s-Gradua%C3%A7%C3%A3o'
            },
            {
                name: 'Professor/a de Educação Básica',
                price: 'R$ 180,00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/%5BMembro%20SBC%5D%20Professores%20do%20Ensino%20M%C3%A9dio%20e%20EBTT'
            },
            {
                name: 'Profissional ou Professor/a do Magistério Superior',
                price: 'R$ 300,00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/%5BMembro%20SBC%5D%20Profissionais%20e%20Professores%20do%20Magist%C3%A9rio%20Superior'
            }
        ]

        return { Tr, nonSbcCategories, sbcCategories }
    }
}
</script>

<template>
    <p>
        Tecendo experiências entre fronteiras, o CLIHC'2026 acontece de forma distribuída
        entre as sedes de Aracaju e Oaxaca. Confira abaixo as informações necessárias
        para realizar sua inscrição na sede brasileira e participar desta jornada entre
        mares e mangues:
    </p>

    <ul>
        <li>
            As inscrições no CLIHC'2026 em Aracaju serão feitas exclusivamente pela
            Plataforma Vendyno.
        </li>
        <li>Os valores das inscrições são em Reais Brasileiros (BRL).</li>
        <li>
            Participantes estrangeiros podem efetuar suas inscrições para a sede
            brasileira por meio do cartão de crédito internacional.
        </li>
    </ul>

    <h3 class="mt-5">Regras de desconto SBC</h3>

    <p>
        Como o CLIHC'2026 é um evento apoiado pela Sociedade Brasileira de Computação
        (SBC), pessoas associadas possuem desconto na inscrição. Para gozar desse desconto
        é preciso:
    </p>

    <ol class="list-group list-group-numbered mb-3">
        <li class="list-group-item">
            Fazer a inscrição usando o link específico para a categoria vinculada à SBC;
        </li>
        <li class="list-group-item">
            Enviar carteira de sócia da SBC válida em 2026 para o e-mail
            <a href="mailto:clihc.conf@gmail.com" class="uline">clihc.conf@gmail.com</a>
            em até três dias após a inscrição. O assunto do e-mail deve iniciar com:
            <strong>"[Inscrição - CLIHC26]"</strong>.
        </li>
    </ol>

    <div class="alert alert-danger d-flex align-items-start rounded-3 p-3 mb-4 border-0 text-white" role="alert">
        <i class="fas fa-exclamation-triangle me-3 mt-1 fs-5 flex-shrink-0"></i>
        <div>
            <strong>Atenção:</strong>
            Inscrições para sócias sem o envio da carteira válida em até três dias serão
            canceladas.
        </div>
    </div>

    <h3 class="mt-5">Não sócias da SBC</h3>

    <div class="row g-4 mt-1">
        <div
            v-for="(cat, index) in nonSbcCategories"
            :key="'non-sbc-' + index"
            class="col-md-6 col-lg-3"
        >
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center d-flex flex-column">
                    <h6 class="card-title fw-bold text-dark">{{ cat.name }}</h6>
                    <div class="mt-auto pt-3">
                        <p class="fs-3 fw-bold text-primary text-gradient mb-3">
                            {{ cat.price }}
                        </p>
                        <a
                            :href="cat.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn bg-gradient-yellow btn-round w-100"
                        >
                            Inscreva-se
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <h3 class="mt-5">Sócias da SBC</h3>

    <div class="row g-4 mt-1 mb-5">
        <div
            v-for="(cat, index) in sbcCategories"
            :key="'sbc-' + index"
            class="col-md-6 col-lg-3"
        >
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center d-flex flex-column">
                    <h6 class="card-title fw-bold text-dark">{{ cat.name }}</h6>
                    <div class="mt-auto pt-3">
                        <p class="fs-3 fw-bold text-primary text-gradient mb-3">
                            {{ cat.price }}
                        </p>
                        <a
                            :href="cat.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn bg-gradient-yellow btn-round w-100"
                        >
                            Inscreva-se
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <hr class="my-4" />

    <p class="text-center">
        Quaisquer dúvidas podem entrar em contato por meio do e-mail
        <a href="mailto:clihc.conf@gmail.com" class="uline">clihc.conf@gmail.com</a>.
    </p>
</template>
