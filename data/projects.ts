import type { Project } from '@/data/types';

export const projects: Project[] = [
  {
    number: '01',
    name: 'Hydrolink',
    description: {
      es: 'Hydrolink nació de una necesidad real: regar una finca sin tener que estar pendiente todo el tiempo. Creció hasta convertirse en una plataforma IoT completa: firmware ESP32, API en Spring Boot y app en React Native. Desde la app puedes vincular o desvincular zonas con un código QR o un código de vinculación, ver el estado en vivo de las estaciones y los próximos riegos, activar o detener estaciones compatibles e instalar actualizaciones de firmware por aire. Las órdenes quedan pendientes hasta que el dispositivo las confirma. La infraestructura en la nube se despliega con AWS CDK.',
      en: 'Hydrolink started with a real problem: irrigating a countryside property without having to check on it constantly. It grew into a full IoT platform: ESP32 firmware, a Spring Boot API, and a React Native app. The app lets you link or unlink areas with a QR code or link code, see live station status and upcoming watering, start and stop supported stations, and install firmware updates over the air. Commands stay pending until the device confirms them. AWS CDK deploys the cloud infrastructure.',
    },

    href: 'https://github.com/ivfrost/hydrolink-app',
    stack: [
      'Java (Spring Boot)',
      'React Native (Expo)',
      'AWS',
      'PostgreSQL',
      'Docker',
      'TanStack Query',
      'Redis',
      'C++ (Arduino)',
    ],
  },
  {
    number: '02',
    name: 'Zest Music',
    description: {
      es: 'Reproductor de música local para Android inspirado en Vanilla Music, creado porque quería uno más moderno y con sensación nativa. Indexa en SQLite las carpetas que elijas y permite navegar por artista, álbum y canción, con recientes, recuentos de reproducción y filtro por álbum. Las imágenes de artistas vienen de MusicBrainz y Wikidata, con Deezer como alternativa opcional. Material 3, controles para usar con una mano, gestión de la cola y reproducción en segundo plano con controles del sistema.',
      en: 'A local-first Android music player inspired by Vanilla Music, built because I wanted a more modern, native-feeling player. It indexes the folders you choose in SQLite and lets you browse by artist, album, and song, with recents, play counts, and album filtering. Artist artwork comes from MusicBrainz and Wikidata, with Deezer as an optional fallback. Material 3, one-handed controls, queue management, and background playback with system media controls.',
    },

    href: 'https://github.com/ivfrost/zest-music',
    stack: [
      'React Native (Expo)',
      'TypeScript',
      'SQLite',
      'Drizzle ORM',
      'Expo Router',
      'Tailwind CSS',
      'react-native-audio-api',
    ],
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- intentionally not displayed
const otherProjects: Project[] = [
  {
    number: 'XX',
    name: 'spring-ticketing-microservices',
    description: {
      es: 'Sistema distribuido de gestión de eventos y tickets',
      en: 'Distributed event and ticket management system',
    },
    stack: ['Spring Boot', 'Kafka', 'Keycloak', 'API Gateway'],
    href: 'https://github.com/ivfrost/spring-ticketing-microservices',
  },
];
export default projects;
