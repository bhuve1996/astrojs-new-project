// Site configuration - all text and settings in one place
export const siteConfig = {
  // Site Info
  name: 'Space Odyssey',
  title: 'Space Odyssey - Journey Through the Cosmos',
  description: 'Explore the wonders of space through stunning visuals and immersive experiences',
  url: 'https://yoursite.com',
  author: 'Space Odyssey Team',

  // Logo Configuration
  logo: {
    type: 'svg', // 'svg' or 'image'
    svg: `
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="url(#gradient1)" stroke-width="2" fill="none"/>
        <circle cx="16" cy="16" r="10" stroke="url(#gradient2)" stroke-width="1.5" fill="none" opacity="0.7"/>
        <circle cx="16" cy="16" r="6" stroke="url(#gradient3)" stroke-width="1" fill="none" opacity="0.5"/>
        <circle cx="10" cy="10" r="2" fill="url(#gradient1)"/>
        <circle cx="22" cy="12" r="1.5" fill="url(#gradient2)"/>
        <circle cx="20" cy="22" r="1.5" fill="url(#gradient3)"/>
        <circle cx="12" cy="24" r="1" fill="url(#gradient1)"/>
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#764ba2;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#f093fb;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f093fb;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#667eea;stop-opacity:1" />
          </linearGradient>
        </defs>
      </svg>
    `,
    image: '', // If type is 'image', use this path
    width: 32,
    height: 32,
    alt: 'Space Odyssey Logo',
  },

  // Contact Info
  contact: {
    email: 'hello@spaceodyssey.com',
    phone: '+1 (234) 567-890',
    address: '123 Space Station, Mars Colony, MC 12345',
    social: {
      twitter: {
        url: 'https://twitter.com/spaceodyssey',
        label: 'Twitter',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>`,
      },
      linkedin: {
        url: 'https://linkedin.com/company/spaceodyssey',
        label: 'LinkedIn',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>`,
      },
      github: {
        url: 'https://github.com/spaceodyssey',
        label: 'GitHub',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
        </svg>`,
      },
      instagram: {
        url: 'https://instagram.com/spaceodyssey',
        label: 'Instagram',
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
        </svg>`,
      },
    },
    hero: {
      title: 'Contact Us',
      subtitle: 'Reach out to the stars',
      backgroundImage: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&q=80', // Galaxy
    },
    info: {
      title: 'Get in Touch',
      text: "Have questions about space, want to collaborate, or just want to share your cosmic dreams? We'd love to hear from you.",
    },
  },

  // Navigation (sorted alphabetically for bottom menu)
  nav: [
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
    { href: '/', label: 'Home' },
  ],

  // Footer Links
  footer: {
    quickLinks: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/blog', label: 'Blog' },
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Contact' },
    ],
    legal: [
      { href: '/terms', label: 'Terms & Conditions' },
      { href: '/privacy', label: 'Privacy Policy' },
    ],
  },

  // Homepage Content - Space Theme
  homepage: {
    hero: {
      title: 'Journey Through the Cosmos',
      subtitle: 'Experience the infinite beauty of space through stunning visuals',
      scrollText: 'Scroll to explore the universe',
      backgroundImage: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&q=80', // Galaxy
    },
    sections: [
      {
        id: 'section-astronaut',
        title: 'Among the Stars',
        text: 'Floating in the vast emptiness of space, astronauts become one with the cosmos. Every moment is a testament to human courage and the endless pursuit of discovery.',
        backgroundImage: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1920&q=80', // Astronaut
        stickyBackground: true,
      },
      {
        id: 'section-mars',
        title: 'The Red Planet',
        text: 'Mars, our neighboring world, holds secrets of ancient rivers and the possibility of life. A future home for humanity awaits on its rusty surface.',
        backgroundImage: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1920&q=80', // Mars
        stickyBackground: true,
      },
      {
        id: 'section-moon',
        title: 'Lunar Dreams',
        text: 'The Moon, our closest celestial companion, has inspired humanity for millennia. Its craters tell stories of cosmic collisions and ancient history.',
        backgroundImage: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80', // Moon
        stickyBackground: true,
      },
      {
        id: 'section-nebula',
        title: 'Cosmic Clouds',
        text: 'Nebulae are the birthplaces of stars, vast clouds of gas and dust where new worlds are born. These cosmic nurseries paint the universe in brilliant colors.',
        backgroundImage: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=1920&q=80', // Nebula
        stickyBackground: true,
      },
      {
        id: 'section-earth',
        title: 'Pale Blue Dot',
        text: 'From the depths of space, Earth appears as a fragile oasis. A reminder of our responsibility to protect this unique world in the cosmic ocean.',
        backgroundImage: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1920&q=80', // Earth from space
        stickyBackground: true,
      },
      {
        id: 'section-galaxy',
        title: 'Spiral Galaxies',
        text: 'Billions of stars spiral in cosmic dance, creating galaxies that stretch across unimaginable distances. Each one a universe of possibilities.',
        backgroundImage: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80', // Galaxy
        stickyBackground: true,
      },
      {
        id: 'section-spacewalk',
        title: 'Spacewalk',
        text: 'Venturing outside the safety of the spacecraft, astronauts experience the ultimate freedom. Floating in the void, connected only by a tether to humanity.',
        backgroundImage: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&q=80', // Spacewalk
        stickyBackground: true,
      },
      {
        id: 'section-stars',
        title: 'Stellar Fields',
        text: 'Countless stars illuminate the darkness, each one a sun with its own worlds. In this infinite expanse, we find both our insignificance and our potential.',
        backgroundImage: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=1920&q=80', // Star field
        stickyBackground: true,
      },
      // Component Showcase Sections
      {
        id: 'components-flip-cards',
        title: '3D Flip Cards',
        componentType: 'flipCards',
        backgroundColor: '#1a1f2e',
      },
      {
        id: 'components-magnetic',
        title: 'Magnetic Cards',
        componentType: 'magneticCards',
        backgroundColor: '#0a0e1a',
      },
      {
        id: 'components-glass',
        title: 'Glassmorphism Cards',
        componentType: 'glassCards',
        backgroundColor: '#1a1f2e',
      },
      {
        id: 'components-tilt',
        title: '3D Tilt Cards',
        componentType: 'tiltCards',
        backgroundColor: '#0a0e1a',
      },
      {
        id: 'components-hover-reveal',
        title: 'Hover Reveal Cards',
        componentType: 'hoverRevealCards',
        backgroundColor: '#1a1f2e',
      },
      {
        id: 'components-particle',
        title: 'Particle Buttons',
        componentType: 'particleButton',
        backgroundColor: '#0a0e1a',
        particleButtons: [
          { text: 'Explore Space', href: '/' },
          { text: 'About Us', href: '/about' },
          { text: 'Contact', href: '/contact' },
        ],
      },
    ],
  },

  // About Page
  about: {
    hero: {
      title: 'About Space Odyssey',
      subtitle: 'Exploring the cosmos, one pixel at a time',
      backgroundImage: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&q=80', // Galaxy
    },
    mission: {
      title: 'Our Mission',
      text: 'We are dedicated to bringing the wonders of space to everyone. Through stunning visuals and immersive experiences, we aim to inspire the next generation of explorers and dreamers.',
    },
    vision: {
      title: 'Our Vision',
      text: 'To make the cosmos accessible to all. We envision a world where the beauty and mystery of space inspire curiosity, wonder, and a deeper understanding of our place in the universe.',
      backgroundImage: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1920&q=80', // Astronaut
    },
    values: [
      {
        title: 'Exploration',
        text: 'We constantly push boundaries and explore new frontiers in both space and technology.',
      },
      {
        title: 'Wonder',
        text: 'We believe in the power of awe and the importance of preserving the sense of wonder that space inspires.',
      },
      {
        title: 'Innovation',
        text: 'We use cutting-edge technology to create experiences that bring the cosmos closer to Earth.',
      },
      {
        title: 'Inspiration',
        text: 'We aim to inspire the next generation of scientists, engineers, and dreamers to reach for the stars.',
      },
    ],
  },

  // Blog
  blog: {
    hero: {
      title: 'Space Blog',
      subtitle: 'Stories from the cosmos and beyond',
      backgroundImage: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80', // Space
    },
    labels: {
      readMore: 'Read more →',
      backToBlog: '← Back to Blog',
    },
    posts: [
      {
        id: 1,
        title: 'The Journey to Mars: What We Know',
        excerpt:
          'Exploring the challenges and opportunities of human missions to the Red Planet. From rocket technology to life support systems.',
        date: '2024-01-15',
        category: 'Space',
        image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80',
        content: `
          <p>Human missions to Mars represent one of the most ambitious endeavors in the history of space exploration. As we stand on the brink of making this journey a reality, it's essential to understand what we know about the Red Planet and the challenges that await us.</p>
          
          <h2>The Red Planet: An Overview</h2>
          <p>Mars, the fourth planet from the Sun, has captured human imagination for centuries. With its rusty red appearance and proximity to Earth, it has long been considered the most viable candidate for human colonization beyond our home planet.</p>
          
          <h2>Technological Challenges</h2>
          <p>The journey to Mars presents numerous technological challenges. The distance between Earth and Mars varies from about 54.6 million kilometers at its closest to over 401 million kilometers at its farthest. This means a one-way trip could take anywhere from 6 to 9 months, depending on the alignment of the planets.</p>
          
          <h2>Life Support Systems</h2>
          <p>One of the most critical aspects of Mars missions is developing reliable life support systems. These systems must:</p>
          <ul>
            <li>Provide breathable air through oxygen generation</li>
            <li>Recycle water efficiently (up to 90% water recovery is needed)</li>
            <li>Manage waste products safely</li>
            <li>Protect against radiation during the journey and on the surface</li>
          </ul>
          
          <h2>Rocket Technology</h2>
          <p>Modern rocket technology has made significant strides. Companies like SpaceX are developing reusable rockets that could dramatically reduce the cost of space travel. The Starship system, for example, is designed to carry up to 100 people to Mars, making it a potential game-changer for interplanetary travel.</p>
          
          <h2>Surface Operations</h2>
          <p>Once on Mars, astronauts will face a harsh environment. The thin atmosphere (about 1% of Earth's) offers little protection from radiation. Temperatures can drop to -125°C (-195°F) at the poles. However, the equatorial regions can reach a relatively mild 20°C (68°F) during the day.</p>
          
          <h2>The Future of Mars Exploration</h2>
          <p>NASA's Artemis program and private initiatives like SpaceX's Mars colonization plans are bringing us closer to making Mars missions a reality. The first human steps on Mars could happen as early as the 2030s, marking a new chapter in human exploration.</p>
          
          <p>As we continue to push the boundaries of what's possible, the journey to Mars will not just be about reaching another planet—it will be about ensuring the long-term survival and expansion of humanity into the cosmos.</p>
        `,
      },
      {
        id: 2,
        title: 'Astronauts: Heroes of the Void',
        excerpt:
          "The incredible stories of those who have ventured beyond Earth's atmosphere. Their courage and dedication inspire us all.",
        date: '2024-01-10',
        category: 'Astronauts',
        image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&q=80',
        content: `
          <p>Astronauts are among the most courageous and dedicated individuals on Earth. They leave behind the safety of our planet to venture into the void of space, facing dangers that most of us can only imagine. Their stories inspire generations and push humanity forward into the cosmos.</p>
          
          <h2>The Selection Process</h2>
          <p>Becoming an astronaut is one of the most competitive processes in the world. Candidates must possess exceptional physical fitness, mental resilience, and technical expertise. They undergo years of rigorous training, learning everything from spacewalk procedures to emergency protocols.</p>
          
          <h2>Life in Space</h2>
          <p>Living in space is fundamentally different from life on Earth. Astronauts experience microgravity, which affects everything from how they sleep to how they eat. They must adapt to floating through their living quarters and learn to work effectively in an environment where up and down have little meaning.</p>
          
          <h2>The International Space Station</h2>
          <p>The ISS serves as a testament to international cooperation and human ingenuity. Astronauts from different countries live and work together, conducting experiments that benefit all of humanity. They perform spacewalks to maintain the station, conduct scientific research, and test technologies for future deep-space missions.</p>
          
          <h2>Spacewalks: The Ultimate Adventure</h2>
          <p>Spacewalks, or Extravehicular Activities (EVAs), are among the most dangerous and awe-inspiring aspects of being an astronaut. Floating outside the spacecraft, connected only by a tether, astronauts experience the ultimate freedom—and the ultimate vulnerability. They must rely on their training, their equipment, and their crewmates to ensure their safety.</p>
          
          <h2>Mental and Physical Challenges</h2>
          <p>Space travel takes a significant toll on the human body. Astronauts experience muscle atrophy, bone density loss, and changes in vision. They must maintain strict exercise regimens to counteract these effects. Mentally, they must cope with isolation, confinement, and the constant awareness of the dangers around them.</p>
          
          <h2>Inspiring the Next Generation</h2>
          <p>Every astronaut who ventures into space becomes an ambassador for humanity. Their courage and dedication inspire children around the world to dream of reaching for the stars. They show us that with determination, training, and teamwork, we can achieve the seemingly impossible.</p>
          
          <h2>Looking Forward</h2>
          <p>As we prepare for missions to Mars and beyond, astronauts will face even greater challenges. Longer missions, greater distances from Earth, and more complex operations will test the limits of human endurance. But if history has shown us anything, it's that astronauts are more than up to the challenge.</p>
          
          <p>These heroes of the void remind us that humanity's greatest achievements come from pushing beyond our comfort zones, from daring to explore the unknown, and from working together to reach goals that once seemed impossible.</p>
        `,
      },
      {
        id: 3,
        title: 'The Beauty of Nebulae',
        excerpt:
          'Discover the stunning cosmic clouds where stars are born. These colorful formations are among the most beautiful objects in the universe.',
        date: '2024-01-05',
        category: 'Astronomy',
        image: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800&q=80',
        content: `
          <p>Nebulae are among the most beautiful and mysterious objects in the universe. These vast clouds of gas and dust serve as the birthplaces of stars, painting the cosmos in brilliant colors that have captivated astronomers and dreamers alike for centuries.</p>
          
          <h2>What Are Nebulae?</h2>
          <p>Nebulae (the plural of nebula) are enormous clouds of interstellar gas and dust. They can span hundreds of light-years across and contain enough material to form thousands of stars. The word "nebula" comes from the Latin word for "cloud," and indeed, these cosmic formations resemble ethereal clouds drifting through space.</p>
          
          <h2>Types of Nebulae</h2>
          <p>There are several types of nebulae, each with its own unique characteristics:</p>
          
          <h3>Emission Nebulae</h3>
          <p>These nebulae glow with their own light, energized by nearby hot stars. The ultraviolet radiation from these stars ionizes the gas, causing it to emit light in various colors. The famous Orion Nebula is a prime example, glowing in brilliant reds and blues.</p>
          
          <h3>Reflection Nebulae</h3>
          <p>Unlike emission nebulae, reflection nebulae don't produce their own light. Instead, they reflect the light from nearby stars. These nebulae often appear blue because blue light scatters more effectively than red light, similar to why our sky appears blue.</p>
          
          <h3>Dark Nebulae</h3>
          <p>Dark nebulae are so dense with dust that they block the light from stars behind them. They appear as dark silhouettes against the bright background of stars. The Horsehead Nebula is one of the most famous examples, creating a striking dark shape against the glowing gas behind it.</p>
          
          <h3>Planetary Nebulae</h3>
          <p>Despite their name, planetary nebulae have nothing to do with planets. They form when a dying star expels its outer layers, creating a glowing shell of gas. The Ring Nebula is a beautiful example of this type.</p>
          
          <h2>Star Formation</h2>
          <p>Nebulae are the nurseries where stars are born. Within these clouds, gravity causes regions of higher density to collapse. As these regions collapse, they heat up, eventually reaching temperatures and pressures high enough to ignite nuclear fusion—and a new star is born.</p>
          
          <h2>Famous Nebulae</h2>
          <p>Some nebulae have become iconic symbols of space exploration:</p>
          <ul>
            <li><strong>The Orion Nebula:</strong> One of the brightest nebulae, visible to the naked eye from Earth</li>
            <li><strong>The Eagle Nebula:</strong> Home to the famous "Pillars of Creation" captured by the Hubble Space Telescope</li>
            <li><strong>The Crab Nebula:</strong> The remnant of a supernova observed in 1054 AD</li>
            <li><strong>The Carina Nebula:</strong> One of the largest and brightest nebulae, containing some of the most massive stars known</li>
          </ul>
          
          <h2>Colors and Composition</h2>
          <p>The beautiful colors we see in nebulae come from different elements:</p>
          <ul>
            <li><strong>Red:</strong> Hydrogen gas (H-alpha emission)</li>
            <li><strong>Blue:</strong> Oxygen gas (OIII emission) or reflected starlight</li>
            <li><strong>Green:</strong> Oxygen gas (OII emission)</li>
            <li><strong>Pink/Magenta:</strong> Hydrogen and nitrogen emissions</li>
          </ul>
          
          <h2>Observing Nebulae</h2>
          <p>While some nebulae are visible to the naked eye under dark skies, most require telescopes to observe. The Hubble Space Telescope and the James Webb Space Telescope have provided stunning images that reveal the intricate structures and vibrant colors of these cosmic clouds in unprecedented detail.</p>
          
          <h2>The Life Cycle</h2>
          <p>Nebulae play a crucial role in the cosmic life cycle. They form from the remnants of dying stars and supernovae, and in turn, they give birth to new stars. This cycle of stellar death and rebirth has been ongoing for billions of years and will continue for billions more.</p>
          
          <h2>Scientific Importance</h2>
          <p>Studying nebulae helps astronomers understand:</p>
          <ul>
            <li>How stars form and evolve</li>
            <li>The composition of interstellar matter</li>
            <li>The processes that shape galaxies</li>
            <li>The conditions necessary for planet formation</li>
          </ul>
          
          <p>Nebulae remind us that the universe is not empty space, but a dynamic, ever-changing environment filled with beauty, mystery, and the raw materials of creation. They stand as testaments to the ongoing process of cosmic evolution, where death gives way to new life in an endless cycle of stellar birth and rebirth.</p>
        `,
      },
    ],
  },

  // Terms
  terms: {
    hero: {
      title: 'Terms and Conditions',
      subtitle: 'Last updated: January 2024',
    },
  },

  // Privacy
  privacy: {
    hero: {
      title: 'Privacy Policy',
      subtitle: 'Last updated: January 2024',
    },
  },

  // FAQ
  faq: {
    hero: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about space exploration',
    },
    items: [
      {
        question: 'What is space exploration?',
        answer:
          'Space exploration is the ongoing discovery and exploration of celestial structures in outer space by means of continuously evolving and growing space technology. While the study of space is carried out mainly by astronomers with telescopes, the physical exploration of space is conducted both by uncrewed robotic space probes and human spaceflight.',
      },
      {
        question: 'How do astronauts survive in space?',
        answer:
          'Astronauts survive in space through advanced life support systems that provide oxygen, remove carbon dioxide, regulate temperature and humidity, and manage waste. They wear specialized spacesuits when outside the spacecraft, which protect them from the vacuum of space, extreme temperatures, and radiation. The International Space Station has sophisticated systems that recycle air and water to support long-duration missions.',
      },
      {
        question: 'What is the purpose of Mars exploration?',
        answer:
          "Mars exploration aims to understand the planet's geology, climate, and potential for past or present life. Scientists study Mars to learn about planetary evolution, search for signs of ancient life, and prepare for potential human colonization. Missions like the Mars rovers have revealed evidence of ancient water flows and habitable environments, bringing us closer to understanding if life ever existed on the Red Planet.",
      },
      {
        question: 'How far away is the Moon?',
        answer:
          "The Moon is approximately 384,400 kilometers (238,855 miles) away from Earth on average. This distance varies slightly due to the Moon's elliptical orbit, ranging from about 363,300 km (225,700 miles) at its closest point (perigee) to 405,500 km (252,000 miles) at its farthest point (apogee).",
      },
      {
        question: 'What are nebulae?',
        answer:
          'Nebulae are vast clouds of gas and dust in space, often called the "birthplaces of stars." They can be formed from the remnants of dying stars or from regions where new stars are being born. Nebulae come in various types including emission nebulae (which glow with their own light), reflection nebulae (which reflect starlight), and dark nebulae (which block light). The most famous example is the Orion Nebula, visible to the naked eye.',
      },
      {
        question: 'Can humans live on other planets?',
        answer:
          'While humans cannot currently live on other planets without life support systems, scientists are actively researching the possibility. Mars is considered the most viable option due to its relative proximity, presence of water ice, and similar day length. However, challenges include extreme temperatures, radiation exposure, lack of breathable atmosphere, and the need for sustainable food and water production. Ongoing research and future missions aim to address these challenges.',
      },
      {
        question: 'What is a galaxy?',
        answer:
          'A galaxy is a massive, gravitationally bound system consisting of stars, stellar remnants, interstellar gas, dust, and dark matter. Galaxies range in size from dwarfs with just a few hundred million stars to giants with one hundred trillion stars. Our Milky Way galaxy contains an estimated 100-400 billion stars and is just one of trillions of galaxies in the observable universe.',
      },
      {
        question: 'How do space telescopes work?',
        answer:
          "Space telescopes work by capturing light from distant objects in space using mirrors and detectors. Unlike ground-based telescopes, space telescopes are above Earth's atmosphere, which blocks and distorts light. This allows them to observe the universe in wavelengths like ultraviolet, X-ray, and infrared that don't reach the ground. The Hubble Space Telescope, for example, has provided stunning images and valuable scientific data about distant galaxies, nebulae, and exoplanets.",
      },
    ],
  },

  // Bottom Menu Configuration
  // Set to 'collapsed' to show only center button, 'expanded' to show full menu
  bottomMenu: {
    '/': 'expanded', // Homepage - full menu
    '/about': 'expanded', // About - full menu
    '/blog': 'expanded', // Blog - full menu
    '/faq': 'expanded', // FAQ - full menu
    '/contact': 'expanded', // Contact - full menu
    '/popup-demo': 'expanded', // Popup demo - full menu
    '/toast-demo': 'expanded', // Toast demo - full menu
    '/components-showcase': 'expanded', // Components showcase - full menu
    '/animations-demo': 'expanded', // Animations demo - full menu
    '/terms': 'collapsed', // Terms - collapsed (light content)
    '/privacy': 'collapsed', // Privacy - collapsed (light content)
    default: 'expanded', // Default for other pages (including /blog/[id])
  },

  // Toast Configuration
  toast: {
    defaultDuration: 5000,
    defaultPosition: 'top-right',
    defaultShowIcon: true,
    defaultShowProgress: true,
    defaultDismissible: true,
    messages: {
      success: 'Operation completed successfully! 🎉',
      error: 'Something went wrong. Please try again.',
      warning: 'Warning: This action cannot be undone.',
      info: "Here's some useful information for you.",
    },
  },

  // Popup Configuration
  popup: {
    defaultSize: 'medium',
    defaultType: 'info',
    defaultTrigger: 'click',
    defaultShowClose: true,
    labels: {
      openPopup: 'Open Popup',
      viewImage: 'View Image',
    },
    examples: [
      {
        id: 'info-popup-1',
        title: 'Space Exploration',
        content:
          'Space exploration is the ongoing discovery and exploration of celestial structures in outer space. It has expanded our understanding of the universe and continues to inspire generations.',
        type: 'info',
        size: 'small',
      },
      {
        id: 'image-popup-1',
        title: 'Mars Surface',
        image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1200&q=80',
        type: 'image',
        size: 'medium',
      },
      {
        id: 'large-popup-1',
        title: 'The Cosmos Awaits',
        content:
          'The universe is vast and mysterious, filled with billions of galaxies, each containing billions of stars. From the smallest particles to the largest cosmic structures, space continues to amaze and inspire us. Every discovery brings us closer to understanding our place in the cosmos.',
        type: 'info',
        size: 'large',
      },
    ],
  },

  // Component Showcase Configuration
  components: {
    hero: {
      title: 'Component Showcase',
      subtitle: 'Cool animations and interactions',
    },
    flipCards: [
      {
        frontTitle: 'Mars',
        frontContent: 'Hover to flip',
        backTitle: 'The Red Planet',
        backContent:
          'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.',
        image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80',
        flipOn: 'hover',
      },
      {
        frontTitle: 'Moon',
        frontContent: 'Click to flip',
        backTitle: 'Lunar Surface',
        backContent:
          "The Moon is Earth's only natural satellite, orbiting at an average distance of 384,400 km.",
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80',
        flipOn: 'click',
      },
      {
        frontTitle: 'Galaxy',
        frontContent: 'Hover to explore',
        backTitle: 'Spiral Galaxy',
        backContent:
          'A galaxy is a gravitationally bound system of stars, stellar remnants, and dark matter.',
        image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80',
        flipOn: 'hover',
      },
    ],
    magneticCards: [
      {
        title: 'Astronaut',
        content: 'Move your mouse to see the magnetic effect',
        image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&q=80',
      },
      {
        title: 'Nebula',
        content: 'The card follows your cursor movement',
        image: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800&q=80',
      },
    ],
    glassCards: [
      {
        title: 'Earth',
        content: 'Beautiful glass effect with backdrop blur',
        image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&q=80',
      },
      {
        title: 'Stars',
        content: 'Modern glassmorphism design',
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80',
      },
    ],
    tiltCards: [
      {
        title: 'Space Walk',
        content: 'Tilt me with your mouse for 3D effect',
        image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&q=80',
      },
      {
        title: 'Cosmic',
        content: 'Perspective transforms on hover',
        image: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800&q=80',
      },
    ],
    hoverRevealCards: [
      {
        title: 'Mars Mission',
        content: 'Hover to reveal more information',
        revealContent:
          "Mars exploration missions have revealed fascinating insights about the Red Planet's geology, climate, and potential for past life.",
        image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80',
      },
      {
        title: 'Galaxy',
        content: 'Discover hidden content',
        revealContent:
          'Our Milky Way galaxy contains billions of stars and is just one of trillions of galaxies in the observable universe.',
        image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80',
      },
    ],
  },
};

// Helper function to get image path
export function getImagePath(path: string): string {
  if (path.startsWith('http')) {
    return path; // External URL
  }
  if (path.startsWith('/')) {
    return path; // Absolute path
  }
  return `/images/${path}`; // Relative to public/images
}
