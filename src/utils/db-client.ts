import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, PutCommandInput } from "@aws-sdk/lib-dynamodb";

export const putDynamoDB = async (params: PutCommandInput) => {
    const client = new DynamoDBClient({ region: process.env.AWS_REGION });
    const docClient = DynamoDBDocumentClient.from(client);
    const command = new PutCommand(params);

    try {
        await docClient.send(command);
    } catch (err) {
        console.error(err);
        throw new Error('Error adding component');
    }
};
