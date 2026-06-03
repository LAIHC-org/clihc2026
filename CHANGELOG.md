# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2026.3.0.0] - 2026-06-03

### Added

- Added author accessibility recommendations in English, Spanish, and Portuguese, including downloadable reference documentation.
- Added ethics recommendations for authors in English, Spanish, and Portuguese, with a new route and navigation entry.
- Added keynote speaker content and photos for the Brazil and Mexico venues.
- Added SIGCHI to the supporters section and refreshed sponsor/supporter presentation.

### Changed

- Replaced the local registration page with external registration links for the Brazil and Mexico venue subdomains.
- Updated the home registration summary to show venue-specific status and mark both BR and MX registration as closed.
- Updated call deadlines and call-table metadata across EN/ES/PT for full papers, short papers, student design competition, and graduate colloquium.
- Reorganized attendee navigation and footer links around venue-specific program, schedule, and registration destinations.
- Refreshed organizer and program committee presentation, including localized academic degree labels and cleaned placeholder content.
- Standardized speaker and organizer card imagery, ribbons, and layout behavior.

### Fixed

- Improved primary button hover contrast for accessibility.
- Corrected short papers and student design competition contact/deadline information across localized call pages.


## [2026.2.0.3] - 2026-02-23

### Changed

- Updated CFP dates across locales (EN/ES/PT): abstract/resumen/resumo submission moved from February 23 to March 1, and full paper/article/artigo submission moved from March 1 to March 8.
- Updated the same CFP deadline values in the Call for Papers pages, calls table, and navigation CFP message metadata (`cfp_message`).

## [2026.2.0.2] - 2026-02-13

### Fixed

- Localized Jumbotron event CTAs, venue labels, and event dates for Spanish, English, and Portuguese.

## [2026.2.0.1] - 2026-02-12

### Added

- Added the Short Papers call with localized content (EN/ES/PT) plus a new route and view.
- Added Short Papers links to the calls navbar dropdown, footer, and calls table, including key dates.

### Changed

- Published the Workshops and Tutorials call content (EN/ES/PT) with organizer cards and updated call table dates.
- Updated navigation labels and call metadata to include Short Papers and refreshed Workshops/Tutorials deadlines.

## [2026.2.0.0] - 2026-02-07

### Added

- Added the Program Structure page with localized content (EN/ES/PT) and a new route.
- Added venue ribbons for speakers, sponsors, and related cards to distinguish Brazil/Mexico content.
- Added new venue/sponsor logos (CLIHC Mexico, UTM, USALab, Educación, OCCE) and refreshed the hero banner asset.

### Changed

- Redesigned the Jumbotron to highlight the Brazil and Mexico events with dedicated CTAs plus a central CFP call to action.
- Reworked the navbar information architecture with program structure + venue schedule links, a venue chooser, and updated call-for-participation messaging.
- Updated call tables and speakers summaries with concrete 2026 deadlines and refreshed content across locales.

### Fixed

- Switched internal navigation to i18n-aware `RouterLink` routes to respect the configured base URL (navbar, 404, video archives).

## [2026.1.0.11] - 2026-02-05

### Changed

- Updated About section content across locales to the CLIHC 2026 welcome text and HTML layout.
- Adjusted the Vite configuration by removing the vue-i18n plugin.

### Fixed

- Rendered About section translation HTML and prevented the i18n build error caused by HTML in locale messages.

## [2026.1.0.10] - 2026-02-02

### Added

- Added organizer and speaker photos (cams, lidianyCerqueira, lucianaZaina, marioMoreno, pedroReynolds, robertoPereira, victorAraujo).

### Changed

- Replaced placeholder content with full call texts for posters, graduate colloquium, and student design competition (EN/ES/PT).
- Updated call-for-papers content across locales.
- Published speakers content (lists and profiles) across locales and enabled the speakers section in the UI.
- Improved hash-link scrolling to wait for target elements before scrolling.

## [2026.1.0.9] - 2026-01-13

### Added

- Added photo for Ludmilla Fernandes Oliveira Galvão and centered her organizer card.
- Added accessibility labels for language selector and social links.

### Changed

- Updated navbar scroll behavior and dropdown styling for improved contrast.
- Improved mobile menu wrapping for long labels.
- Aligned attendee dropdown trigger with other nav items for consistency.

## [2026.1.0.8] - 2026-01-05

### Added

- Organizers page updates (photos)
- Add Sociedade Brasileira de Computação as sponsor

### Changed

- CPF organizer's photos

## [2026.1.0.7] - 2026-01-05

### Added

- Adds Call por Papers (Full Papers only)

## [2026.1.0.6] - 2025-12-14

### Added

- Support for displaying the CLIHC 2026 logo according to the active language (ES, EN, PT)

### Changed

- Reincorporated Dr. Pedro Reynolds-Cuellar to the CLIHC Steering Committee
- Corrected the institutional affiliation of Dr. Napoliana Souza to:
  Universidade do Estado do Amapá (UEAP), BR

## [2026.1.0.5] - 2025-11-04

### Changed

- update Organizers list

## [2026.1.0.4] - 2025-11-03

### Changed

- update Organizers list and add some photos

## [2026.1.0.3] - 2025-11-03

### Fixed

- update CNAME file for clihc2026.laihc.org
- update Organizers list

## [2026.1.0.2] - 2025-11-03

### Fixed

- Unify CTA text in Jumbotron across English, Spanish and Portuguese

## [2026.1.0.1] - 2025-11-02

### Added

- Landing page content
- Organizers page
- Replace the down arrow in dropdown menus (navbar)
