import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand, ScanCommandInput } from "@aws-sdk/lib-dynamodb";

export const listDynamoDB = async (params: ScanCommandInput) => {
    const client = new DynamoDBClient({ region: process.env.AWS_REGION });
    const docClient = DynamoDBDocumentClient.from(client);
    const command = new ScanCommand(params);

    try {
        return await docClient.send(command);
    } catch (err) {
        console.error(err);
        throw new Error('Error adding component');
    }
};
