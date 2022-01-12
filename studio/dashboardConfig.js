export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-event-studio-cvc98bga',
                  apiId: '2557c34f-cd92-4a2a-bcfc-c6912cce901b'
                },
                {
                  buildHookId: '61df346dcca44134ff7ee15b',
                  title: 'Events Website',
                  name: 'sanity-nuxt-event-web',
                  apiId: '6d8f0742-abe1-4cc6-91f0-1461dc3b505e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/estudiooka/sanity-nuxt-event',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-event-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
