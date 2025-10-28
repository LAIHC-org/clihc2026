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
            <strong class="text-primary text-gradient">Deadline for submission:</strong> <del>July 31st</del> <del>August 11th EXTENDED</del> <strong class="text-danger"> {{ $t("about.closed") }}</strong><br>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-dates'})" class="uline">
                See all important dates
            </RouterLink>            
        </div>
        </li>
    </ol> 

    <p>
        We invite practitioners, researchers, and students to submit their work to the poster track at CLIHC 2023.
        Posters provide a great opportunity for academics and practitioners to get valuable feedback on early-stage
        work and discuss potential collaborations. Posters must present work-in-progress, preliminary results,
        small-scale studies, late-breaking scientific and professional news showing promise, a demonstration of a
        technical tool, etc. Contributions will be exhibited in a poster session during the CLIHC conference. Papers
        submitted to the poster track can be written either in English, Spanish, or Portuguese and must be written
        in the form of self-contained short research papers.
    </p>

    <h3 id="cpt-dates">Important Dates (Posters)</h3>
    <ul>
        <li>Submission of poster papers: <del>July 31st</del> August 11th EXTENDED</li>
        <li>Notification: August 28th</li>
        <li>Camera ready: September 14th</li>
        <li>Event Oct 30 - 31, Nov 1</li>
    </ul>

    <h3>Submission Details</h3>

    <P>
        Authors wishing to submit a paper must:
    </P>
    <ul>
        <li>
        Submit a 4-page paper using the <a href="https://www.acm.org/publications/proceedings-template"
            class="uline">new ACM Master Article format</a>. Authors may choose to work in one of the
        following formats:
        <ul>
            <li>Microsoft Word</li>
            <li>LaTeX (recommended)</li>
        </ul>
        </li>
        <li>
        All materials must be submitted electronically to the <a
            href="https://easychair.org/conferences/?conf=clihc2023" class="uline">EasyChair Conference System</a>,
        to the Workshop and
        Tutorials’ track, by the deadline.
        </li>
    </ul>
    <p>
        Your submission must be original work. It cannot be under concurrent review for publication by another
        conference or journal nor has been published elsewhere. Please submit accurate and complete references.
    </p>
    <p>
        Accepted poster can choose one of the following publication media:
    </p>
    <ul>
        <li>Conference Proceedings published in ACM DL. Only English submissions can be published in this medium. If
        your submission was accepted in Spanish or Portuguese and wish to publish here, you will have to translate
        your original submission to English.</li>
        <li>Avances en Interacción Humano-Computadora. Only Spanish or English submissions can be published in this
        medium. If your submission was accepted in Portuguese and wish to publish here, you will have to translate
        your original submission to either Spanish or English.</li>
    </ul>

    <h3>Review Process</h3>
    <p>
        Papers will be blind peer-reviewed by members of the CLIHC 2023 Poster Track Program Subcommittee (TBD).
        Submissions will be evaluated based on their originality, significance of the contribution to the field,
        technical correctness, and presentation.
    </p>
    <p>
        The Poster chairs will send poster exhibition instructions to the authors of the accepted papers.
    </p>

    <h3>Attendance</h3>
    <p>
        One author of each accepted submission must register for the conference and present the poster, with a
        preference for in-person presentation. However, virtual presentation options may be considered.
    </p>

    <h3 class="my-4">Posters Chairs</h3>
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
            <div class="colored-shadow"
                style="background-image: url(&quot;./assets/img/people/adriana.png&quot;);">
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