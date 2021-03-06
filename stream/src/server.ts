import 'reflect-metadata';
import './utils/connection';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import CategoryResolver from './graphql/category/CategoryResolver';

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [ CategoryResolver ],
    });

    const server = new ApolloServer({ schema });

    server.listen({ port: 4100 }, () => console.log('running'));
}
bootstrap();