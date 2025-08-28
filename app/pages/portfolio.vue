.<script setup lang="ts">
import RLLayoutBox from "~/components/temp/RLLayoutBox.vue";
import RLPlaceholder from "~/components/temp/RLPlaceholder.vue";
useHead({
  title: 'me.portfolio',
});

const calculateAge = (birthDateString) => {
  const today = new Date()
  const birthDate = new Date(birthDateString)
  const birthYear = birthDate.getFullYear()
  const currentYear = today.getFullYear()
  const age = currentYear - birthYear

  const hasBirthdayPassed = today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate())

  return hasBirthdayPassed ? age : age - 1
}

const englishProgress = ref(100)
const portugueseProgress = ref(100)
const spanishProgress = ref(50)
const romanianProgress = ref(25)
</script>

<template>
  <RLLayoutBox
    direction="horizontal"
    gap="xl"
    class="max-w-512 mt-12 mb-12"
  >
    <RLLayoutBox
      direction="vertical"
      padding="lg"
      gap="lg"
      class="w-[320px] h-fit bg-neutral-900 border-1 border-primary-500"
    >
      <RLLayoutBox
        direction="vertical"
        gap="sm"
        align-items="center"
        justify-content="center"
      >
        <NuxtImg src="/people/daniel-marchi.webp" alt="Daniel Marchi" class="rounded-full h-48 w-48"/>
        <h1 class="text-white">Daniel Marchi</h1>
        <RLLayoutBox
          direction="horizontal"
          gap="xs"
          align-items="center"
        >
          <RLButton variant="ghost" color="neutral" icon="general:location" to="https://en.wikipedia.org/wiki/Curitiba">Curitiba, Brazil</RLButton>
        </RLLayoutBox>
        <RLLayoutBox
          direction="horizontal"
          gap="md"
        >
          <RLButton variant="ghost" icon="third-party:linkedin" to="https://www.linkedin.com/daniel-marchi"/>
          <RLButton variant="ghost" icon="third-party:github" to="https://www.github.com/idantitydotme"/>
          <RLButton variant="ghost" icon="third-party:instagram" to="https://www.instagram.com/idantity.me"/>
        </RLLayoutBox>
        <RLLayoutBox
          direction="horizontal"
          gap="sm"
          align-items="center"
        >
          <div class="rounded-full bg-success-500 h-[8px] w-[8px]"/>
          <span class="text-white text-xs">Available for new projects</span>
        </RLLayoutBox>
      </RLLayoutBox>
      <RLLayoutBox
          direction="vertical"
          gap="sm"
      >
        <RLLayoutBox
            direction="horizontal"
            gap="md"
            align-items="center"
        >
          <RLIcon name="general:about" size="md" color="primary-500"/>
          <h5 class="text-white">About Me</h5>
        </RLLayoutBox>
        <RLSeparator/>
        <ul class="text-white">
          <li><span class="text-white text-sm"><strong>Name:</strong> Daniel Marchi</span></li>
          <li><span class="text-white text-sm"><strong>Gender:</strong> Male</span></li>
          <li><span class="text-white text-sm"><strong>Pronouns:</strong> He / Him</span></li>
          <li><span class="text-white text-sm"><strong>Nationality:</strong> Brazilian</span></li>
          <li><span class="text-white text-sm"><strong>Age:</strong> {{ calculateAge('1997-04-30') }}</span></li>
        </ul>
      </RLLayoutBox>
      <RLLayoutBox
        direction="vertical"
        gap="sm"
      >
        <RLLayoutBox
            direction="horizontal"
            gap="md"
            align-items="center"
        >
          <RLIcon name="general:language" size="md" color="primary-500"/>
          <h5 class="text-white">Languages</h5>
        </RLLayoutBox>
        <RLSeparator/>
        <ul class="flex flex-col gap-md">
          <li>
            <RLLayoutBox
                direction="vertical"
                gap="md"
            >
              <RLLayoutBox
                  direction="horizontal"
                  justify-content="between"
                  class="w-full"
              >
                <h6 class="text-white text-xs">English</h6>
                <span class="text-white text-xs">Fluent</span>
              </RLLayoutBox>
              <RLProgress v-model="englishProgress" />
            </RLLayoutBox>
          </li>
          <li>
            <RLLayoutBox
                direction="vertical"
                gap="sm"
            >
              <RLLayoutBox
                  direction="horizontal"
                  justify-content="between"
                  class="w-full"
              >
                <h6 class="text-white text-xs">Portuguese</h6>
                <span class="text-white text-xs">Fluent</span>
              </RLLayoutBox>
              <RLProgress v-model="portugueseProgress" />
            </RLLayoutBox>
          </li>
          <li>
            <RLLayoutBox
                direction="vertical"
                gap="sm"
            >
              <RLLayoutBox
                  direction="horizontal"
                  justify-content="between"
                  class="w-full"
              >
                <h6 class="text-white text-xs">Spanish</h6>
                <span class="text-white text-xs">Intermediate</span>
              </RLLayoutBox>
              <RLProgress v-model="spanishProgress" />
            </RLLayoutBox>
          </li>
          <li>
            <RLLayoutBox
                direction="vertical"
                gap="sm"
            >
              <RLLayoutBox
                  direction="horizontal"
                  justify-content="between"
                  class="w-full"
              >
                <h6 class="text-white text-xs">Romanian</h6>
                <span class="text-white text-xs">Basic</span>
              </RLLayoutBox>
              <RLProgress v-model="romanianProgress" />
            </RLLayoutBox>
          </li>
        </ul>
      </RLLayoutBox>
      <RLLayoutBox
          direction="vertical"
          gap="md"
      >
        <RLLayoutBox
            direction="horizontal"
            gap="md"
            align-items="center"
        >
          <RLIcon name="general:contact" size="md" color="primary-500"/>
          <h5 class="text-white">Contact</h5>
        </RLLayoutBox>
        <RLSeparator/>
        <RLLayoutBox
          direction="horizontal"
          gap="md"
          align-items="center"
        >
          <RLIcon name="general:mail" size="md"/>
          <RLLayoutBox
            direction="vertical"
            gap="sm"
          >
            <h6 class="text-white">Email</h6>
            <span class="text-white text-sm">daniel.whenever999@passmail.net</span>
          </RLLayoutBox>
        </RLLayoutBox>
        <RLLayoutBox
            direction="horizontal"
            gap="md"
            align-items="center"
        >
          <RLIcon name="general:phone" size="md"/>
          <RLLayoutBox
              direction="vertical"
              gap="sm"
          >
            <h6 class="text-white">Phone</h6>
            <span class="text-white text-sm">+55 (41) 9 9973 5987</span>
          </RLLayoutBox>
        </RLLayoutBox>
      </RLLayoutBox>
    </RLLayoutBox>
    <RLLayoutBox
      direction="vertical"
      gap="xl"
      class="w-full max-w-[1280px]"
    >
      <RLLayoutBox
        tag="section"
        padding="lg"
        gap="lg"
        class="bg-neutral-900 border-1 border-primary-500 p-lg"
      >
        <RLLayoutBox
            direction="vertical"
            gap="md"
        >
          <RLLayoutBox
              direction="horizontal"
              gap="md"
              align-items="center"
          >
            <RLIcon name="general:wrench" size="md" color=""/>
            <h2 class="text-white">Skills</h2>
          </RLLayoutBox>
          <RLSeparator/>
        </RLLayoutBox>
        <h3>Web Development</h3>
        <RLPlaceholder class="h-12"/>
        <h3>Game Development</h3>
        <RLPlaceholder class="h-12"/>
        <h4 class="text-center">Design Philosophies</h4>
        <RLLayoutBox
            direction="horizontal"
            gap="lg"
            justify-content="between"
        >
          <RLPlaceholder class="w-full h-64"/>
          <RLPlaceholder class="w-full h-64"/>
          <RLPlaceholder class="w-full h-64"/>
        </RLLayoutBox>
      </RLLayoutBox>
      <RLLayoutBox
          tag="section"
          direction="vertical"
          padding="lg"
          gap="lg"
          class="bg-neutral-900 border-1 border-primary-500"
      >
        <RLLayoutBox
            direction="vertical"
            gap="md"
        >
          <RLLayoutBox
              direction="horizontal"
              gap="md"
              align-items="center"
          >
            <RLIcon name="general:wrench" size="md" color=""/>
            <h2 class="text-white">Technologies</h2>
          </RLLayoutBox>
          <RLSeparator/>
        </RLLayoutBox>
        <RLLayoutBox
          direction="vertical"
          gap="sm"
        >
          <h3>Web Development</h3>
          <RLSeparator/>
        </RLLayoutBox>
        <RLLayoutBox
          direction="horizontal"
          gap="lg"
          class="grid grid-cols-4"
        >
          <RLLayoutBox
            direction="vertical"
            gap="md"
          >
            <h4>Languages & Frameworks</h4>
            <ul class="flex flex-col gap-md">
              <li><RLButton block variant="subtle" color="neutral" icon="third-party:typescript" to="https://www.typescriptlang.org/" class="justify-start">Typescript</RLButton></li>
              <li><RLButton block variant="subtle" color="neutral" icon="third-party:vue" to="https://vuejs.org/" class="justify-start">Vue</RLButton></li>
              <li><RLButton block variant="subtle" color="neutral" icon="third-party:nuxt" to="https://nuxt.com/" class="justify-start">Nuxt</RLButton></li>
              <li><RLButton block variant="subtle" color="neutral" icon="third-party:tailwind" to="https://tailwindcss.com/" class="justify-start">Tailwind</RLButton></li>
            </ul>
          </RLLayoutBox>
          <RLLayoutBox
            direction="vertical"
            gap="md"
          >
            <h4>Development Environment</h4>
            <ul class="flex flex-col gap-md">
              <li><RLButton block variant="subtle" color="neutral" icon="third-party:webstorm" to="https://www.jetbrains.com/webstorm/" class="justify-start">WebStorm</RLButton></li>
            </ul>
          </RLLayoutBox>
          <RLLayoutBox
              direction="vertical"
              gap="md"
          >
            <h4>Build & Package</h4>
            <ul class="flex flex-col gap-md">
              <li><RLButton block variant="subtle" color="neutral" icon="third-party:vite" to="https://vite.dev/" class="justify-start">Vite</RLButton></li>
              <li><RLButton block variant="subtle" color="neutral" icon="third-party:pnpm" to="https://pnpm.io/" class="justify-start">pnpm</RLButton></li>
              <li><RLButton block variant="subtle" color="neutral" icon="third-party:biome" to="https://biomejs.dev/" class="justify-start">Biome</RLButton></li>
            </ul>
          </RLLayoutBox>
          <RLLayoutBox
            direction="vertical"
            gap="md"
          >
            <h4>Deployment</h4>
            <ul class="flex flex-col gap-md">
              <li><RLButton block variant="subtle" color="neutral" icon="third-party:vercel" to="https://vercel.com/" class="justify-start">Vercel</RLButton></li>
              <li><RLButton block variant="subtle" color="neutral" icon="third-party:neon" to="https://neon.com/" class="justify-start">Neon</RLButton></li>
            </ul>
          </RLLayoutBox>
        </RLLayoutBox>
        <RLLayoutBox
            direction="vertical"
            gap="sm"
        >
          <h3>Game Development</h3>
          <RLSeparator/>
        </RLLayoutBox>
        <RLLayoutBox
          direction="horizontal"
          gap="lg"
          class="grid grid-cols-4"
        >
          <RLLayoutBox
              direction="vertical"
              gap="md"
          >
            <h4>Languages & Frameworks</h4>
            <ul class="flex flex-col gap-md">
              <li><RLButton block variant="subtle" color="neutral" icon="third-party:c++" to="https://isocpp.org/" class="justify-start">C++</RLButton></li>
              <li><RLButton block variant="subtle" color="neutral" icon="third-party:unreal-engine" to="https://www.unrealengine.com/" class="justify-start">Unreal Engine</RLButton></li>
            </ul>
          </RLLayoutBox>
          <RLLayoutBox
            direction="vertical"
            gap="md"
          >
            <h4>Development Environment</h4>
            <ul class="flex flex-col gap-md">
              <li><RLButton block variant="subtle" color="neutral" icon="third-party:rider" to="https://www.jetbrains.com/rider/" class="justify-start">Rider</RLButton></li>
            </ul>
          </RLLayoutBox>
        </RLLayoutBox>
        <RLLayoutBox
            direction="vertical"
            gap="sm"
        >
          <h3>Shared Technologies</h3>
          <RLSeparator/>
        </RLLayoutBox>
        <RLLayoutBox
          direction="horizontal"
          gap="lg"
          class="grid grid-cols-4"
        >
          <RLLayoutBox
              direction="vertical"
              gap="md"
          >
            <h4>Data Management</h4>
            <ul class="flex flex-col gap-md">
              <li><RLButton block variant="subtle" color="neutral" icon="third-party:postgresql" to="https://www.postgresql.org/" class="justify-start">PostgreSQL</RLButton></li>
              <li><RLButton block variant="subtle" color="neutral" icon="third-party:drizzle" to="https://orm.drizzle.team/" class="justify-start">Drizzle</RLButton></li>
            </ul>
          </RLLayoutBox>
          <RLLayoutBox
              direction="vertical"
              gap="md"
          >
            <h4>Authentication</h4>
            <ul class="flex flex-col gap-md">
              <li><RLButton block variant="subtle" color="neutral" icon="third-party:clerk" to="https://clerk.com/" class="justify-start">Clerk</RLButton></li>
            </ul>
          </RLLayoutBox>
          <RLLayoutBox
              direction="vertical"
              gap="md"
          >
            <h4>Project Management</h4>
            <ul class="flex flex-col gap-md">
              <li><RLButton block variant="subtle" color="neutral" icon="third-party:git" to="https://git-scm.com/" class="justify-start">Git</RLButton></li>
              <li><RLButton block variant="subtle" color="neutral" icon="third-party:p4" to="https://www.perforce.com/products/helix-core/" class="justify-start">P4</RLButton></li>
              <li><RLButton block variant="subtle" color="neutral" icon="third-party:youtrack" to="https://www.jetbrains.com/youtrack/" class="justify-start">YouTrack</RLButton></li>
            </ul>
          </RLLayoutBox>
        </RLLayoutBox>
      </RLLayoutBox>
      <RLLayoutBox
        tag="section"
        direction="vertical"
        padding="lg"
        gap="lg"
        class="bg-neutral-900 border-1 border-primary-500"
      >
        <RLLayoutBox
          direction="vertical"
          gap="md"
        >
          <RLLayoutBox
              direction="horizontal"
              gap="md"
              align-items="center"
          >
            <RLIcon name="general:education" size="md" color=""/>
            <h2 class="text-white">Education</h2>
          </RLLayoutBox>
          <RLSeparator/>
        </RLLayoutBox>
        <RLCard variant="subtle">
          <RLLayoutBox
            direction="vertical"
            gap="xs"
          >
            <h3 class="text-white">Technologist of Digital Games</h3>
            <span class="text-sm text-neutral-300">PUCPR - Pontifícia Universidade Católica do Paraná</span>
            <span class="text-xs text-neutral-400">2020 - 2022</span>
          </RLLayoutBox>
        </RLCard>
        <RLCard variant="subtle">
          <RLLayoutBox
            direction="vertical"
            gap="xs"
          >
            <h3 class="text-white">Bachelor of Music</h3>
            <span class="text-sm text-neutral-300">UFPR - Universidade Federal do Paraná</span>
            <span class="text-xs text-neutral-400">2018 - 2022</span>
          </RLLayoutBox>
        </RLCard>
      </RLLayoutBox>
      <RLLayoutBox
          tag="section"
          direction="vertical"
          padding="lg"
          gap="lg"
          class="bg-neutral-900 border-1 border-primary-500"
      >
        <RLLayoutBox
            direction="vertical"
            gap="md"
        >
          <RLLayoutBox
              direction="horizontal"
              gap="md"
              align-items="center"
          >
            <RLIcon name="general:certification" size="md" color=""/>
            <h2 class="text-white">Certifications</h2>
          </RLLayoutBox>
          <RLSeparator/>
        </RLLayoutBox>
      </RLLayoutBox>
      <RLLayoutBox
          tag="section"
          direction="vertical"
          padding="lg"
          gap="lg"
          class="bg-neutral-900 border-1 border-primary-500"
      >
        <RLLayoutBox
            direction="vertical"
            gap="md"
        >
          <RLLayoutBox
              direction="horizontal"
              gap="md"
              align-items="center"
          >
            <RLIcon name="general:job" size="md" color=""/>
            <h2 class="text-white">Experience</h2>
          </RLLayoutBox>
          <RLSeparator/>
        </RLLayoutBox>
        <RLCard variant="subtle">
          <RLLayoutBox
            direction="vertical"
            gap="xs"
          >
            <h3 class="text-white">Junior Game Programmer</h3>
            <span class="text-sm text-neutral-300"><a href="https://compass.uol">Compass.UOL</a></span>
            <span class="text-xs text-neutral-400">Nov 2022 - Mar 2023</span>
            <ul class="list-disc list-inside text-white">
              <li><span class="text-white">Development of real-time 3D virtual experiences related to E-Commerce in Unreal Engine.</span></li>
              <li><span class="text-white">Elaboration of high-fidelity interface mockups.</span></li>
              <li><span class="text-white">Project documentation and comparative analytical breakdowns for stakeholders.</span></li>
            </ul>
          </RLLayoutBox>
        </RLCard>
        <RLCard variant="subtle">
          <RLLayoutBox
            direction="vertical"
            gap="xs"
          >
            <h3 class="text-white">Trainee Game Programmer</h3>
            <span class="text-sm text-neutral-300"><a href="https://compass.uol">Compass.UOL</a></span>
            <span class="text-xs text-neutral-400">Jul 2021 - Oct 2021</span>
            <ul class="list-disc list-inside text-white">
              <li><span class="text-white">Development of real-time 3D virtual experiences related to E-Commerce in Unreal Engine.</span></li>
            </ul>
          </RLLayoutBox>
        </RLCard>
        <RLCard variant="subtle">
          <RLLayoutBox
            direction="vertical"
            gap="xs"
          >
            <h3 class="text-white">Intern Game Programmer</h3>
            <span class="text-sm text-neutral-300"><a href="https://compass.uol">Compass.UOL</a></span>
            <span class="text-xs text-neutral-400">Feb 2021 - Jun 2021</span>
            <ul class="list-disc list-inside text-white">
              <li><span class="text-white">Training exercises and problem solving activities in Unreal Engine.</span></li>
            </ul>
          </RLLayoutBox>
        </RLCard>
      </RLLayoutBox>
    </RLLayoutBox>
  </RLLayoutBox>
</template>

<style scoped>

</style>