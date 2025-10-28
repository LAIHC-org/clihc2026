<script>
import TheHeader from '@/components/Header.vue';
import Tr from '@/i18n/translation'

export default {
    components: {
        TheHeader,
    },
    setup() {
        return {
            Tr
        }
    }
}
</script>


<script setup>
import TheHeader from '@/components/Header.vue'
</script>

<template>
    <TheHeader>
        <template #page-name>
            {{ $t("accepted_papers.title") }}
        </template>
    </TheHeader>

    <section class="">
        <div class="container">
            <div class="row justify-content-center my-3">
                <div class="col-lg-8">
                    <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">
                                    <RouterLink
                                        :to="Tr.i18nRoute({ name: 'accepted-papers', hash: '#full-and-short-papers' })"
                                        class="uline">
                                        {{ $t("accepted_papers.full_and_short_papers") }}
                                    </RouterLink>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">
                                    <RouterLink :to="Tr.i18nRoute({ name: 'accepted-papers', hash: '#posters' })"
                                        class="uline">
                                        {{ $t("accepted_papers.posters") }}
                                    </RouterLink>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">
                                    <RouterLink
                                        :to="Tr.i18nRoute({ name: 'accepted-papers', hash: '#graduate-colloquium' })"
                                        class="uline">
                                        {{ $t("accepted_papers.graduate_colloquium") }}
                                    </RouterLink>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">
                                    <RouterLink
                                        :to="Tr.i18nRoute({ name: 'accepted-papers', hash: '#workshop-and-tutorials' })"
                                        class="uline">
                                        {{ $t("accepted_papers.workshops_and_tutorials") }}
                                    </RouterLink>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">
                                    <RouterLink
                                        :to="Tr.i18nRoute({ name: 'accepted-papers', hash: '#student-design-competition' })"
                                        class="uline">
                                        {{ $t("accepted_papers.student_design_competition") }}
                                    </RouterLink>
                                </div>
                            </div>
                        </li>
                    </ol>

                    <h2 id="full-and-short-papers" class="text-primary text-gradient text-center py-4">{{
                        $t("accepted_papers.full_and_short_papers") }}</h2>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h3 class="h5">Dashboard design for Key Performance Indicators visualization of STEAM government
                                initiatives: A case study</h3>
                            <p>Bryan Usías Catalino Piquet, Horus Alejandro Hernández Cabrera, José-Guillermo
                                Hernández-Calderón, Luis-Gerardo Montané-Jiménez and Valeria Soto-Mendoza</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Didactic Alternative based on Augmented Reality for teaching Mazatec Language
                            </h3>
                            <p>Beatriz Adriana Sabino Moxo, José Alberto Márquez Domínguez, Miguel Ángel Sánchez Acevedo and
                                Carmen Carlota Martínez Gil</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Interactive floor´s impact on gross motor abilities in Mexican children with
                                learning and language disabilities</h3>
                            <p>Raymundo Cornejo, Fernando Martinez, Fernando Gaxiola and Alain Manzo-Martínez</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">A Serious Game prototype aimed at rescuing the Ixcatecan language using the
                                Design Thinking methodology</h3>
                            <p>Beatriz Adriana Sabino Moxo, José Alberto Márquez Domínguez, Ana Cristina Hernández Bravo,
                                Darío Joaquín Castillo Ocaña and Paola Noemí Flores Trejo</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Design of a software prototype for listening comprehension of the Ixcatecan
                                language</h3>
                            <p>Erika Mariana Carvajal Soriano, Antonia Abigail Cortes Pérez, María José Carvajal Carrera,
                                Beatriz Adriana Sabino Moxo and José Alberto Márquez Domínguez</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Measurement of efficiency parameters from the application of STEM Maker teaching:
                                A practical case</h3>
                            <p>Alfredo García Suárez, Juan Manuel Gonzalez Calleros and Josefina Guerrero Garcia</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Importance of data preprocessing in the implementation of data mining in decision
                                making. Case study: sports, health and education</h3>
                            <p>Humberto Muñoz Bautista and Jaime Muñoz-Arteaga</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">A Multilevel Methodology to Assess the Quality of Machine Translators to
                                Brazilian Sign Languages</h3>
                            <p>Luana Silva Reis, Tiago Maritan Ugulino de Araújo, Yuska Paola Costa Aguiar and Manuella
                                Aschoff Cavalcanti Brandão Lima</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">LA USABILIDAD EN UN SISTEMA DE SEGURIDAD DE MEZCLA DE CRIPTOGRAFIA Y HARDWARE
                            </h3>
                            <p>Bárbara Emma Sánchez Rinza, Fernando Javier Méndez Méndez, Carlos Ignacio Robledo Sánchez and
                                Mario Rossainz López</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Determinando a importância de critérios de acessibilidade para recursos digitais
                                voltados para pessoas com autismo por crowdsourcing</h3>
                            <p>João Rafael Chaves de Araújo Silva, Yuska Paola Costa Aguiar and Tiago Maritan Ugulino Araújo
                            </p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">The Perceived Influence of E-Shopping Cues on Customers' Buying Decisions</h3>
                            <p>Anastasia Sergeeva, Kerstin Bongard-Blanchy, Verena Distler and Vincent Koenig</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Considerações de Design para Visualização de Dados Sociais em Mapas Web</h3>
                            <p>Eduardo Carmo, André Neto, Marcelle Mota, Paulo Melo and Estêvão Barbosa</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Personal Data Comics: A Data Storytelling Approach Supporting Personal Data
                                Literacy</h3>
                            <p>Alejandra Gómez Ortega, Jacky Bourgeois and Gerd Kortuem</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Beyond the Physical and Virtual for a Socioenactive Interaction</h3>
                            <p>Yusseli Lizeth Mendez Mendoza and M. Cecília C. Baranauskas</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">GenQ: Automated Question Generation to Support Caregivers While Reading Stories
                                with Children</h3>
                            <p>Arun Balajiee Lekshmi Narayanan, Ligia E. Gomez, Martha Michelle Soto Fernandez, Tri Nguyen,
                                Chris Blais, M. Adelaida Restrepo and Arthur Glenberg</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Hybrid Models for Facial Emotion Recognition in Children</h3>
                            <p>Rafael Zimmer, Marcos Sobral and Helio Azevedo</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Redefining e-commerce engagement: exploring the demographic impact of WhatsApp
                                chatbots in the Mexican market</h3>
                            <p>César Castillo López and David Castillo López</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Designing a sign language training platform for hearing healthcare personnel</h3>
                            <p>J. Alfredo Sánchez, Juan Arturo Flores-Rivera and Soraia Prietch</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Exploring Acceptance Factors of a Technology for Textual Production among Deaf
                                Users: A UTAUT2-Based Study</h3>
                            <p>Lucia Vilela Leite Filgueiras, Ely Bernardi, João Víctor Araújo Lima, Alexandre Faustino
                                Miranda, Greice Franklin de Silveira Lima, Maria Clara Rosa Nascimento, Mateus Deletezze,
                                Tania Martins and Glauber Lima</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Virtual Reality Environment for Surgical Skills Practice for Medical Students
                            </h3>
                            <p>José Luis Cardona-Rivera, Héctor Cardona-Reyes, Francisco Javier Álvarez-Rodríguez and Jaime
                                Muñoz-Arteaga</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">A CASE Tool for the Socially-Aware Persuasive System Design toward enhancing the
                                Human Behavior</h3>
                            <p>Geovanna Evelyn Espinoza Taype and Maria Cecília Calani Baranauskas</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">DoTA: DesignOps Teams Assessment em equipes ágeis de desenvolvimento de software
                                em empresa do setor financeiro</h3>
                            <p>Felipe Neves and Marcelo Duduchi</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Applying Heuristic Evaluation with Different Evaluator Profiles: A Comparative
                                Study Between Novice and Expert Specialists</h3>
                            <p>Freddy Paz, Arturo Moquillaza, Adrián Lecaros, Fiorella Falconi, Joel Aguirre and Carlos
                                Ramos</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Codesigning a Spanish literacy platform for deaf children</h3>
                            <p>Laura Sanely Gaytán Lugo, Soraia Prietch, Pedro César Santana Mancilla, Miguel A. Rodríguez
                                Ortiz, Pablo Bautista Flores, Silvia Fajardo Flores and Alfredo Sánchez Huitrón</p>
                        </li>
                    </ul>

                    <h2 id="posters" class="text-primary text-gradient text-center py-4">{{ $t("accepted_papers.posters") }}
                    </h2>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h3 class="h5">A Guide to Plain Language Data Visualizations: Guidelines for More Understandable
                                Chart Design</h3>
                            <p>Rodrigo Oliveira, Claudia Cappelli and Jonice Oliveira</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">What do Portuguese-Libras automatic translation application users care about? An
                                analysis of user comments to improve application accessibility by the quality assurance team
                            </h3>
                            <p>Ana Carolina Rodrigues Lima de Aguiar, Lucas Eduardo Melo Alves, Felipe Melo Feliciano de Sá
                                and Yuska Paola Costa Aguiar</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Learning Interaction User Flow</h3>
                            <p>Luis Bautista, Jose Alejandro Guerrero and Leonardo Soto</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Improving User Experience: Designing an Intuitive and Visually Appealing
                                Interface for University First Contact and Ombudsman Services for the Centro Universitario
                                del Sur</h3>
                            <p>Daniel Arechiga, Adriana Iñiguez, Neri González and Eric Duarte</p>
                        </li>
                    </ul>

                    <h2 id="graduate-colloquium" class="text-primary text-gradient text-center py-4">{{
                        $t("accepted_papers.graduate_colloquium") }}</h2>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h3 class="h5">Development of a Multimodal Model for Emotions Recognition in Drivers Using
                                Convolutional Neural Networks</h3>
                            <p>Carlos H. Espino-Salinas, Huizilopoztli Luna-García and José M. Celaya-Padilla</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Multimodal Emotion Recognition Model Using AI With the Aim of Addressing
                                Gender-Based Violence</h3>
                            <p>Rosa A. García-Hernández, José M. Celaya-Padilla and Huizilopoztli Luna-García</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Desarrollo de un Sistema de Seguridad Automotriz para la Detección de Peatones
                                Mediante la Fusión de Información de la Cámara de Reversa y Sensores de Proximidad Usando
                                Redes Neuronales Convolucionales Profundas</h3>
                            <p>Luis C. Reveles, Huizilopoztli Luna and José M. Celaya</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Bidirectional communication of emotions between a young user with autism and
                                their assistance dog.</h3>
                            <p>Adela Guadalupe Almazan Lopez</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Prototype proposal for an interactive container aimed at primary school children
                                aged 6 to 8 years old to promote plastic collection and sorting.</h3>
                            <p>Belen Hernández Villalba</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Design of a Mobile Application Prototype Focused on Physical Activity Management
                                in University Students to Compensate for the Effects of ADHD</h3>
                            <p>Nadia Jiménez Barriga</p>
                        </li>
                    </ul>

                    <h2 id="workshop-and-tutorials" class="text-primary text-gradient text-center py-4">{{
                        $t("accepted_papers.workshops_and_tutorials") }}</h2>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h3 class="h5">Applications of Instance-Based Learning Theory: Using the SpeedyIBL Library to
                                Construct Computational Models</h3>
                            <p>Erin H. Bugbee, Thuy Ngoc Nguyen and Cleotilde Gonzalez</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Exploring cultural data from UNESCO using semantic technologies</h3>
                            <p>María Auxilio Medina Nieto and Gudelia Pilar Pérez Conde</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Planning and Conducting Heuristic Evaluations with DUXAIT-NG</h3>
                            <p>Falconi Fiorella and Arturo Moquillaza</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">Data Storytelling: Revolutionising Human-Data Interaction or Just Passing Hype?
                            </h3>
                            <p>Roberto Martinez-Maldonado</p>
                        </li>
                    </ul>

                    <h2 id="student-design-competition" class="text-primary text-gradient text-center py-4">{{
                        $t("accepted_papers.student_design_competition") }}</h2>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h3 class="h5">CycleWiseT: Promoting Menstrual Health to Transform the Lives of Women and Girls
                                Through Technology</h3>
                            <p>Belen Hernández and Nadia Jiménez</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">piensaRápido: Plataforma Lúdica de Aprendizaje</h3>
                            <p>Christopher Nolan Magaña Barocio, Daniel Jossu Romero García, Leonardo Ariel Tapia Figueroa,
                                Andrés Manuel Peña Anguiano and Cuauhtémoc Rivera Loaiza</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">SafeBikers : Diseño basado en Solidaridad para Un Ciclismo Comunitario Seguro en
                                Ecuador</h3>
                            <p>Moisés Atupaña, Mauricio Ortiz, Misael Bohórquez and Meiyin Chang</p>
                        </li>

                        <li class="list-group-item">
                            <h3 class="h5">AmamantApp: Aplicación móvil para Promover la Donación de Leche Materna</h3>
                            <p>Jaime Pizarro, Joseph Ávila and Meiyin Chang</p>
                        </li>
                    </ul>

                </div>
            </div>
    </div>
</section></template>