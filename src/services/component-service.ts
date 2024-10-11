import { PutCommandInput } from "@aws-sdk/lib-dynamodb";
import { ComponentItem } from "../models/component-item";
import { putDynamoDB } from "../utils/db-client";

export const addComponent = async (item: ComponentItem): Promise<void> => {
    const params: PutCommandInput = {
        TableName: "component",
        Item: item
    };

    try {
        await putDynamoDB(params);
    } catch (error) {
        console.log(error);
        throw new Error('Error adding component');
    }
};
