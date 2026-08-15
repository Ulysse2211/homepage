<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'
import SectionTitle from "~/components/IndexContent/Common/SectionTitle.vue";
const items = ref<TimelineItem[]>([
  {
    date: '22/11/2010',
    title: 'Apparition sur Terre',
    description: 'Le lundi 22 novembre 2010, je suis né, ce qui signifie que mes parents ont passé une bonne St-Valentin...',
    icon: 'i-tabler-baby-bottle'
  },
  {
    date: '2016',
    title: 'Mes débuts dans l\'informatique',
    description: 'À peine 6 ans, mon père tente de m\'apprendre le Java. Sans grand succès, mais la graine est plantée.',
    icon: 'i-tabler-code-asterix'
  },
  {
    date: '2019',
    title: 'Minecraft',
    description: 'Comme beaucoup d\'enfants passionnés par l\'informatique, je me lance dans la création d\'un serveur Minecraft.',
    icon: 'i-tabler-brand-minecraft'
  },
  {
    date: '2019 - 2024',
    title: 'Diversification',
    description: 'Entre 2019 et 2024, l\'administration de serveurs Minecraft devient un terrain d\'apprentissage à part entière :\n' +
        '- Gestion de serveurs Linux\n' +
        '- Travail en équipe et collaboration\n' +
        '- Fonctionnement des réseaux\n' +
        '- Web et Internet\n' +
        '- Compréhension approfondie de Windows\n' +
        'Cette passion me pousse à diversifier mes compétences, notamment vers le développement web, desktop et bare-metal.',
    icon: 'i-tabler-server'
  },
  {
    date: 'Septembre 2024',
    title: 'Sécurité informatique',
    description: 'À la rentrée 2024, mon lycée en Île-de-France équipe les élèves d\'ordinateurs verrouillés par des restrictions logicielles. Curieux de comprendre les mécanismes de sécurité mis en place, je commence à m\'y intéresser de près. C\'est à ce moment que je rencontre une communauté de lycéens passionnés par le sujet, avec qui j\'approfondis mes connaissances en sécurité informatique.',
    icon: 'i-tabler-device-laptop'
  },
  {
    date: 'Juillet 2025',
    title: 'Stage chez dc2scale',
    description: 'En fin d\'année de seconde, je réalise un stage chez dc2scale, une entreprise spécialisée dans les datacenters. Une première immersion concrète dans l\'exploitation d\'infrastructures à grande échelle.',
    icon: 'i-tabler-building-warehouse'
  },
  {
    date: 'Août 2025',
    title: 'Assistant technicien datacenter',
    description: 'Suite à ce stage, dc2scale me propose un CDD d\'un mois en tant qu\'assistant technicien datacenter. Une confirmation concrète de mon intérêt pour l\'infrastructure et le hardware, et une première expérience professionnelle rémunérée dans le secteur.',
    icon: 'i-tabler-briefcase'
  },
  {
    date: 'Septembre 2025',
    title: 'Électronique',
    description: 'En première, je me lance dans l\'électronique pour comprendre le fonctionnement bas niveau des systèmes informatiques et de divers appareils, et continuer à diversifier mes compétences.',
    icon: 'i-tabler-cpu'
  },
  {
    date: 'Février 2026',
    title: 'Signalement au CERT-FR (ANSSI)',
    description: 'Grâce aux connaissances acquises auprès de cette communauté, je découvre une vulnérabilité majeure au sein d\'une multinationale franco-anglaise, exposant les données bancaires de près de 600 000 clients. Je signale la faille de manière responsable à l\'ANSSI, permettant sa correction avant toute exploitation malveillante.',
    icon: 'i-tabler-lock-code'
  },
  {
    date: 'Juillet 2026',
    title: 'Photographie',
    description: 'Fin juillet 2026, je découvre la photographie animalière et de paysage, une nouvelle façon d\'observer et de capturer le monde qui m\'entoure.',
    icon: 'i-tabler-photo'
  },
  {
    date: 'Prochaine étape',
    title: 'École d\'ingénieur',
    description: 'Je vise aujourd\'hui une formation d\'ingénieur (bac+5), pour structurer et approfondir l\'ensemble de ces compétences acquises sur le terrain, avec une orientation vers la sécurité informatique et l\'infrastructure.',
    icon: 'i-tabler-school'
  }
])
</script>
<template>
  <div class="flex flex-col items-center justify-center w-full pt-5 pb-5">
    <SectionTitle id="history" title="Parcours" />
    <div class="flex flex-col items-center justify-center w-full p-5">
      <UTimeline class="w-fit" color="primary" :default-value="items.length - 2" :items="items" />
    </div>
  </div>
</template>