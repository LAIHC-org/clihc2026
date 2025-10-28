<script>
import Tr from '@/i18n/translation'

export default {
    setup() {
        return { Tr }
    }
}
</script>

<template>
    <ol class="list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#monday' })" class="uline">
                        Monday, October 30th, 2023
                    </RouterLink>
                </div>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#tuesday' })" class="uline">
                        Tuesday, October 31st, 2023
                    </RouterLink>
                </div>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#wednesday' })" class="uline">
                        Wednesday, November 1st, 2023
                    </RouterLink>
                </div>
            </div>
        </li>
    </ol>
    
    <h2 id="monday" class="text-primary text-gradient text-center py-4">Monday, October 30th, 2023</h2>

    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Time (CST)</th>
                <th scope="col" colspan="2">Event</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="col" colspan="3" class="text-center text-primary text-gradient">Local: Edificio Carolino, Centro</th>
            </tr>            
            <tr>
                <th scope="row">09:00 - 09:30 hrs</th>
                <td colspan="2">
                    <div>
                        Registration + Cultural Presentation (Musicians)
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">09:30 - 10:00 hrs</th>
                <td colspan="2">
                    <div>
                        Inauguration
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">10:00 - 11:00 hrs</th>
                <td colspan="2">
                    <p>
                        Keynote by <strong>Claudia Lopez</strong> "Towards inter-disciplinary approaches to re-imagine AI"<br>
                        <strong>Federico Santa María Technical University (UTFSM), Chile</strong>
                    </p>
                    <!--
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#claudiaLopez"
                        role="button" aria-expanded="false" aria-controls="claudiaLopez">Abstract</a>
                    <div class="collapse" id="claudiaLopez">
                        <div class="card card-body">
                            <p>
                                Abstract
                            </p>
                        </div>
                    </div>
                    -->
                </td>
            </tr>
            <tr>
                <th scope="row">11:00 - 11:30 hrs</th>
                <td colspan="2">
                    <div>
                        Coffee Break
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">11:00 - 12:30 hrs</th>
                <td colspan="2">
                    <p>
                        Keynote by <strong>Phillipe Palanque </strong> "Past, Present and Future in Modeling User Tasks"<br>
                        <strong>University of Toulouse 3, France</strong>
                    </p>
                    <!--
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#phillipePalenque"
                        role="button" aria-expanded="false" aria-controls="phillipePalenque">Abstract</a>
                    <div class="collapse" id="phillipePalenque">
                        <div class="card card-body">
                            <p>
                                Abstract
                            </p>
                        </div>
                    </div>
                    -->
                </td>
            </tr>
            <tr>
                <th scope="row">12:30 - 13:30 hrs</th>
                <td colspan="2">
                    <div>
                        Carolino Tour
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">13:30 - 14:00 hrs</th>
                <td colspan="2">
                    <div>
                        Lunch Break
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">15:00 - 18:00 hrs</th>
                <td>
                    <strong class="text-center text-primary text-gradient">Local: DCyTIC 2, BUAP</strong><br>
                    <strong>Workshops & Tutorials</strong>
                    <ul>
                        <li>Data Storytelling: Revolutionising Human-Data Interaction or Just Passing Hype?, Roberto Martínez <strong>(Sala 1)</strong></li>
                        <li>Planning and Conducting Heuristic Evaluations with DUXAIT-NG <strong>(Sala 2)</strong></li>
                        <li>Exploring cultural data from UNESCO using semantic technologies <strong>(Sala 3)</strong></li>
                        <li>Applications of Instance-Based Learning Theory: Using the SpeedyIBL Library to Construct Computational Models <strong>(Sala 4)</strong></li>
                    </ul>
                </td>
                <td>
                    <strong class="text-center text-primary text-gradient">Local: Posgrado</strong><br>
                    <strong>Posters</strong>
                    <ul>
                        <li>A Guide to Plain Language Data Visualizations: Guidelines for More Understandable Chart Design</li>
                        <li>What do Portuguese-Libras automatic translation application users care about? An analysis of user comments to improve application accessibility by the quality assurance team</li>
                        <li>Learning Interaction User Flow</li>
                        <li>Improving User Experience: Designing an Intuitive and Visually Appealing Interface for University First Contact and Ombudsman Services for the Centro Universitario del Sur</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th scope="row">18:00 - 20:00 hrs</th>
                <td colspan="2">
                    <div>
                        <strong>Panel Everything Changes</strong>
                        <ul>
                            <li>Challenges and Opportunities in HCI in LATAM <strong>(San Jerónimo Building, room to be defined.)</strong></li>
                        </ul>
                    </div>
                </td>
            </tr>                          
        </tbody>
    </table>

    <h2 id="tuesday" class="text-primary text-gradient text-center py-4"> Tuesday, October 31st, 2023</h2>
    
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Time (CST)</th>
                <th scope="col" colspan="2">Event</th>                
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="col" colspan="3" class="text-center text-primary text-gradient">Local: Facultad de la FCC (Auditorio FCC)</th>
            </tr>            
            <tr>
                <th scope="row">09:00 - 09:30 hrs</th>
                <td colspan="2">
                    <p>
                        Registration
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">09:30 - 10:30 hrs</th>
                <td colspan="2">
                    <p>
                    Keynote by <strong>Marisol Wong</strong> "Hacia un Mundo de Muchos Mundos en IHC"
                    <br><strong>Escuela Superior Politécnica del Litoral, Ecuador</strong>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#marisolWong" role="button"
                        aria-expanded="false" aria-controls="marisolWong">Abstract</a>
                    <div class="collapse" id="marisolWong">
                        <div class="card card-body">
                            <p>
                                The field of HCI has long recognized a socio-technical gap complicating the design of
                                technologies that can sustainably meet social needs. In response, a growing body of research
                                advocates for assets-based design, an approach that seeks to build upon what the individuals
                                and community already have. The emphasis on positioning strengths rather than needs at the
                                center of the process can complicate designers' decisions on what activities to foster, how
                                to conduct them, and what outcomes to expect. In this talk, I reflect on my journey trying
                                to apply an assets-based approach to design when working first with Latin* parents in the
                                U.S. to reinvent technologies for parents to engage with their children’s education, then
                                working with different communities in Guayaquil who are seeking in technology a way to
                                innovate and sustain their work, and finally, with other Latin American HCI researchers who
                                are trying to render visible the strengths that the region brings to HCI as a globalized
                                discipline. In particular, I explore the problems and implications of focusing on assets as
                                the base for design, propose capacity-focused design as a more realistic alternative than
                                assets-based design, and discuss the methodological commitments and changes of perspective
                                around work, technology's role, and transformation that this approach requires.
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">10:30 - 11:00 hrs</th>
                <td  colspan="2">
                    Cofee Break
                </td>
            </tr>
            <tr>
                <th scope="row">11:00 - 12:00 hrs</th>
                <td  colspan="2">
                    <p>
                        Keynote by <strong>Roberto Martínez</strong> "Putting the 'I' in AI: Human-Centred Approaches in
                        Education"
                        <br><strong>Monash University, Australia</strong>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#robertoMartinez"
                        role="button" aria-expanded="false" aria-controls="robertoMartinez">Abstract</a>
                    <div class="collapse" id="robertoMartinez">
                        <div class="card card-body">
                            <p>
                                As we experience a second wave of Artificial Intelligence (AI) innovations, technology
                                developers across various sectors are teaming up to create revolutionary tools and
                                methodologies. In education, a surge of new tools has been launched in a remarkably short
                                time, challenging conventional assessment practices and reshaping how students demonstrate
                                their knowledge creation. Yet, in the rush to embrace the future, it's crucial to keep human
                                factors at the core of these efforts. This keynote will explore the significance of a
                                human-centered design approach in integrating AI in education. A human-centered approach to
                                designing AI innovations not only holds the potential to enhance learning outcomes but also
                                to acknowledge, respect, and design for the unique attributes of human cognition and
                                emotion. This undertaking is a multi-disciplinary effort, seamlessly weaving together
                                foundations of Human-Computer Interaction, design, educational theory, and data science. I
                                will present an authentic case study that illustrates the profound impact of blending human
                                expertise with machine intelligence. This study revolves around a multimodal learning
                                analytics project where educators and other educational stakeholders collaboratively
                                designed a data capture infrastructure to support face-to-face collaboration. In this
                                project, multiple sensors—including positioning sensors, physiological wristbands, audio
                                devices, and video—were utilized to monitor groups of nursing students. The primary aim was
                                to co-design interfaces that amplify reflective practices and explore how AI can be used to
                                support education with integrity.
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">12:00 - 14:00 hrs</th>
                <td>
                    <strong class="text-center text-primary text-gradient">Local: Auditorio FCC</strong><br>
                    Paper Sessions                    
                    <p>
                        <strong>Education, Inclusion, and Accessibility</strong>
                        <ul>
                            <li>Dashboard design for Key Performance Indicators visualization of STEAM government initiatives: A case study</li>
                            <li>Didactic Alternative based on Augmented Reality for teaching Mazatec Language</li>
                            <li>Interactive floor´s impact on gross motor abilities in Mexican children with learning and language disabilities</li>
                            <li>A Serious Game prototype aimed at rescuing the Ixcatecan language using the Design Thinking methodology</li>
                            <li>Design of a software prototype for listening comprehension of the Ixcatecan language</li>
                            <li>Measurement of efficiency parameters from the application of STEM Maker teaching: A practical case</li>
                        </ul>

                        <strong>Technology Adoption and Evaluation</strong>
                        <ul>
                            <li>A Multilevel Methodology to Assess the Quality of Machine Translators to Brazilian Sign Languages</li>
                            <li>LA USABILIDAD EN UN SISTEMA DE SEGURIDAD DE MEZCLA DE CRIPTOGRAFIA Y HARDWARE</li>
                        </ul>
                    </p>
                </td>
                <td>
                    <strong class="text-center text-primary text-gradient">Local: Posgrado</strong><br>
                    Paper Sessions 2
                    <p>
                        <strong>Data</strong>
                        <ul>
                            <li>Considerações de Design para Visualização de Dados Sociais em Mapas Web</li>
                            <li>Personal Data Comics: A Data Storytelling Approach Supporting Personal Data Literacy</li>
                        </ul>

                        <strong>Business, E-Commerce, and Project Management</strong>
                        <ul>
                            <li>The Perceived Influence of E-Shopping Cues on Customers' Buying Decisions</li>
                            <li>Redefining e-commerce engagement: exploring the demographic impact of WhatsApp chatbots in the Mexican market</li>
                            <li>DoTA: DesignOps Teams Assessment em equipes ágeis de desenvolvimento de software em empresa do setor financeiro                        </li>
                        </ul>

                        <strong>Communication, Emotions, and Social Interactions</strong>
                        <ul>
                            <li>Beyond the Physical and Virtual for a Socioenactive Interaction</li>
                            <li>GenQ: Automated Question Generation to Support Caregivers While Reading Stories with Children</li>
                        </ul>                        
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">14:00 - 15:00 hrs</th>
                <td colspan="2">
                    <p>
                        Lunch
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">15:00 - 17:00 hrs</th>
                <td>
                    <strong class="text-center text-primary text-gradient">Local: Auditorio FCC</strong><br>
                    Paper Sessions 3
                    <p>
                        <strong>Education, Inclusion, and Accessibility</strong>
                        <ul>
                            <li>Determinando a importância de critérios de acessibilidade para recursos digitais voltados para pessoas com autismo por crowdsourcing</li>
                            <li>Designing a sign language training platform for hearing healthcare personnel</li>
                            <li>Codesigning a Spanish literacy platform for deaf children</li>
                        </ul>

                        <strong>Technology Adoption and Evaluation</strong>
                        <ul>
                            <li>Exploring Acceptance Factors of a Technology for Textual Production among Deaf Users: A UTAUT2-Based Studya</li>
                            <li>Applying Heuristic Evaluation with Different Evaluator Profiles: A Comparative Study Between Novice and Expert Specialists</li>
                        </ul>

                        <strong>Communication, Emotions, and Social Interactions</strong>
                        <ul>
                            <li>Hybrid Models for Facial Emotion Recognition in Children</li>
                            <li>Virtual Reality Environment for Surgical Skills Practice for Medical Students</li>
                            <li>A CASE Tool for the Socially-Aware Persuasive System Design toward enhancing the Human Behavior</li>
                        </ul>
                    </p>
                </td>
                <td>
                    <p>
                        <strong class="text-center text-primary text-gradient">Local: Posgrado</strong><br>
                        <strong>Doctoral Colloquium (Location to be determined)</strong>
                        <ul>
                            <li>Development of a Multimodal Model for Emotions Recognition in Drivers Using Convolutional Neural Networks</li>
                            <li>Multimodal Emotion Recognition Model Using AI With the Aim of Addressing Gender-Based Violence</li>
                            <li>Desarrollo de un Sistema de Seguridad Automotriz para la Detección de Peatones Mediante la Fusión de Información de la Cámara de Reversa y Sensores de Proximidad Usando Redes Neuronales Convolucionales Profundas</li>
                            <li>Bidirectional communication of emotions between a young user with autism and their assistance dog.</li>
                            <li>Prototype proposal for an interactive container aimed at primary school children aged 6 to 8 years old to promote plastic collection and sorting.</li>
                            <li>Design of a Mobile Application Prototype Focused on Physical Activity Management in University Students to Compensate for the Effects of ADHD</li>
                        </ul>

                        <strong>SDC (Location to be determined)</strong>
                        <ul>
                            <li>CycleWiseT: Promoting Menstrual Health to Transform the Lives of Women and Girls Through Technology</li>
                            <li>piensaRápido: Plataforma Lúdica de Aprendizaje</li>
                            <li>SafeBikers : Diseño basado en Solidaridad para Un Ciclismo Comunitario Seguro en Ecuador</li>
                            <li>AmamantApp: Aplicación móvil para Promover la Donación de Leche Materna</li>
                        </ul>
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">17:00 - 20:00 hrs</th>
                <td colspan="2">
                    <p>
                        -
                    </p>
                </td>
            </tr>

            <tr>
                <th scope="row">20:00 hrs</th>
                <td colspan="2">
                    <p>
                        Gala Dinner
                    </p>
                </td>
            </tr>
        </tbody>
    </table>

    <h2 id="wednesday" class="text-primary text-gradient text-center py-4">Wednesday, November 1st, 2023</h2>
    
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Time (CST)</th>
                <th scope="col">Event</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="col" colspan="3" class="text-center text-primary text-gradient">Local: Tec de Monterrey, Campus Puebla</th>
            </tr>             
            <tr>
                <th scope="row">09:30 - 09:50 hrs</th>
                <td>
                    <p>
                        Registration
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">09:50 - 10:00 hrs</th>
                <td>
                    <p>Opening of Industry Day</p>
                </td>
            </tr>
            <tr>
                <th scope="row">10:00 - 10:45 hrs</th>
                <td>
                    <p>
                        <strong>Co-creación de valor: la actitud que impulsa al diseño</strong><br>
                        Sebastián Valenzuela<br>
                        Head of Design Chapter Sky Airline<br>
                        <span class="fw-bold">Sky Airline</span>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#sebastianValenzuela" role="button"
                        aria-expanded="false" aria-controls="sebastianValenzuela">Abstract</a>
                    <div class="collapse" id="sebastianValenzuela">
                        <div class="card card-body">
                            <p>
                                In this talk, we will explore the fundamental role of design in organizational contexts where its value was not fully recognized. Understanding the context strengthens our work as designers, enabling us to drive the co-creation of value with the various actors in the system and, consequently, facilitate the incorporation of co-design into airline operations and practices.
                            </p>
                        </div>
                    </div>                    
                </td>
            </tr>
            <tr>
                <th scope="row">10:50 - 11:10 hrs</th>
                <td>
                    <p>
                        <strong>Integrando métodos y perspectivas de Interacción Humano- Computadora en el desarrollo responsable de Inteligencia Artificial</strong><br>
                        Adriana Alvarado <br>
                        Research Scientist<br>
                        <span class="fw-bold">IBM</span>
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">11:15 - 11:35 hrs</th>
                <td>
                    <p>
                        <strong>Angustia, fracaso y llanto; la vida después de la escuela</strong><br>
                        Remedios Méndez<br>
                        UX Writer<br>
                        <span class="fw-bold">RGP</span>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#remediosMendez" role="button"
                        aria-expanded="false" aria-controls="remediosMendez">Abstract</a>
                    <div class="collapse" id="remediosMendez">
                        <div class="card card-body">
                            <p>
                                A brief history of how to change the world by speaking nicely.
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">11:40 - 12:00 hrs</th>
                <td>
                    <p>
                        Coffee break
                    </p>
                </td>
            </tr>            
            <tr>
                <th scope="row">12:05 - 12:25 hrs</th>
                <td>
                    <p>
                        <strong>El journey de un Product Designer: perspectivas del trabajo en equipo en la práctica profesional</strong><br>
                        Griselda Legaria<br>
                        Product Designer<br>
                        <span class="fw-bold">Serbatic</span>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#servatic" role="button"
                        aria-expanded="false" aria-controls="servatic">Abstract</a>
                    <div class="collapse" id="servatic">
                        <div class="card card-body">
                            <p>
                                The role of a Product Designer is present in companies during the phases of digital product development. Collaborating with other stakeholders is a key factor in adding value to the product's design. We cannot become experts in everything, but we can collaborate to generate comprehensive solutions!
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">12:30 - 13:15 hrs</th>
                <td>
                    <p>
                        <strong>Analizando las interacciones humanas en la era de la Inteligencia Artificial</strong><br>
                        Santi Cantalejo / Julio Pedrazuela<br>
                        <span class="fw-bold">The Cocktail</span>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#theCocktail" role="button"
                        aria-expanded="false" aria-controls="theCocktail">Abstract</a>
                    <div class="collapse" id="theCocktail">
                        <div class="card card-body">
                            <p>
                                In this talk, we will, in an instructive way, explore the implications of HCI through the lens of behavioral economics to understand how human expectations, biases, and cognitive processes are evolving in an era where there may not necessarily be humans behind digital content and interactions.
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">13:20 - 14:00 hrs</th>
                <td>
                    <p>
                        Panel de preguntas y respuestas
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">14:00 - 14:10 hrs</th>
                <td>
                    <p>
                        Clausura del Industry Day
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">14:10 - 14:30 hrs</th>
                <td>
                    <p>
                        Networking
                    </p>
                </td>
            </tr>            
        </tbody>
    </table>

    <h3 class="text-primary text-gradient text-center py-4">Workshops</h3>

    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Time (CST)</th>
                <th scope="col">Event</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">9:30 - 10:00 hrs</th>
                <td>
                    <p>
                        Registration
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="col" colspan="3" class="text-center text-primary text-gradient">Room to be determined - Tec de Monterrey, Campus Puebla</th>
            </tr>            
            <tr>
                <th scope="row">10:00 - 12:00 hrs</th>
                <td>
                    <p>
                        <strong>Diseño de futuros: enfrentando retos globales a través de la innovación</strong><br>
                        Luis Carlos Aceves <br>
                        Business Development & Corporate Affairs Manager<br>
                        <span class="fw-bold">Skye Group</span>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#skyeGroup" role="button"
                        aria-expanded="false" aria-controls="skyeGroup">Abstract</a>
                    <div class="collapse" id="skyeGroup">
                        <div class="card card-body">
                            <p>
                                In this talk-workshop, we will address the principles for innovation through strategic design, particularly reviewing the foundations of futures design to understand how it can help us prospect and design long-term solutions.
                            </p>
                        </div>
                    </div>
                </td>                
            </tr>
            <tr>
                <th scope="col" colspan="3" class="text-center text-primary text-gradient">Room to be determined - Tec de Monterrey, Campus Puebla</th>
            </tr>                        
            <tr>
                <th scope="row">10:00 - 14:00 hrs</th>
                <td>
                    <p>
                        <strong>Introducción a Jobs to be Done: Conecta con las necesidades de las personas usuarias</strong><br>
                        Sarai Prado / Nefer Daniela Romero / Zaira Cuecuecha<br>
                        <span class="fw-bold">Sperientia [Studio + Lab] ®</span>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#sperientia" role="button"
                        aria-expanded="false" aria-controls="sperientia">Abstract</a>
                    <div class="collapse" id="sperientia">
                        <div class="card card-body">
                            <p>
                                This workshop is designed for students interested in creating products and services, as well as implementing human-centered design. We will introduce a methodology that allows us to understand people's needs from the root. By identifying Jobs to Be Done, we can better satisfy those needs, find opportunities for innovation, and disruption in the market.
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>    
        
</template>