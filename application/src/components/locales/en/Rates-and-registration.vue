<script>
import Tr from '@/i18n/translation'

export default {
    setup() {
        const nonSbcCategories = [
            {
                name: 'High school, technical, and undergraduate students',
                price: 'R$ 140.00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/Estudante%20de%20Ensino%20M%C3%A9dio%2C%20T%C3%A9cnico%20e%20Gradua%C3%A7%C3%A3o'
            },
            {
                name: 'Graduate students',
                price: 'R$ 190.00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/Estudante%20de%20P%C3%B3s-Gradua%C3%A7%C3%A3o'
            },
            {
                name: 'K-12 teachers',
                price: 'R$ 215.00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/Professores%20do%20Ensino%20M%C3%A9dio%20e%20EBTT'
            },
            {
                name: 'Professionals or higher education faculty',
                price: 'R$ 355.00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/Profissionais%20e%20Professores%20do%20Magist%C3%A9rio%20Superior'
            }
        ]

        const sbcCategories = [
            {
                name: 'High school, technical, and undergraduate students',
                price: 'R$ 115.00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/%5BMembro%20SBC%5D%20Estudante%20de%20Ensino%20M%C3%A9dio%2C%20T%C3%A9cnico%20e%20Gradua%C3%A7%C3%A3o'
            },
            {
                name: 'Graduate students',
                price: 'R$ 160.00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/%5BMembro%20SBC%5D%20Estudante%20de%20P%C3%B3s-Gradua%C3%A7%C3%A3o'
            },
            {
                name: 'K-12 teachers',
                price: 'R$ 180.00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/%5BMembro%20SBC%5D%20Professores%20do%20Ensino%20M%C3%A9dio%20e%20EBTT'
            },
            {
                name: 'Professionals or higher education faculty',
                price: 'R$ 300.00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/%5BMembro%20SBC%5D%20Profissionais%20e%20Professores%20do%20Magist%C3%A9rio%20Superior'
            }
        ]

        return { Tr, nonSbcCategories, sbcCategories }
    }
}
</script>

<template>
    <p>
        Weaving experiences across borders, CLIHC'2026 takes place in a distributed
        manner between the venues of Aracaju and Oaxaca. Below you will find all the
        information needed to register at the Brazilian venue and join this journey
        between seas and mangroves:
    </p>

    <ul>
        <li>
            Registrations for CLIHC'2026 in Aracaju are handled exclusively through the
            Vendyno Platform.
        </li>
        <li>Registration fees are in Brazilian Reais (BRL).</li>
        <li>
            International participants may register for the Brazilian venue using an
            international credit card.
        </li>
    </ul>

    <h3 class="mt-5">SBC membership discount rules</h3>

    <p>
        As CLIHC'2026 is supported by the Brazilian Computer Society (SBC), members are
        eligible for a registration discount. To benefit from this discount, you must:
    </p>

    <ol class="list-group list-group-numbered mb-3">
        <li class="list-group-item">
            Register using the specific link for the SBC-linked category;
        </li>
        <li class="list-group-item">
            Send a valid 2026 SBC membership card to
            <a href="mailto:clihc.conf@gmail.com" class="uline">clihc.conf@gmail.com</a>
            within three days after registration. The email subject must begin with:
            <strong>"[Inscrição - CLIHC26]"</strong>.
        </li>
    </ol>

    <div class="alert alert-danger d-flex align-items-start rounded-3 p-3 mb-4 border-0 text-white" role="alert">
        <i class="fas fa-exclamation-triangle me-3 mt-1 fs-5 flex-shrink-0"></i>
        <div>
            <strong>Warning:</strong>
            Member registrations without a valid membership card submitted within three
            days will be cancelled.
        </div>
    </div>

    <h3 class="mt-5">Non-SBC members</h3>

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
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <h3 class="mt-5">SBC members</h3>

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
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <hr class="my-4" />

    <p class="text-center">
        For any questions, please contact us at
        <a href="mailto:clihc.conf@gmail.com" class="uline">clihc.conf@gmail.com</a>.
    </p>
</template>
