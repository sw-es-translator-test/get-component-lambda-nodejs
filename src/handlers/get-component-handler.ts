import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { addComponent } from "../services/component-service";

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const items = await addComponent()

        return {
            statusCode: 200,
            body: JSON.stringify(items),
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
