import { database } from "../firebase";
import { push, get } from "firebase/database";
import { ref } from "firebase/database";

export const articleServices = () => {

    const publishArticle = async ({
        // author,
        // title,
        // imageUrl,
        // content,
        // ownerId
    }: {
            // author: string,
            // title: string,

            // imageUrl: string,
            // content: string,
            // ownerId: string
        }): Promise<{}> => {

        const newArticleRef = await push(ref(database, 'articles/'), {
            author: "John",
            title: "WOw, here are ou top 10 sunset spots",
            imageUrl: "imageUrl",
            content: "content",
            ownerId: "ownerId",
        });

        const newArticleId = newArticleRef.key;

        const articleSnapshot = await get(newArticleRef);
        const newArticleData = articleSnapshot.val();

        const resultObj = { ...newArticleData, id: newArticleId }

        return resultObj;
    }


    return {
        publishArticle,
    }
}