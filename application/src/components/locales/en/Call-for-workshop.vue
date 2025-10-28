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
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-dates'})" class="uline">
                See all important dates
            </RouterLink>            
        </div>
        </li>
    </ol>

    <p>
        CLIHC tutorials and workshops are in-depth presentations of fundamental or state-of-the-art topics presented
        by researchers or practitioners within the field of HCI. The tutorials and workshops empower attendees to
        learn new skills and offer possibilities to meet new people and discuss topics of shared interest. The scope
        for tutorials and workshops is broad and includes topics, such as new technologies, research approaches and
        methodologies, design practices, user/consumer insights, investigations into new
        services/applications/interfaces, statistics, and much more. Virtual or Augmented Reality, wearable
        computing, and generally applications with technology on the go in mind are highly recommended.
    </p>
    <p>
        A tutorial and workshop should focus on its topic in detail and include references to the "must-read" papers
        or materials within its domain. A participatory approach in which the tutorial participants actively engage
        in exercises is welcomed, though not required. The expected audience will vary in terms of prior knowledge,
        but will largely consist of researchers, PhD students, practitioners, and educators. Tutorial and workshop
        proposal submissions by members of the industry are welcomed as well.
    </p>
    <p>
        The overall conference theme in 2023 is Culture and Artificial Intelligence, so we invite tutorials and
        workshop to discuss ethical aspects in their work, as part of their problem definitions, system design,
        experiment design, instrument and metric adoption and conclusions.
    </p>

    <h3 id="cwt-dates">Important Dates</h3>
    <ul>
        <li>Submission deadline: <del>July 31st</del> August 11th EXTENDED</li>
        <li>Notification: August 28th</li>
        <li>Camera ready: September 14th</li>
        <li>Event Oct 30 - 31, Nov 1</li>
    </ul>

    <h3>Submission Platform</h3>

    <p>
        All materials must be submitted electronically to the <a
        href="https://easychair.org/conferences/?conf=clihc2023" class="uline">EasyChair Conference System</a>, to
        the Workshop and Tutorials’ track, by the deadline.
    </p>

    <h3>Submission Format and Length</h3>

    <ul>
        <li>
        Submission format to be used for each category will follow the <a
            href="https://www.acm.org/publications/proceedings-template" class="uline">new ACM Master Article
            format</a>. Authors may
        choose to work in one of the following formats:
        <ul>
            <li>Microsoft Word</li>
            <li>LaTeX (recommended)</li>
        </ul>
        </li>
        <li>
        Maximum 4 pages (excluding references)
        </li>
        <li>
        CLIHC accepts submissions in Spanish, English, and Portuguese but only submissions in English can go to
        ACM DL and only submissions in Spanish and English can go to the AMEXIHC journal.
        </li>
        <li>
        <a href="http://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-pdf-author-guide/"
            class="uline">Guide to Accessible Submissions</a>
        </li>
    </ul>

    <h3>Quick Facts</h3>
    <p>
        CLICH 2023 will be held in person (with hybrid participation) during October 30th-Nov 1st, 2023 in Puebla,
        México. The presentation could be done in person or remotely. At least one author must register for the
        conference, whether virtual or face-to-face.
    </p>

    <h3>Preparing the Submission</h3>
    <p>In your proposal please include:</p>
    <ul>
        <li>The title of the tutorial or workshop</li>
        <li>Length of the tutorial or workshop (recommended at least one hour, three hours maximum)</li>
        <li>Learning goals of the tutorial or workshop</li>
        <li>The intended audience(s) of the tutorial or workshop</li>
        <li>The covered topics and the depths to which you will cover them</li>
        <li>Overview of the materials provided to the participants</li>
        <li>A brief biography of the instructor(s)</li>
        <li>Information on the delivery model of the tutorial (e.g., in presence or hybrid). The physical attendance
        of tutorial/workshop presenter(s) is highly recommended.</li>
    </ul>

    <h3>Selection Process</h3>
    <p>
        The tutorial and workshop will be reviewed by a committee who will decide the final acceptance. Once the
        submission is accepted, it will be the responsibility of the workshop authors to 1) advertise the event
        (workshop or tutorial) via their chosen media (e.g., a website, twitter), 2) manage the process to accept
        submissions and select who participates or not in the event and 3)If it is desirable that the position
        papers be published in the ACM proceedings or the AMEXIHC journal, it will be necessary for the workshop
        authors to propose a program committee
    </p>

    <h3>Anonymity</h3>
    <p>
        Tutorial and workshop submissions are not submitted anonymously, i.e. instructors do not remove their names
        and affiliations from their submission materials.
    </p>

    <h3>Publication</h3>
    <p>
        Accepted tutorial and workshop proposals can choose one of the following publication media:
    </p>

    <ul>
        <li>Conference Proceedings published in ACM DL. Only English submissions can be published in this medium. If
        your submission was accepted in Spanish or Portuguese and wish to publish here, you will have to translate
        your original submission to English. </li>
        <li><a href="http://aihc.amexihc.org/index.php/aihc" class="uline">Avances en Interacción
            Humano-Computadora</a>. Only Spanish or English submissions can be published in this medium. If your
        submission was accepted in Portuguese and wish to publish here, you will have to translate your original
        submission to either Spanish or English.</li>
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
            <div class="colored-shadow"
                style="background-image: url(&quot;./assets/img/people/luciana.png&quot;);">
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
    </div>
</template>