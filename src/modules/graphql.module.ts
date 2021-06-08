import { join } from 'path'
import { GraphQLModule as GQLModule } from '@nestjs/graphql'

// Scalars úteis já definidas no plugin graphql-scalars
import { DateResolver, DateTimeResolver, JSONResolver, EmailAddressResolver, ObjectIDResolver, URLResolver } from 'graphql-scalars'

const GraphQLModule = GQLModule.forRoot({
  typePaths: ['./**/*.graphql'],
  definitions: {
    path: join(process.cwd(), 'src/graphql.ts'),
    outputAs: 'class'
  },
  resolvers: {
    ['Date']: DateResolver,
    ['DateTime']: DateTimeResolver,
    ['EmailAddress']: EmailAddressResolver,
    ['JSON']: JSONResolver,
    ['ObjectID']: ObjectIDResolver,
    ['URL']: URLResolver
  }
})

export default GraphQLModule
