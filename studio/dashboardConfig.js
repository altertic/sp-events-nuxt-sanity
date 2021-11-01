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
                  name: 'sp-events-nuxt-sanity-studio',
                  apiId: 'e8808e97-ae86-4b38-8f69-11a4008862e2'
                },
                {
                  buildHookId: '617f7d839159be7fe6e8ae2a',
                  title: 'Events Website',
                  name: 'sp-events-nuxt-sanity',
                  apiId: 'f10e180a-468f-4f89-b830-44980f63901b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/altertic/sp-events-nuxt-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sp-events-nuxt-sanity.netlify.app', category: 'apps'}
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
