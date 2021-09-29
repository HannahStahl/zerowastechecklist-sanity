import S from '@sanity/desk-tool/structure-builder';
import pluralize from 'pluralize';
import schemas from './schemas';

export default () =>
  S.list()
    .title('Content')
    .items(
      schemas.map(({ name, title }) => {
        if (name === 'categories') {
          return S.listItem()
            .title(title)
            .child(S.editor().schemaType(name).documentId(name).title(title));
        } else {
          const pluralizedTitle = pluralize(title);
          return S.listItem().title(pluralizedTitle).child(
            S.documentTypeList(name).title(pluralizedTitle)
          );
        }
      }),
    );
