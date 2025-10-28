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
            <strong class="text-primary text-gradient">Deadline for submission:</strong> <del>July 3rd EXTENDED</del><strong class="text-danger"> Closed</strong><br>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-papers', hash: '#cpf-dates'})" class="uline">
                See all important dates
            </RouterLink>            
        </div>
        </li>
    </ol>  

    <p>
        The XI Latin American Conference on Human-Computer Interaction (CLIHC 2023), aims to provide a premier forum
        that brings together the Latin American and international Human-Computer Interaction (HCI) research
        communities to discuss and share ideas, methods, approaches, and techniques for designing, implementing, and
        evaluating interactive user experiences. In accordance with previous editions, we believe that HCI must
        foster the production of technology that can be used by and benefit as many people as possible, enabling
        intercultural exchange and cooperation between people with different backgrounds and needs.
    </p>

    <p>
        This year, CLIHC 2023 will take place in Puebla, Mexico and online, is open to submissions in the following
        categories:
    </p>

    <ul>
        <li>Full papers</li>
        <li>Short papers</li>
    </ul>

    <p>
        Authors are invited to prepare and submit articles reporting on research projects, innovative designs, user
        studies, models of interaction, field studies, case studies, and others. Academics, researchers,
        practitioners and professionals from industry, as well as undergraduate and graduate students are welcome to
        participate in the peer-reviewed selection of the works that will be presented at the conference or online,
        from Oct. 30 to Nov 1, 2023.
    </p>

    <p>Topics of submissions may cover all aspects of HCI, including, but not limited to:</p>

    <ol>
        <li>Affective computing</li>
        <li>Brain computer interaction (BCI)</li>
        <li>CSCW and social computing</li>
        <li>Design methods</li>
        <li>Education and HCI</li>
        <li>Embodied interaction</li>
        <li>HCI for development (HCI4D)</li>
        <li>Health and HCI</li>
        <li>Inclusion and accessibility</li>
        <li>Innovative user interfaces</li>
        <li>Interfaces and interaction in games</li>
        <li>Mobile computing</li>
        <li>Perception and visualization</li>
        <li>Human-robot interaction and telepresence</li>
        <li>User experience (UX) and usability</li>
    </ol>

    <h3>Submission and Important Dates</h3>
    <p>
        All manuscripts must be submitted fully anonymized (to anonymize your paper, please consider the <a
        href="https://chi2021.acm.org/for-authors/presenting/papers/chi-anonymization-policy"
        class="uline">guidelines
        provided by CHI</a>). Please consider an international audience: e.g., avoid local terms, and use the
        international system of units. In addition, consider following <a
        href="./accessibility-recommendations-for-authors" class="uline">accessibility guidelines</a>.
    </p>

    <h4 id="cpf-dates">Important Dates (Full and Short Papers)</h4>
    <ul>
        <li>Abstract submission: <del>June 12th</del> <strong class="text-danger">June 26th EXTENDED</strong></li>
        <li>Paper submission: <del>June 19th</del> <strong class="text-danger">July 3rd EXTENDED</strong></li>
        <li>Notification: July 31st</li>
        <li>Camera ready: August 25th</li>
        <li>Event Oct 30 - 31, Nov 1</li>
    </ul>
    <p>Deadlines are at midnight AoE (Anywhere on Earth).</p>

    <h3>Code of Ethics</h3>
    <p>
        We abide by the <a href="https://www.acm.org/code-of-ethics" class="uline">ACM Code of Ethics</a>. We expect
        that all
        submissions, underlying research, and behavior during
        the review process and conference comply with the principles and responsibilities outlined by the code.
    </p>

    <h3>Submission Process</h3>
    <p>
        Full and short paper submissions are to be made through <a
        href="https://easychair.org/conferences/?conf=clihc2023" class="uline">EasyChair Conference System</a>.
    </p>

    <p>
        Submission format to be used for each category will follow the <a
        href="https://www.acm.org/publications/proceedings-template" class="uline">new ACM Master Article
        format</a>. Authors may
        choose to work in one of the following formats:
    </p>

    <ul>
        <li>Microsoft Word</li>
        <li>LaTeX (recommended)</li>
    </ul>

    <h3>Submission Categories</h3>

    <h4>Full Papers (10 Pages)</h4>
    <p>
        Research projects that have achieved a mature stage and present an original contribution to the state of the
        art are welcome to submit in the full paper category. Submissions must be relevant to the subject of the
        conference, and may not have been published nor be under review in any other conference or journal. The
        maximum length for full papers is 10 pages including references, and papers must be written in English,
        Portuguese, or Spanish.
    </p>

    <h4>Short Papers (4 Pages)</h4>
    <p>
        Research projects wishing to report original preliminary, partial, or complementary results may submit their
        papers to the short paper category which has a maximum length of 4 pages including references. Submitted
        papers must be written in English, Portuguese and Spanish. Content must be relevant to the conference, and
        may not have been published nor be in the review process in any other conference or journal.
    </p>

    <p>
        The articles will be reviewed by at least two reviewers in a double-anonymous process. Please note that
        submitted articles must be anonymized, including references to the authors’ own previous work.
    </p>

    <p>
        We are working to ensure that accepted papers will be published in the ACM Digital Library.
        In addition, best papers will be recommended for submitting an extended version and be published in a
        special edition book of the prestigious <a href="https://www.springer.com/series/6033"
        class="uline">Human–Computer Interaction Series</a>, published by Springer and regularly indexed in the
        master book list of the Web of Science.
    </p>

    <h3 class="my-4">{{ $t("organizers.program_chairs_title") }}</h3>
    <div class="row">
        <div class="col-md-4">
        <OrganizerItem>
            <template #image>
            <div class="d-block blur-shadow-image">
                <img src="/assets/img/people/pablo.png" alt="" class="img-fluid shadow rounded-3">
            </div>
            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/pablo.png&quot;);">
            </div>
            </template>
            <template #name>
            Pablo Torres
            </template>
            <template #institution>
            UTPL, EC
            </template>
            <template #email>
            </template>
        </OrganizerItem>
        </div>

        <div class="col-md-4">
        <OrganizerItem>
            <template #image>
            <div class="d-block blur-shadow-image">
                <img src="/assets/img/people/vanessa.png" alt="" class="img-fluid shadow rounded-3">
            </div>
            <div class="colored-shadow"
                style="background-image: url(&quot;./assets/img/people/vanessa.png&quot;);">
            </div>
            </template>
            <template #name>
            Vanessa Agredo Delgado
            </template>
            <template #institution>
            FUNAD, CO
            </template>
            <template #email>
            </template>
        </OrganizerItem>
        </div>

    </div>
</template>