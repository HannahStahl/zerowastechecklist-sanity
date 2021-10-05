import S from '@sanity/desk-tool/structure-builder';
import schemas from './schemas';

export default () => {
  const topLevelSchemaNames = ['items', 'blogPost'];
  const topLevelSchemas = schemas.filter(({ name }) => topLevelSchemaNames.includes(name));
  return (
    S.list()
      .title('Content')
      .items(
        topLevelSchemas.map(({ name, title }) => {
          switch (name) {
            case 'items':
              return (
                S.listItem()
                  .title(title)
                  .child(S.editor().schemaType(name).documentId(name).title(title))
              );
            case 'blogPost':
              return (
                S.listItem()
                  .title('Blog')
                  .child(S.documentTypeList(name).title('Blog'))
              );
          }
        }),
      )
  );
};
