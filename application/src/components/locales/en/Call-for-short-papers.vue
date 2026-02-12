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
                <strong class="text-primary text-gradient">Abstract submission:</strong>
                <strong class="text-danger"> March 2, 2026</strong><br />
                <strong class="text-primary text-gradient">Paper submission:</strong>
                <strong class="text-danger"> March 9, 2026</strong><br />
                <RouterLink
                    :to="Tr.i18nRoute({ name: 'call-for-short-papers', hash: '#csp-dates' })"
                    class="uline"
                >
                    See all important dates
                </RouterLink>
            </div>
        </li>
    </ol>

    <p id="csp-call">
        Call for Short Papers
    </p>

    <h3>Presentation</h3>
    <p>
        The Latin American Conference on Human-Computer Interaction (CLIHC 2026) invites submissions for Short Papers
        presenting original and unpublished research contributions in all areas of Human-Computer Interaction (HCI).
        Short Papers provide an opportunity to report promising early-stage research, innovative ideas, methodological
        contributions, design explorations, or partial results that are of clear relevance to the HCI community.
    </p>
    <p>
        This year, CLIHC 2026 will take place in two cities, Aracaju/Brazil and Oaxaca/Mexico. Short Paper presentations
        will take place in both venues in Brazil and Mexico.
    </p>
    <p>
        CLIHC is the main forum for the dissemination of HCI research in Latin America and welcomes contributions that
        reflect the diversity, creativity, and social relevance of HCI research in the region and beyond.
    </p>

    <h3>Scope and Topics of Interest</h3>
    <p>
        The Short Papers track at CLIHC 2026 follows the same thematic scope as the Full Papers track and welcomes
        contributions addressing any topic within the broad field of Human-Computer Interaction (HCI). Short Papers are
        particularly suitable for emerging ideas, early-stage research, novel design explorations, or focused methodological
        contributions that may not yet warrant a full-length paper but are of clear interest to the HCI community.
    </p>
    <p>Topics of interest explicitly include, but are not limited to:</p>
    <ul>
        <li>Brain–Computer Interaction (BCI)</li>
        <li>Computer-Supported Cooperative Work (CSCW) and Social Computing</li>
        <li>Design Methods</li>
        <li>Education and HCI</li>
        <li>HCI for Development (HCI4D)</li>
        <li>Health and HCI</li>
        <li>HCI and Artificial Intelligence</li>
        <li>Inclusion and Accessibility</li>
        <li>Innovative User Interfaces</li>
        <li>Interaction Evaluation</li>
        <li>Games and Interaction</li>
        <li>Mobile Computing</li>
        <li>Visualization and Perception</li>
        <li>Human–Robot Interaction and Telepresence</li>
        <li>User Experience (UX) and Usability</li>
        <li>Intellectual Property and HCI</li>
    </ul>
    <p>
        Interdisciplinary, applied, and context-sensitive contributions—particularly those reflecting Latin American
        perspectives—are strongly encouraged.
    </p>

    <h3>Submission Format and Length</h3>
    <p>Short Paper submissions must adhere to the following guidelines:</p>
    <ul>
        <li>Maximum length: five (5) pages, including references</li>
        <li>Accepted languages: English, Portuguese, or Spanish</li>
        <li>Formatting: submissions must follow the Brazilian Computer Society (SBC) template</li>
        <li>Microsoft Word or LaTeX (recommended)</li>
        <li>Overleaf</li>
        <li>All submissions must be submitted in PDF format</li>
    </ul>

    <h3>Anonymity and Accessibility</h3>
    <p>Short Papers must be fully anonymized for double-blind review:</p>
    <ul>
        <li>Authors must remove names and affiliations from the manuscript</li>
        <li>Self-references must be omitted or anonymized</li>
        <li>
            Avoid overly local or institution-specific terminology; submissions should be written for an international
            audience
        </li>
        <li>
            Authors are strongly encouraged to follow the CLIHC 2023 Accessibility Guidelines, ensuring that submissions
            are accessible to reviewers and readers
        </li>
    </ul>

    <h3>Submission System</h3>
    <p>
        All Short Paper submissions must be made through the JEMS3 – Journal and Event Management System:
        <a href="https://jems3.sbc.org.br/events/510" class="uline">https://jems3.sbc.org.br/events/510</a>
    </p>

    <h3 id="csp-dates">Important Dates</h3>
    <p>All deadlines are Anywhere on Earth (AoE), 23:59hrs.</p>
    <ul>
        <li>Abstract submission deadline: March 2, 2026</li>
        <li>Paper submission deadline: <strong class="text-danger">March 9, 2026</strong></li>
        <li>Notification of acceptance: March 30, 2026</li>
        <li>Camera-ready deadline: April 12, 2026</li>
        <li>Conference dates: May 6–8, 2026</li>
    </ul>

    <h3>Review Process</h3>
    <p>
        The review process for Short Papers mirrors that of Full Papers and is designed to ensure fairness, rigor,
        and constructive feedback. Each Short Paper will be reviewed by at least two members of the Program Committee
        under a double-blind peer review process. Submissions will be evaluated according to the following criteria:
    </p>
    <ul>
        <li>Relevance to Human-Computer Interaction and to CLIHC</li>
        <li>Clarity of the research problem, design challenge, or contribution</li>
        <li>Originality and potential impact</li>
        <li>Methodological adequacy relative to the stage of the work</li>
        <li>Quality of writing, structure, and argumentation</li>
    </ul>
    <p>
        While Short Papers are not expected to report complete or finalized results, they must demonstrate sound
        methodology, clear positioning within related work, and a well-articulated potential contribution to the HCI field.
    </p>

    <h3>Why Submit a Short Paper?</h3>
    <p>The Short Papers track offers an excellent opportunity for:</p>
    <ul>
        <li>Presenting early-stage or ongoing research and receiving feedback from the HCI community</li>
        <li>Sharing novel ideas, design concepts, or methodological approaches that are not yet fully mature</li>
        <li>Reporting partial results, pilot studies, or exploratory findings</li>
        <li>Engaging graduate students and early-career researchers in an international academic venue</li>
        <li>Fostering discussion around emerging topics and regional challenges in HCI</li>
    </ul>
    <p>
        Short Papers are an integral part of CLIHC, promoting dialogue, visibility, and collaboration across diverse
        research traditions.
    </p>

    <h3>Publication and Presentation</h3>
    <p>
        Accepted Short Papers will be included in the conference proceedings and presented at CLIHC 2026. At least one
        author of each accepted paper must register for the conference and present the work.
    </p>

    <p>We look forward to your contributions and to welcoming you to CLIHC 2026.</p>

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
