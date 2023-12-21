export const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Comfy API',
        version: '1.0.0',
        description: 'This is a REST API for Comfy',
      },
      servers: [
        {
          url: 'http://localhost:3000',
        },
      ],
    },
    apis: ['./src/**/*.ts'],
  };