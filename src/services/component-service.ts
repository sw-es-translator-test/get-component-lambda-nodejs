import { ScanCommandInput } from "@aws-sdk/lib-dynamodb";
import { listDynamoDB } from "../utils/db-client";

export const addComponent = async (): Promise<any> => {
    const params: ScanCommandInput = {
        TableName: "component",
    };

    try {
        const data = await listDynamoDB(params);
        return data.Items;
    } catch (error) {
        console.log(error);
        throw new Error('Error adding component');
    }
};
