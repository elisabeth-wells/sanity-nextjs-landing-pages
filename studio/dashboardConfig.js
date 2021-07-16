export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60f21cfadf12b91acb8c6bd5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-oksi1azd',
                  apiId: '71eac111-21fd-4e96-9962-f0bc5836a9a4'
                },
                {
                  buildHookId: '60f21cfabf06fe1de83565de',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-t7vmfqpp',
                  apiId: 'dbeeac6b-bf71-4999-8101-486fdb6945f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elisabeth-wells/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-t7vmfqpp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
