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
            <RouterLink :to="Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-dates'})" class="uline">
                See all important dates
            </RouterLink>            
        </div>
        </li>
    </ol> 

    <p>
        CLIHC 2023 is the bi-ennial conference that aims to bring together the Latin American HCI community. The CLIHC 2023 Graduate Colloquium provides an opportunity for Latin American graduate students working in HCI and its related fields to explore and develop their research interests in an interdisciplinary workshop, under the guidance of a panel of prominent researchers.
    </p>
    
    <p>We invite students who feel they would benefit from this kind of feedback on their dissertation/final project work to apply for this unique opportunity to share their research with fellow students in a similar situation as well as senior researchers in the field. Successful applicants will be those who show a clear topic and research approach and have made some progress, but who are not so far along that they can no longer make changes to their plan. In-person attendance is expected for this track.
    </p>
    
    <p>
    In addition to stating how you will benefit from participation, both you and your advisor should be clear on what you can contribute to the Graduate Colloquium. Being accepted into the Colloquium involves a commitment to giving and receiving thoughtful commentary with an eye toward shaping HCI in Latin America and fellow participants in their respective fields.
    </p>

    <h3>Objectives</h3>
    <ul>
        <li>Offer Latin American HCI graduate students the opportunity to share and discuss their work before experienced researchers.</li>
        <li>Provide feedback on students’ current research and guidance on future research directions.</li>
        <li>Offer each student comments and fresh perspectives on their work from researchers and students outside their own institution.</li>
        <li>Promote the development of a supportive community of scholars and a spirit of collaborative research among graduate students across different universities in Latin America.</li>
        <li>Let the community learn about research projects being developed by graduate students.</li>
    </ul>
    
    <h3>During the Graduate Colloquium</h3>
    
    <p>Accepted students will present their work to the group with substantial time allowed for discussion and questions by participating researchers and fellow participants. Detailed instructions will be provided upon acceptance.
    </p>
    
    <p>Each participant should also bring a small version of a poster presenting their work (e.g., using letter-size or A4 paper) for sharing with faculty mentors and other students during the Colloquium sessions. In-person attendance is expected for this track.
    </p>

    <h3>Submissions</h3>

    <P>
        The proposal must have the following four components, all written in English, Portuguese, or Spanish.
    </P>
    <ul>
        <li>
        Extended Abstract: a 4-page (including references) research description covering central aspects of your graduate work. This document must adhere to the latest version of the <a
        href="https://www.acm.org/publications/proceedings-template"
        class="uline"> ACM Primary Article Template </a> format. Key points of this document include:
        <ul>
            <li>Your situation, i.e., the graduate program context in which your work is being conducted (home institution, country, program, year of study, etc).</li>
            <li>Context and motivation that drives your research.</li>
            <li> Research objectives / goals / questions.</li>
            <li>Background/literature review of key work that frames your research.</li>
            <li>Hypothesis/thesis and/or problem statement.</li>
            <li>Followed research approach and methods, including relevant rationale.</li>
            <li>Results to date and their validity.</li>
            <li>Dissertation status and next steps (i.e., what you have done and what you have left to do).</li>
            <li>Current and expected contributions.</li>
        </ul>
        </li>
        
        <li>A one-paragraph statement of expected benefits of participation for both yourself and the other colloquium participants (i.e., what will you contribute as well as gain) (max 1 page).
        </li>
        
        <li>A letter of nomination from your primary dissertation/final project advisor, that addresses the value that the Graduate Colloquium would have for you, what contribution you are likely to make to the event, and why this is a good time for you to participate (max 1 page).
        </li>
        
        <li>A concise version of your current Curriculum Vita, emphasizing academic background, research background, and relevant publications (if any) (1-2 pages).
        </li>
        
        <li>Submit your proposal as a single PDF file through <a
        href="https://easychair.org/conferences/?conf=clihc2023"
        class="uline">
        EasyChair Conference System </a>,
        to the Graduate Colloquim’s track, by the deadline.
        </li> 

    </ul>
    <p>
        Your submission must be original work. It cannot be under concurrent review for publication by another 
        conference or journal nor has been published elsewhere. Please submit accurate and complete references.
    </p>
    <p>
        Accepted proposals can choose one of the following publication media:
    </p>
    <ul>
        <li>Conference Proceedings published in ACM DL. Only English submissions can be published in this medium. If
        your submission was accepted in Spanish or Portuguese and wish to publish here, you will have to translate
        your original submission to English.</li>
        <li>Avances en Interacción Humano-Computadora. Only Spanish or English submissions can be published in this
        medium. If your submission was accepted in Portuguese and wish to publish here, you will have to translate
        your original submission to either Spanish or English.</li>
    </ul>

    <h3>Selection Process</h3>
    <p>
        The review and decision of acceptance will balance many factors. This includes the quality of your proposal and where you are within your graduate program. Candidates who have a clearly developed idea, who are formally considered by their institution to be working on their dissertation or final project, and who still have time to be influenced by participation in the Colloquium will receive the strongest consideration.
    </p>
    <p>
        Over and above an assessment of research quality, the selection process will also consider additional factors. The goal is to identify a set of students that will benefit significantly from the Colloquium and support each other in their growth. As a group, the accepted candidates will exhibit a diversity of backgrounds and topics. Your institution will be taken into account, where we are unlikely to accept more than two students from the same institution and almost certainly will not accept more than one student with the same advisor.
    </p>
    
    <h3 id="cgc-dates">Important Dates (GC)</h3>
    <ul>
        <li>Submission of GC proposals: <del>July 31st</del> August 11th EXTENDED</li>
        <li>Notification: August 28th</li>
        <li>Camera ready: September 11th</li>
        <li>Graduate Colloquium: TBD</li>
    </ul>
    
    
    <h3 class="my-4">{{ $t("organizers.graduate_colloquium_chairs_title") }}</h3>
    <div class="row">
        <div class="col-md-4">
        <OrganizerItem>
            <template #image>
            <div class="d-block blur-shadow-image">
                <img src="/assets/img/people/huizilopoztli.png" alt="" class="img-fluid shadow rounded-3">
            </div>
            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/huizilopoztli.png&quot;);">
            </div>
            </template>
            <template #name>
            Huizilopoztli Luna Garcia
            </template>
            <template #institution>
            UAZ, MX
            </template>
            <template #email>
            </template>
        </OrganizerItem>
        </div>

        <div class="col-md-4">
        <OrganizerItem>
            <template #image>
            <div class="d-block blur-shadow-image">
                <img src="/assets/img/people/carolina.png" alt="" class="img-fluid shadow rounded-3">
            </div>
            <div class="colored-shadow"
                style="background-image: url(&quot;./assets/img/people/carolina.png&quot;);">
            </div>
            </template>
            <template #name>
            Carolina Fuentes
            </template>
            <template #institution>
            Cardiff University, UK
            </template>
            <template #email>
            </template>
        </OrganizerItem>
        </div>
    </div>
</template>