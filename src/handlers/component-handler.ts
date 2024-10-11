import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { ComponentItem } from "../models/component-item";
import { addComponent } from "../services/component-service";

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const payload:ComponentItem = JSON.parse(event.body || '{}');

        if (!payload.name || !payload.html || !payload.order) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "All 'name','html' and 'order' fields are required" })
            };
        }

        await addComponent(payload)

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Component created successfully' }),
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: error.message,
            }),
        };
    }
};
